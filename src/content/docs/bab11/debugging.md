---
title: "Panduan Debugging — BAB 11"
description: Panduan melacak dan memperbaiki error umum saat menyusun aplikasi modular multi-file di TypeScript.
---

# Panduan Debugging (Pelacakan Error)

## Tujuan Pembelajaran
Setelah mengikuti halaman ini, kamu diharapkan dapat:
- Mengenali dan memperbaiki error *Cannot find module* akibat salah menulis path impor.
- Mengatasi tipe data tidak cocok (*type mismatch*) pada properti generic.
- Melacak letak baris penyebab error menggunakan pesan tumpukan (*stack trace*).

---

## Pendahuluan
Ketika kamu membagi kode ke dalam banyak file terpisah, potensi menemui error saat kompilasi atau runtime meningkat. Jangan panik! Pesan error TypeScript sangat detail. Jika kamu tahu cara membacanya, kamu bisa menyelesaikan masalah dengan cepat.

---

## Penjelasan
Di dalam programming, mencari kesalahan program (debugging) adalah keterampilan utama.
Error umum di pemrograman modular biasanya berkisar pada:
1. **Compilation Error**: Kesalahan syntax yang ditandai garis merah di VS Code sebelum file dijalankan.
2. **Runtime Error**: Program berhasil dijalankan, tetapi tiba-tiba mati tengah jalan (misal: saat Fetch API offline).

Kita harus terbiasa membaca baris paling atas dari pesan error stack trace di terminal untuk mengetahui berkas mana dan baris ke berapa yang memicu masalah.

---

## Analogi Kehidupan Sehari-hari: Detektif Melacak Jejak Sidik Jari
Mencari bug di dalam kode pemrograman modular seperti **seorang Detektif yang sedang melacak pelaku pencurian**:

```text
Langkah Detektif:
1. Cari TKP (Temukan file dan nomor baris dari pesan error).
2. Periksa bukti fisik (Perhatikan nama variabel dan tipe datanya).
3. Buat rekonstruksi kejadian (Lacak alur data dari menu konsol ke service, lalu ke repo).
```

Detektif tidak menebak pelaku secara acak. Ia mengikuti jejak sidik jari (pesan error stack trace) untuk menemukan pelaku dengan akurat.

---

## Visual Illustration: Membaca Pesan Stack Trace

```text
Error: Gagal memuat data (HTTP Status: 404)
    at ambilTugasDariServer (src/bab10/api-service.ts:12:11)  ◄── TKP utama!
    at buatLaporanTugas (src/bab10/studi-kasus-main.ts:15:26) ◄── Pemanggil
```

---

## Live Coding: Contoh Error Sengaja & Penanganannya
Berikut adalah simulasi error tipe data akibat input string dari readline dimasukkan ke number:

```ts
// Kode simulasi error
const inputUser: string = "85";

// const nilaiUjian: number = inputUser; // Error! Type 'string' is not assignable to type 'number'

const nilaiUjianAman: number = Number(inputUser); // ✓ Solusi konversi tipe
console.log(`Konversi aman: ${nilaiUjianAman}`);
```

---

## Output
Hasil eksekusi program simulasi di terminal:

```text
Konversi aman: 85
```

---

## Penjelasan Baris per Baris
- `const nilaiUjian: number = inputUser;`: Baris ini memicu error kompilasi karena type safety TypeScript melarang keras pencampuran tipe data secara implisit.
- `Number(inputUser)`: Fungsi konversi tipe bawaan JavaScript untuk mengubah string menjadi number secara aman.

---

## Common Mistakes
- **Mengabaikan Pesan Error VS Code**: Memaksa menjalankan kode menggunakan `tsx` meskipun file di VS Code masih memiliki garis merah. TypeScript tidak akan meloloskan kompilasi jika ada garis merah.

---

## Tips
:::tip[Gunakan breakpoints]
VS Code memiliki fitur debugger bawaan. Kamu bisa menaruh tanda titik merah (breakpoint) di sebelah kiri nomor baris untuk menghentikan program di baris tersebut dan melihat isi variabel secara langsung saat runtime.
:::

---

## Ringkasan
- Error *Cannot find module* diatasi dengan memeriksa ejaan path file impor tanpa ekstensi `.ts`.
- Input terminal berupa string wajib dikonversi menggunakan `Number()` jika ingin disimpan ke tipe data number.
- Jejak error (*stack trace*) menunjukkan secara presisi lokasi file dan nomor baris yang bermasalah.

---

## Latihan
1. Sengaja buat error di dalam `main.ts` kamu (misal: hapus salah satu nama impor).
2. Baca pesan error yang dikeluarkan compiler, catat nomor baris yang ditunjuk, lalu perbaiki kembali.
