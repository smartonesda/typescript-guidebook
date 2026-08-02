---
title: "Array: filter"
description: Memilih semua elemen yang memenuhi kriteria tertentu menggunakan method filter().
---

# Array: `filter`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menggunakan `filter()` untuk menyaring elemen array dan menghasilkan array baru berisi semua elemen yang lolos seleksi.

---

## Pendahuluan

`find()` hanya memberikan **satu** elemen pertama yang cocok. Bagaimana jika kita ingin mengambil **semua** siswa yang lulus? Atau semua produk yang harganya di bawah 50 ribu? Kita membutuhkan method `.filter()`.

---

## Penjelasan Materi

Method `filter()` menguji setiap elemen dalam array menggunakan callback function. Semua elemen yang menghasilkan kondisi `true` akan dikumpulkan ke dalam **array baru**.

```ts
const hasilFilter = array.filter((elemen) => kondisi)
```

`filter()` bersifat **immutable** — array asli tidak akan berubah.

---

## Analogi Kehidupan Sehari-hari

### Saringan Pasir

Bayangkan kamu memiliki sekop berisi campuran pasir halus dan batu kerikil. Kamu menuangkan isinya di atas saringan:

- Pasir halus lolos melewati saringan.
- Batu kerikil tertahan di atas saringan.

```text
Campuran Data ──► [ Saringan (Filter) ] ──► Hanya yang lolos seleksi
```

Kamu memisahkan kelompok batu ke wadah baru. Kelompok pasir tetap utuh di tempatnya.

---

## Visual Illustration

```text
const nilai = [65, 80, 92, 70]

// saring semua nilai yang >= 75
const hasil = nilai.filter((n) => n >= 75)

Proses:
65 >= 75 ? false (abaikan)
80 >= 75 ? true  (masukkan ke hasil)
92 >= 75 ? true  (masukkan ke hasil)
70 >= 75 ? false (abaikan)

Hasil: [80, 92]  (Array Baru ✓)
```

---

## Mari Mencoba

Buat `src/bab5/filter.ts`:

```ts
type Siswa = { nama: string; nilai: number }

const daftarSiswa: Siswa[] = [
  { nama: "Andi", nilai: 70 },
  { nama: "Budi", nilai: 85 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dian", nilai: 60 },
]

// 1. Saring semua siswa yang lulus (nilai >= 75)
const siswaLulus = daftarSiswa.filter((s) => s.nilai >= 75)
console.log("Siswa lulus:", siswaLulus)

// 2. Saring siswa yang perlu remedial (nilai < 75)
const siswaRemedial = daftarSiswa.filter((s) => s.nilai < 75)
console.log("Siswa remedial:", siswaRemedial)

// 3. Jika tidak ada yang cocok
const nilaiSempurna = daftarSiswa.filter((s) => s.nilai === 100)
console.log("Siswa nilai 100:", nilaiSempurna) // [] (array kosong)
```

Jalankan:

```text
tsx src/bab5/filter.ts
```

## Output

```text
Siswa lulus: [ { nama: 'Budi', nilai: 85 }, { nama: 'Citra', nilai: 90 } ]
Siswa remedial: [ { nama: 'Andi', nilai: 70 }, { nama: 'Dian', nilai: 60 } ]
Siswa nilai 100: []
```

---

## Penjelasan Baris per Baris

- `daftarSiswa.filter((s) => s.nilai >= 75)` — menguji semua siswa dan mengembalikan array baru berisi Budi dan Citra.
- Berbeda dengan `find()`, `filter()` memproses **seluruh** elemen dari awal sampai akhir.
- Jika tidak ada elemen yang cocok, `filter()` mengembalikan **array kosong `[]`** (bukan `undefined`).

---

## find() vs filter()

| Hal | `find()` | `filter()` |
|---|---|---|
| Jumlah hasil | Maksimal 1 elemen | Array berisi banyak elemen |
| Alur proses | Berhenti setelah ketemu pertama | Memeriksa seluruh elemen |
| Jika tidak ketemu | `undefined` | Array kosong `[]` |

---

## Latihan

Buat array berisi 8 nilai angka. Saring nilai-nilai tersebut agar menghasilkan array baru yang hanya berisi **angka genap**. Tampilkan hasilnya.

---

## Ringkasan

- `filter()` menyaring elemen berdasarkan kondisi callback.
- Menghasilkan array baru (tidak mengubah array asli).
- Jika tidak ada kecocokan, hasilnya berupa array kosong `[]`.

:::tip[Langkah Selanjutnya]
Lanjut ke **map**.
:::
