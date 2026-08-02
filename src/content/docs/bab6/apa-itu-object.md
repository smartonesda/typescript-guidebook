---
title: "Apa itu Object?"
description: Memahami konsep dasar object sebagai kumpulan pasangan kunci dan nilai untuk mendeskripsikan entitas.
---

# Apa itu Object?

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menjelaskan apa itu object, key, value, dan mengenali struktur object literal sederhana.

---

## Pendahuluan

Saat kita membayangkan "siswa", kita tidak membayangkan sekadar teks nama atau angka nilai. Kita membayangkan satu kesatuan entitas: dia bernama Putra, berumur 17, kelas XI RPL, dan memiliki nomor absen 15.

Di TypeScript, cara terbaik untuk merepresentasikan entitas nyata tersebut adalah dengan menggunakan **Object**.

---

## Penjelasan Materi

**Object** adalah tipe data terstruktur yang menyimpan kumpulan data berupa pasangan **key (kunci)** dan **value (nilai)**.

- **Key** (atau disebut juga nama properti) bertindak sebagai nama label.
- **Value** adalah data nyata yang disimpan di dalam label tersebut.

Struktur dasar object literal:

```ts
const namaObject = {
  key1: value1,
  key2: value2
}
```

Ciri khas object:
1. Dibungkus kurung kurawal `{}`.
2. Menggunakan titik dua `:` untuk memisahkan key dan value.
3. Menggunakan koma `,` untuk memisahkan antar pasangan key-value.

---

## Analogi Kehidupan Sehari-hari

### Kolom Pada KTP

Bayangkan kartu KTP (Kartu Tanda Penduduk). KTP memiliki beberapa kolom:

```text
Nama          : Putra Ramadhan  ← key: Nama, value: Putra
NIK           : 3515...         ← key: NIK, value: 3515...
Alamat        : Sidoarjo        ← key: Alamat, value: Sidoarjo
Status        : Belum Kawin     ← key: Status, value: Belum Kawin
```

KTP tersebut adalah **object**. Kolom-kolom di sebelah kiri adalah **key**, dan isian di sebelah kanan adalah **value**.

---

## Visual Illustration

```text
Object: siswa
┌───────────────────────────────────────┐
│ nama  (key)  ──► "Putra"       (value)│
│ umur  (key)  ──► 17            (value)│
│ aktif (key)  ──► true          (value)│
└───────────────────────────────────────┘
```

---

## Mari Mencoba

Buat `src/bab6/apa-itu-object.ts`:

```ts
// Membuat objek siswa
const profilSiswa = {
  nama: "Putra Ramadhan",
  umur: 17,
  nomorAbsen: 15,
  sudahLulus: false
}

console.log("Tipe profilSiswa:", typeof profilSiswa)
console.log("Profil Lengkap  :", profilSiswa)
```

Jalankan:

```text
tsx src/bab6/apa-itu-object.ts
```

## Output

```text
Tipe profilSiswa: object
Profil Lengkap  : { nama: 'Putra Ramadhan', umur: 17, nomorAbsen: 15, sudahLulus: false }
```

---

## Penjelasan Baris per Baris

- `typeof profilSiswa` — menghasilkan tipe `"object"`.
- `nama`, `umur`, `nomorAbsen`, `sudahLulus` — adalah key (kunci properti).
- `"Putra Ramadhan"`, `17`, `15`, `false` — adalah value (nilai properti).
- Pasangan key-value ditulis di dalam kurung kurawal `{}` dan dipisahkan oleh koma.

---

## Kesalahan yang Sering Terjadi

### ❌ Menggunakan titik koma (;) bukannya koma (,) untuk memisahkan properti

```ts
const siswa = {
  nama: "Putra"; // Error!
  umur: 17;      // Error!
}
```

**Perbaikan:** Selalu gunakan koma `,` untuk memisahkan pasangan properti dalam object literal.

---

## Tips

:::tip[Koma Terakhir (Trailing Comma)]
Menambahkan koma di properti terakhir diperbolehkan dan sangat dianjurkan. Ini mempermudah kita ketika ingin menambahkan properti baru di baris berikutnya:

```ts
const siswa = {
  nama: "Putra",
  umur: 17, // koma di akhir ini sangat bagus!
}
```
:::

---

## Latihan

Buat sebuah object bernama `motor` yang mendeskripsikan motormu (atau motor impianmu) dengan properti: `merk` (string), `warna` (string), dan `tahunRilis` (number). Tampilkan objek tersebut.

---

## Ringkasan

- **Object** adalah kumpulan pasangan key (kunci) dan value (nilai).
- Ditulis menggunakan kurung kurawal `{}`.
- Key dan value dipisahkan titik dua `:`, antar properti dipisahkan koma `,`.
- Object mewakili entitas nyata dengan berbagai properti.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mengapa Object** untuk melihat perbedaannya dengan variabel biasa dan array.
:::
