---
title: "null dan undefined"
description: Memahami perbedaan null dan undefined — dua tipe yang sering membingungkan pemula TypeScript.
---

# `null` dan `undefined`

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Memahami apa itu `null` dan kapan digunakannya
- Memahami apa itu `undefined` dan kapan muncul
- Membedakan `null` dan `undefined` dengan jelas
- Menghindari kesalahan umum terkait keduanya

---

## Pendahuluan

`null` dan `undefined` adalah dua tipe data yang sering membingungkan — bahkan bagi programmer yang sudah berpengalaman. Keduanya sama-sama mewakili "ketiadaan nilai", tapi dengan makna yang berbeda.

Halaman ini akan membuat perbedaan itu menjadi sangat jelas.

---

## `undefined` — Belum Ada Nilainya

`undefined` artinya sebuah variabel sudah **dideklarasikan**, tapi **belum diisi** dengan nilai apapun.

### Analogi: Kotak Kosong yang Belum Dibuka

Bayangkan kamu memesan sebuah kotak dari toko online. Kotaknya sudah tiba — kamu tahu kotaknya ada — tapi kamu belum membukanya. Belum tahu isinya apa.

```
┌─────────────────┐
│  alamatRumah    │
│─────────────────│
│  ???            │  ← belum pernah diisi, tidak tahu isinya
└─────────────────┘
```

Itulah `undefined` — kotak sudah ada, tapi isi belum ditentukan.

### Kapan `undefined` Muncul?

```ts
// 1. Variabel dideklarasikan tapi belum diisi
let nomorTelepon: string
console.log(nomorTelepon)   // undefined

// 2. Property object yang tidak ada
const siswa = { nama: "Putra" }
console.log(siswa.umur)    // undefined — property 'umur' tidak ada

// 3. Parameter fungsi yang tidak diberikan argumen
function sapa(nama: string, sapaan?: string) {
  console.log(sapaan)       // undefined jika tidak dikirim
}
sapa("Putra")   // memanggil tanpa argumen 'sapaan'
```

---

## `null` — Sengaja Dikosongkan

`null` artinya variabel sudah diisi, tapi isinya adalah **"tidak ada"** secara **sengaja dan eksplisit**. Ini adalah nilai yang dengan sadar kamu berikan.

### Analogi: Tempat Parkir yang Sengaja Dikosongkan

Bayangkan sebuah tempat parkir bertanda "RESERVED" tapi tidak ada mobilnya. Bukan karena belum ada yang memarkir — tapi memang sengaja dikosongkan untuk tujuan tertentu.

```
┌─────────────────┐
│  alamatRumah    │
│─────────────────│
│  null           │  ← sengaja dikosongkan, sudah tahu tidak ada
└─────────────────┘
```

Itulah `null` — kita tahu tempatnya ada, dan kita sengaja membuatnya kosong.

### Kapan `null` Digunakan?

```ts
// Data siswa yang belum punya alamat email
let emailSiswa: string | null = null

// Hasil pencarian yang tidak menemukan apapun
let hasilCari: string | null = null

// Nanti bisa diisi jika sudah tersedia
emailSiswa = "putra@smk.sch.id"
```

---

## Perbedaan null dan undefined

| | `undefined` | `null` |
|--|------------|--------|
| **Siapa yang buat?** | TypeScript/JS otomatis | Programmer secara sengaja |
| **Artinya** | Belum pernah diisi | Sengaja dikosongkan |
| **Analogi** | Kotak yang belum dibuka | Tempat parkir reserved tapi kosong |
| **Biasanya dari mana?** | Variabel belum diinisialisasi | Nilai yang sengaja di-set |

---

## Ilustrasi: Perbandingan Langsung

```
Situasi: Data siswa baru

let namaSiswa: string = "Putra"      // ✓ ada nilai
let nilaiUjian: number               // undefined — belum ujian
let alamatEmail: string | null = null // null — belum punya email
```

```
undefined → "Saya tidak tahu ada apa di sini"
null      → "Saya tahu di sini kosong"
```

---

## Mari Mencoba

Buat file `src/bab1/null-dan-undefined.ts`:

