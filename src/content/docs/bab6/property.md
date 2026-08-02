---
title: "Property"
description: Memahami aturan penamaan properti (key) di dalam object TypeScript.
---

# Property

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menjelaskan aturan penamaan key properti, dan menulis key yang mengandung karakter khusus menggunakan tanda kutip.

---

## Pendahuluan

Key properti pada object bertindak sebagai label. Sama seperti variabel, ada aturan penamaan yang harus dipatuhi. Namun, object memiliki fitur khusus: key bisa ditulis sebagai string jika memerlukan karakter khusus.

---

## Aturan Penamaan Key Properti

Secara umum, ikuti aturan yang sama dengan penamaan variabel (BAB 1):

### 1. Key Standar (Tanpa Tanda Kutip)

Dianjurkan menggunakan **camelCase**:

```ts
const siswa = {
  namaSiswa: "Putra",
  nomorAbsen: 15
}
```

### 2. Key dengan Karakter Khusus (Wajib Tanda Kutip)

Jika key mengandung spasi, tanda minus `-`, atau simbol khusus lainnya, bungkus nama key di dalam tanda kutip `"..."` atau `'...'`:

```ts
const dataSiswa = {
  "nama lengkap": "Putra Ramadhan",
  "nomor-absen": 15,
  "kelas/jurusan": "XI RPL 1"
}
```

:::caution[Gunakan Key Standar Sebisa Mungkin]
Sebisa mungkin gunakan key standar tanpa tanda kutip. Key dengan tanda kutip lebih sulit diakses dan sering membuat kode berantakan.
:::

---

## Analogi Kehidupan Sehari-hari

### Label Pada Laci Sekolah

Bayangkan lemari laci di sekolah.

- Laci standar bertuliskan satu kata: "Matematika", "Fisika", "Ujian".
- Laci khusus yang berlabel panjang bertuliskan kalimat berspasi: "Kertas Ujian Remidi Kelas X".

Label panjang itu tetap valid untuk menandai laci, tetapi lebih repot dibaca dibanding label pendek satu kata.

---

## Visual Illustration

```text
Struktur Properti Object
const object = {
  keyStandar: "nilai",       // ✓ Bersih, tanpa kutip
  "key dengan spasi": 100,    // ✗ Wajib kutip, hindari jika bisa
  "key-dengan-minus": true    // ✗ Wajib kutip
}
```

---

## Mari Mencoba

Buat `src/bab6/property.ts`:

```ts
type DataKustom = {
  namaSiswa: string
  "alamat rumah": string
  "nomor-induk-siswa": number
}

const siswa: DataKustom = {
  namaSiswa: "Putra",
  "alamat rumah": "Sidoarjo",
  "nomor-induk-siswa": 3515001
}

console.log("Nama:", siswa.namaSiswa)
// console.log("Alamat:", siswa.alamat rumah) // Error! Spasi merusak sintaks dot
console.log("Alamat:", siswa["alamat rumah"]) // ✓ Harus menggunakan bracket notation
console.log("NIS   :", siswa["nomor-induk-siswa"])
```

Jalankan:

```text
tsx src/bab6/property.ts
```

## Output

```text
Nama: Putra
Alamat: Sidoarjo
NIS   : 3515001
```

---

## Penjelasan Baris per Baris

- `"alamat rumah"` — properti type menggunakan spasi, wajib dibungkus kutip pada type alias dan object literal.
- `siswa["alamat rumah"]` — properti dengan spasi tidak bisa diakses menggunakan tanda titik (`siswa.alamat rumah` akan dianggap error syntax oleh editor). Kita wajib menggunakan tanda kurung siku `[]` (bracket notation).

---

## Kesalahan yang Sering Terjadi

### ❌ Menulis key dengan spasi tanpa tanda kutip

```ts
const data = {
  nama lengkap: "Putra" // Error! Spasi di luar tanda kutip memicu syntax error
}
```

**Perbaikan:**

```ts
const data = {
  "nama lengkap": "Putra" // ✓
}
```

---

## Tips

:::tip[Pilih camelCase Secara Konsisten]
Jadikan aturan pribadimu untuk **selalu menggunakan camelCase** (`namaLengkap`, `nomorIndukSiswa`) di semua key properti. Ini mempermudah penulisan dan pembacaan kode.
:::

---

## Latihan

Buat object dengan tipe data buatanmu sendiri yang memiliki properti standar camelCase dan minimal satu properti kustom menggunakan tanda minus (misal: `"kode-pos"`). Tampilkan objek tersebut.

---

## Ringkasan

- Key properti standar dianjurkan menggunakan camelCase.
- Key yang mengandung spasi atau karakter khusus wajib dibungkus tanda kutip `"..."`.
- Key bertanda kutip hanya bisa diakses menggunakan bracket notation `object["key"]`.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mengakses Property** untuk mempelajari Dot Notation dan Bracket Notation secara mendetail.
:::
