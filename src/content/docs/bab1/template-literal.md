---
title: "Template Literal"
description: Membuat kalimat dinamis dengan template literal — backtick dan placeholder ${...} di TypeScript.
---

# Template Literal

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Menjelaskan apa itu template literal
- Menulis string menggunakan backtick
- Menyisipkan variabel dan perhitungan dengan `${...}`
- Membuat output multi-baris yang rapi

---

## Pendahuluan

Saat membuat program, kita sangat sering ingin menampilkan teks yang berisi data dari variabel.

Contoh:

```text
Halo, Putra! Nilaimu adalah 90.
```

Nama dan nilai bisa berubah untuk setiap siswa. Kalau kita harus menyusun kalimat dengan banyak tanda `+`, kode cepat menjadi panjang dan susah dibaca. **Template literal** membuat pekerjaan ini lebih rapi.

---

## Penjelasan Materi

Template literal adalah string yang ditulis menggunakan **backtick** (`` ` ``), bukan kutip ganda atau kutip tunggal.

Di dalam template literal, kamu bisa menyisipkan nilai dengan bentuk `${ekspresi}`.

```ts
const nama: string = "Putra"
const nilai: number = 90

const pesan: string = `Halo, ${nama}! Nilaimu adalah ${nilai}.`
console.log(pesan)
```

Output:

```text
Halo, Putra! Nilaimu adalah 90.
```

---

## Analogi: Kalimat dengan Kolom Kosong

Bayangkan guru membagikan format sertifikat:

```text
Sertifikat ini diberikan kepada: [NAMA]
Dengan nilai: [NILAI]
```

`[NAMA]` dan `[NILAI]` adalah ruang kosong yang bisa diisi untuk setiap siswa. Template literal bekerja dengan cara yang sama:

```ts
`Sertifikat ini diberikan kepada: ${nama}`
```

`${nama}` adalah kolom kosong yang otomatis diisi nilai variabel `nama`.

---

## Visual Illustration

```
`Halo, ${nama}! Nilai: ${nilai}`
 │       │              │
 │       │              └─ isi nilai variabel nilai
 │       └─ isi nilai variabel nama
 └─ backtick membuka dan menutup template literal
```

---

## Mari Mencoba

Buat file `src/bab1/template-literal.ts`:

```ts
const namaSiswa: string = "Dewi Rahayu"
const kelas: string = "XI RPL 2"
const nilaiMatematika: number = 92
const nilaiIndonesia: number = 88
const rataRata: number = (nilaiMatematika + nilaiIndonesia) / 2

console.log(`Halo, ${namaSiswa}!`)
console.log(`Kamu berasal dari kelas ${kelas}.`)
console.log(`Nilai Matematika: ${nilaiMatematika}`)
console.log(`Nilai Bahasa Indonesia: ${nilaiIndonesia}`)
console.log(`Rata-rata nilaimu: ${rataRata}`)
console.log(`Nilai dibulatkan: ${Math.round(rataRata)}`)

const kartuNilai: string = `
=== KARTU NILAI ===
Nama       : ${namaSiswa}
Kelas      : ${kelas}
Matematika : ${nilaiMatematika}
Indonesia  : ${nilaiIndonesia}
Rata-rata  : ${rataRata}
===================
`

console.log(kartuNilai)
```

Jalankan:

```
tsx src/bab1/template-literal.ts
```

Output utama:

```text
Halo, Dewi Rahayu!
Kamu berasal dari kelas XI RPL 2.
Nilai Matematika: 92
Nilai Bahasa Indonesia: 88
Rata-rata nilaimu: 90
Nilai dibulatkan: 90
```

---

## Penjelasan Baris per Baris

```ts
const rataRata: number = (nilaiMatematika + nilaiIndonesia) / 2
```

TypeScript menghitung penjumlahan dua nilai dahulu, lalu membaginya dengan `2`.

```ts
console.log(`Halo, ${namaSiswa}!`)
```

- Backtick membuka template literal
- `${namaSiswa}` mengambil nilai dari variabel
- Nilai variabel dimasukkan ke dalam kalimat saat program berjalan

```ts
console.log(`Nilai dibulatkan: ${Math.round(rataRata)}`)
```

Di dalam `${...}`, kamu tidak hanya bisa memasukkan variabel. Kamu juga bisa memasukkan perhitungan atau pemanggilan fungsi.

---

## Template Literal vs Penggabungan dengan `+`

Kedua cara ini sama-sama bisa dipakai:

```ts
const nama = "Putra"
const kelas = "X RPL 1"

const caraLama = "Nama: " + nama + ", Kelas: " + kelas
const caraRapi = `Nama: ${nama}, Kelas: ${kelas}`
```

Namun template literal lebih mudah dibaca, terutama saat banyak variabel.

| Penggabungan `+` | Template literal |
|------------------|------------------|
| Banyak tanda kutip dan `+` | Kalimat terlihat utuh |
| Mudah salah spasi | Spasi ditulis normal |
| Sulit dibaca jika panjang | Lebih rapi |

:::tip[Rekomendasi]
Untuk teks yang berisi variabel, biasakan gunakan template literal. Gunakan `+` hanya jika ada alasan khusus.
:::

---

## Multi-baris dengan Backtick

Backtick juga memungkinkan string ditulis dalam beberapa baris tanpa `\n`:

```ts
const pesan: string = `
Selamat datang di TypeScript Guidebook.
Belajar pelan-pelan dan jangan takut error.
Semangat!
`

console.log(pesan)
```

Ini sangat berguna untuk mencetak laporan, struk, biodata, atau menu sederhana di terminal.

---

## Kesalahan Umum

### ❌ Menggunakan kutip biasa untuk `${...}`

```ts
const nama = "Putra"
console.log("Halo, ${nama}!")
// Output: Halo, ${nama}!  (tidak diganti)
```

**Mengapa?** Placeholder `${...}` hanya bekerja di dalam backtick.

**Perbaikan:**

```ts
console.log(`Halo, ${nama}!`)
```

### ❌ Lupa kurung kurawal

```ts
console.log(`Halo, $nama!`)
// Output: Halo, $nama!
```

**Perbaikan:**

```ts
console.log(`Halo, ${nama}!`)
```

### ❌ Menggunakan backtick saat tidak diperlukan

Tidak salah, tetapi kutip biasa lebih sederhana untuk teks statis:

```ts
const judul = "Aplikasi Biodata Siswa" // cukup kutip biasa
```

---

## Tips

:::tip[Template Literal = Kalimat Dinamis]
Jika sebuah kalimat memiliki bagian yang akan berubah berdasarkan data, gunakan template literal. Jika teksnya selalu sama, gunakan string biasa.
:::

---

## Latihan

Buat file `src/bab1/latihan-template-literal.ts`:

1. Buat variabel nama, kelas, jurusan, dan nilai
2. Buat satu template literal berisi biodata singkat
3. Buat satu template literal yang menampilkan nilai setelah ditambah bonus 5
4. Buat output multi-baris dengan garis pembatas
5. Jalankan menggunakan TSX

---

## Ringkasan

- Template literal ditulis dengan backtick: `` `...` ``
- `${...}` menyisipkan variabel, perhitungan, atau ekspresi ke string
- Template literal lebih rapi daripada banyak penggabungan `+`
- Backtick dapat membuat string multi-baris
- `${...}` tidak bekerja di kutip ganda atau kutip tunggal

:::tip[Langkah Selanjutnya]
Kamu sudah mengenal semua konsep utama BAB 1. Lanjut ke **Studi Kasus** untuk menggabungkannya dalam biodata siswa.
:::
