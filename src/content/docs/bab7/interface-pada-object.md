---
title: "Interface pada Object"
description: Menggunakan interface untuk memvalidasi struktur data objek secara konsisten di TypeScript.
---

# Interface pada Object

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menetapkan tipe interface pada variabel objek dan menjelaskan bagaimana TypeScript memvalidasi kecocokan properti.

---

## Pendahuluan

Bagaimana TypeScript mencocokkan objek dengan interface? Proses ini disebut **shape checking** atau *structural typing*. TypeScript tidak memedulikan asal-usul objek, ia hanya memedulikan apakah objek tersebut memiliki "bentuk" properti yang sesuai dengan interface.

---

## Cara Menetapkan Interface pada Objek

Gunakan tanda titik dua `:` diikuti nama interface setelah nama variabel objek:

```ts
const namaVariabel: NamaInterface = { ... }
```

---

## Analogi Kehidupan Sehari-hari

### Pemeriksaan Tiket di Pintu Masuk

Bayangkan konser musik. Pintu masuk memiliki aturan (interface): "Setiap pengunjung harus membawa tiket fisik dan memakai gelang khusus."

```text
Aturan Masuk (Interface)
  ├── Bawa Tiket Fisik (wajib)
  └── Pakai Gelang Konser (wajib)

Pengunjung A: Bawa tiket + pakai gelang ──► Boleh Masuk ✓
Pengunjung B: Bawa tiket tapi tidak pakai gelang ──► Ditolak di pintu ✗
```

Petugas keamanan tidak peduli baju apa yang kamu pakai atau dari mana kamu berasal (properti tambahan). Yang penting dua syarat wajib itu terpenuhi.

---

## Visual Illustration

```text
Interface Siswa { nama: string, nis: number }

const mhs = { nama: "Andi", nis: 123 }
                      │
                      ├─ nama ada? ya ✓
                      ├─ nis ada? ya ✓
                      ▼
            Valid mengikuti Siswa
```

---

## Mari Mencoba

Buat `src/bab7/interface-objek.ts`:

```ts
interface Siswa {
  nama: string;
  nis: number;
}

// Objek yang persis sesuai interface
const siswaA: Siswa = {
  nama: "Putra",
  nis: 1001
}

// TypeScript mengizinkan kelebihan properti jika dikirim secara tidak langsung (structural typing)
const dataMentah = {
  nama: "Budi",
  nis: 1002,
  alamat: "Sidoarjo" // properti ekstra
}

const siswaB: Siswa = dataMentah // ✓ Valid!

console.log("Siswa A:", siswaA)
console.log("Siswa B:", siswaB)
// console.log(siswaB.alamat) // Error! alamat tidak terdaftar di tipe Siswa
```

Jalankan:

```text
tsx src/bab7/interface-objek.ts
```

## Output

```text
Siswa A: { nama: 'Putra', nis: 1001 }
Siswa B: { nama: 'Budi', nis: 1002, alamat: 'Sidoarjo' }
```

---

## Penjelasan Baris per Baris

- `const siswaA: Siswa` — objek wajib memiliki properti `nama` dan `nis`.
- `const siswaB: Siswa = dataMentah` — TypeScript membandingkan bentuk data. Karena `dataMentah` memiliki properti `nama` dan `nis` yang tipenya cocok, ia dianggap mematuhi kontrak `Siswa` meskipun memiliki properti tambahan `alamat`.
- Namun, properti tambahan `alamat` tersebut tidak bisa diakses melalui variabel `siswaB` karena secara tipe, `siswaB` hanya dikenal memiliki `nama` dan `nis`.

---

## Kesalahan yang Sering Terjadi

### ❌ Menulis properti tambahan langsung di objek literal

```ts
const siswaC: Siswa = {
  nama: "Citra",
  nis: 1003,
  alamat: "Surabaya" // Error! Object literal may only specify known properties
}
```

**Perbaikan:** Objek literal yang langsung dideklarasikan bertipe interface tidak boleh memiliki properti ekstra yang tidak terdaftar di interface. Hapus properti ekstra tersebut atau tambahkan ke deklarasi interface.

---

## Latihan

Buat interface `Mobil` dengan properti `merk` dan `kecepatan`. Buat satu objek literal yang mematuhinya. Coba tambahkan properti ekstra langsung di objek literal dan amati error yang dihasilkan VS Code.

---

## Ringkasan

- Objek divalidasi berdasarkan kecocokan bentuk (*shape checking*).
- Objek literal bertipe interface dilarang memiliki properti tambahan yang tidak terdaftar.
- Properti wajib harus ada dan memiliki tipe data yang sesuai.

:::tip[Langkah Selanjutnya]
Lanjut ke **Interface pada Function**.
:::
