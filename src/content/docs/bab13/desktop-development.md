---
title: "Desktop Development — BAB 13"
description: Menggunakan TypeScript untuk membangun aplikasi desktop cross-platform menggunakan Electron dan Tauri.
---

# Desktop Development dengan TypeScript

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Mengenali framework utama pembuat aplikasi desktop menggunakan TypeScript (Electron, Tauri).
- Memahami kelebihan dan kekurangan dari masing-masing framework.
- Mengenali aplikasi desktop populer yang dibangun menggunakan teknologi web.

---

## Pendahuluan
Tahukah kamu bahwa editor kode **VS Code** yang kita gunakan sepanjang buku ini dibangun menggunakan teknologi web (HTML, CSS, dan TypeScript)? VS Code bukan aplikasi asli Windows C++ biasa — ia adalah aplikasi web yang dibungkus menjadi aplikasi desktop menggunakan framework bernama **Electron**.

---

## Penjelasan: Pilihan Framework Desktop

Ada dua framework utama untuk membuat aplikasi desktop (Windows, macOS, Linux) menggunakan TypeScript:

### 1. Electron (Pelopor)
Electron menggabungkan browser Chromium (inti Google Chrome) dan Node.js ke dalam satu paket aplikasi desktop. 
- **Kelebihan**: Sangat mudah digunakan bagi web developer karena bisa memakai HTML/CSS/TS biasa, memiliki akses penuh ke fitur sistem komputer.
- **Kekurangan**: Ukuran file aplikasi akhir sangat besar (minimal 100 MB meskipun hanya menampilkan hello world) dan boros penggunaan memori RAM.
- **Aplikasi Populer**: VS Code, Discord, Slack, WhatsApp Desktop.

### 2. Tauri (Modern & Ringan)
Tauri adalah alternatif modern yang menggabungkan frontend web (HTML/CSS/TS) dengan backend bahasa pemrograman **Rust**.
- **Kelebihan**: Ukuran file aplikasi sangat kecil (bisa di bawah 5 MB) dan sangat hemat penggunaan RAM karena tidak menyertakan Chromium bawaan.
- **Kekurangan**: Membutuhkan sedikit pemahaman bahasa Rust untuk memprogram fitur sistem backend komputer yang rumit.

---

## Visual Illustration: Perbandingan Ukuran Aplikasi

```text
Aplikasi Kosong Electron
┌─────────────────────────────────────────────────────────┐
│ [ Chromium Browser ] + [ Node.js ] + [ Kode TS ]        │ ──► Ukuran file: ~120 MB
└─────────────────────────────────────────────────────────┘

Aplikasi Kosong Tauri
┌─────────────────────────────────────────────────┐
│ [ WebView OS Bawaan ] + [ Rust ] + [ Kode TS ]  │ ──► Ukuran file: ~5 MB
└─────────────────────────────────────────────────┘
```

---

## Tips Dunia Industri
:::note[Pilih Tauri untuk Aplikasi Ringan]
Jika kamu ingin membuat aplikasi desktop untuk sekolah (seperti aplikasi kasir perpustakaan lokal atau aplikasi ujian sekolah), Tauri adalah pilihan terbaik karena aplikasi akhir bisa diunduh dengan cepat dan tidak membebani komputer sekolah yang spesifikasinya rendah.
:::

---

## Langkah Selanjutnya
Mari kita rangkum semua framework tersebut pada halaman **Framework Modern**.

---

## Ringkasan
- Aplikasi desktop bisa dibuat menggunakan teknologi web (HTML, CSS, TypeScript).
- **Electron** populer, memiliki akses sistem lengkap, tetapi file besar dan boros RAM.
- **Tauri** adalah alternatif modern yang sangat ringan dan hemat memori RAM menggunakan Rust.
