---
title: "Environment Variable — BAB 12"
description: Mengamankan data sensitif seperti password dan API key menggunakan berkas .env dan process.env di TypeScript.
---

# Environment Variable

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan arti dan kegunaan dari *Environment Variable* (Variabel Lingkungan).
- Menggunakan berkas `.env` untuk menyimpan data konfigurasi rahasia.
- Mengakses variabel lingkungan di dalam kode TypeScript menggunakan `process.env`.

---

## Pendahuluan
Saat kamu membuat aplikasi sekolah yang terhubung ke database atau API luar, kamu membutuhkan alamat IP database dan password akses. Menuliskan password tersebut langsung di dalam kode program (*hardcoded*) adalah kesalahan fatal yang membuat database-mu mudah diretas jika kodenya di-upload ke GitHub. 

Kita harus memisahkan data rahasia tersebut ke dalam file khusus bernama **Environment Variable**.

---

## Penjelasan: Cara Kerja Berkas `.env`

**Environment Variable** adalah variabel yang nilainya disimpan di luar kode program, yaitu di tingkat sistem operasi atau di dalam berkas konfigurasi khusus bernama **`.env`** (dibaca: *dot-env*).

Di Node.js/TypeScript, kita membaca variabel tersebut menggunakan objek bawaan:

```ts
process.env.NAMA_VARIABEL
```

Langkah implementasi `.env`:
1. Install library `dotenv` untuk membaca file `.env`: `npm install dotenv`.
2. Buat file bernama `.env` di folder utama project (sejajar dengan `package.json` (BAB 11)).
3. Tulis data rahasia dengan format `KEY=VALUE`.
4. Muat konfigurasinya di awal program: `import "dotenv/config"`.

---

## Analogi Kehidupan Sehari-hari: Kunci Brankas di Laci Rahasia

Bayangkan kamu menulis instruksi untuk guru pengganti di sekolah:

```text
Tugas Guru Pengganti:
- Datang ke kantor
- Buka lemari arsip
- Masukkan kunci nomor [KUNCI_RAHASIA] untuk membuka brankas
```

Kamu tidak menulis angka kunci aslinya (misal: `12345`) di papan tulis kelas yang bisa dibaca semua siswa. Kamu menaruh kunci fisik di laci rahasiamu yang hanya diketahui oleh guru pendidik. 

`[KUNCI_RAHASIA]` di kertas instruksi adalah nama Environment Variable. Kunci aslinya di laci adalah isi file `.env`.

---

## Visual Illustration: Alur Pembacaan .env

```text
File .env (Rahasia): PASSWORD_DB=rpl123
        │
        ▼ di-load oleh dotenv
Aplikasi TypeScript: process.env.PASSWORD_DB ──► mengembalikan "rpl123" secara aman ✓
```

---

## Mari Mencoba: Simulasi Login dengan Password .env

Mari buat simulasi mengambil password dari file `.env` di `src/bab12/test-env.ts`.

### Langkah 1: Buat file `.env` di folder utama projectmu
```text
PORT=3000
PASSWORD_DATABASE=koperasiRpl2026
```

### Langkah 2: Buat berkas `src/bab12/test-env.ts`
```ts
// Muat dotenv di baris paling atas
import "dotenv/config";

const portAplikasi = process.env.PORT ?? "8080"; // gunakan default jika tidak ada
const passwordDb = process.env.PASSWORD_DATABASE;

console.log("=== PENGUJIAN ENVIRONMENT VARIABLE ===");
console.log(`Port Aplikasi     : ${portAplikasi}`);

if (passwordDb !== undefined) {
  console.log(`Password Database : [TERKUNCI AMAN] (${passwordDb.substring(0, 4)}***)`);
} else {
  console.log("⚠ Peringatan: Password database tidak ditemukan di file .env!");
}
```

Jalankan dengan perintah:
```text
tsx src/bab12/test-env.ts
```

## Output
```text
=== PENGUJIAN ENVIRONMENT VARIABLE ===
Port Aplikasi     : 3000
Password Database : [TERKUNCI AMAN] (kope***)
```

---

## Common Mistakes
- **Mengupload file `.env` ke GitHub**: Ini adalah kesalahan paling sering dan fatal. Siapapun di internet bisa melihat password database-mu.
  - *Solusi*: Selalu masukkan nama file `.env` ke dalam file `.gitignore` (BAB 11) sebelum melakukan commit Git. Sebagai gantinya, buatlah file `.env.example` kosong sebagai contoh panduan bagi developer lain.

---

## Tips
:::tip[Sediakan Nilai Default (Fallback)]
Gunakan operator nullish coalescing `??` (BAB 2) saat membaca `process.env` untuk menyediakan nilai default aman jika variabel tersebut belum dideklarasikan di file `.env`:
```ts
const port = process.env.PORT ?? "3000";
```
:::

---

## Best Practice
- Gunakan format nama variabel `UPPER_SNAKE_CASE` (semua huruf besar dipisahkan garis bawah) untuk semua key di dalam file `.env`: `DATABASE_URL=...`, `API_KEY=...`.

---

## Ringkasan
- Environment Variable menyimpan data sensitif/konfigurasi di luar kode program.
- Berkas `.env` diletakkan di root project dan **wajib** dimasukkan ke `.gitignore`.
- Dibaca di TypeScript menggunakan syntax `process.env.NAMA_KEY` dibantu library `dotenv`.

---

## Latihan
1. Buat file `.env` di root projectmu dan tambahkan variabel `NAMA_SEKOLAH="SMK Negeri Amanah"`.
2. Buat file latihan untuk membaca dan mencetak isi variabel tersebut menggunakan `process.env`.
