---
title: "Nested Loop"
description: Menggunakan loop di dalam loop untuk memproses data dua dimensi.
---

# Nested Loop

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat loop di dalam loop dan menjelaskan alur eksekusinya.

---

## Pendahuluan

Kadang satu loop saja tidak cukup. Saat data bersifat dua dimensi — seperti baris dan kolom — kita perlu loop di dalam loop. Ini disebut **nested loop** atau loop bersarang.

---

## Analogi Kehidupan Sehari-hari

### Denah Kursi Kelas

Bayangkan kelas punya 5 baris dan 6 kolom kursi. Untuk memanggil setiap siswa, kamu melalui setiap baris, dan dalam setiap baris melalui setiap kolom.

```text
Untuk setiap baris (1-5):
  Untuk setiap kolom (1-6):
    Panggil siswa di baris X, kolom Y
```

Loop luar bergerak antar baris. Loop dalam bergerak antar kolom dalam satu baris.

---

## Visual Illustration

```text
Loop Luar (baris 1-3) × Loop Dalam (kolom 1-3)

baris=1:  (1,1) (1,2) (1,3)
baris=2:  (2,1) (2,2) (2,3)
baris=3:  (3,1) (3,2) (3,3)

Urutan eksekusi:
(1,1) → (1,2) → (1,3) → (2,1) → (2,2) → (2,3) → (3,1) → ...
```

---

## Mari Mencoba

Buat `src/bab3/nested-loop.ts`:

```ts
console.log("=== Tabel Perkalian ===")
for (let baris = 1; baris <= 5; baris++) {
  let barisTeks = ""
  for (let kolom = 1; kolom <= 5; kolom++) {
    const hasil = baris * kolom
    barisTeks += `${hasil.toString().padStart(4, " ")}`
  }
  console.log(barisTeks)
}

console.log("\n=== Pola Bintang ===")
for (let i = 1; i <= 5; i++) {
  let bintang = ""
  for (let j = 1; j <= i; j++) {
    bintang += "* "
  }
  console.log(bintang)
}
```

Jalankan:

```text
tsx src/bab3/nested-loop.ts
```

## Output

```text
=== Tabel Perkalian ===
   1   2   3   4   5
   2   4   6   8  10
   3   6   9  12  15
   4   8  12  16  20
   5  10  15  20  25

=== Pola Bintang ===
* 
* * 
* * * 
* * * * 
* * * * * 
```

---

## Penjelasan Baris per Baris

- Loop luar (`baris`) menentukan baris mana yang sedang diproses.
- Loop dalam (`kolom`) memproses semua kolom **dalam satu baris** sebelum loop luar melanjutkan.
- `padStart(4, " ")` merapikan angka agar setiap kolom lebar 4 karakter.
- Pola bintang: loop dalam berjalan sebanyak nilai `i` — itulah cara membangun pola segitiga.

---

## Hitungan Total Putaran

Jika loop luar berjalan `m` kali dan loop dalam berjalan `n` kali, total putaran adalah `m × n`.

```text
5 baris × 5 kolom = 25 putaran total
```

---

## Kesalahan yang Sering Terjadi

```ts
for (let i = 1; i <= 3; i++) {
  for (let i = 1; i <= 3; i++) { // i redeclared!
    console.log(i)
  }
}
```

Kedua loop memakai nama variabel `i`. TypeScript akan error karena `i` sudah dideklarasikan. Gunakan nama berbeda: `i` untuk luar, `j` untuk dalam.

---

## Tips

:::tip[Penamaan Variabel Loop]
Konvensi umum: `i` untuk loop terluar, `j` untuk satu level dalam, `k` untuk dua level dalam. Ini membantu membedakan variabel setiap level.
:::

---

## Latihan

1. Buat tabel perkalian 1 sampai 10 (10×10).
2. Buat pola segitiga terbalik: baris pertama 5 bintang, baris terakhir 1 bintang.

---

## Ringkasan

- Nested loop adalah loop di dalam loop.
- Loop dalam berjalan **sepenuhnya** untuk setiap satu putaran loop luar.
- Cocok untuk data dua dimensi seperti tabel dan pola.
- Gunakan nama variabel berbeda (`i`, `j`, `k`) untuk setiap level.

:::tip[Langkah Selanjutnya]
Lanjut ke **break** untuk menghentikan loop lebih awal.
:::
