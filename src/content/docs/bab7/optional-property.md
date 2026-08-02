---
title: "Optional Property"
description: Mendefinisikan properti opsional menggunakan tanda ? pada interface di TypeScript.
---

# Optional Property

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat properti opsional pada interface menggunakan tanda `?` dan mengakses nilainya dengan aman.

---

## Pendahuluan

Kita sudah belajar properti opsional pada tipe objek biasa di BAB 6. Di dalam `interface`, konsep properti opsional bekerja dengan cara yang sama persis: menggunakan tanda tanya `?` untuk menandai properti yang boleh tidak diisi.

---

## Sintaks

Tambahkan tanda tanya `?` di antara nama properti dan titik dua `:` pada deklarasi interface:

```ts
interface Siswa {
  nama: string;
  nomorHP?: string; // opsional
}
```

---

## Analogi Kehidupan Sehari-hari

### Kolom Nomor Fax di Formulir

Saat mengisi formulir pendaftaran, terdapat kolom **"Nomor Fax"**. Kebanyakan siswa tidak memiliki mesin fax di rumahnya. Oleh karena itu, di sebelah label dituliskan tanda kurung: `(Opsional / Boleh Kosong)`.

```text
Formulir (Interface)
  ├── Nama Lengkap (Wajib)
  ├── Alamat (Wajib)
  └── Nomor Fax (Opsional ?)
```

Siswa yang tidak punya fax bisa mengosongkan kolom tersebut dan formulir mereka tetap diterima secara sah oleh sekolah.

---

## Mari Mencoba

Buat `src/bab7/optional-property.ts`:

```ts
interface ProfilSiswa {
  nama: string;
  kelas: string;
  email?: string; // properti opsional
}

// 1. Objek tanpa properti opsional (valid)
const siswaA: ProfilSiswa = {
  nama: "Putra",
  kelas: "XI RPL 1"
}

// 2. Objek dengan properti opsional (valid)
const siswaB: ProfilSiswa = {
  nama: "Budi",
  kelas: "XI RPL 2",
  email: "budi@smk.sch.id"
}

function cetakSiswa(s: ProfilSiswa): void {
  // Gunakan nullish coalescing untuk mengamankan nilai opsional
  const emailTampil = s.email ?? "(Email belum diisi)"
  console.log(`Nama: ${s.nama.padEnd(6)} | Email: ${emailTampil}`)
}

console.log("=== Cetak Profil ===")
cetakSiswa(siswaA)
cetakSiswa(siswaB)
```

Jalankan:

```text
tsx src/bab7/optional-property.ts
```

## Output

```text
=== Cetak Profil ===
Nama: Putra  | Email: (Email belum diisi)
Nama: Budi   | Email: budi@smk.sch.id
```

---

## Penjelasan Baris per Baris

- `email?: string;` — tanda `?` menandakan properti boleh dilewatkan.
- `siswaA` dibuat tanpa `email`. TypeScript tidak menampilkan error.
- `s.email ?? "(Email belum diisi)"` — karena `email` siswa A bernilai `undefined`, operator `??` menggantinya dengan nilai default cadangan agar tampilan rapi.

---

## Kesalahan yang Sering Terjadi

### ❌ Mengakses metode properti opsional langsung tanpa pengaman

```ts
console.log(siswaA.email.toUpperCase()) // Error saat runtime jika email undefined!
// Cannot read properties of undefined (reading 'toUpperCase')
```

**Perbaikan:** Selalu gunakan **Optional Chaining** (`?.`) saat berinteraksi dengan properti opsional yang tipe datanya berupa objek/string/array:

```ts
console.log(siswaA.email?.toUpperCase()) // ✓ Aman, menghasilkan undefined
```

---

## Latihan

Buat interface `Komputer` dengan properti wajib `merk` dan properti opsional `antivirus` (string). Buat satu objek komputer tanpa antivirus dan satu objek dengan antivirus, lalu tampilkan nama antivirusnya dengan aman menggunakan `?.` atau `??`.

---

## Ringkasan

- Tanda `?` membuat properti pada interface bersifat opsional (boleh tidak diisi).
- Properti opsional otomatis memiliki tipe gabungan `tipeData | undefined`.
- Gunakan optional chaining `?.` dan nullish coalescing `??` saat mengakses nilainya agar program bebas crash.

:::tip[Langkah Selanjutnya]
Lanjut ke **Readonly Property**.
:::
