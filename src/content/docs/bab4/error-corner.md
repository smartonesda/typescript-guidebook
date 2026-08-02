---
title: "Error Corner BAB 4"
description: Mengenali dan memperbaiki kesalahan paling umum saat menggunakan function di TypeScript.
---

# Error Corner BAB 4

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat mengenali penyebab error function yang paling umum dan memperbaikinya dengan tepat.

---

## Pendahuluan

Error pada function sering mudah dideteksi oleh TypeScript, tapi ada juga bug logika yang tidak menghasilkan error merah namun membuat program berperilaku salah.

---

## Error 1 — Function Didefinisikan tapi Tidak Pernah Dipanggil

### Kode

```ts
function tampilkanSalam(): void {
  console.log("Halo!")
}

// Tidak pernah dipanggil — tidak ada output
```

### Mengapa Terjadi?

Mendefinisikan function hanya menyimpan "resep". Program harus memanggilnya secara eksplisit.

### Cara Memperbaiki

```ts
function tampilkanSalam(): void {
  console.log("Halo!")
}

tampilkanSalam()  // ← wajib dipanggil
```

---

## Error 2 — Lupa `return`

### Kode

```ts
function hitungLuas(p: number, l: number): number {
  const luas = p * l
  // TypeScript Error: Function lacks ending return statement
}
```

### Cara Memperbaiki

```ts
function hitungLuas(p: number, l: number): number {
  return p * l
}
```

---

## Error 3 — Tipe Argument Salah

### Kode

```ts
function sapa(nama: string): void {
  console.log(`Halo, ${nama}!`)
}

sapa(123)  // Error: Argument of type 'number' is not assignable to type 'string'
```

### Cara Memperbaiki

```ts
sapa("Andi")
sapa(String(123))  // konversi jika memang diperlukan
```

---

## Error 4 — Jumlah Argument Tidak Sesuai

### Kode

```ts
function hitung(a: number, b: number): number {
  return a + b
}

hitung(5)         // Error: Expected 2 arguments, but got 1
hitung(5, 3, 7)  // Error: Expected 2 arguments, but got 3
```

### Cara Memperbaiki

Kirim argument sesuai jumlah parameter. Gunakan optional atau rest parameter jika jumlahnya memang bervariasi.

---

## Error 5 — Menggunakan Variabel Lokal di Luar Function

### Kode

```ts
function hitungNilai(): void {
  const hasil = 90
}

hitungNilai()
console.log(hasil)  // Error: Cannot find name 'hasil'
```

### Cara Memperbaiki

```ts
function hitungNilai(): number {
  return 90
}

const hasil = hitungNilai()
console.log(hasil)
```

---

## Error 6 — Optional Parameter di Depan Parameter Biasa

### Kode

```ts
// Error: A required parameter cannot follow an optional parameter
function f(a?: string, b: string): void { }
```

### Cara Memperbaiki

```ts
function f(a: string, b?: string): void { }
```

Parameter opsional harus selalu di belakang parameter wajib.

---

## Error 7 — Tidak Menangani Parameter Opsional yang Mungkin Undefined

### Kode

```ts
function cetakEmail(nama: string, email?: string): void {
  console.log(email.toUpperCase())  // Error! email mungkin undefined
}
```

### Cara Memperbaiki

```ts
function cetakEmail(nama: string, email?: string): void {
  if (email !== undefined) {
    console.log(email.toUpperCase())
  } else {
    console.log("Email tidak tersedia")
  }
}
```

---

## Error 8 — Memanggil Anonymous Function Sebelum Deklarasi

### Kode

```ts
console.log(hitung(5))  // Error! 'hitung' used before its initialization

const hitung = function(n: number): number {
  return n * 2
}
```

### Cara Memperbaiki

Selalu deklarasikan variable function **sebelum** memanggilnya. Named function (`function hitung(...)`) bisa dipanggil sebelum dideklarasikan karena di-hoist, tapi `const`/`let` tidak.

---

## Strategi Debug Function

1. Periksa apakah function sudah dipanggil.
2. Periksa apakah tipe parameter dan argument cocok.
3. Periksa apakah ada `return` untuk setiap jalur kode.
4. Tambahkan `console.log` di dalam function untuk memantau nilai parameter.
5. Periksa apakah variabel lokal diakses dari luar function.

---

## Latihan

Identifikasi dan perbaiki semua bug dalam kode berikut:

```ts
function hitungRataRata(a: number, b: number, c: number): number {
  const total = a + b + c
}

function tampilkan(nama?: string, nilai: number): void {
  console.log(`${nama}: ${nilai}`)
}

const kuadrat = function(n: number): number {
  return n * n
}

console.log(kuadrat(4))
tampilkan("Andi", 88)
console.log(hitungRataRata(80, 90, 70))
```

---

## Ringkasan

- Function yang tidak dipanggil tidak menghasilkan apapun.
- Setiap jalur kode non-void wajib punya `return`.
- Tipe dan jumlah argument harus cocok dengan parameter.
- Variabel lokal tidak bisa diakses dari luar function.
- Optional parameter wajib di posisi terakhir.

:::tip[Langkah Selanjutnya]
Lanjut ke **Ringkasan BAB 4** untuk mengakhiri bab ini.
:::
