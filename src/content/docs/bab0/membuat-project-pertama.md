---
title: "Membuat Project Pertama"
description: Panduan langkah demi langkah membuat folder project TypeScript pertama dan menginisialisasi project dengan npm.
---

## Tujuan Pembelajaran

Setelah mengikuti halaman ini, kamu akan mampu:

- Membuat folder project baru
- Membuka folder itu di VS Code
- Menginisialisasi project dengan npm
- Memahami apa itu `package.json`

---

## Pengantar

Saatnya kita mulai bekerja! Di halaman ini kita akan membuat **project TypeScript pertama** kamu.

Seorang programmer biasanya memiliki folder khusus untuk setiap project yang ia kerjakan. Ini menjaga semua file tetap terorganisir dan tidak tercampur-aduk.

---

## Langkah 1: Pilih Lokasi Project

Pertama, tentukan di mana kamu akan menyimpan semua project kodingmu. Beberapa rekomendasi:

- Windows: `C:\Users\NamaKamu\Documents\coding\`
- macOS: `/Users/NamaKamu/Documents/coding/`
- Linux: `/home/NamaKamu/coding/`

Jangan simpan di Desktop — Desktop mudah berantakan dan sulit di-backup.

---

## Langkah 2: Buat Folder Project

Buka terminal dan jalankan perintah berikut:

### Di Windows (Command Prompt atau PowerShell):

```
cd Documents
mkdir coding
cd coding
mkdir belajar-typescript
cd belajar-typescript
```

### Di macOS/Linux:

```
cd ~/Documents
mkdir coding
cd coding
mkdir belajar-typescript
cd belajar-typescript
```

Penjelasan perintah:

- `cd` — pindah ke folder (Change Directory)
- `mkdir` — buat folder baru (Make Directory)

---

## Langkah 3: Buka Folder di VS Code

Setelah berada di dalam folder `belajar-typescript`, jalankan:

```
code .
```

Perintah `code .` artinya "buka VS Code di folder saat ini" (titik `.` berarti folder saat ini).

VS Code akan terbuka dengan folder `belajar-typescript` sebagai workspace kamu.

> Screenshot VS Code terbuka dengan folder belajar-typescript di Explorer sebelah kiri

---

## Langkah 4: Buka Terminal di VS Code

Di dalam VS Code, buka terminal dengan shortcut `Ctrl + `` ` `` ` (backtick).

Terminal yang terbuka sudah otomatis berada di folder `belajar-typescript`. Kamu bisa verifikasi dengan perintah:

```
pwd
```

Output (Windows):

```
C:\Users\NamaKamu\Documents\coding\belajar-typescript
```

Output (macOS/Linux):

```
/Users/NamaKamu/Documents/coding/belajar-typescript
```

---

## Langkah 5: Inisialisasi Project dengan npm

Sekarang kita akan menginisialisasi project dengan npm. Jalankan:

```
npm init -y
```

Penjelasan:

- `npm init` — inisialisasi project npm baru
- `-y` — jawab "yes" untuk semua pertanyaan secara otomatis

Setelah perintah itu dijalankan, kamu akan melihat file baru bernama `package.json` muncul di Explorer VS Code.

> Screenshot VS Code menampilkan file package.json baru di folder belajar-typescript

---

## Apa itu package.json?

`package.json` adalah file konfigurasi project kamu. File ini menyimpan informasi tentang project:

```json
{
  "name": "belajar-typescript",
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

Untuk sekarang, kamu tidak perlu mengubah apapun di file ini. Yang penting kamu tahu bahwa file ini ada dan itu adalah bagian normal dari sebuah project Node.js/TypeScript.

---

## Langkah 6: Buat File tsconfig.json

`tsconfig.json` adalah file konfigurasi untuk TypeScript. File ini memberitahu TypeScript bagaimana cara memeriksa kode kamu.

Jalankan perintah berikut di terminal:

```
tsc --init
```

Perintah ini akan membuat file `tsconfig.json` secara otomatis.

> Screenshot VS Code menampilkan file tsconfig.json di Explorer

:::note[Catatan]
File `tsconfig.json` yang dihasilkan berisi banyak baris komentar dan pengaturan. Untuk sekarang, kamu tidak perlu memahami semuanya. Cukup tahu bahwa file ini perlu ada.
:::

---

## Struktur Project Saat Ini

Sekarang folder project kamu terlihat seperti ini:

```
belajar-typescript/
├── package.json
└── tsconfig.json
```

Hanya dua file untuk sekarang. Kita akan menambahkan file TypeScript di langkah selanjutnya.

---

## Ringkasan

- Buat folder project dengan `mkdir nama-folder`
- Buka di VS Code dengan `code .`
- Inisialisasi project npm dengan `npm init -y`
- Inisialisasi konfigurasi TypeScript dengan `tsc --init`
- Project siap digunakan!

:::tip[Langkah Selanjutnya]
Lanjut ke halaman **Struktur Project** untuk memahami bagaimana mengorganisir file-file dalam sebuah project TypeScript.
:::
