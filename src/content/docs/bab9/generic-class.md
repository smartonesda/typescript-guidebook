---
title: "Generic Class"
description: Cara mendefinisikan dan menginstansiasi Class Generic di TypeScript untuk membuat objek penyimpan data serbaguna.
---

# Generic Class

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Membuat Class bertipe Generic menggunakan parameter `<T>`.
- Menginstansiasi objek dari Class Generic.
- Mengelola data secara dinamis di dalam class menggunakan tipe `T`.

---

## Pendahuluan

Kita sudah belajar membuat Class di BAB 8. Class biasanya dikunci untuk tipe data tertentu. Contoh: class `DaftarSiswa` menyimpan array string nama siswa. 

Bagaimana jika kita ingin membuat sebuah class penyimpanan serbaguna (seperti data struktur Stack, Queue, atau Repository data) yang bisa menyimpan tipe data apa saja, tetapi tetap menjaga keamanan tipe? Kita membuat **Generic Class**.

---

## Penjelasan Materi: Membuat Class Generic

Sintaks pembuatan Class Generic meletakkan `<T>` setelah nama class:

```ts
class Penyimpanan<T> {
  private data: T[] = [];

  tambah(item: T): void {
    this.data.push(item);
  }
}
```

Saat menginstansiasi objek, kita tentukan tipe datanya di dalam tanda kurung sudut `<...>`:

```ts
const simpanAngka = new Penyimpanan<number>();
```

---

## Analogi Kehidupan Sehari-hari: Loker Penyimpanan Barang (Laci)

Bayangkan sebuah **lemari loker penyimpanan serbaguna**:

```text
Loker Sekolah (Generic Class <T>)
  ├── Diisi HP (T)     ──► Loker HP (Hanya boleh titip HP)
  ├── Diisi Laptop (T) ──► Loker Laptop (Hanya boleh titip Laptop)
  └── Diisi Buku (T)   ──► Loker Buku (Hanya boleh titip Buku)
```

Struktur fisik lokernya sama (sekat, pintu, kunci). Namun jenis barang yang diizinkan masuk dan keluar (tipe data) ditentukan oleh label stiker yang ditempel di depan loker saat pertama kali disewa oleh siswa.

---

## Visual Illustration: Class Generic

```text
Class Loker<T> { isi: T }

const loker1 = new Loker<string>() ──► loker1.isi bertipe string
const loker2 = new Loker<number>() ──► loker2.isi bertipe number
```

---

## Dari Mana Constructor Mendapatkan Tipe?

TypeScript cukup cerdas. Jika kamu mengirim data awal ke dalam constructor, TypeScript bisa menebak tipe Generic secara otomatis (*Type Inference*) tanpa kamu perlu menulis tanda `<...>`:

```ts
const loker = new Loker("Buku"); // Terinferensi otomatis sebagai Loker<string>
```

---

## Mari Mencoba: Class Penyimpanan Data Serbaguna

Mari kita buat class `LokerPenyimpanan` untuk menyimpan barang apa saja secara dinamis.

Buat file bernama `src/bab9/generic-class.ts`:

```ts
// 1. Membuat Class Generic
class LokerPenyimpanan<T> {
  private barang: T[] = [];

  constructor(public namaLoker: string) {}

  // Method menerima tipe T
  public simpan(item: T): void {
    this.barang.push(item);
    console.log(`[${this.namaLoker}]: Berhasil menyimpan 1 barang.`);
  }

  // Method mengembalikan tipe T atau undefined
  public ambilTerakhir(): T | undefined {
    return this.barang.pop();
  }

  public dapatkanJumlah(): number {
    return this.barang.length;
  }
}

// 2. Instansiasi Loker khusus String
const lokerBuku = new LokerPenyimpanan<string>("LOKER BUKU");
lokerBuku.simpan("Kamus Bahasa Jepang");
lokerBuku.simpan("Buku Novel");

console.log("Buku yang diambil:", lokerBuku.ambilTerakhir()?.toUpperCase());

// 3. Instansiasi Loker khusus Number
const lokerUang = new LokerPenyimpanan<number>("LOKER UANG");
lokerUang.simpan(50000);
lokerUang.simpan(100000);

console.log("Uang yang diambil : Rp", lokerUang.ambilTerakhir()?.toLocaleString("id-ID"));
```

Jalankan dengan perintah:
```text
tsx src/bab9/generic-class.ts
```

## Output
```text
[LOKER BUKU]: Berhasil menyimpan 1 barang.
[LOKER BUKU]: Berhasil menyimpan 1 barang.
Buku yang diambil: BUKU NOVEL

[LOKER UANG]: Berhasil menyimpan 1 barang.
[LOKER UANG]: Berhasil menyimpan 1 barang.
Uang yang diambil : Rp 100.000
```

---

## Penjelasan Baris per Baris

- `class LokerPenyimpanan<T>` — Mendefinisikan class Generic. Properti private `barang` dideklarasikan sebagai array bertipe `T[]`.
- `public simpan(item: T)` — Parameter `item` dikunci bertipe `T`.
- `new LokerPenyimpanan<string>("LOKER BUKU")` — Instansiasi loker khusus string.
- `lokerBuku.ambilTerakhir()?.toUpperCase()` — Karena tipe datanya terjamin string, kita bisa menggunakan method khusus string secara aman menggunakan optional chaining.

---

## Latihan
1. Buat class Generic `KotakDaftar<T>` dengan properti private array data `T[]` dan method `tambah(item: T)` serta `tampilkanSemua(): void`.
2. Buat objek untuk menyimpan daftar nilai angka siswa dan panggil method-methodnya.

---

## Ringkasan
- Class Generic ditulis dengan sintaks `class Nama<T> { ... }`.
- Digunakan untuk membuat struktur penyimpanan/utilitas data serbaguna.
- Mengamankan operasi manipulasi data internal agar terhindar dari salah tipe data.

:::tip[Langkah Selanjutnya]
Lanjut ke **Generic Constraint** untuk membatasi tipe data apa saja yang boleh masuk ke parameter Generic.
:::
