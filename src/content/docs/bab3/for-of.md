---
title: "Loop: for...of"
description: Mengiterasi setiap elemen array atau string dengan for...of secara ringkas dan ekspresif.
---

# Loop `for...of`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menggunakan `for...of` untuk mengambil setiap nilai dari array atau string satu per satu.

---

## Pendahuluan

`for...of` adalah cara modern dan bersih untuk mengunjungi setiap elemen dalam sebuah koleksi. Kamu tidak perlu mengurus indeks atau batas panjang — TypeScript mengurus semuanya.

---

## Analogi Kehidupan Sehari-hari

### Mengambil Buku dari Rak

Bayangkan rak buku. Kamu ingin membaca judul setiap buku satu per satu dari kiri ke kanan.

```text
Untuk setiap buku di rak:
  Ambil buku
  Baca judulnya
Selesai
```

Kamu tidak perlu tahu posisi nomor berapa setiap buku — kamu cukup mengambilnya satu per satu.

---

## Penjelasan Materi

Bentuk dasar:

```ts
for (const elemen of koleksi) {
  // gunakan elemen
}
```

- `koleksi` bisa berupa array atau string.
- `elemen` mendapat nilai setiap item secara berurutan.
- `const` dipakai karena nilai tidak diubah di dalam loop.

---

## Mari Mencoba

Buat `src/bab3/for-of.ts`:

```ts
const namaSiswa: string[] = ["Andi", "Budi", "Citra", "Dian", "Eko"]

console.log("=== Daftar Siswa ===")
for (const nama of namaSiswa) {
  console.log(`Siswa: ${nama}`)
}

const kalimat: string = "TypeScript"
console.log("\n=== Huruf dalam kata ===")
for (const huruf of kalimat) {
  console.log(huruf)
}
```

Jalankan:

```text
tsx src/bab3/for-of.ts
```

## Output

```text
=== Daftar Siswa ===
Siswa: Andi
Siswa: Budi
Siswa: Citra
Siswa: Dian
Siswa: Eko

=== Huruf dalam kata ===
T
y
p
e
S
c
r
i
p
t
```

---

## Penjelasan Baris per Baris

- `for (const nama of namaSiswa)` — setiap putaran, `nama` mendapat satu elemen dari array.
- Tidak ada inisialisasi `i`, kondisi, atau perubahan manual — semua otomatis.
- Saat dipakai pada string, setiap karakter menjadi satu nilai.

---

## for vs for...of

```ts
const buah: string[] = ["Apel", "Mangga", "Jeruk"]

// for — perlu indeks
for (let i = 0; i < buah.length; i++) {
  console.log(buah[i])
}

// for...of — lebih ringkas, tidak perlu indeks
for (const b of buah) {
  console.log(b)
}
```

Gunakan `for...of` ketika kamu **tidak membutuhkan nomor indeks**. Gunakan `for` biasa ketika **indeks diperlukan**.

---

## Kesalahan yang Sering Terjadi

```ts
for (const nama of namaSiswa) {
  nama = nama.toUpperCase() // Error!
}
```

`const` tidak bisa diubah nilainya. Jika ingin memodifikasi, simpan ke variabel lain:

```ts
for (const nama of namaSiswa) {
  const namaKapital = nama.toUpperCase()
  console.log(namaKapital)
}
```

---

## Tips

:::tip[for...of untuk Nilai, for untuk Indeks]
Pilih `for...of` saat fokus pada isi data. Pilih `for` biasa saat kamu butuh posisi (indeks) setiap elemen.
:::

---

## Latihan

1. Buat array berisi 5 mata pelajaran dan tampilkan setiap mata pelajaran dengan `for...of`.
2. Buat array nilai ujian dan tampilkan tiap nilai yang lebih dari 80.

---

## Ringkasan

- `for...of` mengiterasi setiap nilai dalam array atau string.
- Tidak perlu indeks, kondisi, atau perubahan manual.
- Gunakan `const` untuk nilai karena tidak diubah langsung.
- Lebih ringkas dari `for` biasa saat indeks tidak dibutuhkan.

:::tip[Langkah Selanjutnya]
Lanjut ke **for...in** untuk mengunjungi nama-nama properti dalam sebuah object.
:::
