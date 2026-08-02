---
title: "Optional Chaining"
description: Menggunakan operator ?. untuk mengakses properti nested secara aman tanpa takut program crash.
---

# Optional Chaining: `?.`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menggunakan optional chaining (`?.`) untuk mengakses properti nested yang mungkin bernilai `null` atau `undefined` secara aman.

---

## Pendahuluan

Salah satu penyebab program web crash paling sering adalah error: `Cannot read properties of undefined`. Ini terjadi saat kita mencoba mengakses properti dari objek yang ternyata datanya tidak ada (undefined).

Optional chaining (`?.`) hadir sebagai pelindung program dari error tersebut.

---

## Penjelasan Materi

Operator optional chaining (`?.`) memeriksa apakah objek di sebelah kiri tanda tanya bernilai `null` atau `undefined`.

- Jika **tidak nullish**, ia melanjutkan akses ke properti sebelah kanan.
- Jika **nullish (null/undefined)**, ia menghentikan akses dan langsung mengembalikan nilai `undefined` tanpa memicu error crash.

```ts
// Cara lama yang merepotkan
const kota = (siswa.alamat !== undefined) ? siswa.alamat.kota : undefined

// Cara modern dengan Optional Chaining
const kota = siswa.alamat?.kota
```

---

## Analogi Kehidupan Sehari-hari

### Memeriksa Lampiran di Dalam Map

Kamu mencari dokumen "Sertifikat Medis" di dalam sub-folder "Lampiran Kesehatan" dalam map siswa:

- **Tanpa Optional Chaining** seperti langsung merogoh ke tempat sub-folder ditaruh. Jika sub-foldernya ternyata tidak dibagikan (tidak ada), tanganmu merogoh udara kosong dan kamu bingung lalu pingsan (program crash).
- **Dengan Optional Chaining** seperti melihat map dulu: "Apakah ada sub-folder Lampiran?". Jika tidak ada, kamu langsung menjawab: "Tidak ada" (mengembalikan `undefined`) dan kembali bekerja dengan tenang.

---

## Visual Illustration

```text
siswa . alamat ?. kota
                 │
   apakah alamat ada?
     ├─ TIDAK ──► langsung hasilkan undefined (Aman!)
     └─ YA    ──► ambil properti .kota
```

---

## Mari Mencoba

Buat `src/bab6/optional-chaining.ts`:

```ts
type Alamat = { kota: string }
type Siswa = {
  nama: string
  alamat?: Alamat // properti alamat opsional
}

const siswaA: Siswa = {
  nama: "Putra",
  alamat: { kota: "Sidoarjo" }
}

const siswaB: Siswa = {
  nama: "Budi"
  // alamat tidak diisi (undefined)
}

// 1. Akses objek yang datanya lengkap
console.log(`Kota Siswa A: ${siswaA.alamat?.kota}`)

// 2. Akses objek yang datanya tidak lengkap
console.log(`Kota Siswa B: ${siswaB.alamat?.kota}`) // Mengembalikan undefined, bukan crash!

// 3. Rantai akses yang lebih panjang
type Sekolah = { nama: string; kepala?: { nama: string } }
const smk: Sekolah = { nama: "SMKS Antartika 1" }
console.log(`Kepala Sekolah: ${smk.kepala?.nama}`)
```

Jalankan:

```text
tsx src/bab6/optional-chaining.ts
```

## Output

```text
Kota Siswa A: Sidoarjo
Kota Siswa B: undefined
Kepala Sekolah: undefined
```

---

## Penjelasan Baris per Baris

- `siswaA.alamat?.kota` — karena `alamat` ada di `siswaA`, program mengambil properti `.kota` dan mencetak `"Sidoarjo"`.
- `siswaB.alamat?.kota` — karena `alamat` bernilai `undefined` di `siswaB`, program menghentikan proses evaluasi di tanda `?.` dan langsung mengembalikan nilai `undefined` tanpa crash.

---

## Kesalahan yang Sering Terjadi

### ❌ Menulis tanda tanya di tempat yang salah

```ts
console.log(siswaB?.alamat.kota) // Error saat runtime jika alamat undefined
```

**Perbaikan:** Letakkan tanda tanya `?` tepat pada properti yang **memiliki potensi bernilai undefined/null**, yaitu properti `alamat`. Properti `siswaB` sendiri sudah pasti ada.

```ts
console.log(siswaB.alamat?.kota) // ✓
```

---

## Tips

:::tip[Gunakan untuk Data dari API / Database]
Gunakan `?.` untuk semua data dinamis yang berasal dari luar program (seperti database atau input pengguna) yang strukturnya belum pasti lengkap.
:::

---

## Latihan

Buat object `siswa` dengan properti opsional `kontak` yang berisi nested object `email`. Cobalah mengakses `siswa.kontak.email` menggunakan optional chaining saat properti `kontak` tidak diisi. Tampilkan hasilnya.

---

## Ringkasan

- Operator `?.` menghentikan eksekusi jika objek bernilai `null` atau `undefined`.
- Mencegah program mengalami crash akibat error `Cannot read properties of undefined`.
- Mengembalikan `undefined` jika jalur properti terputus di tengah jalan.

:::tip[Langkah Selanjutnya]
Lanjut ke **Nullish Coalescing** untuk belajar cara menggabungkan `?.` dengan nilai default.
:::
