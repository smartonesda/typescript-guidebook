---
title: "Error Corner BAB 3"
description: Mengenali dan memperbaiki kesalahan paling umum saat menggunakan loop di TypeScript.
---

# Error Corner BAB 3

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat mengenali penyebab error dan bug paling umum pada loop, serta memperbaikinya dengan tepat.

---

## Pendahuluan

Error pada loop sering tidak menghasilkan pesan error dari TypeScript. Kode berjalan, tetapi hasilnya salah atau program tidak berhenti. Ini membuat debug loop lebih menantang.

---

## Error 1 — Lupa Perubahan Variabel (Infinite Loop)

### Kode Bermasalah

```ts
let i: number = 1
while (i <= 10) {
  console.log(i)
  // i++ terlupakan!
}
```

### Mengapa Terjadi?

`i` tidak pernah berubah, sehingga kondisi `i <= 10` selalu `true`.

### Cara Memperbaiki

```ts
let i: number = 1
while (i <= 10) {
  console.log(i)
  i++ // wajib ada
}
```

Jika terlanjur berjalan: tekan `Ctrl + C`.

---

## Error 2 — `<` vs `<=` yang Keliru

### Kode Bermasalah

```ts
for (let i = 0; i < namaSiswa.length; i++) {
  // benar: indeks valid 0 s.d. length-1
}

for (let i = 0; i <= namaSiswa.length; i++) {
  // salah: i = length mengakses elemen undefined!
}
```

### Mengapa Terjadi?

Indeks array dimulai dari `0` dan berakhir di `length - 1`. Menggunakan `<=` membuat satu iterasi ekstra yang mengakses `undefined`.

### Cara Memperbaiki

Selalu gunakan `i < array.length` untuk mengiterasi array.

---

## Error 3 — Variabel Loop Diakses di Luar Loop

### Kode Bermasalah

```ts
for (let i = 0; i < 5; i++) {
  // i valid di sini
}
console.log(i) // Error! i tidak ada di sini
```

### Mengapa Terjadi?

`let` dan `const` bersifat block-scoped: hanya ada di dalam blok `{}` tempat dideklarasikan.

### Cara Memperbaiki

```ts
let nilaiTerakhir: number = 0
for (let i = 0; i < 5; i++) {
  nilaiTerakhir = i
}
console.log(nilaiTerakhir) // 4
```

---

## Error 4 — `break` di Tempat yang Salah

### Kode Bermasalah

```ts
for (let i = 1; i <= 5; i++) {
  break // langsung keluar sebelum melakukan apapun!
  console.log(i) // tidak pernah dijalankan
}
```

### Mengapa Terjadi?

`break` diletakkan sebelum aksi yang ingin dilakukan.

### Cara Memperbaiki

```ts
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break // keluar hanya saat kondisi tertentu
  }
  console.log(i)
}
```

---

## Error 5 — `continue` Disalahpahami

### Kode Bermasalah

```ts
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) continue
  console.log(i) // hanya angka ganjil
}
```

Ini sebenarnya benar, tapi banyak yang mengira `continue` berhenti seperti `break`. `continue` hanya melewati **satu putaran**, bukan menghentikan seluruh loop.

### Perbedaan yang Perlu Diingat

```text
break    → keluar dari seluruh loop
continue → lewati putaran ini, lanjut ke berikutnya
```

---

## Error 6 — Arah Perubahan Terbalik

### Kode Bermasalah

```ts
for (let i = 10; i >= 1; i++) { // seharusnya i--
  console.log(i) // 10, 11, 12, ... tidak pernah selesai!
}
```

### Cara Memperbaiki

```ts
for (let i = 10; i >= 1; i--) {
  console.log(i) // 10, 9, 8, ..., 1
}
```

---

## Error 7 — `for...in` pada Array

### Kode Bermasalah

```ts
const nilai: number[] = [80, 90, 70]
for (const i in nilai) {
  console.log(i) // "0", "1", "2" — indeks sebagai string!
}
```

### Mengapa Terjadi?

`for...in` menghasilkan nama key (indeks sebagai string), bukan nilai.

### Cara Memperbaiki

```ts
for (const n of nilai) {
  console.log(n) // 80, 90, 70
}
```

---

## Error 8 — Kondisi `!=` yang Melewati Nilai Target

### Kode Bermasalah

```ts
for (let i = 0; i !== 10; i += 3) {
  console.log(i) // 0, 3, 6, 9, 12, 15, ... infinite!
}
```

`i` melewati nilai 10 (melompat dari 9 ke 12). Kondisi `i !== 10` tidak pernah false.

### Cara Memperbaiki

```ts
for (let i = 0; i < 10; i += 3) {
  console.log(i) // 0, 3, 6, 9
}
```

---

## Strategi Debug Loop

1. Tambahkan `console.log(i)` di dalam loop untuk memantau nilai setiap putaran.
2. Periksa apakah kondisi berhenti benar-benar akan terpenuhi.
3. Periksa arah perubahan: apakah menuju kondisi `false`?
4. Jika infinite loop: `Ctrl + C` dulu, baru analisis kodenya.

---

## Latihan

Identifikasi bug dalam setiap kode berikut:

```ts
// 1
let x = 1
while (x < 10) {
  console.log(x)
  x--
}

// 2
const arr = [1, 2, 3]
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i])
}

// 3
for (let i = 1; i != 9; i += 2) {
  console.log(i)
}
```

Jelaskan penyebab setiap bug dan cara memperbaikinya.

---

## Ringkasan

- Lupa perubahan variabel → infinite loop.
- `<` vs `<=` menentukan apakah batas terakhir diproses.
- Variabel `let` di dalam loop tidak bisa diakses di luar.
- `break` keluar dari loop; `continue` lewati satu putaran.
- Gunakan `<` atau `<=` daripada `!==` untuk kondisi angka.

:::tip[Langkah Selanjutnya]
Lanjut ke **Ringkasan BAB 3** untuk menutup bab ini.
:::
