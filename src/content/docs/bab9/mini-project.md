---
title: "Mini Project: Generic Academic Repository"
description: Membangun aplikasi repositori akademik sekolah serbaguna berbasis terminal menggunakan kombinasi Class, Generic, dan Utility Types di TypeScript.
---

# Mini Project: Generic Academic Repository

## Tujuan Pembelajaran
Setelah menyelesaikan mini project ini, kamu diharapkan dapat:
- Membangun class repositori Generic (`Repository<T>`) lengkap dengan operasi CRUD.
- Menggunakan `Partial` untuk pengeditan data secara dinamis.
- Menggunakan `Pick` untuk menyaring kolom data laporan.
- Menghubungkan database sekolah dengan menu perintah sederhana di terminal.

---

## Pendahuluan

Kita akan membuat aplikasi **Generic Academic Repository**. Aplikasi ini akan bertindak sebagai mesin database di memori untuk mengelola data guru dan data siswa. Kita akan menggabungkan seluruh konsep dasar pemrograman (BAB 1–6), modular function (BAB 7), Class OOP (BAB 8), dengan teknik pengolahan tipe Generic (BAB 9).

---

## Fitur Aplikasi

1. Menyimpan data Guru dan data Siswa secara terpisah menggunakan satu class `Repository<T>`.
2. Menambah data baru dengan validasi ID unik.
3. Menghapus data berdasarkan ID.
4. Mengupdate data secara parsial menggunakan `Partial<T>`.
5. Mencetak laporan siswa berupa kartu ujian ringkas menggunakan `Pick<T, K>`.

---

## Visual Architecture

```text
                   Repository<T extends { id: number }>
                                    │
            ┌───────────────────────┴───────────────────────┐
            ▼                                               ▼
      Siswa[] database                                Guru[] database
      - tambah()                                      - tambah()
      - hapus()                                       - hapus()
      - update(id, Partial<Siswa>)                    - update(id, Partial<Guru>)
      - cetakKartu(Pick<Siswa, "id"|"nama">)          - cariBerdasarkanId()
```

---

## Mari Mencoba: Membuat Generic Repository Lengkap

Buat file baru bernama `src/bab9/aplikasi-siakad-generic.ts`:

