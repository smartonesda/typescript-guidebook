---
title: "Nested Object"
description: Membuat object di dalam object (nested object) untuk menstrukturkan data yang kompleks.
---

# Nested Object

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat nested object, menentukan tipenya secara modular, dan mengakses properti di dalam nested object dengan aman.

---

## Pendahuluan

Entitas nyata sering kali memiliki struktur data yang berlapis. Contohnya alamat: alamat bukan sekadar satu string teks, tapi memiliki komponen jalan, kota, provinsi, dan kode pos. Menyimpan objek di dalam objek lain disebut **nested object**.

---

## Cara Membuat Nested Object

Tulis object literal di dalam properti object lain:

```ts
const siswa = {
  nama: "Putra",
  alamat: {
    jalan: "Jl. Merdeka",
    kota: "Sidoarjo"
  }
}
```

---

## Analogi Kehidupan Sehari-hari

### Bagian Alamat di KTP

Di dalam kartu KTP, terdapat kolom "Alamat". Di dalam kolom Alamat tersebut, terdapat sub-kolom lagi yang lebih spesifik: RT/RW, Kelurahan, Kecamatan, dan Kabupaten.

```text
KTP (Object Utama)
  ├── Nama: Putra
  └── Alamat (Sub-Object / Nested Object)
        ├── RT/RW: 001/002
        ├── Kelurahan: Sidokare
        └── Kabupaten: Sidoarjo
```

---

## Visual Illustration

```text
Siswa
┌───────────────────────────────────────┐
│ nama   ──► "Putra"                    │
│ alamat ──► Alamat (Nested Object)     │
│            ┌────────────────────────┐ │
│            │ jalan ──► "Jl. Raya"   │ │
│            │ kota  ──► "Sidoarjo"   │ │
│            └────────────────────────┘ │
└───────────────────────────────────────┘
```

Untuk mengakses jalan: `siswa.alamat.jalan`

---

## Mari Mencoba

Buat `src/bab6/nested-object.ts`:

```ts
// 1. Mendefinisikan Tipe Data secara Modular
type TipeAlamat = {
  jalan: string
  kota: string
  provinsi: string
}

type ProfilSiswa = {
  nama: string
  kelas: string
  alamat: TipeAlamat // Nested tipe data
}

// 2. Membuat objek berdasarkan tipe
const siswaA: ProfilSiswa = {
  nama: "Putra Ramadhan",
  kelas: "XI RPL 1",
  alamat: {
    jalan: "Jl. Pahlawan No. 10",
    kota: "Sidoarjo",
    provinsi: "Jawa Timur"
  }
}

console.log("Profil Siswa:", siswaA)

// Akses properti bagian dalam (nested) menggunakan dot berantai
console.log(`Nama Siswa  : ${siswaA.nama}`)
console.log(`Kota Asal   : ${siswaA.alamat.kota}`)
console.log(`Jalan Rumah : ${siswaA.alamat.jalan}`)
```

Jalankan:

```text
tsx src/bab6/nested-object.ts
```

## Output

```text
Profil Siswa: {
  nama: 'Putra Ramadhan',
  kelas: 'XI RPL 1',
  alamat: {
    jalan: 'Jl. Pahlawan No. 10',
    kota: 'Sidoarjo',
    provinsi: 'Jawa Timur'
  }
}
Nama Siswa  : Putra Ramadhan
Kota Asal   : Sidoarjo
Jalan Rumah : Jl. Pahlawan No. 10
```

---

## Penjelasan Baris per Baris

- `type TipeAlamat` — membuat type alias terpisah khusus untuk struktur alamat.
- `alamat: TipeAlamat` — memasukkan tipe alamat ke dalam properti `alamat` milik `ProfilSiswa`. Cara modular ini membuat kode rapi dan mudah dibaca.
- `siswaA.alamat.kota` — menggunakan akses berantai (chaining). Titik pertama masuk ke `alamat`, titik kedua mengambil `kota` di dalam `alamat`.

---

## Kesalahan yang Sering Terjadi

### ❌ Mengakses properti nested pada objek null/undefined

```ts
type Siswa = { nama: string; alamat?: TipeAlamat }
const siswaB: Siswa = { nama: "Budi" } // alamat undefined

// console.log(siswaB.alamat.kota) // Error saat runtime!
// Cannot read properties of undefined (reading 'kota')
```

**Perbaikan:** Selalu pastikan sub-objek ada sebelum mengakses propertinya, atau gunakan **Optional Chaining** yang akan kita bahas di halaman berikutnya:

```ts
console.log(siswaB.alamat?.kota) // ✓ Aman, menghasilkan undefined
```

---

## Tips

:::tip[Gunakan Modular Type Alias]
Meskipun kamu bisa menuliskan tipe nested secara langsung di dalam satu type alias:
```ts
type Siswa = { nama: string; alamat: { jalan: string; kota: string } }
```
Memisahkannya menjadi beberapa `type` kecil terpisah (`TipeAlamat`, `Siswa`) jauh lebih bersih dan mempermudah penggunaan ulang tipe tersebut di tempat lain.
:::

---

## Latihan

Buat object data `sekolah` yang memiliki nested object `kepalaSekolah` dengan properti `nama` dan `nip`. Tampilkan nama kepala sekolah tersebut dengan akses berantai.

---

## Ringkasan

- Nested object adalah object di dalam properti object lain.
- Tipe data nested object sebaiknya didefinisikan secara modular menggunakan type alias terpisah.
- Akses properti nested dilakukan secara berantai menggunakan titik: `objek.subObjek.properti`.

:::tip[Langkah Selanjutnya]
Lanjut ke **Array of Object** untuk belajar daftar object.
:::
