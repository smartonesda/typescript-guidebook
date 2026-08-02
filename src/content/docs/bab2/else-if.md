---
title: "Percabangan else if"
description: Menangani beberapa kondisi berurutan dengan if...else if...else.
---

# Percabangan `else if`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat memilih satu hasil dari beberapa kondisi yang diperiksa berurutan.

## Pendahuluan

Nilai siswa tidak hanya punya dua hasil. Kita mungkin ingin membedakan "Sangat Baik", "Baik", "Cukup", dan "Perlu Bimbingan". Untuk pilihan bertingkat seperti itu gunakan `else if`.

## Analogi Kehidupan Sehari-hari

Bayangkan petugas memberi kategori nilai:

```text
90 ke atas → Sangat Baik
75 ke atas → Baik
60 ke atas → Cukup
lainnya    → Perlu Bimbingan
```

Petugas memeriksa dari kategori tertinggi dahulu. Begitu satu kategori cocok, kategori bawah tidak perlu diperiksa lagi.

## Penjelasan Materi

```ts
if (kondisiPertama) {
  // hasil pertama
} else if (kondisiKedua) {
  // hasil kedua
} else {
  // semua kondisi sebelumnya false
}
```

`else if` dapat ditulis lebih dari satu kali. Namun hanya satu cabang pertama yang kondisinya true yang akan dijalankan.

## Mari Mencoba

Buat `src/bab2/else-if.ts`:

```ts
const nilaiAkhir: number = 82
let kategori: string

if (nilaiAkhir >= 90) {
  kategori = "Sangat Baik"
} else if (nilaiAkhir >= 75) {
  kategori = "Baik"
} else if (nilaiAkhir >= 60) {
  kategori = "Cukup"
} else {
  kategori = "Perlu Bimbingan"
}

console.log(`Nilai: ${nilaiAkhir}`)
console.log(`Kategori: ${kategori}`)
```

Jalankan:

```text
tsx src/bab2/else-if.ts
```

## Output

```text
Nilai: 82
Kategori: Baik
```

## Penjelasan Baris per Baris

- `let kategori: string` dibuat tanpa nilai karena nilainya dipilih di salah satu cabang.
- Kondisi diperiksa dari atas ke bawah.
- `82 >= 90` false, sehingga program lanjut.
- `82 >= 75` true, maka `kategori` menjadi `"Baik"`.
- Setelah satu cabang true, cabang setelahnya dilewati.
- `else` menangani semua nilai yang tidak lolos batas sebelumnya.

## Visual Illustration

```text
nilai >= 90? ── ya → Sangat Baik
      │ tidak
nilai >= 75? ── ya → Baik
      │ tidak
nilai >= 60? ── ya → Cukup
      │ tidak
                 → Perlu Bimbingan
```

## Kesalahan Umum

```ts
if (nilaiAkhir >= 60) {
  kategori = "Cukup"
} else if (nilaiAkhir >= 75) {
  kategori = "Baik"
}
```

Urutan ini salah. Nilai 82 sudah memenuhi `>= 60`, sehingga kategori Baik tidak pernah dicapai. Letakkan batas tertinggi lebih dulu.

## Tips

:::tip[Dari Tinggi ke Rendah]
Untuk kategori nilai memakai `>=`, urutkan kondisi dari batas tertinggi ke terendah.
:::

## Latihan

Buat kategori kehadiran: `Sangat Rajin` untuk 95 ke atas, `Rajin` untuk 80 ke atas, `Cukup` untuk 75 ke atas, dan `Perlu Ditingkatkan` untuk sisanya.

## Ringkasan

- `else if` menangani lebih dari dua kondisi.
- Kondisi diperiksa dari atas ke bawah.
- Hanya satu cabang pertama yang true dijalankan.
- Untuk batas angka, urutkan dari tinggi ke rendah.

:::tip[Langkah Selanjutnya]
Lanjut ke **Nested if**.
:::
