---
title: "Array: splice & slice"
description: Memodifikasi bagian tengah array dengan splice() dan mengambil salinan sebagian array dengan slice().
---

# Array: `splice` & `slice`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membedakan `splice()` dan `slice()`, memotong data dengan `slice()`, serta menambah/menghapus elemen di tengah dengan `splice()`.

---

## Pendahuluan

Dua method ini sering membingungkan karena namanya mirip. Namun fungsinya bertolak belakang: `splice()` mengubah array asli, sedangkan `slice()` membuat salinan baru tanpa mengubah array asli.

---

## Penjelasan Materi

### `splice()` — Memodifikasi Array Asli (Mutable)

`splice()` digunakan untuk menghapus, menambah, atau mengganti elemen di indeks mana saja:

```ts
array.splice(mulai, jumlahHapus, ...elemenBaru)
```

### `slice()` — Menyalin Sebagian Array (Immutable)

`slice()` menyalin bagian tertentu dari array dan mengembalikannya sebagai array baru:

```ts
array.slice(mulai, akhir) // akhir tidak termasuk hasil salin
```

---

## Analogi Kehidupan Sehari-hari

### ✂️ splice() = Memotong dan Menyambung Pita

Bayangkan seutas pita: kamu memotong bagian tengahnya, membuang potongan itu, lalu menyambungnya kembali dengan pita baru. Pita aslimu telah **berubah bentuknya**.

### 🖨️ slice() = Memfotokopi Sebagian Halaman Buku

Kamu punya buku tebal. Kamu memfotokopi halaman 10 sampai 15. Buku aslimu **tetap utuh dan tidak rusak**. Kamu mendapatkan lembaran kertas fotokopi baru (array baru).

---

## Mari Mencoba

Buat `src/bab5/splice-slice.ts`:

```ts
// 1. Contoh splice() (Mengubah array asli)
const siswaSplice: string[] = ["Andi", "Budi", "Citra", "Dian"]
console.log("=== SPLICE ===")
console.log("Awal :", siswaSplice)

// Hapus 2 elemen mulai dari indeks 1 ("Budi" & "Citra")
const dihapus = siswaSplice.splice(1, 2)
console.log("Hapus:", siswaSplice, "| dihapus:", dihapus)

// Sisipkan "Eko" dan "Fira" di indeks 1 tanpa menghapus
siswaSplice.splice(1, 0, "Eko", "Fira")
console.log("Sisip:", siswaSplice)


// 2. Contoh slice() (Salinan, array asli tetap)
const siswaSlice: string[] = ["Andi", "Budi", "Citra", "Dian"]
console.log("\n=== SLICE ===")
console.log("Awal :", siswaSlice)

// Salin dari indeks 1 sampai sebelum indeks 3 (indeks 1 & 2)
const salinan = siswaSlice.slice(1, 3)
console.log("Hasil:", salinan)
console.log("Akhir:", siswaSlice, " (tetap utuh!)")
```

Jalankan:

```text
tsx src/bab5/splice-slice.ts
```

## Output

```text
=== SPLICE ===
Awal : [ 'Andi', 'Budi', 'Citra', 'Dian' ]
Hapus: [ 'Andi', 'Dian' ] | dihapus: [ 'Budi', 'Citra' ]
Sisip: [ 'Andi', 'Eko', 'Fira', 'Dian' ]

=== SLICE ===
Awal : [ 'Andi', 'Budi', 'Citra', 'Dian' ]
Hasil: [ 'Budi', 'Citra' ]
Akhir: [ 'Andi', 'Budi', 'Citra', 'Dian' ]  (tetap utuh!)
```

---

## Penjelasan Baris per Baris

- `siswaSplice.splice(1, 2)` — mulai dari indeks 1, hapus 2 elemen. Array asli berkurang.
- `siswaSplice.splice(1, 0, "Eko", "Fira")` — mulai dari indeks 1, hapus 0 elemen, lalu sisipkan dua nama baru.
- `siswaSlice.slice(1, 3)` — menyalin elemen indeks 1 dan 2. Indeks 3 ("Dian") tidak diikutkan.
- `siswaSlice` di akhir program tetap memiliki 4 elemen semula.

---

## Perbandingan Parameter

| Method | Parameter 1 | Parameter 2 | Parameter 3+ | Hasil |
|---|---|---|---|---|
| `splice()` | Indeks mulai | Jumlah yang dihapus | Elemen penyisip | Array asli diubah |
| `slice()` | Indeks mulai | Indeks batas akhir | (tidak ada) | Array baru disalin |

---

## Kesalahan yang Sering Terjadi

### ❌ Mengira parameter kedua `slice()` adalah jumlah elemen

```ts
const data = ["A", "B", "C", "D"]
const hasil = data.slice(1, 2)
console.log(hasil) // Output: ["B"] (bukan ["B", "C"]!)
```

**Perbaikan:** Parameter kedua `slice` adalah indeks batas akhir. Jika ingin mengambil 2 elemen dari indeks 1, gunakan `data.slice(1, 3)`.

---

## Tips

:::tip[Gunakan slice() untuk Salinan Penuh]
Memanggil `.slice()` tanpa parameter akan menyalin seluruh array. Ini cara aman menduplikasi array sebelum dimodifikasi: `const dataBaru = dataAsli.slice()`.
:::

---

## Latihan

Buat array berisi nama 5 hewan.
1. Gunakan `slice()` untuk menyalin hewan ke-2 dan ke-3 ke array baru.
2. Gunakan `splice()` untuk mengganti hewan ke-4 dengan hewan baru di array asli. Tampilkan hasilnya.

---

## Ringkasan

- `splice()` menambah, menghapus, atau mengganti elemen di array asli (mutable).
- `slice()` menyalin bagian tertentu dan menghasilkan array baru (immutable).
- `slice(mulai, akhir)` tidak mengikutkan elemen pada indeks `akhir`.

:::tip[Langkah Selanjutnya]
Lanjut ke **concat**.
:::
