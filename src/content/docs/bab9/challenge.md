---
title: "Challenge BAB 9"
description: Sepuluh latihan Generic dan Utility Types tingkat menengah di TypeScript untuk menguji pemahaman.
---

# Challenge BAB 9

## Tujuan Pembelajaran
Setelah menyelesaikan challenge ini, kamu diharapkan dapat:
- Merancang dan memodifikasi tipe data menggunakan kombinasi Generic dan Utility Types secara mandiri.
- Menyaring dan memperketat properti objek kustom secara presisi.
- Membaca dan mengatasi pesan error compiler TypeScript terkait tipe Generic.

---

## Aturan Pengerjaan

:::tip[Cara Mengerjakan]
Buatlah satu file terpisah untuk setiap soal di folder `src/bab9/challenge/`. Contoh: `src/bab9/challenge/soal-1.ts`.

Jalankan file tersebut menggunakan perintah:
```text
tsx src/bab9/challenge/soal-1.ts
```
:::

---

## Challenge 1 — Fungsi Cetak Identitas (Generic Identity)
**Tingkat: Mudah**

Buat sebuah fungsi Generic `identitas<T>(nilai: T): T` yang mengembalikan nilai yang sama dengan parameter input-nya. Panggil fungsi tersebut tiga kali dengan tipe data yang berbeda: `string`, `number`, dan `boolean`. Tampilkan hasilnya di terminal.

---

## Challenge 2 — Interface Box Serbaguna (Generic Interface)
**Tingkat: Mudah**

Buat sebuah Generic Interface bernama `Box<T>` yang memiliki properti `label: string` dan `isi: T`.
- Buat objek `boxString` bertipe `Box<string>`.
- Buat objek `boxNumber` bertipe `Box<number>`.
Tampilkan data isi dari kedua objek tersebut.

---

## Challenge 3 — Class Tumpukan Data (Generic Class)
**Tingkat: Mudah**

Buat sebuah Generic Class `Tumpukan<T>` untuk mengelola daftar data bertipe `T`:
- Miliki properti private array `data: T[]`.
- Tambahkan method `taruh(item: T)` untuk memasukkan ke array.
- Tambahkan method `ambil()` yang mengembalikan elemen terakhir dan menghapusnya.
Uji coba class tersebut untuk menyimpan daftar nama string.

---

## Challenge 4 — Edit Produk Koperasi (Partial)
**Tingkat: Mudah**

1. Buat tipe `Produk` dengan properti: `id` (string), `nama` (string), dan `harga` (number).
2. Buat fungsi `updateProduk(produk: Produk, perubahan: Partial<Produk>): Produk` yang mengupdate data produk secara parsial.
3. Lakukan simulasi update harga pada sabun mandi dan tampilkan hasilnya.

---

## Challenge 5 — Finalisasi Formulir Ujian (Required)
**Tingkat: Mudah**

Buat tipe `DataPendaftaran` dengan properti: `nama: string` dan properti opsional `email?: string`, `nomorHP?: string`. Buat satu objek data pendaftaran yang **wajib** mengisi seluruh properti tersebut menggunakan Utility Type `Required`.

---

## Challenge 6 — Batasan Kunci Objek (Generic Constraint)
**Tingkat: Menengah**

Buat fungsi Generic `ambilNilaiPanjang<T extends { length: number }>(item: T): number`. Fungsi mengembalikan properti `.length` dari parameter yang dikirim. Panggil fungsi dengan string dan array, lalu amati proteksi TypeScript jika diisi number biasa.

---

## Challenge 7 — Kartu Nama Siswa (Pick)
**Tingkat: Menengah**

Buat tipe `SiswaLengkap` (id, nama, kelas, alamat, email, telepon). Buat tipe baru `KartuNama` menggunakan `Pick` yang hanya mengambil properti `nama` dan `email`. Buat objeknya dan tampilkan di terminal.

---

## Challenge 8 — Sensor Gaji Staf (Omit)
**Tingkat: Menengah**

Buat tipe `Karyawan` (id, nama, jabatan, gajiBulanan). Buat tipe baru `ProfilPublik` menggunakan `Omit` untuk membuang properti `gajiBulanan`. Buat objek karyawan terproteksi tersebut dan tampilkan hasilnya.

---

## Challenge 9 — Kamus Nilai Kelas (Record)
**Tingkat: Menengah**

1. Buat tipe union `NamaSiswa = "Putra" | "Dewi" | "Citra"`.
2. Buat objek `daftarNilai` menggunakan `Record<NamaSiswa, number>` untuk memetakan nama siswa ke nilai ujian angka mereka.
3. Tampilkan nilai ujian Putra dan Citra.

---

## Challenge 10 — Menyaring Tipe Union Nilai (Exclude & Extract)
**Tingkat: Menengah**

1. Buat tipe union `SemuaNilai = "A" | "B" | "C" | "D" | "E" | "F"`.
2. Buat tipe `NilaiLulus` hasil ekstraksi `"A"`, `"B"`, dan `"C"` dari `SemuaNilai` menggunakan `Extract`.
3. Buat tipe `NilaiRemedial` hasil pengecualian (pembuangan) `"A"`, `"B"`, dan `"C"` dari `SemuaNilai` menggunakan `Exclude`.
4. Buat variabel untuk kedua tipe tersebut dan tampilkan hasilnya.

---

## Latihan
Pilih salah satu challenge di atas yang menurutmu paling menantang. Gabungkan tipe Generic dan Utility Types, buat rancangan alurnya, lalu ketik solusi kodenya secara mandiri.

---

## Ringkasan
- Pengerjaan challenge melatih logika pemodelan tipe data TypeScript secara modular.
- Pastikan seluruh file challenge bebas dari error compiler sebelum dijalankan.

:::tip[Langkah Selanjutnya]
Lanjut ke **Error Corner** untuk membahas kesalahan-kesalahan yang paling sering ditemui saat menulis kode Generic dan Utility Types.
:::
