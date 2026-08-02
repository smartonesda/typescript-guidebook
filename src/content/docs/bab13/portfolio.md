---
title: "Membangun Personal Portfolio — BAB 13"
description: Panduan menyusun personal portfolio yang menarik perhatian industri software bagi siswa SMK.
---

# Membangun Personal Portfolio

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan arti penting dari personal portfolio.
- Memilih project terbaik untuk dipajang di portofolio.
- Menulis dokumentasi README yang profesional untuk project-mu.

---

## Pendahuluan
Bagi seorang software engineer, ijazah sekolah atau sertifikat nilai raport tidaklah cukup untuk membuktikan kemampuanmu. Perusahaan ingin melihat bukti nyata: *"Aplikasi apa saja yang pernah kamu buat?"*. Tempat untuk memajang bukti nyata tersebut adalah **Personal Portfolio**.

---

## Penjelasan: Cara Menyusun Portofolio Menarik

Portofolio yang baik tidak harus berisi 100 project kecil hasil tutorial. Lebih baik kamu memiliki **2 atau 3 project berkualitas tinggi** yang benar-benar kamu buat sendiri dan berfungsi dengan baik.

Kriteria project portofolio yang disukai HRD perusahaan:

1. **Menyelesaikan Masalah Nyata**: Misalnya, kamu membuat aplikasi presensi kelas online untuk menggantikan kertas absen manual di sekolahmu. Ini menunjukkan kamu bisa melihat masalah dan menyelesaikannya dengan kode.
2. **Dokumentasi README yang Jelas**: Setiap project di GitHub wajib memiliki file `README.md` yang terstruktur rapi:
   - Deskripsi singkat aplikasi.
   - Daftar teknologi yang digunakan (React, NestJS, MySQL).
   - Petunjuk cara menginstall dan menjalankan aplikasi di komputer lokal.
   - Screenshot tampilan aplikasi atau link live demo.
3. **Kode yang Rapi**: Kode disusun dalam struktur folder berlapis yang rapi, penamaan variabel camelCase konsisten, dan bebas dari tipe `any`.

---

## Visual Illustration: Struktur README.md Ideal

```markdown
# Nama Project (SIAKAD SMK)
Deskripsi singkat tentang kegunaan aplikasi...

## Fitur Utama
- CRUD Data Siswa
- Input Nilai Validasi

## Teknologi yang Digunakan
- TypeScript & Node.js
- Prisma ORM & MySQL

## Cara Instalasi
1. Clone repo: `git clone ...`
2. Install dep: `npm install`
3. Jalankan: `npm run dev`
```

---

## Tips Dunia Industri
:::note[Cantumkan Tautan Live Demo]
Orang HRD atau calon klien seringkali tidak memiliki waktu untuk mengunduh kodemu dan menjalankannya di laptop mereka. Cantumkan selalu tautan link live demo (misal: di-deploy di Vercel) di bagian atas README GitHub agar mereka bisa mencoba aplikasimu dalam satu kali klik.
:::

---

## Langkah Selanjutnya
Mari pelajari alat utama kolaborasi developer: **Belajar Git & GitHub**.

---

## Ringkasan
- Portofolio adalah bukti nyata hasil karyamu yang dinilai oleh industri.
- Fokus pada 2-3 project berkualitas yang menyelesaikan masalah nyata.
- File `README.md` di GitHub wajib ditulis secara informatif, rapi, dan mencantumkan cara instalasi.
