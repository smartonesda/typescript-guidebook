---
title: "Mini Project: Aplikasi Sistem Akademik Berbasis OOP"
description: Membangun aplikasi manajemen data akademik sekolah interaktif menggunakan konsep Class, Inheritance, Getter/Setter, dan Array of Objects di TypeScript.
---

# Mini Project: Aplikasi Sistem Akademik Berbasis OOP

## Tujuan Pembelajaran
Setelah menyelesaikan mini project ini, kamu diharapkan dapat:
- Menggabungkan seluruh konsep OOP (Class, Constructor, Inheritance, Getter/Setter, Static) dalam satu aplikasi nyata.
- Memproses data koleksi bertipe objek secara dinamis.
- Memisahkan fungsi dan tanggung jawab kode secara modular dan terstruktur.

---

## Pendahuluan

Kita akan membangun aplikasi **Sistem Akademik Sekolah (SIAKAD) Interaktif** berbasis terminal. Aplikasi ini akan mensimulasikan penyimpanan database sekolah yang menampung data guru dan siswa, menghitung kelulusan, dan mencetak laporan rapi.

Project ini memadukan seluruh pilar pemrograman dari BAB 1 sampai BAB 8 untuk menghasilkan software yang kokoh dan mudah dirawat.

---

## Rancangan Struktur Aplikasi

Aplikasi ini dibangun dari class-class berikut:

1. **`interface IIdentitas`** — Kontrak dasar properti nama dan umur (BAB 7).
2. **`abstract class Manusia`** — Mengimplementasikan `IIdentitas` (BAB 8).
3. **`class Siswa`** — Turunan dari `Manusia`, memiliki properti nilai terenkapsulasi dengan getter-setter.
4. **`class Guru`** — Turunan dari `Manusia`, memiliki properti NIP dan mata pelajaran.
5. **`class RombonganBelajar`** — Mengelola data rombel kelas, menampung wali kelas, dan mengelola array siswa (tambah, update, hapus, cetak statistik).

---

## Mari Mencoba: Implementasi Program SIAKAD Lengkap

Buat file baru bernama `src/bab8/aplikasi-siakad.ts`:

