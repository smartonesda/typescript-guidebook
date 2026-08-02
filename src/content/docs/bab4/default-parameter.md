---
title: "Default Parameter"
description: Memberikan nilai default untuk parameter sehingga function tetap bekerja meski argument tidak dikirim.
---

# Default Parameter

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat parameter dengan nilai default menggunakan operator `=`.

---

## Pendahuluan

Default parameter mirip dengan optional parameter, tapi lebih nyaman: jika argument tidak dikirim, parameter otomatis menggunakan nilai yang sudah ditentukan.

---

## Sintaks

```ts
function sapa(nama: string, sapaan: string = "Halo"): string {
  return `${sapaan}, ${nama}!`
}
```

---

## Analogi

### Menu Default di Restoran

Saat memesan nasi goreng tanpa menyebutkan tingkat kepedasan, kasir otomatis memilihkan level "Sedang" sebagai default.

```text
Pelanggan: "Nasi goreng satu."
Kasir: Tingkat pedas tidak disebutkan → pakai "Sedang" (default)
```

---

## Mari Mencoba

Buat `src/bab4/default-parameter.ts`:

```ts
function hitung(
  angka1: number,
  angka2: number,
  operasi: string = "tambah"
): number {
  if (operasi === "tambah")  return angka1 + angka2
  if (operasi === "kurang")  return angka1 - angka2
  if (operasi === "kali")    return angka1 * angka2
  if (operasi === "bagi" && angka2 !== 0) return angka1 / angka2
  return 0
}

function cetakNilai(
  nama: string,
  nilai: number,
  batas: number = 75
): void {
  const status = nilai >= batas ? "Lulus" : "Remedial"
  console.log(`${nama}: ${nilai} → ${status} (batas ${batas})`)
}

console.log(hitung(10, 5))           // tambah (default)
console.log(hitung(10, 5, "kali"))   // kali (eksplisit)
console.log(hitung(10, 5, "bagi"))   // bagi (eksplisit)

cetakNilai("Andi", 80)               // batas 75 (default)
cetakNilai("Budi", 70, 65)           // batas 65 (eksplisit)
cetakNilai("Citra", 88)              // batas 75 (default)
```

Jalankan:

```text
tsx src/bab4/default-parameter.ts
```

## Output

```text
15
50
2
Andi: 80 → Lulus (batas 75)
Budi: 70 → Lulus (batas 65)
Citra: 88 → Lulus (batas 75)
```

---

## Penjelasan Baris per Baris

- `operasi: string = "tambah"` — jika operasi tidak dikirim, nilainya "tambah".
- `batas: number = 75` — nilai default bisa berupa angka, string, boolean, atau apapun.
- Jika argument dikirim, nilai default diabaikan dan argument yang dipakai.

---

## Optional vs Default Parameter

| | Optional `?` | Default `=` |
|---|---|---|
| Nilai jika tidak dikirim | `undefined` | Nilai yang ditentukan |
| Perlu cek undefined? | Ya | Tidak |
| Lebih nyaman | Tidak | Ya |

---

## Tips

:::tip[Default Parameter Lebih Disukai]
Saat kamu tahu nilai "normalnya" apa, gunakan default parameter. Ini membuat kode lebih bersih karena kamu tidak perlu menulis `if (param !== undefined)` setiap saat.
:::

---

## Latihan

Buat function `cetakSalam(nama, waktu = "hari")` yang menghasilkan `"Selamat hari, [nama]!"` saat waktu tidak dikirim.

---

## Ringkasan

- Sintaks: `parameter: tipe = nilaiDefault`.
- Jika argument tidak dikirim, nilai default yang dipakai.
- Lebih nyaman dari optional karena tidak perlu cek undefined.
- Sama seperti optional: harus di posisi terakhir (setelah parameter tanpa default).

:::tip[Langkah Selanjutnya]
Lanjut ke **Rest Parameter** untuk menerima jumlah argument yang tidak terbatas.
:::
