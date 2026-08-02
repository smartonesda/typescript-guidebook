---
title: "Object Destructuring"
description: Membongkar properti object menjadi variabel mandiri dengan sintaks destructuring yang ringkas.
---

# Object Destructuring

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menggunakan object destructuring untuk mengambil properti-properti objek ke dalam variabel mandiri, serta memberikan nama baru (aliasing) jika diperlukan.

---

## Pendahuluan

Saat kita ingin menggunakan beberapa properti dari satu object, kita sering menuliskan nama objeknya berulang-ulang: `siswa.nama`, `siswa.umur`, `siswa.kelas`. TypeScript (dan JavaScript modern) menyediakan cara ringkas bernama **destructuring** untuk membongkar properti menjadi variabel mandiri.

---

## Penjelasan Materi

Object destructuring menggunakan kurung kurawal `{}` di sebelah kiri operator penugasan `=`:

```ts
const { nama, umur } = siswa
```

Sintaks ini secara otomatis membuat dua variabel baru: `nama` (berisi `siswa.nama`) dan `umur` (berisi `siswa.umur`).

---

## Analogi Kehidupan Sehari-hari

### Mengambil Dokumen Tertentu Dari Map

Kamu memiliki map plastik besar berisi biodata siswa (foto, rapor, KTP). Daripada kamu membawa-bawa map plastik besar itu ke mana-mana, kamu membuka map tersebut, mengambil **hanya** lembaran Rapor dan KTP, lalu meletakkannya di atas mejamu sebagai dokumen mandiri. Map besarnya tetap tersimpan di laci.

---

## Visual Illustration

```text
Objek siswa
┌──────────────────────┐
│ nama: "Putra"        │ ───► const { nama, umur } = siswa
│ umur: 17             │
│ kelas: "XI RPL"      │ ───► menghasilkan variabel baru:
└──────────────────────┘      const nama = "Putra"
                              const umur = 17
```

---

## Mari Mencoba

Buat `src/bab6/destructuring.ts`:

```ts
type Siswa = {
  nama: string
  umur: number
  kelas: string
  nomorHP?: string
}

const siswaA: Siswa = {
  nama: "Putra Ramadhan",
  umur: 17,
  kelas: "XI RPL 1",
  nomorHP: "0812345"
}

// 1. Destructuring dasar
const { nama, kelas } = siswaA
console.log(`Nama : ${nama}`)
console.log(`Kelas: ${kelas}`)

// 2. Destructuring dengan nama variabel baru (Aliasing)
const { nama: namaLengkap, umur: usiaSiswa } = siswaA
console.log(`\nNama Lengkap: ${namaLengkap}`)
console.log(`Usia Siswa  : ${usiaSiswa}`)

// 3. Destructuring dengan nilai default jika properti undefined
const { nomorHP, email = "Belum diisi" } = siswaA
console.log(`\nHP   : ${nomorHP}`)
console.log(`Email: ${email}`) // Memakai nilai default
```

Jalankan:

```text
tsx src/bab6/destructuring.ts
```

## Output

```text
Nama : Putra Ramadhan
Kelas: XI RPL 1

Nama Lengkap: Putra Ramadhan
Usia Siswa  : 17

HP   : 0812345
Email: Belum diisi
```

---

## Penjelasan Baris per Baris

- `const { nama, kelas } = siswaA` — mengambil `nama` dan `kelas` dari objek `siswaA` dan membuat variabel dengan nama yang sama.
- `const { nama: namaLengkap }` — mengambil properti `nama` tetapi menyimpannya ke dalam nama variabel baru bernama `namaLengkap`.
- `email = "Belum diisi"` — jika properti `email` tidak ada (undefined), variabel `email` otomatis diisi dengan nilai default `"Belum diisi"`.

---

## Kesalahan yang Sering Terjadi

### ❌ Salah menulis nama properti saat destructuring

```ts
const { namaSiswa } = siswaA // Error!
// Property 'namaSiswa' does not exist on type 'Siswa'.
```

**Perbaikan:** Nama variabel di dalam `{}` wajib sama persis dengan nama properti yang ada di dalam object aslinya (kecuali jika kamu menggunakan aliasing `:`).

---

## Latihan

Buat object `buku` (judul, penulis, tahun). Gunakan destructuring untuk mengambil `judul` dan `penulis` ke dalam variabel mandiri, lalu tampilkan nilainya.

---

## Ringkasan

- Destructuring membongkar properti objek menjadi variabel mandiri.
- Sintaks: `const { properti1, properti2 } = objek`.
- Gunakan `:` untuk mengubah nama variabel (aliasing): `const { nama: namaBaru } = objek`.
- Gunakan `=` untuk memberikan nilai default jika properti tidak tersedia.

:::tip[Langkah Selanjutnya]
Lanjut ke **Spread Operator** untuk belajar menyalin dan menggabungkan objek.
:::