```ts
// =====================================================
// MINI PROJECT: APLIKASI SISTEM AKADEMIK BERBASIS OOP
// Menggabungkan BAB 1 s.d. BAB 8
// =====================================================

// 1. Interface dasar (BAB 7)
interface IIdentitas {
  nama: string;
  umur: number;
}

// 2. Class Induk Abstrak
abstract class Manusia implements IIdentitas {
  constructor(public nama: string, public umur: number) {}

  abstract dapatkanStatusPeran(): string;
}

// 3. Class Anak: Guru
class Guru extends Manusia {
  constructor(
    nama: string,
    umur: number,
    public nip: number,
    public mataPelajaran: string
  ) {
    super(nama, umur);
  }

  dapatkanStatusPeran(): string {
    return `Guru ${this.mataPelajaran}`;
  }
}

// 4. Class Anak: Siswa dengan Enkapsulasi penuh
class Siswa extends Manusia {
  private _nilaiRataRata: number = 0;

  constructor(
    nama: string,
    umur: number,
    public nis: number
  ) {
    super(nama, umur);
  }

  // Getter & Setter
  get nilaiRataRata(): number {
    return this._nilaiRataRata;
  }

  set nilaiRataRata(nilaiBaru: number) {
    if (nilaiBaru >= 0 && nilaiBaru <= 100) {
      this._nilaiRataRata = nilaiBaru;
    } else {
      console.log(`  [Validasi]: Nilai ${nilaiBaru} tidak valid untuk ${this.nama}!`);
    }
  }

  dapatkanStatusPeran(): string {
    return "Siswa Aktif";
  }
}

// 5. Class Kelas (Rombongan Belajar)
class RombonganBelajar {
  private _daftarSiswa: Siswa[] = [];
  public static totalKelasDibuat: number = 0; // Properti static (BAB 8)

  constructor(
    public namaKelas: string,
    public waliKelas: Guru
  ) {
    RombonganBelajar.totalKelasDibuat++;
  }

  // Menambahkan siswa
  public tambahSiswa(s: Siswa): void {
    // Cek duplikasi NIS
    const sudahAda = this._daftarSiswa.some((siswa) => siswa.nis === s.nis);
    if (sudahAda) {
      console.log(`  [SIAKAD]: Gagal tambah, NIS ${s.nis} sudah dipakai!`);
      return;
    }
    this._daftarSiswa.push(s);
    console.log(`  [SIAKAD]: Siswa "${s.nama}" berhasil masuk kelas ${this.namaKelas}.`);
  }

  // Menghapus siswa berdasarkan NIS
  public hapusSiswa(nis: number): void {
    const indeks = this._daftarSiswa.findIndex((s) => s.nis === nis);
    if (indeks === -1) {
      console.log(`  [SIAKAD]: Gagal hapus, siswa NIS ${nis} tidak ditemukan.`);
      return;
    }
    const namaDihapus = this._daftarSiswa[indeks].nama;
    this._daftarSiswa.splice(indeks, 1);
    console.log(`  [SIAKAD]: Siswa "${namaDihapus}" (NIS ${nis}) berhasil dikeluarkan.`);
  }

  // Mengupdate nilai siswa
  public updateNilaiSiswa(nis: number, nilaiBaru: number): void {
    const siswa = this._daftarSiswa.find((s) => s.nis === nis);
    if (siswa === undefined) {
      console.log(`  [SIAKAD]: Gagal update, siswa NIS ${nis} tidak ditemukan.`);
      return;
    }
    siswa.nilaiRataRata = nilaiBaru; // memanggil setter otomatis
  }

  // Menghitung statistik kelas
  public hitungRataRataKelas(): number {
    if (this._daftarSiswa.length === 0) return 0;
    const total = this._daftarSiswa.reduce((acc, curr) => acc + curr.nilaiRataRata, 0);
    return parseFloat((total / this._daftarSiswa.length).toFixed(2));
  }

  // Cetak laporan visual kelas
  public tampilkanLaporan(): void {
    console.log("=".repeat(55));
    console.log(`      LAPORAN DATA KELAS: ${this.namaKelas.toUpperCase()}`);
    console.log("=".repeat(55));
    console.log(`  Wali Kelas   : ${this.waliKelas.nama}`);
    console.log(`  Peran        : ${this.waliKelas.dapatkanStatusPeran()}`);
    console.log(`  NIP          : ${this.waliKelas.nip}`);
    console.log("-".repeat(55));
    console.log("  No   NIS      Nama       Nilai    Status");
    console.log("-".repeat(55));

    if (this._daftarSiswa.length === 0) {
      console.log("       (Belum ada siswa terdaftar)");
    } else {
      this._daftarSiswa.forEach((s, indeks) => {
        const status = s.nilaiRataRata >= 75 ? "LULUS" : "REMEDIAL";
        console.log(
          `  ${(indeks + 1).toString().padEnd(4)}` +
          `[${s.nis.toString().padEnd(4)}] ` +
          `${s.nama.padEnd(10)} ` +
          `${s.nilaiRataRata.toString().padEnd(8)} ` +
          `[${status}]`
        );
      });
    }

    console.log("-".repeat(55));
    console.log(`  Rata-rata Nilai Kelas : ${this.hitungRataRataKelas()}`);
    console.log(`  Total Siswa Terdaftar : ${this._daftarSiswa.length}`);
    console.log("=".repeat(55));
  }
}

// =====================================================
// RUNNING SIMULATION
// =====================================================

console.log("==============================================");
console.log("   SISTEM INFORMASI AKADEMIK SMK AMANAH v3.0");
console.log("==============================================");

// 1. Instansiasi Wali Kelas (Guru)
const pakBudi = new Guru("Pak Budi Santoso", 36, 1987002, "Web Development");

// 2. Instansiasi Kelas Rombel
const kelasXIRpl = new RombonganBelajar("XI RPL 1", pakBudi);

// 3. Menambah Siswa-Siswa
console.log("\n[Proses 1]: Pendaftaran Siswa Baru:");
const s1 = new Siswa("Putra", 17, 1001);
const s2 = new Siswa("Dewi", 16, 1002);
const s3 = new Siswa("Citra", 17, 1003);

kelasXIRpl.tambahSiswa(s1);
kelasXIRpl.tambahSiswa(s2);
kelasXIRpl.tambahSiswa(s3);

// 4. Menginput Nilai Siswa via Method updateNilaiSiswa
console.log("\n[Proses 2]: Input Nilai Awal:");
kelasXIRpl.updateNilaiSiswa(1001, 88); // Putra
kelasXIRpl.updateNilaiSiswa(1002, 60); // Dewi
kelasXIRpl.updateNilaiSiswa(1003, 95); // Citra

// 5. Cetak Laporan Pertama
kelasXIRpl.tampilkanLaporan();

// 6. Uji Coba Update & Validasi Setter
console.log("\n[Proses 3]: Remediasi Nilai Dewi:");
kelasXIRpl.updateNilaiSiswa(1002, 80); // Berhasil update
kelasXIRpl.updateNilaiSiswa(1001, 150); // Gagal (Validasi terpicu!)

// 7. Uji Coba Hapus Siswa (Keluarkan dari Kelas)
console.log("\n[Proses 4]: Mengeluarkan Siswa NIS 1003 (Citra):");
kelasXIRpl.hapusSiswa(1003);

// 8. Cetak Laporan Akhir
kelasXIRpl.tampilkanLaporan();

console.log(`\nStatistik Global: Total Kelas yang Dibuat = ${RombonganBelajar.totalKelasDibuat}`);
```

