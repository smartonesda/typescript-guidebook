---
title: "Studi Kasus: Sistem Informasi Akademik"
description: Studi kasus lengkap merancang sistem informasi akademik sekolah menggunakan paradigma OOP, relasi objek, dan inheritance di TypeScript.
---

# Studi Kasus: Sistem Informasi Akademik

## Tujuan Pembelajaran
Setelah menyelesaikan studi kasus ini, kamu diharapkan dapat:
- Merancang struktur data sekolah yang kompleks menggunakan paradigma OOP.
- Menghubungkan beberapa class yang saling berelasi (seperti Guru, Siswa, dan Kelas).
- Membangun method pemroses data yang bekerja secara modular.

---

## Pendahuluan

Kita akan membangun modul data untuk **Sistem Informasi Akademik** (SIAKAD) sekolah. Sistem ini perlu mengelola:
- Data dasar manusia (menggunakan inheritance).
- Data khusus Guru (punya NIP, mapel yang diajarkan).
- Data khusus Siswa (punya NIS, nilai).
- Data Kelas (Rombel) yang menampung satu wali kelas guru dan daftar siswa.

Sistem ini dirancang menggunakan OOP agar terstruktur, aman, dan mudah dikembangkan untuk jangka panjang.

---

## Desain Class & Relasi Objek

Kita akan merancang class dengan diagram struktur seperti berikut:

```text
       ┌────────────────────────┐
       │   abstract Manusia     │  ◄── Class Induk Abstrak
       │   - nama, umur         │
       └───────────┬────────────┘
                   │
         ┌─────────┴─────────┐
         ▼ extends           ▼ extends
  ┌──────────────┐    ┌──────────────┐
  │    Siswa     │    │     Guru     │
  │  - nis, nilai│    │  - nip, mapel│
  └──────┬───────┘    └──────┬───────┘
         │                   │
         │ di dalam daftar   │ sebagai wali kelas
         ▼                   ▼
  ┌──────────────────────────────────┐
  │            KelasRPL              │
  │  - namaKelas                     │
  │  - waliKelas (objek Guru)        │
  │  - daftarSiswa (array Siswa[])   │
  └──────────────────────────────────┘
```

---

## Mari Mencoba: Implementasi Kode SIAKAD

Buat file baru bernama `src/bab8/studi-kasus-siakad.ts`:

