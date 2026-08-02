---
title: "Anonymous Function"
description: Memahami fungsi tanpa nama yang disimpan dalam variabel di TypeScript.
---

# Anonymous Function

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat anonymous function dan memahami kapan menggunakannya.

---

## Pendahuluan

Selama ini kita membuat function dengan nama eksplisit seperti `function sapa(...)`. Tapi function juga bisa dibuat **tanpa nama** dan disimpan langsung ke dalam variabel. Inilah **anonymous function** (fungsi anonim).

---

## Penjelasan Materi

```ts
// Function biasa (named function)
function tambah(a: number, b: number): number {
  return a + b
}

// Anonymous function (disimpan ke variabel)
const tambahAnon = function(a: number, b: number): number {
  return a + b
}
```

Keduanya melakukan hal yang sama. Perbedaannya adalah cara menyimpan dan merujuknya.

---

## Analogi

### Resep Tanpa Nama

Bayangkan ada resep masakan yang ditulis di selembar kertas tanpa judul. Kamu menaruh kertas itu di folder berlabel "Kue Coklat". Resepnya tidak punya nama sendiri, tapi kamu bisa menemukannya melalui label foldernya.

```text
Folder "kueCoklat"  →  [resep tanpa judul]
                               │
variabel "kueCoklat" →  [function tanpa nama]
```

---

## Mari Mencoba

Buat `src/bab4/anonymous-function.ts`:

```ts
const kuadrat = function(n: number): number {
  return n * n
}

const sapa = function(nama: string, waktu: string): string {
  return `Selamat ${waktu}, ${nama}!`
}

const hitungLulus = function(nilai: number): boolean {
  return nilai >= 75
}

// Memanggil sama seperti function biasa
console.log(kuadrat(5))                    // 25
console.log(kuadrat(12))                   // 144
console.log(sapa("Andi", "pagi"))          // Selamat pagi, Andi!
console.log(hitungLulus(80))               // true
console.log(hitungLulus(60))               // false

// Bisa disimpan ulang, dilewatkan, dll
const hitung = kuadrat
console.log(hitung(7))                     // 49
```

Jalankan:

```text
tsx src/bab4/anonymous-function.ts
```

## Output

```text
25
144
Selamat pagi, Andi!
true
false
49
```

---

## Penjelasan Baris per Baris

- `const kuadrat = function(n: number): number { ... }` — function tanpa nama disimpan ke variabel `kuadrat`.
- Variabel bisa menyimpan function seperti menyimpan angka atau teks.
- `const hitung = kuadrat` — menyalin referensi function ke variabel lain.

---

## Kapan Memakai Anonymous Function?

- Saat function hanya dipakai sekali di satu tempat.
- Saat function perlu disimpan sebagai nilai dalam variabel.
- Saat function akan dikirimkan sebagai argument (callback — dibahas halaman berikutnya).

---

## Kesalahan yang Sering Terjadi

```ts
console.log(anon(5)) // Error! Tidak bisa dipanggil sebelum dideklarasikan

const anon = function(n: number): number {
  return n * 2
}
```

Anonymous function yang disimpan di `const`/`let` tidak bisa dipanggil sebelum baris deklarasinya (berbeda dengan named function yang di-hoist).

---

## Latihan

1. Buat anonymous function `perkalian` yang mengembalikan hasil kali dua angka.
2. Simpan ke variabel dan panggil 3 kali.

---

## Ringkasan

- Anonymous function adalah function tanpa nama yang disimpan dalam variabel.
- Dipanggil melalui nama variabel, bukan nama function.
- Berguna untuk callback dan function yang disimpan sebagai nilai.

:::tip[Langkah Selanjutnya]
Lanjut ke **Arrow Function** — versi lebih singkat dari anonymous function.
:::
