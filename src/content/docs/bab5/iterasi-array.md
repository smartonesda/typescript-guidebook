---
title: "Iterasi Array"
description: Mengulangi proses untuk setiap elemen array menggunakan for, for...of, dan forEach.
---

# Iterasi Array

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat memilih loop yang tepat (`for`, `for...of`, atau `forEach`) untuk mengunjungi semua elemen array satu per satu.

---

## Pendahuluan

Mengakses elemen satu per satu menggunakan nomor indeks secara manual sangat membosankan. Kita memerlukan loop untuk secara otomatis melakukan tindakan tertentu pada setiap elemen. Proses ini disebut **iterasi** atau penelusuran array.

---

## Tiga Cara Iterasi Array

Di TypeScript, ada tiga cara umum untuk mengiterasi array:

### 1. Loop `for` Klasik (Dengan Indeks)

Gunakan jika kamu butuh **indeks posisi** elemen:

```ts
for (let i = 0; i < siswa.length; i++) {
  console.log(`${i}. ${siswa[i]}`)
}
```

### 2. Loop `for...of` (Hanya Nilai)

Gunakan jika kamu **hanya butuh nilainya** dan tidak butuh indeksnya:

```ts
for (const s of siswa) {
  console.log(s)
}
```

### 3. Method `.forEach()` (Modern)

Menggunakan callback arrow function untuk setiap elemen:

```ts
siswa.forEach((s, indeks) => {
  console.log(`${indeks}: ${s}`)
})
```

---

## Analogi Kehidupan Sehari-hari

### Membaca Daftar Buku

- **for klasik** seperti membuka halaman buku berdasarkan nomor halamannya satu per satu.
- **for...of** seperti membalik halaman buku satu per satu tanpa melihat nomor halaman di bawahnya.
- **forEach** seperti menyuruh asisten untuk membaca setiap halaman dan melaporkannya kepada kamu.

---

## Mari Mencoba

Buat `src/bab5/iterasi-array.ts`:

```ts
const daftarSiswa: string[] = ["Andi", "Budi", "Citra"]
const nilaiSiswa: number[] = [88, 75, 92]

// Cara 1: for klasik
console.log("=== for Klasik ===")
for (let i = 0; i < daftarSiswa.length; i++) {
  console.log(`Siswa ke-${i + 1}: ${daftarSiswa[i]} | Nilai: ${nilaiSiswa[i]}`)
}

// Cara 2: for...of
console.log("\n=== for...of ===")
for (const nama of daftarSiswa) {
  console.log(`Halo, ${nama}!`)
}

// Cara 3: forEach
console.log("\n=== forEach ===")
daftarSiswa.forEach((nama, indeks) => {
  console.log(`Indeks ${indeks} berisi nama ${nama}`)
})
```

Jalankan:

```text
tsx src/bab5/iterasi-array.ts
```

## Output

```text
=== for Klasik ===
Siswa ke-1: Andi | Nilai: 88
Siswa ke-2: Budi | Nilai: 75
Siswa ke-3: Citra | Nilai: 92

=== for...of ===
Halo, Andi!
Halo, Budi!
Halo, Citra!

=== forEach ===
Indeks 0 berisi nama Andi
Indeks 1 berisi nama Budi
Indeks 2 berisi nama Citra
```

---

## Penjelasan Baris per Baris

- `i < daftarSiswa.length` — memastikan loop `for` klasik berhenti tepat sebelum melewati batas indeks array.
- `for (const nama of daftarSiswa)` — setiap putaran loop, variabel `nama` secara otomatis diisi oleh elemen array berikutnya.
- `daftarSiswa.forEach((nama, indeks) => { ... })` — method bawaan array yang menerima fungsi dengan dua parameter: elemen saat ini dan indeksnya.

---

## Kesalahan yang Sering Terjadi

```ts
// Salah: menggunakan <= bukannya <
for (let i = 0; i <= siswa.length; i++) {
  console.log(siswa[i])
}
// Di putaran terakhir akan mencetak undefined!
```

---

## Tips

:::tip[Gunakan for...of secara default]
Jika kamu tidak membutuhkan nomor indeks, pilihlah `for...of` karena kodenya paling bersih dan paling sedikit potensi memicu error *off-by-one*.
:::

---

## Latihan

Buat array berisi 5 angka. Gunakan loop `for...of` untuk menjumlahkan semua angka tersebut dan tampilkan total akhirnya.

---

## Ringkasan

- Tiga cara iterasi: `for` klasik, `for...of`, dan `.forEach()`.
- Gunakan `for` klasik atau `forEach` jika butuh nomor indeks.
- Gunakan `for...of` jika hanya butuh nilai elemen.
- Pastikan kondisi loop klasik menggunakan `<` (bukan `<=`).

:::tip[Langkah Selanjutnya]
Lanjut ke **push & pop**.
:::
