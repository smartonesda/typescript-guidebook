---
title: "Challenge BAB 1"
description: Sepuluh soal latihan dari tingkat mudah hingga menengah untuk menguji pemahaman variabel dan tipe data TypeScript.
---

# Challenge BAB 1

## Tujuan Pembelajaran

Setelah mengerjakan challenge ini, kamu akan mampu:

- Mengukur pemahaman sendiri tentang variabel dan tipe data
- Menulis program kecil tanpa menyalin contoh
- Mengenali konsep mana yang masih perlu dipelajari ulang

---

## Pendahuluan

Sekarang saatnya menguji diri sendiri. Sepuluh challenge di halaman ini disusun dari mudah ke menengah.

**Jangan melihat contoh kode halaman lain dulu.** Coba kerjakan dengan pemahamanmu sendiri. Jika benar-benar buntu, baca ulang halaman materi yang berkaitan, lalu coba lagi.

:::tip[Aturan Challenge]
Buat satu file untuk setiap soal di folder `src/bab1/challenge/`. Contoh: `src/bab1/challenge/soal-1.ts`.
:::

---

## Cara Menjalankan Jawaban

Setelah membuat file, jalankan dengan pola berikut:

```text
tsx src/bab1/challenge/soal-1.ts
```

Ganti `soal-1.ts` sesuai nomor soal yang sedang dikerjakan.

---

## Challenge 1 — Data Diri Dasar

**Tingkat: Mudah**

Buat tiga variabel:

- `nama` bertipe string
- `umur` bertipe number
- `sudahAktif` bertipe boolean

Tampilkan ketiganya dengan `console.log()`.

**Target output contoh:**

```text
Nama: Putra
Umur: 17
Status aktif: true
```

---

## Challenge 2 — let atau const?

**Tingkat: Mudah**

Buat program dengan data berikut:

- Nama sekolah (tidak berubah)
- Tahun masuk (tidak berubah)
- Kelas saat ini (bisa berubah)

Pilih `let` atau `const` dengan tepat. Lalu ubah kelas saat ini menjadi kelas berikutnya dan tampilkan sebelum/sesudahnya.

---

## Challenge 3 — Hitung Nilai

**Tingkat: Mudah**

Buat tiga variabel nilai angka:

- Matematika
- Bahasa Indonesia
- Bahasa Inggris

Hitung total dan rata-ratanya. Tampilkan hasil dengan template literal.

**Target output contoh:**

```text
Total nilai: 255
Rata-rata: 85
```

---

## Challenge 4 — Cek Kelulusan

**Tingkat: Mudah**

Buat variabel `nilaiAkhir`. Buat boolean `lulus` yang bernilai `true` jika nilai minimal 75.

Tampilkan salah satu teks berikut menggunakan ternary operator:

```text
Status: LULUS
```

atau:

```text
Status: BELUM LULUS
```

---

## Challenge 5 — Rapikan Nama

**Tingkat: Mudah**

Buat variabel string berisi nama dengan spasi berlebihan, misalnya:

```ts
const namaInput = "   putra ramadhan   "
```

Tampilkan:

1. Nama setelah `.trim()`
2. Nama dalam huruf besar
3. Jumlah karakter nama setelah dirapikan

---

## Challenge 6 — Status Tugas dengan Literal Type

**Tingkat: Menengah**

Buat literal type `StatusTugas` yang hanya mengizinkan:

- `"belum"`
- `"dikerjakan"`
- `"dikumpulkan"`

Buat variabel status tugas menggunakan tipe tersebut. Tampilkan statusnya.

Lalu coba isi dengan nilai `"selesai banget"` dan amati error TypeScript. Setelah itu, kembalikan ke nilai valid.

---

## Challenge 7 — Kontak Opsional

**Tingkat: Menengah**

Buat biodata singkat yang memiliki:

- Nama (`string`)
- Kelas (`string`)
- Email (`string | null`)

