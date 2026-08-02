---
title: "Studi Kasus: Biodata Siswa Lengkap"
description: Membangun data biodata siswa kompleks yang terstruktur menggunakan object, nested object, opsional properti, dan destructuring.
---

# Studi Kasus: Biodata Siswa Lengkap

## Tujuan Pembelajaran

Setelah studi kasus ini, kamu dapat merancang struktur data siswa yang kompleks menggunakan type alias modular, nested object, properti opsional, dan memformat datanya menggunakan destructuring serta template literal.

---

## Pendahuluan

Kita akan membangun program untuk mengelola **Biodata Siswa Lengkap**. Kasus ini mensimulasikan data nyata dari sistem administrasi sekolah (dikenal sebagai Dapodik). Data siswa tidak hanya berisi nama dan nilai, tetapi juga alamat lengkap, wali murid, dan informasi kontak.

---

## Perancangan Struktur Data

Struktur data yang dirancang:

```text
Siswa (Object Utama)
  ├── nama (string)
  ├── nis (number)
  ├── kelas (string)
  ├── jurusan (literal type)
  ├── kontak (Nested Object)
  │     ├── nomorHP (string)
  │     └── email (string, opsional)
  ├── alamat (Nested Object)
  │     ├── jalan (string)
  │     ├── kota (string)
  │     └── provinsi (string)
  └── wali (Nested Object, opsional)
        ├── namaWali (string)
        └── hubungan (string)
```

---

## Visual Illustration

```text
Struktur Objek Siswa Kompleks
┌──────────────────────────────────────────────┐
│ nama: "Putra"                                │
│ nis: 3515001                                 │
│ alamat: { jalan: "Jl. A", kota: "Sidoarjo" }  │
│ kontak: { nomorHP: "0812..." }               │
│ wali?:  { namaWali: "Budi", hubungan: "Ayah"}│
└──────────────────────────────────────────────┘
```

---

## Mari Mencoba

Buat `src/bab6/studi-kasus-biodata.ts`:

```ts
// 1. Definisikan Tipe Data Modular
type TipeKontak = {
  nomorHP: string
  email?: string // opsional
}

type TipeAlamat = {
  jalan: string
  kota: string
  provinsi: string
}

type TipeWali = {
  namaWali: string
  hubungan: string
}

type Jurusan = "RPL" | "TKJ" | "DKV"

type BiodataSiswa = {
  nama: string
  nis: number
  kelas: string
  jurusan: Jurusan
  kontak: TipeKontak
  alamat: TipeAlamat
  wali?: TipeWali // opsional
}

// 2. Buat Objek Siswa A (dengan data wali)
const siswaA: BiodataSiswa = {
  nama: "Putra Ramadhan",
  nis: 35150012,
  kelas: "XI RPL 1",
  jurusan: "RPL",
  kontak: {
    nomorHP: "0812345678",
    email: "putra@smk.sch.id"
  },
  alamat: {
    jalan: "Jl. Pahlawan No. 12",
    kota: "Sidoarjo",
    provinsi: "Jawa Timur"
  },
  wali: {
    namaWali: "Bambang Wijaya",
    hubungan: "Ayah"
  }
}

// 3. Buat Objek Siswa B (tanpa email, tanpa data wali)
const siswaB: BiodataSiswa = {
  nama: "Dewi Rahayu",
  nis: 35150015,
  kelas: "XI RPL 2",
  jurusan: "RPL",
  kontak: {
    nomorHP: "0898765432"
  },
  alamat: {
    jalan: "Jl. Kartini No. 45",
    kota: "Surabaya",
    provinsi: "Jawa Timur"
  }
}

// 4. Fungsi untuk mencetak biodata menggunakan destructuring
function cetakBiodata(siswa: BiodataSiswa): void {
  // Destructuring objek utama
  const { nama, nis, kelas, jurusan, kontak, alamat, wali } = siswa

  // Destructuring alamat
  const { jalan, kota, provinsi } = alamat

  // Amankan data opsional menggunakan nullish coalescing
  const emailTampil = kontak.email ?? "(Belum diisi)"
  const namaWaliTampil = wali?.namaWali ?? "(Tidak ada data wali)"
  const hubunganWaliTampil = wali?.hubungan ?? "-"

  const laporan = `
===================================================
             BIODATA SISWA LENGKAP
===================================================
IDENTITAS
  Nama Lengkap  : ${nama}
  NIS           : ${nis}
  Kelas/Jurusan : ${kelas} / ${jurusan}

KONTAK
  Nomor HP      : ${kontak.nomorHP}
  Email         : ${emailTampil}

ALAMAT
  Jalan         : ${jalan}
  Kota/Provinsi : ${kota}, ${provinsi}

WALI SISWA
  Nama Wali     : ${namaWaliTampil}
  Hubungan      : ${hubunganWaliTampil}
===================================================
`
  console.log(laporan)
}

// Cetak data kedua siswa
cetakBiodata(siswaA)
cetakBiodata(siswaB)
```

Jalankan:

```text
tsx src/bab6/studi-kasus-biodata.ts
```

---

## Penjelasan Baris per Baris

- `type BiodataSiswa = { ... }` — cetak biru utama yang mengintegrasikan sub-tipe `TipeKontak`, `TipeAlamat`, dan `TipeWali`.
- `const { nama, nis, ... } = siswa` — menggunakan destructuring di dalam fungsi `cetakBiodata` agar kita bisa mengakses variabel langsung tanpa menulis `siswa.nama` berulang-ulang.
- `kontak.email ?? "(Belum diisi)"` — menangani properti `email` yang opsional pada siswa B agar tidak menampilkan `undefined`.
- `wali?.namaWali ?? ...` — menggunakan kombinasi optional chaining dan nullish coalescing untuk mengamankan data `wali` yang opsional. Jika objek `wali` tidak ada (pada siswa B), program tidak crash dan langsung mencetak cadangan.

---

## Latihan

Kembangkan studi kasus di atas:
1. Tambahkan properti opsional `prestasi: string[]` pada type `BiodataSiswa` untuk menampung daftar piala/penghargaan siswa.
2. Update fungsi `cetakBiodata` untuk menampilkan daftar prestasi tersebut menggunakan loop `.forEach()`, atau menampilkan `"Belum ada prestasi"` jika datanya kosong/undefined.

---

## Ringkasan

- Dapodik / data nyata sekolah menggunakan tipe data objek bertingkat (nested object).
- Type alias modular mempermudah pengelolaan objek bertingkat yang kompleks.
- Destructuring mengambil data tingkat atas dan tingkat dalam secara ringkas.
- Kombinasi `?.` dan `??` mengamankan data opsional tingkat dalam agar program bebas crash.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mini Project** untuk membangun sistem manajemen data siswa berbasis objek dan array of objek.
:::
