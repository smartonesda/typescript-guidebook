---
title: "package.json — BAB 12"
description: Memahami struktur dan peran berkas package.json dalam manajemen project Node.js dan TypeScript.
---

# package.json

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan fungsi berkas `package.json` di project Node.js/TypeScript.
- Membedakan antara `dependencies` dan `devDependencies`.
- Membuat skrip pintasan (*npm scripts*) untuk mempermudah pengerjaan project.

---

## Pendahuluan
Di BAB 11, kita menginisialisasi project menggunakan `npm init -y` yang menghasilkan berkas `package.json`. Di halaman ini kita akan membedah isi berkas tersebut agar kamu bisa mengelola library pihak ketiga dan membuat skrip otomatis secara mandiri.

---

## Penjelasan: Struktur package.json

`package.json` (BAB 11) adalah pusat informasi dan konfigurasi manajemen project Node.js.

Properti penting di dalam `package.json`:

### 1. `dependencies`
Daftar library/paket yang **wajib ada agar aplikasi bisa berjalan** di komputer pengguna saat aplikasi dirilis (contoh: library server web Express atau konektor database).

### 2. `devDependencies`
Daftar library/paket yang **hanya dibutuhkan saat menulis kode** di laptop developer, tetapi tidak diperlukan saat aplikasi dijalankan oleh pengguna (contoh: compiler `typescript`, linter `eslint`, formatter `prettier`, atau test runner `vitest`).

### 3. `scripts`
Blok yang menyimpan skrip jalan pintas (*shortcuts*) terminal untuk menjalankan tugas-tugas berulang:

```json
"scripts": {
  "start": "node dist/main.js",
  "dev": "tsx src/main.ts",
  "build": "tsc"
}
```

Menjalankannya di terminal cukup dengan mengetik: `npm run dev` atau `npm run build`.

---

## Analogi Kehidupan Sehari-hari: Daftar Karyawan Koperasi Sekolah

Bayangkan **Daftar Anggota Koperasi Sekolah**:

```text
Anggota Inti (Dependencies)
  ├── Petugas Kasir (wajib ada untuk melayani pembeli setiap hari)
  └── Petugas Stok barang

Tenaga Kerja Tambahan Konstruksi (DevDependencies)
  ├── Tukang cat bangunan (hanya dibutuhkan saat merenovasi gedung toko di awal)
  └── Arsitek perancang lemari (hanya saat merancang layout)
```

Saat toko koperasi sudah dibuka secara resmi untuk melayani siswa (production), tukang cat dan arsitek (devDependencies) sudah pulang ke rumah masing-masing. Hanya kasir (dependencies) yang tetap bekerja di toko setiap hari.

---

## Visual Illustration: Alur Kerja Script npm

```text
Terminal: npm run dev ──► Menjalankan "tsx src/main.ts" secara otomatis di latar belakang
```

---

## Example: File package.json yang Terkonfigurasi Rapi

Berikut contoh berkas `package.json` untuk project TypeScript sekolah (BAB 11):

```json
{
  "name": "siakad-rpl",
  "version": "1.0.0",
  "description": "Sistem Informasi Akademik SMK",
  "main": "dist/main.js",
  "scripts": {
    "dev": "tsx src/main.ts",
    "build": "tsc",
    "start": "node dist/main.js"
  },
  "dependencies": {
    "dotenv": "^16.4.5"
  },
  "devDependencies": {
    "typescript": "^5.3.3",
    "tsx": "^4.7.0"
  }
}
```

---

## Common Mistakes
- **Salah menaruh dependencies**: Menginstall compiler `typescript` sebagai dependencies biasa. Ini membuat ukuran aplikasi akhir menjadi sangat besar saat dideploy karena menyertakan compiler yang sebenarnya tidak dibutuhkan lagi saat aplikasi dijalankan dalam format JS.
  - *Solusi*: Gunakan flag `-D` atau `--save-dev` saat menginstall library development: `npm install -D typescript tsx`.

---

## Tips
:::tip[Gunakan npm run dev]
Selalu siapkan perintah `"dev": "tsx src/main.ts"` di bagian `"scripts"`. Ini membuatmu cukup mengetik `npm run dev` untuk menjalankan program tanpa perlu mengingat-ingat path lengkap filenya.
:::

---

## Best Practice
- Jangan pernah mengedit isi folder `node_modules` secara manual. Semua isi folder tersebut dikelola otomatis oleh npm berdasarkan isi file `package.json` dan `package-lock.json`.

---

## Ringkasan
- `package.json` mengelola data identitas project, scripts pintasan, dan daftar library dependencies.
- `dependencies` dibutuhkan saat runtime; `devDependencies` hanya dibutuhkan saat coding development.
- Jalankan skrip pintasan menggunakan perintah `npm run [nama-script]`.

---

## Latihan
1. Buka file `package.json` di project SIAKAD kamu (BAB 11).
2. Tambahkan script `"dev": "tsx src/main.ts"` ke dalam properti `"scripts"`.
3. Jalankan aplikasimu lewat terminal menggunakan perintah `npm run dev`.