Jika email bernilai `null`, tampilkan `"Email belum diisi"`. Jika ada email, tampilkan email tersebut. Gunakan operator `??`.

---

## Challenge 8 — Data Tidak Dikenal

**Tingkat: Menengah**

Buat fungsi bernama `prosesData` dengan satu parameter bertipe `unknown`.

Aturan fungsi:

- Jika data adalah string, tampilkan dalam huruf besar
- Jika data adalah number, tampilkan hasil kali dua
- Jika data adalah boolean, tampilkan `"Status aktif"` atau `"Status nonaktif"`
- Jika tipe lain, tampilkan `"Data tidak didukung"`

Panggil fungsi minimal empat kali dengan data berbeda.

---

## Challenge 9 — Laporan Belanja Kantin

**Tingkat: Menengah**

Buat program laporan belanja sederhana:

- Nama pembeli (`string`)
- Harga makanan (`number`)
- Harga minuman (`number`)
- Uang yang dibawa (`number`)
- Status pembayaran (`boolean`)

Hitung total belanja dan sisa uang. Tampilkan laporan rapi menggunakan template literal multi-baris.

Tambahkan kondisi boolean: pembayaran dianggap cukup jika uang yang dibawa lebih besar atau sama dengan total belanja.

---

## Challenge 10 — Biodata Siswa Versi Kamu

**Tingkat: Menengah**

Buat aplikasi biodata siswa dari nol tanpa menyalin Mini Project. Program minimal memiliki:

- Judul aplikasi (`const`)
- Nama, kelas, sekolah, alamat (`string`)
- Umur dan nomor absen (`number`)
- Jurusan menggunakan literal type
- Email menggunakan `string | null`
- Status aktif (`boolean`)
- Minimal satu nilai yang dihitung
- Template literal multi-baris
- Minimal tiga komentar yang berguna

Gunakan data diri kamu atau data fiktif yang sopan.

---

## Checklist Sebelum Menganggap Selesai

Untuk setiap soal, cek:

- [ ] File disimpan dengan ekstensi `.ts`
- [ ] Program dijalankan dengan `tsx`
- [ ] Tidak ada error TypeScript yang diabaikan
- [ ] Nama variabel menggunakan camelCase
- [ ] Tipe data sesuai dengan nilai
- [ ] Output mudah dibaca
- [ ] Kamu mengerti setiap baris yang ditulis

---

## Jika Kamu Buntu

Jangan langsung menyerah. Ikuti urutan ini:

1. Baca lagi tujuan soalnya
2. Tulis data apa saja yang dibutuhkan di kertas
3. Tentukan tipe data setiap nilai
4. Buat variabel satu per satu
5. Tampilkan dulu nilai variabel dengan `console.log()`
6. Baru tambahkan perhitungan atau kondisi
7. Baca Error Corner jika muncul pesan error

:::note[Tidak Ada Jawaban di Halaman Ini]
Challenge sengaja tidak menyertakan jawaban langsung. Tujuannya agar kamu benar-benar berpikir dan berlatih. Minta guru untuk memeriksa hasil pekerjaanmu jika sudah selesai.
:::

---

## Latihan Tambahan

Setelah menyelesaikan semua soal, pilih satu challenge yang paling sulit bagimu dan tulis ulang programnya dari nol tanpa melihat file sebelumnya. Ini melatih ingatan dan pemahaman, bukan hanya kemampuan menyalin.

---

## Ringkasan

- Ada 10 challenge dari mudah ke menengah
- Kerjakan tanpa menyalin jawaban dari contoh
- Gunakan TSX untuk menjalankan setiap file
- Jika buntu, pecah masalah menjadi data kecil dan tipe yang jelas
- Error adalah petunjuk untuk memperbaiki kode, bukan alasan berhenti

:::tip[Langkah Selanjutnya]
Lanjut ke **Error Corner BAB 1** untuk membahas error variabel dan tipe data yang paling sering muncul.
:::
