---
title: "Array: shift & unshift"
description: Menambah dan menghapus elemen di bagian depan (awal) array menggunakan method shift() dan unshift().
---

# Array: `shift` & `unshift`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menambahkan elemen ke depan array dengan `unshift()` dan menghapus elemen pertama dengan `shift()`.

---

## Pendahuluan

Jika `push` dan `pop` bekerja di bagian akhir (belakang) array, `shift` dan `unshift` bekerja di bagian **awal (depan)** array.

---

## Penjelasan Materi

### `unshift()` — Menambah ke Depan

Method `unshift()` menambahkan satu atau lebih elemen baru ke **bagian awal** array. Ini menggeser semua elemen lama ke indeks yang lebih besar:

```ts
const angka = [2, 3]
angka.unshift(1) // [1, 2, 3] (elemen 2 dan 3 bergeser)
```

### `shift()` — Menghapus dari Depan

Method `shift()` menghapus elemen **pertama** dari array dan mengembalikan elemen tersebut. Ini menggeser semua elemen tersisa ke indeks yang lebih kecil:

```ts
const angka = [1, 2, 3]
const pertama = angka.shift() // pertama = 1, angka = [2, 3]
```

---

## Analogi Kehidupan Sehari-hari

### Antrean Tiket Bioskop

Bayangkan antrean di loket tiket bioskop:

- `shift()` seperti melayani **orang pertama di antrean**. Orang tersebut keluar dari antrean, dan semua orang di belakangnya maju satu langkah.
- `unshift()` seperti **orang yang menyerobot antrean** langsung ke paling depan (indeks 0). Semua orang di belakangnya terpaksa bergeser mundur.

```text
Serobot depan (unshift) ──► [ Antrean ] ──► Layani depan (shift)
```

---

## Visual Illustration

```text
Awal:     [2, 3]
unshift(1) ──► [1, 2, 3]  (indeks 2 & 3 digeser ke kanan)
shift()    ──► [2, 3]     (indeks 1 dihapus, 2 & 3 maju ke kiri)
```

---

## Mari Mencoba

Buat `src/bab5/shift-unshift.ts`:

```ts
const antreanSiswa: string[] = ["Budi", "Citra"]
console.log("Awal      :", antreanSiswa)

// Menambah ke depan antrean
antreanSiswa.unshift("Andi")
console.log("unshift(1):", antreanSiswa)

// Menghapus dari depan antrean
const dilayani = antreanSiswa.shift()
console.log("\ndilayani   :", dilayani)
console.log("Setelah shift:", antreanSiswa)
```

Jalankan:

```text
tsx src/bab5/shift-unshift.ts
```

## Output

```text
Awal      : [ 'Budi', 'Citra' ]
unshift(1): [ 'Andi', 'Budi', 'Citra' ]

dilayani   : Andi
Setelah shift: [ 'Budi', 'Citra' ]
```

---

## Perbandingan Kinerja (Performance Note)

:::note[Performance Note]
`push` dan `pop` berjalan lebih cepat karena komputer tidak perlu mengubah indeks elemen lain. `shift` dan `unshift` berjalan lebih lambat pada array besar karena komputer harus mengubah nomor indeks seluruh elemen yang bergeser.
:::

---

## Kesalahan yang Sering Terjadi

```ts
const data = [2, 3]
const hasil = data.unshift(1)
console.log(hasil) // Output: 3 (panjang array baru, bukan array-nya!)
```

Sama seperti `push()`, `unshift()` mengembalikan **panjang array yang baru**, bukan array itu sendiri.

---

## Tips

:::tip[Pecah Perubahan Indeks]
Gunakan `shift` dan `unshift` hanya jika kamu benar-benar membutuhkan data masuk atau keluar dari bagian depan. Jika posisi tidak penting, gunakan `push` dan `pop` karena kodenya lebih efisien.
:::

---

## Latihan

Buat array berisi nama 3 tugas sekolah. Masukkan tugas baru yang mendesak ke paling depan menggunakan `unshift()`. Hapus tugas pertama menggunakan `shift()` setelah selesai dikerjakan, dan tampilkan hasilnya.

---

## Ringkasan

- `unshift()` menambah satu/lebih elemen di depan array.
- `shift()` menghapus satu elemen pertama dan mengembalikannya.
- Kedua method ini memodifikasi (mengubah) array asli.
- Keduanya menggeser nomor indeks seluruh elemen tersisa.

:::tip[Langkah Selanjutnya]
Lanjut ke **splice & slice**.
:::
