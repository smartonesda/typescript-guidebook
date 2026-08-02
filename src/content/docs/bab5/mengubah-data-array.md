---
title: "Mengubah Data Array"
description: Cara memperbarui nilai elemen array berdasarkan indeks.
---

# Mengubah Data Array

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat memodifikasi elemen array menggunakan operator penugasan (`=`) dan nomor indeksnya.

---

## Pendahuluan

Data tidak selalu statis. Nilai siswa bisa diremediasi, nama barang bisa diganti, atau status tugas bisa diubah dari belum menjadi selesai. Di halaman ini kita belajar cara memperbarui elemen array.

---

## Cara Mengubah Elemen

Arahkan ke indeks yang diinginkan, lalu gunakan operator penugasan `=`:

```ts
namaArray[indeks] = nilaiBaru
```

---

## Analogi Kehidupan Sehari-hari

### Mengganti Buku di Rak

Kamu menaruh buku novel di sekat 1 rak buku. Suatu hari kamu ingin menggantinya dengan buku komik. Kamu mengambil buku novel dari sekat 1, membuangnya (atau memindahkannya), lalu meletakkan komik di sekat 1.

```text
Sebelum: Sekat 1 → Buku Novel
Tindakan: Sekat 1 = Buku Komik
Sesudah: Sekat 1 → Buku Komik
```

Sekat lainnya (sekat 0 dan 2) tetap tidak berubah.

---

## Visual Illustration

```text
const buah = ["Apel", "Mangga", "Jeruk"]

buah[1] = "Semangka"

Hasil:
Index 0      Index 1        Index 2
+──────────+──────────────+──────────+
|  "Apel"  | "Semangka"   | "Jeruk"  |
+──────────+──────────────+──────────+
```

---

## Mari Mencoba

Buat `src/bab5/mengubah-array.ts`:

```ts
const daftarSiswa: string[] = ["Andi", "Budi", "Citra"]
console.log("Awal   :", daftarSiswa)

// Mengubah elemen indeks 1
daftarSiswa[1] = "Bambang"
console.log("Ubah i=1:", daftarSiswa)

// Mengubah elemen indeks 2
daftarSiswa[2] = "Clara"
console.log("Ubah i=2:", daftarSiswa)

// Properti const array bisa dimodifikasi
const nilaiSiswa: number[] = [80, 85, 90]
nilaiSiswa[0] = 85 // ini valid!
console.log("Nilai  :", nilaiSiswa)
```

Jalankan:

```text
tsx src/bab5/mengubah-array.ts
```

## Output

```text
Awal   : [ 'Andi', 'Budi', 'Citra' ]
Ubah i=1: [ 'Andi', 'Bambang', 'Citra' ]
Ubah i=2: [ 'Andi', 'Bambang', 'Clara' ]
Nilai  : [ 85, 85, 90 ]
```

---

## Penjelasan Baris per Baris

- `daftarSiswa[1] = "Bambang"` — mengganti `"Budi"` (indeks 1) menjadi `"Bambang"`.
- `nilaiSiswa[0] = 85` — meskipun array dideklarasikan dengan `const`, kita **tetap bisa mengubah elemennya**. `const` hanya mencegah variabel diisi dengan array baru, tetapi tidak mengunci elemen di dalamnya.

```ts
const nilai = [80, 90]
nilai[0] = 85    // ✓ Boleh!
// nilai = [70, 60] // ✗ Error! Variabel const tidak bisa diisi array baru
```

---

## Kesalahan yang Sering Terjadi

### ❌ Mengisi tipe data yang salah

```ts
const daftarSiswa: string[] = ["Andi"]
// daftarSiswa[0] = 90 // Error!
// Type 'number' is not assignable to type 'string'.
```

**Perbaikan:** Isi elemen dengan tipe data yang sesuai dengan deklarasi array.

---

## Tips

:::tip[Selalu Gunakan const untuk Array]
Sebagian besar programmer menggunakan `const` saat membuat array. Ini mencegah ketidaksengajaan mengganti seluruh isi array dengan nilai baru, sambil tetap mengizinkan perubahan elemen di dalamnya.
:::

---

## Latihan

Buat array berisi nama 3 hewan. Ubah hewan kedua menjadi hewan lain, lalu tampilkan array tersebut sebelum dan sesudah perubahan.

---

## Ringkasan

- Elemen array diubah menggunakan `namaArray[indeks] = nilaiBaru`.
- Variabel array `const` elemennya tetap bisa diubah.
- Perubahan elemen tidak mengubah tipe data array.

:::tip[Langkah Selanjutnya]
Lanjut ke **Panjang Array**.
:::
