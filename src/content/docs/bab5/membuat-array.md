---
title: "Membuat Array"
description: Cara mendeklarasikan dan menginisialisasi array di TypeScript menggunakan kurung siku dan generic.
---

# Membuat Array

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat mendeklarasikan array menggunakan gaya kurung siku (`tipe[]`) maupun generic (`Array<tipe>`).

---

## Pendahuluan

Ada beberapa cara untuk membuat array di TypeScript. Memahami cara penulisan yang benar membantu kamu menulis kode yang aman dan sesuai dengan konvensi TypeScript.

---

## Penjelasan Materi

Ada dua gaya penulisan deklarasi array yang valid di TypeScript:

### Gaya 1: Gaya Kurung Siku (Paling Umum)

```ts
const namaSiswa: string[] = ["Andi", "Budi"]
const nilaiSiswa: number[] = [90, 85]
```

### Gaya 2: Gaya Generic (`Array<T>`)

Gaya ini menggunakan keyword `Array` diikuti tipe data di dalam tanda kurung sudut `<>`:

```ts
const namaSiswa: Array<string> = ["Andi", "Budi"]
const nilaiSiswa: Array<number> = [90, 85]
```

Keduanya sama secara fungsi. Kebanyakan programmer TypeScript memilih **Gaya 1** karena lebih singkat dan mudah dibaca.

---

## Inisialisasi Array Kosong

Terkadang kita perlu membuat array kosong terlebih dahulu, lalu mengisinya nanti selama program berjalan. Dalam kasus ini, cantumkan tipenya dengan jelas:

```ts
const daftarNilai: number[] = []
```

:::caution[Jangan Lupa Tipe Array Kosong]
Jika menulis `const data = []` tanpa tipe data, TypeScript akan menganggapnya sebagai `any[]` (boleh diisi apa saja) yang sebaiknya dihindari.
:::

---

## Analogi Kehidupan Sehari-hari

### Membeli Rak Buku Baru

Membuat array kosong seperti membeli rak buku baru yang sekat-sekatnya masih kosong. Rak itu sudah ditentukan tipenya (misal: rak buku sekolah), tetapi bukunya baru dimasukkan kemudian satu per satu.

---

## Visual Illustration

```text
GAYA 1 (Kurung Siku)
const nama: string[] = ["Andi", "Budi"]
            └──────┘
          tipe array

GAYA 2 (Generic)
const nama: Array<string> = ["Andi", "Budi"]
            └───────────┘
             tipe array
```

---

## Mari Mencoba

Buat `src/bab5/membuat-array.ts`:

```ts
// Gaya 1: Kurung Siku
const hobiSiswa: string[] = ["Membaca", "Coding", "Olahraga"]

// Gaya 2: Generic Array
const skorUjian: Array<number> = [88, 92, 75]

// Array Kosong (wajib tulis tipe)
const keranjangBelanja: string[] = []

// Type Inference (tipe ditebak otomatis)
const kotaAsal = ["Sidoarjo", "Surabaya", "Malang"] // bertipe string[]

console.log("Hobi  :", hobiSiswa)
console.log("Skor  :", skorUjian)
console.log("Keranjang:", keranjangBelanja)
console.log("Kota  :", kotaAsal)
```

Jalankan:

```text
tsx src/bab5/membuat-array.ts
```

## Output

```text
Hobi  : [ 'Membaca', 'Coding', 'Olahraga' ]
Skor  : [ 88, 92, 75 ]
Keranjang: []
Kota  : [ 'Sidoarjo', 'Surabaya', 'Malang' ]
```

---

## Penjelasan Baris per Baris

- `hobiSiswa: string[]` — membuat array string menggunakan gaya kurung siku.
- `skorUjian: Array<number>` — membuat array number menggunakan gaya generic.
- `keranjangBelanja: string[] = []` — membuat array kosong yang nantinya hanya boleh diisi string.
- `kotaAsal = [...]` — type inference menebak tipe array dari nilai awal yang diberikan.

---

## Kesalahan yang Sering Terjadi

```ts
const data: string[] = [10, 20, 30] // Error!
// Type 'number' is not assignable to type 'string'.
```

Tipe data isi array harus sama dengan tipe yang dideklarasikan.

---

## Tips

:::tip[Pilih Gaya 1]
Gunakan gaya kurung siku `string[]` sebagai default di semua projectmu. Tulisannya lebih bersih dan dipahami oleh semua programmer TypeScript.
:::

---

## Latihan

Buat sebuah array kosong bertipe `number[]` bernama `daftarHarga`. Isi array tersebut dengan 3 harga barang menggunakan tanda `[]` di deklarasi. Tampilkan hasilnya.

---

## Ringkasan

- Gaya deklarasi array: `tipe[]` atau `Array<tipe>`.
- Gaya `tipe[]` lebih umum digunakan.
- Array kosong harus memiliki tipe eksplisit: `const arr: string[] = []`.
- Tipe data di dalam array harus konsisten.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mengakses Data Array**.
:::
