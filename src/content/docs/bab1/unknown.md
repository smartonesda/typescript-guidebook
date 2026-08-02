---
title: "Tipe Data: unknown"
description: Memahami unknown — tipe aman untuk data yang belum diketahui sebelum diperiksa.
---

# Tipe Data: `unknown`

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Menjelaskan perbedaan `unknown` dan `any`
- Menyimpan data yang belum diketahui menggunakan `unknown`
- Memeriksa tipe data sebelum menggunakan nilainya
- Memahami type narrowing secara sederhana

---

## Pendahuluan

Kadang kita menerima data dari luar program: input pengguna, file, API, atau data lama. Kita belum tahu data tersebut berupa teks, angka, atau bentuk lain.

Untuk kondisi ini, TypeScript menyediakan `unknown`.

`unknown` artinya: "Saya belum tahu tipe nilainya. Jangan gunakan sebelum diperiksa." Ini lebih aman daripada `any`.

---

## Analogi: Kotak Misteri

Bayangkan kamu menerima kotak tertutup tanpa label dari gudang sekolah.

- `any` berarti kamu langsung mengambil sesuatu dari kotak dan memakainya tanpa melihat isi.
- `unknown` berarti kamu membuka kotak, melihat isi, lalu memastikan barangnya cocok sebelum dipakai.

```
Kotak misteri
┌─────────────────┐
│  isi: ?         │
└─────────────────┘
       │
       ▼ cek dulu
Apakah ini buku? angka? alat?
       │
       ▼
Gunakan dengan aman
```

---

## Penjelasan Materi

`unknown` bisa menerima nilai apa pun, sama seperti `any`:

```ts
let data: unknown = "Putra"
data = 17
data = true
```

Namun perbedaannya muncul saat kamu ingin memakai data itu:

```ts
let data: unknown = "Putra"

// data.toUpperCase()
// Error! Object is of type 'unknown'.
```

TypeScript meminta kamu mengecek dulu apakah `data` benar-benar string.

---

## Type Narrowing: Mempersempit Kemungkinan Tipe

Proses mengecek tipe dari `unknown` sebelum digunakan disebut **type narrowing**. Artinya kita mempersempit kemungkinan tipe dari "bisa apa saja" menjadi tipe yang sudah jelas.

```ts
let data: unknown = "Putra"

if (typeof data === "string") {
  console.log(data.toUpperCase())
}
```

Di dalam blok `if`, TypeScript tahu bahwa `data` adalah `string`. Maka `.toUpperCase()` boleh digunakan.

---

## Mari Mencoba

Buat file `src/bab1/unknown.ts`:

```ts
function tampilkanData(data: unknown): void {
  if (typeof data === "string") {
    console.log(`Data teks: ${data.toUpperCase()}`)
  } else if (typeof data === "number") {
    console.log(`Data angka dikali 2: ${data * 2}`)
  } else if (typeof data === "boolean") {
    console.log(`Data boolean: ${data ? "Benar" : "Salah"}`)
  } else {
    console.log("Tipe data belum didukung")
  }
}

tampilkanData("Putra")
tampilkanData(17)
tampilkanData(true)
tampilkanData(null)
```

Jalankan:

```
tsx src/bab1/unknown.ts
```

Output:

```text
Data teks: PUTRA
Data angka dikali 2: 34
Data boolean: Benar
Tipe data belum didukung
```

---

## Penjelasan Baris per Baris

```ts
function tampilkanData(data: unknown): void {
```

- `function` — membuat blok kode yang bisa dipanggil berulang
- `tampilkanData` — nama fungsi
- `data: unknown` — input bernama `data` boleh menerima nilai apa pun
- `: void` — fungsi ini tidak mengembalikan nilai, hanya menampilkan output

```ts
if (typeof data === "string") {
```

- `typeof data` — meminta TypeScript/JavaScript mengecek tipe data
- `=== "string"` — memastikan tipe yang diterima adalah string
- Jika kondisi benar, `data` aman diperlakukan sebagai string di dalam blok ini

---

## `unknown` vs `any`

| Hal | `any` | `unknown` |
|-----|-------|-----------|
| Menerima nilai apa saja | Ya | Ya |
| Bisa langsung dipakai | Ya | Tidak, harus dicek dulu |
| Perlindungan TypeScript | Tidak ada | Ada |
| Aman untuk data luar | Tidak | Lebih aman |
| Pilihan default untuk data tidak diketahui | Tidak | Ya |

---

## Contoh Data Input Pengguna

```ts
function prosesNilai(input: unknown): void {
  if (typeof input === "number") {
    console.log(`Nilai valid: ${input}`)
  } else {
    console.log("Nilai harus berupa angka")
  }
}

prosesNilai(90)        // Nilai valid: 90
prosesNilai("sembilan puluh") // Nilai harus berupa angka
```

`unknown` membuat program lebih tahan terhadap data yang salah.

---

## Kesalahan Umum

### ❌ Memakai unknown tanpa pemeriksaan

```ts
let nama: unknown = "Putra"
// console.log(nama.length)
// Error! Object is of type 'unknown'.
```

**Perbaikan:**

```ts
if (typeof nama === "string") {
  console.log(nama.length)
}
```

### ❌ Menganggap unknown sama dengan any

Keduanya menerima semua nilai, tetapi `unknown` memaksa kita mengecek terlebih dahulu. Ini fitur keamanan, bukan gangguan.

---

## Tips

:::tip[Urutan Pilihan Tipe]
Saat memilih tipe, gunakan urutan ini:

1. Tipe spesifik seperti `string` atau `number`
2. Union type seperti `string | null` jika ada beberapa kemungkinan jelas
3. `unknown` jika bentuk data benar-benar belum diketahui
4. `any` hanya sebagai pilihan terakhir dan sementara
:::

---

## Latihan

Buat file `src/bab1/latihan-unknown.ts`:

1. Buat fungsi `cekData` dengan satu parameter bertipe `unknown`
2. Jika data adalah string, tampilkan panjang teksnya
3. Jika data adalah number, tampilkan hasil angka ditambah 10
4. Jika data adalah boolean, tampilkan `"Status aktif"` atau `"Status tidak aktif"`
5. Panggil fungsi tersebut dengan minimal tiga tipe data berbeda

---

## Ringkasan

- `unknown` menerima nilai tipe apa pun
- Tidak seperti `any`, `unknown` tidak bisa dipakai sebelum dicek
- Gunakan `typeof` untuk mempersempit tipe data
- Proses ini disebut type narrowing
- `unknown` lebih aman untuk data dari luar program

:::tip[Langkah Selanjutnya]
Lanjut ke **never** untuk mengenal tipe yang berarti sebuah nilai tidak akan pernah ada.
:::
