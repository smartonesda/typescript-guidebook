---
title: "Apa itu Utility Type?"
description: Mengenal konsep Utility Types di TypeScript sebagai alat bantu manipulasi tipe data bawaan.
---

# Apa itu Utility Type?

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan definisi dari Utility Types di TypeScript.
- Memahami mengapa Utility Types sangat membantu efisiensi penulisan tipe data.
- Menyebutkan beberapa Utility Types bawaan yang paling sering digunakan.

---

## Pendahuluan

Saat kita merancang database atau memodelkan data aplikasi, kita sering membutuhkan variasi tipe data dari satu objek yang sama. 

Contoh: Kita memiliki tipe `Siswa` lengkap dengan properti wajib: nama, NIS, alamat, dan kelas.
- Saat siswa baru mendaftar, ia hanya mengisi nama dan kelas saja (**Partial** / tidak lengkap).
- Saat data sudah disimpan, kita ingin datanya dikunci agar tidak bisa diubah (**Readonly**).
- Saat menampilkan daftar piket, kita hanya butuh properti nama saja (**Pick**).

Apakah kita harus membuat 4 interface terpisah yang hampir sama isinya? Tidak perlu. TypeScript menyediakan **Utility Types** sebagai alat bantu otomatis.

---

## Penjelasan Materi: Mengenal Utility Types

**Utility Types** adalah tipe data bawaan (*built-in*) yang disediakan oleh TypeScript untuk membantu kita memanipulasi, memodifikasi, atau menyaring tipe data yang sudah ada menjadi tipe data baru tanpa perlu menulis ulang dari awal.

Utility types menggunakan parameter Generic di dalam tanda kurung sudut `<...>` untuk memproses tipe data asal:

```ts
type TipeBaru = NamaUtility<TipeAsal>;
```

Beberapa Utility Types yang akan kita pelajari secara mendalam di bab ini:

| Utility Type | Fungsi Utama | Analogi |
|---|---|---|
| **`Partial<T>`** | Mengubah semua properti menjadi opsional | Formulir belum lengkap |
| **`Required<T>`** | Mengubah semua properti menjadi wajib | Kolom wajib diisi semua |
| **`Readonly<T>`** | Mengunci semua properti agar tidak bisa diubah | Dokumen resmi terproteksi |
| **`Pick<T, K>`** | Memilih beberapa properti saja | Fotokopi kolom tertentu |
| **`Omit<T, K>`** | Membuang beberapa properti tertentu | Sensor kolom rahasia |
| **`Record<K, T>`** | Memetakan key-value kelompok | Lemari berlabel khusus |

---

## Analogi Kehidupan Sehari-hari: Alat Cetakan Laporan (Fotokopi & Edit)

Bayangkan sebuah **Formulir Rapor Asli**:

```text
Formulir Rapor Asli (Tipe Asal)
  ├── Nama
  ├── NIS
  ├── Nilai Ujian
  └── Catatan Wali Kelas
```

Kamu ingin membagikan data tersebut untuk kebutuhan yang berbeda:
- Untuk wali murid: Kamu memberikan kertas fotokopi yang sama persis, tapi distempel **"DILARANG CORET"** (`Readonly`).
- Untuk panitia lomba: Kamu memfotokopi bagian **Nama** dan **Nilai Ujian** saja (`Pick`).
- Untuk pengumuman di papan mading: Kamu memfotokopi rapor tetapi **menyensor (menghapus) kolom Nilai Ujian** agar tidak terlihat teman lain (`Omit`).

Formulir dasarnya hanya satu (Rapor Asli), namun alat fotokopi (Utility Types) membantumu menghasilkan lembaran baru dengan format berbeda dengan instan.

---

## Latihan
Tuliskan di kolom komentar latihanmu: sebutkan apa saja masalah yang mungkin muncul jika kita tidak menggunakan Utility Types dan memilih membuat interface baru secara manual setiap kali membutuhkan variasi data.

---

## Ringkasan
- Utility Types adalah alat bantu bawaan TypeScript untuk memodifikasi tipe data yang sudah ada.
- Menghindari duplikasi pembuatan interface sejenis.
- Menggunakan parameter Generic untuk menerima tipe asal: `UtilityName<TypeAsal>`.

:::tip[Langkah Selanjutnya]
Lanjut ke **Partial** untuk mempelajari cara membuat semua properti menjadi opsional dengan instan.
:::
