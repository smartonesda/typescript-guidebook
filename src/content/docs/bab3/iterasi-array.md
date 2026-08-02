---
title: "Iterasi Array"
description: Memproses setiap elemen array menggunakan berbagai jenis loop di TypeScript.
---

# Iterasi Array

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat memilih loop yang tepat untuk memproses data array dan melakukan operasi umum seperti penjumlahan, pencarian, dan pemfilteran.

---

## Pendahuluan

Array adalah cara menyimpan banyak nilai dalam satu variabel. Loop dan array adalah pasangan sempurna: loop memungkinkan kita memproses setiap elemen array satu per satu tanpa menulis kode berulang.

---

## Analogi Kehidupan Sehari-hari

### Memeriksa Setiap Jawaban Ujian

Guru memiliki tumpukan lembar jawaban siswa. Ia memeriksa satu per satu dari atas ke bawah, menghitung nilai, dan mencatat siapa yang lulus.

```text
Untuk setiap lembar jawaban:
  Periksa jawaban
  Hitung nilai
  Catat hasilnya
Selesai
```

---

## Penjelasan Materi

TypeScript menyediakan beberapa cara mengiterasi array:

| Cara | Kapan Dipakai |
|---|---|
| `for` (with index) | Butuh indeks posisi |
| `for...of` | Hanya butuh nilai |
| `.forEach()` | Callback untuk setiap elemen |

---

## Mari Mencoba

Buat `src/bab3/iterasi-array.ts`:

```ts
const nilaiSiswa: number[] = [85, 92, 67, 78, 95, 55, 88, 73]
const namaSiswa: string[] = ["Andi", "Budi", "Citra", "Dian", "Eko", "Fira", "Gita", "Hani"]

// 1. Tampilkan semua siswa dengan nilai menggunakan for biasa
console.log("=== Daftar Nilai Siswa ===")
for (let i = 0; i < nilaiSiswa.length; i++) {
  console.log(`${i + 1}. ${namaSiswa[i]}: ${nilaiSiswa[i]}`)
}

// 2. Hitung total dan rata-rata
let totalNilai: number = 0
for (const nilai of nilaiSiswa) {
  totalNilai += nilai
}
const rataRata: number = totalNilai / nilaiSiswa.length
console.log(`\nTotal nilai: ${totalNilai}`)
console.log(`Rata-rata: ${rataRata.toFixed(2)}`)

// 3. Cari nilai tertinggi dan terendah
let tertinggi: number = nilaiSiswa[0]
let terendah: number = nilaiSiswa[0]
let namaTertinggi: string = namaSiswa[0]

for (let i = 0; i < nilaiSiswa.length; i++) {
  if (nilaiSiswa[i] > tertinggi) {
    tertinggi = nilaiSiswa[i]
    namaTertinggi = namaSiswa[i]
  }
  if (nilaiSiswa[i] < terendah) {
    terendah = nilaiSiswa[i]
  }
}
console.log(`\nNilai tertinggi: ${tertinggi} (${namaTertinggi})`)
console.log(`Nilai terendah: ${terendah}`)

// 4. Filter siswa yang lulus (nilai >= 75)
console.log("\n=== Siswa Lulus ===")
let jumlahLulus = 0
for (let i = 0; i < nilaiSiswa.length; i++) {
  if (nilaiSiswa[i] >= 75) {
    console.log(`✓ ${namaSiswa[i]}: ${nilaiSiswa[i]}`)
    jumlahLulus++
  }
}
console.log(`\nTotal lulus: ${jumlahLulus} dari ${nilaiSiswa.length} siswa`)
```

Jalankan:

```text
tsx src/bab3/iterasi-array.ts
```

---

## Output (sebagian)

```text
=== Daftar Nilai Siswa ===
1. Andi: 85
2. Budi: 92
3. Citra: 67
...

Total nilai: 633
Rata-rata: 79.13

Nilai tertinggi: 95 (Eko)
Nilai terendah: 55

=== Siswa Lulus ===
✓ Andi: 85
✓ Budi: 92
✓ Dian: 78
✓ Eko: 95
✓ Gita: 88

Total lulus: 5 dari 8 siswa
```

---

## Penjelasan Baris per Baris

- `nilaiSiswa.length` — jumlah elemen dalam array; loop berjalan selama indeks di bawah angka ini.
- `totalNilai += nilai` — akumulasi nilai menggunakan `for...of`.
- `nilaiSiswa[0]` — mulai dari elemen pertama sebagai nilai awal perbandingan.
- `nilaiSiswa[i] > tertinggi` — setiap elemen dibandingkan dengan nilai tertinggi saat ini; jika lebih besar, perbarui.
- `jumlahLulus++` — hitung siswa yang memenuhi syarat.

---

## Pola Iterasi Array yang Sering Dipakai

```ts
const data: number[] = [10, 20, 30, 40, 50]

// Total
let total = 0
for (const x of data) total += x

// Nilai maksimum
let max = data[0]
for (const x of data) if (x > max) max = x

// Filter
const lebihDari25: number[] = []
for (const x of data) {
  if (x > 25) lebihDari25.push(x)
}
```

---

## Kesalahan yang Sering Terjadi

```ts
const nilai: number[] = [80, 90, 70]
for (let i = 0; i <= nilai.length; i++) { // harus < bukan <=
  console.log(nilai[i])
}
```

`nilai.length` adalah 3, indeks valid adalah 0, 1, 2. Jika `i <= 3`, maka `nilai[3]` adalah `undefined`.

---

## Tips

:::tip[Mulai dari Nol]
Indeks array selalu mulai dari 0. Elemen pertama adalah `array[0]`, bukan `array[1]`. Kondisi loop: `i < array.length`, bukan `i <= array.length`.
:::

---

## Latihan

1. Buat array 5 nilai. Hitung total, rata-rata, dan tentukan apakah rata-rata >= 75.
2. Tambahkan fitur: tampilkan peringkat (siapa nilai tertinggi, kedua, ketiga).

---

## Ringkasan

- Array dan loop adalah kombinasi yang sangat sering dipakai.
- Gunakan `for` biasa saat membutuhkan indeks.
- Gunakan `for...of` saat hanya membutuhkan nilai.
- Pola umum: total, max/min, filter, dan pencarian elemen.

:::tip[Langkah Selanjutnya]
Lanjut ke **Studi Kasus** untuk membangun sistem absensi siswa.
:::
