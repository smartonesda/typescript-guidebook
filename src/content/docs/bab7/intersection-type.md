---
title: "Intersection Type"
description: Menggabungkan beberapa tipe objek menjadi satu menggunakan intersection type (&) di TypeScript.
---

# Intersection Type (Tipe Persimpangan)

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menggunakan operator `&` untuk menggabungkan beberapa tipe objek menjadi satu tipe baru yang memiliki seluruh properti gabungan tersebut.

---

## Pendahuluan

Jika `extends` digunakan untuk mewariskan properti pada `interface`, bagaimana cara menggabungkan properti pada `type` alias? Kita menggunakan **Intersection Type** dengan simbol ampersand `&` (dibaca "dan").

---

## Penjelasan Materi

**Intersection Type** menggabungkan beberapa tipe objek menjadi satu tipe baru. Objek yang menggunakan tipe ini **wajib** memiliki seluruh properti dari semua tipe yang digabungkan.

Sintaks dasar:

```ts
type TipeGabungan = TipeA & TipeB;
```

---

## Analogi Kehidupan Sehari-hari

### Mahasiswa yang Juga Guru (Asisten Dosen)

Bayangkan seorang mahasiswa tingkat akhir yang juga bekerja sebagai guru honorer di sekolah.

```text
Manusia A (Mahasiswa DAN Guru)
  ├── Kartu Mahasiswa (properti Mahasiswa)
  └── Slip Gaji Guru (properti Guru)
```

Untuk masuk ke ruang rapat akademik khusus, ia harus menunjukkan **kedua** dokumen tersebut. Ia tidak bisa masuk jika hanya membawa salah satu dokumen. Ia adalah gabungan dari kedua identitas tersebut sekaligus.

---

## Visual Illustration

```text
type A = { nama: string }
type B = { nis: number }

type C = A & B  ──► wajib memiliki: nama DAN nis
```

---

## Mari Mencoba

Buat `src/bab7/intersection-type.ts`:

```ts
type Identitas = {
  nama: string;
  umur: number;
}

type Karyawan = {
  nip: number;
  divisi: string;
}

// Menggabungkan Identitas DAN Karyawan
type StafSekolah = Identitas & Karyawan;

const staf1: StafSekolah = {
  nama: "Pak Budi",  // dari Identitas
  umur: 35,          // dari Identitas
  nip: 19890102,     // dari Karyawan
  divisi: "Tata Usaha" // dari Karyawan
}

console.log("Staf 1:", staf1)
```

Jalankan:

```text
tsx src/bab7/intersection-type.ts
```

## Output

```text
Staf 1: { nama: 'Pak Budi', umur: 35, nip: 19890102, divisi: 'Tata Usaha' }
```

---

## extends vs intersection

Keduanya memiliki tujuan yang mirip (menggabungkan properti), tapi digunakan di tempat berbeda:

- `extends` digunakan untuk memperluas `interface`.
- `&` (intersection) digunakan untuk menggabungkan `type` alias.

---

## Kesalahan yang Sering Terjadi

### ❌ Menggabungkan tipe primitif yang bertolak belakang

```ts
type Aneh = string & number;
// Secara tipe valid, tetapi menghasilkan tipe 'never'
// karena tidak ada data yang bisa berupa string sekaligus number secara bersamaan!
```

**Perbaikan:** Gunakan intersection `&` hanya untuk menggabungkan tipe objek. Untuk tipe primitif, gunakan union `|`.

---

## Latihan

1. Buat tipe `KoordinatX` `{ x: number }`.
2. Buat tipe `KoordinatY` `{ y: number }`.
3. Buat tipe `Titik` hasil gabungan keduanya (`KoordinatX & KoordinatY`).
4. Buat objek `titikA` bertipe `Titik` dan tampilkan.

---

## Ringkasan

- Intersection type (`&`) menggabungkan beberapa tipe objek menjadi satu.
- Hubungan logika: "DAN" (wajib memiliki semua properti).
- Setara dengan fitur `extends` pada interface tetapi digunakan pada `type` alias.

:::tip[Langkah Selanjutnya]
Lanjut ke **Literal Type** untuk membatasi pilihan nilai.
:::