```ts
// =====================================================
// MINI PROJECT: GENERIC ACADEMIC REPOSITORY
// Menggabungkan BAB 1 s.d. BAB 9
// =====================================================

// 1. Definisikan Interface Data Dasar
interface Siswa {
  id: number;
  nama: string;
  kelas: string;
  nilaiRataRata: number;
  catatanMedis?: string; // opsional & sensitif
}

interface Guru {
  id: number;
  nama: string;
  nip: number;
  mataPelajaran: string;
  gajiSponsor?: number; // opsional & sensitif
}

// 2. Class Generic Repository dengan Constraint ID
class Repository<T extends { id: number }> {
  private database: T[] = [];

  constructor(public namaDatabase: string) {}

  // Aksi C: Create (Tambah data dengan cek duplikasi)
  public tambah(item: T): boolean {
    const sudahAda = this.database.some((d) => d.id === item.id);
    if (sudahAda) {
      console.log(`  [${this.namaDatabase}]: Gagal, ID ${item.id} sudah digunakan!`);
      return false;
    }
    this.database.push(item);
    console.log(`  [${this.namaDatabase}]: Berhasil menambah data ID ${item.id}.`);
    return true;
  }

  // Aksi R: Read (Ambil Semua)
  public ambilSemua(): T[] {
    return this.database;
  }

  // Aksi R: Read (Cari berdasarkan ID)
  public cariBerdasarkanId(id: number): T | undefined {
    return this.database.find((d) => d.id === id);
  }

  // Aksi U: Update (Menggunakan Partial)
  public update(id: number, dataBaru: Partial<T>): boolean {
    const dataLama = this.cariBerdasarkanId(id);
    if (dataLama === undefined) {
      console.log(`  [${this.namaDatabase}]: Gagal update, ID ${id} tidak ditemukan.`);
      return false;
    }

    this.database = this.database.map((d) => {
      if (d.id === id) {
        return { ...d, ...dataBaru };
      }
      return d;
    });
    console.log(`  [${this.namaDatabase}]: Berhasil memperbarui data ID ${id}.`);
    return true;
  }

  // Aksi D: Delete (Hapus data)
  public hapus(id: number): boolean {
    const indeks = this.database.findIndex((d) => d.id === id);
    if (indeks === -1) {
      console.log(`  [${this.namaDatabase}]: Gagal hapus, ID ${id} tidak ditemukan.`);
      return false;
    }
    this.database.splice(indeks, 1);
    console.log(`  [${this.namaDatabase}]: Berhasil menghapus data ID ${id}.`);
    return true;
  }
}

// ── Fungsi Bantu Tampilan Laporan ──────────────────────

// Menggunakan Pick untuk mengambil kolom tertentu saja dari Siswa
type KartuUjian = Pick<Siswa, "id" | "nama" | "kelas">;

function cetakKartuUjian(siswa: KartuUjian): void {
  console.log("  ┌─────────────────────────────────┐");
  console.log("  │       KARTU UJIAN SISWA         │");
  console.log("  ├─────────────────────────────────┤");
  console.log(`  │ ID   : ${siswa.id.toString().padEnd(25)}│`);
  console.log(`  │ Nama : ${siswa.nama.padEnd(25)}│`);
  console.log(`  │ Kelas: ${siswa.kelas.padEnd(25)}│`);
  console.log("  └─────────────────────────────────┘");
}

// =====================================================
// SIMULASI UTAMA PROGRAM
// =====================================================

console.log("==============================================");
console.log("     SIAKAD GENERIC DATABASE SYSTEM v4.0");
console.log("==============================================");

// 1. Instansiasi Database Siswa
const dbSiswa = new Repository<Siswa>("DB_SISWA");

console.log("\n[Langkah 1]: Mendaftarkan Siswa Baru:");
dbSiswa.tambah({ id: 1, nama: "Putra", kelas: "XI RPL 1", nilaiRataRata: 82 });
dbSiswa.tambah({ id: 2, nama: "Dewi", kelas: "XI RPL 2", nilaiRataRata: 70, catatanMedis: "Alergi debu" });
dbSiswa.tambah({ id: 3, nama: "Citra", kelas: "XI RPL 1", nilaiRataRata: 95 });

// Coba tambah ID duplikat
dbSiswa.tambah({ id: 1, nama: "Andi Palsu", kelas: "XI", nilaiRataRata: 50 });

// 2. Tampilkan Kartu Ujian (Pick)
console.log("\n[Langkah 2]: Mencetak Kartu Ujian Siswa (Pick):");
const semuaSiswa = dbSiswa.ambilSemua();
semuaSiswa.forEach((siswa) => {
  // Hanya mengirimkan data Pick ke fungsi cetak
  const dataKartu: KartuUjian = {
    id: siswa.id,
    nama: siswa.nama,
    kelas: siswa.kelas
  };
  cetakKartuUjian(dataKartu);
});

// 3. Update Data secara Parsial (Partial)
console.log("\n[Langkah 3]: Melakukan Update Nilai Ujian Siswa:");
dbSiswa.update(2, { nilaiRataRata: 80 }); // dari 70 menjadi 80
dbSiswa.update(1, { kelas: "XII RPL 1" }); // naik kelas

// 4. Hapus Siswa dari Database
console.log("\n[Langkah 4]: Mengeluarkan Siswa dengan ID 3 (Citra):");
dbSiswa.hapus(3);

// 5. Tampilkan Statistik Akhir Siswa
console.log("\n=== DATABASE SISWA AKHIR ===");
console.log(dbSiswa.ambilSemua());

// 6. Instansiasi Database Guru (Membuktikan Reusability Generic Class)
console.log("\n[Langkah 5]: Membuat Database Guru terpisah:");
const dbGuru = new Repository<Guru>("DB_GURU");
dbGuru.tambah({ id: 101, nama: "Pak Budi", nip: 1987002, mataPelajaran: "TypeScript" });
dbGuru.tambah({ id: 102, nama: "Bu Ani", nip: 1990005, mataPelajaran: "Desain Grafis" });

console.log("\n=== DATABASE GURU AKHIR ===");
console.log(dbGuru.ambilSemua());
```

Jalankan dengan perintah:
```text
tsx src/bab9/aplikasi-siakad-generic.ts
```

---

## Penjelasan Alur Kode

1. **Reusability Class**: `class Repository<T>` berhasil mengelola objek `Siswa` dan objek `Guru` secara terpisah tanpa kita perlu menduplikat kode class repository.
2. **Generic Constraint**: Properti `T extends { id: number }` memastikan `.some(d => d.id)` dan `.findIndex(d => d.id)` aman dipanggil karena tipe data `T` dijamin memiliki properti `id`.
3. **Penyaringan Pick**: `type KartuUjian = Pick<Siswa, "id" | "nama" | "kelas">` membuang properti nilai dan catatan medis yang tidak relevan saat mencetak kartu ujian fisik di terminal.
4. **Pembaruan Partial**: `update(id, dataBaru: Partial<T>)` mempermudah pengeditan properti tunggal siswa secara aman.

---

## Latihan
1. Tambahkan database inventaris sekolah menggunakan class `Repository` kustom baru untuk data barang.
2. Definisikan interface `Barang` (id: number, nama: string, jumlah: number).
3. Lakukan operasi tambah, update, dan hapus barang pada database tersebut.

---

## Ringkasan
- Satu class `Repository<T>` bertindak sebagai engine database serbaguna.
- `Pick` dan `Partial` membantu memilah dan mengedit data objek secara presisi.
- TypeScript menjaga agar data di memori aman dari kesalahan tipe data runtime.

:::tip[Selesai Mini Project]
Selamat! Kamu telah merancang arsitektur database sekolah Generic yang sangat kuat. Laporkan pencapaianmu kepada gurumu.
:::
