---
title: "Infinite Loop"
description: Memahami infinite loop, penyebabnya, cara mendeteksinya, dan cara menghindarinya.
---

# Infinite Loop

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menjelaskan apa itu infinite loop, mengidentifikasi kode yang berpotensi menyebabkannya, dan menulis loop yang aman.

---

## Pendahuluan

Salah satu kesalahan paling umum saat belajar loop adalah membuat program yang tidak pernah berhenti. Ini disebut **infinite loop** — loop tanpa akhir. Program akan terus berjalan, menghabiskan memori CPU, hingga dihentikan paksa.

---

## Analogi Kehidupan Sehari-hari

### Kipas Angin yang Tidak Pernah Dimatikan

Bayangkan kipas angin yang dinyalakan tapi tidak ada tombol mati. Ia terus berputar selamanya sampai ada yang mencabut kabelnya dari luar.

Infinite loop seperti itu. Program terus berputar karena kondisi berhenti tidak pernah terpenuhi.

---

## Penyebab Infinite Loop

### 1. Lupa Mengubah Variabel Kondisi

```ts
let i: number = 1

while (i <= 10) {
  console.log(i)
  // i++ terlupakan!
}
```

`i` selalu 1, kondisi `1 <= 10` selalu true → loop tidak berhenti.

### 2. Kondisi yang Tidak Mungkin False

```ts
while (true) {
  console.log("Berjalan terus")
  // tidak ada break
}
```

### 3. Arah Perubahan Salah

```ts
let n: number = 10

while (n > 0) {
  console.log(n)
  n++ // seharusnya n--, bukan n++
}
```

`n` semakin besar, tidak pernah mencapai 0.

### 4. Kondisi yang Tidak Konsisten

```ts
for (let i = 1; i != 10; i += 2) {
  console.log(i) // 1, 3, 5, 7, 9, 11, 13, ... tidak pernah = 10!
}
```

`i` melompat dari 9 ke 11, tidak pernah sama dengan 10.

---

## Visual Illustration

```text
LOOP NORMAL            INFINITE LOOP
──────────             ─────────────
mulai                  mulai
  │                      │
kondisi ──false─► selesai  kondisi ──false─► (tidak pernah)
  │                      │
 true                   true
  │                      │
 aksi                   aksi
  │                      │
perubahan              (tidak ada perubahan)
  │                      │
  └─► kondisi            └─► kondisi ──► true ──► aksi ──► ...
```

---

## Cara Menghentikan Infinite Loop

:::caution[Penting]
Jika kamu tidak sengaja menjalankan infinite loop di terminal, tekan **`Ctrl + C`** untuk menghentikan program secara paksa.
:::

---

## Mari Mencoba: Loop Aman dengan while(true)

`while (true)` tidak selalu buruk. Dengan `break`, ia bisa dikendalikan:

```ts
let percobaan: number = 0
const maksPercobaan: number = 5

while (true) {
  percobaan++

  if (percobaan >= maksPercobaan) {
    console.log(`Berhenti setelah ${percobaan} percobaan.`)
    break
  }

  console.log(`Percobaan ke-${percobaan}`)
}
```

Jalankan:

```text
tsx src/bab3/infinite-loop.ts
```

## Output

```text
Percobaan ke-1
Percobaan ke-2
Percobaan ke-3
Percobaan ke-4
Berhenti setelah 5 percobaan.
```

---

## Checklist Sebelum Menjalankan Loop

Sebelum menjalankan setiap loop, tanya pada diri sendiri:

- [ ] Apakah ada kondisi berhenti yang jelas?
- [ ] Apakah variabel kondisi berubah setiap putaran?
- [ ] Apakah arah perubahan menuju kondisi `false`?
- [ ] Jika memakai `!=`, apakah nilai itu pasti akan tercapai?

---

## Kesalahan yang Sering Terjadi

Menggunakan `!=` atau `!==` sebagai kondisi loop bisa berbahaya:

```ts
for (let i = 0; i !== 10; i += 3) {
  // i: 0, 3, 6, 9, 12... tidak pernah = 10
}
```

Gunakan `<` atau `<=` yang lebih aman untuk kondisi angka.

---

## Tips

:::tip[Gunakan Batas Aman]
Untuk loop yang kondisi berhentinya tidak pasti, tambahkan batas maksimum sebagai pengaman:

```ts
let maksIterasi = 1000
let iterasi = 0
while (kondisi && iterasi < maksIterasi) {
  // aksi
  iterasi++
}
```
:::

---

## Latihan

Identifikasi mana dari kode berikut yang menyebabkan infinite loop dan jelaskan mengapa:

1. `for (let i = 10; i >= 1; i++) { console.log(i) }`
2. `let x = 5; while (x < 10) { x++ }`
3. `let y = 0; while (y !== 10) { y += 3 }`

---

## Ringkasan

- Infinite loop terjadi ketika kondisi berhenti tidak pernah menjadi `false`.
- Penyebab: lupa mengubah variabel, perubahan ke arah yang salah, atau kondisi yang tidak pernah tercapai.
- Hentikan dengan `Ctrl + C` jika terlanjur berjalan.
- Gunakan `<` dan `<=` daripada `!==` untuk kondisi angka.

:::tip[Langkah Selanjutnya]
Lanjut ke **Iterasi Array** untuk mempraktikkan loop pada data nyata.
:::
