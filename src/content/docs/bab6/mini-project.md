---
title: "Mini Project: Aplikasi Manajemen Data Siswa"
description: Membangun aplikasi manajemen data siswa berbasis terminal yang menggabungkan seluruh materi BAB 1 sampai BAB 6.
---

# Mini Project: Aplikasi Manajemen Data Siswa

## Tujuan Pembelajaran

Setelah menyelesaikan mini project ini, kamu dapat membuat program terstruktur untuk menambah, menghapus, mengupdate, dan mencari siswa menggunakan array of object, modular function, destructuring, dan spread operator.

---

## Pendahuluan

Kita akan membuat fondasi sistem informasi sekolah sederhana: **Aplikasi Manajemen Data Siswa**. Aplikasi ini akan mensimulasikan penyimpanan database siswa di memori komputer, menyediakan fungsi operasi data (Create, Read, Update, Delete - CRUD) yang umum digunakan oleh software developer profesional.

---

## Fitur Aplikasi

1. Menampilkan seluruh data siswa beserta alamatnya
2. Menambah data siswa baru dengan NIS unik (`push()`)
3. Mengupdate nilai siswa berdasarkan NIS secara aman (`spread operator`)
4. Menghapus data siswa berdasarkan NIS (`splice()`)
5. Mencari siswa berdasarkan nama (`filter()`)

---

## Visual Architecture

```text
Database Sekolah: Siswa[] (Array of Objects)
  ├── tampilkanSemuaSiswa() ──► .forEach() + destructuring
  ├── tambahSiswa(siswa)     ──► .includes() check + .push()
  ├── updateNilai(nis, nilai)──► .map() + spread operator
  └── hapusSiswa(nis)        ──► .findIndex() + .splice()
```

---

## Mari Mencoba

Buat `src/bab6/aplikasi-manajemen-siswa.ts`:

```ts
// =====================================================
// MINI PROJECT: APLIKASI MANAJEMEN DATA SISWA
// Menggabungkan BAB 1 s.d. BAB 6
// =====================================================

type Alamat = {
  kota: string
  provinsi: string
}

type Siswa = {
  nis: number
  nama: string
  nilai: number
  alamat: Alamat
}

// Database Utama (Array of Objects)
let databaseSiswa: Siswa[] = [
  { nis: 1001, nama: "Andi", nilai: 80, alamat: { kota: "Sidoarjo", provinsi: "Jatim" } },
  { nis: 1002, nama: "Budi", nilai: 65, alamat: { kota: "Surabaya", provinsi: "Jatim" } },
  { nis: 1003, nama: "Citra", nilai: 95, alamat: { kota: "Malang", provinsi: "Jatim" } }
]

// 1. Tampilkan Semua Siswa
function tampilkanSemua(daftar: Siswa[] = databaseSiswa): void {
  console.log("=".repeat(50))
  if (daftar.length === 0) {
    console.log("  (Tidak ada data siswa)")
    console.log("=".repeat(50))
    return
  }

  daftar.forEach((siswa, indeks) => {
    // Destructuring object siswa & alamat
    const { nis, nama, nilai, alamat } = siswa
    const { kota } = alamat
    const status = nilai >= 75 ? "LULUS" : "REMEDIAL"

    console.log(`  ${indeks + 1}. [NIS ${nis}] ${nama.padEnd(8)} | Nilai: ${nilai} [${status}] | Kota: ${kota}`)
  })
  console.log(`  Total: ${daftar.length} siswa`)
  console.log("=".repeat(50))
}

// 2. Tambah Siswa Baru (Cek NIS Unik)
function tambahSiswa(siswaBaru: Siswa): void {
  // Cek apakah NIS sudah dipakai
  const nisDipakai = databaseSiswa.some((s) => s.nis === siswaBaru.nis)
  if (nisDipakai) {
    console.log(`⚠ Gagal: Siswa dengan NIS ${siswaBaru.nis} sudah terdaftar!`)
    return
  }

  databaseSiswa.push(siswaBaru)
  console.log(`✓ Sukses: Siswa "${siswaBaru.nama}" berhasil ditambahkan.`)
}

// 3. Update Nilai Siswa (Secara Immutable menggunakan Map & Spread)
function updateNilai(nis: number, nilaiBaru: number): void {
  const siswaKetemu = databaseSiswa.find((s) => s.nis === nis)
  if (siswaKetemu === undefined) {
    console.log(`⚠ Gagal: Siswa dengan NIS ${nis} tidak ditemukan!`)
    return
  }

  // Update nilai secara immutable menggunakan map & spread operator
  databaseSiswa = databaseSiswa.map((s) => {
    if (s.nis === nis) {
      return { ...s, nilai: nilaiBaru } // salin data lama, timpa nilai baru
    }
    return s
  })

  console.log(`✓ Sukses: Nilai siswa NIS ${nis} diperbarui menjadi ${nilaiBaru}.`)
}

// 4. Hapus Siswa berdasarkan NIS
function hapusSiswa(nis: number): void {
  const indeks = databaseSiswa.findIndex((s) => s.nis === nis)

  if (indeks === -1) {
    console.log(`⚠ Gagal: Siswa dengan NIS ${nis} tidak ditemukan!`)
    return
  }

  const namaDihapus = databaseSiswa[indeks].nama
  databaseSiswa.splice(indeks, 1)
  console.log(`✓ Sukses: Siswa "${namaDihapus}" (NIS ${nis}) berhasil dihapus.`)
}

// 5. Cari Siswa berdasarkan Nama
function cariSiswa(namaCari: string): void {
  const keyword = namaCari.toLowerCase().trim()
  const hasil = databaseSiswa.filter((s) =>
    s.nama.toLowerCase().includes(keyword)
  )

  console.log(`\n=== Hasil Pencarian Nama: "${namaCari}" ===`)
  tampilkanSemua(hasil)
}

// ── Simulasi Program ──────────────────────────────────
console.log("==================================================")
console.log("     Amanah Student Information System v2.0")
console.log("==================================================")

console.log("\nDatabase Siswa Saat Ini:")
tampilkanSemua()

console.log("\n[Aksi 1] Menambah Siswa Baru:")
tambahSiswa({
  nis: 1004,
  nama: "Dian",
  nilai: 72,
  alamat: { kota: "Sidoarjo", provinsi: "Jatim" }
})
tambahSiswa({ // Tes duplikasi NIS
  nis: 1001,
  nama: "Andi Palsu",
  nilai: 50,
  alamat: { kota: "Gresik", provinsi: "Jatim" }
})
tampilkanSemua()

console.log("\n[Aksi 2] Mengupdate Nilai Siswa (NIS 1002):")
updateNilai(1002, 80) // Dari 65 (remedial) menjadi 80 (lulus)
updateNilai(9999, 90) // Tes NIS tidak terdaftar
tampilkanSemua()

console.log("\n[Aksi 3] Menghapus Siswa (NIS 1003):")
hapusSiswa(1003) // Menghapus Citra
tampilkanSemua()

console.log("\n[Aksi 4] Mencari Siswa:")
cariSiswa("an") // Harus mencocokkan Andi dan Dian
```

