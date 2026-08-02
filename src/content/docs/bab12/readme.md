---
title: "README.md — BAB 12"
description: Panduan mendokumentasikan project secara profesional menggunakan file README.md di GitHub.
---

# README.md

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan fungsi dari berkas `README.md` pada repositori project.
- Menulis dokumentasi terstruktur menggunakan syntax Markdown dasar.
- Menyusun panduan instalasi, daftar fitur, dan teknologi secara profesional.

---

## Pendahuluan
Ketika seseorang (seperti calon HRD tempat kamu melamar magang, atau gurumu) membuka halaman project-mu di GitHub, file pertama yang otomatis dirender dan dibaca adalah **`README.md`** (BAB 11). File ini bertindak sebagai wajah, sampul, dan panduan utama dari projectmu.

---

## Penjelasan
`README.md` ditulis menggunakan format **Markdown** (ekstensi `.md`). Markdown memungkinkan kita membuat teks cetak tebal, judul bab, daftar poin, blok kode, dan tabel dengan syntax teks sederhana.

Struktur file `README.md` profesional minimal memiliki:
1. **Judul Project & Deskripsi Singkat**: Menjelaskan kegunaan aplikasi.
2. **Daftar Fitur Utama**: Apa saja yang bisa dilakukan aplikasi.
3. **Teknologi yang Digunakan**: Tumpukan teknologi (*tech stack*), misal: TypeScript, Node.js, TSX.
4. **Panduan Instalasi & Cara Menjalankan**: Langkah-langkah detail agar program bisa berjalan di laptop orang lain.
5. **Kontributor**: Nama pembuat aplikasi.

---

## Analogi Kehidupan Sehari-hari: Buku Panduan Manual Penggunaan Mesin Cuci
Bayangkan kamu membeli **Mesin Cuci Baru**:

```text
Buku Panduan Manual (README.md):
- Menjelaskan spesifikasi mesin cuci (Teknologi)
- Menjelaskan tombol-tombol dan fungsinya (Fitur)
- Panduan cara colok listrik dan pasang selang air (Cara Instalasi)
```

Tanpa buku panduan tersebut, pembeli bingung cara memakai mesin cuci, salah memutar tombol, dan bisa merusak mesin cuci secara tidak sengaja. `README.md` adalah buku panduan manual untuk aplikasimu.

---

## Visual Illustration: Struktur File README di Repositori

```text
Halaman GitHub Project
  ├── [ File Code ]
  └── [ README.md ] (Otomatis dirender di bagian bawah mading utama)
        ├── Judul Project
        ├── Cara Install (npm install)
        └── Cara Jalankan (npm run dev)
```

---

## Live Practice: Membuat README.md Pertama
Buat file bernama `README.md` di folder utama projectmu, salin dan sesuaikan template Markdown dasar berikut:

```markdown
# SIAKAD Konsol
Aplikasi Sistem Informasi Akademik berbasis terminal menggunakan TypeScript.

## Fitur Utama
- CRUD Data Siswa terproteksi
- Asynchronous Fetch API data tugas online

## Cara Instalasi
1. Clone repositori ini ke laptopmu:
   ```bash
   git clone https://github.com/username/siakad-konsol.git
   ```
2. Install library pendukung:
   ```bash
   npm install
   ```
3. Jalankan aplikasi:
   ```bash
   npm run dev
   ```
```

---

## Output
GitHub akan merender file tersebut menjadi halaman web dengan judul bab yang besar, teks rapi, dan blok kode berwarna hitam yang mudah disalin.

---

## Common Mistakes
- **Lupa Menulis README**: Membiarkan repositori GitHub kosong tanpa penjelasan apapun. Calon pemberi kerja akan langsung menutup halaman GitHub-mu karena mengira project tersebut hanyalah folder latihan sampah yang tidak bermakna.

---

## Tips
:::tip[Cantumkan Screenshot]
Jika aplikasimu memiliki tampilan visual (atau berupa output terminal yang rapi), ambillah screenshot/gambar tangkapan layar dan cantumkan di dalam `README.md`. Gambar visual sangat cepat menarik perhatian pembaca.
:::

---

## Best Practice
- Gunakan format penulisan blok kode Markdown dengan menyertakan nama bahasa pemrograman setelah tiga backtick (seperti ` ```bash ` atau ` ```ts `) agar warna kode rapi (*syntax highlighting*).

---

## Ringkasan
- `README.md` adalah dokumen panduan utama repositori project di GitHub.
- Ditulis menggunakan format Markdown.
- Wajib memuat deskripsi, fitur, teknologi, dan panduan instalasi yang jelas.

---

## Latihan
1. Buat file `README.md` di folder utama project finalmu (BAB 11).
2. Tuliskan dokumentasi lengkap project SIAKAD kamu menggunakan format Markdown di atas.
