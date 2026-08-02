---
title: "Array: concat"
description: Menggabungkan dua atau lebih array menjadi satu array baru menggunakan method concat().
---

# Array: `concat`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menggabungkan beberapa array menjadi satu array baru menggunakan `concat()`.

---

## Pendahuluan

Kadang kita memiliki data dari beberapa kelompok yang ingin disatukan. Misalnya: daftar siswa kelas X dan kelas XI, atau daftar belanja hari ini dan hari esok. Method `concat()` dirancang untuk tugas ini.

---

## Penjelasan Materi

Method `concat()` (singkatan dari *concatenate* / menggabungkan) membuat array baru yang berisi elemen-elemen dari array pemanggil diikuti oleh elemen-elemen dari array yang dikirim sebagai parameter.

```ts
const baru = array1.concat(array2)
```

`concat()` adalah method **immutable** — ia tidak mengubah `array1` maupun `array2`. Ia selalu mengembalikan array ketiga yang baru.

---

## Analogi Kehidupan Sehari-hari

### Menggabungkan Dua Dus Buku

Kamu memiliki dua kardus berisi buku:

- Kardus A berisi buku Matematika
- Kardus B berisi buku Bahasa Indonesia

Kamu mengambil kardus baru yang lebih besar (Kardus C), lalu memindahkan isi Kardus A dan Kardus B ke dalamnya. Kardus A dan Kardus B aslimu tetap aman, dan sekarang kamu memiliki Kardus C yang berisi gabungan semua buku.

---

## Visual Illustration

```text
array1: ["Apel"]
array2: ["Mangga", "Jeruk"]

const gabung = array1.concat(array2)

gabung:  ["Apel", "Mangga", "Jeruk"]  (Array Baru ✓)
array1:  ["Apel"]                      (Tetap utuh ✓)
array2:  ["Mangga", "Jeruk"]           (Tetap utuh ✓)
```

---

## Mari Mencoba

Buat `src/bab5/concat.ts`:

```ts
const siswaKelasA: string[] = ["Andi", "Budi"]
const siswaKelasB: string[] = ["Citra", "Dian"]
const siswaKelasC: string[] = ["Eko"]

// Menggabungkan dua array
const gabungDua = siswaKelasA.concat(siswaKelasB)
console.log("Gabung 2:", gabungDua)

// Menggabungkan tiga array sekaligus
const gabungSemua = siswaKelasA.concat(siswaKelasB, siswaKelasC)
console.log("Gabung 3:", gabungSemua)

// Menambahkan elemen tunggal ke gabungan
const denganTamu = siswaKelasA.concat("Tamu Baru", siswaKelasB)
console.log("Dengan tamu:", denganTamu)

// Verifikasi array asli tidak berubah
console.log("\nKelas A asli:", siswaKelasA)
```

Jalankan:

```text
tsx src/bab5/concat.ts
```

## Output

```text
Gabung 2: [ 'Andi', 'Budi', 'Citra', 'Dian' ]
Gabung 3: [ 'Andi', 'Budi', 'Citra', 'Dian', 'Eko' ]
Dengan tamu: [ 'Andi', 'Budi', 'Tamu Baru', 'Citra', 'Dian' ]

Kelas A asli: [ 'Andi', 'Budi' ]
```

---

## Penjelasan Baris per Baris

- `siswaKelasA.concat(siswaKelasB)` — menggabungkan Kelas A dan Kelas B menjadi array baru.
- `concat(...)` bisa menerima lebih dari satu array sebagai argument.
- `concat("Tamu Baru", ...)` — kita juga bisa menyisipkan nilai tunggal (bukan array) di tengah-tengah penggabungan.
- `siswaKelasA` di akhir program tetap berisi dua elemen aslinya.

---

## Alternatif Modern: Spread Operator `...`

Dalam TypeScript/JavaScript modern, ada cara alternatif yang sangat populer menggunakan **spread operator** (`...`):

```ts
const gabung = [...siswaKelasA, ...siswaKelasB]
console.log(gabung) // ["Andi", "Budi", "Citra", "Dian"]
```

Spread operator "membuka" isi array dan memasukkannya ke dalam array baru.

---

## Kesalahan yang Sering Terjadi

```ts
const a = [1]
const b = [2]
a.concat(b) // Memanggil tanpa menyimpan hasil
console.log(a) // Output: [1] (b tidak ikut masuk!)
```

**Mengapa?** Karena `concat()` tidak mengubah `a` secara langsung.

**Perbaikan:** Selalu simpan hasil `concat()` ke variabel baru:

```ts
const c = a.concat(b) // ✓
```

---

## Tips

:::tip[Spread Operator vs Concat]
Gunakan `concat()` jika kamu menyukai gaya pemanggilan method. Gunakan spread operator `[...a, ...b]` jika kamu ingin sintaksis yang lebih modern dan fleksibel.
:::

---

## Latihan

Buat dua array berisi daftar makanan ringan favoritmu dan temanmu. Gabungkan keduanya menjadi satu array baru bernama `pestaCamilan`. Tampilkan hasilnya.

---

## Ringkasan

- `concat()` menggabungkan dua atau lebih array menjadi satu array baru.
- Method ini bersifat **immutable** (tidak mengubah array asli).
- Parameter bisa berupa array maupun elemen tunggal.
- Spread operator `[...]` adalah alternatif modern yang populer.

:::tip[Langkah Selanjutnya]
Lanjut ke **includes & indexOf**.
:::
