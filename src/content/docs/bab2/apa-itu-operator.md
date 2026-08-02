---
title: "Apa itu Operator?"
description: Memahami operator sebagai simbol untuk melakukan tindakan pada nilai dan variabel.
---

# Apa itu Operator?

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menjelaskan operator, operand, dan hasil operasi sederhana.

---

## Pendahuluan

Program tidak hanya menyimpan data. Program perlu menjumlahkan harga, mengecek nilai, dan memperbarui skor. Tanda yang dipakai untuk melakukan tindakan itu disebut **operator**.

---

## Penjelasan Materi

**Operator** adalah simbol atau kata khusus yang melakukan tindakan pada satu atau lebih nilai.

Nilai yang diproses operator disebut **operand**.

```ts
const hasil: number = 5 + 3
```

Pada kode itu:

```text
5   → operand pertama
+   → operator penjumlahan
3   → operand kedua
8   → hasil operasi
```

Jenis operator yang dipelajari di bab ini:

| Jenis | Contoh | Fungsi |
|---|---|---|
| Aritmatika | `+`, `-`, `*`, `/` | Menghitung |
| Penugasan | `=`, `+=` | Memberi/memperbarui nilai |
| Perbandingan | `>=`, `===` | Membandingkan nilai |
| Logika | `&&`, `||`, `!` | Menggabungkan kondisi |
| Unary | `++`, `--`, `typeof` | Bekerja pada satu nilai |
| Nullish | `??` | Memberi nilai cadangan |

---

## Analogi Kehidupan Sehari-hari

Operator seperti tombol pada kalkulator. Angka `5` dan `3` tidak berubah sendiri. Saat tombol `+` ditekan, kalkulator tahu bahwa dua angka itu perlu dijumlahkan.

```text
[ 5 ]  [ + ]  [ 3 ]  [ = ]  →  [ 8 ]
 operand operator operand       hasil
```

---

## Mari Mencoba

Buat `src/bab2/apa-itu-operator.ts`:

```ts
const hargaBuku: number = 12000
const hargaPulpen: number = 3000
const totalHarga: number = hargaBuku + hargaPulpen

console.log(`Harga buku: Rp${hargaBuku}`)
console.log(`Harga pulpen: Rp${hargaPulpen}`)
console.log(`Total: Rp${totalHarga}`)
```

Jalankan:

```text
tsx src/bab2/apa-itu-operator.ts
```

---

## Output

```text
Harga buku: Rp12000
Harga pulpen: Rp3000
Total: Rp15000
```

---

## Penjelasan Baris per Baris

- `const` membuat data yang tidak akan diganti.
- `hargaBuku` dan `hargaPulpen` adalah operand saat digunakan di baris total.
- `+` adalah operator aritmatika untuk menjumlahkan.
- `totalHarga` menyimpan hasil operasi.
- Backtick pada `console.log` membuat `${...}` memasukkan nilai variabel ke teks.

---

## Kesalahan Umum

```ts
const total = "12000" + "3000"
console.log(total) // 120003000
```

Tanda kutip membuat angka menjadi string. Operator `+` lalu menggabungkan teks, bukan menghitung angka.

**Perbaikan:**

```ts
const total = 12000 + 3000
```

---

## Tips

:::tip[Tentukan Tipe Dulu]
Sebelum memakai operator, pastikan tipe data cocok. Perhitungan memakai `number`, sedangkan kondisi memakai `boolean`.
:::

---

## Latihan

Buat dua variabel harga makanan dan minuman. Gunakan operator `+` untuk menghitung total, lalu tampilkan semua data.

---

## Ringkasan

- Operator melakukan tindakan pada nilai.
- Operand adalah nilai yang diproses operator.
- Operator berbeda punya tujuan berbeda: hitung, bandingkan, isi, atau gabungkan kondisi.

:::tip[Langkah Selanjutnya]
Lanjut ke **Operator Aritmatika**.
:::
