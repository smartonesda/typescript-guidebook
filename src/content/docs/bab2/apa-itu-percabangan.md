---
title: "Apa itu Percabangan?"
description: Memahami percabangan sebagai cara program memilih tindakan berdasarkan kondisi.
---

# Apa itu Percabangan?

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menjelaskan percabangan dan hubungan antara kondisi boolean dengan keputusan program.

---

## Pendahuluan

Program tidak selalu menjalankan semua baris dengan cara yang sama. Kadang program harus memilih: tampilkan "Lulus" atau "Remedial"; beri diskon atau tidak; izinkan masuk atau tolak.

Kemampuan program memilih jalan berdasarkan kondisi disebut **percabangan** (*conditional statement*).

---

## Analogi Kehidupan Sehari-hari

Percabangan seperti lampu lalu lintas.

```text
Jika lampu hijau  → jalan
Jika lampu kuning → hati-hati
Jika lampu merah  → berhenti
```

Program pun melakukan hal serupa. Ia memeriksa kondisi, lalu menjalankan blok kode yang sesuai.

---

## Visual Illustration

```text
Kondisi: nilai >= 75?
          │
      true│false
          │
          ▼
      Lulus atau Remedial
```

Kondisi harus menghasilkan `true` atau `false`. Operator perbandingan dan logika dari halaman sebelumnya membantu kita membuat kondisi tersebut.

---

## Bentuk Percabangan di BAB 2

| Bentuk | Kapan dipakai |
|---|---|
| `if` | lakukan sesuatu jika satu kondisi benar |
| `if...else` | pilih satu dari dua jalan |
| `else if` | pilih satu dari beberapa kondisi berurutan |
| nested `if` | kondisi di dalam kondisi lain |
| `switch` | pilih berdasarkan satu nilai dengan banyak pilihan |
| ternary | keputusan dua jalan yang sangat singkat |

---

## Mari Mencoba

Buat `src/bab2/apa-itu-percabangan.ts`:

```ts
const nilai: number = 80
const batasLulus: number = 75
const lulus: boolean = nilai >= batasLulus

if (lulus) {
  console.log("Selamat, kamu lulus!")
}
```

Jalankan:

```text
tsx src/bab2/apa-itu-percabangan.ts
```

---

## Output

```text
Selamat, kamu lulus!
```

Jika `nilai` diubah menjadi `70`, tidak ada output. Blok `if` hanya jalan saat kondisi `lulus` bernilai `true`.

---

## Penjelasan Baris per Baris

- `const lulus` menyimpan hasil perbandingan boolean.
- `if` adalah kata kunci percabangan.
- `(lulus)` adalah kondisi yang diperiksa.
- `{` membuka blok kode yang dijalankan jika kondisi true.
- `console.log()` berada di dalam blok.
- `}` menutup blok `if`.

---

## Kesalahan Umum

```ts
if (nilai >= 75)
  console.log("Lulus")
  console.log("Nilai sudah diperiksa")
```

Tanpa kurung kurawal, hanya satu baris pertama yang masuk `if`. Biasakan selalu memakai `{}` agar maksud kode jelas.

---

## Tips

:::tip[Baca Kondisi seperti Kalimat]
Baca `if (nilai >= 75)` sebagai: "jika nilai lebih besar atau sama dengan 75". Jika kalimatnya masuk akal, kondisi biasanya benar.
:::

---

## Latihan

Buat variabel `sudahMengerjakanTugas` bertipe boolean. Jika nilainya `true`, tampilkan pesan `"Tugas siap dikumpulkan"`.

---

## Ringkasan

- Percabangan membuat program memilih aksi berdasarkan boolean.
- Kondisi `true` dan `false` berasal dari operator perbandingan atau logika.
- `if` adalah bentuk percabangan paling dasar.

:::tip[Langkah Selanjutnya]
Lanjut ke **if**.
:::
