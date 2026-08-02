---
title: "Error Corner BAB 9"
description: Mengenali dan memperbaiki berbagai kesalahan paling umum saat menulis kode Generic dan Utility Types di TypeScript.
---

# Error Corner BAB 9

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Mengidentifikasi penyebab error umum pada Generic dan Utility Types.
- Membaca pesan error compiler terkait parameter tipe Generic.
- Memperbaiki kesalahan syntax pembatasan tipe (constraints) dan properti utilitas.

---

## Pendahuluan

Tipe Generic dan Utility Types sangat membantu kerapian kode, tetapi juga memiliki aturan syntax yang ketat. Lupa mengirimkan parameter tipe, salah menuliskan nama properti pada `Pick`/`Omit`, atau mengabaikan status `undefined` pada `Partial` adalah kesalahan yang paling sering ditemui pemula.

---

## Error 1 — Lupa Menuliskan Parameter Tipe Generic

### Kode Bermasalah
```ts
interface Box<T> {
  isi: T;
}

const kotak: Box = { isi: "Buku" }; // Error!
// Generic type 'Box<T>' requires 1 type argument(s).
```

### Mengapa Terjadi?
Interface `Box` didefinisikan memiliki satu parameter tipe Generic `<T>`. Saat membuat objek nyata, kamu wajib menentukan tipe data untuk menggantikan `T`.

### Cara Memperbaiki
```ts
const kotak: Box<string> = { isi: "Buku" }; // ✓
```

---

## Error 2 — Mengakses Properti pada Tipe Generic Tanpa Batasan (Constraint)

### Kode Bermasalah
```ts
function sapaSiswa<T>(siswa: T): void {
  // console.log(`Halo, ${siswa.nama}`); // Error!
  // Property 'nama' does not exist on type 'T'.
```

### Mengapa Terjadi?
TypeScript tidak bisa menjamin bahwa objek `T` yang dikirimkan memiliki properti bernama `nama` (karena `T` bisa saja diisi number biasa).

### Cara Memperbaiki
Gunakan `extends` (Generic Constraint) untuk membatasi tipe `T` agar wajib memiliki properti `nama`:
```ts
interface MemilikiNama { nama: string }

function sapaSiswa<T extends MemilikiNama>(siswa: T): void {
  console.log(`Halo, ${siswa.nama}`); // ✓ Aman
}
```

---

## Error 3 — Mengubah Properti Objek hasil `Readonly<T>`

### Kode Bermasalah
```ts
type Siswa = { nama: string };
const s: Readonly<Siswa> = { nama: "Putra" };

s.nama = "Budi"; // Error!
// Cannot assign to 'nama' because it is a read-only property.
```

### Mengapa Terjadi?
Utility Type `Readonly` mengunci seluruh properti objek secara mutlak. Nilainya tidak boleh diubah setelah diinisialisasi.

### Cara Memperbaiki
Jangan mengubah properti objek readonly. Jika data memang perlu diubah, gunakan tipe data biasa tanpa `Readonly`, atau buat objek salinan baru menggunakan spread operator `...`:
```ts
const sBaru = { ...s, nama: "Budi" }; // ✓ Aman & Immutable
```

---

## Error 4 — Salah Menulis Nama Properti pada `Pick` atau `Omit`

### Kode Bermasalah
```ts
type Siswa = { nama: string; kelas: string };

type NamaSiswa = Pick<Siswa, "namaSiswa">; // Error!
// Type '"namaSiswa"' is not assignable to type '"nama" | "kelas"'.
```

### Mengapa Terjadi?
Parameter kedua dari `Pick` atau `Omit` wajib berupa nama properti (key) yang benar-benar ada di dalam objek tipe asal.

### Cara Memperbaiki
```ts
type NamaSiswa = Pick<Siswa, "nama">; // ✓ namaSiswa diganti nama
```

---

## Error 5 — Salah Asumsi Bahwa Properti `Partial` Selalu Ada

### Kode Bermasalah
```ts
type Siswa = { nama: string; email: string };
const editSiswa: Partial<Siswa> = { nama: "Putra" };

// console.log(editSiswa.email.toUpperCase()); // Error!
// Object is possibly 'undefined'.
```

### Mengapa Terjadi?
`Partial` mengubah properti `email` menjadi opsional (`email?: string`). Karena boleh kosong, properti tersebut bernilai `undefined` pada objek `editSiswa`.

### Cara Memperbaiki
Gunakan optional chaining (`?.`) untuk mengakses nilainya dengan aman:
```ts
console.log(editSiswa.email?.toUpperCase()); // ✓ Aman (menghasilkan undefined, bukan crash)
```

---

## Latihan
Perbaiki seluruh kesalahan dalam kode di bawah ini agar dapat dikompilasi tanpa error:

```ts
interface Produk<T> {
  id: string;
  data: T;
}

const p: Produk = { id: "01", data: 100 };

type Siswa = { nama: string; umur: number };
type Detail = Pick<Siswa, "usia">;

const s: Readonly<Siswa> = { nama: "Dewi", umur: 16 };
s.umur = 17;
```

---

## Ringkasan
- Pastikan menyertakan argumen tipe `<...>` pada komponen Generic yang mewajibkannya.
- Gunakan `extends` untuk membatasi properti minimum pada tipe Generic bebas.
- Parameter seleksi `Pick`/`Omit` harus cocok dengan nama properti asli.
- Selalu amankan properti opsional hasil `Partial` menggunakan optional chaining `?.`.

:::tip[Langkah Selanjutnya]
Lanjut ke **Ringkasan BAB 9** untuk merangkum seluruh materi sebelum ujian kompetensi.
:::
