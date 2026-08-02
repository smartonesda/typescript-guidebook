---
title: "Challenge BAB 2"
description: Sepuluh soal latihan operator dan percabangan dari mudah ke menengah.
---

# Challenge BAB 2

## Tujuan Pembelajaran

Setelah mengerjakan challenge ini, kamu dapat mengukur pemahamanmu tentang operator dan percabangan, lalu mengetahui topik mana yang perlu dipelajari ulang.

---

## Pendahuluan

Kerjakan setiap soal tanpa melihat kembali contoh kode. Jika buntu, baca ulang halaman materi yang berkaitan, coba lagi, baru tanya guru.

:::tip[Aturan Challenge]
Buat satu file per soal di `src/bab2/challenge/`. Contoh: `src/bab2/challenge/soal-1.ts`.
:::

Cara menjalankan:

```text
tsx src/bab2/challenge/soal-1.ts
```

---

## Challenge 1 — Hitung dan Tampilkan

**Tingkat: Mudah**

Simpan dua angka. Hitung penjumlahan, pengurangan, perkalian, dan pembagiannya. Tampilkan semua hasil dengan template literal.

---

## Challenge 2 — Sisa Bagi

**Tingkat: Mudah**

Masukkan nomor absen. Tampilkan apakah nomor tersebut genap atau ganjil menggunakan operator `%`.

---

## Challenge 3 — Perbarui Saldo

**Tingkat: Mudah**

Buat variabel `saldo = 100000`. Lakukan tiga operasi penugasan: setor `50000`, belanja `30000`, dan belanja lagi `15000`. Tampilkan saldo setelah setiap perubahan.

---

## Challenge 4 — Bandingkan Nilai

**Tingkat: Mudah**

Simpan dua nilai ujian siswa berbeda. Tampilkan perbandingan: siapa yang nilainya lebih tinggi, sama, atau lebih rendah.

---

## Challenge 5 — Cek Syarat Gabungan

**Tingkat: Mudah**

Siswa boleh mengikuti ujian akhir jika nilai tugas minimal 70 **dan** kehadiran minimal 80. Buat program yang memeriksa syarat tersebut dan tampilkan hasilnya.

---

## Challenge 6 — Kategori BMI Sederhana

**Tingkat: Menengah**

Simpan berat badan dalam kilogram dan tinggi badan dalam meter. Hitung BMI menggunakan rumus:

```text
BMI = berat / (tinggi * tinggi)
```

Tampilkan kategori berdasarkan nilai BMI:

- Di bawah 18.5: Kurus
- 18.5 sampai 24.9: Normal
- 25 ke atas: Kelebihan berat

---

## Challenge 7 — Kasir Sederhana

**Tingkat: Menengah**

Simpan harga per item dan jumlah item. Hitung total belanja. Jika total di atas 100000, beri diskon 10%. Tampilkan total sebelum diskon, diskon, dan total setelah diskon.

---

## Challenge 8 — Jadwal Harian

**Tingkat: Menengah**

Gunakan `switch` untuk variabel `waktu` yang berisi `"pagi"`, `"siang"`, `"sore"`, atau `"malam"`. Tampilkan kegiatan yang sesuai untuk setiap waktu.

---

## Challenge 9 — Nilai Tuntas

**Tingkat: Menengah**

Buat program yang memeriksa tiga nilai mata pelajaran. Program menampilkan:

- Nilai mana yang belum tuntas (di bawah 75).
- Apakah semua mata pelajaran sudah tuntas.
- Pesan motivasi berbeda untuk tuntas semua dan ada yang belum tuntas.

---

## Challenge 10 — Laporan Siswa Lengkap

**Tingkat: Menengah**

Buat laporan siswa dengan:

- Biodata minimal 5 variabel (dari BAB 1).
- Tiga nilai mata pelajaran.
- Rata-rata dihitung otomatis.
- Grade ditentukan dengan `else if`.
- Status lulus atau remedial.
- Syarat kehadiran diperiksa.
- Laporan ditampilkan dengan template literal multi-baris.
- Minimal tiga komentar berguna.

---

## Checklist Sebelum Menganggap Selesai

- [ ] File bertipe `.ts` dan dijalankan dengan `tsx`
- [ ] Tidak ada error TypeScript yang diabaikan
- [ ] Nama variabel camelCase dan deskriptif
- [ ] Tipe data sesuai
- [ ] Kondisi dan operator yang dipakai logis
- [ ] Output mudah dibaca

---

## Jika Buntu

1. Baca kembali tujuan soal.
2. Rancang data apa saja yang dibutuhkan.
3. Tulis variabel satu per satu.
4. Tambahkan logika setelah data siap.
5. Coba ubah nilai data dan lihat apakah output berubah sesuai harapan.

:::note[Tidak Ada Jawaban Langsung]
Challenge sengaja tidak menyertakan jawaban. Minta guru memeriksa hasilmu setelah selesai.
:::

---

## Latihan Tambahan

Setelah semua challenge selesai, pilih satu challenge yang paling sulit bagimu. Hapus filenya dan tulis ulang dari nol. Ini melatih pemahaman, bukan hanya hasil akhir.

---

## Ringkasan

- Ada 10 challenge dari mudah ke menengah.
- Kerjakan tanpa menyalin jawaban dari materi sebelumnya.
- Gunakan TSX untuk menjalankan setiap file.
- Jika buntu, rancang data dan logika terlebih dahulu.

:::tip[Langkah Selanjutnya]
Lanjut ke **Error Corner** untuk membahas kesalahan paling sering di BAB 2.
:::
