---
title: "Utility Type: Pick"
description: Menggunakan Utility Type Pick<T, K> untuk mengambil beberapa properti tertentu saja dari tipe objek.
---

# Utility Type: `Pick`

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan fungsi dari Utility Type `Pick<T, K>`.
- Menggunakan `Pick` untuk menyaring properti objek yang dibutuhkan.
- Menggabungkan `Pick` dengan operator `keyof` untuk validasi kolom.

---

## Pendahuluan

Tipe data objek seringkali sangat besar dan memiliki puluhan properti. Namun, untuk proses tertentu, kita mungkin hanya membutuhkan 2 atau 3 properti saja. 

Contoh: Kita memiliki tipe data `Siswa` yang memiliki properti: nama, umur, alamat, NIS, wali, dan nilai. Saat menampilkan daftar nama untuk presensi kehadiran, kita hanya butuh properti `nama` dan `NIS` saja. Kita menggunakan **`Pick`** untuk memilah properti tersebut.

---

## Penjelasan Materi: Cara Kerja `Pick`

Utility Type `Pick<T, K>` membuat tipe data baru dengan memilih (*picking*) beberapa properti (kunci `K`) dari tipe asal `T`.

Sintaks dasar:

```ts
type TipeBaru = Pick<TipeAsal, "kunci1" | "kunci2">;
```

Tanda `|` di dalam parameter kedua digunakan untuk memilih lebih dari satu properti.

---

## Analogi Kehidupan Sehari-hari: Fotokopi Kolom Tertentu dari Map Rapor

Kamu memiliki map rapor lengkap milik siswa (berisi Nama, NIK, Nilai, Alamat). Untuk kebutuhan daftar presensi ujian di mading:

Kamu memfotokopi map rapor tersebut, namun hanya menutup bagian NIK dan Alamat, sehingga hasil fotokopian yang keluar **hanya menampilkan Nama dan Nilai saja**.

```text
Pick<Rapor, "Nama" | "Nilai"> = Hasil fotokopi selektif yang hanya memuat dua kolom itu
```

---

## Visual Illustration: Transformasi Pick

```text
Tipe Asli: { nama: string, kelas: string, nilai: number }
                 │
                 ▼ Diproses Pick<T, "nama" | "nilai">
Tipe Baru: { nama: string, nilai: number }
```

---

## Mari Mencoba: Membuat Profil Ringkas Siswa

Mari kita buat program yang menyaring data siswa besar menjadi profil ringkas menggunakan `Pick`.

Buat file bernama `src/bab9/pick-utility.ts`:

```ts
type SiswaLengkap = {
  nis: number;
  nama: string;
  kelas: string;
  alamat: string;
  nomorHP: string;
};

// Membuat tipe ringkas hanya mengambil 'nis' dan 'nama'
type SiswaRingkas = Pick<SiswaLengkap, "nis" | "nama">;

const dataSiswa: SiswaLengkap = {
  nis: 1001,
  nama: "Putra Ramadhan",
  kelas: "XI RPL 1",
  alamat: "Sidoarjo",
  nomorHP: "0812345"
};

// Objek ini hanya boleh berisi 'nis' dan 'nama'
const profilMading: SiswaRingkas = {
  nis: dataSiswa.nis,
  nama: dataSiswa.nama
};

console.log("Profil Ringkas Mading:", profilMading);

// Coba lakukan ini (Error!)
// const profilSalah: SiswaRingkas = {
//   nis: 1001,
//   nama: "Putra",
//   kelas: "XI" // ✗ Error! Property 'kelas' does not exist in type 'SiswaRingkas'.
// };
```

Jalankan dengan perintah:
```text
tsx src/bab9/pick-utility.ts
```

## Output
```text
Profil Ringkas Mading: { nis: 1001, nama: 'Putra Ramadhan' }
```

---

## Penjelasan Baris per Baris

- `Pick<SiswaLengkap, "nis" | "nama">` — Menyaring tipe data `SiswaLengkap` dan hanya menyisakan properti `nis` dan `nama`. Properti `kelas`, `alamat`, dan `nomorHP` dibuang dari tipe baru ini.
- `profilMading` divalidasi oleh TypeScript agar hanya menampung properti hasil saringan tersebut.

---

## Latihan
1. Buat tipe `Komputer` (merk: string, ram: number, harga: number).
2. Buat tipe `KomputerSpesifikasi` yang hanya memuat properti `merk` dan `ram` menggunakan `Pick`.
3. Buat objeknya dan tampilkan.

---

## Ringkasan
- `Pick<T, K>` membuat tipe baru dengan mengambil beberapa properti `K` dari objek `T`.
- Membantu menyederhanakan data objek besar untuk proses spesifik.
- Parameter kedua menggunakan tipe union string `"key1" | "key2"`.

:::tip[Langkah Selanjutnya]
Lanjut ke **Omit** untuk belajar kebalikan dari Pick (membuang properti).
:::
