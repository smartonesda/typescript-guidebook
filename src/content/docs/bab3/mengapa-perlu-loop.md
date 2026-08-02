---
title: "Mengapa Perlu Loop?"
description: Memahami alasan program membutuhkan perulangan dan masalah yang diselesaikannya.
---

# Mengapa Perlu Loop?

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menjelaskan mengapa program membutuhkan loop dan kapan loop sebaiknya digunakan.

---

## Pendahuluan

Sebelum belajar sintaks loop, penting memahami *mengapa* loop ada. Banyak pemula langsung mempelajari cara menulis loop tanpa memahami masalah yang diselesaikannya — akibatnya mereka tidak tahu kapan harus menggunakan loop.

---

## Masalah Tanpa Loop

Misalkan kamu diminta mencetak nama semua siswa di kelas (36 orang):

```ts
console.log("1. Andi")
console.log("2. Budi")
console.log("3. Citra")
// ... 33 baris lagi ...
console.log("36. Zara")
```

Ini memakan 36 baris kode. Jika ada 1000 siswa, butuh 1000 baris. Dan jika ingin mengubah format, kamu harus mengubah setiap baris secara manual.

---

## Solusi Dengan Loop

```ts
const namaSiswa: string[] = ["Andi", "Budi", "Citra", "Dian"]

for (let i = 0; i < namaSiswa.length; i++) {
  console.log(`${i + 1}. ${namaSiswa[i]}`)
}
```

Empat baris kode yang sama bekerja untuk 4 siswa *maupun* 4000 siswa.

---

## Analogi Kehidupan Sehari-hari

### Mesin Fotokopi vs Menulis Manual

Tanpa loop seperti menulis surat yang sama 100 kali dengan tangan.  
Dengan loop seperti meletakkan satu surat di mesin fotokopi dan menekan tombol "100 kopi".

```text
TANPA LOOP                    DENGAN LOOP
─────────────────             ──────────────────
console.log("Siswa 1")        for (let i = 1; i <= 100; i++) {
console.log("Siswa 2")          console.log(`Siswa ${i}`)
...                           }
console.log("Siswa 100")
```

---

## Kapan Menggunakan Loop?

Loop tepat digunakan saat:

- Kamu perlu melakukan tindakan yang **sama berulang kali**
- Kamu bekerja dengan **daftar data** (array)
- Kamu perlu **menghitung** sesuatu secara akumulatif
- Kamu perlu **mencari** data dari banyak pilihan
- Jumlah pengulangan **belum diketahui** saat kode ditulis

---

## Visual Illustration

```text
TANPA LOOP          DENGAN LOOP
──────────          ──────────
Tulis baris 1       ┌─ aksi ─┐
Tulis baris 2       │        │
Tulis baris 3  VS   └─ ulang ─┘ × n kali
...
Tulis baris N
```

---

## Mari Mencoba

Buat `src/bab3/mengapa-perlu-loop.ts`:

```ts
// TANPA LOOP — tidak praktis
console.log("--- Tanpa Loop ---")
console.log("Nilai Ujian ke-1: 80")
console.log("Nilai Ujian ke-2: 85")
console.log("Nilai Ujian ke-3: 90")

// DENGAN LOOP — lebih praktis dan mudah diubah
console.log("--- Dengan Loop ---")
const nilai: number[] = [80, 85, 90, 78, 92]

for (let i = 0; i < nilai.length; i++) {
  console.log(`Nilai Ujian ke-${i + 1}: ${nilai[i]}`)
}
```

Jalankan:

```text
tsx src/bab3/mengapa-perlu-loop.ts
```

---

## Penjelasan Baris per Baris

- `const nilai: number[]` — array berisi beberapa angka.
- `i = 0` — indeks array mulai dari nol.
- `i < nilai.length` — loop berjalan selama `i` belum melewati batas array.
- `nilai[i]` — mengambil elemen ke-`i` dari array.
- `i + 1` di dalam template literal untuk tampilkan nomor urut mulai dari 1.

---

## Latihan

Tambahkan tiga nilai lagi ke array `nilai`. Jalankan ulang. Apakah kode loop berubah? Bandingkan dengan versi tanpa loop.

---

## Ringkasan

- Tanpa loop, kode berulang menjadi panjang dan susah dirawat.
- Loop memungkinkan satu blok kode bekerja untuk jumlah data berapapun.
- Loop paling tepat untuk tindakan berulang, iterasi array, dan pencarian data.

:::tip[Langkah Selanjutnya]
Lanjut ke **while** untuk mempelajari loop pertama.
:::
