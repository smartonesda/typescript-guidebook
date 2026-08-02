---
title: "Membuat Project Baru — BAB 11"
description: Panduan langkah demi langkah menginisialisasi folder project baru menggunakan npm init di terminal.
---

# Membuat Project Baru

## Tujuan Pembelajaran
Setelah mengikuti halaman ini, kamu diharapkan dapat:
- Membuat folder workspace project SIAKAD di laptopmu secara mandiri.
- Menginisialisasi project Node.js baru menggunakan perintah `npm init -y`.
- Menjelaskan arti dan fungsi berkas `package.json` yang dihasilkan.

---

## Pendahuluan
Langkah pertama dari setiap pembuatan aplikasi software adalah membuat ruang kerja (workspace) dan menginisialisasinya sebagai project Node.js resmi menggunakan npm. Di halaman ini, kita akan memulai proses setup awal tersebut.

---

## Penjelasan
Project Node.js membutuhkan file identitas bernama `package.json`. File ini bertindak sebagai akte pendirian project, menyimpan nama aplikasi, versi, lisensi, skrip penjelas, serta daftar library pihak ketiga (seperti TSX atau TypeScript) yang akan diinstall kemudian. Tanpa `package.json`, kita tidak bisa mengelola library pendukung project.

---

## Analogi Kehidupan Sehari-hari: Mendirikan Badan Usaha (Akte Pendirian)
Menginisialisasi project dengan `npm init` seperti **mendaftarkan akte pendirian koperasi sekolah** ke notaris pemerintah:

```text
Akte Pendirian Koperasi (package.json):
  ├── Nama Koperasi (properti "name": "siakad-final")
  ├── Nomor Izin Usaha / Versi (properti "version": "1.0.0")
  └── Penanggung Jawab (properti "author")
```

Tanpa mendaftarkan akte pendirian ini, koperasimu tidak dianggap sebagai badan usaha resmi dan kamu dilarang membeli barang dari supplier luar secara hukum. `package.json` adalah akte pendirian resmi projectmu.

---

## Visual Illustration: Alur Inisialisasi Project

```text
Terminal: mkdir siakad-final ──► Membuat folder kosong di komputer
              │
Terminal: cd siakad-final ──► Masuk ke dalam folder
              │
Terminal: npm init -y ──► Menghasilkan file package.json (Akte Project)
```

---

## Live Coding: Perintah Inisialisasi
Buka terminal kamu, buat folder baru, masuk ke dalamnya, lalu jalankan inisialisasi npm:

```bash
mkdir siakad-final
cd siakad-final
npm init -y
```

---

## Output
Setelah menjalankan perintah di atas, kamu akan melihat keluaran teks di terminal dan sebuah file `package.json` berhasil dibuat:

```json
Wrote to D:\siakad-final\package.json:

{
  "name": "siakad-final",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

---

## Penjelasan Baris per Baris
- `"name": "siakad-final"`: Nama project kamu (otomatis mengambil nama folder).
- `"version": "1.0.0"`: Versi aplikasi saat ini.
- `"main": "index.js"`: Berkas utama program (pada TypeScript, kita akan mengarahkannya ke file di dalam folder build).
- `"scripts"`: Daftar perintah shortcut terminal yang bisa kita jalankan via npm.

---

## Common Mistakes
- **Menjalankan npm init di folder root komputer**: Menjalankan perintah di folder User atau C:\ secara langsung. Pastikan kamu sudah masuk ke folder `siakad-final` yang benar menggunakan perintah `cd` sebelum mengetik `npm init`.

---

## Tips
:::tip[Gunakan flag -y]
Menggunakan flag `-y` (yes) membuat npm mengisi semua data konfigurasi secara otomatis dengan nilai default, sehingga kamu tidak perlu menekan tombol ENTER berkali-kali untuk menjawab pertanyaan notaris npm.
:::

---

## Ringkasan
- Project dibuat dengan membuat folder baru (`mkdir`) dan berpindah direktori (`cd`).
- `npm init -y` menginisialisasi project Node.js dan menghasilkan berkas `package.json`.
- `package.json` bertindak sebagai akte pendirian resmi project yang mencatat seluruh identitas sistem.

---

## Latihan
1. Buat folder `siakad-final` di komputermu, lalu jalankan `npm init -y`.
2. Buka berkas `package.json` di VS Code, ubah properti `"author"` menjadi namamu sendiri, lalu simpan.
