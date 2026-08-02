---
title: "Install VS Code"
description: Panduan menginstall Visual Studio Code dan ekstensi yang direkomendasikan untuk belajar TypeScript.
---

## Tujuan Pembelajaran

Setelah mengikuti halaman ini, kamu akan:

- Berhasil menginstall VS Code
- Menginstall ekstensi yang membantu belajar TypeScript
- Mengenal antarmuka dasar VS Code

---

## Pengantar

**VS Code** (Visual Studio Code) adalah editor kode yang akan kita gunakan untuk menulis semua kode TypeScript. VS Code adalah editor yang sangat populer di kalangan developer — gratis, ringan, dan punya fitur yang sangat lengkap.

---

## Download VS Code

Kunjungi situs resmi VS Code:

**https://code.visualstudio.com**

> Screenshot halaman utama code.visualstudio.com dengan tombol Download ditandai

Klik tombol **Download** — website biasanya otomatis mendeteksi sistem operasimu dan menampilkan tombol yang sesuai.

---

## Instalasi di Windows

### Langkah 1: Download

Klik tombol download di website VS Code. File yang diunduh berformat `.exe` (misalnya: `VSCodeUserSetup-x64-1.85.0.exe`).

### Langkah 2: Jalankan Installer

Double-click file `.exe` yang sudah diunduh.

> Screenshot installer VS Code — halaman License Agreement

### Langkah 3: Pilihan Penting saat Instalasi

Saat sampai di halaman "Select Additional Tasks", **centang semua pilihan** terutama:

- ✅ Add "Open with Code" action to Windows Explorer file context menu
- ✅ Add "Open with Code" action to Windows Explorer directory context menu
- ✅ Register Code as an editor for supported file types
- ✅ Add to PATH

> Screenshot halaman "Select Additional Tasks" di installer VS Code

:::tip[Kenapa Penting?]
Pilihan "Add to PATH" memungkinkan kamu membuka VS Code dari terminal dengan mengetik `code .`. Ini sangat berguna saat kita bekerja dengan project.
:::

### Langkah 4: Install

Klik **Next** → **Install** → **Finish**.

---

## Instalasi di macOS

1. Download file `.zip` dari website VS Code
2. Buka file zip → drag VS Code ke folder **Applications**
3. Buka VS Code dari Applications

---

## Instalasi di Linux (Ubuntu/Debian)

```
sudo apt install wget gpg
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt update
sudo apt install code
```

---

## Mengenal Antarmuka VS Code

Saat pertama kali membuka VS Code, kamu akan melihat tampilan seperti ini:

> Screenshot antarmuka VS Code saat pertama kali dibuka — Welcome tab

Bagian-bagian utama VS Code:

```
┌────────────────────────────────────────────┐
│ Activity Bar │      Editor Area            │
│  (ikon di   │  (tempat kamu menulis kode)  │
│   kiri)     │                              │
│─────────────│──────────────────────────────│
│  Explorer   │                              │
│  (file &    │                              │
│   folder)   │                              │
│─────────────│──────────────────────────────│
│             │         Terminal             │
│             │    (di bagian bawah)         │
└────────────────────────────────────────────┘
```

| Area             | Fungsi                                               |
| ---------------- | ---------------------------------------------------- |
| **Activity Bar** | Ikon-ikon di kiri: Explorer, Search, Extensions, dll |
| **Explorer**     | Menampilkan file dan folder project                  |
| **Editor Area**  | Tempat menulis kode                                  |
| **Terminal**     | Terminal terintegrasi untuk menjalankan perintah     |

---

## Membuka Terminal di VS Code

Ada beberapa cara membuka terminal di VS Code:

1. Menu **Terminal** → **New Terminal**
2. Shortcut: `Ctrl + `` ` `` ` (backtick — tombol di sebelah kiri angka 1)
3. Shortcut: `Ctrl + Shift + `` ` ``

Terminal akan muncul di bagian bawah VS Code.

---

## Ekstensi yang Direkomendasikan

VS Code bisa ditambah fiturnya dengan **ekstensi** (extension). Ini seperti plugin atau add-on.

Cara menginstall ekstensi:

1. Klik ikon **Extensions** di Activity Bar (ikon seperti kotak-kotak)
2. Atau tekan `Ctrl + Shift + X`
3. Cari nama ekstensi di kolom pencarian
4. Klik **Install**

### Ekstensi yang Wajib Diinstall:

**1. TypeScript (sudah built-in)**
VS Code sudah mendukung TypeScript secara bawaan — tidak perlu menginstall ekstensi tambahan.

**2. Error Lens**

- Nama: `Error Lens`
- Pembuat: Alexander
- Fungsi: Menampilkan pesan error langsung di baris kode, bukan hanya di bagian bawah layar

> Screenshot ekstensi Error Lens di VS Code marketplace

**3. Prettier - Code Formatter**

- Nama: `Prettier - Code Formatter`
- Fungsi: Merapikan format kode secara otomatis

**4. Material Icon Theme** (opsional)

- Fungsi: Menambahkan ikon yang bagus di Explorer — memudahkan membedakan jenis file

---

## Verifikasi

Buka VS Code, lalu buka terminal (Ctrl + backtick). Ketik:

```
code --version
```

Jika VS Code terinstall dengan benar, kamu akan melihat nomor versi.

---

## Ringkasan

- Download VS Code dari **https://code.visualstudio.com**
- Saat instalasi di Windows, centang semua pilihan di "Select Additional Tasks"
- Pelajari antarmuka dasar: Activity Bar, Explorer, Editor Area, Terminal
- Buka terminal dengan `Ctrl + `` ` ``
- Install ekstensi **Error Lens** dan **Prettier** untuk pengalaman belajar yang lebih baik

:::tip[Langkah Selanjutnya]
Lanjut ke halaman **Install TypeScript** untuk menginstall compiler TypeScript.
:::
