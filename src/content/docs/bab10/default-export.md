---
title: "Default Export"
description: Menggunakan Default Export untuk mengekspor satu komponen utama dari file module di TypeScript.
---

# Default Export

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan arti dan kegunaan dari Default Export.
- Menggunakan kata kunci `export default` pada class atau fungsi.
- Mengimpor komponen default dengan nama bebas tanpa kurung kurawal.

---

## Penjelasan Materi: Apa itu Default Export?

Di halaman sebelumnya, kita mengimpor komponen menggunakan tanda kurung kurawal `{ }`. Cara itu disebut **Named Export** (karena kita memanggil nama komponennya secara spesifik).

Namun, ada kalanya sebuah file module hanya berisi **satu komponen utama** (misalnya: file `siswa.ts` hanya berisi satu class `Siswa`). Untuk kasus seperti ini, TypeScript menyediakan fitur **Default Export**.

Sintaks penulisan Default Export menggunakan kata kunci **`export default`**:

```ts
// File: siswa.ts
export default class Siswa {
  constructor(public nama: string) {}
}
```

Saat mengimpor default export di file penerima, kita **tidak perlu** menggunakan kurung kurawal `{ }` dan bebas memberi nama apa saja untuk komponen tersebut:

```ts
// File: main.ts
import SiswaDariPerpus from "./siswa"; // bebas tanpa kurung kurawal!
```

---

## Analogi Kehidupan Sehari-hari: Menu Utama Restoran

Bayangkan sebuah **Restoran Nasi Goreng Spesial**:

```text
Menu Utama (Default Export)
  └── Nasi Goreng Spesial (Hanya ada satu menu utama andalan restoran)

Menu Sampingan (Named Export)
  ├── Es Teh
  ├── Kerupuk
  └── Sate Usus
```

Saat kamu mendatangi restoran tersebut dan berkata kepada pelayan: *"Pesan menu andalan satu"* (impor default), pelayan langsung tahu yang dimaksud adalah Nasi Goreng tanpa perlu kamu sebutkan namanya. Tetapi jika ingin memesan es teh atau kerupuk, kamu harus menyebutkan namanya secara spesifik (impor bernama / named).

---

## Visual Illustration: Default vs Named Import

```text
NAMED IMPORT (Butuh Kurung Kurawal & Nama Harus Sama)
import { KKM_SEKOLAH } from "./util";

DEFAULT IMPORT (Tanpa Kurung Kurawal & Nama Bebas)
import Siswa from "./siswa";
import SiswaBaru from "./siswa"; // nama bebas diganti, tetap merujuk ke class utama
```

---

## Mari Mencoba: Implementasi Default Export

Mari kita buat modul class `Siswa` menggunakan Default Export dan mengimpornya di file aplikasi utama.

### Langkah 1: Buat `src/bab10/siswa-default.ts`
```ts
// Mengekspor class Siswa sebagai default export utama file ini
export default class Siswa {
  constructor(
    public nama: string,
    public kelas: string
  ) {}

  tampilkan(): void {
    console.log(`Siswa: ${this.nama} | Kelas: ${this.kelas}`);
  }
}
```

### Langkah 2: Buat `src/bab10/main-default.ts`
```ts
// Mengimpor default export tanpa tanda kurung kurawal {}
import SiswaRPL from "./siswa-default"; // nama bebas disesuaikan menjadi SiswaRPL

const s = new SiswaRPL("Putra Ramadhan", "XI RPL 1");
s.tampilkan();
```

Jalankan dengan perintah:
```text
tsx src/bab10/main-default.ts
```

## Output
```text
Siswa: Putra Ramadhan | Kelas: XI RPL 1
```

---

## Penjelasan Baris per Baris

- `export default class Siswa` — Menandai class `Siswa` sebagai komoditas utama yang diekspor dari file tersebut. Hanya diperbolehkan ada **maksimal satu** `export default` di dalam satu file.
- `import SiswaRPL from "./siswa-default"` — Mengimpor class utama tersebut. Karena tidak memakai kurung kurawal `{ }`, TypeScript tahu kita sedang mengimpor default member, dan mengizinkan kita menamainya ulang menjadi `SiswaRPL` secara instan.

---

## Kesalahan yang Sering Terjadi

### ❌ Menuliskan lebih dari satu `export default` di dalam satu file
```ts
export default class Siswa {}
export default class Guru {} // Error!
// A module cannot have multiple default exports.
```

**Perbaikan:** Jika memiliki beberapa komponen dalam satu file, gunakan Named Export (tanpa kata kunci `default`) untuk komponen lainnya.

---

## Latihan
1. Buat file `src/bab10/guru-default.ts` berisi default export class `Guru` (nama, nip).
2. Buat file `src/bab10/main-latihan-default.ts`, import class tersebut dengan nama `GuruSekolah`, buat objeknya dan tampilkan.

---

## Ringkasan
- `export default` digunakan untuk mengekspor satu komponen utama dari file module.
- Hanya boleh ada maksimal satu default export per file.
- Diimpor tanpa menggunakan kurung kurawal `{ }`.
- Nama komponen default bebas diubah saat diimpor di file penerima.

:::tip[Langkah Selanjutnya]
Lanjut ke **Named Export** untuk memahami perbedaannya secara mendetail.
:::