Jalankan dengan perintah:
```text
tsx src/bab8/aplikasi-siakad.ts
```

---

## Penjelasan Alur Kode

1. **Interface & Abstract Class**: `Manusia` mengimplementasikan `IIdentitas` dan mewariskan properti ke `Guru` dan `Siswa`. Ini meminimalkan duplikasi properti dasar.
2. **Enkapsulasi Nilai**: Nilai siswa tidak diakses langsung dari luar. Method `updateNilaiSiswa` pada kelas memanggil setter `nilaiRataRata` yang memiliki filter keamanan `0-100`.
3. **Database Kelas Terisolasi**: Array `_daftarSiswa` bertipe `private`, sehingga di luar class dilarang keras melakukan manipulasi array langsung (seperti `.push()` liar). Semua manipulasi wajib melalui method resmi: `tambahSiswa()`, `hapusSiswa()`, dan `updateNilaiSiswa()`.
4. **Static Member**: `totalKelasDibuat` memantau berapa kali class instansi dipanggil secara global di luar objek individu.

---

## Latihan
1. Modifikasi program di atas: tambahkan satu method static `sapaSekolah()` pada class `RombonganBelajar` yang mencetak teks: `"Selamat datang di SMK Negeri Amanah!"`.
2. Panggil method static tersebut di awal simulasi program.

---

## Ringkasan
- Mini project SIAKAD menggabungkan pilar Enkapsulasi, Pewarisan, Polimorfisme, dan interface.
- Pemisahan kode menjadi class-class kecil membuat aplikasi modular dan mudah dirawat.
- Penggunaan static member melacak data di tingkat kelas/sistem, bukan tingkat objek individu.

:::tip[Selesai Mini Project]
Selamat! Kamu telah membangun sistem SIAKAD modular berbasis OOP yang kokoh. Laporkan hasil kerjamu kepada guru.
:::
