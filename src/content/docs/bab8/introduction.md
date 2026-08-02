---
title: "BAB 8 — Object-Oriented Programming"
description: Pendahuluan Object-Oriented Programming (OOP) di TypeScript — konsep dasar, tujuan pembelajaran, dan persiapan.
---

# BAB 8: Object-Oriented Programming (OOP)

## Tujuan Pembelajaran
Setelah menyelesaikan bab ini, kamu diharapkan dapat:
- Menjelaskan konsep dasar Object-Oriented Programming (OOP).
- Membedakan antara Class dan Object.
- Membuat Class lengkap dengan Property, Method, dan Constructor di TypeScript.
- Memahami kegunaan keyword `this` dalam Class.
- Menerapkan Access Modifiers (`public`, `private`, `protected`) untuk enkapsulasi data.
- Mengimplementasikan konsep Inheritance (pewarisan) dan Polymorphism (banyak bentuk).
- Membuat Abstract Class dan menggunakan Static Properties/Methods.
- Menggunakan Getter dan Setter untuk mengontrol akses property.

---

## Pendahuluan

Selamat datang di **BAB 8**! Pada bab-bab sebelumnya, kita telah belajar bagaimana menulis kode secara struktural (prosedural), menggunakan variabel untuk menyimpan data, percabangan untuk logika, perulangan untuk proses otomatis, serta fungsi untuk merapikan kode. 

Namun, ketika kamu mulai membangun sistem yang besar — seperti sistem informasi akademik sekolah, game, atau aplikasi e-commerce — menulis kode secara prosedural biasa akan membuat kode tersebut menjadi sangat panjang, rumit, dan sulit dirawat. Di sinilah **Object-Oriented Programming (OOP)** atau Pemrograman Berbasis Objek hadir sebagai solusi standar industri.

OOP mengajarkan kita cara mengatur dan merancang kode program dengan meniru cara kerja dunia nyata. Kita akan mengelompokkan data dan perilaku (fungsi) ke dalam satu wadah mandiri yang disebut **Object**.

---

## Peta Belajar BAB 8

Bab ini dirancang untuk membimbingmu dari pemahaman paling dasar hingga konsep OOP tingkat lanjut yang biasa digunakan oleh software engineer profesional:

```text
OBJECT-ORIENTED PROGRAMMING (OOP)
├── Konsep Dasar
│   ├── Apa itu OOP?
│   ├── Mengapa butuh OOP?
│   ├── Class (Cetak Biru)
│   └── Object (Hasil Cetak)
├── Anatomi Class
│   ├── Constructor (Proses Konstruksi)
│   ├── Property (Kolom Informasi)
│   ├── Method (Perilaku / Aksi)
│   └── Keyword `this` (Kunci Pengenal)
├── Pilar-Pilar OOP
│   ├── Encapsulation (Access Modifier: public, private, protected)
│   ├── Inheritance (Pewarisan sifat / extends)
│   └── Polymorphism (Banyak bentuk)
├── Fitur Lanjutan Class
│   ├── Abstract Class (Cetak Biru Setengah Jadi)
│   ├── Static Member (Properti/Method Milik Bersama)
│   └── Getter & Setter (Pengontrol Alur Data)
└── Projek Terapan
    ├── Studi Kasus Sistem Informasi Akademik
    └── Mini Project Aplikasi Akademik Berbasis OOP
```

---

## Analogi Awal: Dunia Nyata adalah Kumpulan Objek

Coba perhatikan sekeliling kelasmu. Kamu akan melihat berbagai macam "objek":
- **Siswa** (punya nama, NIS, dan bisa belajar)
- **Guru** (punya nama, NIP, dan bisa mengajar)
- **Laptop** (punya merk, RAM, dan bisa dinyalakan)
- **Motor** (punya nomor polisi, warna, dan bisa dikendarai)

Di dunia nyata, setiap objek memiliki:
1. **Atribut / Informasi** (di dalam pemrograman disebut **Property**).
2. **Kemampuan / Aksi** (di dalam pemrograman disebut **Method**).

OOP adalah cara menulis kode yang memodelkan atribut dan aksi tersebut ke dalam program komputer.

---

## Mari Mencoba: Cek Kesiapan Lingkungan

Untuk memastikan laptopmu siap belajar OOP, mari buat sebuah program OOP sederhana pertama.

Buatlah file baru bernama `src/bab8/cek-kesiapan.ts`:

```ts
class TestKesiapan {
  constructor(public pesan: string) {}

  tampilkanPesan(): void {
    console.log(`[OOP Kesiapan]: ${this.pesan}`);
  }
}

const tes = new TestKesiapan("Lingkungan belajar OOP TypeScript telah siap!");
tes.tampilkanPesan();
```

Jalankan file tersebut menggunakan perintah berikut di terminal kamu:

```text
tsx src/bab8/cek-kesiapan.ts
```

### Output
Jika setup berjalan lancar, kamu akan melihat output seperti ini:
```text
[OOP Kesiapan]: Lingkungan belajar OOP TypeScript telah siap!
```

---

## Latihan
1. Ubah teks di dalam instansiasi `new TestKesiapan(...)` dengan nama lengkapmu sendiri.
2. Jalankan ulang program tersebut di terminal dan amati perubahannya.

---

## Ringkasan
- OOP adalah paradigma pemrograman yang berorientasi pada objek nyata.
- Objek terdiri dari properti (informasi) dan method (tindakan).
- OOP digunakan secara luas untuk merancang sistem aplikasi skala besar agar modular dan mudah dikembangkan.

:::tip[Langkah Selanjutnya]
Lanjut ke **Apa itu OOP** untuk memahami konsep dasarnya secara mendalam.
:::
