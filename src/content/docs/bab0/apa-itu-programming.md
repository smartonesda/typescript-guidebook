---
title: "Apa itu Programming?"
description: Penjelasan sederhana tentang apa itu programming, mengapa penting, dan bagaimana komputer memahami instruksi manusia.
---

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Menjelaskan apa itu programming dengan kata-katamu sendiri
- Memahami bagaimana komputer menjalankan instruksi
- Memahami kenapa bahasa pemrograman diciptakan

---

## Pengantar

Sebelum belajar TypeScript, kita perlu menjawab pertanyaan paling mendasar terlebih dahulu:

**Apa sebenarnya yang dimaksud dengan "programming"?**

Banyak orang mengira programming itu hanya untuk orang-orang jenius, atau hanya untuk orang yang jago matematika. Faktanya, **programming adalah keterampilan yang bisa dipelajari oleh siapa saja** — termasuk kamu.

---

## Penjelasan: Apa itu Programming?

**Programming** (atau pemrograman) adalah proses memberikan instruksi kepada komputer supaya komputer melakukan sesuatu yang kita inginkan.

Komputer itu sebenarnya adalah mesin yang sangat bodoh. Ia tidak bisa berpikir sendiri. Ia tidak punya intuisi. Ia tidak bisa menebak apa yang kamu maksud. Komputer hanya melakukan **persis** apa yang diperintahkan — tidak lebih, tidak kurang.

Nah, **program** adalah kumpulan instruksi yang kita tulis untuk komputer.

Dan **programmer** adalah orang yang menulis instruksi-instruksi itu.

---

## Analogi Kehidupan Sehari-hari

### Analogi 1: Resep Masakan

Bayangkan kamu ingin mengajari adik kamu yang baru berumur 5 tahun cara membuat mie instan. Adik kamu tidak tahu apa-apa. Kamu harus memberikan instruksi yang **sangat spesifik**, langkah demi langkah:

1. Ambil panci
2. Isi panci dengan air sebanyak 400 ml
3. Taruh panci di atas kompor
4. Nyalakan kompor dengan api sedang
5. Tunggu sampai air mendidih (muncul gelembung-gelembung besar)
6. Masukkan mie ke dalam panci
7. Tunggu 3 menit
8. ...dan seterusnya

Kalau kamu hanya bilang "buatin mie instan dong", adikmu yang 5 tahun itu tidak akan bisa melakukannya. Ia butuh instruksi yang sangat rinci.

**Komputer sama persis seperti adik kamu yang berumur 5 tahun itu.** Ia perlu instruksi yang sangat rinci dan tidak ambigu.

### Analogi 2: GPS

Saat kamu menggunakan Google Maps, kamu memasukkan tujuan, dan GPS memberikan instruksi langkah demi langkah:

- "Lurus 500 meter"
- "Belok kiri di perempatan"
- "Tujuan di sebelah kanan"

Instruksi-instruksi itu adalah "program" yang dijalankan oleh GPS. Seseorang yang disebut programmer telah menulis instruksi itu sebelumnya, dan sekarang kamu menikmati hasilnya.

---

## Bagaimana Komputer Memahami Instruksi?

Komputer sebenarnya hanya mengerti satu bahasa: **bahasa mesin** — yang berupa angka 0 dan 1 (disebut binary atau biner).

Tapi menulis instruksi menggunakan 0 dan 1 sangat susah bagi manusia:

```
01001000 01100101 01101100 01101100 01101111
```

Kode di atas artinya "Hello" dalam bahasa mesin. Bayangkan menulis program besar dengan cara itu — tidak mungkin!

Makanya, manusia menciptakan **bahasa pemrograman** — bahasa yang lebih mudah dipahami manusia, seperti TypeScript:

```ts
console.log("Hello, World!");
```

Jauh lebih mudah dibaca, kan? Nantinya, ada program lain (disebut **compiler** atau **interpreter**) yang bertugas menerjemahkan kode TypeScript itu ke bahasa yang dipahami komputer.

---

## Ilustrasi: Alur Programming

```
Programmer            Komputer
    │                     │
    │  Menulis kode        │
    │  (TypeScript)        │
    │──────────────────►   │
    │                     │
    │  Compiler/TSX        │
    │  menerjemahkan       │
    │  ke bahasa mesin     │
    │──────────────────►   │
    │                     │
    │                  Komputer
    │                  menjalankan
    │                  program ✓
```

---

## Kenapa Belajar Programming Itu Penting?

Di era sekarang, hampir semua aspek kehidupan bersentuhan dengan teknologi:

- **Aplikasi di smartphone kamu** — dibuat oleh programmer
- **Website yang kamu buka** — dibuat oleh programmer
- **Game yang kamu mainkan** — dibuat oleh programmer
- **Sistem absensi di sekolah** — dibuat oleh programmer

Dengan belajar programming, kamu tidak hanya menjadi pengguna teknologi — kamu bisa menjadi **pencipta** teknologi.

:::note[Tahukah Kamu?]
Di Indonesia, kebutuhan tenaga programmer terus meningkat setiap tahunnya. Perusahaan teknologi, bank, rumah sakit, pemerintah — semua membutuhkan programmer. Belajar programming di SMK adalah investasi yang sangat baik untuk masa depanmu.
:::

---

## Ringkasan

- **Programming** adalah proses memberikan instruksi kepada komputer
- Komputer sangat "bodoh" — ia hanya melakukan **persis** apa yang diperintahkan
- **Program** adalah kumpulan instruksi yang kita tulis
- Komputer sebenarnya hanya mengerti angka 0 dan 1, tapi kita menggunakan bahasa pemrograman seperti TypeScript agar lebih mudah
- Belajar programming membuka banyak peluang karir di masa depan

:::tip[Langkah Selanjutnya]
Lanjut ke halaman **Computational Thinking** untuk belajar cara berpikir seperti seorang programmer.
:::
