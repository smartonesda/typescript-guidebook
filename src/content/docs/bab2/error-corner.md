---
title: "Error Corner BAB 2"
description: Memahami dan memperbaiki kesalahan paling umum saat menggunakan operator dan percabangan.
---

# Error Corner BAB 2

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat mengenali penyebab error umum operator dan percabangan, lalu memperbaikinya dengan tepat.

---

## Pendahuluan

Error operator dan percabangan sering tidak menghasilkan pesan merah dari TypeScript. Kode berjalan, tetapi outputnya salah. Ini disebut **logic error** — kesalahan yang paling susah ditemukan.

Halaman ini membahas kesalahan umum, mengapa terjadi, dan cara memperbaikinya.

---

## Error 1 — `=` untuk Perbandingan

### Kode yang Salah

```ts
let nilai: number = 80

if (nilai = 75) {
  console.log("Lulus")
}
```

### Mengapa Terjadi?

`nilai = 75` bukan perbandingan. Ini mengisi nilai `75` ke variabel, lalu kondisinya dievaluasi. Angka bukan nol dianggap truthy, sehingga blok `if` selalu jalan.

### Cara Memperbaiki

```ts
if (nilai >= 75) {
  console.log("Lulus")
}
```

---

## Error 2 — Lupa `break` di switch

### Kode yang Salah

```ts
const hari = "Senin"
let pesan: string

switch (hari) {
  case "Senin":
    pesan = "Upacara"
  case "Selasa":
    pesan = "Pelajaran biasa"
    break
}
console.log(pesan)
```

### Output yang Tak Diharapkan

```text
Pelajaran biasa
```

### Mengapa Terjadi?

Tanpa `break`, setelah case Senin cocok, program melanjutkan ke case Selasa. Nilai pesan diganti.

### Cara Memperbaiki

```ts
case "Senin":
  pesan = "Upacara"
  break
case "Selasa":
  pesan = "Pelajaran biasa"
  break
```

---

## Error 3 — Titik Koma Setelah `if`

### Kode yang Salah

```ts
const nilai: number = 80

if (nilai >= 75);
{
  console.log("Lulus")
}
```

### Output yang Tak Diharapkan

```text
Lulus
```

Blok `console.log` berjalan bahkan jika nilai di bawah 75.

### Mengapa Terjadi?

Titik koma setelah `if (...)` mengakhiri pernyataan `if`. Blok `{}` setelahnya berdiri sendiri dan selalu dijalankan.

### Cara Memperbaiki

```ts
if (nilai >= 75) {
  console.log("Lulus")
}
```

---

## Error 4 — Urutan else if Salah

### Kode yang Salah

```ts
const nilai: number = 82

if (nilai >= 60) {
  console.log("Cukup")
} else if (nilai >= 75) {
  console.log("Baik")
}
```

### Output

```text
Cukup
```

Kategori Baik tidak pernah muncul.

### Mengapa Terjadi?

Nilai 82 memenuhi `>= 60` lebih dulu. Cabang berikutnya tidak pernah diperiksa.

### Cara Memperbaiki

Urutkan dari batas tertinggi ke terendah:

```ts
if (nilai >= 75) {
  console.log("Baik")
} else if (nilai >= 60) {
  console.log("Cukup")
}
```

---

## Error 5 — `==` Bukan `===`

### Kode yang Salah

```ts
const input = "75"
if (input == 75) {
  console.log("Nilai tepat")
}
```

### Mengapa Terjadi?

`==` melakukan konversi tipe otomatis, sehingga `"75" == 75` dianggap `true`. Ini bisa menimbulkan hasil tak terduga di program yang lebih besar.

### Cara Memperbaiki

```ts
if (input === "75") {
  console.log("Nilai tepat sebagai teks")
}
```

---

## Error 6 — Kondisi Logika Terbalik

### Kode yang Salah

```ts
const lulus: boolean = false
if (!lulus === true) {
  console.log("Lulus")
}
```

### Mengapa Terjadi?

`!lulus` sudah menghasilkan `true`. Membandingkan `true === true` adalah redundan dan bisa membingungkan.

### Cara Memperbaiki

```ts
if (!lulus) {
  console.log("Tidak lulus")
}
```

---

## Error 7 — Prioritas Operator Salah

### Kode yang Salah

```ts
const total = 80 + 90 + 70 / 3
console.log(total) // 193.33...
```

### Mengapa Terjadi?

Hanya 70 yang dibagi 3. Operator `/` punya prioritas lebih tinggi dari `+`.

### Cara Memperbaiki

```ts
const total = (80 + 90 + 70) / 3
console.log(total) // 80
```

---

## Error 8 — Ternary Tidak Lengkap

### Kode yang Salah

```ts
const status = nilai >= 75 ? "Lulus"
```

### Mengapa Terjadi?

Ternary wajib memiliki bagian setelah `:` untuk kondisi false.

### Cara Memperbaiki

```ts
const status = nilai >= 75 ? "Lulus" : "Remedial"
```

---

## Strategi Debug Operator dan Percabangan

1. Tambahkan `console.log(kondisi)` untuk memeriksa nilai boolean di dalam `if`.
2. Periksa apakah kamu memakai `===` atau `>=` dengan benar.
3. Periksa prioritas operator — tambahkan kurung jika ada keraguan.
4. Periksa semua `break` di `switch`.
5. Ubah nilai data dan lihat apakah hasilnya berubah seperti yang diharapkan.

---

## Latihan

Buat `src/bab2/latihan-error.ts`. Salin kode berikut dan perbaiki semua kesalahannya:

```ts
const nilai: number = 82

if (nilai = 75) {
  console.log("Lulus")
}

const kategori = nilai >= 60 ? "Cukup"

const hariIni = "Senin"
let jadwal: string
switch (hariIni) {
  case "Senin":
    jadwal = "Upacara"
  case "Rabu":
    jadwal = "Praktik"
    break
  default:
    jadwal = "Umum"
}
console.log(jadwal)
```

---

## Ringkasan

- `=` mengisi nilai; `===` membandingkan nilai.
- Tambahkan `break` di setiap `case` switch.
- Jangan letakkan titik koma setelah `if (...)`.
- Urutkan `else if` dari batas tertinggi ke terendah.
- Gunakan `===` bukan `==` agar perbandingan ketat.

:::tip[Langkah Selanjutnya]
Lanjut ke **Ringkasan BAB 2**.
:::
