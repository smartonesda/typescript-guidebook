---
title: "Tipe Data: symbol"
description: Mengenal symbol — tipe data untuk membuat penanda yang selalu unik.
---

# Tipe Data: `symbol`

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Menjelaskan arti nilai unik pada `symbol`
- Membuat symbol dengan `Symbol()`
- Memahami contoh penggunaan symbol sebagai identitas internal

---

## Pendahuluan

Ada kalanya program membutuhkan sebuah tanda pengenal yang benar-benar **unik**. Bukan unik karena namanya berbeda, tetapi unik karena TypeScript menjamin tidak ada symbol lain yang sama dengannya.

Tipe data untuk kebutuhan itu adalah `symbol`.

---

## Penjelasan Materi

Setiap kali kamu memanggil `Symbol()`, JavaScript membuat nilai symbol baru. Bahkan jika dua symbol diberi deskripsi teks yang sama, keduanya tetap berbeda.

```ts
const idPertama: symbol = Symbol("id")
const idKedua: symbol = Symbol("id")

console.log(idPertama === idKedua) // false
```

Deskripsi `"id"` hanya membantu manusia saat membaca kode. Deskripsi itu **bukan** nilai symbolnya.

---

## Analogi: Nomor Seri Gelang Acara

Bayangkan dua siswa datang ke sebuah acara. Keduanya boleh memakai gelang dengan tulisan "PESERTA", tetapi masing-masing gelang punya nomor seri yang tidak pernah sama.

```
Gelang 1: PESERTA #A8X2
Gelang 2: PESERTA #Q7M9
```

Tulisan depannya boleh sama. Namun nomor seri memastikan dua gelang itu bukan benda yang sama.

`symbol` bekerja seperti nomor seri tersebut: selalu unik.

---

## Visual Illustration

```
Symbol("id") pertama       Symbol("id") kedua
┌───────────────────┐       ┌───────────────────┐
│ label: "id"      │       │ label: "id"      │
│ identitas: unik A │       │ identitas: unik B │
└───────────────────┘       └───────────────────┘
             │                         │
             └────── tidak sama ───────┘
```

---

## Mari Mencoba

Buat file `src/bab1/symbol.ts`:

```ts
const idSiswaPertama: symbol = Symbol("idSiswa")
const idSiswaKedua: symbol = Symbol("idSiswa")

console.log("Apakah ID sama?", idSiswaPertama === idSiswaKedua)
console.log("ID pertama:", idSiswaPertama.toString())
console.log("ID kedua:", idSiswaKedua.toString())

const dataSiswa = {
  nama: "Putra",
  [idSiswaPertama]: "ID-INTERNAL-001",
}

console.log("Nama:", dataSiswa.nama)
console.log("ID internal:", dataSiswa[idSiswaPertama])
```

Jalankan:

```
tsx src/bab1/symbol.ts
```

Output utama:

```text
Apakah ID sama? false
ID pertama: Symbol(idSiswa)
ID kedua: Symbol(idSiswa)
Nama: Putra
ID internal: ID-INTERNAL-001
```

---

## Penjelasan Baris per Baris

```ts
const idSiswaPertama: symbol = Symbol("idSiswa")
```

- `const` — symbol ini tidak diganti dengan symbol lain
- `idSiswaPertama` — nama variabel
- `: symbol` — tipe nilainya adalah symbol
- `Symbol("idSiswa")` — membuat symbol unik baru

```ts
[idSiswaPertama]: "ID-INTERNAL-001"
```

Tanda kurung siku berarti symbol dipakai sebagai nama properti object. Untuk saat ini, cukup pahami bahwa symbol bisa menjadi "kunci rahasia" yang tidak mudah bentrok dengan nama properti biasa.

---

## Kapan symbol Dipakai?

`symbol` lebih sering dipakai di library, framework, atau object kompleks. Contohnya:

- Membuat nama properti internal yang tidak bentrok
- Memberi identitas unik pada data
- Membuat aturan khusus pada object

Untuk biodata siswa biasa, gunakan `string` atau `number` sebagai ID. `symbol` bukan pengganti nomor absen atau NISN, karena symbol tidak mudah disimpan ke database atau dikirim sebagai JSON.

---

## Kesalahan Umum

### ❌ Menganggap symbol dengan deskripsi sama adalah sama

```ts
const a = Symbol("nilai")
const b = Symbol("nilai")
console.log(a === b) // false
```

**Mengapa?** Setiap pemanggilan `Symbol()` selalu membuat identitas baru.

### ❌ Menggabungkan symbol langsung dengan string

```ts
const id = Symbol("id")
// console.log("ID: " + id)
// Error saat runtime
```

**Perbaikan:** ubah ke teks dengan `.toString()`:

```ts
console.log("ID: " + id.toString())
```

---

## Tips

:::tip[Jangan Dipaksakan]
Jika kamu belum melihat alasan kuat untuk memakai `symbol`, itu wajar. Dalam project siswa pemula, `symbol` jarang diperlukan. Yang penting: pahami bahwa ia digunakan saat program membutuhkan identitas yang pasti unik.
:::

---

## Latihan

Buat file `src/bab1/latihan-symbol.ts`:

1. Buat dua symbol dengan deskripsi `"kode"`
2. Bandingkan keduanya dengan `===`
3. Tampilkan keduanya menggunakan `.toString()`
4. Tuliskan komentar yang menjelaskan mengapa hasil perbandingannya `false`

---

## Ringkasan

- `symbol` adalah tipe data untuk identitas yang unik
- `Symbol("label")` selalu membuat symbol baru
- Dua symbol dengan label sama tetap tidak sama
- Symbol sering digunakan sebagai kunci properti internal
- Dalam project pemula, symbol cukup dipahami dulu — belum harus sering dipakai

:::tip[Langkah Selanjutnya]
Lanjut ke **any** untuk melihat tipe yang sangat longgar dan alasan kita perlu hati-hati menggunakannya.
:::
