---
title: "Kontrol Loop: break"
description: Menghentikan loop sebelum kondisi selesai menggunakan perintah break.
---

# Perintah `break`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menggunakan `break` untuk menghentikan loop lebih awal saat kondisi tertentu terpenuhi.

---

## Pendahuluan

Kadang loop perlu berhenti sebelum kondisi normalnya terpenuhi. Misalnya: mencari siswa tertentu — begitu ditemukan, tidak perlu memeriksa siswa lainnya. `break` digunakan untuk keluar paksa dari loop.

---

## Analogi Kehidupan Sehari-hari

### Bel Sekolah Berbunyi

Kamu sedang mengerjakan soal ujian nomor per nomor. Ketika bel berbunyi, kamu berhenti mengerjakan meskipun soal belum habis.

```text
Untuk setiap soal:
  Kerjakan soal
  Jika bel berbunyi → berhenti (break)
```

---

## Penjelasan Materi

`break` langsung menghentikan loop — tidak menunggu kondisi loop berakhir secara normal.

```ts
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break
  }
  console.log(i)
}
```

Loop seharusnya berjalan 10 kali, tetapi `break` pada `i === 5` menghentikannya di angka 4.

---

## Visual Illustration

```text
i=1 → cetak → i=2 → cetak → i=3 → cetak → i=4 → cetak
  │
i=5 → break → KELUAR DARI LOOP
  │
Kode setelah loop berjalan normal
```

---

## Mari Mencoba

Buat `src/bab3/break.ts`:

```ts
const namaSiswa: string[] = ["Andi", "Budi", "Citra", "Dian", "Eko", "Fira"]
const targetCari: string = "Dian"

console.log(`Mencari siswa: ${targetCari}`)

for (const nama of namaSiswa) {
  if (nama === targetCari) {
    console.log(`Ditemukan: ${nama}`)
    break
  }
  console.log(`Bukan ${nama}, lanjut...`)
}

console.log("Pencarian selesai.")
```

Jalankan:

```text
tsx src/bab3/break.ts
```

## Output

```text
Mencari siswa: Dian
Bukan Andi, lanjut...
Bukan Budi, lanjut...
Bukan Citra, lanjut...
Ditemukan: Dian
Pencarian selesai.
```

---

## Penjelasan Baris per Baris

- Loop `for...of` mengunjungi setiap nama.
- `if (nama === targetCari)` memeriksa apakah nama yang dicari ditemukan.
- `break` keluar dari loop begitu target ditemukan — Eko dan Fira tidak diperiksa.
- `"Pencarian selesai."` tetap muncul karena berada **di luar** loop.

---

## `break` di while

```ts
let skor: number = 0

while (true) {
  skor += 10
  console.log(`Skor: ${skor}`)
  if (skor >= 50) {
    break
  }
}

console.log("Game selesai!")
```

`break` sangat berguna dalam `while (true)` untuk loop yang berhenti berdasarkan logika internal, bukan kondisi awal.

---

## Kesalahan yang Sering Terjadi

```ts
for (let i = 1; i <= 5; i++) {
  console.log(i)
}
break // Error! break di luar loop
```

`break` hanya bisa digunakan **di dalam** loop atau `switch`.

---

## Tips

:::tip[break untuk Pencarian]
`break` sangat berguna saat mencari elemen dalam array. Begitu ditemukan, hentikan loop agar tidak membuang waktu memproses sisa data.
:::

---

## Latihan

1. Buat array 10 angka. Hentikan loop ketika menemukan angka lebih dari 50.
2. Buat loop hitung dari 1. Hentikan ketika jumlah kumulatif melebihi 100. Tampilkan berapa angka yang sudah dijumlahkan.

---

## Ringkasan

- `break` langsung keluar dari loop tanpa menyelesaikan putaran tersisa.
- Kode setelah loop tetap berjalan normal.
- Berguna untuk pencarian, validasi, dan pengontrol loop `while (true)`.

:::tip[Langkah Selanjutnya]
Lanjut ke **continue** untuk melewati satu putaran tanpa menghentikan loop.
:::
