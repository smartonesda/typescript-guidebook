---
title: "Ternary Operator"
description: Membuat keputusan if...else sederhana dalam satu ekspresi dengan operator ? :.
---

# Ternary Operator

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat memakai ternary operator untuk keputusan dua pilihan yang pendek dan jelas.

## Pendahuluan

Kadang `if...else` hanya digunakan untuk memilih satu teks pendek. Ternary operator memberi bentuk singkat untuk keputusan dua jalan seperti itu.

## Analogi Kehidupan Sehari-hari

Ternary seperti pertanyaan cepat di pintu kelas:

```text
Sudah memakai seragam lengkap?
Ya → boleh masuk
Tidak → rapikan seragam
```

Satu pertanyaan, dua kemungkinan jawaban.

## Penjelasan Materi

```ts
kondisi ? nilaiJikaTrue : nilaiJikaFalse
```

Tanda `?` memisahkan kondisi dari hasil benar. Tanda `:` memisahkan hasil benar dari hasil salah.

## Mari Mencoba

Buat `src/bab2/ternary-operator.ts`:

```ts
const nilaiAkhir: number = 76
const batasLulus: number = 75
const status: string = nilaiAkhir >= batasLulus ? "LULUS" : "REMEDIAL"
const pesan: string = status === "LULUS" ? "Selamat, pertahankan!" : "Tetap semangat dan ikuti remedial."

console.log(`Nilai akhir: ${nilaiAkhir}`)
console.log(`Status: ${status}`)
console.log(`Pesan: ${pesan}`)
```

Jalankan:

```text
tsx src/bab2/ternary-operator.ts
```

## Output

```text
Nilai akhir: 76
Status: LULUS
Pesan: Selamat, pertahankan!
```

## Penjelasan Baris per Baris

- `nilaiAkhir >= batasLulus` adalah kondisi boolean.
- `? "LULUS"` dipilih jika kondisi true.
- `: "REMEDIAL"` dipilih jika kondisi false.
- Ternary kedua membandingkan teks status lalu memilih pesan.

## if...else vs Ternary

```ts
let status: string

if (nilaiAkhir >= batasLulus) {
  status = "LULUS"
} else {
  status = "REMEDIAL"
}
```

Versi pendeknya:

```ts
const status = nilaiAkhir >= batasLulus ? "LULUS" : "REMEDIAL"
```

Keduanya benar. Ternary lebih pendek untuk satu keputusan sederhana. Gunakan `if...else` bila setiap cabang memiliki beberapa baris tindakan.

## Kesalahan Umum

```ts
const status = nilaiAkhir >= 75 ? "LULUS"
```

Ternary wajib memiliki bagian setelah `:` untuk kondisi false.

Hindari ternary bertumpuk terlalu panjang. Untuk banyak kategori, gunakan `else if` agar kode mudah dibaca.

## Tips

:::tip[Satu Keputusan Pendek]
Gunakan ternary untuk memilih satu nilai atau satu pesan pendek. Jangan memaksa semua percabangan menjadi satu baris.
:::

## Latihan

Buat variabel `sudahBayarSPP`. Dengan ternary, buat teks `"Pembayaran tercatat"` jika true dan `"Silakan hubungi tata usaha"` jika false.

## Ringkasan

- Bentuk ternary: `kondisi ? hasilTrue : hasilFalse`.
- Cocok untuk dua hasil sederhana.
- Pilih `if...else` jika logika lebih panjang atau lebih dari dua kategori.

:::tip[Langkah Selanjutnya]
Lanjut ke **Studi Kasus**.
:::
