---
title: "BAB 7 — Interface & Type Alias"
description: Gambaran BAB 7 — mendefinisikan struktur data dengan kontraktual Interface dan Type Alias di TypeScript.
---

# BAB 7: Interface & Type Alias

## Tujuan Pembelajaran

Setelah menyelesaikan BAB 7, kamu dapat memodelkan data dengan `interface` dan `type` alias, memperluas struktur data dengan `extends`, mengamankan data dengan `readonly`, menggabungkan tipe dengan `union` & `intersection`, serta membatasi nilai konstan dengan `enum`.

---

## Pendahuluan

Di BAB 6 kita belajar tentang objek. Kita tahu objek mempermudah penyimpanan data terelasi. Namun, bagaimana jika kita ingin menetapkan aturan formal (kontrak) bahwa setiap objek siswa di program kita **harus** memiliki format yang sama persis?

Di sinilah peran penting dari **Interface** dan **Type Alias**. Keduanya membantu kita mendesain "bentuk" data sebelum kita menuliskan kodenya.

---

## Peta Materi

```text
INTERFACE & TYPE ALIAS
├── Interface (Kontrak Objek)
│   ├── Apa itu interface?
│   ├── Mengapa interface dibutuhkan?
│   ├── Membuat & menggunakan pada objek
│   ├── Menggunakan pada function
│   ├── Pewarisan (extends)
│   ├── Optional property
│   └── Readonly property
├── Type Alias (Nama Panggilan Tipe)
│   ├── Apa itu type alias?
│   ├── Membuat type alias
│   ├── Union type (Tipe ATAU)
│   └── Intersection type (Tipe DAN)
├── Struktur Pembatas
│   ├── Literal type (Pilihan tepat)
│   └── Enum (Daftar konstan)
└── Praktek & Perbandingan
    ├── Perbedaan Interface vs Type Alias
    ├── Studi kasus sistem biodata modular
    └── Mini project aplikasi data akademik
```

---

## Analogi Awal

Interface seperti **Formulir Pendaftaran Siswa Baru**.

```text
Formulir Pendaftaran (Interface)
┌───────────────────────────────────────┐
│ Nama lengkap : [wajib diisi]          │  ← kolom nama
│ NIS          : [wajib diisi]          │  ← kolom NIS
│ Nomor HP     : [opsional]             │  ← kolom opsional
└───────────────────────────────────────┘
```

Formulir tersebut tidak berisi data siswa. Ia hanya menentukan kolom-kolom apa saja yang **harus diisi** oleh calon siswa. Objek siswa aslinya adalah lembaran kertas yang sudah diisi mengikuti format formulir tersebut.

---

## Mari Mencoba

Buat `src/bab7/cek-kesiapan.ts`:

```ts
interface Siswa {
  nama: string
  umur: number
}

const siswaA: Siswa = {
  nama: "Putra",
  umur: 17
}

console.log("Nama:", siswaA.nama)
console.log("Umur:", siswaA.umur)
```

Jalankan:

```text
tsx src/bab7/cek-kesiapan.ts
```

Output:

```text
Nama: Putra
Umur: 17
```

---

## Latihan

Modifikasi kode di atas: tambahkan properti `kelas: string` ke dalam interface `Siswa`, lalu lengkapi objek `siswaA` dengan properti kelas tersebut agar tidak menghasilkan error compiler.

---

## Ringkasan

- **Interface** adalah kontrak formal untuk menetapkan bentuk objek.
- **Type Alias** adalah cara memberikan nama panggilan baru pada struktur data.
- Keduanya menjaga keamanan data sebelum program dijalankan.

:::tip[Langkah Selanjutnya]
Lanjut ke **Apa itu Interface** untuk memahami konsep dasarnya.
:::
