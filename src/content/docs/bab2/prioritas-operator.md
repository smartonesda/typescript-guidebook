---
title: "Prioritas Operator"
description: Memahami urutan TypeScript menjalankan operator dan memakai kurung untuk membuat rumus jelas.
---

# Prioritas Operator

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat memprediksi urutan operasi sederhana dan memakai kurung agar hasil sesuai maksud.

---

## Pendahuluan

Lihat dua perhitungan ini:

```ts
const hasilA = 2 + 3 * 4
const hasilB = (2 + 3) * 4
```

Hasilnya berbeda. Program memiliki aturan urutan pengerjaan, disebut **prioritas operator**. Memahami aturan ini mencegah kesalahan logika yang tidak selalu menghasilkan error.

---

## Analogi Kehidupan Sehari-hari

Prioritas operator seperti urutan mengerjakan soal matematika.

```text
2 + 3 × 4
```

Kamu mengerjakan perkalian dulu, baru penjumlahan. Jika ingin penjumlahan lebih dulu, beri tanda kurung.

---

## Penjelasan Materi

Urutan ringkas yang sering dipakai di awal belajar:

```text
1. ( )      → kurung
2. **       → pangkat
3. * / %    → kali, bagi, sisa bagi
4. + -      → tambah, kurang
5. > < >= <= → perbandingan
6. === !==  → kesamaan ketat
7. &&       → logika dan
8. ||       → logika atau
9. ??       → nilai cadangan
10. = += -= → penugasan
```

Tidak perlu menghafal seluruh daftar sekarang. Gunakan kurung jika ragu.

---

## Mari Mencoba

Buat `src/bab2/prioritas-operator.ts`:

```ts
const tanpaKurung: number = 2 + 3 * 4
const denganKurung: number = (2 + 3) * 4
const rataRata: number = (80 + 90 + 70) / 3
const lulus: boolean = rataRata >= 75 && rataRata <= 100

console.log(`Tanpa kurung: ${tanpaKurung}`)
console.log(`Dengan kurung: ${denganKurung}`)
console.log(`Rata-rata: ${rataRata}`)
console.log(`Nilai valid dan lulus: ${lulus}`)
```

Jalankan:

```text
tsx src/bab2/prioritas-operator.ts
```

---

## Output

```text
Tanpa kurung: 14
Dengan kurung: 20
Rata-rata: 80
Nilai valid dan lulus: true
```

---

## Penjelasan Baris per Baris

- `2 + 3 * 4` menjalankan `3 * 4` dahulu, sehingga hasilnya `2 + 12` = 14.
- `(2 + 3) * 4` menjalankan isi kurung dahulu, sehingga hasilnya 20.
- `(80 + 90 + 70) / 3` memastikan seluruh nilai dijumlah sebelum dibagi.
- `&&` dikerjakan setelah dua perbandingan menghasilkan boolean.

---

## Kesalahan Umum

```ts
const rataRata = 80 + 90 + 70 / 3
```

Kode itu hanya membagi 70 dengan 3, bukan membagi total. Hasilnya salah tetapi tidak error.

**Perbaikan:**

```ts
const rataRata = (80 + 90 + 70) / 3
```

---

## Tips

:::tip[Kurung Lebih Baik daripada Tebakan]
Walau kamu tahu prioritas operator, tetap gunakan kurung pada rumus atau kondisi panjang. Kode lebih mudah dibaca oleh teman, guru, dan dirimu di masa depan.
:::

---

## Latihan

Hitung harga setelah diskon 10% dari harga `150000`. Buat satu versi tanpa kurung dan satu versi dengan kurung. Jelaskan versi mana yang benar.

---

## Ringkasan

- Program menjalankan operator berdasarkan prioritas.
- Kurung `()` selalu dikerjakan lebih dahulu.
- Kesalahan prioritas sering membuat hasil salah tanpa pesan error.
- Gunakan kurung untuk rumus dan kondisi penting.

:::tip[Langkah Selanjutnya]
Operator selesai. Lanjut ke **Apa itu Percabangan**.
:::
