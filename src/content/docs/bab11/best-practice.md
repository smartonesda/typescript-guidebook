---
title: "Best Practice Pemrograman — BAB 11"
description: Aturan emas menulis kode program yang bersih, modular, dan mudah dipelihara di TypeScript.
---

# Best Practice Pemrograman (Kode Bersih)

## Tujuan Pembelajaran
Setelah mengikuti halaman ini, kamu diharapkan dapat:
- Menerapkan prinsip DRY (Don't Repeat Yourself) dan Single Responsibility.
- Menulis anotasi tipe data secara disiplin pada parameter dan return fungsi.
- Menghindari penggunaan tipe `any` di seluruh bagian project.

---

## Pendahuluan
Programmer yang handal tidak hanya peduli apakah programnya "bisa berjalan" saat ini. Mereka peduli apakah program tersebut **mudah dipahami** saat dibaca 6 bulan lagi, dan **mudah dimodifikasi** saat ada penambahan fitur baru oleh developer lain.

---

## Penjelasan
Di dalam industri pengembangan software, kita wajib mematuhi panduan penulisan kode bersih (*clean code*). Tiga pilar utama clean code:
1. **DRY (Don't Repeat Yourself)**: Menghindari duplikasi kode dengan menggunakan fungsi helper.
2. **Single Responsibility**: Setiap modul atau fungsi hanya mengurusi satu hal spesifik secara fokus.
3. **No any type**: Melarang pemakaian tipe `any` karena mematikan fitur type safety utama TypeScript.

---

## Analogi Kehidupan Sehari-hari: Menata Bumbu Dapur di Toples Kaca
Menata kode program seperti **merapikan bumbu dapur di dalam toples kaca berlabel**:

```text
Dapur Bersih Terorganisir:
- Garam ditaruh di toples kaca berlabel "GARAM" (Tipe: Asin)
- Gula ditaruh di toples kaca berlabel "GULA" (Tipe: Manis)
- Lada ditaruh di toples lada
```

Jika kamu malas menaruh bumbu di toples berlabel dan mencampur semuanya di satu baskom besar tanpa penutup (tipe `any`), kamu akan sangat mudah keliru memasukkan garam ke dalam adonan teh manis saat memasak terburu-buru.

---

## Visual Illustration: Pembagian Tugas Kelas yang Bersih

```text
Class Repository (Akses Data) ──► Hanya mengurusi array RAM
Class Service (Proses Logika) ──► Hanya mengurusi hitungan & API
main.ts (Presentation)        ──► Hanya mengurusi interaksi terminal
```

---

## Live Coding: Penulisan Tipe Eksplisit vs Any
Berikut contoh perbandingan kode kotor menggunakan `any` dengan kode bersih bertipe eksplisit:

```ts
// ✗ KODE KOTOR (Hindari!)
function prosesBebas(data: any) {
  return data.name; // Tidak ada jaminan data memiliki properti name
}

// ✓ KODE BERSIH (Gunakan ini)
interface ProfilNama {
  name: string;
}
function prosesBersih(data: ProfilNama): string {
  return data.name;
}
```

---

## Output
Hasil eksekusi kode bersih di terminal:

```text
Proses data nama aman terverifikasi compiler.
```

---

## Penjelasan Baris per Baris
- `prosesBebas(data: any)`: Memakai tipe `any` yang mematikan fitur auto-complete dan proteksi tipe data TypeScript (BAB 9).
- `prosesBersih(data: ProfilNama)`: Menggunakan kontrak interface yang menjamin input parameter selalu memiliki properti `name` bertipe string (BAB 7).

---

## Common Mistakes
- **Menyalin Kode Berulang**: Menuliskan visual tabel rapor di `main.ts` dan di `siswa-service.ts` secara terpisah tanpa membungkusnya ke dalam satu fungsi terpusat.

---

## Tips
:::tip[Beri Nama dengan Kata Kerja]
Berikan nama fungsi atau method menggunakan kata kerja (seperti `hitungTotal`, `daftarkanSiswa`) karena fungsi bertugas melakukan tindakan. Gunakan kata benda untuk nama variabel (seperti `daftarSiswa`, `nilai`).
:::

---

## Ringkasan
- Kode bersih menaati prinsip DRY dan Single Responsibility.
- Dilarang keras menggunakan tipe `any` demi menjaga keamanan type safety.
- Pemisahan file modular membuat kode mudah dirawat jangka panjang.

---

## Latihan
1. Periksa kembali seluruh file project SIAKAD yang telah kamu buat.
2. Pastikan tidak ada satu pun kata kunci `any` yang tertulis di dalam baris kodemu. Jika ada, ganti dengan tipe data yang tepat.
