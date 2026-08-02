---
title: "Ringkasan BAB 2"
description: Rangkuman lengkap BAB 2 — operator cheat sheet, alur percabangan, checklist, dan peta konsep.
---

# Ringkasan BAB 2

## Selamat!

Kamu telah menyelesaikan **BAB 2: Operator & Percabangan**. Ini adalah bab yang membangun kemampuan berpikir logis — kemampuan yang akan terus kamu gunakan di setiap program yang pernah dibuat.

---

## Operator Cheat Sheet

### Aritmatika

| Operator | Fungsi | Contoh | Hasil |
|---|---|---|---|
| `+` | Penjumlahan | `8 + 2` | `10` |
| `-` | Pengurangan | `8 - 2` | `6` |
| `*` | Perkalian | `8 * 2` | `16` |
| `/` | Pembagian | `8 / 2` | `4` |
| `%` | Sisa bagi | `8 % 3` | `2` |
| `**` | Pangkat | `2 ** 3` | `8` |

### Penugasan

| Operator | Bentuk Panjang |
|---|---|
| `=` | isi nilai baru |
| `+=` | `x = x + n` |
| `-=` | `x = x - n` |
| `*=` | `x = x * n` |
| `/=` | `x = x / n` |

### Perbandingan

| Operator | Arti |
|---|---|
| `>` | lebih besar |
| `<` | lebih kecil |
| `>=` | lebih besar atau sama |
| `<=` | lebih kecil atau sama |
| `===` | sama nilai dan tipe |
| `!==` | tidak sama |

### Logika

| Operator | Arti | Hasil true |
|---|---|---|
| `&&` | dan | semua true |
| `||` | atau | minimal satu true |
| `!` | tidak/bukan | membalik boolean |

### Khusus

| Operator | Fungsi |
|---|---|
| `++` | tambah satu |
| `--` | kurang satu |
| `??` | nilai cadangan jika null/undefined |
| `typeof` | nama tipe data |
| ternary `? :` | pilih satu dari dua |

---

## Percabangan: Pilih yang Tepat

| Situasi | Pilihan |
|---|---|
| Satu tindakan opsional | `if` |
| Dua pilihan tetap | `if...else` atau ternary |
| Beberapa rentang nilai | `else if` |
| Banyak pilihan dari satu nilai | `switch` |
| Syarat bertahap | nested `if` |
| Nilai cadangan null/undefined | `??` |

---

## Visual Alur Percabangan

```text
PROGRAM PERLU MEMILIH?
        │
        ▼
Satu pilihan opsional → if
Dua pilihan tepat     → if...else / ternary
Rentang nilai         → else if
Nilai tepat banyak    → switch
Syarat berlapis       → nested if
Data mungkin null     → ??
```

---

## Konsep yang Harus Diingat

### Prioritas operator

Perkalian dan pembagian sebelum penjumlahan. Gunakan kurung jika ingin urutan berbeda.

```ts
const rataRata = (nilai1 + nilai2 + nilai3) / 3
```

### Gunakan === bukan ==

```ts
// Baik
if (umur === 17) { ... }

// Hindari
if (umur == 17) { ... }
```

### Break di switch

```ts
case "Senin":
  jadwal = "Upacara"
  break // jangan lupa
```

### Urutan else if

Untuk batas angka dengan `>=`, mulai dari batas tertinggi:

```ts
if (nilai >= 90) { ... }
else if (nilai >= 75) { ... }
```

---

## Perintah Berguna

```text
tsx src/bab2/namafile.ts   ← jalankan file TypeScript
```

---

## Checklist BAB 2

- [ ] Bisa memakai semua operator aritmatika
- [ ] Bisa memakai operator penugasan `+=`, `-=`, dll.
- [ ] Bisa membandingkan nilai dengan operator perbandingan
- [ ] Bisa menggabungkan kondisi dengan `&&` dan `||`
- [ ] Bisa memakai `++`, `--`, dan `typeof`
- [ ] Bisa memakai `??` untuk nilai cadangan
- [ ] Memahami prioritas operator dan memakai kurung
- [ ] Bisa membuat `if`, `if...else`, dan `else if`
- [ ] Bisa memakai nested if untuk syarat bertahap
- [ ] Bisa membuat `switch` dengan `break` dan `default`
- [ ] Bisa memakai ternary untuk keputusan singkat
- [ ] Menyelesaikan studi kasus sistem penilaian
- [ ] Menyelesaikan mini project laporan kelulusan
- [ ] Sudah mencoba 10 challenge
- [ ] Mengerti error umum dan cara memperbaikinya

---

## Latihan Penutup

Tanpa melihat contoh sebelumnya, buat `src/bab2/review-bab2.ts`:

1. Simpan tiga nilai mata pelajaran.
2. Hitung rata-rata.
3. Tentukan grade dengan `else if`.
4. Periksa satu syarat tambahan dengan `&&`.
5. Buat laporan terminal minimal delapan baris.
6. Jalankan dan pastikan output berubah jika nilai diubah.

---

## Pesan untuk Kamu

Operator dan percabangan adalah alat berpikir. Setiap program keputusan — dari kalkulator sederhana hingga sistem sekolah — memakai konsep yang sama.

Kamu sudah bisa membuat program memilih. Ini pencapaian nyata.

:::tip[Selesai BAB 2]
Pastikan checklist dan challenge sudah dikerjakan sebelum melanjutkan ke BAB berikutnya bersama guru.
:::
