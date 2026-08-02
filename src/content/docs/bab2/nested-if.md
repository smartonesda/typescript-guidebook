---
title: "Nested if"
description: Membuat kondisi di dalam kondisi lain untuk aturan bertahap.
---

# Nested `if`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat memakai `if` di dalam `if` untuk memeriksa syarat bertahap.

## Pendahuluan

Kadang sebuah syarat baru boleh diperiksa jika syarat pertama lolos. Contohnya pendaftaran lomba: siswa harus aktif dulu, lalu baru dicek apakah nilainya memenuhi syarat.

`if` yang ditulis di dalam blok `if` lain disebut **nested if** atau if bersarang.

## Analogi Kehidupan Sehari-hari

Seperti syarat penerimaan sekolah:

```text
Apakah berkas lengkap?
  Jika ya → apakah nilai memenuhi?
    Jika ya → diterima
    Jika tidak → belum memenuhi nilai
  Jika tidak → lengkapi berkas dahulu
```

Syarat kedua hanya diperiksa setelah syarat pertama benar.

## Mari Mencoba

Buat `src/bab2/nested-if.ts`:

```ts
const statusAktif: boolean = true
const nilaiAkhir: number = 82
const batasLulus: number = 75

if (statusAktif) {
  console.log("Status siswa aktif.")

  if (nilaiAkhir >= batasLulus) {
    console.log("Siswa dinyatakan lulus.")
  } else {
    console.log("Siswa aktif, tetapi perlu remedial.")
  }
} else {
  console.log("Data tidak diproses karena siswa tidak aktif.")
}
```

Jalankan:

```text
tsx src/bab2/nested-if.ts
```

## Output

```text
Status siswa aktif.
Siswa dinyatakan lulus.
```

## Penjelasan Baris per Baris

- `if (statusAktif)` adalah pintu pertama.
- Jika status aktif true, program mencetak pesan lalu masuk ke if kedua.
- `if (nilaiAkhir >= batasLulus)` hanya diperiksa untuk siswa aktif.
- `else` bagian dalam menangani siswa aktif yang belum lulus.
- `else` paling luar menangani siswa yang tidak aktif.

## Visual Illustration

```text
statusAktif?
 ├─ false → data tidak diproses
 └─ true
      │
      ▼
   nilai >= 75?
   ├─ true  → lulus
   └─ false → remedial
```

## Kesalahan Umum

Nested if mudah membingungkan jika kurung kurawal tidak rapi. Setiap `{` harus punya `}`. Rapikan indentasi dua spasi agar terlihat jelas `else` milik `if` yang mana.

## Tips

:::tip[Jangan Terlalu Dalam]
Nested if bagus untuk dua atau tiga tingkat aturan. Jika terlalu dalam, buat boolean bernama atau rapikan aturan agar kode tetap mudah dibaca.
:::

## Latihan

Buat aturan masuk perpustakaan: siswa harus aktif. Jika aktif, cek apakah membawa kartu. Tampilkan pesan berbeda untuk setiap kemungkinan.

## Ringkasan

- Nested if adalah `if` di dalam `if`.
- Cocok untuk syarat yang diperiksa bertahap.
- Rapikan indentasi dan kurung kurawal agar cabang mudah dibaca.

:::tip[Langkah Selanjutnya]
Lanjut ke **switch**.
:::
