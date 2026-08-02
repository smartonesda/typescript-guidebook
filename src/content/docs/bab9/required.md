---
title: "Utility Type: Required"
description: Menggunakan Utility Type Required<T> untuk mengubah semua properti opsional menjadi wajib di TypeScript.
---

# Utility Type: `Required`

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan fungsi dari Utility Type `Required<T>`.
- Menggunakan `Required` untuk memaksa pengisian seluruh properti objek.
- Membedakan cara kerja `Partial` dan `Required`.

---

## Pendahuluan

Kebalikan dari `Partial` adalah **`Required`**. Jika `Partial` digunakan untuk melonggarkan aturan, `Required` digunakan untuk memperketat aturan. 

Terkadang kita memiliki tipe data yang memiliki properti opsional (seperti nomor HP atau email). Namun, pada proses tertentu (seperti finalisasi pendaftaran ujian), kita ingin memaksa agar **seluruh** properti tersebut wajib diisi tanpa terkecuali.

---

## Penjelasan Materi: Cara Kerja `Required`

Utility Type `Required<T>` mengambil seluruh properti dari tipe `T` dan menghapus status opsionalnya. Seluruh properti wajib diisi (tidak boleh kosong / `undefined`).

```ts
type Siswa = {
  nama: string;
  email?: string; // opsional pada tipe asli
};

// Tipe "SiswaWajib" setara dengan: { nama: string; email: string; }
type SiswaWajib = Required<Siswa>;
```

---

## Analogi Kehidupan Sehari-hari: Formulir Final yang Wajib Diisi Semua

Bayangkan saat kamu melakukan **verifikasi kelulusan** di loket sekolah:

```text
Formulir Pendaftaran (Tipe Asli)
  ├── Nama Lengkap (Wajib)
  └── Nomor HP (Opsional ?)
```

Saat mendaftar di awal, nomor HP boleh kosong. Namun, saat verifikasi akhir untuk kartu ujian, petugas loket berkata: *"Semua kolom, termasuk Nomor HP, sekarang **wajib diisi** agar kartu ujian bisa dicetak."*

```text
Required<Formulir> = Formulir yang seluruh kolomnya dipaksa menjadi wajib diisi
```

---

## Visual Illustration: Transformasi Required

```text
Tipe Asli: { nama: string, email?: string }
                 │
                 ▼ Diproses Required<T>
Tipe Baru: { nama: string, email: string }
```

---

## Mari Mencoba: Validasi Data Lengkap Siswa

Mari kita buat program yang memvalidasi bahwa data siswa harus lengkap sebelum dimasukkan ke database ujian.

Buat file bernama `src/bab9/required-utility.ts`:

```ts
type ProfilSiswa = {
  nama: string;
  kelas: string;
  nomorHP?: string; // opsional di profil biasa
  email?: string;    // opsional di profil biasa
};

// Objek profil biasa (boleh tidak lengkap)
const profilBiasa: ProfilSiswa = {
  nama: "Putra",
  kelas: "XI RPL 1"
};

// Objek untuk ujian wajib lengkap (Required)
const profilUjian: Required<ProfilSiswa> = {
  nama: "Putra Ramadhan",
  kelas: "XI RPL 1",
  nomorHP: "0812345", // wajib diisi!
  email: "putra@smk.sch.id" // wajib diisi!
};

console.log("Profil Biasa:", profilBiasa);
console.log("Profil Ujian:", profilUjian);

// Coba lakukan ini (Error!)
// const profilUjianError: Required<ProfilSiswa> = {
//   nama: "Dewi",
//   kelas: "XI RPL 2"
// };
// Error: Property 'nomorHP' and 'email' are missing!
```

Jalankan dengan perintah:
```text
tsx src/bab9/required-utility.ts
```

## Output
```text
Profil Biasa: { nama: 'Putra', kelas: 'XI RPL 1' }
Profil Ujian: {
  nama: 'Putra Ramadhan',
  kelas: 'XI RPL 1',
  nomorHP: '0812345',
  email: 'putra@smk.sch.id'
}
```

---

## Penjelasan Baris per Baris

- `email?: string` — properti opsional pada `ProfilSiswa`.
- `Required<ProfilSiswa>` — memaksa objek agar menyertakan `nomorHP` dan `email`. Jika salah satu dikosongkan, TypeScript mendeteksi error saat kompilasi.

---

## Latihan
1. Buat tipe `Mobil` dengan properti `merk: string` dan properti opsional `pemilik?: string`.
2. Buat objek `mobilLengkap` yang wajib menyertakan pemilik menggunakan `Required<Mobil>`.
3. Tampilkan hasilnya.

---

## Ringkasan
- `Required<T>` mengubah seluruh properti opsional menjadi wajib.
- Membantu memperketat aturan data pada proses akhir (seperti validasi simpan data).
- Mencegah adanya nilai `undefined` pada properti objek hasil transformasi.

:::tip[Langkah Selanjutnya]
Lanjut ke **Readonly** untuk belajar mengunci seluruh properti objek.
:::
