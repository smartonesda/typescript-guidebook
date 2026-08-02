---
title: "Error Corner BAB 7"
description: Mengenali dan memperbaiki kesalahan paling umum saat menggunakan Interface dan Type Alias di TypeScript.
---

# Error Corner BAB 7

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat mengidentifikasi bug umum pendefinisian tipe data kustom dan mengatasinya dengan benar.

---

## Pendahuluan

Kesalahan interface dan type alias biasanya langsung terdeteksi oleh compiler TypeScript berupa garis merah di editor. Memahami pesan error tersebut mempermudah kita memperbaiki kode dengan cepat.

---

## Error 1 — Interface Menggunakan Tanda `=`

### Kode Bermasalah

```ts
interface Siswa = { // Error!
  nama: string;
}
```

### Mengapa Terjadi?

`interface` tidak menggunakan tanda sama dengan `=`. Hanya `type` alias yang menggunakan `=`.

### Cara Memperbaiki

```ts
interface Siswa { // ✓
  nama: string;
}
```

---

## Error 2 — Type Alias Lupa Menggunakan Tanda `=`

### Kode Bermasalah

```ts
type Siswa { // Error!
  nama: string;
}
```

### Mengapa Terjadi?

`type` alias wajib menggunakan tanda sama dengan `=` sebelum kurung kurawal pembuka.

### Cara Memperbaiki

```ts
type Siswa = { // ✓
  nama: string;
}
```

---

## Error 3 — Property is missing in type

### Kode Bermasalah

```ts
interface Siswa {
  nama: string;
  nis: number;
}

const siswaA: Siswa = {
  nama: "Putra"
  // Error: Property 'nis' is missing in type '{ nama: string; }' but required in type 'Siswa'.
}
```

### Mengapa Terjadi?

Semua properti di interface bersifat wajib secara default.

### Cara Memperbaiki

Isi seluruh properti yang dideklarasikan, atau ubah properti tersebut menjadi opsional (`?`) pada interface jika memang boleh dikosongkan.

---

## Error 4 — Mengubah Properti Readonly

### Kode Bermasalah

```ts
interface Siswa {
  readonly nis: number;
}
const s: Siswa = { nis: 1001 }
s.nis = 1002 // Error!
// Cannot assign to 'nis' because it is a read-only property.
```

### Mengapa Terjadi?

Properti bertanda `readonly` dikunci nilainya setelah pembuatan objek pertama kali.

### Cara Memperbaiki

Jangan mengubah nilai properti readonly. Jika nilainya memang perlu berubah, hapus kata kunci `readonly` pada deklarasi interface.

---

## Error 5 — Duplicate Identifier (Type Re-declaration)

### Kode Bermasalah

```ts
type Karyawan = { nama: string }
type Karyawan = { nip: number } // Error!
// Duplicate identifier 'Karyawan'.
```

### Mengapa Terjadi?

`type` alias tidak bisa dideklarasikan ulang dengan nama yang sama di scope yang sama (tidak mendukung declaration merging).

### Cara Memperbaiki

Gunakan `interface` jika kamu memerlukan fitur penggabungan otomatis (declaration merging), atau gabungkan tipe menggunakan intersection `&`:

```ts
type Identitas = { nama: string }
type Detail = { nip: number }
type Karyawan = Identitas & Detail // ✓
```

---

## Error 6 — Akses Metode Union Tanpa Type Guard

### Kode Bermasalah

```ts
function sapa(id: string | number) {
  console.log(id.toUpperCase()) // Error!
  // Property 'toUpperCase' does not exist on type 'string | number'.
}
```

### Mengapa Terjadi?

`.toUpperCase()` hanya ada pada tipe string, tidak ada pada number. TypeScript menolak karena tipe data parameter `id` tidak pasti string.

### Cara Memperbaiki

Gunakan `typeof` untuk memeriksa tipe datanya terlebih dahulu:

```ts
if (typeof id === "string") {
  console.log(id.toUpperCase()) // ✓ Aman
}
```

---

## Latihan

Perbaiki semua kesalahan dalam kode berikut agar berjalan normal:

```ts
interface Buku = {
  readonly judul: string;
  harga: number;
}

const bukuA: Buku = { judul: "RPL" } // Lupa mengisi harga
bukuA.judul = "RPL Baru" // Mencoba mengubah readonly

type ID = string | number
function cetak(id: ID) {
  console.log(id.toFixed(2)) // Error! toFixed hanya ada di number
}
```

---

## Ringkasan

- Interface tidak menggunakan `=`, Type Alias wajib menggunakan `=`.
- Properti wajib harus diisi lengkap saat membuat objek.
- Properti `readonly` tidak bisa diubah setelah inisialisasi.
- Type Guard `typeof` wajib digunakan saat berinteraksi dengan properti bertipe union.

:::tip[Langkah Selanjutnya]
Lanjut ke **Ringkasan BAB 7**.
:::
