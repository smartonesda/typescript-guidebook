---
title: "Debugging & Compiler Error — BAB 12"
description: Panduan melacak dan memperbaiki error compiler serta membaca stack trace di TypeScript secara sistematis.
---

# Debugging & Compiler Error

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan arti dari *Debugging* (pelacakan bug).
- Membaca pesan error compiler TypeScript secara sistematis.
- Membaca tumpukan panggilan error (*stack trace*) untuk mencari file dan baris pemicu masalah.

---

## Pendahuluan
Error adalah teman terbaik bagi seorang programmer, bukan musuh. Tanpa error, kita tidak tahu bagian mana dari program kita yang salah atau rusak. Namun, pesan error compiler seringkali terlihat sangat panjang dan menakutkan bagi pemula. 

Halaman ini akan mengajarimu cara membaca pesan error tersebut dengan tenang dan sistematis.

---

## Penjelasan: Langkah Sistematis Melacak Error

Proses mencari dan memperbaiki kesalahan di dalam kode program disebut **Debugging** (BAB 11).

Saat programmu mengeluarkan error di terminal, ikuti 3 langkah berikut:

### Langkah 1: Cari Lokasi Kejadian (TKP)
Perhatikan baris pertama dari *stack trace* (tumpukan error). Cari nama file, nomor baris, dan nomor kolom yang ditulis dalam format `:baris:kolom`.

```text
    at ambilData (src/bab10/api-service.ts:12:11)
                                         ▲
                                      baris 12
```

### Langkah 2: Baca Kalimat Inti Error
Bacalah teks setelah tulisan `error TSxxxx:` (BAB 0 & 1). TypeScript biasanya menjelaskan masalahnya secara sangat spesifik:
- `Property 'X' does not exist on type 'Y'`: Ada salah ketik nama properti.
- `Argument of type 'string' is not assignable...`: Salah tipe data saat memanggil fungsi.

### Langkah 3: Periksa Variabel dengan `console.log()`
Jika program tidak memicu error kompilasi tetapi hasilnya salah saat berjalan (logic error), cetaklah isi variabel di baris sebelum masalah terjadi menggunakan `console.log()` untuk memeriksa apakah nilainya sesuai harapan.

---

## Analogi Kehidupan Sehari-hari: Detektif Melacak Jejak Kaki Pencuri
Mencari bug di dalam kode program seperti **seorang Detektif yang melacak jejak pelaku kejahatan**:

```text
Langkah Detektif:
1. Temukan TKP asli  ──► Melihat file & baris pemicu (indeks stack trace)
2. Periksa sidik jari ──► Membaca pesan deskripsi error
3. Rekonstruksi alur  ──► Menelusuri jalannya variabel dari menu ke database
```

Detektif tidak menebak pelaku secara acak dengan membongkar seluruh rumah. Ia fokus pada TKP awal yang memiliki jejak kaki paling jelas.

---

## Visual Illustration: Membaca Pesan Stack Trace

```text
Error: Gagal memuat data (HTTP Status: 404)
    at ambilTugasDariServer (src/bab10/api-service.ts:12:11)  ◄── TKP Utama (Baris 12)
    at buatLaporanTugas (src/bab10/studi-kasus-main.ts:15:26) ◄── Fungsi Pemanggil
```

---

## Example: Penanganan Runtime Error dengan Aman

### Bad Code (Langsung Crash Tanpa Info Bersahabat)
```ts
const data: any = null;
// console.log(data.nama); // CRASH! TypeError: Cannot read properties of null
```

### Good Code (Aman dengan Try Catch / Optional Chaining)
```ts
const data: any = null;
try {
  if (!data) throw new Error("Data belum dimuat dari server!");
  console.log(data.nama);
} catch (err: any) {
  console.log(`[Teratasi]: ${err.message}`); // Aplikasi tidak crash
}
```

---

## Common Mistakes
- **Panik dan Mengubah Kode Secara Acak**: Kebiasaan buruk pemula saat melihat error adalah langsung mengubah kode secara acak dengan harapan *"siapa tahu bisa jalan"*. Ini justru akan menambah bug baru. Tenang, baca error-nya dulu, pahami masalahnya, baru ubah kode secara sengaja.

---

## Tips
:::tip[Manfaatkan Debugger VS Code]
VS Code memiliki fitur debugger bawaan (BAB 11). Kamu bisa menaruh tanda titik merah (breakpoint) di sebelah kiri nomor baris untuk menghentikan program di baris tersebut dan melihat isi variabel secara langsung saat runtime.
:::

---

## Best Practice
- Biasakan menulis kode penanganan error `try...catch` (BAB 10) untuk semua operasi eksternal (Fetch API, operasi file) yang di luar kendali langsung program kita agar aplikasi tidak mudah mati saat server mati.

---

## Ringkasan
- Debugging adalah proses mencari dan memperbaiki kesalahan program.
- Baca stack trace dari atas ke bawah untuk menemukan nama file dan nomor baris pemicu.
- TypeScript error code (seperti `TS2322` (BAB 1)) memberikan petunjuk jenis masalah tipe data secara spesifik.

---

## Latihan
1. Sengaja buat kesalahan syntax pada salah satu method di class `SiswaService` project finalmu.
2. Jalankan perintah build `npm run build` dan bacalah pesan error kompilasi yang dihasilkan di terminal. Tuliskan analisis perbaikannya di catatanmu.
