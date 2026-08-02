---
title: "Loop: while"
description: Memakai while untuk mengulang tindakan selama kondisi masih true.
---

# Loop `while`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat loop `while` yang berjalan berdasarkan kondisi boolean.

---

## Pendahuluan

`while` adalah loop paling dasar. Ia terus berjalan **selama** kondisinya bernilai `true`. Begitu kondisi menjadi `false`, loop berhenti.

---

## Analogi Kehidupan Sehari-hari

### Mengisi Ember

Kamu mengisi ember dari keran. Selama ember belum penuh, kamu terus mengisinya. Begitu penuh, keran ditutup.

```text
Selama ember belum penuh:
  Putar keran
  Tambah air
Keran ditutup
```

---

## Penjelasan Materi

Bentuk dasar `while`:

```ts
while (kondisi) {
  // tindakan yang diulang
}
```

1. Kondisi diperiksa **sebelum** setiap putaran.
2. Jika `true`, blok di dalam `{}` dijalankan.
3. Setelah blok selesai, kondisi diperiksa lagi.
4. Jika `false`, loop berhenti.

---

## Visual Illustration

```text
MULAI
  │
  ▼
[Cek kondisi]
  │
 false ──────────────────► SELESAI
  │
 true
  │
  ▼
[Jalankan blok]
  │
  ▼
[Perubahan variabel]
  │
  └──────────────────────► [Cek kondisi]
```

---

## Mari Mencoba

Buat `src/bab3/while.ts`:

```ts
let airDalamEmber: number = 0
const kapasitasEmber: number = 10

while (airDalamEmber < kapasitasEmber) {
  airDalamEmber += 2
  console.log(`Air dalam ember: ${airDalamEmber} liter`)
}

console.log("Ember penuh! Keran ditutup.")
```

Jalankan:

```text
tsx src/bab3/while.ts
```

## Output

```text
Air dalam ember: 2 liter
Air dalam ember: 4 liter
Air dalam ember: 6 liter
Air dalam ember: 8 liter
Air dalam ember: 10 liter
Ember penuh! Keran ditutup.
```

---

## Penjelasan Baris per Baris

- `let airDalamEmber = 0` — kondisi awal; `let` karena nilai berubah tiap putaran.
- `const kapasitasEmber = 10` — nilai tetap sebagai batas.
- `while (airDalamEmber < kapasitasEmber)` — loop berjalan selama ember belum penuh.
- `airDalamEmber += 2` — setiap putaran menambah 2 liter (komponen perubahan).
- Setelah 5 putaran, `airDalamEmber = 10`, kondisi `10 < 10` false, loop berhenti.

---

## Contoh Praktis: Menghitung Mundur

```ts
let hitung: number = 10

while (hitung > 0) {
  console.log(`Hitung mundur: ${hitung}`)
  hitung--
}

console.log("Roket meluncur! 🚀")
```

Output:

```text
Hitung mundur: 10
Hitung mundur: 9
...
Hitung mundur: 1
Roket meluncur! 🚀
```

---

## Kapan Memakai `while`

Gunakan `while` saat **jumlah pengulangan belum diketahui** sebelum loop dimulai. Contoh: terus minta input sampai pengguna memasukkan nilai yang valid, atau terus proses data sampai kondisi tertentu terpenuhi.

---

## Kesalahan yang Sering Terjadi

```ts
let n: number = 1
while (n <= 5) {
  console.log(n)
  // Lupa n++
}
```

Program tidak berhenti karena `n` tidak pernah berubah. Tekan `Ctrl + C` untuk menghentikan.

---

## Tips

:::tip[Pastikan Ada Perubahan]
Setiap kali menulis `while`, tanyakan: "Di mana di dalam blok ini nilai kondisi akan berubah?" Jika tidak ada jawaban, kemungkinan besar kamu sedang membuat infinite loop.
:::

---

## Latihan

1. Buat program yang mencetak angka 1 sampai 20 menggunakan `while`.
2. Modifikasi agar hanya mencetak angka **ganjil** dari 1 sampai 19.

---

## Ringkasan

- `while` memeriksa kondisi **sebelum** setiap putaran.
- Loop berjalan selama kondisi `true`.
- Selalu pastikan ada perubahan yang membuat kondisi akhirnya `false`.
- Cocok saat jumlah pengulangan belum diketahui sebelumnya.

:::tip[Langkah Selanjutnya]
Lanjut ke **do...while**.
:::
