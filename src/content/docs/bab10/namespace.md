---
title: "Namespace"
description: Menggunakan Namespace di TypeScript untuk mengelompokkan kode secara internal dan menghindari bentrok nama.
---

# Namespace

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan perbedaan antara Module dan Namespace.
- Membuat deklarasi `namespace` menggunakan kata kunci `namespace`.
- Mengakses komponen di dalam namespace menggunakan dot notation.

---

## Penjelasan Materi: Apa itu Namespace?

Sebelum sistem module modern (ES Modules) diakui di seluruh browser, TypeScript memiliki sistem pengelompokan kodenya sendiri yang disebut **Namespace** (dahulu disebut *Internal Modules*).

`namespace` digunakan untuk membungkus variabel, class, interface, atau fungsi ke dalam satu wilayah nama khusus agar tidak mencemari global scope dan terhindar dari tabrakan nama.

Sintaks dasar:

```ts
namespace Akademik {
  export interface Siswa {
    nama: string;
  }
}
```

Komponen di dalam namespace harus diawali kata kunci `export` agar bisa diakses dari luar namespace tersebut. Cara mengaksesnya menggunakan dot notation:

```ts
const s: Akademik.Siswa = { nama: "Putra" };
```

---

## Analogi Kehidupan Sehari-hari: Folder Laci Kategori Lemari

Bayangkan sebuah lemari arsip besar:

Kamu menaruh map kertas di laci berlabel **"Perpustakaan"**, dan map kertas lain di laci berlabel **"Koperasi"**.

```text
Lemari (Global Scope)
  ├── Namespace Perpustakaan
  │     └── File "DaftarPinjam"
  └── Namespace Koperasi
        └── File "DaftarPinjam"
```

Kedua laci memiliki berkas bernama sama: `"DaftarPinjam"`. Keduanya tidak akan tertukar atau membingungkan guru karena disimpan di dalam laci kategori (namespace) yang berbeda. Saat ingin mengambil, kamu berkata: *"Tolong ambil DaftarPinjam milik Koperasi"* (`Koperasi.DaftarPinjam`).

---

## Visual Illustration: Struktur Namespace

```text
namespace Koperasi {
  export const total = 100;
}

Akses luar: Koperasi.total
```

---

## Dari Mana Data Namespace Dihubungkan?

Namespace dideklarasikan di dalam file. Jika dipisah file, kita harus mereferensikannya menggunakan petunjuk khusus triple-slash directive `/// <reference path="..." />`. Namun karena ini adalah fitur lama, kita tidak perlu mempraktikkannya secara berlebihan. Cukup pahami bahwa namespace membungkus kode secara internal.

---

## Mari Mencoba: Menghindari Tabrakan Nama dengan Namespace

Mari buat program yang mendemonstrasikan bagaimana dua interface dengan nama yang sama bisa hidup berdampingan secara damai menggunakan `namespace`.

Buat file bernama `src/bab10/namespace-demo.ts`:

```ts
// 1. Namespace untuk Data Perpustakaan
namespace Perpustakaan {
  export interface Kartu {
    nomorAnggota: string;
    jumlahBukuDipinjam: number;
  }

  export function cetakInfo(k: Kartu): void {
    console.log(`[Perpus]: Member ${k.nomorAnggota} meminjam ${k.jumlahBukuDipinjam} buku.`);
  }
}

// 2. Namespace untuk Data Koperasi
namespace Koperasi {
  export interface Kartu {
    saldoKoperasi: number;
    barcodeKartu: string;
  }

  export function cetakInfo(k: Kartu): void {
    console.log(`[Koperasi]: Saldo Rp${k.saldoKoperasi} | Barcode: ${k.barcodeKartu}`);
  }
}

// --- Menggunakan Namespace ---

// Kartu Perpustakaan
const kartuPerpus: Perpustakaan.Kartu = {
  nomorAnggota: "PERPUS-1001",
  jumlahBukuDipinjam: 3
};
Perpustakaan.cetakInfo(kartuPerpus);

// Kartu Koperasi (Nama interface Kartu sama, tetapi tidak bentrok!)
const kartuKop: Koperasi.Kartu = {
  saldoKoperasi: 50000,
  barcodeKartu: "KOP-998877"
};
Koperasi.cetakInfo(kartuKop);
```

Jalankan dengan perintah:
```text
tsx src/bab10/namespace-demo.ts
```

## Output
```text
[Perpus]: Member PERPUS-1001 meminjam 3 buku.
[Koperasi]: Saldo Rp50000 | Barcode: KOP-998877
```

---

## Module vs Namespace: Kapan Pakai Mana?

Dalam pengembangan aplikasi TypeScript modern saat ini:

- **Gunakan Module (`export`/`import`) secara default** untuk semua file project baru. Module adalah standar resmi web masa depan dan sangat didukung oleh alat build modern (Vite, Webpack, dll).
- **Gunakan Namespace hanya untuk legacy code (projek lama)** atau jika kamu membuat file definisi tipe data global (`.d.ts`) kustom yang tidak bertindak sebagai modul eksternal.

---

## Latihan
1. Buat dua namespace: `Matematika` (export fungsi tambah) dan `Fisika` (export fungsi tambah - simulasi tambah kecepatan).
2. Panggil kedua fungsi tambah tersebut dari luar namespace dan tampilkan hasilnya.

---

## Ringkasan
- Namespace mengelompokkan kode secara internal untuk menghindari bentrok nama.
- Dibuat dengan kata kunci `namespace Nama { ... }`.
- Komponen di dalam wajib di-`export` agar bisa diakses luar.
- Modul ES Modules (`export`/`import`) lebih disukai dan direkomendasikan pada project modern dibanding Namespace.

:::tip[Langkah Selanjutnya]
Lanjut ke **Studi Kasus** untuk mempraktikkan pengambilan data API asynchronous dan module system secara nyata.
:::
