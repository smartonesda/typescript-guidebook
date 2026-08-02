---
title: "Array: includes & indexOf"
description: Mencari keberadaan elemen dengan includes() dan menemukan posisinya dengan indexOf().
---

# Array: `includes` & `indexOf`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat memeriksa keberadaan elemen dengan `includes()` dan mencari nomor indeks elemen dengan `indexOf()`.

---

## Pendahuluan

Sebelum memproses data, kita sering harus mencari tahu: "Apakah siswa bernama Budi ada di daftar kelas?", "Jika ada, di nomor urut berapa posisinya?" Kita menggunakan `includes()` dan `indexOf()` untuk menjawabnya.

---

## Penjelasan Materi

### `includes()` — Cek Keberadaan (Boolean)

Method `includes()` memeriksa apakah suatu nilai ada di dalam array. Ia mengembalikan boolean `true` atau `false`:

```ts
const ada = array.includes(nilaiCari)
```

### `indexOf()` — Cari Posisi (Indeks)

Method `indexOf()` mencari nilai dalam array dan mengembalikan **nomor indeks** pertama tempat nilai itu ditemukan. Jika tidak ditemukan, ia mengembalikan **`-1`**:

```ts
const posisi = array.indexOf(nilaiCari)
```

---

## Analogi Kehidupan Sehari-hari

### Mencari Buku di Rak

Kamu ingin tahu apakah ada buku "TypeScript" di rak:

- **includes()** seperti menelusuri rak dengan mata lalu menjawab: "Ya, ada buku itu" atau "Tidak, tidak ada".
- **indexOf()** seperti menunjuk sekat raknya: "Buku itu ada di sekat nomor 2". Jika tidak ada, kamu menggeleng dan menjawab: "-1" (tidak ada sekat yang cocok).

---

## Visual Illustration

```text
const buah = ["Apel", "Mangga", "Apel"]

buah.includes("Mangga")   ──► true
buah.includes("Semangka") ──► false

buah.indexOf("Mangga")    ──► 1
buah.indexOf("Apel")      ──► 0  (hanya menemukan yang PERTAMA)
buah.indexOf("Semangka")  ──► -1
```

---

## Mari Mencoba

Buat `src/bab5/includes-indexof.ts`:

```ts
const daftarSiswa: string[] = ["Andi", "Budi", "Citra", "Dian", "Budi"]

// 1. Menggunakan includes()
console.log("=== Menggunakan includes() ===")
const cariCitra = daftarSiswa.includes("Citra")
const cariEko = daftarSiswa.includes("Eko")

console.log(`Apakah Citra ada? ${cariCitra}`)
console.log(`Apakah Eko ada? ${cariEko}`)

// 2. Menggunakan indexOf()
console.log("\n=== Menggunakan indexOf() ===")
const indeksBudi = daftarSiswa.indexOf("Budi")
const indeksEko = daftarSiswa.indexOf("Eko")

console.log(`Budi pertama ada di indeks: ${indeksBudi}`)
console.log(`Eko ada di indeks: ${indeksEko}`)

// Contoh pengambilan keputusan
const namaCari = "Dian"
if (daftarSiswa.includes(namaCari)) {
  const pos = daftarSiswa.indexOf(namaCari)
  console.log(`\nSiswa ${namaCari} ditemukan di posisi urut ${pos + 1}`)
} else {
  console.log(`\nSiswa ${namaCari} tidak terdaftar.`)
}
```

Jalankan:

```text
tsx src/bab5/includes-indexof.ts
```

## Output

```text
=== Menggunakan includes() ===
Apakah Citra ada? true
Apakah Eko ada? false

=== Menggunakan indexOf() ===
Budi pertama ada di indeks: 1
Eko ada di indeks: -1

Siswa Dian ditemukan di posisi urut 4
```

---

## Penjelasan Baris per Baris

- `daftarSiswa.includes("Citra")` — menghasilkan `true` karena Citra ada di array.
- `daftarSiswa.indexOf("Budi")` — mengembalikan `1` (Budi pertama). Budi kedua di indeks 4 diabaikan karena `indexOf()` berhenti setelah menemukan kecocokan pertama.
- `indexOf("Eko")` — menghasilkan `-1` karena Eko tidak ada.

---

## Menghindari Nilai -1 yang Membingungkan

Saat menggunakan `indexOf()`, selalu pastikan untuk memeriksa apakah hasilnya bukan `-1` sebelum menggunakannya sebagai indeks pengakses data:

```ts
const pos = array.indexOf(cari)
if (pos !== -1) {
  console.log(`Ditemukan di indeks ${pos}`)
}
```

---

## Latihan

Buat array berisi daftar mata pelajaran hari ini.
1. Gunakan `includes()` untuk mengecek apakah ada mata pelajaran `"Pemrograman"`.
2. Gunakan `indexOf()` untuk mencari di urutan indeks ke berapa mata pelajaran tersebut berada. Tampilkan hasil analisisnya.

---

## Ringkasan

- `includes()` memeriksa keberadaan elemen (hasil berupa boolean).
- `indexOf()` mencari indeks pertama elemen (hasil berupa number).
- `indexOf()` menghasilkan `-1` jika elemen tidak ditemukan.
- Keduanya membandingkan nilai secara ketat (`===`).

:::tip[Langkah Selanjutnya]
Lanjut ke **find**.
:::
