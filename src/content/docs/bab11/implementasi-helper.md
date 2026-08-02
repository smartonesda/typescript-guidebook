---
title: "Implementasi Helper Utilities — BAB 11"
description: Membuat fungsi pembantu pembatas cetak dan formatting data di folder helpers/.
---

# Implementasi Helper Utilities

## Tujuan Pembelajaran
Setelah mengikuti halaman ini, kamu diharapkan dapat:
- Membuat file `utility.ts` di folder `helpers/`.
- Membuat fungsi pencetakan garis terformat (`cetakGaris`).
- Membuat fungsi pemformatan angka persentase (`formatPersen`).

---

## Pendahuluan
Saat mencetak laporan di terminal, kita sering menuliskan baris pemisah seperti `console.log("=".repeat(50))` berulang-ulang di berbagai file berbeda. Ini melanggar prinsip DRY (Don't Repeat Yourself). Kita harus membuat fungsi pembantu (*helper*) sekali di satu file terpisah agar bisa diimpor dari mana saja secara konsisten.

---

## Penjelasan
Folder `src/helpers/` khusus menyimpan modul fungsi pembantu (utility). File `utility.ts` akan menampung fungsi format visual:
- `cetakGaris()`: Mencetak garis pembatas secara dinamis.
- `formatPersen()`: Memformat angka desimal persentase.
- `buatKapital()`: Mengubah teks menjadi huruf kapital.

---

## Analogi Kehidupan Sehari-hari: Penggaris Cetakan Sablon Logo Sekolah
Mengimplementasikan modul helper seperti **membeli penggaris cetakan sablon logo sekolah**:

```text
Penggaris Cetakan Sablon (Helper Utility):
- Ingin membuat garis lurus? Tempel penggaris cetakan ──► gores spidol (cetakGaris)
- Ingin menulis lambang persen rapi? Cetak lewat lubang sablon khusus (formatPersen)
```

Setiap guru di kelas tidak perlu menggambar logo sekolah dari nol menggunakan pensil manual di papan tulis masing-masing. Semua guru meminjam cetakan sablon yang sama dari kantor guru agar hasilnya selalu seragam dan presisi.

---

## Visual Illustration: Penggunaan Helper di Project

```text
                  helpers/utility.ts (Ekspor Cetakan)
                           │
       ┌───────────────────┴───────────────────┐
       ▼                                       ▼
  siswa-service.ts                        main.ts
(cetakGaris, formatPersen)              (cetakGaris)
```

---

## Live Coding: Implementasi Utility Helper

### Langkah 1: Buat `src/helpers/utility.ts`
```ts
// Fungsi mencetak garis pemisah terformat
export function cetakGaris(panjang: number = 55, simbol: string = "="): void {
  console.log(simbol.repeat(panjang));
}

// Fungsi memformat persentase dengan 1 angka di belakang koma
export function formatPersen(nilai: number): string {
  return `${nilai.toFixed(1)}%`;
}

// Fungsi merapikan ejaan teks capital
export function buatKapital(teks: string): string {
  if (teks.length === 0) return "";
  return teks.toUpperCase().trim();
}
```

---

## Output
Fungsi-fungsi ini dapat dipanggil di bagian mana saja dari program untuk mencetak garis pembatas yang konsisten panjang dan simbolnya.

---

## Penjelasan Baris per Baris
- `simbol.repeat(panjang)`: Method string bawaan JavaScript untuk mengulang string sebanyak `panjang` karakter (BAB 5).
- `nilai.toFixed(1)`: Membatasi agar angka desimal yang dicetak hanya memiliki satu angka di belakang koma.

---

## Common Mistakes
- **Lupa melakukan export**: Menuliskan fungsi helper tetapi lupa menulis kata kunci `export` di depan nama fungsi, sehingga file luar tidak bisa mendeteksinya.

---

## Tips
:::tip[Satukan Helper Sejenis]
Jangan buat satu file terpisah untuk setiap fungsi kecil. Satukan semua fungsi pembantu bertema manipulasi string atau angka ke dalam satu berkas `utility.ts` agar tidak mengotori folder.
:::

---

## Ringkasan
- Fungsi helper diletakkan di dalam folder `src/helpers/`.
- Membantu menghindari penulisan kode berulang untuk pemformatan visual.
- Membantu keseragaman tampilan laporan terminal di seluruh bagian aplikasi.

---

## Latihan
1. Buat file `utility.ts` di folder `src/helpers/` komputermu.
2. Tambahkan fungsi baru `formatRupiah(nominal: number): string` yang mengembalikan format rupiah (contoh: `Rp15.000`) dan lakukan re-export jika dibutuhkan.
