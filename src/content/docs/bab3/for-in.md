---
title: "Loop: for...in"
description: Mengiterasi nama properti (key) dalam sebuah object dengan for...in.
---

# Loop `for...in`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menggunakan `for...in` untuk membaca nama properti dari sebuah object satu per satu.

---

## Pendahuluan

`for...in` dirancang untuk mengunjungi setiap **nama properti** (key) dalam sebuah object. Berbeda dengan `for...of` yang fokus pada nilai, `for...in` fokus pada nama kuncinya.

---

## Analogi Kehidupan Sehari-hari

### Label Laci Lemari

Bayangkan lemari arsip dengan laci berlabel: "Matematika", "Indonesia", "Inggris". Kamu membuka setiap laci dan membaca labelnya satu per satu.

```text
Untuk setiap laci dalam lemari:
  Baca nama label
  Tampilkan isi
Selesai
```

`for...in` membaca nama label (key). Kita bisa gunakan nama itu untuk mengambil nilai (isi laci).

---

## Penjelasan Materi

Bentuk dasar:

```ts
for (const kunci in object) {
  // kunci adalah nama properti
  // object[kunci] adalah nilainya
}
```

---

## Mari Mencoba

Buat `src/bab3/for-in.ts`:

```ts
const nilaiSiswa = {
  matematika: 88,
  indonesia: 92,
  inggris: 78,
  pemrograman: 95,
}

console.log("=== Nilai Per Mata Pelajaran ===")
for (const mapel in nilaiSiswa) {
  const nilai = nilaiSiswa[mapel as keyof typeof nilaiSiswa]
  console.log(`${mapel}: ${nilai}`)
}
```

Jalankan:

```text
tsx src/bab3/for-in.ts
```

## Output

```text
=== Nilai Per Mata Pelajaran ===
matematika: 88
indonesia: 92
inggris: 78
pemrograman: 95
```

---

## Penjelasan Baris per Baris

- `const nilaiSiswa = {...}` — object dengan properti nama mata pelajaran.
- `for (const mapel in nilaiSiswa)` — setiap putaran, `mapel` mendapat nama properti (string).
- `nilaiSiswa[mapel as keyof typeof nilaiSiswa]` — cara TypeScript yang aman untuk mengakses nilai menggunakan key dinamis.
- `as keyof typeof nilaiSiswa` — memberitahu TypeScript bahwa `mapel` adalah salah satu key yang valid.

---

## for...in vs for...of

| | `for...in` | `for...of` |
|---|---|---|
| Bekerja pada | Object | Array, string |
| Menghasilkan | Nama properti (key) | Nilai elemen |
| Contoh hasil | `"matematika"` | `88` |

---

## Kesalahan yang Sering Terjadi

```ts
const angka: number[] = [10, 20, 30]

for (const i in angka) {
  console.log(i)     // "0", "1", "2" — indeks sebagai string!
  console.log(angka[i]) // nilai
}
```

`for...in` pada array menghasilkan indeks sebagai string, bukan nilai. Untuk array, lebih baik gunakan `for...of` atau `for` biasa.

---

## Tips

:::tip[for...in untuk Object, for...of untuk Array]
Patokan mudah: pakai `for...in` untuk membaca key object. Pakai `for...of` untuk membaca nilai array.
:::

---

## Latihan

Buat object berisi data siswa: nama, kelas, dan jurusan. Gunakan `for...in` untuk menampilkan setiap informasi beserta labelnya.

---

## Ringkasan

- `for...in` mengiterasi **nama properti** (key) dari sebuah object.
- Gunakan `object[key]` untuk mengambil nilainya.
- Jangan gunakan `for...in` untuk array — gunakan `for...of` atau `for`.

:::tip[Langkah Selanjutnya]
Lanjut ke **Nested Loop** untuk loop di dalam loop.
:::
