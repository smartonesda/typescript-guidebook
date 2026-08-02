---
title: "Mini Project: Refactor Existing Project — BAB 12"
description: Panduan mempraktikkan refactoring lengkap pada project SIAKAD dengan menambahkan ESLint, Prettier, dan merapikan struktur modul.
---

# Mini Project: Refactor Existing Project

## Tujuan Pembelajaran
Setelah menyelesaikan mini project ini, kamu diharapkan dapat:
- Merapikan struktur folder project yang berantakan menjadi modular.
- Mengonfigurasi ESLint dan Prettier di dalam project nyata secara mandiri.
- Meningkatkan kualitas keterbacaan kode program akademik sekolah.

---

## Pendahuluan
Kita akan mengambil project final akademik sekolah yang sudah kita buat di BAB 11, lalu melakukan operasi **Refactor Kualitas Besar**. Kita akan memasang pengawal otomatis (ESLint & Prettier), merapikan nama-nama variabel, membuang kode duplikat, dan menulis dokumentasi README yang stellar.

---

## Penjelasan: Kebutuhan Refactor

Langkah-langkah yang harus dilakukan di projectmu:
1. **Configure Prettier**: Buat file `.prettierrc` dan aktifkan format otomatis di VS Code.
2. **Configure ESLint**: Aktifkan pemeriksaan variabel tak terpakai.
3. **Pembersihan DRY**: Pastikan tidak ada `console.log("=".repeat(...))` manual yang tersisa di seluruh file.
4. **Dokumentasi**: Tulis file `README.md` lengkap di folder root project.

---

## Analogi Kehidupan Sehari-hari: Inspeksi Kerapian Kelas Sekolah
Mengatur linter dan formatter di project seperti **mempersiapkan kelas untuk lomba kebersihan tingkat sekolah**:

```text
Inspeksi Kelas (ESLint & Prettier):
- Guru memeriksa apakah ada sampah kertas terselip di laci meja (ESLint - mencari unused vars)
- Petugas kebersihan menyapu lantai, merapikan taplak meja, dan meluruskan baris kursi (Prettier - format)
```

Kelas tidak menjadi lebih luas, namun menjadi sangat bersih, wangi, dan nyaman untuk belajar.

---

## Visual Illustration: Alur Kerja Refactoring Project

```text
Project Awal (Berantakan) ──► Jalankan Prettier (Format) ──► Jalankan ESLint (Bersihkan) ──► Tulis README
```

---

## Live Practice: Langkah Konfigurasi Alat bantu

### Langkah 1: Buat berkas `.prettierrc` di folder utama projectmu
```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "none"
}
```

### Langkah 2: Buat berkas `.gitignore` (jika belum ada)
```text
node_modules/
dist/
.env
```

### Langkah 3: Tulis README.md Lengkap
Buat berkas `README.md` di folder root projectmu dan isi dengan informasi detail cara instalasi dan penggunaan aplikasi SIAKAD-Konsol.

---

## Output
Ketika kamu menekan `Ctrl + S`, Prettier otomatis merapikan semua file kodemu secara seragam. VS Code akan menampilkan garis merah jika ada variabel yang dideklarasikan tapi tidak pernah dipakai (ESLint rule).

---

## Common Mistakes
- **Lupa mengabaikan node_modules**: Tidak membuat file `.prettierignore` atau `.gitignore` sehingga Prettier mencoba memformat jutaan baris kode library luar, membuat VS Code hang.

---

## Tips
:::tip[Gunakan Command Palette]
Di VS Code, jika ingin memformat seluruh file sekaligus secara manual tanpa membuka satu per satu, tekan `F1` atau `Ctrl + Shift + P`, ketik **"Format Document"**, lalu pilih Prettier.
:::

---

## Best Practice
- Selalu jalankan program dengan `npm run dev` setelah melakukan pembersihan untuk menjamin logika program tetap utuh dan tidak rusak akibat salah hapus baris.

---

## Ringkasan
- Mini Project berfokus meningkatkan kualitas kode project yang sudah ada (SIAKAD).
- Mengintegrasikan perkakas ESLint dan Prettier untuk otomatisasi kerapian.
- Menulis dokumentasi `README.md` lengkap sebagai wajah portofolio.

---

## Latihan
1. Terapkan seluruh langkah refactoring di atas pada project `siakad-final` kamu (BAB 11).
2. Pastikan file README ditulis dengan rapi menggunakan format Markdown.
