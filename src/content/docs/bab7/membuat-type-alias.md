---
title: "Membuat Type Alias"
description: Panduan langkah demi langkah mendefinisikan objek kustom menggunakan kata kunci type di TypeScript.
---

# Membuat Type Alias

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat type alias untuk objek secara mandiri dan memahami kegunaannya dibanding type bawaan.

---

## Pendahuluan

Tugas utama `type` alias mirip dengan `interface`: mendefinisikan bentuk objek secara terstruktur. Namun, ingatlah perbedaan sintaksisnya agar tidak salah tulis.

---

## Sintaks Lengkap Objek dengan Type Alias

```ts
type NamaTipe = {
  properti1: tipeData
  properti2: tipeData
}
```

Perhatikan tanda sama dengan `=` sebelum kurung kurawal pembuka `{`. Ini adalah wajib dalam penulisan type alias.

---

## Analogi Kehidupan Sehari-hari

### Resep Bumbu Masakan (Alias)

Type alias objek seperti **label nama pada stoples bumbu campuran**. Kamu mencampur garam, gula, dan merica, lalu menempelkan label "Bumbu Spesial".

```text
Bumbu Spesial (Type Alias)
  ├── Garam (string)
  ├── Gula (number)
  └── Merica (boolean)
```

Setiap kali resep masakan membutuhkan "Bumbu Spesial", kamu cukup mengambil stoples tersebut tanpa perlu menyebutkan satu per satu bahan campurannya lagi.

---

## Visual Illustration

```text
type Siswa = { nama: string; umur: number }
            ▲
      wajib memakai =

interface Siswa { nama: string; umur: number }
                ▲
          tanpa memakai =
```

---

## Mari Mencoba

Buat `src/bab7/membuat-type.ts`:

```ts
// 1. Membuat Type Alias untuk Objek
type Siswa = {
  nama: string
  umur: number
  jurusan: string
}

// 2. Membuat Objek menggunakan Type Alias
const siswaA: Siswa = {
  nama: "Putra",
  umur: 17,
  jurusan: "RPL"
}

console.log("Objek siswaA:", siswaA)
```

Jalankan:

```text
tsx src/bab7/membuat-type.ts
```

## Output

```text
Objek siswaA: { nama: 'Putra', umur: 17, jurusan: 'RPL' }
```

---

## Kesalahan yang Sering Terjadi

### ✗ Lupa menggunakan tanda sama dengan `=` saat membuat type alias

```ts
type Siswa { // Error!
  nama: string
}
```

**Perbaikan:** Selalu gunakan `=` setelah nama tipe pada deklarasi type alias:

```ts
type Siswa = { // ✓
  nama: string
}
```

---

## Tips

:::tip[Gunakan untuk Struktur Sederhana]
Gunakan `type` alias jika kamu ingin membuat objek data sederhana atau jika kamu memerlukan fitur khusus seperti Union atau Intersection yang tidak dimiliki `interface`.
:::

---

## Latihan

Buat type alias `Laptop` dengan properti: `merk` (string) dan `ram` (number). Buat satu objek laptop yang mengikuti tipe tersebut dan tampilkan.

---

## Ringkasan

- Type alias mendefinisikan objek dengan sintaks `type Nama = { ... }`.
- Wajib menggunakan tanda sama dengan `=` sebelum `{`.
- Membantu menyederhanakan data kompleks menjadi satu nama label yang mudah dibaca.

:::tip[Langkah Selanjutnya]
Lanjut ke **Union Type** untuk belajar tipe data gabungan "ATAU".
:::
