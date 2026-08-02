---
title: "Tipe Data"
description: Pengenalan konsep tipe data di TypeScript — apa itu tipe data, mengapa penting, dan gambaran semua tipe data primitif.
---

# Tipe Data

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Menjelaskan apa itu tipe data
- Menyebutkan semua tipe data primitif di TypeScript
- Memahami mengapa tipe data penting dalam TypeScript

---

## Pendahuluan

Kita sudah belajar bahwa variabel adalah tempat menyimpan data. Sekarang muncul pertanyaan penting: **data apa saja yang bisa disimpan?**

Jawabannya: berbagai macam jenis data. Nama seseorang berbeda jenisnya dari nilai ujian. Nilai ujian berbeda jenisnya dari status lulus/tidak lulus. Perbedaan "jenis" inilah yang disebut **tipe data**.

---

## Penjelasan Materi

**Tipe data** adalah klasifikasi atau kategori yang mendefinisikan jenis nilai yang bisa disimpan dan dioperasikan dalam sebuah variabel.

Di dunia nyata, kita pun secara natural membedakan jenis data:

- "Putra" adalah sebuah **nama** (teks)
- 17 adalah sebuah **umur** (angka)
- "Sudah lulus" adalah sebuah **status** (ya/tidak)

TypeScript memformalkan perbedaan ini menjadi sistem yang ketat dan terstruktur.

---

## Analogi: Jenis Wadah untuk Jenis Isi yang Berbeda

Bayangkan sebuah gudang penyimpanan makanan. Tidak semua bahan makanan disimpan dengan cara yang sama:

- Beras disimpan dalam **karung**
- Air disimpan dalam **jerigen**
- Minyak disimpan dalam **botol kaca**
- Buah disimpan dalam **keranjang**

Kamu tidak akan menyimpan air di dalam karung, atau beras di dalam jerigen — karena wadah dan isinya harus cocok.

Begitu pula TypeScript: setiap variabel punya "wadah" yang sesuai dengan jenis data yang akan disimpan.

---

## Dua Kategori Tipe Data di TypeScript

TypeScript membagi tipe data menjadi dua kategori besar:

```
TIPE DATA TYPESCRIPT
├── PRIMITIF (nilai sederhana, tersimpan langsung)
│   ├── number      → angka: 17, 3.14, -5
│   ├── string      → teks: "Putra", 'Halo'
│   ├── boolean     → benar/salah: true, false
│   ├── null        → kosong secara sengaja
│   ├── undefined   → belum diisi / tidak ada
│   ├── bigint      → angka sangat besar
│   └── symbol      → pengenal unik
│
└── NON-PRIMITIF (nilai kompleks, tersimpan sebagai referensi)
    ├── object      → kumpulan data
    ├── array       → daftar data
    └── function    → blok kode yang bisa dipanggil
```

Di BAB 1 ini, kita fokus pada **tipe data primitif** ditambah beberapa tipe khusus TypeScript (`any`, `unknown`, `never`). Tipe non-primitif akan dipelajari di BAB selanjutnya.

---

## Tipe Khusus TypeScript

Selain tipe-tipe di atas, TypeScript menambahkan beberapa tipe khusus yang tidak ada di JavaScript murni:

| Tipe | Kegunaan |
|------|----------|
| `any` | Menonaktifkan pemeriksaan tipe — hindari sebisa mungkin |
| `unknown` | Tipe yang aman untuk nilai yang belum diketahui |
| `never` | Nilai yang tidak pernah ada — untuk error atau loop tak terbatas |

---

## Ilustrasi: Gambaran Semua Tipe Primitif

```
number   → [ 42 ] [ 3.14 ] [ -100 ] [ 0 ]
string   → [ "Halo" ] [ 'Dunia' ] [ `TypeScript` ]
boolean  → [ true ] [ false ]
null     → [ null ]
undefined→ [ undefined ]
bigint   → [ 9007199254740992n ]
symbol   → [ Symbol("id") ]
```

---

## Mari Mencoba

Buat file `src/bab1/tipe-data.ts` untuk melihat semua tipe dasar dalam aksi:

```ts
// number — angka
let umur: number = 17
let nilaiUjian: number = 88.5
let suhuRuangan: number = -5

// string — teks
let nama: string = "Putra Ramadhan"
let kelas: string = 'X RPL 1'
let pesan: string = `Halo, nama saya ${nama}`

// boolean — benar atau salah
let sudahLulus: boolean = true
let sedangSakit: boolean = false

// null — kosong secara sengaja
let alamatSementara: null = null

// undefined — belum diisi
let nomortelepon: undefined = undefined

// Tampilkan semua
console.log("=== SEMUA TIPE DATA PRIMITIF ===")
console.log("number   :", umur, nilaiUjian, suhuRuangan)
console.log("string   :", nama, kelas)
console.log("boolean  :", sudahLulus, sedangSakit)
console.log("null     :", alamatSementara)
console.log("undefined:", nomortelepon)
```

Jalankan:

```
tsx src/bab1/tipe-data.ts
```

---

## Mengapa Tipe Data Penting di TypeScript?

Di JavaScript, kamu bisa menyimpan apa saja ke variabel mana saja tanpa konsekuensi langsung:

```js
// JavaScript — tidak ada komplain
let nilai = 90
nilai = "sembilan puluh"   // nilai berubah dari angka ke teks
nilai = true               // berubah lagi ke boolean
```

Di TypeScript, begitu variabel punya tipe, tipe itu tidak bisa berubah:

```ts
// TypeScript — dijaga ketat
let nilai: number = 90
nilai = "sembilan puluh"   // Error! Type 'string' is not assignable to type 'number'
nilai = true               // Error! Type 'boolean' is not assignable to type 'number'
```

Ini justru bagus! TypeScript menjaga agar datamu tetap konsisten dan tidak korup secara tidak sengaja.

---

## Latihan

Buat file `src/bab1/latihan-tipe-data.ts`:

1. Buat satu variabel `string` untuk nama temanmu
2. Buat satu variabel `number` untuk jumlah saudara temanmu
3. Buat satu variabel `boolean` untuk status kehadiran temanmu hari ini
4. Buat satu variabel `string | null` untuk email temanmu
5. Tampilkan nilai dan tipe setiap data menggunakan `typeof`

---

## Ringkasan

- **Tipe data** adalah jenis/kategori nilai yang bisa disimpan dalam variabel
- TypeScript memiliki dua kategori: **primitif** dan **non-primitif**
- Tipe primitif: `number`, `string`, `boolean`, `null`, `undefined`, `bigint`, `symbol`
- Tipe khusus TypeScript: `any`, `unknown`, `never`
- Tipe data memastikan variabel hanya bisa diisi dengan nilai yang sesuai jenisnya

:::tip[Langkah Selanjutnya]
Mari mulai dengan tipe pertama dan paling umum digunakan: **number**.
:::

