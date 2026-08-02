---
title: "Panjang Array"
description: Menggunakan properti length untuk mengetahui jumlah elemen di dalam array.
---

# Panjang Array

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menggunakan properti `length` untuk mengetahui jumlah elemen array dan mengakses elemen terakhir secara dinamis.

---

## Pendahuluan

Seringkali kita tidak tahu pasti berapa jumlah elemen yang ada di dalam sebuah array, terutama jika data array berasal dari database atau diinput oleh pengguna. TypeScript menyediakan properti bawaan bernama `length` untuk mengetahui jumlah data.

---

## Penjelasan Materi

Setiap array memiliki properti bernama `length` yang mengembalikan **jumlah elemen** di dalamnya sebagai `number`.

```ts
const siswa = ["Andi", "Budi"]
console.log(siswa.length) // 2
```

---

## Analogi Kehidupan Sehari-hari

### Mengukur Lebar Rak Buku

Mencari tahu panjang array dengan `.length` seperti mengukur berapa banyak sekat yang dimiliki rak buku tersebut. Jika rak memiliki 5 sekat, maka panjangnya adalah 5.

---

## Visual Illustration

```text
const buah = ["Apel", "Mangga", "Jeruk"]

Panjang (length) = 3

Indeks valid    = 0, 1, 2
Indeks terakhir  = length - 1 (3 - 1 = 2)
```

---

## Mari Mencoba

Buat `src/bab5/panjang-array.ts`:

```ts
const namaSiswa: string[] = ["Andi", "Budi", "Citra", "Dian"]
console.log(`Jumlah siswa: ${namaSiswa.length}`)

// Mengakses elemen terakhir secara dinamis
const indeksTerakhir = namaSiswa.length - 1
console.log(`Siswa terakhir: ${namaSiswa[indeksTerakhir]}`)

// Memeriksa apakah array kosong
const keranjangBelanja: string[] = []
if (keranjangBelanja.length === 0) {
  console.log("Keranjang belanja kosong.")
}
```

Jalankan:

```text
tsx src/bab5/panjang-array.ts
```

## Output

```text
Jumlah siswa: 4
Siswa terakhir: Dian
Keranjang belanja kosong.
```

---

## Penjelasan Baris per Baris

- `namaSiswa.length` — mengembalikan angka 4.
- `namaSiswa.length - 1` — karena indeks mulai dari 0, indeks dari elemen terakhir selalu panjang array dikurangi 1 (4 - 1 = 3).
- `keranjangBelanja.length === 0` — cara standar memeriksa apakah array tidak memiliki elemen.

---

## Mengubah Panjang Array Secara Paksa (Hindari!)

Di JavaScript, kamu bisa memotong array dengan mengubah properti `length` secara langsung. Namun ini dianggap sebagai kebiasaan buruk yang berbahaya:

```ts
const data = [1, 2, 3, 4, 5]
data.length = 3 // memotong array secara paksa!
console.log(data) // [1, 2, 3]
```

:::caution[Jangan Mengubah length Secara Manual]
Biarkan properti `length` dikelola secara otomatis oleh TypeScript. Mengubahnya secara manual dapat merusak data secara permanen.
:::

---

## Latihan

Buat array berisi daftar mata pelajaran sekolahmu. Tampilkan jumlah mata pelajaran tersebut, lalu tampilkan nama mata pelajaran terakhir di daftar secara dinamis (menggunakan properti `length`).

---

## Ringkasan

- Properti `.length` mengembalikan jumlah elemen dalam array.
- Indeks elemen terakhir selalu `length - 1`.
- Memeriksa array kosong: `array.length === 0`.
- Jangan mengubah properti `length` secara manual.

:::tip[Langkah Selanjutnya]
Lanjut ke **Iterasi Array**.
:::
