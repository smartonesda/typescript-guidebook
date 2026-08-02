---
title: "Parameter & Argument"
description: Memahami perbedaan parameter (definisi) dan argument (nilai yang dikirim) dalam function TypeScript.
---

# Parameter & Argument

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menjelaskan perbedaan parameter dan argument, dan menggunakan keduanya dengan benar.

---

## Pendahuluan

Dua kata ini sering dipakai bergantian oleh pemula, tapi sebenarnya memiliki arti yang berbeda dan penting untuk dipahami secara terpisah.

---

## Penjelasan Materi

**Parameter** adalah variabel yang didefinisikan di dalam tanda kurung saat membuat function. Parameter adalah **slot** atau **tempat** untuk data yang akan diterima.

**Argument** adalah nilai nyata yang dikirimkan saat memanggil function. Argument mengisi slot yang disediakan parameter.

```ts
function sapa(nama: string): void {    // 'nama' adalah PARAMETER
  console.log(`Halo, ${nama}!`)
}

sapa("Putra")                          // "Putra" adalah ARGUMENT
```

---

## Analogi Kehidupan Sehari-hari

### Slot Buah dan Buah Aslinya

```text
MESIN JUS
  [Slot buah]  ← parameter (lubang yang disediakan)
      │
  Masukkan Mangga  ← argument (buah yang benar-benar dimasukkan)
      │
  Keluar: Jus Mangga
```

Parameter adalah lubang kosong. Argument adalah apa yang kamu masukkan ke lubang itu.

---

## Visual Illustration

```text
DEFINISI FUNCTION        PEMANGGILAN FUNCTION
─────────────────        ────────────────────
function greet(          greet(
  nama: string,            "Dewi",
  umur: number             17
): void                  )
   ▲        ▲               ▲     ▲
   │        │               │     │
parameter parameter      argument argument
```

---

## Mari Mencoba

Buat `src/bab4/parameter-dan-argument.ts`:

```ts
function hitung(angka1: number, angka2: number, operasi: string): number {
  if (operasi === "tambah") return angka1 + angka2
  if (operasi === "kurang") return angka1 - angka2
  if (operasi === "kali")   return angka1 * angka2
  return 0
}

// Argumen berbeda, function yang sama
console.log(hitung(10, 5, "tambah"))  // 15
console.log(hitung(10, 5, "kurang"))  // 5
console.log(hitung(10, 5, "kali"))    // 50
```

Jalankan:

```text
tsx src/bab4/parameter-dan-argument.ts
```

## Output

```text
15
5
50
```

---

## Penjelasan Baris per Baris

- `angka1`, `angka2`, `operasi` — tiga **parameter**. Didefinisikan saat membuat function.
- `10, 5, "tambah"` — tiga **argument** pada pemanggilan pertama. Nilai nyata yang dikirim.
- TypeScript memastikan jumlah dan tipe argument cocok dengan parameter.

---

## Aturan Parameter dan Argument di TypeScript

1. **Jumlah harus sama** — jika function punya 3 parameter, harus ada 3 argument.
2. **Tipe harus sesuai** — string ke parameter string, number ke parameter number.
3. **Urutan penting** — argument pertama mengisi parameter pertama, dst.

---

## Kesalahan yang Sering Terjadi

```ts
function sapa(nama: string): void {
  console.log(`Halo, ${nama}!`)
}

sapa()          // Error! Expected 1 arguments, but got 0.
sapa("A", "B") // Error! Expected 1 arguments, but got 2.
sapa(123)      // Error! Argument of type 'number' is not assignable to parameter of type 'string'.
```

---

## Tips

:::tip[Parameter = Janji, Argument = Pemenuhan Janji]
Parameter adalah "janji" function: "Saya akan butuh data jenis ini." Argument adalah "pemenuhan janji": "Ini datanya."
:::

---

## Latihan

1. Buat function `perkenalan(nama, kelas, sekolah)` dengan tipe yang sesuai.
2. Panggil function dengan data dirimu sendiri.
3. Coba kirim tipe yang salah dan amati error TypeScript.

---

## Ringkasan

- **Parameter** = slot di definisi function.
- **Argument** = nilai nyata yang dikirim saat memanggil.
- Jumlah, tipe, dan urutan argument harus cocok dengan parameter.

:::tip[Langkah Selanjutnya]
Lanjut ke **Return Value** untuk memahami cara function mengirimkan hasil.
:::
