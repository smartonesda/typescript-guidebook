---
title: "Generic Type Alias"
description: Panduan membuat Type Alias bertipe Generic untuk mendefinisikan tipe data kustom yang fleksibel.
---

# Generic Type Alias

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Membuat `type` alias kustom menggunakan parameter Generic.
- Menjelaskan perbedaan penerapan Generic pada Interface vs Type Alias.
- Menerapkan Generic Type untuk menyederhanakan deklarasi tipe data gabungan yang fleksibel.

---

## Pendahuluan

Selain `interface`, kita juga sering mendefinisikan struktur data menggunakan `type` alias (seperti yang dipelajari di BAB 7). Sama halnya dengan interface, `type` alias juga mendukung penuh penggunaan Generic. 

Generic Type sering digunakan ketika kita ingin membuat nama panggilan kustom untuk tipe data gabungan yang struktur dalamnya bervariasi.

---

## Penjelasan Materi: Membuat Generic Type

Sintaks pembuatan Generic Type menggunakan kata kunci `type` diikuti parameter tipe `<T>` sebelum tanda sama dengan `=`:

```ts
type NamaType<T> = {
  status: string;
  data: T;
};
```

Keunggulan utama `type` alias dibanding `interface` adalah ia bisa digunakan untuk mendefinisikan tipe data non-objek, seperti union dari data Generic:

```ts
type Hasil<T> = T | Error; // Tipe data T ATAU objek Error
```

---

## Analogi Kehidupan Sehari-hari: Label Pengiriman Paket

Bayangkan selembar **Kertas Label Pengiriman Paket**:

```text
Label Paket (Generic Type <T>)
  ├── Penerima  (string)
  ├── Alamat    (string)
  └── Isi Paket (Tipe data T)
```

"Isi Paket" bisa berupa apa saja:
- Paket Elektronik (berisi objek HP atau Laptop).
- Paket Pakaian (berisi array baju/celana).
- Paket Dokumen (berisi string teks dokumen penting).

Label pengirimannya tetap sama formatnya, tetapi deskripsi detail barang di dalamnya (tipe data) didefinisikan fleksibel sesuai isi kardus paket tersebut.

---

## Visual Illustration: Generic Type

```text
type Box<T> = { value: T }

const b1: Box<string> = { value: "Halo" }
const b2: Box<number> = { value: 100 }
```

---

## Mari Mencoba: Type Respon Koperasi Sekolah

Mari kita buat program menggunakan Generic Type untuk memodelkan hasil transaksi koperasi sekolah.

Buat file bernama `src/bab9/generic-type.ts`:

```ts
type BarangKoperasi = {
  namaBarang: string;
  harga: number;
};

// 1. Mendefinisikan Generic Type Alias
type HasilTransaksi<T> = {
  tanggal: string;
  sukses: boolean;
  item: T; // Tipe data item dinamis
};

// 2. Transaksi berisi objek Barang
const transaksiBarang: HasilTransaksi<BarangKoperasi> = {
  tanggal: "2026-08-01",
  sukses: true,
  item: {
    namaBarang: "Buku Tulis RPL",
    harga: 6000
  }
};

// 3. Transaksi berisi string catatan saja
const transaksiSederhana: HasilTransaksi<string> = {
  tanggal: "2026-08-01",
  sukses: false,
  item: "Pembayaran dibatalkan oleh kasir"
};

console.log("=== TRANSAKSI BARANG ===");
console.log(`Tanggal: ${transaksiBarang.tanggal}`);
console.log(`Barang : ${transaksiBarang.item.namaBarang} (Rp${transaksiBarang.item.harga})`);

console.log("\n=== TRANSAKSI SEDERHANA ===");
console.log(`Tanggal: ${transaksiSederhana.tanggal}`);
console.log(`Catatan: ${transaksiSederhana.item}`);
```

Jalankan dengan perintah:
```text
tsx src/bab9/generic-type.ts
```

## Output
```text
=== TRANSAKSI BARANG ===
Tanggal: 2026-08-01
Barang : Buku Tulis RPL (Rp6000)

=== TRANSAKSI SEDERHANA ===
Tanggal: 2026-08-01
Catatan: Pembayaran dibatalkan oleh kasir
```

---

## Penjelasan Baris per Baris

- `type HasilTransaksi<T> = { ... }` — Mendeklarasikan type alias Generic dengan properti `item` bertipe `T`.
- `const transaksiBarang: HasilTransaksi<BarangKoperasi>` — Mengunci properti `item` agar wajib diisi objek yang mematuhi tipe `BarangKoperasi`.
- `const transaksiSederhana: HasilTransaksi<string>` — Mengunci properti `item` agar diisi string biasa.

---

## Latihan
1. Buat tipe alias Generic bernama `StatusData<T>` dengan properti `siap: boolean` dan `konten: T`.
2. Buat variabel `statusSiswa` bertipe `StatusData<string[]>` berisi array nama siswa, dan tampilkan nilainya.

---

## Ringkasan
- Generic Type ditulis menggunakan sintaks `type Nama<T> = { ... }`.
- Memiliki fleksibilitas yang sama dengan Generic Interface untuk memodelkan struktur data.
- Lebih disukai jika ingin menggunakan fitur union (`|`) pada tipe Generic.

:::tip[Langkah Selanjutnya]
Lanjut ke **Generic Class** untuk mempelajari pembuatan class berorientasi objek bertipe Generic.
:::
