---
title: "Challenge BAB 4"
description: Sepuluh soal latihan function dari tingkat mudah hingga menengah.
---

# Challenge BAB 4

## Tujuan Pembelajaran

Setelah mengerjakan challenge ini, kamu dapat mengukur pemahaman tentang function dan membangun program modular secara mandiri.

---

## Aturan Challenge

:::tip[Cara Mengerjakan]
Buat satu file per soal di `src/bab4/challenge/`. Contoh: `src/bab4/challenge/soal-1.ts`.
```text
tsx src/bab4/challenge/soal-1.ts
```
:::

---

## Challenge 1 — Function Salam

**Tingkat: Mudah**

Buat function `salam(nama)` yang mencetak `"Halo, [nama]! Selamat belajar TypeScript."` Panggil tiga kali dengan nama berbeda.

---

## Challenge 2 — Kalkulator Dasar

**Tingkat: Mudah**

Buat empat function terpisah: `tambah(a, b)`, `kurang(a, b)`, `kali(a, b)`, `bagi(a, b)`. Setiap function mengembalikan hasilnya. Tampilkan semua dengan nilai `a = 20` dan `b = 4`.

---

## Challenge 3 — Konversi Suhu

**Tingkat: Mudah**

Buat tiga function:
- `celsiusKeFahrenheit(c)` → `(c × 9/5) + 32`
- `celsiusKeKelvin(c)` → `c + 273.15`
- `fahrenheitKeCelsius(f)` → `(f - 32) × 5/9`

Tampilkan konversi untuk 36.5°C.

---

## Challenge 4 — Cek Bilangan Prima

**Tingkat: Mudah**

Buat function `apakahPrima(n)` yang mengembalikan `true` jika `n` adalah bilangan prima. Uji untuk beberapa angka.

---

## Challenge 5 — Perkenalan Lengkap

**Tingkat: Mudah**

Buat function `perkenalan(nama, kelas, sekolah, hobi?)` dengan parameter opsional. Jika hobi tidak dikirim, tampilkan "Hobi: Tidak disebutkan".

---

## Challenge 6 — Statistik Array

**Tingkat: Menengah**

Buat function `statistik(...angka)` menggunakan rest parameter yang mengembalikan object berisi: `total`, `rataRata`, `maks`, dan `min`.

---

## Challenge 7 — Filter Nilai

**Tingkat: Menengah**

Buat function `filterNilai(nilaiArray, batas)` yang mengembalikan array baru berisi hanya nilai yang >= batas. Gunakan loop di dalam function.

---

## Challenge 8 — Arrow Function Berantai

**Tingkat: Menengah**

Buat tiga arrow function:
- `tambahPajak(harga)` → harga + 11% pajak
- `formatRupiah(nominal)` → `"Rp[nominal]"`
- `hargaAkhir(harga)` → gabungkan keduanya

Tampilkan harga akhir untuk tiga harga berbeda.

---

## Challenge 9 — Callback Sederhana

**Tingkat: Menengah**

Buat function `prosesDaftar(daftar, callback)` yang menjalankan `callback` untuk setiap elemen di array `daftar`. Panggil dengan dua callback berbeda yang memformat nama secara berbeda.

---

## Challenge 10 — Kalkulator Nilai Siswa

**Tingkat: Menengah**

Buat program modular dengan function-function berikut:

- `hitungRataRata(n1, n2, n3)` — rata-rata tiga nilai
- `tentukanGrade(rataRata)` — grade A-E
- `buatLaporan(nama, n1, n2, n3)` — menggabungkan semua dan menampilkan laporan

Data: minimal 4 siswa dengan nilai berbeda-beda.

---

## Checklist Sebelum Menganggap Selesai

- [ ] File bertipe `.ts` dan dijalankan dengan `tsx`
- [ ] Setiap function punya tipe parameter dan return yang jelas
- [ ] Nama function deskriptif dan menggunakan camelCase
- [ ] Function tidak mengerjakan lebih dari satu tugas
- [ ] Output mudah dibaca

---

:::note[Tidak Ada Jawaban Langsung]
Minta guru memeriksa hasilmu setelah semua soal selesai.
:::

---

## Ringkasan

- Ada 10 challenge dari mudah ke menengah.
- Fokus pada pemisahan tanggung jawab di setiap function.
- Gunakan fitur yang sesuai: rest, optional, default, callback, arrow.

:::tip[Langkah Selanjutnya]
Lanjut ke **Error Corner** untuk meninjau kesalahan function yang paling umum.
:::

---

## Latihan

Pilih satu challenge di atas yang menurutmu paling menantang. Buat rancangan logikanya di kertas dahulu, lalu tulis kode solusinya di file TypeScript baru.
