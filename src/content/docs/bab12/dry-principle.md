---
title: "Prinsip DRY (Don't Repeat Yourself) — BAB 12"
description: Mengenal dan menerapkan prinsip DRY untuk menghindari duplikasi kode program.
---

# Prinsip DRY (Don't Repeat Yourself)

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan arti dan bahaya dari duplikasi kode program.
- Mengidentifikasi bagian kode yang berulang dan memindahkannya ke fungsi helper.
- Menerapkan prinsip DRY untuk menjaga kerapian kode.

---

## Pendahuluan
Salah satu dosa terbesar seorang programmer adalah duplikasi kode. Jika kamu menulis logika rumus yang sama berkali-kali di berbagai file berbeda, kamu sedang menimbun bom waktu yang siap meledak saat rumus tersebut perlu diubah di masa depan.

---

## Penjelasan
Prinsip **DRY** (*Don't Repeat Yourself* / Jangan Ulangi Dirimu Sendiri) menyatakan bahwa **setiap potong pengetahuan atau logika dalam sistem harus memiliki representasi tunggal yang tidak ambigu di dalam codebase**.

### Mengapa duplikasi kode berbahaya?
Bayangkan kamu menulis rumus diskon 10% di 5 file berbeda. Suatu hari, sekolah memutuskan untuk menaikkan diskon menjadi 15%. Kamu harus mencari dan mengubah angka diskon di 5 file tersebut secara manual. 
Jika kamu terlewat mengubah 1 file saja, data keuangan sekolah akan menjadi kacau dan tidak sinkron.

---

## Analogi Kehidupan Sehari-hari: Tidak Memfotokopi Dokumen Berulang Kali
Bayangkan di kantor tata usaha sekolah:

Ada dokumen **"Visi dan Misi Sekolah"** sepanjang 3 halaman. 
- **Melanggar DRY**: Staf TU memfotokopi dokumen tersebut sebanyak 50 kali lalu menempelkannya di setiap kelas, di ruang guru, di kantin, dan di mading. Ketika visi misi sekolah diubah oleh kepala sekolah, staf TU harus mencopot 50 kertas tersebut di seluruh sekolah dan memfotokopi ulang 50 lembar baru.
- **Mematuhi DRY**: Visi misi sekolah ditaruh di dalam satu buku pedoman induk pusat. Di setiap kelas dan mading, cukup ditulis rujukan: *"Visi misi sekolah dapat dibaca di Buku Pedoman Induk Halaman 5"*. Jika visi misi berubah, staf TU hanya perlu mengedit 1 halaman di Buku Pedoman Induk tersebut.

---

## Visual Illustration: Alur Kerja DRY

```text
LOGIKA DUPLIKAT (Buruk)
  ├── file_A.ts: hitungTotal(a, b) { return a + b }
  └── file_B.ts: hitungTotal(a, b) { return a + b }

LOGIKA TERPUSAT (DRY - Bagus)
  ├── helper.ts: export hitungTotal(a, b) { return a + b }
  ├── file_A.ts: import { hitungTotal }
  └── file_B.ts: import { hitungTotal }
```

---

## Example: Refactoring Kode Duplikat

### Bad Code (Duplikasi Formatting Rupiah)
```ts
// Di file transaksi.ts
const hargaBuku = 15000;
console.log(`Buku: Rp${hargaBuku.toLocaleString("id-ID")}`);

// Di file laporan.ts (Menulis ulang logika format yang sama!)
const totalBelanja = 50000;
console.log(`Total: Rp${totalBelanja.toLocaleString("id-ID")}`);
```

### Good Code (Logika Dipindahkan ke Helper)
```ts
// Di file src/helpers/utility.ts (Terpusat) (BAB 11)
export function formatRupiah(nominal: number): string {
  return `Rp${nominal.toLocaleString("id-ID")}`;
}

// Di file transaksi.ts
import { formatRupiah } from "./helpers/utility";
console.log(`Buku: ${formatRupiah(15000)}`);

// Di file laporan.ts
import { formatRupiah } from "./helpers/utility";
console.log(`Total: ${formatRupiah(50000)}`);
```

---

## Common Mistakes
- **Duplikasi Logika Validasi**: Menuliskan pengecekan `nilai >= 0 && nilai <= 100` berulang kali di `main.ts` dan di `siswa-service.ts` (BAB 11). Jika batas nilai kelulusan diubah, kamu harus mencarinya di seluruh file.

---

## Tips
:::tip[Gunakan Aturan 3 Kali (Rule of Three)]
Gunakan aturan praktis ini: **Rule of Three**. Jika kamu menulis baris kode yang sama sebanyak dua kali, itu mungkin masih bisa ditoleransi. Tapi begitu kamu menulisnya untuk ketiga kali, **segera** hentikan mengetik, buatlah fungsi helper terpisah, dan ganti ketiga kode berulang tersebut dengan pemanggilan fungsi helper baru.
:::

---

## Best Practice
- Letakkan semua fungsi format teks, angka, persentase, dan tanggal ke dalam satu file helper khusus `src/helpers/utility.ts` (BAB 11) agar mudah ditemukan oleh timmu.

---

## Ringkasan
- DRY bertujuan menghindari duplikasi logika dan data dalam program.
- Duplikasi kode mempersulit proses pemeliharaan dan rawan memicu bug tidak sinkron.
- Atasi duplikasi dengan memindahkan kode berulang ke fungsi helper terpusat.

---

## Latihan
1. Cari baris kode cetak pembatas `console.log("=".repeat(50))` di dalam project final SIAKAD-mu (BAB 11).
2. Pindahkan ke fungsi helper `cetakGaris()` di `utility.ts`, lalu import dan panggil di seluruh file yang membutuhkannya.
