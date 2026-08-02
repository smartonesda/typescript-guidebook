---
title: "Install TSX"
description: Panduan menginstall TSX — alat utama untuk menjalankan file TypeScript selama proses belajar.
---

## Tujuan Pembelajaran

Setelah mengikuti halaman ini, kamu akan:

- Berhasil menginstall TSX
- Memahami kenapa kita menggunakan TSX
- Bisa menjalankan file TypeScript pertama dengan TSX

---

## Pengantar

Ini adalah langkah terakhir dalam proses instalasi! Setelah menginstall TSX, kamu siap untuk mulai menulis dan menjalankan kode TypeScript.

**TSX** adalah alat yang memungkinkan kamu menjalankan file TypeScript secara langsung — tanpa perlu proses kompilasi terpisah. Ini sangat ideal untuk proses belajar karena kamu bisa langsung lihat hasilnya dengan cepat.

:::caution[Prasyarat]
Pastikan Node.js dan TypeScript sudah terinstall sebelum melanjutkan.

- `node --version` → harus ada output
- `tsc --version` → harus ada output
  :::

---

## Instalasi TSX

Buka terminal dan jalankan:

```
npm install -g tsx
```

Proses instalasi biasanya lebih cepat dari TypeScript karena ukuran paketnya lebih kecil.

> Screenshot terminal menampilkan proses install tsx dengan npm

---

## Verifikasi Instalasi

```
tsx --version
```

Output yang diharapkan (versi bisa berbeda):

```
4.7.0
```

---

## Cara Menggunakan TSX

Perintah dasar TSX:

```
tsx namafile.ts
```

Itu saja. Tidak perlu langkah lain.

### Contoh Penggunaan

Misalnya kamu punya file bernama `halo.ts` dengan isi:

```ts
console.log("Halo, TypeScript!");
```

Jalankan dengan:

```
tsx halo.ts
```

Output:

```
Halo, TypeScript!
```

Simpel dan cepat.

---

## TSX vs tsc: Kapan Mana Digunakan?

| Situasi                   | Gunakan           |
| ------------------------- | ----------------- |
| Belajar & eksperimen      | `tsx namafile.ts` |
| Memeriksa error tipe saja | `tsc --noEmit`    |
| Build untuk produksi      | `tsc`             |

Selama di guidebook ini, kita akan **selalu menggunakan TSX**. Kamu tidak perlu khawatir tentang `tsc` untuk sekarang.

---

## Kenapa TSX dan Bukan ts-node?

Mungkin kamu pernah mendengar **ts-node** — alat serupa untuk menjalankan TypeScript langsung.

TSX dipilih di guidebook ini karena:

1. **Lebih cepat** — TSX menggunakan esbuild di balik layar, yang jauh lebih cepat
2. **Lebih mudah dikonfigurasi** — tidak perlu setup tambahan
3. **Lebih sedikit masalah** — ts-node sering memiliki masalah kompatibilitas dengan modul ES modern
4. **Pengalaman lebih halus** — error message lebih mudah dipahami

---

## Troubleshooting

### Masalah: "tsx: command not found"

Coba restart terminal. Jika masih tidak bisa:

1. Pastikan npm install selesai tanpa error
2. Periksa apakah npm global bin path ada di PATH sistem
3. Di Windows: coba jalankan terminal sebagai Administrator, lalu install ulang

### Masalah: "tsx is not recognized" di Windows

Pastikan Node.js sudah ada di PATH. Buka System Properties → Environment Variables → cek apakah folder npm ada di PATH.

---

## Ringkasan Instalasi Lengkap

Selamat! Jika semua langkah berhasil, kamu sekarang memiliki:

| Software   | Cek dengan       | Status |
| ---------- | ---------------- | ------ |
| Node.js    | `node --version` | ✅     |
| npm        | `npm --version`  | ✅     |
| TypeScript | `tsc --version`  | ✅     |
| TSX        | `tsx --version`  | ✅     |

---

## Ringkasan

- Install TSX dengan: `npm install -g tsx`
- Gunakan TSX untuk menjalankan file TypeScript: `tsx namafile.ts`
- TSX lebih cepat dan mudah dari `tsc` untuk keperluan belajar
- Selama di guidebook ini, TSX adalah alat utama kita

:::tip[Langkah Selanjutnya]
Semua software sudah terinstall! Lanjut ke halaman **Membuat Project Pertama** untuk mulai coding!
:::
