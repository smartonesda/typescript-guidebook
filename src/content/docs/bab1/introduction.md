---
title: "BAB 1 — Variabel & Tipe Data"
description: Gambaran umum BAB 1 — mempelajari variabel dan tipe data sebagai fondasi utama TypeScript.
---

# BAB 1: Variabel & Tipe Data

Selamat datang di **BAB 1**! Kamu sudah berhasil menyelesaikan BAB 0 — instalasi selesai, program pertama sudah berjalan. Sekarang kita masuk ke inti dari belajar TypeScript.

Di bab ini, kamu akan mempelajari dua konsep yang menjadi **fondasi dari hampir semua program yang pernah ditulis manusia**: **variabel** dan **tipe data**.

---

## Tujuan Pembelajaran BAB 1

Setelah menyelesaikan seluruh halaman di BAB 1, kamu akan mampu:

- Menjelaskan apa itu variabel dan mengapa variabel diperlukan
- Menggunakan `let` dan `const` dengan benar
- Menulis nama variabel sesuai konvensi TypeScript
- Menyebutkan dan menggunakan semua tipe data primitif TypeScript
- Membedakan `null`, `undefined`, `any`, `unknown`, dan `never`
- Memanfaatkan type inference agar kode lebih ringkas
- Menggunakan template literal untuk menyusun teks dinamis
- Membuat program kecil yang bermakna menggunakan variabel dan tipe data

---

## Peta BAB 1

BAB 1 dibagi menjadi tiga bagian besar:

```
BAGIAN 1: VARIABEL
├── Apa itu variabel?
├── Cara mendeklarasikan variabel
├── let vs const
└── Aturan penamaan variabel

BAGIAN 2: TIPE DATA
├── Pengenalan tipe data
├── number
├── string
├── boolean
├── null & undefined
├── bigint
├── symbol
├── any
├── unknown
└── never

BAGIAN 3: KONSEP LANJUTAN
├── Type Inference
├── Literal Type
└── Template Literal

BAGIAN 4: PRAKTEK
├── Studi Kasus — Biodata Siswa
├── Mini Project — Aplikasi Biodata
├── Challenge — 10 Soal Latihan
└── Error Corner & Ringkasan
```

---

## Mengapa Variabel dan Tipe Data Itu Penting?

Bayangkan kamu sedang membangun aplikasi nilai ujian. Aplikasi itu perlu menyimpan:

- Nama siswa
- Nilai matematika
- Nilai bahasa Indonesia
- Apakah siswa lulus atau tidak

Semua data itu perlu **disimpan di suatu tempat** agar bisa diproses, dihitung, dan ditampilkan. Tempat penyimpanan itu disebut **variabel**.

Dan setiap data punya **jenis**-nya masing-masing — nama itu teks, nilai itu angka, status lulus itu ya/tidak. Jenis-jenis itu disebut **tipe data**.

Tanpa variabel dan tipe data, tidak ada program yang bisa dibuat.

---

## Cara Membaca BAB 1

:::tip[Tips Belajar]
Setiap halaman di BAB 1 bisa berdiri sendiri, tapi disarankan membacanya secara berurutan. Konsep-konsepnya saling berkaitan — memahami variabel lebih dulu akan membuat kamu lebih mudah memahami tipe data.
:::

Setiap halaman mengandung:
- Penjelasan konsep dengan analogi kehidupan sehari-hari
- Contoh kode yang bisa langsung dijalankan dengan `tsx`
- Penjelasan baris per baris
- Kesalahan umum pemula dan cara mengatasinya
- Latihan untuk dikerjakan sendiri

---

## Latihan Awal

Sebelum lanjut, buka file baru bernama `src/bab1/cek-kesiapan.ts`, lalu tulis dan jalankan kode berikut:

```ts
console.log("Saya siap belajar variabel dan tipe data!")
```

Jalankan dengan:

```text
tsx src/bab1/cek-kesiapan.ts
```

Jika teks muncul di terminal, lingkungan belajarmu sudah siap untuk BAB 1.

---

## Siap Mulai?

Klik **Apa itu Variabel** di sidebar untuk memulai halaman pertama BAB 1. 👉

