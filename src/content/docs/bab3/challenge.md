---
title: "Challenge BAB 3"
description: Sepuluh soal latihan loop dari tingkat mudah hingga menengah.
---

# Challenge BAB 3

## Tujuan Pembelajaran

Setelah mengerjakan challenge ini, kamu dapat mengukur pemahaman tentang loop, memilih jenis loop yang tepat, dan menulis program yang memproses banyak data.

---

## Aturan Challenge

:::tip[Cara Mengerjakan]
Buat satu file per soal di `src/bab3/challenge/`. Contoh: `src/bab3/challenge/soal-1.ts`.

Jalankan:
```text
tsx src/bab3/challenge/soal-1.ts
```
:::

Kerjakan **tanpa melihat contoh kode** dari materi. Jika buntu, baca ulang halaman yang relevan, coba lagi, baru tanya guru.

---

## Challenge 1 — Cetak Angka

**Tingkat: Mudah**

Gunakan `for` loop untuk mencetak angka 1 sampai 50. Setiap baris hanya berisi satu angka.

---

## Challenge 2 — Genap dan Ganjil

**Tingkat: Mudah**

Cetak angka 1 sampai 30. Setiap angka diberi label:

```text
1 - Ganjil
2 - Genap
3 - Ganjil
...
```

Gunakan operator modulus `%` untuk menentukan genap atau ganjil.

---

## Challenge 3 — Jumlah Kumulatif

**Tingkat: Mudah**

Hitung jumlah semua angka dari 1 sampai 100. Tampilkan hasilnya tanpa mencetak setiap angka (cukup tampilkan total akhir).

---

## Challenge 4 — Daftar Nama

**Tingkat: Mudah**

Buat array berisi minimal 7 nama teman sekelas. Gunakan `for...of` untuk mencetak setiap nama dengan nomor urut.

---

## Challenge 5 — Tabel Perkalian

**Tingkat: Mudah**

Buat tabel perkalian untuk angka yang dipilih (misalnya angka 6). Tampilkan dari `6 × 1 = 6` sampai `6 × 12 = 72`.

---

## Challenge 6 — Filter Nilai

**Tingkat: Menengah**

Buat array berisi 10 nilai ujian acak. Gunakan loop untuk:

- Mencetak nilai yang **lulus** (>= 75)
- Mencetak nilai yang **remedial** (< 75)
- Menghitung berapa siswa lulus dan berapa remedial

---

## Challenge 7 — Cari Kata

**Tingkat: Menengah**

Buat array berisi nama-nama kota. Minta pengguna (simulasikan dengan variabel) mencari sebuah kata. Gunakan loop untuk memeriksa apakah kata tersebut ada di dalam salah satu nama kota. Hentikan pencarian begitu ditemukan.

---

## Challenge 8 — Hitung Mundur dengan Syarat

**Tingkat: Menengah**

Mulai dari angka 100. Kurangi 7 setiap langkah menggunakan `while`. Hentikan jika hasilnya negatif. Tampilkan setiap nilai dan berapa langkah yang dibutuhkan.

---

## Challenge 9 — Statistik Nilai Kelas

**Tingkat: Menengah**

Buat array berisi nilai 8 siswa. Gunakan loop untuk menghitung dan menampilkan:

- Total nilai
- Rata-rata
- Nilai tertinggi
- Nilai terendah
- Jumlah siswa lulus (>= 75)

---

## Challenge 10 — Pola Berlian

**Tingkat: Menengah**

Gunakan nested loop untuk membuat pola berlian berikut:

```text
    *
   ***
  *****
 *******
  *****
   ***
    *
```

(Tinggi berlian bisa disesuaikan)

---

## Checklist Sebelum Menganggap Selesai

- [ ] File bertipe `.ts` dan dijalankan dengan `tsx`
- [ ] Tidak ada infinite loop yang tidak disengaja
- [ ] Menggunakan jenis loop yang tepat untuk setiap soal
- [ ] Nama variabel camelCase dan deskriptif
- [ ] Output mudah dibaca

---

## Jika Buntu

1. Tuliskan langkah-langkah secara manual di kertas.
2. Tentukan: berapa kali loop harus berjalan? Apa kondisi berhentinya?
3. Buat variabel satu per satu, tambahkan loop, lalu tambahkan logika.
4. Gunakan `console.log()` di dalam loop untuk melihat nilai variabel setiap putaran.

:::note[Tidak Ada Jawaban Langsung]
Challenge tidak menyertakan jawaban. Minta guru memeriksa hasilmu setelah selesai.
:::

---

## Latihan Tambahan

Setelah semua soal selesai, pilih yang paling sulit dan tulis ulang dari nol. Latihan ini melatih pemahaman nyata, bukan hanya mengingat kode.

---

## Ringkasan

- Ada 10 challenge dari mudah ke menengah.
- Kerjakan satu per satu, jalankan setiap file dengan TSX.
- Jika buntu, rancang logika dahulu baru tulis kode.

:::tip[Langkah Selanjutnya]
Lanjut ke **Error Corner** untuk meninjau kesalahan loop yang paling umum.
:::
