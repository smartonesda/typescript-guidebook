---
title: "Readonly Property"
description: Mengunci nilai properti interface agar tidak bisa diubah setelah inisialisasi dengan readonly.
---

# Readonly Property

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat properti objek yang tidak bisa diubah setelah dibuat menggunakan kata kunci `readonly`.

---

## Pendahuluan

Ada kalanya data tertentu dalam objek **tidak boleh diubah** setelah pertama kali dimasukkan. Contoh: Nomor Induk Siswa (NIS), ID produk, atau tanggal lahir. Di TypeScript, kita bisa mengunci properti tersebut menggunakan kata kunci `readonly`.

---

## Sintaks

Tambahkan kata kunci `readonly` sebelum nama properti di dalam interface:

```ts
interface Siswa {
  readonly nis: number;
  nama: string;
}
```

---

## Analogi Kehidupan Sehari-hari

### Data pada KTP Fisik

Bayangkan kartu KTP fisik yang sudah dicetak:

- **Nama** (Bisa diubah jika ada penetapan pengadilan, meskipun jarang).
- **Foto** (Bisa diperbarui jika rusak).
- **NIK / Nomor Induk** (Diberikan sekali seumur hidup dan **tidak boleh diubah** sama sekali).

```text
KTP (Objek)
  ├── readonly NIK: 3515...  ← tidak bisa diubah (dikunci)
  └── nama: "Putra"          ← bisa diubah jika perlu
```

Mencoba mengganti NIK di kartu KTP dengan stiker coretan dianggap sebagai tindakan ilegal (menimbulkan error).

---

## Mari Mencoba

Buat `src/bab7/readonly-property.ts`:

```ts
interface Siswa {
  readonly nis: number; // properti dikunci
  nama: string;
}

const siswaA: Siswa = {
  nis: 35150012,
  nama: "Putra Ramadhan"
}

console.log("Awal   :", siswaA)

// 1. Mengubah properti biasa (boleh)
siswaA.nama = "Putra Wijaya"

// 2. Mengubah properti readonly (Error!)
// siswaA.nis = 99999999 // Coba buka komentar ini untuk melihat error:
// Error: Cannot assign to 'nis' because it is a read-only property.

console.log("Sesudah:", siswaA)
```

Jalankan:

```text
tsx src/bab7/readonly-property.ts
```

## Output

```text
Awal   : { nis: 35150012, nama: 'Putra Ramadhan' }
Sesudah: { nis: 35150012, nama: 'Putra Wijaya' }
```

---

## Penjelasan Baris per Baris

- `readonly nis: number;` — mengunci properti `nis` pada interface `Siswa`.
- `siswaA.nama = ...` — nama bukan readonly, sehingga nilainya bisa diubah dari "Putra Ramadhan" menjadi "Putra Wijaya".
- `siswaA.nis = 9999...` — TypeScript langsung mendeteksi dan melarang perubahan nilai `nis` setelah inisialisasi pertama objek.

---

## readonly vs const

Keduanya sama-sama digunakan untuk mengunci nilai agar tidak bisa diubah, tapi memiliki tempat penggunaan yang berbeda:

| Fitur | `const` | `readonly` |
|---|---|---|
| Tempat | Pada **variabel** | Pada **properti objek** (di tipe/interface) |
| Contoh | `const x = 10` | `readonly nis: number` |
| Cara kerja | Mencegah variabel diisi ulang | Mencegah properti objek diubah |

---

## Latihan

Buat interface `Produk` dengan properti `readonly id: string` dan properti biasa `harga: number`. Buat satu objek produk, ubah harganya, dan coba ubah id-nya lalu amati pesan error compiler.

---

## Ringkasan

- `readonly` mengunci properti objek agar tidak bisa diubah setelah inisialisasi.
- Ditulis sebelum nama properti pada interface/tipe.
- Membantu menjaga integritas data penting (seperti ID atau NIK) agar tidak tidak sengaja terubah.

:::tip[Langkah Selanjutnya]
Lanjut ke **Apa itu Type Alias** untuk memasuki bagian kedua dari bab ini.
:::
