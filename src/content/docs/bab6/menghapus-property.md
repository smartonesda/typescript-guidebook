---
title: "Menghapus Property"
description: Menggunakan kata kunci delete untuk menghapus properti dari sebuah object di TypeScript.
---

# Menghapus Property

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menghapus properti dari object menggunakan operator `delete` pada properti opsional.

---

## Pendahuluan

Sama seperti menambah, ada kalanya kita perlu membuang informasi tertentu dari object. Contoh: menghapus data email ketika siswa memutuskan untuk menghapus kontaknya dari sistem sekolah. Kita menggunakan operator `delete` untuk hal ini.

---

## Cara Menghapus Properti

Gunakan operator `delete` diikuti akses properti objek:

```ts
delete objek.properti
// atau
delete objek["properti"]
```

Di TypeScript, properti yang boleh dihapus **wajib** merupakan properti opsional (`?`) pada type alias. Kita tidak boleh menghapus properti wajib.

---

## Analogi Kehidupan Sehari-hari

### Menghapus Info dengan Penghapus

Bayangkan lembar biodata kertas. Di kolom "Nomor Telepon Rumah", tertulis nomor telepon. Karena nomor rumah sudah tidak aktif, kamu **menghapusnya secara permanen** menggunakan tipex sehingga kolom tersebut menjadi kosong kembali.

```text
Sebelum:  Profil Budi -> nomorTelepon: "031..."
Tindakan: delete Profil Budi -> nomorTelepon
Sesudah:  Profil Budi -> nomorTelepon: undefined (kosong)
```

---

## Visual Illustration

```text
const siswa = { nama: "Putra", email: "putra@smk.sch.id" }

delete siswa.email

Hasil:
Siswa
┌─────────────────────┐
│ nama  → "Putra"     │
└─────────────────────┘   (properti email telah dibuang)
```

---

## Mari Mencoba

Buat `src/bab6/menghapus-property.ts`:

```ts
type ProfilSiswa = {
  nama: string
  kelas: string
  email?: string // properti opsional (boleh dihapus)
}

const siswaA: ProfilSiswa = {
  nama: "Putra",
  kelas: "XI RPL 1",
  email: "putra@smk.sch.id"
}

console.log("Awal   :", siswaA)

// Menghapus properti email
delete siswaA.email

console.log("Sesudah:", siswaA)
console.log("Cek email:", siswaA.email) // menghasilkan undefined
```

Jalankan:

```text
tsx src/bab6/menghapus-property.ts
```

## Output

```text
Awal   : { nama: 'Putra', kelas: 'XI RPL 1', email: 'putra@smk.sch.id' }
Sesudah: { nama: 'Putra', kelas: 'XI RPL 1' }
Cek email: undefined
```

---

## Penjelasan Baris per Baris

- `delete siswaA.email` — menghapus properti `email` beserta nilainya secara permanen dari object `siswaA`.
- Setelah dihapus, mengakses `siswaA.email` akan menghasilkan `undefined`.
- TypeScript mengizinkan penghapusan karena `email` adalah properti opsional.

---

## Kesalahan yang Sering Terjadi

### ❌ Menghapus properti wajib (non-optional)

```ts
// delete siswaA.nama // Error!
// The operand of a 'delete' operator must be optional.
```

**Perbaikan:** Properti yang didefinisikan wajib pada type alias tidak boleh dihapus karena object harus selalu memiliki properti tersebut agar tetap dianggap valid.

---

## Latihan

Buat type alias `Komputer` dengan properti wajib `merk` dan properti opsional `antivirus`. Buat object komputer lengkap dengan antivirus, lalu hapus properti `antivirus` tersebut. Tampilkan object sebelum dan sesudah dihapus.

---

## Ringkasan

- Properti object dihapus menggunakan operator `delete`.
- Hanya properti opsional (`?`) pada type alias yang boleh dihapus.
- Mengakses properti yang sudah dihapus menghasilkan `undefined`.

:::tip[Langkah Selanjutnya]
Lanjut ke **Nested Object** untuk belajar objek di dalam objek.
:::
