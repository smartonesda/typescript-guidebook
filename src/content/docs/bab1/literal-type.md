---
title: "Literal Type"
description: Memahami literal type — tipe yang membatasi variabel hanya pada nilai tertentu.
---

# Literal Type

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Menjelaskan apa itu literal type
- Membuat literal type untuk teks dan angka
- Menggabungkan literal type dengan tanda `|`
- Menggunakan literal type untuk membatasi pilihan data

---

## Pendahuluan

Tipe `string` menerima semua teks. Tipe `number` menerima semua angka. Kadang itu terlalu longgar.

Contoh: status siswa mungkin hanya boleh `"aktif"`, `"cuti"`, atau `"lulus"`. Kita tidak ingin ada yang menulis `"aktif banget"` atau `"mungkin"` karena itu bukan status yang valid.

Di sinilah **literal type** berguna.

---

## Penjelasan Materi

Literal type adalah tipe yang menerima **satu nilai spesifik** atau beberapa nilai spesifik saja.

```ts
let kelas: "X RPL 1" = "X RPL 1"
```

Variabel di atas hanya boleh berisi persis `"X RPL 1"`.

```ts
// kelas = "X RPL 2"
// Error! Type '"X RPL 2"' is not assignable to type '"X RPL 1"'.
```

Literal type sering digabung dengan operator `|` (dibaca "atau") agar menyediakan beberapa pilihan valid.

```ts
type StatusSiswa = "aktif" | "cuti" | "lulus"

let status: StatusSiswa = "aktif"
status = "cuti"      // ✓
status = "lulus"     // ✓
// status = "pindah"
// Error!
```

---

## Analogi: Menu Pilihan Kantin

Bayangkan kantin sekolah punya menu minuman yang tertulis di papan:

```
PILIHAN MINUMAN
- Air putih
- Teh
- Jus jeruk
```

Kamu hanya boleh memilih salah satu dari daftar itu. Kamu tidak bisa memesan "es krim mangga" jika tidak ada di menu.

Literal type seperti menu itu: program memberikan pilihan yang valid, lalu menolak nilai di luar daftar.

---

## Visual Illustration

```
string
┌───────────────────────────────────────┐
│ menerima teks apa saja                 │
│ "aktif", "halo", "random", ...       │
└───────────────────────────────────────┘

"aktif" | "cuti" | "lulus"
┌───────────────────────────────────────┐
│ hanya menerima 3 pilihan ini           │
│ "aktif" ✓  "cuti" ✓  "lulus" ✓      │
│ "random" ✗                            │
└───────────────────────────────────────┘
```

---

## Mari Mencoba

Buat file `src/bab1/literal-type.ts`:

```ts
type StatusSiswa = "aktif" | "cuti" | "lulus"
type Jurusan = "RPL" | "TKJ" | "DKV"
type NilaiHuruf = "A" | "B" | "C" | "D" | "E"

const namaSiswa: string = "Dewi Rahayu"
let status: StatusSiswa = "aktif"
let jurusan: Jurusan = "RPL"
let nilaiMatematika: NilaiHuruf = "A"

console.log("=== DATA AKADEMIK ===")
console.log(`Nama    : ${namaSiswa}`)
console.log(`Status  : ${status}`)
console.log(`Jurusan : ${jurusan}`)
console.log(`Nilai   : ${nilaiMatematika}`)

status = "cuti"
console.log(`Status terbaru: ${status}`)

// Coba buka baris di bawah ini.
// jurusan = "Bahasa"
// Error: nilai tidak termasuk pilihan Jurusan.
```

Jalankan:

```
tsx src/bab1/literal-type.ts
```

Output:

```text
=== DATA AKADEMIK ===
Nama    : Dewi Rahayu
Status  : aktif
Jurusan : RPL
Nilai   : A
Status terbaru: cuti
```

---

## Penjelasan Baris per Baris

```ts
type StatusSiswa = "aktif" | "cuti" | "lulus"
```

- `type` — kata kunci untuk membuat nama tipe baru
- `StatusSiswa` — nama tipe yang kita buat
- `=` — mendefinisikan isi tipe
- `"aktif" | "cuti" | "lulus"` — daftar nilai teks yang diizinkan

```ts
let status: StatusSiswa = "aktif"
```

Variabel `status` hanya boleh diisi salah satu nilai dari tipe `StatusSiswa`.

---

## Literal Type untuk Angka dan Boolean

Literal type tidak hanya untuk string:

```ts
type Semester = 1 | 2 | 3 | 4 | 5 | 6
let semesterSaatIni: Semester = 1

// semesterSaatIni = 7
// Error! 7 tidak ada di pilihan Semester

type Jawaban = true | false
let sudahVerifikasi: Jawaban = true
```

Untuk boolean, `true | false` sama dengan `boolean`. Namun contoh tersebut membantu kamu memahami bahwa nilai literal juga bisa berupa angka dan boolean.

---

## Kapan Literal Type Berguna?

Gunakan literal type ketika pilihan data **terbatas dan jelas**, misalnya:

```ts
type Hari = "Senin" | "Selasa" | "Rabu" | "Kamis" | "Jumat"
type Peran = "siswa" | "guru" | "admin"
type StatusPembayaran = "belum-bayar" | "menunggu" | "lunas"
type UkuranBaju = "S" | "M" | "L" | "XL"
```

Manfaatnya:

- Menghindari salah ketik
- Membuat pilihan data terlihat jelas
- VS Code memberi autocomplete pilihan valid
- Mempermudah validasi data

---

## Kesalahan Umum

### ❌ Mengira literal type sama dengan string biasa

```ts
type Status = "aktif" | "cuti"
let status: Status = "Aktif"
// Error! Huruf A besar berbeda dari "aktif"
```

Literal type bersifat tepat. Huruf besar/kecil harus sama persis.

### ❌ Menulis nilai yang belum masuk daftar

```ts
type Jurusan = "RPL" | "TKJ"
// let jurusan: Jurusan = "DKV"
// Error! Tambahkan DKV ke tipe jika memang valid.
```

**Perbaikan:**

```ts
type Jurusan = "RPL" | "TKJ" | "DKV"
```

---

## Tips

:::tip[Buat Nama Tipe yang Jelas]
Gunakan PascalCase untuk nama tipe: `StatusSiswa`, `Jurusan`, `NilaiHuruf`. Ini membantu pembaca membedakan nama tipe dari nama variabel.
:::

---

## Latihan

Buat file `src/bab1/latihan-literal-type.ts`:

1. Buat tipe `HariSekolah` dengan pilihan `"Senin"` sampai `"Jumat"`
2. Buat tipe `StatusTugas` dengan pilihan `"belum"`, `"dikerjakan"`, `"dikumpulkan"`
3. Buat variabel untuk hari ini dan status tugasmu
4. Tampilkan hasilnya
5. Coba isi status dengan nilai tidak valid, lalu amati error VS Code

---

## Ringkasan

- Literal type membatasi variabel ke nilai yang spesifik
- Gunakan `|` untuk menyusun beberapa pilihan valid
- Bisa digunakan untuk string, number, dan boolean
- Cocok untuk status, jurusan, hari, peran, dan pilihan terbatas lain
- Literal type membantu mencegah salah ketik dan nilai tidak valid

:::tip[Langkah Selanjutnya]
Lanjut ke **Template Literal** untuk membuat teks dinamis dari nilai variabel.
:::
