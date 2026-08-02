---
title: "Loop: do...while"
description: Memakai do...while untuk loop yang selalu berjalan minimal satu kali.
---

# Loop `do...while`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat loop `do...while` dan menjelaskan perbedaannya dengan `while`.

---

## Pendahuluan

`do...while` hampir sama dengan `while`, dengan satu perbedaan penting: **blok kode selalu dijalankan minimal satu kali**, bahkan jika kondisi awal sudah `false`.

---

## Analogi Kehidupan Sehari-hari

### Mencoba Login

Saat login ke aplikasi, kamu **selalu** memasukkan password setidaknya sekali. Baru setelah dicoba, sistem mengecek apakah benar.

```text
Lakukan:
  Masukkan password
  Cek apakah benar
Selama password salah → ulangi
```

Berbeda dengan `while` yang cek kondisi dulu baru bertindak, `do...while` bertindak dulu baru cek kondisi.

---

## Penjelasan Materi

Bentuk dasar:

```ts
do {
  // tindakan
} while (kondisi)
```

1. Blok `do {}` dijalankan **tanpa memeriksa kondisi**.
2. Setelah blok selesai, kondisi baru diperiksa.
3. Jika `true`, ulangi dari awal blok.
4. Jika `false`, loop berhenti.

---

## Visual Illustration

```text
while                    do...while
──────                   ──────────
Cek kondisi ─► false     Jalankan blok
      │                       │
     true                 Cek kondisi ─► false → SELESAI
      │                       │
  Jalankan blok              true
      │                       │
  (ulangi)                (ulangi)
```

---

## Mari Mencoba

Buat `src/bab3/do-while.ts`:

```ts
let percobaan: number = 0
const maxPercobaan: number = 3

do {
  percobaan++
  console.log(`Percobaan ke-${percobaan}: Memasukkan password...`)
} while (percobaan < maxPercobaan)

console.log(`Selesai setelah ${percobaan} percobaan.`)
```

Jalankan:

```text
tsx src/bab3/do-while.ts
```

## Output

```text
Percobaan ke-1: Memasukkan password...
Percobaan ke-2: Memasukkan password...
Percobaan ke-3: Memasukkan password...
Selesai setelah 3 percobaan.
```

---

## Contoh: Kondisi Awal Sudah False

```ts
let nilai: number = 10

// while — blok TIDAK dijalankan sama sekali
while (nilai < 5) {
  console.log("while:", nilai)
}

// do...while — blok tetap dijalankan SEKALI
do {
  console.log("do...while:", nilai)
} while (nilai < 5)
```

Output:

```text
do...while: 10
```

`while` tidak menghasilkan output apapun karena `10 < 5` langsung false. `do...while` tetap mencetak sekali.

---

## Penjelasan Baris per Baris

- `do {` — memulai blok yang selalu dijalankan.
- `percobaan++` — menambah penghitung di dalam blok.
- `} while (percobaan < maxPercobaan)` — kondisi diperiksa di akhir; `while` di sini adalah penutup `do`, bukan loop baru.

---

## Kesalahan yang Sering Terjadi

```ts
do {
  console.log("Berjalan")
} while (true)
```

Kondisi selalu `true` → infinite loop. Pastikan ada yang mengubah kondisi ke `false`.

---

## Tips

:::tip[Kapan Pakai do...while]
Gunakan `do...while` saat tindakan **harus dilakukan setidaknya sekali** sebelum kondisi dievaluasi. Untuk loop biasa yang tidak ada syarat ini, `while` atau `for` lebih umum dipakai.
:::

---

## Latihan

Buat program yang mencetak "Selamat datang!" sebanyak 3 kali menggunakan `do...while`. Kemudian coba ubah kondisi menjadi `false` dari awal dan amati hasilnya.

---

## Ringkasan

- `do...while` selalu menjalankan blok minimal **satu kali**.
- Kondisi diperiksa di **akhir** setiap putaran.
- Perbedaan utama dengan `while`: urutan cek kondisi.
- Cocok untuk proses yang harus terjadi setidaknya sekali.

:::tip[Langkah Selanjutnya]
Lanjut ke **for** — loop paling sering digunakan.
:::
