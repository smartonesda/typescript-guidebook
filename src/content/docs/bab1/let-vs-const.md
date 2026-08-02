---
title: "let vs const"
description: Memahami perbedaan antara let dan const — kapan menggunakan masing-masing dan mengapa const lebih disukai.
---

# let vs const

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Membedakan `let` dan `const` secara teknis
- Memilih kata kunci yang tepat untuk setiap situasi
- Memahami mengapa `const` lebih sering dianjurkan

---

## Pendahuluan

Di halaman-halaman sebelumnya, kita selalu menggunakan `let` untuk membuat variabel. Tapi TypeScript (dan JavaScript modern) punya dua kata kunci utama untuk membuat variabel: **`let`** dan **`const`**.

Keduanya digunakan untuk menyimpan data, tapi dengan satu perbedaan fundamental yang sangat penting.

---

## Penjelasan Materi

### `let` — Nilai Bisa Berubah

Variabel yang dideklarasikan dengan `let` bisa **diubah nilainya** kapan saja setelah deklarasi.

```ts
let nilaiUjian: number = 75
console.log(nilaiUjian)   // 75

nilaiUjian = 80           // mengubah nilai
console.log(nilaiUjian)   // 80

nilaiUjian = 95           // mengubah lagi
console.log(nilaiUjian)   // 95
```

`let` cocok digunakan untuk data yang **memang perlu berubah** — seperti nilai ujian yang bisa diremediasi, atau skor game yang terus bertambah.

---

### `const` — Nilai Tidak Bisa Berubah

Variabel yang dideklarasikan dengan `const` (singkatan dari *constant* / konstanta) **tidak bisa diubah nilainya** setelah diinisialisasi.

```ts
const namaSekolah: string = "SMKS Antartika 1 Sidoarjo"
console.log(namaSekolah)   // SMKS Antartika 1 Sidoarjo

namaSekolah = "Sekolah Lain"   // Error!
// Cannot assign to 'namaSekolah' because it is a constant.
```

`const` cocok untuk data yang **tidak boleh berubah** — seperti nama sekolah, tanggal lahir, atau nilai PI matematika.

---

## Analogi Kehidupan Sehari-hari

### ✏️ let = Spidol Whiteboard

Spidol whiteboard digunakan untuk menulis di papan tulis. Kamu bisa menulis, menghapus, dan menulis lagi kapan saja. Tulisannya bersifat **sementara dan bisa diubah**.

```
[Papan Tulis]
Nilai kamu: 75   ← bisa dihapus dan diganti 80
```

### 🖊️ const = Spidol Permanen

Spidol permanen digunakan untuk menulis sesuatu yang **tidak boleh berubah**. Begitu ditulis, tidak bisa dihapus.

```
[Plakat Sekolah]
Nama: SMKS Antartika 1 Sidoarjo   ← tidak bisa diganti-ganti
```

---

## Ilustrasi: Perbandingan let dan const

```
let skor = 0
┌─────────────────┐
│  skor           │   dapat diubah ✓
│  0 → 10 → 50   │
└─────────────────┘

const PI = 3.14
┌─────────────────┐
│  PI             │   tidak dapat diubah 🔒
│  3.14           │
└─────────────────┘
```

---

## Mari Mencoba

Buat file `src/bab1/let-vs-const.ts`:

```ts
// Contoh penggunaan let — nilai bisa berubah
let skorGame: number = 0
console.log("Skor awal:", skorGame)

skorGame = skorGame + 100
console.log("Skor setelah level 1:", skorGame)

skorGame = skorGame + 250
console.log("Skor setelah level 2:", skorGame)

// Contoh penggunaan const — nilai tetap
const MAX_NILAI: number = 100
const NAMA_APLIKASI: string = "Sistem Nilai SMK"
const VERSI: string = "1.0.0"

console.log("---")
console.log("Aplikasi:", NAMA_APLIKASI)
console.log("Versi:", VERSI)
console.log("Nilai maksimum:", MAX_NILAI)
```

Jalankan:

```
tsx src/bab1/let-vs-const.ts
```

Output:

```
Skor awal: 0
Skor setelah level 1: 100
Skor setelah level 2: 350
---
Aplikasi: Sistem Nilai SMK
Versi: 1.0.0
Nilai maksimum: 100
```

---

## Kapan Menggunakan `let` dan `const`?

| Situasi | Gunakan |
|---------|---------|
| Nilai perlu diupdate (counter, skor, status) | `let` |
| Nilai tetap sepanjang program (konstanta, nama) | `const` |
| Kamu tidak yakin | `const` dulu, ganti ke `let` jika perlu |

:::tip[Aturan Praktis]
Sebagai aturan praktis yang digunakan banyak programmer profesional:

**Selalu mulai dengan `const`. Ganti ke `let` hanya jika nilai memang perlu berubah.**

Ini membuat kode lebih aman karena secara eksplisit menandai data mana yang "tetap" dan mana yang "bisa berubah".
:::

---

## Konvensi Penamaan untuk `const`

Untuk konstanta yang benar-benar "tetap" dan bersifat global (nilai konfigurasi, nilai matematika, dll), banyak programmer menggunakan **UPPER_SNAKE_CASE** — semua huruf kapital, kata dipisahkan underscore:

```ts
const MAX_SISWA_PER_KELAS: number = 36
const NAMA_SEKOLAH: string = "SMKS Antartika 1"
const PI: number = 3.14159
```

Tapi ini bukan aturan wajib — hanya konvensi. Untuk variabel const biasa di dalam fungsi atau blok kode, camelCase juga umum digunakan.

---

## Kesalahan Umum

### ❌ Mengubah nilai const

```ts
const namaGuru = "Bu Ani"
namaGuru = "Pak Budi"   // Error!
// Cannot assign to 'namaGuru' because it is a constant.
```

**Cara memperbaiki:** Jika nilainya memang perlu berubah, gunakan `let`:

```ts
let namaGuru = "Bu Ani"
namaGuru = "Pak Budi"   // ✓
```

### ❌ `const` tanpa nilai awal

```ts
const nilaiAkhir: number   // Error!
// 'const' declarations must be initialized.
```

`const` **wajib** langsung diisi nilainya saat deklarasi — karena nanti tidak bisa diisi ulang.

**Cara memperbaiki:**

```ts
const nilaiAkhir: number = 90   // ✓
```

---

## Latihan

Buat file `src/bab1/latihan-let-const.ts`:

1. Buat variabel `const` untuk menyimpan namamu — karena nama tidak berubah
2. Buat variabel `const` untuk menyimpan tahun lahirmu
3. Buat variabel `let` untuk menyimpan kelasmu saat ini (karena kelas bisa naik)
4. Ubah nilai variabel kelas menjadi kelas berikutnya (misal dari "X RPL 1" ke "XI RPL 1")
5. Tampilkan semua variabel sebelum dan sesudah perubahan

---

## Ringkasan

- `let` — nilai bisa diubah kapan saja setelah deklarasi
- `const` — nilai tidak bisa diubah setelah inisialisasi
- `const` **wajib** diisi nilai saat deklarasi
- Gunakan `const` sebagai default, `let` hanya jika nilainya memang perlu berubah
- Konstanta global sering menggunakan UPPER_SNAKE_CASE sebagai konvensi

:::tip[Langkah Selanjutnya]
Lanjut ke **Aturan Penamaan Variabel** untuk belajar konvensi penamaan yang benar di TypeScript.
:::
