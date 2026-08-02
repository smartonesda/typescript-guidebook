---
title: "Mini Project: Aplikasi Manajemen Daftar Siswa"
description: Membangun aplikasi terminal interaktif manajemen siswa menggunakan konsep BAB 1 sampai BAB 5.
---

# Mini Project: Aplikasi Manajemen Daftar Siswa

## Tujuan Pembelajaran

Setelah mini project ini, kamu dapat menggabungkan variabel, tipe data, operator, loop, function, dan method array untuk membangun aplikasi simulasi manajemen siswa.

---

## Pendahuluan

Kita akan membuat aplikasi **Manajemen Daftar Siswa** berbasis terminal. Aplikasi ini akan mengelola database siswa sederhana di memori, menyediakan fungsi untuk menambah, menghapus, mencari, dan mengurutkan siswa.

---

## Fitur Aplikasi

1. Tampilkan semua siswa terdaftar
2. Tambah siswa baru di akhir daftar (`push()`)
3. Hapus siswa berdasarkan nama (`splice()`)
4. Cari siswa berdasarkan kata kunci (`includes()` / `find()`)
5. Urutkan nama siswa A–Z (`sort()`)
6. Tampilkan statistik (total siswa)

---

## Visual Architecture

```text
Database Siswa (Array)
          │
          ├── tambahSiswa(nama)    ──► push()
          ├── hapusSiswa(nama)     ──► indexOf() + splice()
          ├── cariSiswa(keyword)   ──► filter() + includes()
          ├── urutkanSiswa()       ──► slice() + sort()
          └── tampilkanSemua()     ──► forEach()
```

---

## Mari Mencoba

Buat `src/bab5/aplikasi-siswa.ts`:

```ts
// =====================================================
// MINI PROJECT: APLIKASI MANAJEMEN DAFTAR SISWA
// Menggabungkan BAB 1 s.d. BAB 5
// =====================================================

// Database siswa awal
let databaseSiswa: string[] = ["Budi", "Andi", "Citra", "Dian"]

function tampilkanSemua(daftar: string[] = databaseSiswa): void {
  console.log("-".repeat(35))
  if (daftar.length === 0) {
    console.log("  (Daftar siswa kosong)")
    console.log("-".repeat(35))
    return
  }

  daftar.forEach((nama, indeks) => {
    console.log(`  ${indeks + 1}. ${nama}`)
  })
  console.log(`  Total: ${daftar.length} siswa`)
  console.log("-".repeat(35))
}

function tambahSiswa(nama: string): void {
  const namaBersih = nama.trim()
  if (namaBersih === "") {
    console.log("⚠ Nama tidak boleh kosong!")
    return
  }

  // Cek duplikasi
  if (databaseSiswa.includes(namaBersih)) {
    console.log(`⚠ Siswa bernama "${namaBersih}" sudah terdaftar!`)
    return
  }

  databaseSiswa.push(namaBersih)
  console.log(`✓ Siswa "${namaBersih}" berhasil ditambahkan.`)
}

function hapusSiswa(nama: string): void {
  const pos = databaseSiswa.indexOf(nama)

  if (pos === -1) {
    console.log(`⚠ Siswa "${nama}" tidak ditemukan di database!`)
    return
  }

  databaseSiswa.splice(pos, 1)
  console.log(`✓ Siswa "${nama}" berhasil dihapus.`)
}

function cariSiswa(kataKunci: string): void {
  const keyword = kataKunci.toLowerCase().trim()
  const hasil = databaseSiswa.filter((nama) =>
    nama.toLowerCase().includes(keyword)
  )

  console.log(`\n=== Hasil Pencarian: "${kataKunci}" ===`)
  tampilkanSemua(hasil)
}

function tampilkanTerurut(): void {
  // Salin lalu sort agar databaseSiswa tidak rusak urutannya
  const terurut = databaseSiswa.slice().sort()
  console.log("\n=== Daftar Siswa Terurut A-Z ===")
  tampilkanSemua(terurut)
}

// ── Simulasi Aplikasi ──────────────────────────────────
console.log("===================================")
console.log("     Amanah Student Manager v1.0")
console.log("===================================")

console.log("\nDatabase Awal:")
tampilkanSemua()

console.log("\n[Aksi 1] Menambah siswa baru:")
tambahSiswa("Eko")
tambahSiswa("Andi") // Tes duplikasi
tampilkanSemua()

console.log("\n[Aksi 2] Menghapus siswa:")
hapusSiswa("Citra")
hapusSiswa("Zaki") // Tes nama tidak ada
tampilkanSemua()

console.log("\n[Aksi 3] Mengurutkan siswa:")
tampilkanTerurut()

console.log("\n[Aksi 4] Mencari siswa:")
cariSiswa("an") // harus mencocokkan Andi dan Dian
cariSiswa("eko") // harus mencocokkan Eko

console.log("\nDatabase Akhir:")
tampilkanSemua()
```

Jalankan:

```text
tsx src/bab5/aplikasi-siswa.ts
```

---

## Output (sebagian)

```text
===================================
     Amanah Student Manager v1.0
===================================

Database Awal:
-----------------------------------
  1. Budi
  2. Andi
  3. Citra
  4. Dian
  Total: 4 siswa
-----------------------------------
...
```

---

## Penjelasan Bagian Penting

### Default Parameter

```ts
function tampilkanSemua(daftar: string[] = databaseSiswa): void {
```

Jika parameter `daftar` tidak dikirim, function otomatis memakai `databaseSiswa`. Ini membuat function fleksibel: bisa menampilkan database utama atau array hasil filter pencarian.

### Duplication Check

```ts
if (databaseSiswa.includes(namaBersih)) {
```

`includes()` digunakan untuk mencegah nama siswa yang sama dimasukkan dua kali ke database.

### Hapus berdasarkan Nama

```ts
const pos = databaseSiswa.indexOf(nama)
databaseSiswa.splice(pos, 1)
```

Kita mencari nomor indeks nama tersebut menggunakan `indexOf()`. Jika ditemukan (`pos !== -1`), kita memotong 1 elemen di posisi indeks tersebut menggunakan `splice()`.

### Pencarian fleksibel (Case Insensitive)

```ts
nama.toLowerCase().includes(keyword)
```

Mengubah nama dan keyword menjadi huruf kecil semua (`toLowerCase()`) agar pencarian `"an"` tetap bisa menemukan `"Andi"` (huruf besar A).

---

## Latihan

Kembangkan aplikasi ini:
1. Tambahkan fitur untuk mengedit nama siswa (`editSiswa(namaLama, namaBaru)`).
2. Tambahkan fitur untuk mengosongkan seluruh database sekaligus.

---

## Ringkasan

- Aplikasi manajemen siswa modular dibangun dengan memisahkan fungsi database.
- `push()` dan `splice()` menangani penambahan dan penghapusan data.
- `includes()` dan `filter()` mengelola pencarian dan validasi duplikasi.
- `.slice().sort()` mengurutkan data tanpa merusak database utama.

:::tip[Langkah Selanjutnya]
Lanjut ke **Challenge**.
:::
