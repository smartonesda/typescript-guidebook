---
title: "Array: find"
description: Mencari elemen spesifik pertama yang memenuhi kriteria menggunakan callback find() di TypeScript.
---

# Array: `find`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menggunakan `find()` dengan callback arrow function untuk mencari satu elemen pertama yang memenuhi kondisi tertentu.

---

## Pendahuluan

`indexOf()` hanya bisa mencari nilai yang persis sama. Bagaimana jika kita ingin mencari data yang lebih kompleks? Misalnya: mencari siswa yang nilainya di atas 90, atau siswa yang namanya diawali huruf "D". Kita membutuhkan method `.find()`.

---

## Penjelasan Materi

Method `find()` mencari elemen pertama dalam array yang memenuhi kondisi di dalam **callback function**. Jika ditemukan, ia mengembalikan **elemen pertama** tersebut. Jika tidak ditemukan, ia mengembalikan **`undefined`**.

```ts
const ketemu = array.find((elemen) => kondisi)
```

---

## Analogi Kehidupan Sehari-hari

### Mencari Buku Bertema Tertentu

Kamu menelusuri rak buku untuk mencari satu buku bertema "Sejarah". Kamu memeriksa buku satu per satu dari kiri ke kanan. Begitu kamu memegang satu buku Sejarah pertama, kamu langsung mengambilnya dan berhenti mencari.

```text
Untuk setiap buku:
  Apakah buku bertema Sejarah?
    Jika ya ──► ambil buku itu, selesai mencari!
```

---

## Visual Illustration

```text
const nilai = [65, 80, 92, 70]

// cari nilai pertama yang >= 75
const hasil = nilai.find((n) => n >= 75)

Proses:
65 >= 75 ? false
80 >= 75 ? true  ──► ambil 80 dan SELESAI. (92 diabaikan!)

hasil = 80
```

---

## Mari Mencoba

Buat `src/bab5/find.ts`:

```ts
type Siswa = { nama: string; nilai: number }

const daftarSiswa: Siswa[] = [
  { nama: "Andi", nilai: 70 },
  { nama: "Budi", nilai: 65 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dian", nilai: 88 },
]

// 1. Mencari siswa pertama yang lulus (nilai >= 75)
const siswaLulus = daftarSiswa.find((s) => s.nilai >= 75)
console.log("Siswa lulus pertama:", siswaLulus)

// 2. Mencari nama yang dimulai dengan huruf "D"
const siswaD = daftarSiswa.find((s) => s.nama.startsWith("D"))
console.log("Siswa awalan D     :", siswaD)

// 3. Jika data tidak ditemukan
const siswaSempurna = daftarSiswa.find((s) => s.nilai === 100)
console.log("Siswa nilai 100    :", siswaSempurna) // undefined
```

Jalankan:

```text
tsx src/bab5/find.ts
```

## Output

```text
Siswa lulus pertama: { nama: 'Citra', nilai: 90 }
Siswa awalan D     : { nama: 'Dian', nilai: 88 }
Siswa nilai 100    : undefined
```

---

## Penjelasan Baris per Baris

- `daftarSiswa.find((s) => s.nilai >= 75)` — `s` mewakili satu object siswa. `find()` menguji siswa Andi (false), Budi (false), lalu Citra (true). Pencarian berhenti dan Citra dikembalikan.
- `siswaSempurna` bernilai `undefined` karena tidak ada siswa yang memiliki nilai 100.

---

## Amankan Hasil find yang Undefined

Karena `find()` bisa menghasilkan `undefined`, selalu cek nilainya sebelum memproses propertinya lebih lanjut:

```ts
const siswa = daftarSiswa.find((s) => s.nilai === 100)

// Salah langsung akses:
// console.log(siswa.nama) // Error! siswa is undefined

// Benar:
if (siswa !== undefined) {
  console.log(`Nama: ${siswa.nama}`)
} else {
  console.log("Siswa tidak ditemukan.")
}
```

---

## Latihan

Buat array berisi daftar nama-nama buah. Gunakan `find()` untuk mencari buah pertama yang memiliki nama lebih panjang dari 6 karakter. Tampilkan nama buah tersebut.

---

## Ringkasan

- `find()` mengembalikan elemen pertama yang memenuhi kondisi callback.
- Pencarian langsung berhenti setelah kecocokan pertama ditemukan.
- Mengembalikan `undefined` jika tidak ada elemen yang cocok.
- Gunakan pemeriksaan `!== undefined` sebelum menggunakan hasilnya.

:::tip[Langkah Selanjutnya]
Lanjut ke **filter**.
:::
