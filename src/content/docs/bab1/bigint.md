---
title: "Tipe Data: bigint"
description: Mengenal bigint — tipe data untuk menyimpan bilangan bulat yang sangat besar.
---

# Tipe Data: `bigint`

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Menjelaskan mengapa `bigint` dibutuhkan
- Menulis nilai bigint dengan benar
- Membedakan `number` dan `bigint`
- Menghindari kesalahan mencampur keduanya

---

## Pendahuluan

Tipe `number` sangat cukup untuk hampir semua kebutuhan siswa: nilai ujian, harga barang, umur, tinggi badan, dan jumlah siswa. Tapi ada batas angka yang bisa disimpan dengan aman oleh `number`.

Untuk angka bulat yang **sangat besar**, TypeScript menyediakan tipe `bigint`.

---

## Penjelasan Materi

Angka `number` di JavaScript disimpan menggunakan format yang punya batas presisi. Batas angka bulat aman adalah:

```ts
Number.MAX_SAFE_INTEGER
// 9007199254740991
```

Jika angka lebih besar dari itu, beberapa digit dapat berubah tanpa kamu sadari. `bigint` dibuat untuk menyimpan bilangan bulat besar dengan presisi tetap.

:::note[Untuk Pemula]
Kamu hampir tidak akan membutuhkan `bigint` saat membuat program latihan sederhana. Pelajari konsepnya agar kamu tahu kapan tipe ini diperlukan di project besar.
:::

---

## Analogi: Kalkulator Biasa vs Kalkulator Super

Bayangkan:

- `number` adalah **kalkulator biasa**. Cukup untuk menghitung nilai, uang jajan, dan luas ruangan.
- `bigint` adalah **kalkulator super**. Dipakai saat menghitung jumlah transaksi bank skala besar, nomor identitas raksasa, atau data astronomi.

Kamu tidak membawa kalkulator super untuk menghitung `2 + 3`, tapi alat itu penting saat angka sudah terlalu besar untuk alat biasa.

---

## Cara Menulis bigint

Tambahkan huruf kecil `n` di akhir bilangan bulat:

```ts
const jumlahBintang: bigint = 999999999999999999999999n
const saldoSangatBesar: bigint = 9007199254740992n
const nol: bigint = 0n
const utang: bigint = -1000000000000000000n
```

Huruf `n` adalah penanda bahwa angka tersebut bertipe `bigint`, bukan `number`.

---

## Ilustrasi

```
number
┌──────────────────────────────┐
│  aman sampai 9.007.199...e15 │
└──────────────────────────────┘

bigint
┌──────────────────────────────────────────┐
│  dapat menyimpan bilangan bulat jauh lebih│
│  besar dengan digit tetap tepat           │
└──────────────────────────────────────────┘
```

---

## Mari Mencoba

Buat file `src/bab1/bigint.ts`:

```ts
const batasNumberAman: number = Number.MAX_SAFE_INTEGER
const angkaBesar: bigint = 9007199254740992n
const jumlahData: bigint = 123456789012345678901234567890n

console.log("Batas number aman:", batasNumberAman)
console.log("Angka bigint:", angkaBesar)
console.log("Jumlah data besar:", jumlahData)

const dataBaru: bigint = jumlahData + 500n
console.log("Setelah ditambah 500:", dataBaru)
```

Jalankan:

```
tsx src/bab1/bigint.ts
```

Output akan menampilkan angka besar tanpa pembulatan.

---

## Penjelasan Baris per Baris

```ts
const angkaBesar: bigint = 9007199254740992n
```

- `const` — nilai tidak akan diubah
- `angkaBesar` — nama variabel
- `: bigint` — variabel hanya boleh menyimpan bigint
- `9007199254740992n` — angka besar dengan penanda `n`

```ts
const dataBaru: bigint = jumlahData + 500n
```

Kedua nilai adalah bigint. Karena itu, TypeScript mengizinkan penjumlahan tersebut.

---

## number dan bigint Tidak Boleh Dicampur Langsung

```ts
const jumlahSiswa: number = 36
const jumlahData: bigint = 1000000000000000000n

// const total = jumlahSiswa + jumlahData
// Error! Operator '+' cannot be applied to types 'number' and 'bigint'.
```

Jika memang perlu, ubah salah satu tipe secara sengaja:

```ts
const total: bigint = BigInt(jumlahSiswa) + jumlahData
console.log(total)
```

:::caution[Perhatikan Konversi]
Jangan asal mengubah bigint ke number jika angkanya sangat besar. Hasilnya bisa kehilangan ketelitian digit. Lebih aman mengubah number kecil menjadi bigint dengan `BigInt()`.
:::

---

## Keterbatasan bigint

`bigint` hanya menyimpan **bilangan bulat**. Tidak bisa menyimpan desimal:

```ts
const harga: bigint = 12.5n
// Error! BigInt literals must be integers.
```

Jika kamu butuh angka desimal, gunakan `number`.

---

## Kesalahan Umum

### ❌ Lupa huruf `n`

```ts
const angka: bigint = 999999999999999999
// Error! Nilai di atas dibaca sebagai number, bukan bigint.
```

**Perbaikan:**

```ts
const angka: bigint = 999999999999999999n
```

### ❌ Mencampur number dan bigint

```ts
const hasil = 10n + 5
// Error saat runtime jika dijalankan
```

**Perbaikan:**

```ts
const hasil = 10n + 5n
```

---

## Tips

:::tip[Gunakan Sesuai Kebutuhan]
Gunakan `number` untuk hampir semua angka di latihan dan aplikasi sekolah. Pilih `bigint` hanya saat kamu benar-benar menangani bilangan bulat yang melewati batas aman `number`.
:::

---

## Latihan

Buat file `src/bab1/latihan-bigint.ts`:

1. Buat konstanta `jumlahPendudukDunia` bertipe bigint dengan angka besar
2. Buat konstanta `jumlahPendudukIndonesia` bertipe bigint
3. Tambahkan keduanya ke dalam variabel `totalPenduduk`
4. Tampilkan semua hasil
5. Pastikan semua angka bigint diakhiri huruf `n`

---

## Ringkasan

- `bigint` menyimpan bilangan bulat sangat besar secara tepat
- Tulis bigint dengan `n` di akhir: `123n`
- `bigint` tidak bisa menyimpan desimal
- `number` dan `bigint` tidak boleh dicampur langsung
- Untuk data normal, `number` tetap pilihan yang tepat

:::tip[Langkah Selanjutnya]
Lanjut ke **symbol** untuk mengenal tipe unik yang jarang dipakai pemula, tetapi penting di TypeScript modern.
:::
