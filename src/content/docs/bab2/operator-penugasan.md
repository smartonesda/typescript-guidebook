---
title: "Operator Penugasan"
description: Memberi dan memperbarui nilai variabel dengan =, +=, -=, *=, /=, dan %=.
---

# Operator Penugasan

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat memberi nilai dan memperbarui nilai variabel memakai operator penugasan.

---

## Pendahuluan

Variabel seperti catatan nilai di buku. Kamu bisa menulis nilai pertama, lalu memperbaruinya setelah ada bonus atau pengurangan. Operator penugasan membantu melakukan itu dengan singkat.

---

## Analogi Kehidupan Sehari-hari

Bayangkan buku tabungan.

```text
Saldo awal: Rp50.000
Setor Rp10.000  → saldo bertambah
Belanja Rp5.000 → saldo berkurang
```

Tanda `=` menulis nilai baru. Tanda `+=` menambahkan nilai ke isi lama. Tanda `-=` mengurangi isi lama.

---

## Penjelasan Materi

| Operator | Bentuk panjang | Arti |
|---|---|---|
| `=` | `skor = 10` | isi nilai baru |
| `+=` | `skor = skor + 10` | tambah lalu simpan |
| `-=` | `skor = skor - 10` | kurang lalu simpan |
| `*=` | `skor = skor * 2` | kali lalu simpan |
| `/=` | `skor = skor / 2` | bagi lalu simpan |
| `%=` | `skor = skor % 2` | sisa bagi lalu simpan |

---

## Mari Mencoba

Buat `src/bab2/operator-penugasan.ts`:

```ts
let skorGame: number = 0

skorGame += 100
console.log(`Setelah level 1: ${skorGame}`)

skorGame += 250
console.log(`Setelah level 2: ${skorGame}`)

skorGame -= 50
console.log(`Setelah terkena pengurangan: ${skorGame}`)

skorGame *= 2
console.log(`Setelah bonus dua kali: ${skorGame}`)

skorGame /= 2
console.log(`Setelah dibagi dua: ${skorGame}`)
```

Jalankan:

```text
tsx src/bab2/operator-penugasan.ts
```

---

## Output

```text
Setelah level 1: 100
Setelah level 2: 350
Setelah terkena pengurangan: 300
Setelah bonus dua kali: 600
Setelah dibagi dua: 300
```

---

## Penjelasan Baris per Baris

- `let skorGame: number = 0` memakai `let` karena skor berubah.
- `+= 100` sama dengan `skorGame = skorGame + 100`.
- `-= 50` mengurangi nilai lama sebesar 50.
- `*=` dan `/=` memperbarui nilai menggunakan perkalian atau pembagian.

---

## Kesalahan Umum

```ts
const skor: number = 0
skor += 100 // Error
```

`const` tidak boleh diubah. Operator penugasan mengubah nilai, maka gunakan `let`.

Jangan menulis `skorGame =+ 100`. Bentuk itu bukan `+=`; artinya memberi nilai positif 100 dan bisa menghapus skor lama.

---

## Tips

:::tip[Pakai Bentuk Singkat Saat Jelas]
`nilai += 5` lebih ringkas dan mudah dibaca daripada `nilai = nilai + 5` untuk pembaruan sederhana.
:::

---

## Latihan

Buat variabel `saldo` bernilai `50000`. Tambah uang saku `20000`, kurangi belanja `15000`, lalu tampilkan saldo akhir.

---

## Ringkasan

- `=` memberi nilai baru.
- `+=`, `-=`, `*=`, `/=`, `%=` menghitung lalu menyimpan hasil ke variabel yang sama.
- Gunakan `let` untuk nilai yang diperbarui.

:::tip[Langkah Selanjutnya]
Lanjut ke **Operator Perbandingan**.
:::
