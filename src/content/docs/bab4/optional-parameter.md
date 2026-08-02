---
title: "Optional Parameter"
description: Membuat parameter yang boleh tidak dikirim menggunakan tanda ? di TypeScript.
---

# Optional Parameter

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat parameter opsional dengan tanda `?` dan menangani nilainya dengan aman.

---

## Pendahuluan

Tidak semua data selalu tersedia. Email siswa mungkin belum diisi. Nomor telepon mungkin belum ada. Optional parameter memungkinkan kamu memanggil function tanpa harus mengirimkan semua parameter.

---

## Sintaks

Tambahkan `?` setelah nama parameter:

```ts
function sapa(nama: string, sapaan?: string): void {
  // sapaan mungkin undefined
}
```

---

## Analogi

### Topping Minuman

Di kedai minuman, topping adalah opsional. Kamu bisa memesan teh tanpa topping, atau teh dengan topping jelly, atau teh dengan topping boba.

```text
Wajib:    [Minuman]
Opsional: [Topping?]  ← boleh ada, boleh tidak
```

---

## Mari Mencoba

Buat `src/bab4/optional-parameter.ts`:

```ts
function cetakProfil(
  nama: string,
  kelas: string,
  email?: string
): void {
  console.log(`Nama : ${nama}`)
  console.log(`Kelas: ${kelas}`)

  if (email !== undefined) {
    console.log(`Email: ${email}`)
  } else {
    console.log(`Email: (belum diisi)`)
  }
  console.log("---")
}

cetakProfil("Andi", "XI RPL 1")
cetakProfil("Budi", "XI RPL 2", "budi@smk.sch.id")
cetakProfil("Citra", "XI RPL 1")
```

Jalankan:

```text
tsx src/bab4/optional-parameter.ts
```

## Output

```text
Nama : Andi
Kelas: XI RPL 1
Email: (belum diisi)
---
Nama : Budi
Kelas: XI RPL 2
Email: budi@smk.sch.id
---
Nama : Citra
Kelas: XI RPL 1
Email: (belum diisi)
---
```

---

## Penjelasan Baris per Baris

- `email?: string` — tanda `?` membuat parameter opsional. Tipe efektifnya adalah `string | undefined`.
- `if (email !== undefined)` — wajib cek sebelum menggunakan parameter opsional.
- Pemanggilan tanpa `email` menghasilkan `undefined` secara otomatis.

---

## Gunakan `??` sebagai Nilai Default

```ts
function sapa(nama: string, sapaan?: string): string {
  const s = sapaan ?? "Halo"
  return `${s}, ${nama}!`
}

console.log(sapa("Dewi"))            // "Halo, Dewi!"
console.log(sapa("Dewi", "Selamat pagi")) // "Selamat pagi, Dewi!"
```

---

## Aturan Penting

:::caution[Parameter Opsional Harus di Akhir]
Parameter opsional harus diletakkan **setelah** semua parameter wajib.

```ts
// Salah
function f(a?: string, b: string) { }

// Benar
function f(a: string, b?: string) { }
```
:::

---

## Latihan

Buat function `buatLaporan(nama, nilai, catatan?)`. Jika catatan tidak dikirim, tampilkan `"Tidak ada catatan"`.

---

## Ringkasan

- Tanda `?` setelah nama parameter membuatnya opsional.
- Nilai parameter opsional yang tidak dikirim adalah `undefined`.
- Selalu cek `!== undefined` atau gunakan `??` sebelum menggunakan.
- Parameter opsional harus berada di posisi terakhir.

:::tip[Langkah Selanjutnya]
Lanjut ke **Default Parameter**.
:::
