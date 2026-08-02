---
title: "Array: reduce"
description: Mengakumulasikan seluruh elemen array menjadi satu nilai tunggal dengan reduce().
---

# Array: `reduce`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menjelaskan cara kerja accumulator dan menggunakan `reduce()` untuk menjumlahkan atau menggabungkan seluruh elemen array menjadi satu nilai akhir.

---

## Pendahuluan

Seringkali kita perlu mereduksi seluruh isi array menjadi **satu nilai tunggal**. Contoh paling umum: menjumlahkan total harga belanjaan, mencari nilai rata-rata kelas, atau menggabungkan semua teks menjadi satu paragraf. Kita menggunakan method `.reduce()`.

---

## Penjelasan Materi

Method `reduce()` (mereduksi) menjalankan callback function pada setiap elemen array secara berurutan, dengan membawa hasil kalkulasi dari putaran sebelumnya.

Sintaks dasar:

```ts
const hasil = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, nilaiAwal)
```

| Komponen | Fungsi |
|---|---|
| **accumulator** | Penampung nilai akumulasi (seperti celengan) |
| **currentValue** | Elemen array yang sedang diproses pada putaran ini |
| **nilaiAwal** | Nilai awal dari accumulator saat loop dimulai |

---

## Analogi Kehidupan Sehari-hari

### Celengan Koin

Kamu memiliki 4 koin dengan nilai yang berbeda di atas meja: 100, 200, 500, 1000. Kamu ingin tahu total uangmu menggunakan celengan (accumulator):

1. Saldo awal celengan = `0` (nilaiAwal)
2. Putaran 1: Ambil koin 100 → masukkan ke celengan. Saldo = `100`
3. Putaran 2: Ambil koin 200 → masukkan ke celengan. Saldo = `300`
4. Putaran 3: Ambil koin 500 → masukkan ke celengan. Saldo = `800`
5. Putaran 4: Ambil koin 1000 → masukkan ke celengan. Saldo = `1800`

Di akhir, kamu mendapatkan satu nilai total di dalam celengan: `1800`.

---

## Visual Illustration

```text
Array: [10, 20, 30] | nilaiAwal = 0

Putaran 1: acc = 0,  curr = 10 ──► hasil = 10
Putaran 2: acc = 10, curr = 20 ──► hasil = 30
Putaran 3: acc = 30, curr = 30 ──► hasil = 60

Hasil Akhir = 60
```

---

## Mari Mencoba

Buat `src/bab5/reduce.ts`:

```ts
const nilaiUjian: number[] = [80, 85, 90, 75]

// 1. Menghitung total nilai
const totalNilai = nilaiUjian.reduce((acc, curr) => {
  return acc + curr
}, 0)

console.log("Total nilai:", totalNilai)
console.log("Rata-rata  :", totalNilai / nilaiUjian.length)

// 2. Menggabungkan string
const kata: string[] = ["Belajar", "TypeScript", "Seru"]
const kalimat = kata.reduce((acc, curr) => {
  return acc + " " + curr
}, "SMK:")

console.log("\nKalimat    :", kalimat)
```

Jalankan:

```text
tsx src/bab5/reduce.ts
```

## Output

```text
Total nilai: 330
Rata-rata  : 82.5

Kalimat    : SMK: Belajar TypeScript Seru
```

---

## Penjelasan Baris per Baris

- `nilaiUjian.reduce(..., 0)` — memulai akumulator dari angka `0`. Setiap elemen ditambahkan ke `acc` dan dikembalikan untuk putaran berikutnya.
- `kata.reduce(..., "SMK:")` — memulai akumulator dengan string `"SMK:"`. String berikutnya digabungkan dengan spasi.

---

## Kesalahan yang Sering Terjadi

### ❌ Lupa memberikan nilai awal (nilaiAwal)

Jika nilai awal dilewatkan, `reduce()` otomatis memakai elemen pertama array sebagai nilai awal accumulator. Ini bisa menyebabkan error jika tipe data array kosong atau tipe data accumulator berbeda dengan tipe elemen array.

**Perbaikan:** Selalu tulis nilai awal (seperti `0` untuk angka atau `""` untuk string) sebagai parameter kedua `reduce`.

---

## Tips

:::tip[Gunakan untuk Akumulasi Kompleks]
Meskipun menjumlahkan angka bisa dilakukan menggunakan loop `for...of` biasa, `reduce()` lebih disukai oleh programmer profesional karena kodenya ringkas dan fungsional.
:::

---

## Latihan

Buat array berisi daftar harga 4 barang belanjaan. Gunakan `reduce()` untuk menghitung total biaya belanjaan tersebut, dan tampilkan hasilnya dengan format yang rapi.

---

## Ringkasan

- `reduce()` mereduksi array menjadi satu nilai tunggal.
- Menggunakan `accumulator` (penampung) dan `currentValue` (elemen saat ini).
- Wajib menyertakan `nilaiAwal` untuk keamanan tipe data.
- Menghasilkan nilai tunggal, bukan array baru.

:::tip[Langkah Selanjutnya]
Lanjut ke **sort**.
:::
