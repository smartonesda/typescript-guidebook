---
title: "Implementasi Service Layer — BAB 11"
description: Membangun class SiswaService untuk menangani logika bisnis, perhitungan rata-rata, dan pemuatan tugas online secara asynchronous.
---

# Implementasi Service Layer

## Tujuan Pembelajaran
Setelah mengikuti halaman ini, kamu diharapkan dapat:
- Membuat file `siswa-service.ts` di folder `services/`.
- Menerapkan `implements ISiswaService` pada class service.
- Menghubungkan Service Layer dengan Repository Layer.
- Membuat fungsi asynchronous untuk mem-fetch data tugas dari internet.

---

## Pendahuluan
Layer Service bertindak sebagai "otak" aplikasi. Di sinilah logika hitung-menghitung kelulusan, penentuan grade, dan pemuatan tugas online via internet (Fetch API) diletakkan. Service meminta data mentah ke Repository, mengolahnya, lalu memberikan hasil bersihnya ke Presentation Layer.

---

## Penjelasan
Kita akan membangun class `SiswaService` di folder `src/services/`. Class ini mematuhi kontrak `ISiswaService` (BAB 7), mengontrol input nilai siswa menggunakan setter terproteksi, menghitung rata-rata, memformat persentase laporan, serta mem-fetch data eksternal dari internet menggunakan Fetch API (BAB 10).

---

## Analogi Kehidupan Sehari-hari: Koki Utama Restoran (SiswaService)
Mengimplementasikan class `SiswaService` seperti **mempekerjakan Koki Utama baru**:

```text
Instruksi Koki Utama (SiswaService):
- Jika pelayan minta menu baru ──► olah bahan mentah ──► racik resep ──► sajikan
- Jika asisten membawakan daging dari kulkas ──► potong ──► masak denda/bonus ──► sajikan matang
- Jika butuh bahan khusus dari pasar luar (API) ──► tunggu kurir datang (await) ──► campurkan ke masakan
```

Koki utama tidak menyimpan daging di sakunya (ia tidak mengelola database array). Ia meminta bahan ke asisten gudang (Repository), memprosesnya secara cerdas, lalu menghidangkannya ke piring pelayan (Presentation).

---

## Visual Illustration: Alur Aliran Data di Service

```text
main.ts ──► SiswaService.hitungRataRata() ──► Ambil array dari Repo ──► reduce() ──► hasil dikembalikan
```

---

## Live Coding: Implementasi SiswaService

