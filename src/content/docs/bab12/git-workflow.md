---
title: "Git Workflow — BAB 12"
description: Panduan menggunakan Git untuk version control dan kolaborasi tim yang profesional.
---

# Git Workflow

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan fungsi Git sebagai sistem pelacak versi (*Version Control System*).
- Menulis pesan commit yang rapi menggunakan standar *Semantic Commits*.
- Memahami alur kerja kolaborasi Git (Branching, Pull Request).

---

## Pendahuluan
Di industri nyata, developer dilarang mengirimkan revisi file lewat WhatsApp atau Flashdisk. Kolaborasi tim menggunakan puluhan file yang diubah setiap harinya dikelola menggunakan **Git** (BAB 0 & 11). Git melacak siapa yang mengubah baris kode apa, kapan diubah, dan mengapa diubah.

---

## Penjelasan
Alur kerja dasar Git (*Git Workflow*):

### 1. Inisialisasi Git (`git init`)
Membuat database pelacak Git di folder project kamu.

### 2. Menyimpan Riwayat (`git commit`)
Menyimpan snapshot kode saat ini dengan memberikan pesan penjelas (*commit message*). 
Gunakan standar **Semantic Commits** agar riwayat perubahan rapi:
- `feat:` untuk penambahan fitur baru (misal: `feat: tambah method hitungRataRata`).
- `fix:` untuk perbaikan bug (misal: `fix: perbaiki pembagian nol di kalkulator`).
- `refactor:` untuk merapikan struktur kode tanpa mengubah fungsi (seperti merapikan import).
- `docs:` untuk perubahan dokumentasi/README.

### 3. Cabang Kode (`git branch` / `git checkout`)
Membuat cabang terpisah dari kode utama agar pengerjaan fitur baru tidak mengganggu aplikasi utama yang sedang live.

---

## Analogi Kehidupan Sehari-hari: Mesin Waktu Game (Save Point)
Bagaimana kamu menyimpan progres bermain game RPG?

### Game Play (Proses Coding)
Setiap kali kamu berhasil mengalahkan boss level 1, kamu melakukan **SAVE GAME** (`git commit`). Ketika karaktermu salah jalan atau mati masuk ke jurang di level berikutnya, kamu cukup melakukan **LOAD GAME** (`git checkout`) untuk kembali ke titik simpan terakhir.

```text
RPG Game
  ├── Boss Level 1 ──► [ SAVE GAME (Commit 1) ]
  ├── Boss Level 2 ──► [ SAVE GAME (Commit 2) ]
  └── Mati ──────────► [ LOAD GAME (Checkout 2) ]
```

Kamu tidak perlu mengulang permainan dari awal pembuatan karakter. Git bekerja sebagai mesin waktu *save point* untuk file projectmu.

---

## Visual Illustration: Alur Cabang Git (Branching)

```text
Branch main:   O ─── O ───────────────────── O ──► Deploy Live
                      \                     / (Pull Request Merged)
Branch fitur:          └── O ─── O ─── O ──┘ (Developer membuat fitur login)
```

---

## Live Practice: Membuat Commit Pertama
Buka terminal di folder projectmu, jalankan perintah Git berikut:

```bash
git init
git add .
git commit -m "feat: inisialisasi project awal siakad"
```

---

## Output
Hasil yang diharapkan di terminal setelah commit berhasil disimpan:

```text
Initialized empty Git repository in D:/siakad-final/.git/
[master (root-commit) a1b2c3d] feat: inisialisasi project awal siakad
 4 files changed, 100 insertions(+)
 create mode 100644 package.json
 create mode 100644 tsconfig.json
```

---

## Common Mistakes
- **Menulis Pesan Commit Asal-asalan**: Menulis pesan seperti `git commit -m "revisi"`, `git commit -m "fix error"`, atau `git commit -m "tahu ah pusing"`. Ini membuat riwayat project tidak bermakna bagi orang lain. Selalu tulis pesan yang deskriptif: `git commit -m "fix: tangani nilai undefined pada siswa"`.

---

## Tips
:::tip[Gunakan Berkas .gitignore]
Selalu buat file bernama `.gitignore` (BAB 11) di folder utama projectmu. Tuliskan nama folder `node_modules/` dan `dist/` di dalamnya agar Git mengabaikan file sampah tersebut dan proses upload ke GitHub berjalan sangat cepat.
:::

---

## Best Practice
- Lakukan commit kecil secara sering (*commit early, commit often*). Jangan kumpulkan pekerjaan selama satu minggu lalu melakukan satu commit raksasa berisi 50 perubahan berbeda.

---

## Ringkasan
- Git melacak riwayat perubahan file dan bertindak sebagai mesin waktu (*save point*).
- Gunakan standar *Semantic Commits* (`feat:`, `fix:`, `refactor:`) untuk merapikan riwayat.
- Gunakan `.gitignore` untuk mengabaikan folder sampah besar seperti `node_modules/`.

---

## Latihan
1. Buat file `.gitignore` di projectmu, ketikkan `node_modules/` dan `dist/` di dalamnya.
2. Lakukan git init, add, dan commit pertama dengan pesan `feat: setup struktur folder awal`.
