---
title: "Percabangan if...else"
description: Memilih satu dari dua tindakan dengan if...else di TypeScript.
---

# Percabangan `if...else`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat keputusan dua arah dengan `if...else`.

---

## Pendahuluan

`if` hanya menangani kondisi benar. Tetapi banyak masalah membutuhkan dua jawaban. Nilai siswa: lulus **atau** belum lulus. Pembayaran: cukup **atau** kurang. Untuk itu gunakan `if...else`.

---

## Analogi Kehidupan Sehari-hari

Seperti hasil ujian:

```text
Jika nilai >= 75 → Lulus
Jika tidak       → Remedial
```

Siswa pasti masuk salah satu hasil. Tidak ada jalan ketiga pada aturan sederhana ini.

---

## Bentuk Dasar

```ts
if (kondisi) {
  // jalan saat true
} else {
  // jalan saat false
}
```

---

## Mari Mencoba

Buat `src/bab2/if-else.ts`:

```ts
const namaSiswa: string = "Rani"
const nilaiAkhir: number = 70
const batasLulus: number = 75

if (nilaiAkhir >= batasLulus) {
  console.log(`${namaSiswa}, kamu dinyatakan LULUS.`)
} else {
  console.log(`${namaSiswa}, kamu perlu mengikuti remedial.`)
}
```

Jalankan:

```text
tsx src/bab2/if-else.ts
```

---

## Output

```text
Rani, kamu perlu mengikuti remedial.
```

Jika nilai diubah menjadi `75` atau lebih, output berubah menjadi pesan lulus.

---

## Penjelasan Baris per Baris

- `if (nilaiAkhir >= batasLulus)` memeriksa batas minimal.
- Jika hasilnya `true`, blok pertama jalan.
- `else` tidak punya kondisi sendiri. Ia menjadi jalan cadangan saat kondisi `if` false.
- Template literal memasukkan nama siswa ke pesan.

---

## Visual Illustration

```text
nilaiAkhir >= 75?
      │
  true│false
      │
      ├──► tampilkan LULUS
      │
      └──► tampilkan remedial
```

---

## Kesalahan Umum

```ts
if (nilaiAkhir >= batasLulus) {
  console.log("Lulus")
}
else {
  console.log("Remedial")
}
```

Kode ini valid, tetapi gaya yang lebih umum adalah `} else {` dalam satu rangkaian. Jangan menulis titik koma setelah `if (...)`:

```ts
if (nilaiAkhir >= batasLulus); {
  console.log("Lulus")
}
```

Titik koma itu mengakhiri `if`, sehingga blok selalu jalan. Hindari.

---

## Tips

:::tip[else untuk Jalan Cadangan]
Gunakan `else` ketika pasti ada tindakan yang harus dilakukan jika kondisi utama false.
:::

---

## Latihan

Buat program cek saldo. Jika saldo minimal `10000`, tampilkan `"Pembayaran berhasil"`; jika tidak, tampilkan `"Saldo tidak cukup"`.

---

## Ringkasan

- `if...else` selalu memilih tepat satu dari dua blok.
- `if` menangani true; `else` menangani false.
- Cocok untuk keputusan dua hasil seperti lulus/remedial.

:::tip[Langkah Selanjutnya]
Lanjut ke **else if**.
:::