### Langkah 1: Buat `src/services/siswa-service.ts`
```ts
import { ISiswaService } from "../interfaces/service-interface";
import { AcademicRepository } from "../repositories/academic-repository";
import { SiswaClass, TugasAPI } from "../models";
import { cetakGaris, formatPersen } from "../helpers/utility";

export class SiswaService implements ISiswaService {
  constructor(
    private siswaRepo: AcademicRepository<SiswaClass>,
    private batasLulus: number = 75
  ) {}

  // Aksi 1: Menambah Siswa Baru
  tambahSiswaBaru(nama: string, nis: string | number, kelas: string): void {
    const idBaru = this.siswaRepo.ambilSemua().length + 1;
    const siswa = new SiswaClass(idBaru, nama, 17, nis, kelas);
    
    const sukses = this.siswaRepo.tambah(siswa);
    if (sukses) {
      console.log(`  [Service]: Sukses menambah siswa ${nama}.`);
    } else {
      console.log(`  [Service]: Gagal, NIS atau ID sudah terdaftar.`);
    }
  }

  // Aksi 2: Update Nilai Ujian Siswa
  updateNilaiSiswa(nis: string | number, nilai: number): void {
    const daftarSiswa = this.siswaRepo.ambilSemua();
    const siswa = daftarSiswa.find((s) => s.nis === nis);

    if (siswa === undefined) {
      console.log(`  [Service]: Siswa dengan NIS ${nis} tidak ditemukan!`);
      return;
    }

    // Menggunakan setter terenkapsulasi
    siswa.nilaiRataRata = nilai;
    
    // Update data di repository
    this.siswaRepo.update(siswa.id, { nilaiRataRata: siswa.nilaiRataRata });
    console.log(`  [Service]: Berhasil memperbarui nilai ${siswa.nama}.`);
  }

  // Aksi 3: Menghitung Rata-rata Kelas
  hitungRataRataKelas(): number {
    const daftar = this.siswaRepo.ambilSemua();
    if (daftar.length === 0) return 0;
    const total = daftar.reduce((acc, curr) => acc + curr.nilaiRataRata, 0);
    return parseFloat((total / daftar.length).toFixed(2));
  }

  // Aksi 4: Mengambil Tugas Online Asynchronous (Fetch API)
  async muatTugasOnline(idTugas: number): Promise<string> {
    const url = `https://jsonplaceholder.typicode.com/todos/${idTugas}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Koneksi Gagal (Status HTTP: ${response.status})`);
    }
    const data: TugasAPI = await response.json();
    return data.title;
  }

  // Aksi 5: Mencetak Laporan Lengkap (Visual Laporan)
  tampilkanLaporanLengkap(): void {
    const daftar = this.siswaRepo.ambilSemua();
    cetakGaris();
    console.log("             LAPORAN NILAI KELAS AKADEMIK");
    cetakGaris();
    console.log("  No   NIS       Nama        Nilai    Status");
    cetakGaris();

    if (daftar.length === 0) {
      console.log("       (Belum ada data siswa terdaftar)");
    } else {
      let jumlahLulus = 0;
      daftar.forEach((s, indeks) => {
        const lulus = s.nilaiRataRata >= this.batasLulus;
        if (lulus) jumlahLulus++;
        const status = lulus ? "LULUS" : "REMEDIAL";
        
        console.log(
          `  ${(indeks + 1).toString().padEnd(4)}` +
          `[${s.nis.toString().padEnd(6)}] ` +
          `${s.nama.padEnd(10)}  ` +
          `${s.nilaiRataRata.toString().padEnd(8)} ` +
          `[${status}]`
        );
      });
      cetakGaris();
      const persen = (jumlahLulus / daftar.length) * 100;
      console.log(`  Rata-rata Kelas : ${this.hitungRataRataKelas()}`);
      console.log(`  Persentase Lulus: ${formatPersen(persen)}`);
    }
    cetakGaris();
  }
}
```

---

## Output
Ketika dipanggil, method `tampilkanLaporanLengkap` akan mencetak visual tabel laporan yang sejajar rapi di terminal konsol.

---

## Penjelasan Baris per Baris
- `async muatTugasOnline(idTugas: number)`: Ditandai dengan `async` karena melakukan pemanggilan HTTP Request `fetch` secara asynchronous (BAB 10).
- `const data: TugasAPI = await response.json();`: Menunggu konversi teks mentah response menjadi format JSON terstruktur (BAB 10).
- `siswa.nilaiRataRata = nilai;`: Memicu method `set` pada objek `SiswaClass` untuk melakukan validasi input 0-100 (BAB 8).

---

## Common Mistakes
- **Lupa await pada response.json()**: Mengira `.json()` bersifat synchronous. Jika lupa menulis `await`, data yang kamu peroleh akan bertipe `Promise { <pending> }` dan isinya tidak bisa dibaca.

---

## Tips
:::tip[Pemisahan Validasi UI]
Lakukan validasi tipe data dasar (seperti memastikan input adalah angka) di Presentation Layer (`main.ts`). Biarkan Service Layer hanya melakukan validasi logika bisnis (seperti pengecekan batas KKM).
:::

---

## Ringkasan
- Class service diletakkan di dalam folder `src/services/`.
- Mengimplementasikan interface `ISiswaService`.
- Menghubungkan data mentah repository dengan format visual presentation.
- Menangani pengambilan data API asynchronous lewat internet.

---

## Latihan
1. Buat file `siswa-service.ts` di folder `src/services/` komputermu.
2. Pastikan file terhubung dengan database `AcademicRepository` secara benar.
