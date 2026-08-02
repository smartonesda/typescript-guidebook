---
title: "Install Node.js"
description: Panduan langkah demi langkah menginstall Node.js di Windows, macOS, dan Linux.
---

## Tujuan Pembelajaran

Setelah mengikuti halaman ini, kamu akan:

- Berhasil menginstall Node.js di komputermu
- Bisa memverifikasi bahwa Node.js terinstall dengan benar
- Memahami apa itu npm

---

## Pengantar

**Node.js** adalah fondasi dari seluruh setup kita. Tanpa Node.js, kita tidak bisa menjalankan TypeScript, dan tidak bisa menginstall TSX.

Langkah instalasi di halaman ini cukup sederhana. Ikuti saja sesuai sistem operasi yang kamu gunakan.

---

## Download Node.js

Kunjungi situs resmi Node.js:

**https://nodejs.org**

> Screenshot halaman utama nodejs.org — tampilan tombol download

Di halaman utama, kamu akan melihat dua pilihan versi:

- **LTS** (Long-Term Support) — versi stabil yang direkomendasikan
- **Current** — versi terbaru dengan fitur terbaru

:::tip[Pilih yang Mana?]
Pilih **LTS**. Versi LTS lebih stabil dan cocok untuk belajar. Versi Current bisa saja memiliki bug karena masih sangat baru.
:::

---

## Instalasi di Windows

### Langkah 1: Download Installer

Klik tombol **LTS** di website nodejs.org. File yang diunduh akan berformat `.msi` (misalnya: `node-v20.x.x-x64.msi`).

> Screenshot halaman download nodejs.org dengan tombol LTS ditandai

### Langkah 2: Jalankan Installer

Double-click file `.msi` yang sudah diunduh.

> Screenshot installer Node.js — tampilan awal "Welcome to the Node.js Setup Wizard"

### Langkah 3: Ikuti Wizard Instalasi

Klik **Next** → **Next** → **Next** → **Install**

Biarkan semua pilihan default. Tidak perlu mengubah apapun.

> Screenshot proses instalasi Node.js dengan progress bar

### Langkah 4: Verifikasi Instalasi

Setelah instalasi selesai, buka **Command Prompt** atau **PowerShell**:

- Tekan `Windows + R`
- Ketik `cmd` lalu tekan Enter

Lalu ketik perintah berikut dan tekan Enter:

```
node --version
```

Jika instalasi berhasil, kamu akan melihat output seperti:

```
v20.11.0
```

Versi angkanya mungkin berbeda — yang penting ada outputnya.

Kemudian cek npm juga:

```
npm --version
```

Output yang diharapkan:

```
10.2.4
```

:::note[Catatan]
Angka versinya mungkin berbeda dari contoh di atas, tapi itu tidak masalah. Yang penting perintah itu memberikan output, bukan error.
:::

---

## Instalasi di macOS

### Langkah 1: Download Installer

Kunjungi https://nodejs.org dan download versi **LTS** untuk macOS. File yang diunduh berformat `.pkg`.

### Langkah 2: Jalankan Installer

Double-click file `.pkg` yang sudah diunduh dan ikuti instruksi yang muncul.

### Langkah 3: Verifikasi

Buka **Terminal** (cari di Spotlight: `Cmd + Spasi`, ketik "Terminal").

```
node --version
npm --version
```

---

## Instalasi di Linux (Ubuntu/Debian)

Buka terminal dan jalankan perintah-perintah berikut satu per satu:

```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Verifikasi:

```
node --version
npm --version
```

---

## Troubleshooting

### Masalah: `node` tidak dikenali setelah install di Windows

Coba **restart komputer** kamu terlebih dahulu. Terkadang PATH (daftar lokasi program yang dikenali Windows) perlu diperbarui setelah restart.

### Masalah: Muncul error "permission denied" di macOS/Linux

Jangan pernah menjalankan `sudo npm install -g` untuk hal lain. Tapi saat pertama setup Node.js di Linux, penggunaan sudo untuk install node sendiri adalah normal.

---

## Apa itu npm?

Saat kamu menginstall Node.js, **npm** otomatis ikut terinstall. npm adalah singkatan dari _Node Package Manager_ — program untuk menginstall paket kode dari internet.

Kita akan menggunakan npm untuk menginstall TypeScript dan TSX di langkah selanjutnya.

---

## Ringkasan

- Download Node.js dari **https://nodejs.org** — pilih versi **LTS**
- Install sesuai sistem operasi kamu
- Verifikasi dengan `node --version` dan `npm --version` di terminal
- npm otomatis terinstall bersama Node.js

:::tip[Langkah Selanjutnya]
Lanjut ke halaman **Install VS Code** untuk menginstall editor kode kita.
:::
