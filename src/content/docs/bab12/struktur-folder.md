---
title: "Struktur Folder — BAB 12"
description: Merancang struktur folder project TypeScript yang rapi dan terorganisir sesuai standar industri.
---

# Struktur Folder Project

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan pentingnya pemisahan berkas berdasarkan fungsinya masing-masing.
- Menyusun folder project modular sesuai standar industri (`models`, `services`, `repositories`, dll).
- Membaca dan menelusuri folder project berskala besar dengan mudah.

---

## Pendahuluan
Di BAB 11 kita telah mempraktikkan pembuatan folder secara modular. Di halaman ini, kita akan meninjau kembali mengapa struktur folder tersebut sangat penting dan mengapa penataan yang rapi memisahkan programmer amatir dengan programmer profesional.

---

## Penjelasan
Di dalam project software nyata, file dilarang keras ditaruh berserakan di satu folder root utama. Kita membaginya ke dalam sub-folder khusus di dalam direktori `src/` berdasarkan tugasnya masing-masing:

### 1. `models/` (Data Entities)
Menyimpan file yang mendefinisikan bentuk data murni (misal: data struktur objek `Siswa` dan `Guru`).

### 2. `interfaces/` (Kontrak Kelas)
Menyimpan interface kontrak metode resmi untuk class dan service agar interaksi antar-layer tetap konsisten.

### 3. `repositories/` (Layer Database RAM)
Menyimpan class yang memanipulasi data di memori RAM (tambah, cari, update, hapus).

### 4. `services/` (Layer Logika Bisnis)
Menyimpan class pengolah data pintar (seperti penghitungan nilai, penentuan grade, atau fetch data API internet).

### 5. `helpers/` / `utils/` (Fungsi Pembantu)
Menyimpan fungsi utilitas kecil serbaguna (seperti pemformatan rupiah atau cetak garis pembatas).

---

## Analogi Kehidupan Sehari-hari: Lemari Arsip Kantor Tata Usaha
Bayangkan lemari arsip besar di kantor tata usaha sekolah:

```text
Lemari Tanpa Pembatas (Berantakan)
  └── Seluruh dokumen — biodata siswa kelas X, slip gaji guru, struk belanja koperasi, 
      dan laporan ujian dicampur aduk di dalam satu laci besar yang sama.

Lemari Terorganisir (Best Practice)
  ├── Laci "Siswa"    ──► Khusus map biodata siswa (folder models)
  ├── Laci "Guru"     ──► Khusus berkas guru (folder models)
  └── Laci "Keuangan" ──► Khusus slip gaji (folder services)
```

Jika kepala sekolah meminta dicarikan berkas biodata salah satu siswa, staf TU bisa menemukannya dalam waktu 10 detik karena langsung menuju laci "Siswa".

---

## Visual Illustration: Arsitektur Folder Project

```text
src/
├── models/
│   ├── siswa-class.ts
│   └── guru-class.ts
├── interfaces/
│   ├── repository-interface.ts
│   └── service-interface.ts
├── repositories/
│   └── academic-repository.ts
├── services/
│   └── siswa-service.ts
├── helpers/
│   └── utility.ts
└── main.ts         (Pintu masuk utama presentasi)
```

---

## Example: Perbandingan Kerapian Berkas

### Bad Project (Satu File Raksasa)
Semua kode ditaruh di dalam satu file `app.ts` sepanjang 2000 baris. Menemukan bug di file sepanjang ini akan memakan waktu berjam-jam.

### Good Project (Modular Terpisah)
Kode dibagi menjadi 7 file berbeda sesuai foldernya. Setiap file hanya memiliki panjang 50-100 baris kode yang sangat mudah dipahami.

---

## Common Mistakes
- **Menaruh file helper di folder models**: Menaruh fungsi `formatRupiah()` di folder `models/`. Folder `models` hanya boleh berisi bentuk cetak biru data (interface/class model), dilarang menaruh fungsi pemformatan visual di sana.

---

## Tips
:::tip[Gunakan Folder utils Untuk Fungsi Umum]
Jika fungsi pembantu yang kamu buat tidak berkaitan langsung dengan data akademik (misalnya fungsi untuk memanipulasi string waktu atau generate ID acak), taruhlah di folder bernama `utils/` agar terpisah dari helper visual sekolah.
:::

---

## Best Practice
- Selalu letakkan file utama pintu masuk program bernama `main.ts` atau `index.ts` di luar sub-folder (langsung di bawah folder `src/`) agar mudah ditemukan sebagai entry point aplikasi oleh developer lain.

---

## Ringkasan
- Pemisahan folder mempermudah navigasi dan pemeliharaan file program.
- Folder utama: `models` (entitas), `interfaces` (kontrak), `repositories` (akses data), `services` (logika bisnis), `helpers` (utilitas).
- `main.ts` bertindak sebagai entry point utama di luar sub-folder.

---

## Latihan
1. Gambarkan kembali bagan struktur folder project SIAKAD-Konsol yang telah kamu buat di BAB 11 di buku catatanmu.
