---
title: "Error Corner BAB 1"
description: Mengenal dan memperbaiki error paling umum saat menggunakan variabel dan tipe data TypeScript.
---

# Error Corner BAB 1

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Membaca error variabel dan tipe data dengan lebih tenang
- Memahami penyebab error yang paling sering dialami pemula
- Memperbaiki error dengan langkah yang tepat
- Menggunakan error TypeScript sebagai alat belajar

---

## Pendahuluan

Saat belajar variabel dan tipe data, kamu akan sering melihat garis merah di VS Code atau pesan error di terminal. Itu normal.

TypeScript sedang melakukan tugasnya: menjaga kode agar tidak menerima data yang salah. Setiap error adalah pesan yang memberi tahu **apa yang salah**, **di mana letaknya**, dan sering kali **apa yang diharapkan**.

---

## Cara Membaca Error TypeScript

Contoh pesan:

```text
src/bab1/nilai.ts:3:7 - error TS2322:
Type 'string' is not assignable to type 'number'.
```

Bacalah bagian-bagiannya:

| Bagian | Arti |
|--------|------|
| `src/bab1/nilai.ts` | File yang bermasalah |
| `:3:7` | Baris ke-3, kolom ke-7 |
| `TS2322` | Kode nomor error TypeScript |
| `Type 'string'...` | Penjelasan inti masalah |

Jangan fokus menghafal kode seperti `TS2322`. Fokus pada kalimat penjelasannya.

---

## Error 1 — Cannot assign to const

### Kode yang menyebabkan error

```ts
const namaSekolah: string = "SMKS Antartika 1"
namaSekolah = "Sekolah Baru"
```

### Pesan error

```text
Cannot assign to 'namaSekolah' because it is a constant.
```

### Mengapa terjadi?

`const` adalah variabel yang nilainya terkunci setelah diisi pertama kali. Kamu mencoba menggantinya dengan nilai baru.

### Analogi

`const` seperti tulisan memakai **spidol permanen**. Setelah ditulis, tidak bisa dihapus lalu diganti sembarangan.

### Cara memperbaiki

Jika nilai memang perlu berubah, gunakan `let`:

```ts
let namaSekolah: string = "SMKS Antartika 1"
namaSekolah = "Sekolah Baru"
```

Jika nilainya seharusnya tetap, jangan buat assignment kedua.

---

## Error 2 — Type 'string' is not assignable to type 'number'

### Kode yang menyebabkan error

```ts
let umur: number = "17"
```

### Pesan error

```text
Type 'string' is not assignable to type 'number'.
```

### Mengapa terjadi?

`"17"` memakai tanda kutip, jadi itu adalah **string** (teks), bukan angka. Variabel `umur` hanya menerima `number`.

### Analogi

Ini seperti mencoba memasukkan air ke kotak khusus beras. Isinya tidak cocok dengan wadahnya.

### Cara memperbaiki

Hapus tanda kutip jika memang datanya angka:

```ts
let umur: number = 17
```

Atau ubah tipe menjadi string jika memang ingin menyimpan teks:

```ts
let umur: string = "17 tahun"
```

---

## Error 3 — Variable is used before being assigned

### Kode yang menyebabkan error

```ts
let nilaiAkhir: number
console.log(nilaiAkhir)
```

### Pesan error

```text
Variable 'nilaiAkhir' is used before being assigned.
```

### Mengapa terjadi?

Kamu membuat kotak variabel, tetapi belum memasukkan isi ke dalamnya. TypeScript tidak ingin kamu memakai data yang belum jelas nilainya.

### Analogi

Ini seperti mencoba mengambil buku dari loker yang belum pernah diisi. Lokernya ada, tetapi buku di dalamnya belum ada.

### Cara memperbaiki

Isi nilai sebelum digunakan:

```ts
let nilaiAkhir: number
nilaiAkhir = 90
console.log(nilaiAkhir)
```

Atau isi langsung saat deklarasi:

```ts
let nilaiAkhir: number = 90
console.log(nilaiAkhir)
```

---

## Error 4 — Cannot redeclare block-scoped variable

### Kode yang menyebabkan error

```ts
let nama: string = "Putra"
let nama: string = "Budi"
```

### Pesan error

```text
Cannot redeclare block-scoped variable 'nama'.
```

### Mengapa terjadi?

Kamu mencoba membuat dua variabel dengan nama sama di area kode yang sama. TypeScript tidak tahu `nama` yang mana yang harus digunakan.

### Analogi

Ini seperti memberi dua loker nomor yang sama. Saat siswa ingin membuka loker nomor 12, tidak ada yang tahu loker mana yang dimaksud.

### Cara memperbaiki

Gunakan nama berbeda atau ubah nilai variabel yang sudah ada:

```ts
let nama: string = "Putra"
nama = "Budi"
```

---

## Error 5 — Cannot find name

### Kode yang menyebabkan error

```ts
const namaSiswa: string = "Dewi"
console.log(namaSiswA)
```

