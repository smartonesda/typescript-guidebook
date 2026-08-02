---
title: "Tantangan Pengembangan (Challenge) — BAB 11"
description: Sepuluh tantangan pengembangan mandiri untuk memperluas fitur aplikasi SIAKAD-Konsol.
---

# Tantangan Pengembangan (Challenge)

## Tujuan Pembelajaran
Setelah menyelesaikan challenge ini, kamu diharapkan dapat:
- Menambahkan fitur-fitur lanjutan secara mandiri pada project SIAKAD.
- Mengembangkan pemikiran analisis untuk menstrukturkan data baru.
- Menyiapkan project konsol agar memiliki kapabilitas penyimpanan data permanen.

---

## Pendahuluan
Setelah berhasil membangun aplikasi dasar, langkah terbaik untuk menguji keahlianmu adalah dengan menyelesaikan berbagai tantangan pengembangan mandiri (*challenge*) tanpa panduan kode langsung.

---

## Penjelasan
Di halaman ini, kamu ditantang untuk memperluas fitur aplikasi `siakad-final` milikmu. Kamu harus menambahkan 10 fitur lanjutan berikut satu per satu. Cobalah merancang tipe data dan logikanya terlebih dahulu sebelum menuliskan kodenya di file projectmu.

---

## Analogi Kehidupan Sehari-hari: Lomba Keterampilan Siswa (LKS) SMK
Menyelesaikan challenge seperti **mengikuti Lomba Keterampilan Siswa (LKS) tingkat nasional**:

```text
Tantangan LKS:
- Modifikasi mesin motor agar irit bahan bakar (Tantangan 1)
- Pasangkan sensor GPS pelacak lokasi motor (Tantangan 2)
```

Juri tidak membantumu memasangkan kabel. Juri hanya menilai hasil akhir apakah motor berjalan lancar dengan fitur baru tersebut. Challenge ini melatih kemandirian dan rasa percaya dirimu sebagai programmer sejati.

---

## Visual Illustration: Flowchart Ekspor JSON

```text
Database Siswa (Array) ──► JSON.stringify() ──► fs.writeFileSync() ──► file siswa.json
```

---

## Live Coding: Simulasi Tulis File Permanen (Helper)
Berikut adalah contoh fungsi dasar menulis data ke file menggunakan modul bawaan Node.js `fs` (File System):

```ts
import * as fs from "fs";

function simpanKeFile(namaFile: string, data: any): void {
  const teksJSON = JSON.stringify(data, null, 2);
  fs.writeFileSync(namaFile, teksJSON, "utf8");
  console.log(`✓ Data berhasil disimpan ke ${namaFile}`);
}

simpanKeFile("test-simpan.json", { status: "Sukses", kode: 200 });
```

---

## Output
Hasil eksekusi program tulis file di atas di terminal:

```text
✓ Data berhasil disimpan ke test-simpan.json
```

---

## Penjelasan Baris per Baris
- `import * as fs from "fs"`: Mengimpor modul bawaan Node.js untuk operasi file system.
- `JSON.stringify(data, null, 2)`: Mengonversi objek menjadi string teks JSON rapi dengan spasi indentasi 2.
- `fs.writeFileSync(...)`: Menuliskan teks string tersebut ke harddisk secara sinkron.

---

## Common Mistakes
- **Lupa menangani folder tidak ada**: Menulis file ke folder kustom yang belum dibuat. Pastikan file ditulis sejajar dengan `package.json` untuk kemudahan akses awal.

---

## Tips
:::tip[Gunakan Try Catch untuk File System]
Operasi pembacaan dan penulisan file ke harddisk rentan mengalami error (misal: karena disk penuh atau hak akses dibatasi). Selalu bungkus operasi `fs` di dalam blok `try...catch` agar aman.
:::

---

## Ringkasan
- Ada 10 tantangan perluasan fitur aplikasi SIAKAD.
- Penyimpanan data permanen menggunakan modul bawaan Node.js `fs` (File System).
- Menghindari copy-paste melatih pemikiran analitis penyusunan data.

---

## Latihan
Pilih minimal **dua** tantangan dari daftar berikut untuk kamu implementasikan di projectmu:

1. **Ekspor Data ke JSON**: Simpan data siswa ke `siswa.json` saat keluar aplikasi.
2. **Impor Data dari JSON**: Baca file `siswa.json` saat awal aplikasi dijalankan.
3. **Sistem Ranking**: Urutkan dan tampilkan 3 siswa nilai tertinggi.
4. **Pencarian Kelas**: Tampilkan siswa berdasarkan filter kelas tertentu.
5. **Wali Kelas Kehadiran**: Hitung persentase kehadiran guru.
6. **Login Admin**: Tambahkan menu verifikasi password sebelum masuk menu utama.
