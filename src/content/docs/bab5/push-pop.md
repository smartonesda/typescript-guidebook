---
title: "Array: push & pop"
description: Menambah dan menghapus elemen di bagian ujung (akhir) array menggunakan method push() dan pop().
---

# Array: `push` & `pop`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menambahkan elemen ke akhir array dengan `push()` dan menghapus elemen terakhir dengan `pop()`.

---

## Pendahuluan

Array bersifat dinamis — ukurannya bisa bertambah dan berkurang selama program berjalan. Method paling dasar untuk memodifikasi ukuran array dari belakang adalah `push()` dan `pop()`.

---

## Penjelasan Materi

### `push()` — Menambah ke Akhir

Method `push()` menambahkan satu atau lebih elemen baru ke **bagian akhir** array:

```ts
const buah = ["Apel"]
buah.push("Mangga") // ["Apel", "Mangga"]
```

### `pop()` — Menghapus dari Akhir

Method `pop()` menghapus elemen **terakhir** dari array dan mengembalikan elemen yang dihapus tersebut:

```ts
const buah = ["Apel", "Mangga"]
const terakhir = buah.pop() // terakhir = "Mangga", buah = ["Apel"]
```

---

## Analogi Kehidupan Sehari-hari

### Tumpukan Piring Bersih

Bayangkan tumpukan piring bersih di atas meja:

- `push()` seperti mencuci piring baru lalu **meletakkannya di paling atas** tumpukan.
- `pop()` seperti **mengambil piring paling atas** tumpukan untuk dipakai makan.

```text
       [Piring Baru] ──► push() ──► taruh di atas
            │
      [Tumpukan Piring]
            │
       [Piring Atas] ──► pop()  ──► ambil dari atas
```

Tindakan selalu terjadi di ujung atas (ujung akhir) tumpukan.

---

## Visual Illustration

```text
Awal:     ["Apel", "Mangga"]
push("Jeruk") ──► ["Apel", "Mangga", "Jeruk"]
pop()         ──► ["Apel", "Mangga"]  (Jeruk dihapus)
```

---

## Mari Mencoba

Buat `src/bab5/push-pop.ts`:

```ts
const daftarTugas: string[] = ["Belajar HTML", "Belajar CSS"]
console.log("Awal   :", daftarTugas)

// Menambah tugas baru di ujung
daftarTugas.push("Belajar JavaScript")
console.log("push(1):", daftarTugas)

daftarTugas.push("Belajar TypeScript", "Mengerjakan Latihan")
console.log("push(2):", daftarTugas)

// Menghapus tugas terakhir
const tugasSelesai = daftarTugas.pop()
console.log("\ntugasSelesai:", tugasSelesai)
console.log("Setelah pop :", daftarTugas)
```

Jalankan:

```text
tsx src/bab5/push-pop.ts
```

## Output

```text
Awal   : [ 'Belajar HTML', 'Belajar CSS' ]
push(1): [ 'Belajar HTML', 'Belajar CSS', 'Belajar JavaScript' ]
push(2): [ 'Belajar HTML', 'Belajar CSS', 'Belajar JavaScript', 'Belajar TypeScript', 'Mengerjakan Latihan' ]

tugasSelesai: Mengerjakan Latihan
Setelah pop : [ 'Belajar HTML', 'Belajar CSS', 'Belajar JavaScript', 'Belajar TypeScript' ]
```

---

## Penjelasan Baris per Baris

- `daftarTugas.push("Belajar JavaScript")` — menambahkan satu item ke akhir.
- `push(...)` bisa menerima beberapa argument sekaligus dipisahkan koma.
- `daftarTugas.pop()` — mengambil elemen terakhir (`"Mengerjakan Latihan"`), menghapusnya dari array, lalu menyimpannya ke `tugasSelesai`.

---

## Kesalahan yang Sering Terjadi

```ts
const buah = ["Apel"]
const hasil = buah.push("Mangga")
console.log(hasil) // Output: 2 (bukan array-nya!)
```

Method `.push()` mengembalikan **panjang array yang baru** (angka `2`), bukan array yang sudah diperbarui. Jika ingin melihat array-nya, cetak variabel `buah`.

---

## Tips

:::tip[Method Mutable]
`push()` dan `pop()` adalah method **mutable** — mereka mengubah array asli yang dipanggil. Hati-hati jika kamu membutuhkan data asli tetap utuh.
:::

---

## Latihan

Buat sebuah array belanja berisi 2 barang. Tambahkan 2 barang baru menggunakan `push()`. Hapus barang terakhir menggunakan `pop()` dan tampilkan barang yang dihapus beserta keranjang belanja akhir.

---

## Ringkasan

- `push()` menambah satu/lebih elemen di akhir array.
- `pop()` menghapus satu elemen terakhir dan mengembalikannya.
- Kedua method ini memodifikasi (mengubah) array asli.

:::tip[Langkah Selanjutnya]
Lanjut ke **shift & unshift**.
:::
