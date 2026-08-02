---
title: "Operator Nullish"
description: Memberi nilai cadangan untuk null atau undefined dengan operator ?? di TypeScript.
---

# Operator Nullish: `??`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat memakai `??` untuk menampilkan atau memakai nilai cadangan ketika data bernilai `null` atau `undefined`.

---

## Pendahuluan

Data tidak selalu lengkap. Email siswa mungkin belum diisi. Nomor telepon bisa belum tersedia. Program tetap perlu menampilkan informasi yang nyaman dibaca tanpa menghasilkan teks `null`.

Operator **nullish coalescing** `??` menyediakan nilai cadangan untuk kondisi itu.

---

## Analogi Kehidupan Sehari-hari

Bayangkan kamu membawa botol minum cadangan.

```text
Jika botol utama ada air → minum dari botol utama
Jika botol utama kosong/tidak ada → pakai air cadangan
```

`??` bekerja seperti rencana cadangan, tetapi hanya aktif jika nilai utama benar-benar `null` atau `undefined`.

---

## Penjelasan Materi

Bentuk umum:

```ts
nilaiUtama ?? nilaiCadangan
```

- Jika `nilaiUtama` bukan `null` dan bukan `undefined`, hasilnya `nilaiUtama`.
- Jika `nilaiUtama` `null` atau `undefined`, hasilnya `nilaiCadangan`.

---

## Mari Mencoba

Buat `src/bab2/operator-nullish.ts`:

```ts
const namaSiswa: string = "Dewi"
const email: string | null = null
const nomorTelepon: string | undefined = undefined
const jumlahPesan: number = 0

const emailTampil: string = email ?? "Email belum diisi"
const teleponTampil: string = nomorTelepon ?? "Nomor belum diisi"
const pesanTampil: number = jumlahPesan ?? 10

console.log(`Nama: ${namaSiswa}`)
console.log(`Email: ${emailTampil}`)
console.log(`Telepon: ${teleponTampil}`)
console.log(`Jumlah pesan: ${pesanTampil}`)
```

Jalankan:

```text
tsx src/bab2/operator-nullish.ts
```

---

## Output

```text
Nama: Dewi
Email: Email belum diisi
Telepon: Nomor belum diisi
Jumlah pesan: 0
```

---

## Penjelasan Baris per Baris

- `email` diberi tipe `string | null`, jadi boleh teks atau `null`.
- `email ?? "Email belum diisi"` memakai teks cadangan karena email bernilai `null`.
- `nomorTelepon ?? ...` memakai cadangan karena nilainya `undefined`.
- `jumlahPesan` bernilai `0`, bukan nullish. Maka `??` tetap memilih `0`.

---

## `??` vs `||`

Keduanya terlihat serupa, tetapi berbeda:

```ts
const jumlahPesan: number = 0

console.log(jumlahPesan ?? 10) // 0
console.log(jumlahPesan || 10) // 10
```

`||` menganggap `0`, string kosong `""`, dan `false` sebagai nilai falsy lalu memakai cadangan. `??` hanya memakai cadangan untuk `null` atau `undefined`.

:::tip[Pilih ?? untuk Data Opsional]
Gunakan `??` ketika `0`, `false`, atau string kosong masih merupakan nilai yang valid dan harus dipertahankan.
:::

---

## Kesalahan Umum

```ts
const nilai: number | null = null
const tampil = nilai ?? "Belum ada"
```

Kode di atas valid, tetapi tipe hasilnya `number | string`. Jangan memasukkannya ke variabel yang hanya bertipe `number`.

```ts
const tampil: string = nilai ?? "Belum ada"
```

Ini juga tidak valid jika `nilai` bisa number. Ubah angka menjadi string saat ingin digabungkan ke teks:

```ts
const tampil: string = nilai === null ? "Belum ada" : String(nilai)
```

---

## Latihan

Buat variabel `alamat` bertipe `string | null` dan `hobi` bertipe `string | undefined`. Gunakan `??` agar output selalu menampilkan informasi yang ramah dibaca.

---

## Ringkasan

- `??` memberi nilai cadangan untuk `null` atau `undefined`.
- Bentuknya: `nilaiUtama ?? nilaiCadangan`.
- `??` berbeda dari `||` karena tidak mengganti nilai `0`, `false`, atau `""`.

:::tip[Langkah Selanjutnya]
Lanjut ke **Prioritas Operator**.
:::
