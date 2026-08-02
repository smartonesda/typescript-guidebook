---
title: "Apa itu Array?"
description: Memahami konsep dasar array sebagai daftar data berurutan dengan satu nama variabel.
---

# Apa itu Array?

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menjelaskan apa itu array, alasan array digunakan, dan membedakan data tunggal dengan koleksi data.

---

## Pendahuluan

Dalam membuat program sekolah, kita selalu berhadapan dengan data kelompok: daftar siswa satu kelas, daftar mata pelajaran, daftar nilai ujian, atau daftar transaksi koperasi.

Menyimpan data kelompok dengan variabel tunggal adalah kebiasaan buruk yang harus dihindari sejak awal.

---

## Penjelasan Materi

**Array** adalah tipe data terstruktur yang dapat menyimpan banyak nilai (elemen) secara berurutan dalam satu nama variabel.

Setiap nilai dalam array disebut **elemen**. Setiap elemen memiliki nomor posisi yang disebut **indeks** (*index*).

Ciri khas array:
1. Menggunakan kurung siku `[]`.
2. Elemen dipisahkan oleh tanda koma `,`.
3. Indeks dimulai dari **0** (nol).

---

## Analogi Kehidupan Sehari-hari

### Rak Buku Bersekat

Bayangkan sebuah rak buku dengan sekat-sekat berlabel nomor mulai dari 0:

```text
Rak Buku:
Sekat 0 → Buku Matematika
Sekat 1 → Buku Bahasa Indonesia
Sekat 2 → Buku Pemrograman
```

Kamu tidak menyebutnya sebagai "tiga rak buku berbeda". Kamu menyebutnya sebagai "satu rak buku", lalu menunjuk nomor sekat untuk mengambil buku yang diinginkan.

---

## Visual Illustration

```text
Nama array: daftarBuah

Indeks:     0          1          2
        ┌──────────┬──────────┬──────────┐
Nilai:  │  "Apel"  │ "Mangga" │ "Jeruk"  │
        └──────────┴──────────┴──────────┘
```

Untuk mengambil `"Apel"`, kita meminta data di posisi `0` (`daftarBuah[0]`).

---

## Mengapa Array Sangat Penting?

Bandingkan dua cara berikut untuk menyimpan 5 nilai ujian:

### Tanpa Array (Buruk)

```ts
const nilai1 = 80
const nilai2 = 85
const nilai3 = 90
const nilai4 = 75
const nilai5 = 95
```

Jika ingin menghitung total atau rata-rata, rumusnya: `(nilai1 + nilai2 + ...)`. Kode ini kaku dan tidak bisa bertambah jika ada nilai baru.

### Dengan Array (Sangat Baik)

```ts
const nilai: number[] = [80, 85, 90, 75, 95]
```

Kita bisa menggunakan loop untuk menjumlahkan berapapun nilai yang ada di dalam array tanpa mengubah rumus.

---

## Mari Mencoba

Buat `src/bab5/apa-itu-array.ts`:

```ts
// Array string
const daftarSiswa: string[] = ["Andi", "Budi", "Citra"]

// Array number
const nilaiUjian: number[] = [80, 85, 75]

// Array boolean
const kehadiranSiswa: boolean[] = [true, false, true]

console.log("Siswa:", daftarSiswa)
console.log("Nilai:", nilaiUjian)
console.log("Hadir:", kehadiranSiswa)
```

Jalankan:

```text
tsx src/bab5/apa-itu-array.ts
```

## Output

```text
Siswa: [ 'Andi', 'Budi', 'Citra' ]
Nilai: [ 80, 85, 75 ]
Hadir: [ true, false, true ]
```

---

## Penjelasan Baris per Baris

- `string[]` — anotasi tipe untuk array yang berisi string.
- `number[]` — array berisi angka.
- `boolean[]` — array berisi nilai boolean.
- `["Andi", "Budi", "Citra"]` — nilai array dideklarasikan di dalam `[]` dan dipisahkan koma.

---

## Kesalahan yang Sering Terjadi

```ts
const nilai: number = [80, 85, 70] // Error!
```

Tipe variabel `number` tidak sama dengan tipe `number[]`. Pastikan menggunakan tanda `[]` untuk menandakan array.

---

## Tips

:::tip[Semua Elemen Sebaiknya Setipe]
Secara teknis, JavaScript mengizinkan array berisi campuran tipe data. Namun di TypeScript, sangat disarankan agar satu array hanya berisi satu tipe data (misal: semua string atau semua number) agar tipe datanya tetap aman dan konsisten.
:::

---

## Latihan

Buat array berisi nama-nama hari sekolah (Senin sampai Jumat). Gunakan tipe data `string[]` dan tampilkan array tersebut.

---

## Ringkasan

- Array menyimpan kumpulan data dalam satu variabel.
- Nilai di dalam array disebut elemen, nomor posisinya disebut indeks.
- Indeks array dimulai dari 0.
- Gunakan tipe `tipe[]` saat mendeklarasikan array di TypeScript.

:::tip[Langkah Selanjutnya]
Lanjut ke **Membuat Array** untuk belajar cara mendeklarasikan array secara lengkap.
:::
