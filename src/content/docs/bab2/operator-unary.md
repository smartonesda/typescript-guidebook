---
title: "Operator Unary"
description: "Menggunakan operator satu nilai: ++, --, -, +, !, dan typeof."
---

# Operator Unary

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat memakai operator unary untuk mengubah atau memeriksa satu nilai.

---

## Pendahuluan

Kebanyakan operator bekerja pada dua nilai, seperti `5 + 3`. Namun ada operator yang bekerja hanya pada **satu** nilai. Operator ini disebut unary.

---

## Analogi Kehidupan Sehari-hari

Bayangkan tombol pada penghitung nomor antrean:

```text
[ +1 ] menaikkan nomor satu langkah
[ -1 ] menurunkan nomor satu langkah
```

Tidak perlu dua angka. Tombol itu bekerja pada angka antrean yang sedang ada. Itulah ide operator unary.

---

## Penjelasan Materi

| Operator | Fungsi | Contoh |
|---|---|---|
| `++` | tambah satu | `jumlah++` |
| `--` | kurang satu | `jumlah--` |
| `-` | membuat negatif | `-nilai` |
| `+` | mengubah ke angka bila memungkinkan | `+"12"` |
| `!` | membalik boolean | `!aktif` |
| `typeof` | melihat tipe data | `typeof nama` |

---

## Mari Mencoba

Buat `src/bab2/operator-unary.ts`:

```ts
let jumlahHadir: number = 30
let statusAktif: boolean = true
const teksNilai: string = "85"

jumlahHadir++
console.log(`Setelah satu siswa hadir: ${jumlahHadir}`)

jumlahHadir--
console.log(`Setelah satu siswa pulang: ${jumlahHadir}`)

console.log(`Status dibalik: ${!statusAktif}`)
console.log(`Tipe jumlahHadir: ${typeof jumlahHadir}`)
console.log(`Nilai teks menjadi angka: ${+teksNilai + 5}`)
```

Jalankan:

```text
tsx src/bab2/operator-unary.ts
```

---

## Output

```text
Setelah satu siswa hadir: 31
Setelah satu siswa pulang: 30
Status dibalik: false
Tipe jumlahHadir: number
Nilai teks menjadi angka: 90
```

---

## Penjelasan Baris per Baris

- `jumlahHadir++` sama dengan `jumlahHadir += 1`.
- `jumlahHadir--` sama dengan `jumlahHadir -= 1`.
- `!statusAktif` membalik `true` menjadi `false`.
- `typeof jumlahHadir` menghasilkan teks nama tipe: `"number"`.
- `+teksNilai` mencoba mengubah string angka menjadi number sebelum ditambah 5.

---

## Kesalahan Umum

```ts
const jumlah: number = 10
jumlah++ // Error
```

`++` mengubah nilai, jadi variabel harus memakai `let`.

```ts
const nama = "Putra"
console.log(+nama) // NaN
```

Unary `+` hanya cocok untuk string yang benar-benar berisi angka. Gunakan `Number()` jika ingin konversi lebih jelas.

---

## Tips

:::tip[Utamakan Kejelasan]
Untuk pemula, `nilai += 1` kadang lebih jelas daripada `nilai++`. Keduanya benar. Gunakan gaya yang paling mudah dibaca timmu.
:::

---

## Latihan

Buat penghitung kursi kosong. Mulai dari 36, kurangi satu saat siswa datang, tambah satu saat siswa keluar. Tampilkan setiap perubahan.

---

## Ringkasan

- Unary bekerja pada satu nilai.
- `++` dan `--` memperbarui angka satu langkah.
- `!` membalik boolean.
- `typeof` membantu memeriksa tipe data saat belajar/debugging.

:::tip[Langkah Selanjutnya]
Lanjut ke **Operator Nullish**.
:::