```ts
// Contoh undefined
let nomorAbsen: number
console.log("Nomor absen sebelum diisi:", nomorAbsen)   // undefined

nomorAbsen = 15
console.log("Nomor absen setelah diisi:", nomorAbsen)   // 15

// Contoh null
let emailSiswa: string | null = null
console.log("Email sebelum diisi:", emailSiswa)   // null

emailSiswa = "dewi@smk.sch.id"
console.log("Email setelah diisi:", emailSiswa)   // dewi@smk.sch.id

// Perbandingan
console.log("---")
console.log(null == undefined)    // true  (hanya nilai, bukan tipe)
console.log(null === undefined)   // false (tipe berbeda!)
console.log(typeof null)          // "object" — ini keanehan warisan JavaScript
console.log(typeof undefined)     // "undefined"
```

Jalankan:

```
tsx src/bab1/null-dan-undefined.ts
```

:::note[Kenapa typeof null adalah "object"?]
Ini adalah salah satu "quirk" (keanehan) terkenal dari JavaScript yang diwarisi TypeScript. Secara historis, `null` diimplementasikan sebagai tipe object di mesin JavaScript pertama. Sampai sekarang tidak diperbaiki karena akan merusak kode yang sudah ada di seluruh dunia. Cukup tahu bahwa `typeof null === "object"` adalah perilaku yang tidak intuitif tapi memang begitu adanya.
:::

---

## Union Type: string | null

Di TypeScript, secara default variabel tidak boleh bernilai `null` (tergantung konfigurasi). Untuk mengizinkan `null`, kita menggunakan **union type** dengan tanda `|`:

```ts
let email: string | null = null    // boleh string atau null
let nama: string = null            // Error! (jika strictNullChecks aktif)
```

Tanda `|` dibaca "atau" — jadi `string | null` artinya "bisa string atau bisa null".

---

## Cara Mengecek null dan undefined

```ts
let email: string | null = null

// Cara 1: Perbandingan langsung
if (email === null) {
  console.log("Email belum diisi")
} else {
  console.log("Email:", email)
}

// Cara 2: Falsy check (null dan undefined keduanya "falsy")
if (!email) {
  console.log("Email kosong atau null")
}

// Cara 3: Nullish coalescing operator (??)
let emailTampil: string = email ?? "Belum ada email"
console.log(emailTampil)   // "Belum ada email"
```

---

## Kesalahan Umum

### ❌ Menggunakan variabel undefined tanpa cek

```ts
let nilai: number
console.log(nilai * 2)   // Error saat runtime! nilai masih undefined
```

**Cara memperbaiki:**

```ts
let nilai: number = 0    // beri nilai default
// atau
let nilai: number
nilai = 80
console.log(nilai * 2)   // ✓ 160
```

### ❌ Tidak memberi tipe null pada variabel yang membutuhkannya

```ts
let email: string = null    // Error jika strictNullChecks aktif
```

**Cara memperbaiki:**

```ts
let email: string | null = null   // ✓
```

---

## Latihan

Buat file `src/bab1/latihan-null-undefined.ts`:

1. Buat variabel `namaWali: string | null = null` (orang tua belum mengisi data)
2. Buat variabel `nilaiMidterm: number` (ujian belum dilaksanakan)
3. Tampilkan kedua variabel dan perhatikan outputnya
4. Isi `namaWali` dengan nama sebuah nama orang
5. Isi `nilaiMidterm` dengan angka nilai
6. Tampilkan lagi dan bandingkan outputnya

---

## Ringkasan

- `undefined` — variabel ada tapi **belum pernah diisi**, muncul secara otomatis
- `null` — variabel diisi dengan **"tidak ada"** secara sengaja oleh programmer
- `null === undefined` menghasilkan `false` (tipe berbeda)
- Gunakan `string | null` (union type) untuk variabel yang boleh bernilai null
- Gunakan operator `??` (nullish coalescing) sebagai nilai default jika null/undefined

:::tip[Langkah Selanjutnya]
Lanjut ke **bigint** untuk mempelajari tipe angka super besar.
:::
