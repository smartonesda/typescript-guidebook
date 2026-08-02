---
title: "keyof Operator"
description: Menggunakan operator keyof di TypeScript untuk mengambil semua key properti dari sebuah objek sebagai tipe union.
---

# keyof Operator

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan kegunaan operator `keyof`.
- Mengubah properti objek menjadi tipe union string menggunakan `keyof`.
- Memvalidasi parameter fungsi agar hanya menerima nama properti yang valid dari sebuah objek.

---

## Pendahuluan

Bagaimana cara kita memberitahu fungsi: *"Kamu hanya boleh menerima parameter berupa nama kolom yang ada di objek Siswa"*? 

Jika siswa memiliki properti `nama` dan `umur`, kita ingin fungsi menolak jika dikirim teks `"alamat"`. Di TypeScript, kita bisa mengekstrak semua nama properti (key) dari sebuah tipe objek menjadi tipe union string menggunakan operator **`keyof`**.

---

## Penjelasan Materi: Mengenal `keyof`

Operator `keyof` mengambil sebuah tipe objek dan menghasilkan gabungan (*union*) literal dari nama-nama properti (key) milik objek tersebut.

Contoh dasar:

```ts
type Siswa = {
  nama: string;
  umur: number;
};

// Tipe "KunciSiswa" bernilai: "nama" | "umur"
type KunciSiswa = keyof Siswa;
```

Variabel bertipe `KunciSiswa` hanya boleh diisi string `"nama"` atau `"umur"`.

---

## Analogi Kehidupan Sehari-hari: Daftar Label Pada Laci

Bayangkan sebuah **lemari laci** di sekolah yang memiliki label tempel di setiap lacinya:

```text
Lemari Laci:
  ├── Laci "Buku"
  ├── Laci "Uang"
  └── Laci "AlatTulis"
```

Daftar label tersebut (`"Buku" | "Uang" | "AlatTulis"`) adalah hasil dari **`keyof`** Lemari Laci. 

Jika kamu menyuruh asisten: *"Tolong rapikan laci bagian [Label]"*, asisten hanya mau menerima perintah jika label yang kamu sebutkan ada di daftar tempel laci tersebut. Jika kamu menyuruh merapikan laci `"Sepatu"`, asisten menolak karena laci tersebut tidak ada di lemari.

---

## Visual Illustration: keyof Operator

```text
type Produk = { id: string, harga: number }

keyof Produk ──► menghasilkan tipe: "id" | "harga"
```

---

## Mari Mencoba: Fungsi Pengambil Properti Objek secara Aman

Mari buat program fungsi Generic yang mengambil nilai dari objek berdasarkan nama propertinya secara aman.

Buat file bernama `src/bab9/keyof-operator.ts`:

```ts
type ProfilSiswa = {
  nama: string;
  umur: number;
  kelas: string;
};

// Fungsi menggunakan Generic dan keyof
// T harus berupa objek, K harus merupakan key dari T (K extends keyof T)
function dapatkanPropertiSiswa<T, K extends keyof T>(objek: T, kunci: K): T[K] {
  return objek[kunci];
}

const dataSiswa: ProfilSiswa = {
  nama: "Putra Ramadhan",
  umur: 17,
  kelas: "XI RPL 1"
};

// Mengambil properti secara aman
const namaSiswa = dapatkanPropertiSiswa(dataSiswa, "nama"); // K = "nama"
const umurSiswa = dapatkanPropertiSiswa(dataSiswa, "umur"); // K = "umur"

console.log("Nama:", namaSiswa);
console.log("Umur:", umurSiswa);

// Coba lakukan ini (Error!)
// dapatkanPropertiSiswa(dataSiswa, "alamat"); // ✗ Error!
// Argument of type '"alamat"' is not assignable to parameter of type '"nama" | "umur" | "kelas"'.
```

Jalankan dengan perintah:
```text
tsx src/bab9/keyof-operator.ts
```

## Output
```text
Nama: Putra Ramadhan
Umur: 17
```

---

## Penjelasan Baris per Baris

- `K extends keyof T` — Membatasi tipe `K` agar wajib berupa salah satu key (nama properti) yang valid milik objek `T`.
- `T[K]` — Tipe data kembalian fungsi disesuaikan secara otomatis dengan tipe data dari properti `K` pada objek `T`. Jika kita mengambil `"umur"`, tipe kembalian otomatis menjadi `number`.
- `dapatkanPropertiSiswa(dataSiswa, "alamat")` — TypeScript mendeteksi bahwa `"alamat"` bukan merupakan bagian dari key milik `ProfilSiswa`, sehingga error langsung terdeteksi saat menulis kode.

---

## Latihan
1. Buat tipe `Mobil` dengan properti `merk: string` dan `tahun: number`.
2. Buat variabel `kunciMobil` bertipe `keyof Mobil`. Isi dengan nilai `"merk"`, lalu coba ganti dengan `"warna"` dan amati error compile-nya.

---

## Ringkasan
- Operator `keyof` menghasilkan tipe union string dari seluruh nama properti sebuah objek.
- Membantu memvalidasi agar input parameter hanya berupa nama kolom/properti yang valid.
- Memberikan autocompletion daftar properti objek secara cerdas di VS Code.

:::tip[Langkah Selanjutnya]
Lanjut ke **typeof** untuk mempelajari operator pengintip jenis data variabel.
:::
