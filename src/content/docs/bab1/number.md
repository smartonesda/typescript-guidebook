---
title: "Tipe Data: number"
description: Mempelajari tipe data number di TypeScript — bilangan bulat, desimal, operasi aritmatika, dan metode berguna.
---

# Tipe Data: `number`

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Menggunakan tipe `number` untuk menyimpan angka
- Membedakan bilangan bulat dan desimal dalam TypeScript
- Melakukan operasi aritmatika dasar
- Menggunakan metode berguna pada angka

---

## Pendahuluan

`number` adalah tipe data yang digunakan untuk menyimpan **nilai angka** — baik bilangan bulat (1, 2, 100) maupun bilangan desimal (3.14, 0.5, -2.7).

Di TypeScript (dan JavaScript), tidak ada perbedaan antara tipe "integer" dan "float" seperti di bahasa lain — semuanya masuk ke dalam satu tipe: `number`.

---

## Analogi: Kalkulator

Bayangkan tipe `number` seperti **kalkulator**. Kalkulator hanya mengerti angka — tidak bisa dimasukkan teks "dua ratus". Ia hanya menerima: 200, 3.14, -50, dan sebagainya.

Variabel bertipe `number` pun seperti itu — ia hanya mau menerima angka.

---

## Jenis-jenis Nilai number

```ts
// Bilangan bulat (integer)
let jumlahSiswa: number = 36
let peringkat: number = 1
let tahun: number = 2024
let suhu: number = -5        // bisa negatif

// Bilangan desimal (float)
let nilaiRataRata: number = 87.5
let beratBadan: number = 52.3
let pi: number = 3.14159

// Notasi ilmiah
let jarakBumi: number = 1.496e11     // 149.600.000.000 meter

// Hexadecimal (basis 16)
let warnaHex: number = 0xFF          // 255 dalam basis 10

// Nilai khusus
let tidakValid: number = NaN         // Not a Number
let takTerhingga: number = Infinity
let negatifTakTerhingga: number = -Infinity
```

---

## Operasi Aritmatika

TypeScript mendukung semua operasi matematika dasar:

| Operator | Nama | Contoh | Hasil |
|----------|------|--------|-------|
| `+` | Penjumlahan | `5 + 3` | `8` |
| `-` | Pengurangan | `10 - 4` | `6` |
| `*` | Perkalian | `6 * 7` | `42` |
| `/` | Pembagian | `15 / 4` | `3.75` |
| `%` | Modulus (sisa bagi) | `17 % 5` | `2` |
| `**` | Pangkat | `2 ** 8` | `256` |

---

## Mari Mencoba

Buat file `src/bab1/number.ts`:

```ts
// Deklarasi variabel number
const nilaiMatematika: number = 85
const nilaiIndonesia: number = 90
const nilaiInggris: number = 78
const jumlahMapel: number = 3

// Operasi aritmatika
const totalNilai: number = nilaiMatematika + nilaiIndonesia + nilaiInggris
const rataRata: number = totalNilai / jumlahMapel

console.log("=== LAPORAN NILAI ===")
console.log("Matematika  :", nilaiMatematika)
console.log("Indonesia   :", nilaiIndonesia)
console.log("Inggris     :", nilaiInggris)
console.log("Total Nilai :", totalNilai)
console.log("Rata-rata   :", rataRata)

// Operasi tambahan
const nilaiDibulatkan: number = Math.round(rataRata)
const nilaiMaksimum: number = Math.max(nilaiMatematika, nilaiIndonesia, nilaiInggris)
const nilaiMinimum: number = Math.min(nilaiMatematika, nilaiIndonesia, nilaiInggris)

console.log("---")
console.log("Dibulatkan  :", nilaiDibulatkan)
console.log("Nilai max   :", nilaiMaksimum)
console.log("Nilai min   :", nilaiMinimum)
```

Jalankan:

```
tsx src/bab1/number.ts
```

Output:

