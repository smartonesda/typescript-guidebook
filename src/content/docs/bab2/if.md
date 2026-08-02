---
title: "Percabangan if"
description: Menjalankan kode hanya jika kondisi bernilai true dengan if statement.
---

# Percabangan `if`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat `if` yang menjalankan blok kode saat kondisi benar.

---

## Pendahuluan

Gunakan `if` saat program hanya perlu melakukan tindakan tambahan bila sebuah syarat terpenuhi. Jika syarat tidak terpenuhi, program lanjut tanpa melakukan tindakan itu.

---

## Analogi Kehidupan Sehari-hari

Bayangkan pengumuman kelas:

```text
Jika hari ini ulang tahun siswa,
ucapkan selamat ulang tahun.
```

Jika bukan hari ulang tahun, tidak perlu ada pesan apa pun. Inilah pola `if`.

---

## Bentuk Dasar

```ts
if (kondisi) {
  // kode dijalankan jika kondisi true
}
```

---

## Mari Mencoba

Buat `src/bab2/if.ts`:

```ts
const nilaiUjian: number = 92
const batasNilaiSangatBaik: number = 90

if (nilaiUjian >= batasNilaiSangatBaik) {
  console.log("Nilai kamu sangat baik!")
  console.log("Kamu mendapat apresiasi dari guru.")
}

console.log("Program selesai memeriksa nilai.")
```

Jalankan:

```text
tsx src/bab2/if.ts
```

---

## Output

```text
Nilai kamu sangat baik!
Kamu mendapat apresiasi dari guru.
Program selesai memeriksa nilai.
```

Ubah `nilaiUjian` menjadi `80`. Dua pesan dalam blok `if` tidak muncul, tetapi pesan terakhir tetap muncul.

---

## Penjelasan Baris per Baris

- `nilaiUjian` dan `batasNilaiSangatBaik` adalah data angka.
- `if` meminta TypeScript mengecek kondisi di dalam `()`.
- `>=` menghasilkan boolean.
- `{}` membungkus dua pesan yang hanya dijalankan bila kondisi true.
- Baris terakhir berada di luar blok, sehingga selalu berjalan.

---

## Visual Illustration

```text
nilaiUjian >= 90?
       │
 true  │ false
       ▼
 tampilkan apresiasi
       │
       ▼
program lanjut
```

---

## Kesalahan Umum

```ts
if (nilaiUjian = 90) {
  console.log("Bagus")
}
```

Ini memakai `=` untuk mengisi nilai. Kondisi harus memakai operator perbandingan, misalnya `>=` atau `===`.

```ts
if nilaiUjian >= 90 {
```

TypeScript membutuhkan tanda kurung `()` dan kurung kurawal `{}`.

---

## Tips

:::tip[Gunakan Boolean Bermakna]
Kondisi panjang boleh dipindah ke variabel: `const nilaiSangatBaik = nilaiUjian >= 90`. Nama itu membuat `if (nilaiSangatBaik)` mudah dibaca.
:::

---

## Latihan

Buat variabel `jumlahPoin`. Jika poin minimal `100`, tampilkan `"Badge siswa aktif terbuka"`. Coba beberapa nilai poin.

---

## Ringkasan

- `if` menjalankan blok hanya jika kondisi true.
- Kode di luar blok `if` selalu lanjut berjalan.
- Gunakan `()` untuk kondisi dan `{}` untuk blok kode.

:::tip[Langkah Selanjutnya]
Lanjut ke **if...else**.
:::
