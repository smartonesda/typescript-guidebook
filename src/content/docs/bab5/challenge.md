---
title: "Challenge BAB 5"
description: Sepuluh latihan pemrosesan data menggunakan array dan method array dari tingkat mudah hingga menengah.
---

# Challenge BAB 5

## Tujuan Pembelajaran

Setelah mengerjakan challenge ini, kamu dapat menerapkan method-method array dengan tepat untuk manipulasi, pencarian, penyaringan, dan pengurutan data.

---

## Aturan Challenge

:::tip[Cara Mengerjakan]
Buat satu file per soal di folder `src/bab5/challenge/`. Contoh: `src/bab5/challenge/soal-1.ts`.

Jalankan dengan:
```text
tsx src/bab5/challenge/soal-1.ts
```
:::

---

## Challenge 1 — Daftar Belanja Dasar

**Tingkat: Mudah**

Buat array daftar belanja berisi 3 barang.
1. Tambahkan barang baru ke akhir array menggunakan `push()`.
2. Tambahkan barang baru ke awal array menggunakan `unshift()`.
3. Tampilkan array hasil akhir.

---

## Challenge 2 — Hapus Ujung

**Tingkat: Mudah**

Mulai dengan array `["Andi", "Budi", "Citra", "Dian"]`.
1. Hapus siswa pertama menggunakan `shift()`.
2. Hapus siswa terakhir menggunakan `pop()`.
3. Tampilkan nama-nama yang berhasil dihapus beserta sisa isi array.

---

## Challenge 3 — Cari Posisi Absen

**Tingkat: Mudah**

Buat array berisi nama 6 siswa.
1. Gunakan `includes()` untuk memeriksa apakah nama `"Roni"` terdaftar.
2. Gunakan `indexOf()` untuk mencari di indeks berapa nama `"Citra"` berada.
3. Tampilkan hasil analisis dengan kalimat informatif.

---

## Challenge 4 — Total Belanja Koperasi

**Tingkat: Mudah**

Buat array berisi 5 angka harga barang. Gunakan `for...of` atau `.forEach()` untuk menjumlahkan semua harga tersebut dan tampilkan total belanja koperasi.

---

## Challenge 5 — Pangkat Dua (Transformasi)

**Tingkat: Mudah**

Buat array berisi angka `[1, 2, 3, 4, 5]`. Gunakan `map()` untuk menghasilkan array baru berisi nilai pangkat dua dari angka-angka tersebut. Tampilkan hasilnya.

---

## Challenge 6 — Saring Nilai Lulus

**Tingkat: Menengah**

Buat array berisi 10 nilai ujian secara acak. Gunakan `filter()` untuk menghasilkan array baru yang hanya berisi nilai >= 75. Tampilkan jumlah siswa yang lulus.

---

## Challenge 7 — Urutkan Peringkat Kelas

**Tingkat: Menengah**

Buat array berisi 8 angka nilai ujian secara acak. Urutkan angka tersebut dari yang terbesar ke terkecil (descending). Pastikan array asli tidak ikut berubah urutannya. Tampilkan hasilnya.

---

## Challenge 8 — Cari Kontak Pertama

**Tingkat: Menengah**

Buat array objek berisi daftar kontak teman (nama dan nomor telepon). Gunakan `find()` untuk mencari kontak pertama yang namanya berawalan huruf `"M"`. Tampilkan nomor teleponnya dengan aman.

---

## Challenge 9 — Akumulasi Reduksi

**Tingkat: Menengah**

Buat array berisi 5 angka nominal tabungan harian. Gunakan `reduce()` untuk menghitung total tabungan tersebut. Mulai dengan saldo awal tabungan sebesar Rp50.000. Tampilkan total akhirnya.

---

## Challenge 10 — Balik Urutan Antrean

**Tingkat: Menengah**

Buat array berisi 6 langkah instalasi software. Balik urutan langkah tersebut dari langkah terakhir ke langkah pertama. Tampilkan hasilnya di terminal.

---

## Latihan

Pilih salah satu challenge di atas yang menurutmu paling sulit. Buat coretan alur prosesnya di kertas, lalu tulis ulang kode solusinya dari nol tanpa melihat petunjuk.

---

## Ringkasan

- Latihan challenge mengasah pemahaman mutable vs immutable methods.
- Tulis setiap soal di file terpisah agar teratur.
- Gunakan TSX untuk verifikasi hasil secara mandiri.

:::tip[Langkah Selanjutnya]
Lanjut ke **Error Corner** untuk belajar menghindari kesalahan fatal.
:::
