---
title: "Install TypeScript"
description: Panduan menginstall TypeScript secara global menggunakan npm.
---

## Tujuan Pembelajaran

Setelah mengikuti halaman ini, kamu akan:

- Berhasil menginstall TypeScript secara global
- Memahami apa artinya install "secara global"
- Mengetahui perintah dasar `tsc`

---

## Pengantar

**TypeScript** adalah compiler yang bertugas memeriksa tipe data di kodemu dan mengubah kode TypeScript menjadi JavaScript. Kita perlu menginstallnya menggunakan npm.

:::caution[Prasyarat]
Pastikan **Node.js dan npm sudah terinstall** sebelum melanjutkan halaman ini. Cek dengan menjalankan `node --version` di terminal. Jika ada output versi, berarti Node.js sudah siap.
:::

---

## Instalasi TypeScript

Buka terminal (atau terminal di VS Code), lalu jalankan perintah berikut:

```
npm install -g typescript
```

Penjelasan perintah:

- `npm install` — perintah untuk menginstall paket
- `-g` — flag "global", artinya TypeScript diinstall untuk seluruh sistem, bukan hanya untuk satu project
- `typescript` — nama paket yang diinstall

Proses instalasi mungkin memakan waktu beberapa menit tergantung koneksi internet.

> Screenshot terminal menunjukkan proses instalasi TypeScript dengan npm — output progress install

---

## Verifikasi Instalasi

Setelah instalasi selesai, verifikasi dengan perintah:

```
tsc --version
```

Output yang diharapkan:

```
Version 5.3.3
```

Angka versinya mungkin berbeda, tapi yang penting ada output versi.

---

## Apa itu `tsc`?

`tsc` adalah singkatan dari **TypeScript Compiler** — program yang mengubah kode TypeScript (`.ts`) menjadi JavaScript (`.js`).

Contoh penggunaan:

```
tsc namafile.ts
```

Perintah itu akan menghasilkan file `namafile.js` — versi JavaScript dari kode TypeScript kamu.

**Tapi ingat:** selama proses belajar kita, kita **tidak** akan menggunakan `tsc` secara langsung. Kita akan menggunakan **TSX** yang prosesnya jauh lebih simpel.

Lalu kenapa kita install TypeScript? Karena:

1. TSX menggunakan TypeScript di balik layar
2. VS Code menggunakan TypeScript untuk fitur autocomplete dan error checking
3. Ini adalah praktik yang benar — install compiler resminya terlebih dahulu

:::note[Catatan tentang tsc]
`tsc` berguna untuk keperluan produksi (saat membuat aplikasi nyata yang akan di-deploy). Untuk belajar, TSX sudah lebih dari cukup. Kita akan belajar `tsc` lebih dalam jika sudah memasuki tahap development aplikasi nyata.
:::

---

## Troubleshooting

### Masalah: "npm: command not found"

Artinya Node.js belum terinstall atau belum terdeteksi. Kembali ke halaman **Install Node.js** dan pastikan proses instalasinya berhasil. Coba restart terminal atau komputer.

### Masalah: "EACCES: permission denied" di macOS/Linux

Jalankan dengan sudo:

```
sudo npm install -g typescript
```

Atau, cara yang lebih baik: konfigurasi npm agar tidak membutuhkan sudo. Lihat panduan di: https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally

### Masalah: Instalasi sangat lambat

Ini biasanya karena koneksi internet. Coba:

```
npm install -g typescript --prefer-offline
```

Atau tunggu saja — proses akan selesai dengan sendirinya.

---

## Ringkasan

- Install TypeScript dengan: `npm install -g typescript`
- Flag `-g` berarti install secara global (tersedia di mana saja)
- Verifikasi dengan: `tsc --version`
- `tsc` adalah compiler TypeScript, tapi selama belajar kita akan menggunakan TSX
- TypeScript tetap perlu diinstall karena dibutuhkan oleh TSX dan VS Code

:::tip[Langkah Selanjutnya]
Lanjut ke halaman **Install TSX** untuk menginstall alat yang akan kita gunakan sehari-hari.
:::
