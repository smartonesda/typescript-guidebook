---
title: "Scope"
description: Memahami scope — di mana variabel bisa dan tidak bisa diakses di TypeScript.
---

# Scope (Ruang Lingkup Variabel)

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membedakan variabel lokal dan global, serta menghindari error akibat scope yang salah.

---

## Pendahuluan

Tidak semua variabel bisa diakses dari mana saja. Ada variabel yang hanya bisa diakses di dalam function tertentu, ada yang bisa diakses di mana saja. Konsep ini disebut **scope** (ruang lingkup).

---

## Penjelasan Materi

**Local scope** — variabel yang dideklarasikan di dalam function hanya bisa diakses di dalam function itu.

**Global scope** — variabel yang dideklarasikan di luar semua function bisa diakses dari mana saja.

---

## Analogi

### Ruangan Khusus di Sekolah

Bayangkan sekolah memiliki beberapa ruangan:

- **Ruang Guru** — hanya guru yang boleh masuk. Buku absensi di sana tidak bisa diambil siswa.
- **Aula Sekolah** — semua orang boleh masuk. Papan pengumuman di sana bisa dilihat semua.

```text
Aula (global)              Ruang Kelas (local)
────────────               ──────────────────
variabel global            variabel lokal
bisa diakses semua         hanya bisa diakses
orang                      dari dalam ruangan
```

---

## Visual Illustration

```text
let globalVar = "global"      ← bisa diakses di mana saja

function functionA() {
  let localA = "lokal A"      ← hanya di dalam functionA
  console.log(globalVar)      ← ✓ bisa akses global
  console.log(localA)         ← ✓ ada di sini
}

function functionB() {
  console.log(globalVar)      ← ✓ bisa akses global
  console.log(localA)         ← ✗ Error! localA tidak ada di sini
}
```

---

## Mari Mencoba

Buat `src/bab4/scope.ts`:

```ts
// Variabel global
const NAMA_SEKOLAH: string = "SMKS Antartika 1 Sidoarjo"
const BATAS_LULUS: number = 75

function cekKelulusan(nama: string, nilai: number): void {
  // Variabel lokal — hanya ada di dalam function ini
  const status = nilai >= BATAS_LULUS ? "Lulus" : "Remedial"
  const pesan = `${nama} dinyatakan ${status}`

  console.log(pesan)
  console.log(`Sekolah: ${NAMA_SEKOLAH}`)
}

function hitungBonusNilai(nilai: number): number {
  // Variabel lokal — terpisah dari function lain
  const bonus = 5
  return nilai + bonus
}

cekKelulusan("Andi", 82)
cekKelulusan("Budi", 68)

const nilaiDewi = 78
const nilaiSetelahBonus = hitungBonusNilai(nilaiDewi)
console.log(`\nNilai Dewi setelah bonus: ${nilaiSetelahBonus}`)

// Mencoba akses variabel lokal di luar function:
// console.log(status) // ← ini akan error!
// console.log(bonus)  // ← ini juga error!
```

Jalankan:

```text
tsx src/bab4/scope.ts
```

## Output

```text
Andi dinyatakan Lulus
Sekolah: SMKS Antartika 1 Sidoarjo
Budi dinyatakan Remedial
Sekolah: SMKS Antartika 1 Sidoarjo

Nilai Dewi setelah bonus: 83
```

---

## Penjelasan Baris per Baris

- `NAMA_SEKOLAH` dan `BATAS_LULUS` berada di global scope — bisa diakses dari kedua function.
- `status` dan `pesan` berada di local scope `cekKelulusan` — tidak bisa diakses dari luar.
- `bonus` berada di local scope `hitungBonusNilai` — terpisah dari function lain.

---

## Block Scope

Variabel `let` dan `const` juga memiliki block scope — hanya ada di dalam blok `{}` tempat didefinisikan:

```ts
for (let i = 0; i < 3; i++) {
  const temp = i * 2   // temp hanya ada di dalam loop ini
  console.log(temp)
}
// console.log(temp)  // Error! temp tidak ada di sini
// console.log(i)     // Error! i tidak ada di sini
```

---

## Kesalahan yang Sering Terjadi

```ts
function hitungLuas(p: number, l: number): void {
  const luas = p * l
}

hitungLuas(5, 3)
console.log(luas)   // Error! Cannot find name 'luas'
```

`luas` adalah variabel lokal. Jika nilainya dibutuhkan di luar, gunakan `return`:

```ts
function hitungLuas(p: number, l: number): number {
  return p * l  // kembalikan nilai, jangan simpan di variabel lokal
}

const luas = hitungLuas(5, 3)
console.log(luas)  // 15
```

---

## Latihan

1. Buat dua function yang keduanya memiliki variabel lokal bernama `total`. Pastikan keduanya tidak saling mengganggu.
2. Buat satu variabel global `namaPengguna` dan akses dari dua function berbeda.

---

## Ringkasan

- **Local scope** — variabel di dalam function hanya ada di sana.
- **Global scope** — variabel di luar function bisa diakses dari mana saja.
- `let` dan `const` juga punya block scope di dalam `{}`.
- Gunakan `return` untuk membawa nilai dari local ke luar function.

:::tip[Langkah Selanjutnya]
Lanjut ke **Studi Kasus** untuk menggabungkan semua konsep function dalam satu program.
:::
