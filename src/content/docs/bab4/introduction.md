---
title: "BAB 4 — Function"
description: Gambaran BAB 4 — membuat dan menggunakan fungsi sebagai blok kode yang dapat digunakan ulang.
---

# BAB 4: Function

## Tujuan Pembelajaran

Setelah menyelesaikan BAB 4, kamu dapat membuat fungsi, memanggil fungsi, memberikan data melalui parameter, mendapatkan hasil dari return value, dan mulai membangun program secara modular.

---

## Pendahuluan

Di BAB 1–3, semua kode ditulis secara linear — satu baris di bawah baris berikutnya. Cara ini bekerja, tetapi memiliki satu masalah besar: **kode yang sama harus ditulis berkali-kali**.

Bayangkan kamu memiliki kode untuk menghitung nilai rata-rata. Jika kode itu dibutuhkan di 10 tempat yang berbeda, kamu harus menulis ulang 10 kali. Dan jika ada yang perlu diubah, kamu harus mengubah 10 tempat secara manual.

**Function** (fungsi) hadir untuk menyelesaikan masalah itu.

---

## Peta Materi

```text
FUNCTION
├── Konsep Dasar
│   ├── Apa itu function?
│   └── Mengapa function dibutuhkan?
├── Membuat & Memanggil
│   ├── Membuat function
│   └── Memanggil function
├── Input & Output
│   ├── Parameter & argument
│   ├── Return value
│   └── Multiple parameter
├── Fitur Parameter
│   ├── Optional parameter
│   ├── Default parameter
│   └── Rest parameter
├── Variasi Function
│   ├── Anonymous function
│   ├── Arrow function
│   └── Callback
└── Scope
    └── Variabel lokal vs global
```

---

## Analogi Awal

Function seperti **mesin pembuat jus**.

```text
MESIN JUS
  Masukkan buah (parameter)
        │
        ▼
  [Proses di dalam mesin]
        │
        ▼
  Keluar jus (return value)
```

Kamu tidak perlu memahami cara kerja mesin setiap kali ingin minum jus. Kamu cukup memasukkan buah dan mendapatkan jus. Begitu pula function: kamu mendefinisikannya sekali, lalu menggunakannya berkali-kali tanpa menulis ulang prosesnya.

---

## Mari Mencoba

Buat `src/bab4/cek-kesiapan.ts`:

```ts
function sapa(nama: string): void {
  console.log(`Halo, ${nama}! Selamat datang di BAB 4.`)
}

sapa("Andi")
sapa("Budi")
sapa("Citra")
```

Jalankan:

```text
tsx src/bab4/cek-kesiapan.ts
```

Output:

```text
Halo, Andi! Selamat datang di BAB 4.
Halo, Budi! Selamat datang di BAB 4.
Halo, Citra! Selamat datang di BAB 4.
```

Satu fungsi dipakai tiga kali dengan nilai yang berbeda. Ini adalah kekuatan function.

---

## Latihan

Modifikasi kode di atas: tambahkan nama kelas sebagai parameter kedua dan ubah output menjadi `"Halo, [nama] dari [kelas]!"`.

---

## Ringkasan

- Function adalah blok kode yang dapat digunakan ulang.
- Function mengambil input (parameter) dan menghasilkan output (return value).
- BAB 4 membahas semua aspek function dari dasar hingga arrow function dan callback.

:::tip[Langkah Selanjutnya]
Lanjut ke **Apa itu Function** untuk memahami konsep dasarnya.
:::
