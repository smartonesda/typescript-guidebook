---
title: "Studi Kasus: Refactoring SIAKAD — BAB 12"
description: Studi kasus melakukan refactoring (perapian ulang) kode pada project SIAKAD BAB 11 agar mematuhi prinsip Clean Code dan DRY.
---

# Studi Kasus: Refactoring SIAKAD

## Tujuan Pembelajaran
Setelah mengikuti studi kasus ini, kamu diharapkan dapat:
- Mengidentifikasi bagian kode berulang pada project akademik sekolah.
- Melakukan refactoring (merapikan ulang) struktur data secara modular.
- Menerapkan prinsip DRY dengan memindahkan logika cetak ke helper terpusat.

---

## Pendahuluan
Mari kita lakukan studi kasus nyata. Kita memiliki project SIAKAD-Konsol yang telah kita rakit di BAB 11. Di beberapa file, kita mendapati ada kode visual cetak garis `console.log("=".repeat(55))` yang ditulis berulang-ulang di file `main.ts` and `siswa-service.ts`. Kita akan merapikannya (refactoring) menggunakan prinsip **DRY**.

---

## Penjelasan
**Refactoring** adalah proses mengubah struktur internal kode tanpa mengubah perilaku eksternal aplikasi. Tujuannya adalah membuat kode lebih bersih, lebih mudah dibaca, dan meminimalkan technical debt.

Langkah refactoring kita:
1. Membuat fungsi terpusat `cetakPembatas(simbol, panjang)` di dalam `src/helpers/utility.ts`.
2. Menghapus semua kode `console.log("=".repeat(...))` di file service dan main.
3. Mengimpor dan memanggil fungsi helper tersebut di file yang membutuhkan.

---

## Analogi Kehidupan Sehari-hari: Merenovasi Sekat Ruang Kelas
Merapikan kode (refactoring) seperti **merenovasi tata letak meja di dalam ruang kelas**:

```text
Sebelum: Meja diatur acak berserakan, siswa sulit berjalan keluar kelas.
Tindakan: Guru merapikan meja sejajar membujur membentuk baris kolom yang rapi.
Sesudah: Kapasitas kelas tetap menampung 36 siswa (fungsi sama), tetapi ruang jalan menjadi luas.
```

Jumlah siswa di kelas tidak bertambah atau berkurang (perilaku program tetap). Namun, kelas menjadi jauh lebih nyaman dan rapi bagi semua orang.

---

## Visual Illustration: Transformasi Kode

```text
KODE SEBELUM REFACTOR (Duplikasi)
main.ts       ──► console.log("=".repeat(50))
service.ts    ──► console.log("=".repeat(50))

KODE SETELAH REFACTOR (DRY)
utility.ts    ──► export function cetakGaris() { console.log("=".repeat(50)) }
main.ts       ──► import { cetakGaris } ──► cetakGaris()
service.ts    ──► import { cetakGaris } ──► cetakGaris()
```

---

## Live Coding: Implementasi Refactor
Buka berkas `src/helpers/utility.ts` di projectmu, pastikan fungsi helper terpusat sudah siap:

```ts
// File: src/helpers/utility.ts (BAB 11)
export function cetakGaris(panjang: number = 55, simbol: string = "="): void {
  console.log(simbol.repeat(panjang));
}
```

Buka berkas `src/services/siswa-service.ts` (BAB 11) dan ubah cara mencetak garis:

```ts
// File: src/services/siswa-service.ts
import { cetakGaris } from "../helpers/utility"; // import helper

export class SiswaService {
  tampilkanLaporanLengkap(): void {
    cetakGaris(); // panggil helper
    console.log("             LAPORAN NILAI KELAS AKADEMIK");
    cetakGaris();
    // ...
  }
}
```

---

## Output
Jalankan program utama dengan `npm run dev`. Tampilan laporan di terminal tetap rapi dan persis sama seperti sebelumnya:

```text
=======================================================
             LAPORAN NILAI KELAS AKADEMIK
=======================================================
```

---

## Penjelasan Baris per Baris
- `import { cetakGaris } ...`: Kita mengimpor fungsi dari modul helper terpusat (BAB 10 & 11).
- `cetakGaris()`: Menjalankan fungsi helper. Jika di masa depan sekolah ingin mengganti simbol `=` menjadi `-`, kita cukup mengubah 1 baris saja di file `utility.ts` (efisien).

---

## Common Mistakes
- **Melakukan perubahan logika saat refactoring**: Tidak sengaja mengubah rumus kelulusan saat merapikan kode. Ingat, refactoring hanya mengubah "penampilan/struktur" kode, bukan "perilaku" aplikasinya. Selalu jalankan testing (BAB 11) setelah melakukan refactoring untuk memastikan program tidak rusak.

---

## Tips
:::tip[Commit Sebelum Refactor]
Selalu lakukan Git Commit sebelum memulai proses refactoring besar. Jika kamu membuat kesalahan yang merusak program dan bingung cara memperbaikinya, kamu bisa kembali ke titik commit terakhir yang aman dengan mudah.
:::

---

## Best Practice
- Lakukan refactoring kecil secara teratur. Jangan tumpuk kode kotor sampai akhir tahun ajaran baru dirapikan.

---

## Ringkasan
- Refactoring merapikan struktur internal kode tanpa mengubah fungsinya.
- DRY diterapkan dengan menyatukan duplikasi visual cetak garis ke dalam fungsi helper `cetakGaris()`.
- Membantu menjaga agar perubahan konfigurasi visual di masa depan cukup dilakukan di satu file tunggal.

---

## Latihan
1. Periksa file `main.ts` pada project finalmu (BAB 11).
2. Gantilah semua baris cetak garis manual menjadi pemanggilan fungsi helper `cetakGaris()`.
