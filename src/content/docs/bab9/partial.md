---
title: "Utility Type: Partial"
description: Menggunakan Utility Type Partial<T> untuk mengubah semua properti objek menjadi opsional di TypeScript.
---

# Utility Type: `Partial`

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan fungsi dari Utility Type `Partial<T>`.
- Menggunakan `Partial` untuk membuat tipe data objek opsional.
- Memahami alur kerja pembaruan data (update) menggunakan properti parsial.

---

## Pendahuluan

Saat membuat fitur "Edit Profil Siswa" di aplikasi, pengguna biasanya tidak mengubah seluruh data mereka. Mereka mungkin hanya mengganti nomor HP saja, atau alamat saja. 

Jika fungsi update kita mewajibkan semua data dikirimkan, program kita akan merepotkan. Kita butuh agar fungsi update bisa menerima data secara **sebagian (parsial)** menggunakan `Partial<T>`.

---

## Penjelasan Materi: Cara Kerja `Partial`

Utility Type `Partial<T>` mengambil seluruh properti dari tipe `T` dan mengubah statusnya menjadi **opsional (boleh kosong / `?`)**.

```ts
type Siswa = {
  nama: string;
  umur: number;
};

// Tipe "SiswaPartial" setara dengan: { nama?: string; umur?: number; }
type SiswaPartial = Partial<Siswa>;
```

---

## Analogi Kehidupan Sehari-hari: Formulir Pendaftaran Kosong (Belum Diisi Lengkap)

Bayangkan selembar **Formulir Pendaftaran Siswa**:

```text
Formulir Pendaftaran Asli (Wajib)
  ├── Nama Lengkap
  ├── NIS
  └── Alamat
```

Saat pertama kali mendaftar, panitia memperbolehkan kamu mengisi formulir secara bertahap. Kamu boleh menyerahkan formulir yang **hanya berisi Nama Lengkap** saja hari ini, lalu melengkapi NIS dan Alamat minggu depan.

```text
Partial<Formulir> = Lembaran formulir yang seluruh kolomnya boleh dikosongkan dahulu
```

Formulir tersebut tetap diterima secara sah oleh panitia meskipun belum terisi lengkap di awal.

---

## Visual Illustration: Transformasi Partial

```text
Tipe Asli: { nama: string, kelas: string }
                 │
                 ▼ Diproses Partial<T>
Tipe Baru: { nama?: string, kelas?: string }
```

---

## Mari Mencoba: Simulasi Fungsi Update Data Siswa

Mari kita buat program simulasi pembaruan data siswa menggunakan `Partial<T>` agar pengeditan data bisa dilakukan secara fleksibel.

Buat file bernama `src/bab9/partial-utility.ts`:

```ts
type Siswa = {
  nis: number;
  nama: string;
  kelas: string;
  email: string;
};

const databaseSiswa: Siswa = {
  nis: 1001,
  nama: "Putra Ramadhan",
  kelas: "XI RPL 1",
  email: "putra@smk.sch.id"
};

// Fungsi update menerima data siswa secara sebagian (Partial)
function updateProfilSiswa(dataLama: Siswa, dataBaru: Partial<Siswa>): Siswa {
  // Menggabungkan data lama dan data baru menggunakan spread operator
  return { ...dataLama, ...dataBaru };
}

console.log("Data Awal :", databaseSiswa);

// Simulasi 1: Hanya mengupdate email
const update1 = updateProfilSiswa(databaseSiswa, { email: "putra.new@gmail.com" });
console.log("\nUpdate 1  :", update1);

// Simulasi 2: Hanya mengupdate kelas
const update2 = updateProfilSiswa(databaseSiswa, { kelas: "XII RPL 1" });
console.log("Update 2  :", update2);
```

Jalankan dengan perintah:
```text
tsx src/bab9/partial-utility.ts
```

## Output
```text
Data Awal : { nis: 1001, nama: 'Putra Ramadhan', kelas: 'XI RPL 1', email: 'putra@smk.sch.id' }

Update 1  : { nis: 1001, nama: 'Putra Ramadhan', kelas: 'XI RPL 1', email: 'putra.new@gmail.com' }
Update 2  : { nis: 1001, nama: 'Putra Ramadhan', kelas: 'XII RPL 1', email: 'putra@smk.sch.id' }
```

---

## Penjelasan Baris per Baris

- `dataBaru: Partial<Siswa>` — Parameter ini boleh menerima objek kosong `{}` atau objek yang berisi sebagian properti milik `Siswa` (misal: hanya email saja).
- `{ ...dataLama, ...dataBaru }` — Menyalin seluruh data lama, lalu menimpanya dengan data baru yang dikirimkan.
- Properti yang tidak dikirimkan di `dataBaru` akan otomatis tetap memakai nilai lama dari `dataLama`.

---

## Kesalahan yang Sering Terjadi

### ❌ Mengakses properti hasil Partial tanpa pengecekan undefined
Karena seluruh properti pada `Partial<T>` bisa bernilai `undefined`, mengakses langsung properti tersebut tanpa pengaman di bagian kode lain bisa memicu error:

```ts
const siswaEdit: Partial<Siswa> = { nama: "Putra" };
// console.log(siswaEdit.email.toUpperCase()); // Error! email is possibly 'undefined'.
```

---

## Latihan
1. Buat tipe `Buku` (judul: string, harga: number).
2. Buat objek `bukuEdit` bertipe `Partial<Buku>` yang hanya berisi properti `harga`.
3. Tampilkan hasilnya.

---

## Ringkasan
- `Partial<T>` mengubah seluruh properti tipe objek `T` menjadi opsional.
- Sangat berguna untuk fungsi pembaruan data (update / patch).
- Hasil properti Partial dapat bernilai `undefined` sehingga butuh pengamanan saat diakses.

:::tip[Langkah Selanjutnya]
Lanjut ke **Required** untuk mempelajari kebalikan dari Partial.
:::