```
=== LAPORAN NILAI ===
Matematika  : 85
Indonesia   : 90
Inggris     : 78
Total Nilai : 253
Rata-rata   : 84.33333333333333
---
Dibulatkan  : 84
Nilai max   : 90
Nilai min   : 78
```

---

## Penjelasan Baris per Baris

```ts
const totalNilai: number = nilaiMatematika + nilaiIndonesia + nilaiInggris
```
Menjumlahkan tiga variabel angka dan menyimpan hasilnya ke `totalNilai`.

```ts
const rataRata: number = totalNilai / jumlahMapel
```
Membagi total nilai dengan jumlah mata pelajaran. Hasilnya berupa desimal.

```ts
const nilaiDibulatkan: number = Math.round(rataRata)
```
`Math.round()` adalah fungsi bawaan TypeScript untuk membulatkan angka ke bilangan bulat terdekat.

```ts
const nilaiMaksimum: number = Math.max(nilaiMatematika, nilaiIndonesia, nilaiInggris)
```
`Math.max()` mengembalikan nilai terbesar dari semua angka yang diberikan.

---

## Metode Math yang Sering Digunakan

```ts
Math.round(4.6)    // 5 — bulatkan ke terdekat
Math.floor(4.9)    // 4 — bulatkan ke bawah
Math.ceil(4.1)     // 5 — bulatkan ke atas
Math.abs(-10)      // 10 — nilai absolut (hapus tanda negatif)
Math.sqrt(25)      // 5 — akar kuadrat
Math.pow(2, 10)    // 1024 — pangkat (sama dengan 2**10)
Math.max(1, 5, 3)  // 5 — nilai terbesar
Math.min(1, 5, 3)  // 1 — nilai terkecil
```

---

## Mengubah Number ke String dan Sebaliknya

```ts
// Number ke String
let nilai: number = 90
let nilaiStr: string = nilai.toString()
let nilaiStr2: string = String(nilai)
console.log(typeof nilaiStr)   // "string"

// String ke Number
let inputUser: string = "85"
let nilaiNum: number = Number(inputUser)
let nilaiNum2: number = parseInt(inputUser)
console.log(typeof nilaiNum)   // "number"
```

:::note[Catatan]
`typeof` adalah operator yang mengembalikan tipe data dari sebuah nilai sebagai string.
:::

---

## Kesalahan Umum

### ❌ Operasi angka dengan string menghasilkan hasil tak terduga

```ts
let nilai: number = 90
let bonus: string = "10"

let total = nilai + bonus   // Bukan 100!
console.log(total)          // "9010" — string digabung, bukan dijumlah!
```

**Mengapa?** Karena `+` antara number dan string diinterpretasikan sebagai **penggabungan string**, bukan penjumlahan.

**Cara memperbaiki:**

```ts
let total = nilai + Number(bonus)   // 100 ✓
```

### ❌ Pembagian menghasilkan NaN

```ts
let hasil = 0 / 0
console.log(hasil)   // NaN

let cek = Number("abc")
console.log(cek)     // NaN — "abc" bukan angka valid
```

---

## Latihan

Buat file `src/bab1/latihan-number.ts`:

1. Buat variabel untuk menyimpan panjang dan lebar sebuah ruangan (dalam meter)
2. Hitung **luas** ruangan (panjang × lebar)
3. Hitung **keliling** ruangan (2 × (panjang + lebar))
4. Tampilkan hasil dengan format yang rapi

---

## Ringkasan

- `number` menyimpan semua jenis angka: bulat, desimal, negatif
- Operasi aritmatika: `+`, `-`, `*`, `/`, `%`, `**`
- `Math` menyediakan banyak fungsi matematika berguna
- Hati-hati operasi `+` antara number dan string — bisa menghasilkan penggabungan string
- Konversi: `Number("85")` untuk string ke number, `.toString()` untuk number ke string

:::tip[Langkah Selanjutnya]
Lanjut ke **string** untuk mempelajari tipe data teks.
:::