```ts
// =====================================================
// STUDI KASUS: SISTEM INFORMASI AKADEMIK (OOP)
// =====================================================

// 1. Abstract Class Induk (Cetak Biru Manusia)
abstract class Manusia {
  constructor(public nama: string, public umur: number) {}

  abstract tampilkanInfo(): void;
}

// 2. Class Anak: Guru
class Guru extends Manusia {
  constructor(
    nama: string,
    umur: number,
    public nip: number,
    public mataPelajaran: string
  ) {
    super(nama, umur);
  }

  tampilkanInfo(): void {
    console.log(`[Guru] NIP: ${this.nip} | Nama: ${this.nama} | Mengajar: ${this.mataPelajaran}`);
  }
}

// 3. Class Anak: Siswa
class Siswa extends Manusia {
  constructor(
    nama: string,
    umur: number,
    public nis: number,
    private _nilai: number = 0 // Properti private terenkapsulasi
  ) {
    super(nama, umur);
  }

  // Getter & Setter untuk nilai
  get nilai(): number {
    return this._nilai;
  }

  set nilai(nilaiBaru: number) {
    if (nilaiBaru >= 0 && nilaiBaru <= 100) {
      this._nilai = nilaiBaru;
    } else {
      console.log(`⚠ Nilai ${nilaiBaru} tidak valid untuk ${this.nama}!`);
    }
  }

  tampilkanInfo(): void {
    const status = this._nilai >= 75 ? "LULUS" : "REMEDIAL";
    console.log(`[Siswa] NIS: ${this.nis} | Nama: ${this.nama.padEnd(10)} | Nilai: ${this._nilai} [${status}]`);
  }
}

// 4. Class Kelas (Rombel) yang Berelasi dengan Guru dan Siswa
class KelasRombel {
  // Properti bertipe objek Guru dan array objek Siswa
  private daftarSiswa: Siswa[] = [];

  constructor(
    public namaKelas: string,
    public waliKelas: Guru
  ) {}

  // Method untuk menambah siswa ke kelas
  public tambahSiswa(siswa: Siswa): void {
    this.daftarSiswa.push(siswa);
    console.log(`✓ Siswa "${siswa.nama}" dimasukkan ke kelas ${this.namaKelas}.`);
  }

  // Method untuk menghitung rata-rata nilai kelas
  public hitungRataRataKelas(): number {
    if (this.daftarSiswa.length === 0) return 0;
    const total = this.daftarSiswa.reduce((acc, curr) => acc + curr.nilai, 0);
    return parseFloat((total / this.daftarSiswa.length).toFixed(2));
  }

  // Method untuk menampilkan laporan kelas lengkap
  public cetakLaporanKelas(): void {
    console.log("\n" + "=".repeat(50));
    console.log(`  LAPORAN AKADEMIK KELAS: ${this.namaKelas}`);
    console.log("=".repeat(50));
    console.log(`  Wali Kelas : ${this.waliKelas.nama} (NIP: ${this.waliKelas.nip})`);
    console.log(`  Mata Pelaj.: ${this.waliKelas.mataPelajaran}`);
    console.log("-".repeat(50));
    console.log("  Daftar Siswa:");
    
    if (this.daftarSiswa.length === 0) {
      console.log("    (Belum ada siswa di kelas ini)");
    } else {
      this.daftarSiswa.forEach((siswa) => {
        siswa.tampilkanInfo(); // Polimorfisme memanggil method tampilkanInfo() milik Siswa
      });
    }

    console.log("-".repeat(50));
    console.log(`  Rata-rata Nilai Kelas: ${this.hitungRataRataKelas()}`);
    console.log("=".repeat(50));
  }
}

// --- SIMULASI PROGRAM SIAKAD ---

// 1. Buat Objek Guru
const pakBudi = new Guru("Pak Budi Santoso", 38, 19870615, "Pemrograman Web");

// 2. Buat Objek Kelas
const kelasXI = new KelasRombel("XI RPL 1", pakBudi);

// 3. Buat Objek Siswa-Siswa
const s1 = new Siswa("Putra", 17, 1001, 85);
const s2 = new Siswa("Dewi", 16, 1002, 70);
const s3 = new Siswa("Citra", 17, 1003, 95);

console.log("=== PROSES PENDAFTARAN KELAS ===");
kelasXI.tambahSiswa(s1);
kelasXI.tambahSiswa(s2);
kelasXI.tambahSiswa(s3);

// 4. Cetak Laporan Awal
kelasXI.cetakLaporanKelas();

// 5. Coba update nilai siswa Dewi secara aman lewat setter
console.log("\n[Aksi]: Ujian remedi Dewi dilaksanakan...");
s2.nilai = 80; // memanggil setter otomatis

// 6. Cetak Laporan Akhir setelah perubahan
kelasXI.cetakLaporanKelas();
```

Jalankan dengan perintah:
```text
tsx src/bab8/studi-kasus-siakad.ts
```

---

## Penjelasan Baris per Baris

- `abstract class Manusia` — Class induk abstrak yang tidak bisa di-`new`, berguna sebagai kontrak wajib bahwa seluruh manusia di sekolah memiliki `nama` dan `umur`.
- `class Siswa extends Manusia` — Mewarisi properti `nama` dan `umur` dari `Manusia`, lalu mendefinisikan properti private `_nilai` dan constructor-nya menggunakan `super(nama, umur)`.
- `public waliKelas: Guru` — Properti `waliKelas` pada `KelasRombel` bertipe objek `Guru` (relasi *association*).
- `private daftarSiswa: Siswa[]` — Properti penyimpan array kumpulan objek `Siswa`.
- `this.daftarSiswa.reduce(...)` — Menghitung total nilai seluruh objek siswa yang terdaftar di dalam array kelas.
- `siswa.tampilkanInfo()` — Polimorfisme berjalan: komputer memanggil method khusus milik objek `Siswa`.

---

## Kesalahan yang Sering Terjadi

### ❌ Mengisi data relasi dengan tipe yang tidak cocok
```ts
const kelasRpl = new KelasRombel("XI RPL 1", "Pak Budi"); // Error!
// Argument of type 'string' is not assignable to parameter of type 'Guru'.
```

**Perbaikan:** Properti `waliKelas` mengharuskan kita mengirimkan objek nyata hasil instansiasi `new Guru(...)`, bukan sekadar teks string.

---

## Latihan
1. Tambahkan properti `private _alamat: string = ""` pada class abstrak `Manusia` lengkap dengan getter dan setter-nya.
2. Isi alamat untuk semua objek guru dan siswa saat dibuat.
3. Cetak alamat tersebut di dalam method laporan kelas.

---

## Ringkasan
- Sistem informasi sekolah yang kompleks dirancang secara modular menggunakan relasi objek OOP.
- Class anak memperluas class induk abstrak menggunakan `extends`.
- Class `KelasRombel` menghubungkan Guru dan Siswa menggunakan relasi objek dan array.
- Perubahan properti private dikontrol secara aman menggunakan getter dan setter.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mini Project** untuk merancang aplikasi akademik berbasis OOP yang lebih interaktif.
:::
