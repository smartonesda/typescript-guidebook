---
title: "Struktur Folder Project — BAB 11"
description: Merancang dan menyusun folder project SIAKAD secara rapi dan modular sesuai standar industri.
---

# Struktur Folder Project

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Merancang struktur folder project modular di TypeScript.
- Menjelaskan kegunaan masing-masing folder (`models`, `interfaces`, `repositories`, `services`, `helpers`).
- Mempersiapkan tata letak file sebelum mulai menulis kode implementasi.

---

## Pendahuluan
Ketika project programmu bertambah besar dengan puluhan file terpisah, menaruh semua file di satu folder root akan memusingkan. Kita harus mengelompokkan file berdasarkan kategori tugasnya masing-masing.

---

## Penjelasan
Di dalam project **SIAKAD-Konsol**, kita akan membuat struktur folder di dalam direktori `src/` seperti berikut:

```text
src/
├── models/         ← Tipe data objek & class entitas (Siswa, Guru)
│   └── index.ts    ← Re-export file models
├── interfaces/     ← Kontrak method formal untuk Repository & Service
├── repositories/   ← Database memori RAM (AcademicRepository)
├── services/       ← Logika bisnis (SiswaService)
├── helpers/        ← Fungsi pembantu (pencetakan garis, format teks)
└── main.ts         ← Pintu masuk utama aplikasi (Presentation)
```

Setiap file di dalam folder tersebut terisolasi satu sama lain secara default (BAB 10). Mereka saling terhubung menggunakan kata kunci `export` dan `import`.

---

## Analogi Kehidupan Sehari-hari: Laci Penyimpanan Alat Tulis Sekolah
Bayangkan meja belajar di kamarmu:

Jika kamu mencampur gunting, penghapus, pensil warna, kertas ulangan, dan penggaris di satu laci besar tanpa sekat pembatas:

```text
Variabel & File campur aduk = Meja belajar berantakan
```

Saat butuh penghapus, kamu harus mengaduk-aduk seluruh isi laci. 

Dengan membaginya ke kotak-kotak kecil bersekat (folder):
- Kotak Pensil (folder `models`)
- Kotak Penggaris (folder `services`)
- Kotak Buku Catatan (folder `repositories`)

Meja belajarmu terlihat rapi, bersih, dan kamu bisa mengambil alat yang dibutuhkan dalam waktu 1 detik tanpa kebingungan.

---

## Visual Illustration: Hubungan Impor Antar Folder

```text
[ models/siswa.ts ] ──► di-import oleh ──► [ repositories/siswaRepo.ts ]
                                                    │
                                               di-import oleh
                                                    │
                                                    ▼
[ main.ts (Entry) ] ◄── di-import oleh ─── [ services/siswaService.ts ]
```

---

## Live Coding: Contoh File index.ts untuk Re-export
Di dalam folder `models`, kita memiliki file `siswa.ts` dan `guru.ts`. Agar file luar tidak perlu mengimpor dari banyak path yang berbeda, kita menggunakan `index.ts` sebagai gerbang satu pintu:

```ts
// File: src/models/index.ts (Simulasi Re-export)
export { SiswaClass } from "./siswa-class";
export { GuruClass } from "./guru-class";
```

File luar cukup mengimpor dengan satu baris:

```ts
import { SiswaClass, GuruClass } from "./models";
```

---

## Output
Hasil cetak simulasi impor satu pintu di terminal:

```text
Mengimpor data siswa dan guru dari satu modul pintu masuk berhasil!
```

---

## Penjelasan Baris per Baris
- `export { SiswaClass } from "./siswa-class"`: Mengambil ekspor dari sub-file dan meneruskannya langsung ke luar (BAB 10).
- `import { ... } from "./models"`: Node.js otomatis mencari file bernama `index.ts` jika kita hanya menuliskan nama foldernya saja (`./models`).

---

## Common Mistakes
- **Mengimpor dengan ekstensi .ts**: Mengetik `import { Siswa } from "./models/siswa.ts"`. TypeScript melarang penulisan ekstensi `.ts` pada path impor.
- **Lupa melakukan export**: Menulis class di folder `models` tetapi lupa menulis kata kunci `export` di depan nama class, akibatnya file lain tidak bisa mendeteksi class tersebut.

---

## Tips
:::tip[Gunakan index.ts di Setiap Folder]
Gunakan teknik Re-export `index.ts` di setiap folder besar seperti `models/` atau `services/`. Ini membuat kode impor di file `main.ts` luar terlihat sangat bersih dan profesional.
:::

---

## Latihan
1. Tuliskan di file latihan: apa fungsi dari berkas `index.ts` di dalam sebuah folder modul?
2. Buat skema folder project `siakad-final` di komputermu berdasarkan rancangan di atas.
