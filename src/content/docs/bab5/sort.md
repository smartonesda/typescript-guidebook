---
title: "Array: sort"
description: Mengurutkan elemen array secara alfabetis atau numerik menggunakan method sort() di TypeScript.
---

# Array: `sort`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat mengurutkan array bertipe string secara alfabetis dan array bertipe number secara numerik dengan fungsi perbandingan bawaan.

---

## Pendahuluan

Daftar siswa sering harus diurutkan berdasarkan abjad A–Z agar mudah dicari. Nilai ujian siswa perlu diurutkan dari yang tertinggi ke terendah untuk menentukan peringkat. Kita menggunakan method `.sort()` untuk mengurutkan data.

---

## Penjelasan Materi

### Mengurutkan Teks (Alfabetis)

Method `sort()` tanpa parameter mengurutkan elemen sebagai **teks/string** secara alfabetis bawaan:

```ts
const siswa = ["Budi", "Andi"]
siswa.sort() // ["Andi", "Budi"]
```

### Mengurutkan Angka (Numerik)

Secara bawaan, `sort()` mengonversi angka menjadi string sebelum diurutkan. Akibatnya, angka `10` akan diletakkan sebelum `2` (karena huruf "1" sebelum "2" dalam kamus).

Untuk mengurutkan angka dengan benar, kita **wajib** memberikan **fungsi perbandingan** (*compare function*):

```ts
// Urutkan angka dari kecil ke besar (Ascending)
angka.sort((a, b) => a - b)

// Urutkan angka dari besar ke kecil (Descending)
angka.sort((a, b) => b - a)
```

`sort()` adalah method **mutable** — ia langsung mengubah posisi elemen dalam array asli.

---

## Analogi Kehidupan Sehari-hari

### Mengatur Lembar Jawaban

Guru mengurutkan lembar jawaban siswa:

- Secara alfabetis: nama Andi ditaruh paling atas, diikuti Budi, Citra, dst.
- Secara numerik: menumpuk lembar jawaban berdasarkan nilai, membandingkan dua lembar sekaligus untuk meletakkan yang lebih kecil di bawah.

---

## Visual Illustration

```text
Perbandingan Angka: (a, b) => a - b

Membandingkan 20 dan 5:
a = 20, b = 5
a - b = 15 (positif) ──► tukar posisi! (5 diletakkan sebelum 20)

Hasil urutan: 5, 20
```

---

## Mari Mencoba

Buat `src/bab5/sort.ts`:

```ts
// 1. Mengurutkan String (Alfabetis)
const daftarSiswa: string[] = ["Citra", "Andi", "Dian", "Budi"]
console.log("Awal siswa:", daftarSiswa)
daftarSiswa.sort()
console.log("Sort siswa:", daftarSiswa)

// 2. Mengurutkan Angka (Salah tanpa compare function)
const nilaiSalah: number[] = [10, 2, 30, 5, 100]
nilaiSalah.sort()
console.log("\nSort salah:", nilaiSalah) // Output aneh!

// 3. Mengurutkan Angka (Benar dengan compare function)
const nilaiBenar: number[] = [10, 2, 30, 5, 100]

// Kecil ke besar (Ascending)
nilaiBenar.sort((a, b) => a - b)
console.log("Ascending :", nilaiBenar)

// Besar ke kecil (Descending)
nilaiBenar.sort((a, b) => b - a)
console.log("Descending:", nilaiBenar)
```

Jalankan:

```text
tsx src/bab5/sort.ts
```

## Output

```text
Awal siswa: [ 'Citra', 'Andi', 'Dian', 'Budi' ]
Sort siswa: [ 'Andi', 'Budi', 'Citra', 'Dian' ]

Sort salah: [ 10, 100, 2, 30, 5 ]
Ascending : [ 2, 5, 10, 30, 100 ]
Descending: [ 100, 30, 10, 5, 2 ]
```

---

## Penjelasan Baris per Baris

- `daftarSiswa.sort()` — string otomatis diurutkan A–Z dengan benar.
- `nilaiSalah.sort()` — menghasilkan urutan salah karena `100` dianggap lebih dulu dari `2` (karakter pertama "1" < "2").
- `nilaiBenar.sort((a, b) => a - b)` — jika `a - b` menghasilkan angka negatif, `a` diletakkan sebelum `b`. Jika positif, `b` sebelum `a`. Ini rumus standar mengurutkan angka dari kecil ke besar.

---

## Kesalahan yang Sering Terjadi

### ❌ Mengurutkan array angka tanpa compare function

Kesalahan ini sangat sering terjadi dan sulit dideteksi karena tidak menghasilkan pesan error, tetapi membuat urutan angka menjadi rusak secara logika.

**Perbaikan:** Selalu tulis `(a, b) => a - b` saat mengurutkan angka.

---

## Tips

:::tip[Hati-hati dengan Array Asli]
Karena `sort()` mengubah array asli, jika kamu ingin mempertahankan data awal, salin array terlebih dahulu dengan `slice()` sebelum memanggil `sort()`:

```ts
const dataUrut = dataAsli.slice().sort((a, b) => a - b)
```
:::

---

## Latihan

Buat array berisi 6 nilai ujian secara acak. Urutkan nilai tersebut dari yang **tertinggi ke terendah** (descending) dan tampilkan hasilnya di terminal.

---

## Ringkasan

- `sort()` mengurutkan elemen array asli (mutable).
- String otomatis diurutkan secara alfabetis (A-Z).
- Angka wajib menggunakan compare function: `(a, b) => a - b` (kecil-besar) atau `(a, b) => b - a` (besar-kecil).

:::tip[Langkah Selanjutnya]
Lanjut ke **reverse**.
:::
