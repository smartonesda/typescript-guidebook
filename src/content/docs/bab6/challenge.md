---
title: "Challenge BAB 6"
description: Sepuluh latihan pemrosesan data menggunakan object, nested object, destructuring, dan spread operator.
---

# Challenge BAB 6

## Tujuan Pembelajaran

Setelah mengerjakan challenge ini, kamu dapat menerapkan properti objek, nested object, destructuring, spread operator, optional chaining, dan nullish coalescing untuk menyelesaikan berbagai masalah pemrograman berbasis objek.

---

## Aturan Challenge

:::tip[Cara Mengerjakan]
Buat satu file per soal di folder `src/bab6/challenge/`. Contoh: `src/bab6/challenge/soal-1.ts`.

Jalankan dengan:
```text
tsx src/bab6/challenge/soal-1.ts
```
:::

---

## Challenge 1 — Objek Biodata Diri

**Tingkat: Mudah**

Buat sebuah objek `biodata` bertipe kustom (type alias) yang mendeskripsikan dirimu sendiri, minimal memiliki properti: `nama` (string), `umur` (number), dan `aktif` (boolean). Tampilkan seluruh properti objek tersebut menggunakan Dot Notation.

---

## Challenge 2 — Tambah dan Hapus Kontak

**Tingkat: Mudah**

1. Buat object `kontak` dengan properti wajib `nama` dan properti opsional `instagram` dan `twitter`.
2. Setelah objek dibuat, tambahkan properti `instagram`.
3. Setelah itu, hapus properti `twitter` (jika ada).
4. Tampilkan objek di terminal setelah setiap tindakan.

---

## Challenge 3 — Bracket Notation Kustom

**Tingkat: Mudah**

Buat sebuah objek yang memiliki beberapa properti tidak standar (menggunakan spasi atau tanda minus, misalnya: `"tanggal-lahir"`, `"alamat rumah"`). Tampilkan seluruh properti tersebut menggunakan Bracket Notation yang benar.

---

## Challenge 4 — Destructuring Produk Toko

**Tingkat: Mudah**

Buat sebuah objek `produk` (id, namaBarang, harga, stok). Gunakan destructuring untuk mengambil properti `namaBarang` dan `harga` ke dalam variabel mandiri. Tampilkan variabel tersebut dengan template literal.

---

## Challenge 5 — Fotokopi & Upgrade RAM (Spread)

**Tingkat: Mudah**

Buat objek `laptop` (merk: string, ram: number). Salin objek tersebut ke objek baru bernama `laptopBaru` sambil memperbarui kapasitas `ram` menjadi dua kali lipat menggunakan spread operator. Pastikan objek `laptop` asli tidak berubah nilainya.

---

## Challenge 6 — Objek Alamat Bertingkat (Nested)

**Tingkat: Menengah**

Buat type alias `Siswa` yang memiliki properti `nama` dan nested object `alamat` (jalan, kota). Buat objek siswa tersebut dan tampilkan kota asal siswa menggunakan akses properti berantai (dot notation berantai).

---

## Challenge 7 — Daftar Barang Belanja (Array of Object)

**Tingkat: Menengah**

Buat array of object bernama `keranjang` yang berisi 4 produk (nama, harga, jumlah). Gunakan loop `.forEach()` untuk mencetak nama produk dan total harga (harga × jumlah) masing-masing produk.

---

## Challenge 8 — Penyelamat Crash (Optional Chaining)

**Tingkat: Menengah**

Buat type alias `Profil` yang memiliki properti wajib `nama` dan properti opsional `mediaSosial` (berisi nested object `tiktok` string).
1. Buat profil Budi tanpa properti `mediaSosial`.
2. Akses `budi.mediaSosial.tiktok` secara aman menggunakan optional chaining agar program tidak crash. Tampilkan hasilnya.

---

## Challenge 9 — Default Kontak (Nullish Coalescing)

**Tingkat: Menengah**

Sama seperti Challenge 8, buat profil Budi tanpa properti `mediaSosial`. Gunakan kombinasi optional chaining dan nullish coalescing untuk menampilkan nama akun Tiktok Budi, atau teks `"Tidak memiliki akun Tiktok"` jika propertinya tidak diisi.

---

## Challenge 10 — Sistem Manajemen Koperasi

**Tingkat: Menengah**

Buat sebuah sistem pengelolaan barang koperasi sekolah sederhana menggunakan array of object:
- Setiap barang memiliki properti: `kode` (string), `nama` (string), `harga` (number), dan `stok` (number).
- Buat minimal 4 barang.
- Buat fungsi `tampilkanHabis()` yang menggunakan `filter()` untuk menyaring dan menampilkan barang yang stoknya kurang dari 5.
- Buat fungsi `hitungTotalAset()` yang menggunakan `reduce()` untuk menghitung total nilai uang dari seluruh aset barang (harga × stok).

---

## Latihan

Pilih salah satu challenge di atas yang menurutmu paling sulit. Buat coretan alur prosesnya di kertas, lalu tulis ulang kode solusinya dari nol tanpa melihat petunjuk.

---

## Ringkasan

- Latihan challenge mengasah kemampuan manipulasi properti objek.
- Gunakan TSX untuk verifikasi hasil secara mandiri.
- Fokus pada keamanan tipe data TypeScript.

:::tip[Langkah Selanjutnya]
Lanjut ke **Error Corner** untuk belajar menghindari kesalahan fatal.
:::
