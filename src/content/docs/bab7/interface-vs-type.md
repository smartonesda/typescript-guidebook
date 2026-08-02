---
title: "Interface vs Type Alias"
description: Perbandingan lengkap kapan menggunakan Interface dan kapan menggunakan Type Alias di TypeScript.
---

# Interface vs Type Alias

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membandingkan `interface` dan `type` alias secara objektif serta memilih alat yang tepat untuk berbagai skenario pemodelan data.

---

## Pendahuluan

Kedua fitur ini memiliki banyak kesamaan fungsi. Keduanya bisa mendefinisikan objek, mendukung properti opsional, dan mendukung properti readonly. Namun, ada perbedaan fundamental dalam cara kerja dan kapabilitasnya.

---

## Tabel Perbandingan Utama

| Fitur | `interface` | `type` Alias |
|---|---|---|
| Kata Kunci | `interface` | `type` |
| Sintaks `=` | Tidak menggunakan `=` | Menggunakan `=` |
| Pewarisan | Menggunakan `extends` | Menggunakan `&` (intersection) |
| Tipe Primitif | Tidak bisa | Bisa (misal: `type Nama = string`) |
| Union Type (`\|`) | Tidak bisa langsung | Bisa (sangat direkomendasikan) |
| Deklarasi Ulang (Merge) | Bisa (otomatis digabung) | Tidak bisa (akan error jika nama sama) |

---

## Perbedaan Penting 1: Deklarasi Ulang (Declaration Merging)

Jika kamu mendeklarasikan dua `interface` dengan nama yang sama di file yang sama, TypeScript akan otomatis **menggabungkan** propertinya. `type` alias tidak bisa melakukan ini.

```ts
// BISA MERGE (Valid)
interface Siswa { nama: string; }
interface Siswa { umur: number; }
// Hasilnya Siswa memiliki nama DAN umur

// ERROR (Tidak Valid)
type Guru = { nama: string; }
type Guru = { umur: number; } // Error: Duplicate identifier 'Guru'.
```

---

## Perbedaan Penting 2: Dukungan Tipe Non-Objek

`type` alias jauh lebih fleksibel karena bisa mewakili tipe data non-objek seperti primitif, union, dan tuple:

```ts
type ID = string | number; // Union (Bisa)
type Koordinat = [number, number]; // Tuple (Bisa)

// Interface tidak bisa melakukan hal di atas. Interface hanya untuk objek.
```

---

## Rekomendasi Penggunaan (Kapan pakai mana?)

### Gunakan `interface` jika:

- Kamu mendefinisikan struktur objek standar yang akan di-extends oleh objek lain.
- Kamu sedang mendesain API atau library yang propertinya mungkin perlu diperluas oleh developer lain (melalui declaration merging).
- Struktur data berkaitan erat dengan Object-Oriented Programming (OOP) yang akan menggunakan `class` dan `implements`.

### Gunakan `type` jika:

- Kamu perlu menggunakan Union Type (misal: `string | number`).
- Kamu perlu menggunakan Intersection Type untuk menggabungkan tipe secara dinamis.
- Kamu mendefinisikan alias sederhana untuk tipe primitif atau tuple.
- Struktur datanya sederhana dan tidak membutuhkan pewarisan bertingkat.

---

## Analogi Kehidupan Sehari-hari

### Kertas HVS Kosong (Interface) vs Stempel Permanen (Type)

- **Interface** seperti **lembaran kertas HVS**. Jika kamu merasa kurang ruang, kamu bisa menempelkan kertas tambahan di bawahnya (declaration merging) untuk memperpanjang catatan.
- **Type Alias** seperti **stempel kayu**. Sekali stempel itu diukir dengan tulisan "LUNAS", ukurannya tetap, kamu tidak bisa menempelkan ukiran baru di atasnya. Jika ingin mengubahnya, kamu harus membuat stempel baru yang terpisah.

---

## Mari Mencoba

Buat `src/bab7/interface-vs-type.ts`:

```ts
// 1. Contoh Declaration Merging pada Interface
interface Siswa {
  nama: string;
}

interface Siswa {
  umur: number;
}

const siswaA: Siswa = {
  nama: "Putra",
  umur: 17 // Wajib diisi karena interface digabung otomatis!
}

console.log("Siswa:", siswaA)

// 2. Contoh Union pada Type (tidak bisa dilakukan oleh interface)
type StatusLulus = "Lulus" | "Remedial"
const status: StatusLulus = "Lulus"
console.log("Status:", status)
```

Jalankan:

```text
tsx src/bab7/interface-vs-type.ts
```

## Output

```text
Siswa: { nama: 'Putra', umur: 17 }
Status: Lulus
```

---

## Latihan

1. Buat interface `Koperasi` dengan properti `namaToko`. Deklarasikan ulang interface tersebut dengan menambahkan properti `alamat`. Buat objek nyata dan tampilkan.
2. Buat type alias `Harga` yang bertipe `number | string`. Buat variabelnya dan tampilkan.

---

## Ringkasan

- Interface dirancang khusus untuk objek dan mendukung declaration merging.
- Type Alias sangat fleksibel, mendukung union, dan tipe primitif.
- Gunakan `interface` secara default untuk struktur objek standar.
- Gunakan `type` jika membutuhkan union atau tipe non-objek.

:::tip[Langkah Selanjutnya]
Lanjut ke **Studi Kasus**.
:::
