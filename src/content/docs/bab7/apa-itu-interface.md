---
title: "Apa itu Interface?"
description: Memahami konsep dasar interface sebagai kontrak formal pendefinisian bentuk objek di TypeScript.
---

# Apa itu Interface?

## Tujuan Pembelajaran

After this page, you should be able to explain what an `interface` is, how it enforces structure on objects, and identify the syntax structure of interfaces.

---

## Pendahuluan

JavaScript murni sangat longgar: kamu bisa membuat objek dengan bentuk sesukamu, mengubah tipe properti kapan saja, dan menghapusnya sesuka hati. Kebebasan ini berbahaya untuk aplikasi besar.

TypeScript memperkenalkan `interface` untuk menegakkan aturan disiplin data secara formal.

---

## Penjelasan Materi

**Interface** adalah struktur kontraktual di TypeScript yang mendefinisikan "bentuk" (*shape*) dari sebuah objek. Ia menentukan nama-nama properti dan tipe datanya, tanpa memberikan nilai aslinya.

Objek yang dideklarasikan dengan tipe interface tersebut **wajib** mematuhi seluruh aturan properti yang tertera.

Sintaks dasar:

```ts
interface NamaInterface {
  properti1: tipeData;
  properti2: tipeData;
}
```

Ciri khas `interface`:
1. Menggunakan kata kunci `interface`.
2. Tidak menggunakan tanda sama dengan `=` sebelum kurung kurawal (berbeda dengan `type` alias).
3. Menggunakan titik koma `;` untuk memisahkan properti (meskipun koma `,` atau tanpa pemisah juga valid).

---

## Analogi Kehidupan Sehari-hari

### Formulir Biodata Kosong

Bayangkan selembar kertas **Formulir Biodata**. Formulir itu sendiri kosong, tidak memiliki nama orang di dalamnya. Ia hanya berisi instruksi:

```text
[ ] Nama Lengkap (harus diisi teks)
[ ] NIK          (harus diisi angka)
[ ] Alamat       (harus diisi teks)
```

Ketika kamu mengisi formulir tersebut, kamu telah membuat objek nyata yang mengikuti aturan cetak formulir. Kamu tidak boleh mengosongkan kolom Nama Lengkap jika formulir mengharuskannya.

---

## Visual Illustration

```text
Interface Student
┌─────────────────────────┐
│ nama  : string          │
│ nis   : number          │
│ kelas : string          │
└─────────────────────────┘
             │
             ▼ objek harus mengikuti bentuk ini
const siswaA: Student = {
  nama: "Putra",
  nis: 1001,
  kelas: "XI RPL"
}
```

---

## Mari Mencoba

Buat `src/bab7/apa-itu-interface.ts`:

```ts
// 1. Membuat Deklarasi Interface
interface Siswa {
  nama: string;
  nis: number;
  kelas: string;
}

// 2. Membuat Objek yang Mengikuti Interface Siswa
const siswaA: Siswa = {
  nama: "Putra Ramadhan",
  nis: 35150012,
  kelas: "XI RPL 1"
}

console.log("Objek siswaA:", siswaA)
```

Jalankan:

```text
tsx src/bab7/apa-itu-interface.ts
```

## Output

```text
Objek siswaA: { nama: 'Putra Ramadhan', nis: 35150012, kelas: 'XI RPL 1' }
```

---

## Penjelasan Baris per Baris

- `interface Siswa` — mendefinisikan kontrak interface baru bernama `Siswa`.
- `nama: string;` — properti `nama` wajib diisi string.
- `const siswaA: Siswa = ...` — memberi tahu TypeScript bahwa `siswaA` harus mematuhi interface `Siswa`. Jika ada properti yang kurang atau salah tipe, editor langsung menampilkan garis merah error.

---

## Kesalahan yang Sering Terjadi

### ❌ Menuliskan tanda sama dengan `=` sebelum kurung kurawal interface

```ts
interface Siswa = { // Error!
  nama: string;
}
```

**Perbaikan:** Interface tidak menggunakan tanda sama dengan `=`. Langsung gunakan nama interface diikuti kurung kurawal `{}`:

```ts
interface Siswa { // ✓
  nama: string;
}
```

---

## Tips

:::tip[Gunakan PascalCase]
Selalu gunakan format PascalCase untuk nama interface (misal: `Siswa`, `ProfilGuru`, `KeranjangBelanja`). Ini mempermudah membedakan nama interface dengan nama variabel biasa yang menggunakan camelCase.
:::

---

## Latihan

Buat sebuah interface bernama `Buku` dengan properti: `judul` (string), `penulis` (string), dan `tahunTerbit` (number). Buat satu objek nyata yang mematuhi interface tersebut dan tampilkan.

---

## Ringkasan

- `interface` menentukan cetak biru struktur objek.
- Penulisan: `interface Nama { ... }` (tanpa tanda `=`).
- Menjaga keandalan data dengan melarang properti tidak terdaftar atau salah tipe.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mengapa Interface** untuk memahami peran pentingnya dalam program skala besar.
:::
