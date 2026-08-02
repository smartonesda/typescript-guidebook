---
title: "Nullish Coalescing dengan Object"
description: Menggabungkan Optional Chaining dan operator ?? untuk menyediakan nilai default pada properti object.
---

# Nullish Coalescing dengan Object

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menggabungkan Optional Chaining (`?.`) dan Nullish Coalescing (`??`) untuk mengambil properti objek secara aman dengan nilai default cadangan.

---

## Pendahuluan

Di halaman sebelumnya kita belajar bahwa Optional Chaining (`?.`) mengembalikan `undefined` jika properti tidak ada. Namun menampilkan tulisan `undefined` di layar website atau terminal aplikasi sekolah tentu kurang ramah bagi pengguna.

Kita ingin jika datanya tidak ada, program otomatis menampilkan teks ramah seperti `"Belum diisi"` atau `"Tidak ada"`. Kombinasi `?.` dan `??` menyelesaikan masalah ini.

---

## Penjelasan Materi

Operator `??` (Nullish Coalescing) memberikan nilai cadangan hanya jika nilai di sebelah kirinya bernilai `null` atau `undefined` (nullish).

Rumus kombinasi dengan objek:

```ts
const hasil = objek.propertiOpsional?.subProperti ?? "Nilai Default"
```

- Jika `subProperti` ada nilainya, tampilkan nilainya.
- Jika `propertiOpsional` atau `subProperti` bernilai `null`/`undefined`, gunakan `"Nilai Default"`.

---

## Analogi Kehidupan Sehari-hari

### Minum Air Cadangan dari Ransel

Kamu memeriksa kantong samping tas ransel sekolah untuk mengambil botol air minum:

```text
Langkah:
1. Cek kantong samping ransel (optional chaining ?.)
2. Jika botol air minum ada ──► ambil dan minum
3. Jika tidak ada botol air ──► gunakan air cadangan di dalam kelas (nullish ??)
```

`??` bertindak sebagai air cadangan yang selalu siap jika botol di kantong samping tasmu ternyata tidak ada.

---

## Visual Illustration

```text
const kota = siswa.alamat?.kota ?? "Kota belum diisi"
             └─────────────────┘    ────────────────
             opsional chaining      nilai cadangan
                     │                     │
               jika hasil ini        dipakai jika
                 undefined ────────► hasil kiri
                                     undefined
```

---

## Mari Mencoba

Buat `src/bab6/nullish-object.ts` (jika belum ada) atau salin kode ini untuk dicoba:

```ts
type Alamat = { kota: string }
type Siswa = {
  nama: string
  alamat?: Alamat
}

const siswaA: Siswa = {
  nama: "Putra",
  alamat: { kota: "Sidoarjo" }
}

const siswaB: Siswa = {
  nama: "Budi"
  // alamat undefined
}

// 1. Menggabungkan ?. dan ??
const kotaA = siswaA.alamat?.kota ?? "Alamat belum diisi"
const kotaB = siswaB.alamat?.kota ?? "Alamat belum diisi"

console.log(`Kota Siswa A: ${kotaA}`)
console.log(`Kota Siswa B: ${kotaB}`)

// 2. Contoh dalam profil siswa terformat
function cetakProfil(s: Siswa): void {
  const kota = s.alamat?.kota ?? "(Kota belum diinput)"
  console.log(`Siswa: ${s.nama.padEnd(8)} | Kota: ${kota}`)
}

console.log("\n=== Daftar Profil ===")
cetakProfil(siswaA)
cetakProfil(siswaB)
```

Jalankan:

```text
tsx src/bab6/nullish-object.ts
```

## Output

```text
Kota Siswa A: Sidoarjo
Kota Siswa B: Alamat belum diisi

=== Daftar Profil ===
Siswa: Putra    | Kota: Sidoarjo
Siswa: Budi     | Kota: (Kota belum diinput)
```

---

## Penjelasan Baris per Baris

- `siswaB.alamat?.kota` — karena alamat tidak ada, bagian ini menghasilkan `undefined`.
- `?? "Alamat belum diisi"` — mendeteksi hasil `undefined` tersebut dan langsung menggantinya dengan string cadangan `"Alamat belum diisi"`.
- `cetakProfil` — menggunakan kombinasi ini untuk memformat profil siswa secara aman dan rapi tanpa ada teks `undefined` yang muncul.

---

## Kesalahan yang Sering Terjadi

### ❌ Menggunakan operator `||` sebagai ganti `??` secara asal

```ts
const data = { jumlahBuku: 0 }
const bukuTampil = data.jumlahBuku || 10
console.log(bukuTampil) // Output: 10 (angka 0 dianggap falsy!)
```

**Perbaikan:** Jika angka `0` atau string kosong `""` adalah nilai valid, selalu gunakan `??` (bukan `||`) agar nilai tersebut tidak ditimpa oleh nilai default.

```ts
const bukuTampil = data.jumlahBuku ?? 10 // Output: 0 ✓
```

---

## Tips

:::tip[Gunakan untuk Data Opsional]
Kombinasi `?.` dan `??` sangat disarankan untuk merapikan visual data pada antarmuka aplikasi atau website agar terhindar dari tulisan `undefined` atau `null` yang mengganggu pengguna.
:::

---

## Latihan

Buat object `siswa` dengan properti opsional `nomorHP`. Gunakan kombinasi optional chaining dan nullish coalescing untuk menampilkan nomor HP siswa tersebut atau teks `"Nomor HP belum diisi"` jika properti tersebut tidak ada.

---

## Ringkasan

- Kombinasi `?.` dan `??` menghasilkan kode akses properti yang aman dan ramah pengguna.
- `?.` menghentikan error crash jika objek nullish.
- `??` mengganti nilai `null`/`undefined` hasil optional chaining dengan nilai default cadangan.

:::tip[Langkah Selanjutnya]
Lanjut ke **Studi Kasus**.
:::
