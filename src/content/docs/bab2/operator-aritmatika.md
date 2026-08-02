---
title: "Operator Aritmatika"
description: Menghitung dengan operator +, -, *, /, %, dan ** di TypeScript.
---

# Operator Aritmatika

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat memakai operator aritmatika untuk penjumlahan, pengurangan, perkalian, pembagian, sisa bagi, dan pangkat.

---

## Pendahuluan

Program sekolah sering menghitung total nilai, rata-rata, diskon, dan sisa uang. Semua kebutuhan itu memakai operator aritmatika.

---

## Analogi Kehidupan Sehari-hari

Operator aritmatika adalah tombol pada kalkulator:

```text
+ tambah       - kurang       * kali
/ bagi         % sisa bagi    ** pangkat
```

Kamu memilih tombol sesuai hasil yang dibutuhkan. Untuk rata-rata, gunakan penjumlahan lalu pembagian. Untuk mengecek nomor absen ganjil/genap, gunakan sisa bagi `%`.

---

## Penjelasan Materi

| Operator | Nama | Contoh | Hasil |
|---|---|---|---|
| `+` | Penjumlahan | `8 + 2` | `10` |
| `-` | Pengurangan | `8 - 2` | `6` |
| `*` | Perkalian | `8 * 2` | `16` |
| `/` | Pembagian | `8 / 2` | `4` |
| `%` | Modulus/sisa bagi | `8 % 3` | `2` |
| `**` | Pangkat | `2 ** 3` | `8` |

---

## Mari Mencoba

Buat `src/bab2/operator-aritmatika.ts`:

```ts
const nilaiTugas: number = 80
const nilaiUjian: number = 90
const totalNilai: number = nilaiTugas + nilaiUjian
const rataRata: number = totalNilai / 2
const selisihNilai: number = nilaiUjian - nilaiTugas
const nomorAbsen: number = 17
const sisaBagiDua: number = nomorAbsen % 2

console.log(`Total nilai: ${totalNilai}`)
console.log(`Rata-rata: ${rataRata}`)
console.log(`Selisih nilai: ${selisihNilai}`)
console.log(`Sisa nomor absen dibagi 2: ${sisaBagiDua}`)
console.log(`2 pangkat 5: ${2 ** 5}`)
```

Jalankan:

```text
tsx src/bab2/operator-aritmatika.ts
```

---

## Output

```text
Total nilai: 170
Rata-rata: 85
Selisih nilai: 10
Sisa nomor absen dibagi 2: 1
2 pangkat 5: 32
```

---

## Penjelasan Baris per Baris

- `nilaiTugas + nilaiUjian` menambahkan dua angka.
- `totalNilai / 2` membagi total menjadi rata-rata dua nilai.
- `nilaiUjian - nilaiTugas` menghitung selisih.
- `% 2` menghasilkan sisa pembagian dua. Sisa `0` berarti genap, sisa `1` berarti ganjil.
- `2 ** 5` berarti 2 × 2 × 2 × 2 × 2.

---

## Kesalahan Umum

```ts
const hasil = 10 / 0
console.log(hasil) // Infinity
```

Membagi dengan nol tidak menghasilkan angka biasa. Periksa pembagi sebelum melakukan operasi.

```ts
const nilai = "80"
const hasil = nilai + 10 // "8010"
```

Pastikan nilai perhitungan bertipe `number`, bukan string.

---

## Tips

:::tip[Gunakan Kurung]
Saat rumus punya banyak operator, gunakan kurung agar maksudnya jelas: `(nilaiTugas + nilaiUjian) / 2`.
:::

---

## Latihan

Buat program menghitung luas dan keliling persegi panjang. Simpan panjang dan lebar sebagai `number`, lalu tampilkan hasilnya dengan template literal.

---

## Ringkasan

- Aritmatika memakai `+`, `-`, `*`, `/`, `%`, dan `**`.
- `%` berguna untuk mengetahui sisa pembagian.
- Gunakan `number` untuk perhitungan dan kurung untuk rumus jelas.

:::tip[Langkah Selanjutnya]
Lanjut ke **Operator Penugasan**.
:::
