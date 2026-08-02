---
title: "Computational Thinking"
description: Belajar cara berpikir seperti programmer — decomposition, pattern recognition, abstraction, dan algorithm.
---

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Menjelaskan apa itu computational thinking
- Menyebutkan empat pilar computational thinking
- Menerapkan cara berpikir ini dalam masalah sehari-hari

---

## Pengantar

Di halaman sebelumnya, kita belajar bahwa programming adalah memberikan instruksi kepada komputer. Tapi sebelum kita bisa memberikan instruksi, kita perlu bisa **berpikir dengan cara yang tepat**.

Ada sebuah cara berpikir yang disebut **Computational Thinking** — cara berpikir yang digunakan oleh programmer untuk memecahkan masalah. Kabar baiknya: cara berpikir ini bisa dipelajari dan dilatih, bukan bakat bawaan lahir.

---

## Apa itu Computational Thinking?

**Computational Thinking** adalah kemampuan memecahkan masalah dengan cara yang terstruktur dan logis — dengan cara yang bisa dimengerti dan dijalankan oleh komputer.

Kemampuan ini terdiri dari **empat pilar utama**:

1. **Decomposition** — memecah masalah besar menjadi masalah-masalah kecil
2. **Pattern Recognition** — menemukan pola atau kesamaan dalam masalah
3. **Abstraction** — fokus pada hal yang penting, abaikan detail yang tidak perlu
4. **Algorithm** — membuat langkah-langkah solusi yang runtut

Mari kita bahas satu per satu.

---

## 1. Decomposition — Memecah Masalah

**Decomposition** artinya memecah satu masalah besar menjadi bagian-bagian kecil yang lebih mudah diselesaikan.

### Analogi:

Bayangkan kamu mendapat tugas membuat nasi goreng untuk 50 orang di acara sekolah. Kalau kamu langsung berpikir "saya harus buat nasi goreng untuk 50 orang", itu terasa overwhelming (kewalahan).

Tapi kalau kamu pecah:

- Berapa banyak bahan yang dibutuhkan?
  - Berapa kg beras?
  - Berapa butir telur?
  - Bumbu apa saja?
- Siapa yang akan memasak?
- Pakai wajan berapa?
- Berapa lama prosesnya?

Tiba-tiba masalah besar itu terasa bisa dikerjakan!

### Dalam Programming:

Membuat aplikasi kasir toko bisa dipecah menjadi:

- Tampilkan daftar produk
- Hitung total harga
- Proses pembayaran
- Cetak struk

---

## 2. Pattern Recognition — Menemukan Pola

**Pattern Recognition** artinya menemukan kesamaan atau pola dari berbagai masalah atau situasi.

### Analogi:

Kamu belajar bahwa luas persegi panjang = panjang × lebar. Ketika kamu diminta menghitung luas lantai kamar, luas papan tulis, atau luas sawah — semuanya menggunakan rumus yang sama! Kamu mengenali **polanya**.

### Dalam Programming:

Kalau kamu tahu cara menampilkan satu data, kamu bisa menampilkan seribu data dengan cara yang sama — hanya diulang. Itulah kekuatan mengenali pola.

---

## 3. Abstraction — Fokus pada yang Penting

**Abstraction** artinya mengabaikan detail yang tidak perlu dan fokus pada hal-hal yang penting untuk menyelesaikan masalah.

### Analogi:

Saat kamu menggunakan Google Maps, kamu tidak perlu tahu:

- Bagaimana satelit GPS bekerja
- Berapa juta baris kode yang ada di baliknya
- Bagaimana data lalu lintas dikumpulkan

Kamu cukup tahu: **masukkan tujuan → ikuti petunjuk**. Detail teknisnya sudah diabstraksikan (disembunyikan).

### Dalam Programming:

Saat kamu menggunakan fungsi `console.log()` di TypeScript, kamu tidak perlu tahu bagaimana teks itu bisa muncul di layar. Kamu cukup tahu: fungsi ini berguna untuk menampilkan teks.

---

## 4. Algorithm — Langkah-langkah Solusi

**Algorithm** adalah urutan langkah-langkah yang jelas dan runtut untuk menyelesaikan suatu masalah.

### Analogi:

Resep masakan adalah algorithm. Prosedur darurat kebakaran di sekolah adalah algorithm. Instruksi perakitan furnitur dari IKEA adalah algorithm.

Sebuah algorithm yang baik harus:

- **Jelas** — setiap langkah tidak boleh ambigu
- **Runtut** — urutan langkahnya masuk akal
- **Berhenti** — ada titik akhirnya, tidak berjalan selamanya

### Contoh Algorithm Sederhana:

Masalah: Tentukan apakah seseorang lulus ujian (nilai ≥ 70)

```
MULAI
  1. Minta input nilai siswa
  2. Jika nilai >= 70
       Tampilkan "LULUS"
     Jika tidak
       Tampilkan "TIDAK LULUS"
  3. Selesai
AKHIR
```

Ini belum kode TypeScript — ini hanya langkah-langkah logis yang disebut **pseudocode**. Nanti kita akan mengubah ini menjadi kode nyata.

---

## Ilustrasi: Hubungan Keempat Pilar

```
Masalah Besar
      │
      ▼
 DECOMPOSITION ─── Pecah jadi masalah kecil
      │
      ▼
PATTERN RECOGNITION ─── Temukan kesamaan/pola
      │
      ▼
  ABSTRACTION ─── Fokus pada yang penting saja
      │
      ▼
   ALGORITHM ─── Buat langkah-langkah solusi
      │
      ▼
    Program ✓
```

---

## Latihan Berpikir

Coba terapkan computational thinking untuk masalah ini:

**Masalah:** Buat program yang menghitung nilai rata-rata 5 mata pelajaran siswa.

Coba jawab:

1. **Decomposition:** Apa saja bagian-bagian dari masalah ini?
2. **Pattern Recognition:** Apakah ada pola dalam langkah penyelesaiannya?
3. **Abstraction:** Informasi apa yang penting? Apa yang bisa diabaikan?
4. **Algorithm:** Tulis langkah-langkah solusinya!

:::tip[Tips]
Jangan langsung berpikir tentang kodenya dulu. Selesaikan masalahnya dulu di kepala (atau di kertas), baru kemudian terjemahkan ke kode.
:::

---

## Ringkasan

| Pilar                   | Artinya                                           |
| ----------------------- | ------------------------------------------------- |
| **Decomposition**       | Pecah masalah besar menjadi bagian kecil          |
| **Pattern Recognition** | Temukan pola dan kesamaan                         |
| **Abstraction**         | Fokus pada yang penting, abaikan yang tidak perlu |
| **Algorithm**           | Buat langkah-langkah solusi yang runtut           |

Computational thinking bukan hanya berguna dalam programming — ini adalah cara berpikir yang berguna dalam kehidupan sehari-hari.

:::tip[Langkah Selanjutnya]
Lanjut ke halaman **Mengenal Dunia Web** untuk belajar bagaimana internet dan website bekerja.
:::
