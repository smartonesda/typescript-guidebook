---
title: "Pengembangan Lanjutan — BAB 11"
description: Peta jalan belajar masa depan setelah menyelesaikan guidebook TypeScript — dari konsol ke Express API, Vue/React, dan Fullstack.
---

# Pengembangan Lanjutan (Future Path)

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Memahami bagaimana aplikasi konsol teks ini bisa diubah menjadi web visual di masa depan.
- Mengenali peran TypeScript dalam pengembangan backend (Node.js/Express/NestJS).
- Mengenali peran TypeScript dalam pengembangan frontend (Vue/React/Angular).

---

## Pendahuluan
Selamat! Kamu telah membangun aplikasi SIAKAD-Konsol berbasis teks terminal yang canggih. Mungkin kamu bertanya-tanya: *"Aplikasi di dunia nyata kan memiliki halaman web yang indah dengan tombol dan tabel. Bagaimana cara mengubah aplikasi konsol ini menjadi aplikasi web?"*

Kabar baiknya: **logika kode program yang kamu tulis di bab ini adalah pondasi 80% dari sistem web nyata**.

---

## Penjelasan
Aplikasi web modern dibagi menjadi dua bagian besar:
1. **Backend (Server)**: Bagian yang mengolah data murni. Logika `SiswaService` dan `AcademicRepository` yang kamu buat di bab ini tinggal dipindahkan ke framework backend seperti **Express.js** atau **NestJS** untuk dijadikan **Web API**.
2. **Frontend (Tampilan)**: Bagian halaman web visual. Kamu bisa membuat tombol dan tabel menggunakan framework **Vue.js**, **React**, atau **Angular** yang akan melakukan fetch API (BAB 10) ke server backend milikmu.

TypeScript digunakan secara luas di kedua belah pihak karena menjamin kode bebas bug saat digabungkan.

---

## Analogi Kehidupan Sehari-hari: Merenovasi Gubuk Menjadi Ruko Beton
Mengembangkan aplikasi dari konsol ke web seperti **merenovasi gubuk kayu kecil menjadi gedung ruko beton modern**:

```text
Gubuk Kayu Kecil (SIAKAD-Konsol)
  ├── Pondasi kayu sederhana (Array RAM)
  └── Dinding papan kayu sederhana (Tampilan teks terminal)

Gedung Ruko Beton (Aplikasi Web Fullstack)
  ├── Dinding kaca megah, pintu otomatis, AC dingin (Tampilan Web Vue/React)
  └── Pondasi tiang pancang baja, lift barang (Database PostgreSQL & API NestJS)
```

Kamu tidak membuang ilmu cara membangun gubuk kayu. Aturan pertukangan dasar, gergaji, palu, dan cara mengukur tiang (logika variables, loops, classes) yang kamu pelajari saat membuat gubuk tetap digunakan untuk merancang gedung ruko beton.

---

## Visual Illustration: Peta Jalan Menjadi Fullstack Developer

```text
[ SIAKAD-Konsol ] ──► [ Web API (NestJS) ] ──► [ Web View (Vue/React) ] ──► [ Fullstack App ]
(BAB 11)              (Backend)                (Frontend)
```

---

## Live Coding: Contoh Integrasi ke Server Express (Simulasi)
Berikut adalah contoh bagaimana class `SiswaService` yang kamu buat nantinya dihubungkan ke server web API menggunakan framework Express:

```ts
// Simulasi integrasi Express.js (konseptual)
// import express from "express";
// const app = express();

// app.get("/api/siswa", (req, res) => {
//   const data = siswaService.ambilSemua();
//   res.json(data); // mengirimkan data objek sebagai JSON ke web browser
// });
```

---

## Output
Hasil yang dikirim ke web browser saat alamat `/api/siswa` dibuka:

```json
[
  { "id": 1, "nama": "Putra", "kelas": "XI RPL 1" }
]
```

---

## Common Mistakes
- **Mengira pemrograman web berbeda total**: Mengira bahwa beralih ke pembuatan website berarti harus membuang semua ilmu logika OOP/TypeScript di bab ini. Logika OOP tetap sama, hanya cara menampilkan datanya saja yang diganti dari `console.log` menjadi kode HTML/CSS.

---

## Tips
:::tip[Pelajari Express.js Selanjutnya]
Langkah belajar berikutnya yang paling mulus setelah buku ini adalah mempelajari **Node.js + Express.js**. Ini akan membantumu memahami bagaimana cara membuat Web API pertama kamu menggunakan TypeScript.
:::

---

## Ringkasan
- Logika aplikasi konsol SIAKAD siap diintegrasikan ke framework web.
- Peta jalan belajar: TypeScript Dasar ──► Web API (Express/NestJS) ──► Frontend (Vue/React) ──► Fullstack.
- TypeScript digunakan secara luas di backend maupun frontend industri modern.

---

## Latihan
1. Tuliskan di file latihan: bidang pengembangan mana yang paling menarik minat belajarmu berikutnya? Apakah membuat server backend, membuat tampilan frontend, atau keduanya? Berikan alasan singkatmu.
