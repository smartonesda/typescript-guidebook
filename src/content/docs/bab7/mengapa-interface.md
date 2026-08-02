---
title: "Mengapa Interface?"
description: Memahami masalah yang diselesaikan interface — standardisasi objek dan kolaborasi antar fungsi.
---

# Mengapa Interface?

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menjelaskan pentingnya standardisasi bentuk objek menggunakan interface dan bagaimana interface membantu koordinasi antar developer.

---

## Pendahuluan

Di JavaScript murni, jika kamu bekerja dengan tim berisi 5 developer, masing-masing developer bisa membuat data siswa dengan format yang sedikit berbeda:

- Developer 1: `{ namaSiswa: "Andi", nis: 123 }`
- Developer 2: `{ nama_lengkap: "Andi", no_induk: 123 }`
- Developer 3: `{ studentName: "Andi", NISN: 123 }`

Ketika program digabungkan, program akan rusak karena tidak ada kesepakatan nama properti. Interface hadir untuk menyelesaikan masalah ini.

---

## Masalah Tanpa Interface (Ketidakpastian Data)

Tanpa kontrak data, sebuah function tidak bisa memastikan apakah data yang dikirimkan memiliki properti yang dibutuhkannya:

```js
// JavaScript
function cetakKartu(siswa) {
  // Bagaimana jika objek 'siswa' tidak punya properti 'nama'?
  // Program akan mencetak "Nama: undefined" tanpa error peringatan.
  console.log("Nama: " + siswa.nama)
}
```

---

## Solusi Dengan Interface (Standardisasi Formal)

Dengan TypeScript, kita memaksa agar semua objek yang dikirim ke function harus lolos verifikasi interface terlebih dahulu:

```ts
interface Siswa {
  nama: string;
  nis: number;
}

function cetakKartu(siswa: Siswa) {
  console.log("Nama: " + siswa.nama) // ✓ 100% Aman!
}
```

Jika ada developer yang mencoba mengirimkan objek yang tidak cocok dengan interface `Siswa`, compiler TypeScript langsung menolak kode tersebut sebelum dijalankan.

---

## Analogi Kehidupan Sehari-hari

### Standar Stopkontak Listrik

Bayangkan colokan listrik (stopkontak). Seluruh produsen barang elektronik (kipas angin, TV, charger HP) harus membuat steker colokan yang ukurannya cocok dengan lubang stopkontak standar di rumah.

```text
Stopkontak (Interface)
  ├── Kaki kiri: Netral
  └── Kaki kanan: Fasa

Steker TV (Object)  ──► Cocok ──► TV bisa menyala ✓
Steker Kulkas (Object) ──► Cocok ──► Kulkas menyala ✓
Colokan kaki tiga tanpa adaptor ──► Ditolak ✗
```

Jika tidak ada standar ukuran colokan, setiap produsen akan membuat ukuran sendiri-sendiri dan tidak ada barang yang bisa dicolokkan ke stopkontak rumahmu.

---

## Visual Illustration

```text
Interface Siswa ──► Menentukan standar kolom [nama, nis]
                        │
      ┌─────────────────┴─────────────────┐
      ▼                                   ▼
Objek Andi                          Objek Budi
{ nama: "Andi", nis: 101 }          { nama: "Budi", nis: 102 }
      │                                   │
      ▼                                   ▼
Fungsi CetakKartu(siswa: Siswa) menerima keduanya secara aman ✓
```

---

## Mari Mencoba

Buat `src/bab7/mengapa-interface.ts`:

```ts
interface Produk {
  id: string;
  nama: string;
  harga: number;
}

// Fungsi yang aman karena diproteksi oleh interface
function hitungTotalBelanja(barang: Produk, jumlah: number): number {
  return barang.harga * jumlah
}

const sabun = { id: "PRD-01", nama: "Sabun", harga: 5000 }
const handuk = { id: "PRD-02", nama: "Handuk" } // Lupa memasukkan harga!

console.log("Total Sabun:", hitungTotalBelanja(sabun, 3))

// Coba buka komentar di bawah ini untuk melihat error proteksi TypeScript:
// console.log("Total Handuk:", hitungTotalBelanja(handuk, 2))
// Error: Argument of type '{ id: string; nama: string; }' is not assignable to parameter of type 'Produk'.
```

Jalankan:

```text
tsx src/bab7/mengapa-interface.ts
```

---

## Keuntungan Menggunakan Interface

1. **Koordinasi Tim Lebih Mudah** — Struktur data disepakati terlebih dahulu sebelum coding dimulai.
2. **Perlindungan Terhadap Typo** — Menghindari salah ejaan properti objek.
3. **Penyelamat Refactoring** — Jika ada properti yang diubah pada interface, compiler langsung memberi tahu baris kode mana saja di seluruh file project yang perlu disesuaikan.

---

## Latihan

1. Buat interface `Siswa` dengan properti `nama` dan `nilai`.
2. Buat fungsi `apakahLulus(s: Siswa)` yang mengembalikan boolean (lulus jika nilai >= 75).
3. Panggil fungsi dengan objek valid dan amati hasilnya.

---

## Ringkasan

- Tanpa interface, data tidak standar dan rentan memicu bug `undefined`.
- Interface bertindak sebagai standar formal (stopkontak) yang harus dipatuhi semua objek sejenis.
- Mencegah error runtime dengan mendeteksi ketidakcocokan data di tahap kompilasi.

:::tip[Langkah Selanjutnya]
Lanjut ke **Membuat Interface** untuk mempraktikkan variasi deklarasi properti.
:::
