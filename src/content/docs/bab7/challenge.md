---
title: "Challenge BAB 7"
description: Sepuluh latihan pemrosesan data menggunakan Interface, Type Alias, Union, dan Enum di TypeScript.
---

# Challenge BAB 7

## Tujuan Pembelajaran

Setelah mengerjakan challenge ini, kamu dapat menerapkan Interface, Type Alias, Extends, Readonly, Union, dan Enum untuk mendesain struktur data yang aman dan modular.

---

## Aturan Challenge

:::tip[Cara Mengerjakan]
Buat satu file per soal di folder `src/bab7/challenge/`. Contoh: `src/bab7/challenge/soal-1.ts`.

Jalankan dengan:
```text
tsx src/bab7/challenge/soal-1.ts
```
:::

---

## Challenge 1 — Interface Siswa Dasar

**Tingkat: Mudah**

Buat sebuah interface `Siswa` dengan properti: `nama` (string) dan `umur` (number). Buat satu objek siswa nyata yang mematuhinya dan tampilkan.

---

## Challenge 2 — Extended Interface Karyawan

**Tingkat: Mudah**

1. Buat base interface `Orang` (nama, umur).
2. Buat interface `Karyawan` yang meng-extends `Orang` dan menambah properti `nip` (number) dan `jabatan` (string).
3. Buat objek karyawan dan tampilkan hasilnya.

---

## Challenge 3 — Properti Opsional Mobil

**Tingkat: Mudah**

Buat interface `Mobil` dengan properti wajib `merk` dan properti opsional `pemilik` (string). Buat satu objek mobil tanpa pemilik, dan satu objek dengan pemilik. Tampilkan nama pemilik secara aman menggunakan nullish coalescing `??`.

---

## Challenge 4 — Kunci ID Produk (Readonly)

**Tingkat: Mudah**

Buat interface `Produk` dengan properti `readonly id: string` dan properti biasa `harga: number`. Buat satu objek produk. Ubah harga produk tersebut, lalu coba ubah `id`-nya dan pastikan TypeScript melarangnya (tuliskan komentar tentang pesan errornya).

---

## Challenge 5 — Type Alias ID Karyawan (Union)

**Tingkat: Mudah**

Buat tipe alias `IDKaryawan` yang bertipe gabungan `string | number`. Buat fungsi `cetakID(id)` yang menerima parameter bertipe tersebut dan menggunakan `typeof` untuk menampilkan pesan kustom berbeda bagi string dan number.

---

## Challenge 6 — Intersection Koordinat Dimensi

**Tingkat: Menengah**

Buat tipe alias `DimensiX` `{ x: number }` dan `DimensiY` `{ y: number }`. Gabungkan keduanya menggunakan intersection `&` menjadi tipe `TitikDuaDimensi`. Buat objek titik koordinatnya dan tampilkan.

---

## Challenge 7 — Menu Kopi dengan Literal Type

**Tingkat: Menengah**

Buat tipe alias `UkuranKopi` yang membatasi nilai hanya boleh: `"S"`, `"M"`, atau `"L"`. Buat objek `pesananKopi` dengan properti `namaPelanggan` dan `ukuran` bertipe kustom tersebut. Coba ubah ukuran menjadi `"XL"` dan amati error compile-nya.

---

## Challenge 8 — Enum Status Pengiriman

**Tingkat: Menengah**

Buat enum `StatusKirim` dengan nilai: `Proses` = "PROSES", `Kirim` = "DIKIRIM", `Selesai` = "SELESAI". Buat objek `paket` (resi, status) yang statusnya mengambil nilai dari enum tersebut. Tampilkan status kirimnya.

---

## Challenge 9 — Interface Function Calculator

**Tingkat: Menengah**

Buat interface `Operasi` yang mendefinisikan bentuk fungsi: menerima dua parameter number dan mengembalikan number. Implementasikan interface tersebut pada fungsi `tambah`, `kurang`, dan `kali`. Tampilkan hasil perhitungan ketiganya untuk angka 12 dan 3.

---

## Challenge 10 — Database Inventaris Sekolah

**Tingkat: Menengah**

Buatlah sistem tipe data inventaris sekolah sederhana:
- Buat enum `KategoriBarang` (Elektronik, Furnitur, ATK).
- Buat interface `Barang` (id string/number, nama string, kategori KategoriBarang, jumlah number).
- Buat array berisi 4 barang inventaris.
- Buat fungsi `tampilkanElektronik(daftar: Barang[])` yang memfilter dan menampilkan barang kategori Elektronik.

---

## Latihan

Pilih satu challenge di atas yang menurutmu paling sulit. Buat coretan alur prosesnya di kertas, lalu tulis ulang kode solusinya dari nol tanpa melihat petunjuk.

---

## Ringkasan

- Latihan challenge mengasah pemahaman static typing TypeScript.
- Gunakan TSX untuk verifikasi hasil secara mandiri.
- Pahami perbedaan extends dan intersection.

:::tip[Langkah Selanjutnya]
Lanjut ke **Error Corner** untuk belajar menghindari kesalahan fatal.
:::
