---
title: "Aturan Penamaan Variabel"
description: Konvensi dan aturan penamaan variabel di TypeScript — camelCase, karakter yang boleh digunakan, dan nama yang harus dihindari.
---

# Aturan Penamaan Variabel

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Membedakan aturan **wajib** dan **konvensi** penamaan variabel
- Menulis nama variabel menggunakan gaya camelCase
- Menghindari nama variabel yang buruk atau tidak valid

---

## Pendahuluan

Dalam programming, nama variabel itu penting. Bukan hanya agar kode bisa berjalan, tapi agar kode bisa **dibaca dan dipahami** — oleh diri sendiri di masa depan, dan oleh orang lain yang bekerja bersama kamu.

Ada dua hal yang perlu dipisahkan: **aturan wajib** (jika dilanggar, program error) dan **konvensi** (tidak wajib, tapi sangat dianjurkan karena sudah menjadi standar industri).

---

## Aturan Wajib (Syntax Rules)

Berikut adalah aturan yang **harus** diikuti. Melanggar aturan ini akan menyebabkan error:

### ✅ Harus dimulai dengan huruf, underscore `_`, atau dollar sign `$`

```ts
let nama = "Putra"      // ✓ dimulai huruf
let _sementara = 0      // ✓ dimulai underscore
let $harga = 5000       // ✓ dimulai dollar sign
```

### ❌ Tidak boleh dimulai dengan angka

```ts
let 1nilai = 90         // Error!
let 2tahun = 2024       // Error!
```

### ✅ Boleh mengandung huruf, angka, underscore, dollar sign

```ts
let nilai1 = 90         // ✓ mengandung angka
let nama_siswa = "Ani"  // ✓ mengandung underscore
```

### ❌ Tidak boleh mengandung spasi atau karakter khusus

```ts
let nama siswa = "Ani"   // Error! (ada spasi)
let nilai-ujian = 90     // Error! (ada tanda minus)
let nama@siswa = "Ani"   // Error! (ada @)
```

### ❌ Tidak boleh menggunakan kata kunci TypeScript/JavaScript

Beberapa kata sudah "dipakai" oleh TypeScript dan tidak bisa digunakan sebagai nama variabel:

```ts
let let = "apapun"       // Error!
let const = 100          // Error!
let return = true        // Error!
let class = "XI"         // Error!
```

---

## Konvensi Penamaan (Best Practices)

Ini bukan aturan wajib, tapi **standar industri** yang diikuti hampir semua programmer TypeScript/JavaScript:

### 🐫 camelCase untuk variabel dan fungsi

**camelCase** artinya kata pertama huruf kecil, setiap kata berikutnya diawali huruf kapital (seperti punuk unta).

```ts
let namaSiswa = "Putra"
let nilaiRataRata = 87.5
let tahunMasukSekolah = 2023
let sudahMengikutiUjianAkhir = true
```

### 🔤 UPPER_SNAKE_CASE untuk konstanta global

```ts
const NILAI_MAKSIMUM = 100
const NAMA_APLIKASI = "Sistem Nilai"
const BATAS_NILAI_LULUS = 75
```

### 📦 PascalCase untuk tipe, interface, dan class (BAB selanjutnya)

```ts
type DataSiswa = { ... }
interface HasilUjian = { ... }
```

---

## Ilustrasi: camelCase vs yang Lainnya

```
❌ Buruk (susah dibaca):
let x = "Putra"
let ns = "Putra"
let NamaSiswa = "Putra"
let nama_siswa = "Putra"

✅ Baik (camelCase):
let namaSiswa = "Putra"
let nilaiMatematika = 92
let statusKelulusan = true
```

---

## Nama yang Deskriptif vs Tidak Deskriptif

Selain aturan penulisan, nama variabel juga harus **bermakna**:

```ts
// ❌ Tidak deskriptif — susah dipahami
let a = "Dewi"
let b = 17
let c = true

// ✅ Deskriptif — mudah dipahami
let namaSiswa = "Dewi"
let umurSiswa = 17
let statusAktif = true
```

Bayangkan kamu membuka kode yang kamu tulis 6 bulan lalu. Kamu lebih mudah memahami kode yang menggunakan `namaSiswa` daripada kode yang menggunakan `a`.

---

## Mari Mencoba

Buat file `src/bab1/penamaan-variabel.ts`:

