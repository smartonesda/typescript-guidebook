---
title: "Operator Perbandingan"
description: Membandingkan nilai dengan >, <, >=, <=, ===, dan !== untuk menghasilkan boolean.
---

# Operator Perbandingan

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membandingkan dua nilai dan memahami hasil boolean dari setiap perbandingan.

---

## Pendahuluan

Program perlu menjawab pertanyaan seperti: "Apakah nilai sudah cukup?", "Apakah umur minimal terpenuhi?", dan "Apakah kode yang dimasukkan benar?" Jawaban awal dari pertanyaan itu biasanya berupa `true` atau `false`.

---

## Analogi Kehidupan Sehari-hari

Guru membandingkan nilai siswa dengan batas kelulusan.

```text
Nilai siswa: 78
Batas lulus: 75
Apakah 78 >= 75? → true
```

Operator perbandingan seperti aturan pada lembar penilaian. Ia tidak menghitung nilai baru, tetapi memberi jawaban benar atau salah.

---

## Penjelasan Materi

| Operator | Arti | Contoh | Hasil |
|---|---|---|---|
| `>` | lebih besar | `80 > 75` | `true` |
| `<` | lebih kecil | `80 < 75` | `false` |
| `>=` | lebih besar atau sama | `75 >= 75` | `true` |
| `<=` | lebih kecil atau sama | `70 <= 75` | `true` |
| `===` | sama nilai dan tipe | `75 === 75` | `true` |
| `!==` | tidak sama nilai atau tipe | `75 !== 70` | `true` |

---

## Mari Mencoba

Buat `src/bab2/operator-perbandingan.ts`:

```ts
const nilaiSiswa: number = 78
const batasLulus: number = 75
const namaSiswa: string = "Putra"

console.log(`Nilai > batas: ${nilaiSiswa > batasLulus}`)
console.log(`Nilai >= batas: ${nilaiSiswa >= batasLulus}`)
console.log(`Nilai < batas: ${nilaiSiswa < batasLulus}`)
console.log(`Nilai sama dengan 78: ${nilaiSiswa === 78}`)
console.log(`Nilai tidak sama dengan 100: ${nilaiSiswa !== 100}`)
console.log(`Nama sama dengan Putra: ${namaSiswa === "Putra"}`)
```

Jalankan:

```text
tsx src/bab2/operator-perbandingan.ts
```

---

## Output

```text
Nilai > batas: true
Nilai >= batas: true
Nilai < batas: false
Nilai sama dengan 78: true
Nilai tidak sama dengan 100: true
Nama sama dengan Putra: true
```

---

## Penjelasan Baris per Baris

- `nilaiSiswa > batasLulus` mengecek apakah 78 lebih besar dari 75.
- `>=` menerima nilai yang sama dengan batas. Ini penting untuk aturan "minimal 75".
- `===` membandingkan nilai dan tipe data secara ketat.
- `!==` berarti "tidak sama dengan".
- Semua hasil pada `console.log` adalah boolean.

---

## Kesalahan Umum

```ts
const benar = nilaiSiswa = batasLulus
```

`=` memberi nilai baru. Jangan gunakan untuk perbandingan.

```ts
console.log(75 == "75") // true, hasil membingungkan
console.log(75 === "75") // false, tipe berbeda
```

:::caution[Selalu Pilih ===]
Gunakan `===` dan `!==`, bukan `==` dan `!=`. Perbandingan ketat mencegah hasil tak terduga dari konversi otomatis JavaScript.
:::

---

## Tips

:::tip[Simpan Kondisi Bernama]
Jika kondisi penting, simpan di variabel boolean: `const lulus = nilaiSiswa >= batasLulus`. Kode lebih mudah dibaca.
:::

---

## Latihan

Buat dua angka `nilaiPertama` dan `nilaiKedua`. Tampilkan hasil semua operator perbandingan utama untuk kedua angka tersebut.

---

## Ringkasan

- Operator perbandingan menghasilkan boolean.
- Gunakan `>=` untuk batas minimal dan `<=` untuk batas maksimal.
- Gunakan `===` dan `!==` untuk perbandingan ketat.

:::tip[Langkah Selanjutnya]
Lanjut ke **Operator Logika**.
:::
