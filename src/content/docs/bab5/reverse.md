---
title: "Array: reverse"
description: Membalik urutan elemen array dari belakang ke depan menggunakan method reverse().
---

# Array: `reverse`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membalikkan urutan elemen array menggunakan `reverse()` dan memahami efek perubahannya pada array asli.

---

## Pendahuluan

Terkadang kita hanya perlu membalik urutan data yang sudah ada: daftar tugas terbaru ditampilkan paling atas, atau urutan antrean dibalik dari belakang ke depan. Kita menggunakan method `.reverse()`.

---

## Penjelasan Materi

Method `reverse()` membalik urutan elemen dalam array secara langsung. Elemen pertama menjadi terakhir, dan elemen terakhir menjadi pertama.

```ts
array.reverse()
```

`reverse()` adalah method **mutable** — ia langsung mengubah urutan dalam array asli yang dipanggil.

---

## Analogi Kehidupan Sehari-hari

### Membalik Urutan Buku di Rak

Kamu memiliki 3 buku berjejer di rak dari kiri ke kanan: Matematika, IPA, IPS. Kamu mengambil semuanya, lalu menyusunnya kembali dari kanan ke kiri: IPS, IPA, Matematika. Urutan di rak aslimu sekarang sudah **berubah sepenuhnya**.

```text
Sebelum: [Matematika] [IPA] [IPS]
Tindakan: Balik urutan rak (reverse)
Sesudah: [IPS] [IPA] [Matematika]
```

---

## Visual Illustration

```text
const angka = [1, 2, 3]

angka.reverse()

Hasil:
Index 0      Index 1      Index 2
+──────────+──────────+──────────+
|    3     |    2     |    1     |
+──────────+──────────+──────────+
```

---

## Mari Mencoba

Buat `src/bab5/reverse.ts`:

```ts
const daftarLangkah: string[] = ["Langkah 1", "Langkah 2", "Langkah 3"]
console.log("Awal   :", daftarLangkah)

// Membalik array asli
daftarLangkah.reverse()
console.log("Reverse:", daftarLangkah)

// Kombinasi sort() dan reverse() untuk string Z-A
const huruf: string[] = ["B", "D", "A", "C"]
huruf.sort().reverse()
console.log("\nZ ke A :", huruf)
```

Jalankan:

```text
tsx src/bab5/reverse.ts
```

## Output

```text
Awal   : [ 'Langkah 1', 'Langkah 2', 'Langkah 3' ]
Reverse: [ 'Langkah 3', 'Langkah 2', 'Langkah 1' ]

Z ke A : [ 'D', 'C', 'B', 'A' ]
```

---

## Penjelasan Baris per Baris

- `daftarLangkah.reverse()` — elemen pertama `"Langkah 1"` berpindah ke indeks terakhir, `"Langkah 3"` ke indeks 0.
- `huruf.sort().reverse()` — mengurutkan abjad A–Z dulu menggunakan `sort()`, lalu langsung membalik urutannya menjadi Z–A menggunakan `reverse()`. Ini adalah teknik perantaian method (*method chaining*) yang umum.

---

## Mengamankan Array Asli dari reverse()

Sama seperti `sort()`, jika kamu tidak ingin merusak data asli, salin array menggunakan `slice()` terlebih dahulu:

```ts
const dataAsli = ["A", "B", "C"]
const dataDibalik = dataAsli.slice().reverse()

console.log(dataAsli)    // ["A", "B", "C"] (aman!)
console.log(dataDibalik) // ["C", "B", "A"]
```

---

## Latihan

Buat array berisi nama 5 mata pelajaran.
1. Salin array tersebut.
2. Balik urutan salinan array tersebut dan tampilkan hasilnya di terminal. Pastikan array asli tetap utuh tidak berubah.

---

## Ringkasan

- `reverse()` membalik urutan elemen dalam array asli (mutable).
- Bisa dirantai dengan `sort()` untuk menghasilkan urutan abjad menurun (Z-A).
- Gunakan `.slice().reverse()` jika ingin menjaga array asli tetap aman.

:::tip[Langkah Selanjutnya]
Lanjut ke **Studi Kasus**.
:::
