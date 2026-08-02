---
title: "Mengakses Property"
description: Memahami dua cara mengambil nilai properti object menggunakan Dot Notation dan Bracket Notation.
---

# Mengakses Property

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat mengambil nilai properti object menggunakan **Dot Notation** (titik) maupun **Bracket Notation** (kurung siku), serta tahu kapan harus menggunakan masing-masing cara.

---

## Pendahuluan

Setelah object dibuat dengan berbagai properti di dalamnya, bagaimana cara kita mengambil kembali data tersebut? Ada dua cara utama yang disediakan oleh TypeScript.

---

## Dua Cara Mengakses Properti

### 1. Dot Notation (Menggunakan Titik `.`)

Ini adalah cara yang paling umum, bersih, dan sering digunakan:

```ts
console.log(siswa.nama)
```

### 2. Bracket Notation (Menggunakan Kurung Siku `[]`)

Cara ini mirip dengan cara kita mengakses elemen array, dengan menuliskan key sebagai string di dalam `[]`:

```ts
console.log(siswa["nama"])
```

---

## Analogi Kehidupan Sehari-hari

### Membuka Lemari Laci

Bayangkan laci lemari:

- **Dot Notation** seperti langsung menunjuk laci bertuliskan "Nama": `lemari.Nama`. Ini cepat dan mudah jika nama laci hanya satu kata.
- **Bracket Notation** seperti menuliskan nama laci di selembar kertas memo, lalu mencocokkan kertas memo itu dengan laci lemari: `lemari["Nama"]`. Cara ini sangat berguna jika label laci menggunakan kata yang tidak standar (ada spasi) atau jika label lacinya disimpan di dalam variabel lain.

---

## Visual Illustration

```text
Dot Notation (Paling Bersih)
    siswa  .  nama  ──► "Putra"
   objek  titik properti

Bracket Notation (Lebih Fleksibel)
    siswa  [ "nama" ] ──► "Putra"
   objek  kurung properti
          siku   string
```

---

## Mari Mencoba

Buat `src/bab6/mengakses-property.ts`:

```ts
const profilSiswa = {
  nama: "Putra",
  umur: 17,
  "nomor-absen": 15
}

// 1. Menggunakan Dot Notation (Titik)
console.log("=== Dot Notation ===")
console.log(`Nama: ${profilSiswa.nama}`)
console.log(`Umur: ${profilSiswa.umur}`)

// 2. Menggunakan Bracket Notation (Kurung Siku)
console.log("\n=== Bracket Notation ===")
console.log(`Nama: ${profilSiswa["nama"]}`)
console.log(`Absen: ${profilSiswa["nomor-absen"]}`) // Wajib memakai bracket

// 3. Mengakses Properti Menggunakan Variabel (Hanya bisa dengan Bracket)
const propertiYangDicari = "umur"
console.log(`\nCari properti '${propertiYangDicari}': ${profilSiswa[propertiYangDicari as keyof typeof profilSiswa]}`)
```

Jalankan:

```text
tsx src/bab6/mengakses-property.ts
```

## Output

```text
=== Dot Notation ===
Nama: Putra
Umur: 17

=== Bracket Notation ===
Nama: Putra
Absen: 15

Cari properti 'umur': 17
```

---

## Penjelasan Baris per Baris

- `profilSiswa.nama` — menggunakan Dot Notation untuk mengakses properti `nama`.
- `profilSiswa["nomor-absen"]` — jika key properti menggunakan tanda hubung `-`, Dot Notation tidak bisa dipakai (karena `profilSiswa.nomor-absen` akan dianggap operasi matematika pengurangan: `profilSiswa.nomor` dikurangi `absen`). Bracket Notation wajib digunakan di sini.
- `profilSiswa[propertiYangDicari]` — Bracket Notation memungkinkan kita mengakses properti secara dinamis menggunakan variabel string.

---

## Kapan Menggunakan Masing-masing?

| Cara | Kelebihan | Kelemahan | Kapan digunakan? |
|---|---|---|---|
| **Dot Notation** | Sangat bersih, autocomplete VS Code bekerja maksimal | Tidak bisa untuk key berspasi/simbol, tidak bisa pakai variabel | Default untuk semua properti standar |
| **Bracket Notation** | Bisa untuk key berspasi/simbol, bisa menggunakan variabel | Menulisnya lebih panjang, butuh tanda kutip | Untuk properti kustom dan akses dinamis via variabel |

---

## Latihan

Buat object data komputer (merk, ram, penyimpanan). Tampilkan semua properti tersebut secara bergantian: 2 properti diakses dengan Dot Notation, dan 1 properti diakses dengan Bracket Notation.

---

## Ringkasan

- Properti object diakses dengan Dot Notation (`objek.properti`) atau Bracket Notation (`objek["properti"]`).
- Gunakan Dot Notation secara default untuk kerapian kode.
- Bracket Notation wajib digunakan jika key properti tidak standar (mengandung spasi/simbol) atau diakses dinamis melalui variabel.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mengubah Property**.
:::
