---
title: "Database Ecosystem — BAB 13"
description: Memahami ekosistem database relasional dan non-relasional serta penggunaan ORM di TypeScript.
---

# Database Ecosystem

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Membedakan antara database relasional (SQL) dan non-relasional (NoSQL).
- Mengenali database terpopuler (PostgreSQL, MySQL, MongoDB).
- Memahami peran Prisma ORM dalam menghubungkan kode TypeScript dengan database.

---

## Pendahuluan
Aplikasi yang kita buat di Final Project BAB 11 menyimpan data di dalam array memori RAM. Jika program dimatikan, semua data terhapus. Untuk menyimpan data secara permanen dan aman, kita membutuhkan **Database**.

---

## Penjelasan: SQL, NoSQL, dan ORM

Ada dua kategori utama sistem database yang sering digunakan di industri:

### 1. Database Relasional (SQL)
Data disimpan di dalam tabel berkolom yang kaku dan saling berelasi (dihubungkan).
- **Contoh**: **MySQL** (sangat populer di sekolah), **PostgreSQL** (sangat populer di startup modern), dan **SQLite** (database file ringan).
- Cocok untuk data terstruktur seperti data keuangan atau nilai akademik siswa.

### 2. Database Non-Relasional (NoSQL)
Data disimpan sebagai dokumen JSON yang fleksibel tanpa relasi tabel yang rumit.
- **Contoh**: **MongoDB**.
- Cocok untuk data yang strukturnya sering berubah-ubah secara cepat.

### 3. ORM (Object-Relational Mapping)
Menghubungkan database SQL dengan kode program menggunakan SQL query manual sangat melelahkan dan rawan typo. Kita menggunakan **ORM** seperti **Prisma ORM** di TypeScript. 

Prisma mendeteksi tabel database dan otomatis menghasilkan tipe data TypeScript (*Type-Safe*) untuk objek database kita. Kita bisa mengambil data dari database semudah mengakses properti objek biasa.

---

## Visual Illustration: Peran Prisma ORM

```text
[ KODE TYPESCRIPT ] ◄──► [ PRISMA ORM ] ◄──► [ DATABASE SQL (PostgreSQL/MySQL) ]
(Menggunakan objek)     (Menerjemahkan)        (Tabel data murni)
```

---

## Tips Dunia Industri
:::note[Pelajari PostgreSQL dan Prisma]
Kombinasi **PostgreSQL** sebagai database dan **Prisma ORM** sebagai penghubung adalah standar *stack* teknologi yang sangat disukai oleh industri startup modern saat ini karena menjamin keamanan tipe data secara penuh dari server ke database.
:::

---

## Langkah Selanjutnya
Mari pelajari cara memastikan kode kita bebas bug secara otomatis pada halaman **Testing**.

---

## Ringkasan
- Database menyimpan data aplikasi secara permanen.
- SQL (MySQL/PostgreSQL) menyimpan data dalam tabel terstruktur. NoSQL (MongoDB) menyimpan data dokumen JSON fleksibel.
- **Prisma ORM** mempermudah interaksi kode TypeScript dengan database secara aman (*type-safe*).
