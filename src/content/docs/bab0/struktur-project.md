---
title: "Struktur Project"
description: Memahami cara mengorganisir file dan folder dalam sebuah project TypeScript yang baik.
---

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Memahami tujuan dari setiap file dalam project TypeScript
- Mengetahui konvensi penamaan file yang baik
- Mengorganisir project kamu dengan rapi

---

## Pengantar

Seorang programmer yang baik tidak hanya menulis kode yang benar — ia juga mengorganisir kodenya dengan baik. Project yang terorganisir rapi akan jauh lebih mudah dipahami, baik oleh kamu sendiri di masa depan maupun oleh orang lain yang membaca kodemu.

Bayangkan sebuah perpustakaan tanpa sistem pengelompokan buku — semua buku dicampur begitu saja. Mencari buku tertentu akan sangat menyulitkan. Begitu juga dengan project yang tidak terorganisir.

---

## File-file dalam Project Kita

Setelah langkah sebelumnya, project kita sudah memiliki dua file:

```
belajar-typescript/
├── package.json      ← Konfigurasi project npm
└── tsconfig.json     ← Konfigurasi TypeScript
```

Mari kita pahami fungsi masing-masing.

---

## package.json

File `package.json` adalah **identitas dan konfigurasi project** kamu di ekosistem Node.js.

Isi penting di `package.json`:

```json
{
  "name": "belajar-typescript",
  "version": "1.0.0",
  "description": "Project belajar TypeScript pertamaku",
  "scripts": {
    "start": "tsx src/index.ts"
  },
  "dependencies": {},
  "devDependencies": {}
}
```

| Field             | Fungsi                                       |
| ----------------- | -------------------------------------------- |
| `name`            | Nama project                                 |
| `version`         | Versi project                                |
| `description`     | Deskripsi singkat                            |
| `scripts`         | Perintah pintasan yang bisa dijalankan       |
| `dependencies`    | Paket yang dibutuhkan program                |
| `devDependencies` | Paket yang hanya dibutuhkan saat development |

---

## tsconfig.json

File `tsconfig.json` adalah **konfigurasi untuk compiler TypeScript**. File ini memberitahu TypeScript:

- Di mana mencari file TypeScript
- Standar JavaScript apa yang dihasilkan
- Seberapa ketat pemeriksaan tipe dilakukan

Untuk project belajar kita, konfigurasi default sudah cukup baik.

---

## Folder src/

Konvensi yang umum digunakan developer adalah menyimpan semua kode sumber (source code) di dalam folder bernama `src` (singkatan dari _source_).

Mari kita buat folder itu:

```
mkdir src
```

Sekarang struktur project kita menjadi:

```
belajar-typescript/
├── src/              ← Semua file TypeScript kita di sini
├── package.json
└── tsconfig.json
```

---

## Konvensi Penamaan File

Saat membuat file TypeScript, ada beberapa aturan penamaan yang baik untuk diikuti:

### Ekstensi File

File TypeScript menggunakan ekstensi `.ts`:

```
halo.ts
latihan-1.ts
bab1-variabel.ts
```

### Nama File

- Gunakan **huruf kecil semua** (lowercase)
- Gunakan **tanda hubung** (`-`) untuk memisahkan kata, bukan spasi
- Nama file harus **deskriptif** — menjelaskan isi file

**Contoh nama file yang baik:**

```
halo-dunia.ts
hitung-rata-rata.ts
data-siswa.ts
```

**Contoh nama file yang kurang baik:**

```
file1.ts        ← Tidak deskriptif
HaloPertama.ts  ← Sebaiknya lowercase
halo dunia.ts   ← Spasi tidak boleh dipakai
```

---

## Struktur Project yang Direkomendasikan

Untuk project belajar kita, gunakan struktur sederhana ini:

```
belajar-typescript/
├── src/
│   ├── bab0/
│   │   ├── halo-dunia.ts
│   │   └── latihan.ts
│   ├── bab1/
│   │   ├── variabel.ts
│   │   └── tipe-data.ts
│   └── index.ts
├── package.json
└── tsconfig.json
```

Kamu bisa membuat subfolder untuk setiap bab — ini membantu kamu menemukan file yang berkaitan dengan topik tertentu dengan cepat.

---

## Ilustrasi: Analogi Perpustakaan

```
Perpustakaan Sekolah          Project TypeScript
─────────────────────         ──────────────────
Gedung perpustakaan           Folder project (belajar-typescript/)
    │                              │
    ├── Rak Ilmu Pengetahuan       ├── src/
    │   ├── Matematika             │   ├── bab0/
    │   ├── Fisika                 │   ├── bab1/
    │   └── Kimia                  │   └── bab2/
    │                              │
    └── Katalog buku               └── package.json
        (daftar semua buku)            (informasi project)
```

---

## Membuat Folder Bab

Sekarang mari kita buat folder untuk BAB 0 di dalam `src`:

```
mkdir src/bab0
```

Struktur project kita sekarang:

```
belajar-typescript/
├── src/
│   └── bab0/        ← File latihan BAB 0 akan ada di sini
├── package.json
└── tsconfig.json
```

---

## node_modules/

Satu hal lagi yang perlu kamu ketahui: jika kamu menginstall paket menggunakan npm, sebuah folder bernama `node_modules/` akan muncul secara otomatis.

Folder ini berisi semua kode dari paket-paket yang kamu install. **Jangan pernah mengubah isi folder ini secara manual.**

```
belajar-typescript/
├── node_modules/     ← Otomatis dibuat oleh npm, jangan diubah!
├── src/
│   └── bab0/
├── package.json
└── tsconfig.json
```

:::caution[Jangan Upload node_modules]
Folder `node_modules` bisa sangat besar (ratusan MB). Jangan pernah mengupload folder ini ke internet atau berbagi lewat flashdisk. Cukup bagikan folder `src`, `package.json`, dan `tsconfig.json` saja. Orang lain bisa menjalankan `npm install` untuk mengunduh ulang semua paket yang dibutuhkan.
:::

---

## Ringkasan

- `package.json` → identitas dan konfigurasi project
- `tsconfig.json` → konfigurasi TypeScript
- `src/` → tempat semua file TypeScript kita
- `node_modules/` → paket yang diinstall (jangan diubah manual)
- Gunakan nama file lowercase dengan tanda hubung: `nama-file.ts`
- Buat subfolder per bab untuk organisasi yang lebih baik

:::tip[Langkah Selanjutnya]
Lanjut ke halaman **Program Pertama** untuk menulis dan menjalankan kode TypeScript pertamamu!
:::
