---
title: "Project Requirements — BAB 11"
description: Spesifikasi kebutuhan data dan fungsionalitas teknis dari aplikasi SIAKAD-Konsol.
---

# Project Requirements (Spesifikasi Kebutuhan)

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menyebutkan spesifikasi data minimal untuk entitas Siswa, Guru, dan Kelas.
- Menjelaskan aturan validasi data (KKM, NIS unik, dll).
- Memahami kebutuhan teknis asynchronous dan generic yang wajib ada di dalam project.

---

## Pendahuluan
Sebelum membangun sebuah aplikasi, developer profesional harus membaca dokumen **Requirements** (spesifikasi kebutuhan) terlebih dahulu. Dokumen ini bertindak sebagai kompas agar kita tidak tersesat saat menulis kode dan memastikan hasil akhir aplikasi sesuai dengan kebutuhan pengguna.

---

## Penjelasan
Aplikasi SIAKAD-Konsol yang akan kita bangun harus memenuhi persyaratan fungsional dan teknis berikut:

### Kebutuhan Data (Models)
1. **Siswa**:
   - `id`: number (readonly, unik)
   - `nama`: string (wajib)
   - `nis`: string | number (union, wajib)
   - `kelas`: string (wajib)
   - `nilaiRataRata`: number (private, 0-100)

2. **Guru**:
   - `id`: number (readonly, unik)
   - `nama`: string (wajib)
   - `nip`: number (wajib)
   - `mataPelajaran`: string (wajib)
   - `status`: Enum (`HADIR`, `IZIN`, `ABSEN`)

### Kebutuhan Fungsional (Fitur)
1. **Pemeriksaan Tipe Ketat (Type Safety)**: Semua data dilarang menggunakan tipe `any`.
2. **Generic Repository**: Operasi CRUD (Create, Read, Update, Delete) database memori harus dibungkus dalam class `AcademicRepository<T extends { id: number }>` agar bisa digunakan ulang untuk Siswa maupun Guru.
3. **Pemuatan Async**: Mengambil data tugas simulasi dari API `https://jsonplaceholder.typicode.com/todos/[id]` secara async menggunakan `fetch` dan `async/await` dengan aman (`try...catch`).

---

## Analogi Kehidupan Sehari-hari: Buku Panduan Kontrak Mandor Bangunan
Bayangkan seorang mandor yang disewa untuk membangun gedung laboratorium komputer sekolah:

```text
SOP Kontrak Kerja (Requirements):
  ├── Fondasi cakar ayam harus menggunakan besi ulir 12mm (Wajib / Readonly)
  ├── Cat tembok harus warna putih abu-abu (Wajib / Enum)
  └── Pasang colokan stopkontak LAN di setiap meja (Wajib / Generic)
```

Jika mandor asal-asalan memasang colokan listrik tanpa kabel grounding karena malas membaca panduan kontrak, laboratorium bisa korsleting saat dinyalakan (program crash). Dokumen requirements ini adalah kontrak kerja kualitas kodemu.

---

## Visual Illustration: Hubungan Data dan Validasi

```text
Input Nilai: 85  ──► [ Casing Private ] ──► Validasi (0-100) ──► Sukses disimpan ✓
Input Nilai: 150 ──► [ Casing Private ] ──► Validasi (0-100) ──► Ditolak (Tetap 0) ✗
```

---

## Live Coding: Kerangka Validasi Objek
Berikut adalah contoh representasi validasi data sebelum diimplementasikan di class penuh:

```ts
interface ValidasiSiswa {
  readonly id: number;
  nama: string;
  nilai: number;
}

const ujiSiswa: ValidasiSiswa = {
  id: 101,
  nama: "Putra",
  nilai: 85
};

// ujiSiswa.id = 102; // Error! Karena properti bersifat readonly
console.log(`Verifikasi objek: ID ${ujiSiswa.id} valid.`);
```

---

## Output
Hasil eksekusi kode validasi di atas di terminal:

```text
Verifikasi objek: ID 101 valid.
```

---

## Penjelasan Baris per Baris
- `readonly id: number;`: Menandai properti `id` hanya bisa dibaca dan tidak boleh ditimpa nilainya setelah objek diinisialisasi (BAB 7).
- `ujiSiswa.id = 102;`: Baris ini sengaja diberi komentar karena jika diaktifkan, compiler TypeScript langsung menolak kode tersebut dan memicu error.

---

## Common Mistakes
- **Menggunakan any pada Model**: Menggunakan `any` pada properti model membuat TypeScript tidak bisa memvalidasi kebenaran data dari input konsol.
- **Lupa validasi batas KKM**: Nilai diisi di luar batas `0-100` karena properti tidak di-enkapsulasi menggunakan `private` dan `setter`.

---

## Tips
:::tip[Gunakan Readonly untuk ID]
Selalu gunakan kata kunci `readonly` untuk semua properti ID primer (`id`, `nis`, `nip`) agar data kunci tidak sengaja terubah oleh proses lain di tengah jalan.
:::

---

## Latihan
1. Mengapa properti `id` perlu menggunakan modifier `readonly`?
2. Tuliskan di file latihan: apa dampak buruknya jika tipe data NIS dideklarasikan hanya sebagai `number`, padahal sekolah memiliki format NIS seperti `"NIS-1001"`?
