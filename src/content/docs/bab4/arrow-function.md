---
title: "Arrow Function"
description: Menulis function lebih singkat menggunakan sintaks arrow (=>) di TypeScript.
---

# Arrow Function

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menulis arrow function dan memilih kapan menggunakannya.

---

## Pendahuluan

Arrow function adalah cara menulis function yang lebih singkat. Ia menggunakan tanda panah `=>` sebagai pengganti kata kunci `function`. Arrow function sangat populer dalam kode TypeScript modern.

---

## Sintaks

```ts
// Anonymous function biasa
const tambah = function(a: number, b: number): number {
  return a + b
}

// Arrow function — lebih singkat
const tambah = (a: number, b: number): number => {
  return a + b
}

// Arrow function — sangat singkat (implicit return)
const tambah = (a: number, b: number): number => a + b
```

Jika blok function hanya berisi satu ekspresi return, bisa disingkat tanpa `{}` dan tanpa kata kunci `return`.

---

## Analogi

### Resep yang Disederhanakan

Function biasa seperti resep masakan lengkap dengan semua langkah tertulis. Arrow function seperti versi singkatnya yang tetap menghasilkan makanan yang sama tapi dituliskan lebih efisien.

```text
Resep lengkap:              Resep singkat:
1. Ambil bahan              Campur bahan → panggang 20 menit
2. Campurkan
3. Panggang 20 menit
```

---

## Mari Mencoba

Buat `src/bab4/arrow-function.ts`:

```ts
// Bentuk penuh
const kuadratPenuh = (n: number): number => {
  return n * n
}

// Bentuk singkat (implicit return)
const kuadrat = (n: number): number => n * n

const sapa = (nama: string): string => `Halo, ${nama}!`

const lulus = (nilai: number): boolean => nilai >= 75

const hitungTotal = (angka: number[]): number => {
  let total = 0
  for (const n of angka) total += n
  return total
}

// Memanggil arrow function — sama seperti biasa
console.log(kuadrat(5))                // 25
console.log(kuadrat(9))                // 81
console.log(sapa("Citra"))            // Halo, Citra!
console.log(lulus(80))                 // true
console.log(lulus(60))                 // false
console.log(hitungTotal([10, 20, 30])) // 60
```

Jalankan:

```text
tsx src/bab4/arrow-function.ts
```

## Output

```text
25
81
Halo, Citra!
true
false
60
```

---

## Perbandingan Tiga Gaya

```ts
// Named function
function tambah1(a: number, b: number): number {
  return a + b
}

// Anonymous function
const tambah2 = function(a: number, b: number): number {
  return a + b
}

// Arrow function (singkat)
const tambah3 = (a: number, b: number): number => a + b

// Ketiga menghasilkan output yang sama
console.log(tambah1(3, 4))  // 7
console.log(tambah2(3, 4))  // 7
console.log(tambah3(3, 4))  // 7
```

---

## Kapan Memakai Arrow Function?

- Untuk function satu baris yang hasilnya langsung di-return.
- Sebagai callback (sangat umum).
- Untuk operasi sederhana yang tidak membutuhkan nama eksplisit.

---

## Latihan

1. Tulis ulang function `hitungKeliling(p, l)` sebagai arrow function singkat.
2. Buat array nama siswa dan gunakan `.map()` dengan arrow function untuk mengubah semua nama menjadi huruf besar.

---

## Ringkasan

- Arrow function menggunakan `=>` sebagai pengganti `function`.
- Jika hanya satu ekspresi return, bisa ditulis tanpa `{}` dan `return`.
- Secara fungsi setara dengan anonymous function biasa.
- Sangat populer dalam kode TypeScript modern.

:::tip[Langkah Selanjutnya]
Lanjut ke **Callback** untuk mempelajari function yang dikirimkan sebagai argument.
:::