Jalankan:

```text
tsx src/bab6/aplikasi-manajemen-siswa.ts
```

---

## Output (sebagian)

```text
==================================================
     Amanah Student Information System v2.0
==================================================

Database Siswa Saat Ini:
==================================================
  1. [NIS 1001] Andi     | Nilai: 80 [LULUS] | Kota: Sidoarjo
  2. [NIS 1002] Budi     | Nilai: 65 [REMEDIAL] | Kota: Surabaya
  3. [NIS 1003] Citra    | Nilai: 95 [LULUS] | Kota: Malang
  Total: 3 siswa
==================================================
...
```

---

## Penjelasan Bagian Penting

### Destructuring Nested Object dalam Loop

```ts
daftar.forEach((siswa) => {
  const { nis, nama, nilai, alamat } = siswa
  const { kota } = alamat
```

Membongkar data `siswa` sekaligus properti `alamat` di dalam loop menggunakan destructuring bertingkat agar penulisan format laporan sangat rapi.

### Validasi NIS Unik

```ts
const nisDipakai = databaseSiswa.some((s) => s.nis === siswaBaru.nis)
```

Method `.some()` mengembalikan boolean `true` jika setidaknya ada satu elemen yang memenuhi kondisi. Sangat cocok untuk mendeteksi duplikasi ID/NIS.

### Immutable Update dengan Map & Spread

```ts
databaseSiswa = databaseSiswa.map((s) => {
  if (s.nis === nis) {
    return { ...s, nilai: nilaiBaru }
  }
  return s
})
```

Alih-alih mengubah objek asli secara paksa, kita memetakan array lama menjadi array baru menggunakan `.map()`. Ketika siswa dengan NIS yang dicari ditemukan, kita membuat objek fotokopi baru dengan properti diperbarui `{ ...s, nilai: nilaiBaru }`. Cara ini adalah standar best practice industri.

---

## Latihan

Tambahkan fitur ke aplikasi:
1. `hitungRataRataKelas()` — mengembalikan rata-rata nilai kelas menggunakan `reduce()`.
2. `tampilkanSiswaTerbaik()` — menampilkan nama dan nilai siswa yang memiliki nilai tertinggi.

---

## Ringkasan

- Aplikasi manajemen siswa terstruktur menggunakan array of object untuk database.
- `.some()` memeriksa duplikasi NIS/ID secara efisien.
- `.map()` dan spread operator `...` memperbarui properti objek secara immutable.
- Destructuring menyederhanakan penulisan properti objek nested dalam tampilan.

:::tip[Selesai Mini Project]
Selamat! Kamu sudah menyelesaikan aplikasi manajemen siswa yang modular. Hubungi guru untuk memeriksa hasil kerjamu.
:::