```ts
// Nama variabel yang baik dan deskriptif
const namaLengkap: string = "Putra Ramadhan"
const tanggalLahir: string = "15 Maret 2007"
const namaSekolah: string = "SMKS Antartika 1 Sidoarjo"
let kelasSaatIni: string = "X RPL 1"
let nilaiRataRata: number = 88.5
let statusAktif: boolean = true
let jumlahAbsensi: number = 0

console.log("=== DATA SISWA ===")
console.log("Nama         :", namaLengkap)
console.log("Tanggal Lahir:", tanggalLahir)
console.log("Sekolah      :", namaSekolah)
console.log("Kelas        :", kelasSaatIni)
console.log("Nilai Rata-rata:", nilaiRataRata)
console.log("Status Aktif :", statusAktif)
console.log("Jumlah Absensi:", jumlahAbsensi)
```

Jalankan:

```
tsx src/bab1/penamaan-variabel.ts
```

---

## Tabel Ringkasan Aturan

| Aturan | Contoh Valid | Contoh Tidak Valid |
|--------|-------------|-------------------|
| Dimulai huruf/`_`/`$` | `nama`, `_temp`, `$harga` | `1nama`, `99persen` |
| Tidak ada spasi | `namaSiswa` | `nama siswa` |
| Tidak ada simbol khusus | `nilai1` | `nilai-1`, `nilai@1` |
| Bukan kata kunci | `kelasKu` | `class`, `let`, `const` |
| camelCase (konvensi) | `nilaiRataRata` | `NilaiRataRata`, `nilai_rata_rata` |
| Deskriptif (konvensi) | `namaSiswa` | `a`, `x`, `tmp` |

---

## Kesalahan Umum

### ❌ Salah ketik nama variabel

```ts
let namaSiswa = "Putra"
console.log(namasIswa)   // Error! 'namasIswa' is not defined
```

TypeScript bersifat **case-sensitive** — huruf besar dan kecil dianggap berbeda. `namaSiswa` dan `namasIswa` adalah dua variabel yang berbeda!

**Cara memperbaiki:** Gunakan fitur **autocomplete** di VS Code — tekan `Ctrl + Space` untuk melihat saran nama variabel yang tersedia.

---

## Tips

:::tip[Gunakan Bahasa yang Konsisten]
Pilih satu bahasa untuk nama variabel dan konsisten. Jangan campur bahasa Indonesia dan Inggris dalam satu project:

```ts
// ❌ Tidak konsisten
let namaSiswa = "Putra"
let studentAge = 17
let kelas = "X RPL"

// ✅ Konsisten (semua Indonesia)
let namaSiswa = "Putra"
let umurSiswa = 17
let kelasSiswa = "X RPL"

// ✅ Konsisten (semua Inggris)
let studentName = "Putra"
let studentAge = 17
let studentClass = "X RPL"
```

Di guidebook ini kita menggunakan campuran Indonesia untuk memudahkan pemahaman, tapi di project nyata, pilih satu dan konsisten.
:::

---

## Latihan

Buat file `src/bab1/latihan-penamaan.ts`:

Dari daftar nama variabel berikut, mana yang valid? Mana yang tidak? Perbaiki yang tidak valid:

1. `let 2siswa = "Ani"`
2. `let nama siswa = "Budi"`
3. `let _cadangan = 0`
4. `let return = true`
5. `let nilaiAkhirSemester = 85`
6. `let harga-barang = 5000`
7. `const BATAS_LULUS = 75`
8. `let $temp = "sementara"`

---

## Ringkasan

**Aturan Wajib:**
- Dimulai dengan huruf, `_`, atau `$`
- Tidak boleh ada spasi atau karakter khusus
- Tidak boleh menggunakan kata kunci TypeScript

**Konvensi (Sangat Dianjurkan):**
- camelCase untuk variabel: `namaSiswa`, `nilaiRataRata`
- UPPER_SNAKE_CASE untuk konstanta global: `NILAI_MAKSIMUM`
- Nama harus deskriptif — jelas menggambarkan isinya
- TypeScript bersifat case-sensitive!

:::tip[Langkah Selanjutnya]
Sekarang kita sudah paham tentang variabel. Saatnya masuk ke topik berikutnya: **Tipe Data** — jenis-jenis nilai yang bisa disimpan dalam variabel.
:::
