---
title: "Loop: for"
description: Memakai for loop untuk mengulang tindakan dengan jumlah yang sudah diketahui.
---

# Loop `for`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat `for` loop dengan tiga komponen lengkap dan menjelaskan cara kerjanya.

---

## Pendahuluan

`for` adalah loop yang paling banyak digunakan karena tiga komponennya (inisialisasi, kondisi, perubahan) ditulis **dalam satu baris**. Ini membuatnya ringkas dan mudah dibaca, terutama saat jumlah pengulangan sudah diketahui.

---

## Analogi Kehidupan Sehari-hari

### Menghitung Absensi

Guru memanggil nomor absen satu per satu dari 1 sampai 36.

```text
Mulai dari nomor 1
Selama belum sampai 36:
  Panggil nomor
  Tambah ke nomor berikutnya
Selesai
```

---

## Penjelasan Materi

Bentuk dasar:

```ts
for (inisialisasi; kondisi; perubahan) {
  // tindakan
}
```

| Bagian | Contoh | Keterangan |
|---|---|---|
| Inisialisasi | `let i = 1` | Nilai awal variabel pengulang |
| Kondisi | `i <= 36` | Loop berjalan selama ini true |
| Perubahan | `i++` | Dijalankan setelah setiap putaran |

---

## Visual Illustration

```text
for ( let i = 1 ; i <= 5 ; i++ )
      ─────────  ───────  ────
      Inisialisasi Kondisi Perubahan

Putaran 1: i=1, cek 1<=5 ✓, aksi, i menjadi 2
Putaran 2: i=2, cek 2<=5 ✓, aksi, i menjadi 3
Putaran 3: i=3, cek 3<=5 ✓, aksi, i menjadi 4
Putaran 4: i=4, cek 4<=5 ✓, aksi, i menjadi 5
Putaran 5: i=5, cek 5<=5 ✓, aksi, i menjadi 6
Putaran 6: i=6, cek 6<=5 ✗ → SELESAI
```

---

## Mari Mencoba

Buat `src/bab3/for.ts`:

```ts
console.log("=== Daftar Nomor Absen ===")
for (let nomor = 1; nomor <= 10; nomor++) {
  console.log(`Nomor absen: ${nomor}`)
}

console.log("\n=== Tabel Perkalian 3 ===")
for (let angka = 1; angka <= 10; angka++) {
  console.log(`3 × ${angka} = ${3 * angka}`)
}

console.log("\n=== Hitung Mundur ===")
for (let hitung = 10; hitung >= 1; hitung--) {
  console.log(hitung)
}
console.log("Mulai!")
```

Jalankan:

```text
tsx src/bab3/for.ts
```

---

## Output (sebagian)

```text
=== Daftar Nomor Absen ===
Nomor absen: 1
...
Nomor absen: 10

=== Tabel Perkalian 3 ===
3 × 1 = 3
...
3 × 10 = 30

=== Hitung Mundur ===
10
...
1
Mulai!
```

---

## Penjelasan Baris per Baris

- `let nomor = 1` — mulai dari 1.
- `nomor <= 10` — terus sampai 10 (inklusif karena `<=`).
- `nomor++` — naik 1 setiap putaran.
- Loop hitung mundur: `hitung = 10`, kondisi `>= 1`, perubahan `hitung--`.
- `\n` dalam string adalah karakter baris baru.

---

## Variasi `for`

```ts
// Loncat dua-dua (angka genap)
for (let i = 2; i <= 10; i += 2) {
  console.log(i) // 2, 4, 6, 8, 10
}

// Hanya putaran tertentu yang dieksekusi
for (let i = 0; i < 100; i += 10) {
  console.log(`Progres: ${i}%`)
}
```

---

## Kesalahan yang Sering Terjadi

```ts
for (let i = 1; i < 10; i++) {
  console.log(i) // hanya sampai 9, bukan 10!
}
```

Menggunakan `<` bukannya `<=` menyebabkan nilai terakhir tidak diproses. Perhatikan selisih satu ini saat menentukan kondisi.

---

## Tips

:::tip[i Hanya Hidup di Dalam Loop]
Variabel `i` yang dideklarasikan di dalam `for` hanya bisa diakses di dalam blok loop itu. Di luar blok, variabel itu tidak ada.
:::

---

## Latihan

1. Cetak angka 1 sampai 100.
2. Cetak angka ganjil dari 1 sampai 19.
3. Buat tabel perkalian 7 dari 1 × 7 sampai 10 × 7.

---

## Ringkasan

- `for` menggabungkan inisialisasi, kondisi, dan perubahan dalam satu baris.
- Cocok saat jumlah pengulangan sudah diketahui.
- Variasi perubahan (`+=2`, `--`) sangat berguna untuk pola tertentu.
- Gunakan `<=` jika batas terakhir harus dimasukkan.

:::tip[Langkah Selanjutnya]
Lanjut ke **for...of** untuk mengiterasi data koleksi secara elegan.
:::