### Pesan error

```text
Cannot find name 'namaSiswA'. Did you mean 'namaSiswa'?
```

### Mengapa terjadi?

TypeScript bersifat **case-sensitive**. Huruf besar dan kecil dibedakan. `namaSiswa` tidak sama dengan `namaSiswA`.

### Cara memperbaiki

Periksa ejaan. Gunakan autocomplete VS Code agar tidak salah ketik:

```ts
console.log(namaSiswa)
```

---

## Error 6 — Type tidak cocok pada literal type

### Kode yang menyebabkan error

```ts
type Jurusan = "RPL" | "TKJ" | "DKV"
const jurusan: Jurusan = "rpl"
```

### Pesan error

```text
Type '"rpl"' is not assignable to type 'Jurusan'.
```

### Mengapa terjadi?

Literal type membutuhkan nilai yang sama **persis**. `"rpl"` huruf kecil berbeda dari `"RPL"` huruf besar.

### Cara memperbaiki

```ts
const jurusan: Jurusan = "RPL"
```

---

## Error 7 — Mencampur number dan bigint

### Kode yang menyebabkan error

```ts
const angkaBesar: bigint = 10n
const angkaBiasa: number = 5
const hasil = angkaBesar + angkaBiasa
```

### Mengapa terjadi?

`bigint` dan `number` adalah dua tipe angka yang berbeda. TypeScript meminta kamu memilih cara konversi dengan sadar agar data besar tidak kehilangan ketelitian.

### Cara memperbaiki

```ts
const hasil: bigint = angkaBesar + BigInt(angkaBiasa)
```

Atau jika semua angkanya kecil, gunakan `number` saja.

---

## Error 8 — Object is of type 'unknown'

### Kode yang menyebabkan error

```ts
const data: unknown = "Putra"
console.log(data.toUpperCase())
```

### Pesan error

```text
Object is of type 'unknown'.
```

### Mengapa terjadi?

TypeScript belum tahu apakah `data` benar-benar string. Bisa saja nilainya angka atau boolean.

### Analogi

Kamu menerima kotak misteri. Jangan langsung memakai isinya sebelum membuka dan memeriksa barang di dalamnya.

### Cara memperbaiki

```ts
const data: unknown = "Putra"

if (typeof data === "string") {
  console.log(data.toUpperCase())
}
```

---

## Error 9 — `${...}` tidak diganti

### Kode yang menyebabkan masalah

```ts
const nama = "Putra"
console.log("Halo, ${nama}!")
```

### Output salah

```text
Halo, ${nama}!
```

### Mengapa terjadi?

Placeholder `${...}` hanya bekerja dengan backtick, bukan kutip biasa.

### Cara memperbaiki

```ts
console.log(`Halo, ${nama}!`)
```

---

## Strategi Debug 5 Langkah

Saat error muncul, ikuti langkah berikut:

1. **Tenang dulu** — error tidak berarti kamu gagal
2. **Baca file dan nomor baris** pada pesan error
3. **Baca kalimat inti error** — tipe apa yang didapat dan tipe apa yang diharapkan?
4. **Periksa nama, tanda kutip, tipe, dan nilai** pada baris tersebut
5. **Ubah satu hal, lalu jalankan ulang**

:::tip[Gunakan VS Code]
Arahkan mouse ke garis merah di VS Code. Editor biasanya menampilkan penjelasan error yang lebih pendek dan mudah dibaca.
:::

---

## Mari Mencoba

Buat file `src/bab1/latihan-error.ts`. Salin kode berikut, lalu perbaiki semua errornya:

```ts
type Status = "aktif" | "cuti"

const nama: string = "Putra"
nama = "Budi"

let umur: number = "17"

let nilai: number
console.log(nilai)

const status: Status = "Aktif"

const data: unknown = "typescript"
console.log(data.toUpperCase())
```

Setelah diperbaiki, program harus dapat menampilkan nama, umur, nilai, status, dan teks `TYPESCRIPT` tanpa error.

---

## Latihan

1. Buat satu contoh error `const` sendiri lalu perbaiki
2. Buat satu contoh error tipe `string` ke `number` lalu perbaiki
3. Buat satu contoh typo nama variabel lalu perbaiki
4. Catat pesan error yang muncul di buku catatanmu
5. Tulis alasan setiap error dengan kata-katamu sendiri

---

## Ringkasan

- Error TypeScript adalah petunjuk, bukan musuh
- Baca file, nomor baris, dan kalimat inti pesan error
- Error umum BAB 1: mengubah `const`, tipe tidak cocok, variabel belum diisi, nama dideklarasikan dua kali, typo, literal type salah, `unknown` belum dicek
- Perbaiki satu masalah pada satu waktu
- VS Code membantu dengan garis merah dan pesan hover

:::tip[Langkah Selanjutnya]
Lanjut ke **Ringkasan BAB 1** untuk menutup bab ini dan mengecek pemahamanmu.
:::
