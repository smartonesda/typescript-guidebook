---
title: "Menambah Property"
description: Cara menyisipkan properti baru ke dalam object setelah object dideklarasikan.
---

# Menambah Property

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menyisipkan properti baru ke dalam object menggunakan properti opsional pada type alias.

---

## Pendahuluan

Terkadang kita perlu membuat object dengan data dasar terlebih dahulu, lalu menyisipkan properti tambahan kemudian saat data baru tersedia (misal: menambahkan nomor telepon setelah siswa mengisinya).

---

## Cara Menambah Properti di TypeScript

Di JavaScript, kamu bisa menambahkan properti baru ke object apa saja kapan saja. Namun di TypeScript, aturan ini dijaga ketat: kamu **hanya boleh** menambahkan properti baru jika properti tersebut sudah dideklarasikan pada cetak biru tipe data sebagai **properti opsional** (`?`).

```ts
type Siswa = {
  nama: string
  nomorHP?: string // properti opsional
}

const siswaA: Siswa = { nama: "Putra" }
siswaA.nomorHP = "0812..." // ✓ Boleh ditambah karena ada di tipe!
```

---

## Analogi Kehidupan Sehari-hari

### Menambahkan Kolom Catatan di Lembar Biodata

Bayangkan lemari arsip map siswa. Pada formulir biodata cetakan sekolah, sudah disediakan satu baris kosong berlabel "Catatan Khusus (Opsional)".

Ketika ada siswa yang membutuhkan catatan medis, guru menuliskan catatan tersebut di baris kosong yang sudah disediakan. Guru tidak diperbolehkan menempelkan kertas atau membuat baris baru sendiri di luar format cetakan formulir resmi.

---

## Visual Illustration

```text
Format Cetak (Type Alias)
type Siswa = { nama: string, email?: string }

Object Awal:
siswa = { nama: "Andi" }

Aksi Tambah:
siswa.email = "andi@smk.sch.id"

Hasil:
siswa = { nama: "Andi", email: "andi@smk.sch.id" } ✓ Valid!
```

---

## Mari Mencoba

Buat `src/bab6/menambah-property.ts`:

```ts
type ProfilSiswa = {
  nama: string
  kelas: string
  // Properti opsional (bisa ditambah nanti)
  nomorTelepon?: string
  alamatRumah?: string
}

const siswaA: ProfilSiswa = {
  nama: "Putra",
  kelas: "XI RPL 1"
}

console.log("Awal   :", siswaA)

// Menambahkan properti baru menggunakan Dot Notation
siswaA.nomorTelepon = "081234567890"

// Menambahkan properti baru menggunakan Bracket Notation
siswaA["alamatRumah"] = "Sidoarjo, Jawa Timur"

console.log("Sesudah:", siswaA)
```

Jalankan:

```text
tsx src/bab6/menambah-property.ts
```

## Output

```text
Awal   : { nama: 'Putra', kelas: 'XI RPL 1' }
Sesudah: {
  nama: 'Putra',
  kelas: 'XI RPL 1',
  nomorTelepon: '081234567890',
  alamatRumah: 'Sidoarjo, Jawa Timur'
}
```

---

## Penjelasan Baris per Baris

- `nomorTelepon?: string` — properti opsional didefinisikan pada type `ProfilSiswa`.
- `siswaA.nomorTelepon = ...` — karena didefinisikan sebagai opsional, TypeScript mengizinkan kita menyisipkan properti baru ini setelah object dibuat.

---

## Kesalahan yang Sering Terjadi

### ❌ Menambah properti yang tidak ada di type alias

```ts
const siswaA: ProfilSiswa = { nama: "Putra", kelas: "XI" }
// siswaA.hobi = "Coding" // Error!
// Property 'hobi' does not exist on type 'ProfilSiswa'.
```

**Perbaikan:** Semua properti baru yang akan ditambahkan wajib dideklarasikan terlebih dahulu di type alias, meskipun opsional.

---

## Tips

:::tip[Gunakan Type Utility Record jika Dinamis]
Jika kamu benar-benar membutuhkan object dinamis yang bisa diisi properti apa saja tanpa cetak biru yang kaku, gunakan tipe `Record<string, any>` (namun gunakan dengan bijak karena keamanan tipe akan berkurang).
:::

---

## Latihan

Buat type alias `Buku` yang memiliki properti wajib `judul` dan properti opsional `jumlahHalaman`. Buat object buku hanya dengan judul, lalu tambahkan properti `jumlahHalaman` di baris berikutnya. Tampilkan.

---

## Ringkasan

- TypeScript melarang penambahan properti baru secara liar pada object bertipe.
- Untuk mengizinkan penambahan properti, deklarasikan properti tersebut sebagai properti opsional (`?`) pada type alias.
- Properti baru ditambahkan menggunakan operator `=` sama seperti mengubah nilai properti.

:::tip[Langkah Selanjutnya]
Lanjut ke **Menghapus Property**.
:::
