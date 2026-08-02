---
title: "Workflow Developer Modern"
description: Memahami bagaimana seorang developer bekerja sehari-hari — tools, terminal, dan alur kerja dari menulis kode hingga menjalankan program.
---

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Memahami alur kerja (workflow) seorang developer sehari-hari
- Mengenal tools yang digunakan developer: editor, terminal, dan package manager
- Memahami peran Node.js dan TSX dalam workflow TypeScript

---

## Pengantar

Sebelum kita mulai menginstall software, ada baiknya kita pahami dulu **gambaran besar** tentang bagaimana seorang developer bekerja.

Banyak pemula langsung terjun ke coding tanpa memahami ekosistemnya — akibatnya mereka bingung sendiri ketika menghadapi error atau ketika diminta menjalankan perintah di terminal.

Halaman ini akan memberimu gambaran besar itu.

---

## Alat-alat Seorang Developer

Bayangkan kamu seorang tukang kayu. Kamu butuh alat-alat: palu, gergaji, meteran, dan meja kerja. Tanpa alat yang tepat, kamu tidak bisa bekerja dengan baik.

Seorang developer juga butuh alat-alat:

| Alat                | Fungsinya              | Yang Akan Kita Gunakan  |
| ------------------- | ---------------------- | ----------------------- |
| **Editor kode**     | Tempat menulis kode    | VS Code                 |
| **Terminal**        | Menjalankan perintah   | Terminal bawaan VS Code |
| **Runtime**         | Menjalankan program    | Node.js                 |
| **Package manager** | Menginstall library    | npm (bawaan Node.js)    |
| **Compiler/Runner** | Menjalankan TypeScript | TSX                     |

---

## Editor Kode: VS Code

**VS Code** (Visual Studio Code) adalah editor kode yang dibuat oleh Microsoft. Ini bukan Microsoft Word — ini khusus untuk menulis kode program.

Keunggulan VS Code untuk TypeScript:

- **Syntax highlighting** — kode berwarna-warni sehingga mudah dibaca
- **Autocomplete** — VS Code bisa menebak apa yang ingin kamu tulis
- **Error highlighting** — error ditandai dengan garis merah sebelum kamu menjalankan program
- **Terminal terintegrasi** — kamu bisa menjalankan perintah tanpa keluar dari VS Code

---

## Terminal: Berkomunikasi dengan Komputer

**Terminal** (juga disebut command line atau command prompt) adalah cara berkomunikasi dengan komputer menggunakan **teks**.

Saat kamu klik-klik di Windows Explorer atau Finder, kamu sebenarnya sedang melakukan hal yang sama dengan yang bisa dilakukan di terminal — hanya saja lewat antarmuka grafis.

Di terminal, kamu mengetik perintah seperti:

```
cd Documents
mkdir project-pertama
node index.js
```

Awalnya terminal terasa menakutkan. Tapi kamu akan terbiasa — dan kamu akan menyadari bahwa terminal justru **lebih cepat** dari klik-klik.

:::note[Catatan]
Kita akan banyak menggunakan terminal di guidebook ini. Setiap perintah terminal akan selalu dijelaskan apa artinya sebelum kamu diminta menjalankannya.
:::

---

## Node.js: Menjalankan JavaScript/TypeScript

Ingat di halaman sebelumnya kita membahas bahwa JavaScript bisa berjalan di luar browser menggunakan **Node.js**?

**Node.js** adalah program yang memungkinkan kamu menjalankan kode JavaScript (dan TypeScript) langsung di komputermu — tanpa perlu membuka browser.

Dengan Node.js, kamu bisa:

- Menjalankan program TypeScript dari terminal
- Menggunakan `npm` untuk menginstall library (paket kode siap pakai)

---

## npm: Manajer Paket

**npm** (_Node Package Manager_) adalah program yang otomatis terinstall bersama Node.js. Fungsinya adalah menginstall dan mengelola **paket** — yaitu kode yang dibuat oleh orang lain yang bisa kamu gunakan di projekmu.

Contoh: daripada kamu menulis sendiri kode untuk membaca file, kamu bisa menginstall paket yang sudah ada dan tinggal pakai.

Perintah npm yang akan sering kamu gunakan:

```
npm install nama-paket    ← menginstall sebuah paket
npm init                  ← membuat project baru
```

---

## TSX: Menjalankan TypeScript Langsung

Normalnya, TypeScript harus dikompilasi (diubah) menjadi JavaScript dulu sebelum bisa dijalankan. Prosesnya:

```
Tulis kode .ts → Kompilasi dengan tsc → Hasilkan .js → Jalankan dengan node
```

Ini merepotkan untuk belajar! Setiap kali kamu mengubah kode, kamu harus mengulang proses itu.

Di sinilah **TSX** hadir. TSX adalah alat yang menggabungkan langkah-langkah itu menjadi satu:

```
Tulis kode .ts → Jalankan dengan tsx → Selesai ✓
```

Dengan TSX, kamu cukup mengetik:

```
tsx namafile.ts
```

Dan programnya langsung berjalan. Tidak perlu langkah kompilasi terpisah.

:::tip[Kenapa TSX, bukan ts-node?]
Ada alat serupa bernama `ts-node`. Tapi TSX lebih cepat, lebih mudah dikonfigurasi, dan lebih cocok untuk belajar. Di guidebook ini kita konsisten menggunakan TSX.
:::

---

## Alur Kerja Kita Sehari-hari

Begini alur kerja kita selama belajar di guidebook ini:

```
1. Buka VS Code
       │
       ▼
2. Buka terminal di VS Code
       │
       ▼
3. Tulis kode TypeScript (.ts)
       │
       ▼
4. Jalankan dengan: tsx namafile.ts
       │
       ▼
5. Lihat hasilnya di terminal
       │
       ▼
6. Perbaiki jika ada error, ulangi dari langkah 3
```

Sederhana, bukan? Seluruh proses belajar kita akan mengikuti pola ini.

---

## Ilustrasi: Ekosistem Tools Kita

```
┌─────────────────────────────────────────┐
│               VS Code                   │
│  ┌─────────────────┐ ┌───────────────┐  │
│  │   Editor        │ │   Terminal    │  │
│  │   (tulis kode)  │ │   (jalankan  │  │
│  │                 │ │    program)  │  │
│  └─────────────────┘ └───────────────┘  │
└─────────────────────────────────────────┘
         │                    │
         ▼                    ▼
   file .ts              tsx file.ts
                              │
                              ▼
                         Node.js
                         (menjalankan)
                              │
                              ▼
                         Hasil di terminal
```

---

## Ringkasan

- **VS Code** — editor kode tempat kita menulis TypeScript
- **Terminal** — antarmuka teks untuk menjalankan perintah
- **Node.js** — runtime yang menjalankan JavaScript/TypeScript
- **npm** — manajer paket untuk menginstall library
- **TSX** — alat untuk menjalankan TypeScript langsung tanpa kompilasi manual
- Alur kerja: tulis kode → jalankan dengan tsx → lihat hasil → perbaiki jika perlu

:::tip[Langkah Selanjutnya]
Lanjut ke halaman **Persiapan Software** untuk melihat daftar semua software yang perlu diinstall.
:::
