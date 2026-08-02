---
title: "Tipe Data: boolean"
description: Mempelajari tipe data boolean — true dan false, penggunaannya dalam kondisi, dan operator logika dasar.
---

# Tipe Data: `boolean`

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Menggunakan tipe `boolean` untuk menyimpan nilai benar atau salah
- Memahami kapan boolean digunakan
- Menggunakan operator perbandingan yang menghasilkan boolean
- Menggunakan operator logika: `&&`, `||`, `!`

---

## Pendahuluan

Ada banyak situasi dalam kehidupan yang hanya punya dua kemungkinan jawaban: **ya atau tidak**, **benar atau salah**, **aktif atau nonaktif**, **lulus atau tidak lulus**.

Tipe data `boolean` dirancang khusus untuk situasi semacam itu.

---

## Penjelasan Materi

`boolean` adalah tipe data yang hanya memiliki **dua kemungkinan nilai**:

- `true` — benar / ya / aktif
- `false` — salah / tidak / nonaktif

Tidak ada nilai lain. Hanya `true` atau `false`.

:::note[Perhatikan Penulisannya]
`true` dan `false` ditulis dengan **huruf kecil semua** di TypeScript. Bukan `True`, bukan `False`, bukan `TRUE`.
:::

---

## Analogi: Saklar Lampu

Bayangkan tipe `boolean` seperti **saklar lampu**:

```
Saklar NYALA → true
Saklar MATI  → false
```

Saklar hanya punya dua posisi — tidak ada "setengah nyala". Begitu pula boolean — hanya `true` atau `false`, tidak ada nilai di antaranya.

Contoh penggunaan di kehidupan sehari-hari:

| Situasi | Nilai boolean |
|---------|--------------|
| Siswa hadir | `true` |
| Siswa tidak hadir | `false` |
| Sudah mengumpulkan tugas | `true` |
| Belum mengumpulkan tugas | `false` |
| Nilai di atas 75 | `true` atau `false` bergantung nilainya |

---

## Mari Mencoba

Buat file `src/bab1/boolean.ts`:

```ts
// Deklarasi variabel boolean
const sudahLulus: boolean = true
const sedangSakit: boolean = false
let sudahMengumpulkanTugas: boolean = false
let statusAktif: boolean = true

console.log("Sudah lulus?", sudahLulus)
console.log("Sedang sakit?", sedangSakit)
console.log("Sudah kumpul tugas?", sudahMengumpulkanTugas)
console.log("Status aktif?", statusAktif)

// Mengubah status
sudahMengumpulkanTugas = true
console.log("Setelah kumpul tugas:", sudahMengumpulkanTugas)
```

Jalankan:

```
tsx src/bab1/boolean.ts
```

Output:

```
Sudah lulus? true
Sedang sakit? false
Sudah kumpul tugas? false
Status aktif? true
Setelah kumpul tugas: true
```

---

## Operator Perbandingan yang Menghasilkan Boolean

Sering kali nilai boolean tidak langsung ditulis `true` atau `false`, tapi dihasilkan dari **perbandingan**:

```ts
let nilai: number = 80

// Operator perbandingan
console.log(nilai > 75)    // true — nilai lebih besar dari 75?
console.log(nilai < 60)    // false — nilai lebih kecil dari 60?
console.log(nilai >= 80)   // true — nilai lebih besar atau sama dengan 80?
console.log(nilai <= 100)  // true — nilai lebih kecil atau sama dengan 100?
console.log(nilai === 80)  // true — nilai sama persis dengan 80?
console.log(nilai !== 90)  // true — nilai tidak sama dengan 90?
```

| Operator | Artinya | Contoh | Hasil |
|----------|---------|--------|-------|
| `>` | Lebih besar | `80 > 75` | `true` |
| `<` | Lebih kecil | `80 < 75` | `false` |
| `>=` | Lebih besar atau sama | `80 >= 80` | `true` |
| `<=` | Lebih kecil atau sama | `80 <= 100` | `true` |
| `===` | Sama persis | `80 === 80` | `true` |
| `!==` | Tidak sama | `80 !== 90` | `true` |

