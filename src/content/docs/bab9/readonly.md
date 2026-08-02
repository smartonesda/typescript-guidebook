---
title: "Utility Type: Readonly"
description: Menggunakan Utility Type Readonly<T> untuk mengunci seluruh properti objek secara bersamaan di TypeScript.
---

# Utility Type: `Readonly`

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan fungsi dari Utility Type `Readonly<T>`.
- Mengamankan data objek agar bersifat *read-only* (hanya bisa dibaca).
- Membedakan properti readonly individu dengan Utility Type `Readonly`.

---

## Pendahuluan

Di BAB 7 kita belajar bahwa kita bisa mengunci properti satu per satu menggunakan kata kunci `readonly nis: number`. 

Namun, jika sebuah objek memiliki 20 properti dan kita ingin **mengunci seluruh properti** tersebut secara bersamaan tanpa mengetik kata kunci `readonly` sebanyak 20 kali, kita bisa menggunakan Utility Type **`Readonly<T>`**.

---

## Penjelasan Materi: Cara Kerja `Readonly`

Utility Type `Readonly<T>` mengambil seluruh properti dari tipe `T` dan menambahkan status `readonly` di depannya. Setelah objek dibuat, nilainya tidak boleh diubah.

```ts
type Siswa = {
  nama: string;
  umur: number;
};

// Tipe "SiswaTerkunci" setara dengan: { readonly nama: string; readonly umur: number; }
type SiswaTerkunci = Readonly<Siswa>;
```

---

## Analogi Kehidupan Sehari-hari: Dokumen Resmi Terproteksi (Kertas Segel)

Bayangkan selembar **Kertas Surat Kelulusan**:

```text
Surat Kelulusan Asli
  ├── Nama Siswa
  └── Status Kelulusan
```

Sebelum dibagikan, kepala sekolah memasukkan surat tersebut ke dalam map laminating plastik tebal yang diselelasikan panas. Surat tersebut kini **terkunci rapat** (Readonly).

```text
Readonly<Surat> = Surat yang dilaminating tebal (tidak bisa dicorat-coret lagi)
```

Kamu bisa membaca isinya dengan jelas, tetapi kamu dilarang keras mengubah tulisan nama atau nilainya menggunakan pulpen.

---

## Visual Illustration: Transformasi Readonly

```text
Tipe Asli: { nama: string, kelas: string }
                 │
                 ▼ Diproses Readonly<T>
Tipe Baru: { readonly nama: string, readonly kelas: string }
```

---

## Mari Mencoba: Mengamankan Konfigurasi Aplikasi Sekolah

Mari buat program objek konfigurasi aplikasi yang dikunci agar tidak bisa diubah di tengah jalan oleh kode lain.

Buat file bernama `src/bab9/readonly-utility.ts`:

```ts
type ConfigAplikasi = {
  namaSekolah: string;
  versi: string;
  tahunAjaran: number;
};

const configMentah: ConfigAplikasi = {
  namaSekolah: "SMKS Antartika 1",
  versi: "3.2.0",
  tahunAjaran: 2026
};

// Mengunci konfigurasi menggunakan Readonly
const CONFIG_RESMI: Readonly<ConfigAplikasi> = configMentah;

console.log("Aplikasi:", CONFIG_RESMI.namaSekolah);
console.log("Versi   :", CONFIG_RESMI.versi);

// Coba lakukan ini (Error!)
// CONFIG_RESMI.versi = "4.0.0"; // ✗ Error!
// Cannot assign to 'versi' because it is a read-only property.
```

Jalankan dengan perintah:
```text
tsx src/bab9/readonly-utility.ts
```

## Output
```text
Aplikasi: SMKS Antartika 1
Versi   : 3.2.0
```

---

## Penjelasan Baris per Baris

- `Readonly<ConfigAplikasi>` — Mengubah seluruh properti `namaSekolah`, `versi`, dan `tahunAjaran` menjadi read-only.
- `CONFIG_RESMI.versi = ...` — TypeScript langsung mendeteksi pelanggaran penulisan data dan menampilkan error merah sebelum kode dikompilasi.

---

## Latihan
1. Buat tipe `Siswa` (nama: string, kelas: string).
2. Buat objek `siswaKunci` bertipe `Readonly<Siswa>`.
3. Coba ubah nama siswa tersebut dan amati pesan error TypeScript.

---

## Ringkasan
- `Readonly<T>` mengunci seluruh properti objek agar tidak bisa diubah setelah diinisialisasi.
- Menjaga integritas data penting seperti konfigurasi aplikasi atau data database.
- Menghasilkan error kompilasi jika ada upaya penulisan ulang properti objek terproteksi.

:::tip[Langkah Selanjutnya]
Lanjut ke **Pick** untuk belajar menyaring properti tertentu saja.
:::
