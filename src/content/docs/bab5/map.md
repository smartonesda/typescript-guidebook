---
title: "Array: map"
description: Mengubah bentuk atau memanipulasi setiap elemen array menjadi data baru dengan map().
---

# Array: `map`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menggunakan `map()` untuk mentransformasikan setiap elemen array dan menghasilkan array baru dengan panjang yang sama.

---

## Pendahuluan

`filter()` digunakan untuk mengurangi jumlah elemen. Bagaimana jika kita ingin mengubah **setiap** elemen menjadi bentuk baru? Misalnya: mengubah semua nama siswa menjadi huruf kapital, atau memformat semua angka harga menjadi teks rupiah. Kita menggunakan method `.map()`.

---

## Penjelasan Materi

Method `map()` membuat array baru berisi hasil pemrosesan callback function pada **setiap** elemen array asli secara berurutan.

```ts
const hasilMap = array.map((elemen) => nilaiBaru)
```

Ciri khas `map()`:
1. **Panjang array hasil selalu sama** dengan panjang array asli.
2. Tidak mengubah array asli (immutable).

---

## Analogi Kehidupan Sehari-hari

### Menempelkan Label Harga Baru

Kamu memiliki tumpukan kotak sepatu polos di rak toko. Kepala toko menyuruhmu menempelkan label harga Rp100.000 pada **setiap** kotak tersebut.

```text
Sebelum:  [ Kotak 1 ] [ Kotak 2 ] [ Kotak 3 ]
Tindakan: Tempel label pada setiap kotak (map)
Sesudah:  [ Kotak 1 + Label ] [ Kotak 2 + Label ] [ Kotak 3 + Label ]
```

Jumlah kotak tetap 3, tapi bentuk penampilannya sekarang sudah berubah (memiliki label).

---

## Visual Illustration

```text
const angka = [1, 2, 3]

// kalikan setiap angka dengan 10
const hasil = angka.map((x) => x * 10)

Proses:
1 ──► 1 * 10 ──► 10
2 ──► 2 * 10 ──► 20
3 ──► 3 * 10 ──► 30

Hasil: [10, 20, 30]  (Array Baru ✓, panjang tetap 3)
```

---

## Mari Mencoba

Buat `src/bab5/map.ts`:

```ts
const daftarSiswa: string[] = ["Andi", "Budi", "Citra"]

// 1. Mengubah nama menjadi huruf kapital semua
const siswaKapital = daftarSiswa.map((nama) => nama.toUpperCase())
console.log("Kapital:", siswaKapital)

// 2. Mengubah nama menjadi object lengkap
type SiswaObj = { nama: string; kelas: string }
const siswaObjek: SiswaObj[] = daftarSiswa.map((nama) => {
  return {
    nama: nama,
    kelas: "XI RPL 1",
  }
})
console.log("Objek  :", siswaObjek)

// 3. Memformat harga number menjadi string Rupiah
const daftarHarga: number[] = [15000, 25000, 50000]
const hargaRupiah = daftarHarga.map((harga) => `Rp${harga.toLocaleString("id-ID")}`)
console.log("Harga  :", hargaRupiah)
```

Jalankan:

```text
tsx src/bab5/map.ts
```

## Output

```text
Kapital: [ 'ANDI', 'BUDI', 'CITRA' ]
Objek  : [
  { nama: 'Andi', kelas: 'XI RPL 1' },
  { nama: 'Budi', kelas: 'XI RPL 1' },
  { nama: 'Citra', kelas: 'XI RPL 1' }
]
Harga  : [ 'Rp15.000', 'Rp25.000', 'Rp50.000' ]
```

---

## Penjelasan Baris per Baris

- `daftarSiswa.map((nama) => nama.toUpperCase())` — setiap nama diproses dan diubah menjadi huruf besar. Hasilnya dikumpulkan ke array `siswaKapital`.
- `daftarHarga.map(...)` — mengubah tipe data array dari `number[]` menjadi array baru bertipe `string[]`. `map()` sangat berguna untuk mengubah tipe data koleksi.

---

## Kesalahan yang Sering Terjadi

### ❌ Menggunakan map() tapi lupa menulis return (jika multiline block)

```ts
const hasil = angka.map((x) => {
  const kali = x * 2
  // lupa return kali!
})
console.log(hasil) // [undefined, undefined, undefined]
```

**Perbaikan:** Jika callback `map()` menggunakan kurung kurawal `{}`, wajib menulis kata kunci `return`. Jika satu baris (implicit return), kurung kurawal dan keyword `return` dihilangkan.

---

## Tips

:::tip[Pilih forEach untuk Efek Samping, map untuk Data Baru]
Jangan gunakan `map()` jika kamu hanya ingin mencetak data ke layar (gunakan `forEach` atau `for...of`). Gunakan `map()` hanya ketika kamu **membutuhkan array baru** hasil transformasi tersebut.
:::

---

## Latihan

Buat array berisi 5 angka. Gunakan `map()` untuk menghasilkan array baru berisi hasil **pangkat dua** dari masing-masing angka tersebut. Tampilkan hasilnya.

---

## Ringkasan

- `map()` mentransformasikan setiap elemen array menjadi bentuk baru.
- Panjang array hasil selalu sama dengan array asli.
- Menghasilkan array baru (tidak mengubah array asli).
- Pastikan callback mengembalikan nilai (return).

:::tip[Langkah Selanjutnya]
Lanjut ke **reduce**.
:::
