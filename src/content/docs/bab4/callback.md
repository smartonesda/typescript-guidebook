---
title: "Callback"
description: Memahami dan menggunakan callback — function yang dikirim sebagai argument ke function lain.
---

# Callback

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menjelaskan apa itu callback dan membuat function yang menerima serta memanggil callback.

---

## Pendahuluan

Kita sudah belajar bahwa function bisa menerima string, number, dan boolean sebagai parameter. Tapi function juga bisa menerima **function lain** sebagai parameter. Function yang dikirimkan sebagai argument disebut **callback**.

---

## Penjelasan Materi

```ts
function prosesNilai(nilai: number, fungsiCallback: (n: number) => string): string {
  return fungsiCallback(nilai)
}
```

`fungsiCallback` adalah parameter yang bertipe function: menerima number dan mengembalikan string.

---

## Analogi

### Memesan Makanan — Dipanggil Saat Siap

Kamu memesan makanan di restoran dan meninggalkan nomor meja. Kamu tidak menunggu di kasir — kamu pergi duduk. Ketika makanan siap, kasir **memanggil nomormu** (callback).

```text
Kamu: "Pesan nasi goreng. Panggil meja 7 kalau sudah siap."
Kasir: [proses pesanan]
Kasir: "Meja 7! Pesanannya siap!" ← callback dipanggil
```

---

## Visual Illustration

```text
function prosesData(data, callback) {
    callback(data)  ← memanggil function yang dikirim
}

prosesData(nilai, tampilkanHasil)
                   └──────────────── callback
```

---

## Mari Mencoba

Buat `src/bab4/callback.ts`:

```ts
// Function yang menerima callback
function prosesNilai(
  nama: string,
  nilai: number,
  formatCallback: (n: string, v: number) => string
): void {
  const hasil = formatCallback(nama, nilai)
  console.log(hasil)
}

// Beberapa callback berbeda
const formatSingkat = (nama: string, nilai: number): string =>
  `${nama}: ${nilai}`

const formatLengkap = (nama: string, nilai: number): string => {
  const status = nilai >= 75 ? "Lulus" : "Remedial"
  return `[${status}] ${nama} mendapat nilai ${nilai}`
}

const formatBadge = (nama: string, nilai: number): string => {
  const grade = nilai >= 90 ? "A" : nilai >= 80 ? "B" : nilai >= 70 ? "C" : "D"
  return `${nama} | Nilai: ${nilai} | Grade: ${grade}`
}

// Panggil function dengan callback berbeda
prosesNilai("Andi", 88, formatSingkat)
prosesNilai("Budi", 65, formatLengkap)
prosesNilai("Citra", 92, formatBadge)
```

Jalankan:

```text
tsx src/bab4/callback.ts
```

## Output

```text
Andi: 88
[Remedial] Budi mendapat nilai 65
Citra | Nilai: 92 | Grade: A
```

---

## Penjelasan Baris per Baris

- `formatCallback: (n: string, v: number) => string` — tipe parameter yang merupakan function: menerima string dan number, mengembalikan string.
- `const hasil = formatCallback(nama, nilai)` — memanggil callback di dalam function.
- Tiga callback berbeda menghasilkan format output yang berbeda tanpa mengubah function `prosesNilai`.

---

## Callback dalam Array Method

Callback sangat umum dipakai bersama method array bawaan TypeScript/JavaScript:

```ts
const nilai: number[] = [80, 92, 65, 75, 88]

// forEach — jalankan callback untuk setiap elemen
nilai.forEach((n) => console.log(n))

// filter — kembalikan elemen yang memenuhi kondisi
const lulus = nilai.filter((n) => n >= 75)
console.log(lulus) // [80, 92, 75, 88]

// map — ubah setiap elemen
const berlipat = nilai.map((n) => n * 2)
console.log(berlipat) // [160, 184, 130, 150, 176]
```

---

## Latihan

1. Buat function `ulangi(n, aksi)` yang menjalankan callback `aksi` sebanyak `n` kali.
2. Panggil dengan callback yang mencetak "Belajar TypeScript ke-[n]".

---

## Ringkasan

- Callback adalah function yang dikirim sebagai argument ke function lain.
- Function penerima menentukan kapan callback dipanggil.
- Callback membuat function lebih fleksibel.
- Sangat umum dipakai bersama `forEach`, `filter`, `map`.

:::tip[Langkah Selanjutnya]
Lanjut ke **Scope** untuk memahami di mana variabel bisa diakses.
:::