:::caution[Gunakan === bukan ==]
Di TypeScript, selalu gunakan `===` (tiga sama dengan) untuk perbandingan, bukan `==` (dua sama dengan). Perbedaannya:

- `===` membandingkan nilai **dan** tipe data
- `==` hanya membandingkan nilai (bisa menyebabkan hasil tak terduga)

```ts
console.log(0 == false)    // true  — berbahaya!
console.log(0 === false)   // false — benar!
```
:::

---

## Operator Logika

Operator logika digunakan untuk menggabungkan beberapa kondisi boolean:

### `&&` — AND (dan)

Menghasilkan `true` hanya jika **kedua kondisi benar**:

```ts
let nilai: number = 85
let kehadiran: number = 80

let lulusUjian: boolean = nilai >= 75
let cukupHadir: boolean = kehadiran >= 75

let bolehIkutUjianSusulan: boolean = lulusUjian && cukupHadir
console.log("Boleh ikut ujian susulan?", bolehIkutUjianSusulan)   // true
```

### `||` — OR (atau)

Menghasilkan `true` jika **salah satu kondisi benar**:

```ts
let punyaKTP: boolean = false
let punyaSuratKeterangan: boolean = true

let bisaDaftar: boolean = punyaKTP || punyaSuratKeterangan
console.log("Bisa daftar?", bisaDaftar)   // true
```

### `!` — NOT (bukan)

Membalik nilai boolean:

```ts
let sedangSakit: boolean = false
let bisaMasukSekolah: boolean = !sedangSakit
console.log("Bisa masuk sekolah?", bisaMasukSekolah)   // true
```

---

## Program Lengkap: Cek Kelulusan

```ts
const namaSiswa: string = "Putra"
const nilaiAkhir: number = 82
const persentaseKehadiran: number = 85

// Syarat lulus
const nilaiMinimum: number = 75
const kehadiranMinimum: number = 75

// Cek kondisi
const nilaiLulus: boolean = nilaiAkhir >= nilaiMinimum
const kehadiranCukup: boolean = persentaseKehadiran >= kehadiranMinimum
const dinyatakanLulus: boolean = nilaiLulus && kehadiranCukup

console.log(`=== CEK KELULUSAN: ${namaSiswa} ===`)
console.log(`Nilai akhir   : ${nilaiAkhir}`)
console.log(`Kehadiran     : ${persentaseKehadiran}%`)
console.log(`Nilai lulus?  : ${nilaiLulus}`)
console.log(`Hadir cukup?  : ${kehadiranCukup}`)
console.log(`DINYATAKAN    : ${dinyatakanLulus ? "LULUS" : "TIDAK LULUS"}`)
```

---

## Kesalahan Umum

### ❌ Menulis True / False (huruf besar)

```ts
let aktif: boolean = True    // Error! 'True' bukan boolean
let aktif: boolean = False   // Error! 'False' bukan boolean
```

**Cara memperbaiki:**

```ts
let aktif: boolean = true    // ✓
let aktif: boolean = false   // ✓
```

### ❌ Menggunakan `==` bukannya `===`

```ts
let angka: number = 0
console.log(angka == false)    // true — tidak terduga!
console.log(angka === false)   // false — benar secara logis
```

---

## Latihan

Buat file `src/bab1/latihan-boolean.ts`:

1. Buat variabel `namaSiswa` (string) dan `nilai` (number)
2. Buat variabel boolean `lulusUjian` — bernilai `true` jika `nilai >= 70`
3. Buat variabel boolean `nilaiBagus` — bernilai `true` jika `nilai >= 85`
4. Tampilkan status: lulus atau tidak, nilai bagus atau tidak
5. Gunakan template literal untuk output yang rapi

---

## Ringkasan

- `boolean` hanya punya dua nilai: `true` dan `false`
- Ditulis dengan huruf kecil semua
- Sering dihasilkan dari operator perbandingan: `>`, `<`, `>=`, `<=`, `===`, `!==`
- Operator logika: `&&` (dan), `||` (atau), `!` (tidak/kebalikan)
- Selalu gunakan `===` bukan `==` untuk perbandingan

:::tip[Langkah Selanjutnya]
Lanjut ke **null dan undefined** — dua tipe yang sering membingungkan pemula.
:::
