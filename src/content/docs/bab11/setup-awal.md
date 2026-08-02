---
title: "Setup Awal Project — BAB 11"
description: Menginisialisasi berkas tsconfig.json dan membuat folder-folder terstruktur di dalam direktori src/.
---

# Setup Awal Project

## Tujuan Pembelajaran
Setelah mengikuti halaman ini, kamu diharapkan dapat:
- Membuat folder-folder terstruktur (`models`, `interfaces`, dll) di dalam direktori `src/` menggunakan terminal.
- Menginisialisasi file konfigurasi `tsconfig.json` menggunakan perintah `tsc --init`.
- Mengonfigurasi `tsconfig.json` agar mendukung module modern.

---

## Pendahuluan
Setelah memiliki akte project (`package.json`), langkah berikutnya adalah menyiapkan aturan main compiler TypeScript (`tsconfig.json`) dan membuat seluruh ruangan sekat folder kosong di dalam direktori `src/`.

---

## Penjelasan
TypeScript membutuhkan file konfigurasi `tsconfig.json` untuk mengetahui bagaimana cara mengubah file `.ts` kita menjadi `.js` yang dipahami komputer. Kita harus menyalakan opsi module modern `NodeNext` agar sistem `import`/`export` antarfolder berjalan lancar tanpa bentrok.

---

## Analogi Kehidupan Sehari-hari: Memasang Rak di Dinding Kamar
Membuat folder-folder kosong di dalam `src/` seperti **memasang rak-rak kayu kosong bersekat di dinding kamarmu**:

```text
- Sekat 1: Khusus Buku Tulis (models)
- Sekat 2: Khusus Alat Tulis (services)
- Sekat 3: Khusus Arsip Dokumen (repositories)
```

Laci sekat tersebut masih kosong belum ada barangnya, tetapi posisinya sudah terpasang rapi di dinding. `tsconfig.json` bertindak seperti buku aturan kerapian kamar: *"Semua barang harus ditaruh di dalam rak src, dilarang menaruh barang berserakan di atas lantai."*

---

## Visual Illustration: Desain Struktur File Awal

```text
siakad-final/
├── src/
│   ├── helpers/
│   ├── interfaces/
│   ├── models/
│   ├── repositories/
│   ├── services/
│   └── main.ts
├── package.json
└── tsconfig.json
```

---

## Live Coding: Perintah Setup Folder & Compiler
Jalankan perintah berikut di terminal untuk membuat file `tsconfig.json` dan folder-folder kosong:

```bash
# Inisialisasi konfigurasi compiler
tsc --init

# Membuat folder-folder kosong di dalam src (Windows PowerShell)
New-Item -ItemType Directory -Force -Path "src/models", "src/interfaces", "src/repositories", "src/services", "src/helpers"
New-Item -ItemType File -Path "src/main.ts"
```

---

## Output
Sebuah file `tsconfig.json` akan muncul di VS Code. Buka file tersebut dan perbarui konfigurasinya agar menjadi seperti ini:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

---

## Penjelasan Baris per Baris
- `"target": "ES2022"`: Mengubah file TS kita menjadi JavaScript standar tahun 2022.
- `"moduleResolution": "NodeNext"`: Cara compiler mendeteksi module modern.
- `"outDir": "./dist"`: Menentukan folder `dist/` sebagai tempat penyimpanan file JavaScript hasil compile akhir.

---

## Common Mistakes
- **Salah Folder include**: Lupa menuliskan `"include": ["src/**/*"]`. Akibatnya, compiler akan ikut memeriksa folder `node_modules` yang berisi jutaan baris kode library luar, sehingga VS Code akan menjadi sangat lambat dan memicu banyak error palsu.

---

## Tips
:::tip[Gunakan strict mode]
Selalu biarkan `"strict": true` tetap menyala. Mode ketat ini adalah pelindung terbaikmu agar terhindar dari nilai `null`/`undefined` yang tidak terduga di dalam program.
:::

---

## Ringkasan
- `tsconfig.json` dikonfigurasi menggunakan mode target `ES2022` dan module `NodeNext`.
- Semua folder kode program modular diletakkan di dalam direktori utama `src/`.
- Berkas entry point `main.ts` dibuat sebagai berkas kosong pertama di dalam `src/`.

---

## Latihan
1. Jalankan perintah `tsc --init` di folder projectmu.
2. Edit file `tsconfig.json` sesuai dengan konfigurasi di atas.
3. Buat folder `src/models` dan `src/interfaces` di komputermu.
