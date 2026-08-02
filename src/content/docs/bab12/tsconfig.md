---
title: "tsconfig.json — BAB 12"
description: Memahami arti dan konfigurasi parameter compiler utama di dalam berkas tsconfig.json.
---

# tsconfig.json

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan fungsi dari berkas `tsconfig.json` di dalam project TypeScript.
- Menyebutkan minimal tiga properti penting di dalam `compilerOptions`.
- Mengatur jalur folder input dan output hasil kompilasi.

---

## Pendahuluan
Kita telah menggunakan `tsconfig.json` di BAB 0, BAB 10, dan BAB 11. Namun, apakah kamu benar-benar paham apa arti dari baris-baris opsi di dalamnya? Halaman ini akan membedah konfigurasi `tsconfig.json` agar kamu bisa mengaturnya secara mandiri di project nyata.

---

## Penjelasan: Bedah tsconfig.json

`tsconfig.json` adalah berkas konfigurasi utama untuk compiler TypeScript (`tsc`). Berkas ini menentukan bagaimana file `.ts` akan diubah menjadi JavaScript murni `.js`.

Properti penting di dalam `compilerOptions`:

### 1. `target`
Menentukan standar versi JavaScript yang akan dihasilkan. Opsi populer: `ES6`, `ES2020`, atau `ES2022` (BAB 11). Jika di-set ke `ES5`, compiler akan mengubah kode modernmu (seperti class dan arrow function) menjadi fungsi JavaScript jadul agar bisa berjalan di browser lama.

### 2. `module` & `moduleResolution`
Mengatur bagaimana file modul di-import dan di-export (BAB 10). Pengaturan `NodeNext` (BAB 11) adalah standar modern saat ini.

### 3. `outDir`
Menentukan folder tempat menyimpan file `.js` hasil kompilasi. Biasanya diarahkan ke folder `./dist` atau `./build` (BAB 11) agar tidak mengotori folder source code utama `src/`.

### 4. `strict`
Jika bernilai `true`, TypeScript mengaktifkan seluruh pemeriksaan tipe secara sangat ketat (melarang tipe any implisit, mewajibkan pengecekan null/undefined).

---

## Analogi Kehidupan Sehari-hari: Buku Instruksi Kerja Pabrik Kopi

Mengonfigurasi `tsconfig.json` seperti **memberikan buku instruksi kerja kepada mesin pengolah kopi**:

```text
Buku Instruksi Mesin Kopi (tsconfig.json):
  ├── Target hasil: Bubuk kopi super halus (target: ES2022)
  ├── Filter penyaring: Pasang penyaring partikel kasar (strict: true)
  └── Jalur keluar: Masukkan hasil bubuk ke wadah toples merah (outDir: ./dist)
```

Mesin pengolah (compiler `tsc`) akan mematuhi buku instruksi tersebut saat memproses biji kopi mentah (file `.ts`) menjadi bubuk kopi siap seduh (file `.js`).

---

## Visual Illustration: Alur Proses Kompilasi tsc

```text
src/ (File Mentah .ts) ──► tsc (Membaca tsconfig.json) ──► dist/ (File Siap Dijalankan .js)
```

---

## Example: Konfigurasi tsconfig.json Standar Industri

Berikut adalah konfigurasi bersih yang biasa digunakan untuk project Node.js modern (BAB 11):

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"]
}
```

---

## Common Mistakes
- **Lupa menyalakan strict mode**: Mengubah `"strict": false`. Ini memang membuat coding terasa mudah di awal karena tidak banyak garis merah peringatan, tetapi membuka peluang bug `undefined` masuk saat program dijalankan.

---

## Tips
:::tip[Gunakan tsc --init]
Selalu gunakan perintah `tsc --init` di terminal untuk menghasilkan file `tsconfig.json` bawaan resmi yang lengkap dengan penjelasan komentar di setiap propertinya.
:::

---

## Best Practice
- Masukkan folder `"dist"` hasil kompilasi ke dalam file `.gitignore` (BAB 11) agar file JavaScript hasil compile tidak ikut terunggah mengotori repositori GitHub-mu.

---

## Ringkasan
- `tsconfig.json` mengatur aturan main proses kompilasi compiler TypeScript (`tsc`).
- Opsi `target` menentukan versi JS akhir, `outDir` menentukan folder penyimpanan file hasil, dan `strict` mengaktifkan proteksi ketat.
- Opsi `include` membatasi agar compiler hanya memeriksa folder source code utama (`src/`).

---

## Latihan
1. Tuliskan di file latihan: apa perbedaan antara folder `src/` dan folder `dist/` dalam project TypeScript?
