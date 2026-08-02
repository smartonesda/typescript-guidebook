---
title: "Utility Type: ReturnType"
description: Menggunakan Utility Type ReturnType<T> untuk mengambil tipe data hasil kembalian (return) dari sebuah fungsi di TypeScript.
---

# Utility Type: `ReturnType`

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan fungsi dari Utility Type `ReturnType<T>`.
- Mengambil tipe data keluaran fungsi menggunakan `ReturnType`.
- Memahami kegunaan `ReturnType` untuk mengotomatiskan tipe data data store atau state.

---

## Pendahuluan

Saat kita bekerja dengan fungsi yang rumit (seperti fungsi yang menghasilkan objek konfigurasi atau data siswa), tipe data keluaran (*return value*) fungsi tersebut bisa sangat kompleks. 

Daripada kita menulis ulang tipe data keluaran tersebut secara manual, kita bisa meminta TypeScript untuk mengintip tipe data apa yang dihasilkan oleh fungsi itu menggunakan **`ReturnType`**.

---

## Penjelasan Materi: Cara Kerja `ReturnType`

Utility Type `ReturnType<T>` mengambil tipe data kembalian (return) dari sebuah tipe fungsi `T`.

Sintaks dasar:

```ts
type TipeHasil = ReturnType<typeof namaFungsi>;
```

:::note[Wajib Menggunakan typeof]
Karena `namaFungsi` adalah nilai nyata (bukan tipe), kita harus menggunakan operator `typeof` terlebih dahulu di depan nama fungsi agar menghasilkan tipe fungsi yang bisa dibaca oleh `ReturnType`.
:::

---

## Analogi Kehidupan Sehari-hari: Hasil Akhir Mesin Pembuat Roti

Bayangkan sebuah **Mesin Pembuat Roti Otomatis**:

```text
Mesin Roti (Fungsi) ──► Bahan masuk ──► Proses ──► Keluar Roti Keju (Return)
```

Kamu ingin menyiapkan wadah kemasan yang ukurannya pas untuk menampung makanan yang keluar dari mesin tersebut. Kamu tidak perlu mengukur bahan-bahannya. Kamu cukup melihat **hasil akhir (roti keju)** yang keluar dari mesin tersebut, lalu membuat kardus kemasan dengan ukuran yang sama persis.

```text
ReturnType<Mesin Roti> = Spesifikasi ukuran Roti Keju yang dihasilkan
```

---

## Visual Illustration: Alur Kerja ReturnType

```text
Fungsi: function hitung() { return { total: 100 } }

ReturnType: type Hasil = ReturnType<typeof hitung>

Hasil Tipe: { total: number }
```

---

## Mari Mencoba: Mengintip Output Fungsi Pembuat Siswa

Mari buat program yang mengekstrak tipe data objek yang dihasilkan oleh fungsi pabrik pembuat siswa.

Buat file bernama `src/bab9/returntype-utility.ts`:

```ts
// 1. Fungsi pembuat objek (Factory Function)
function buatDataSiswa(nama: string, kelas: string) {
  return {
    namaSiswa: nama,
    kelasSiswa: kelas,
    tanggalDibuat: new Date(),
    aktif: true
  };
}

// 2. Mengekstrak tipe kembalian fungsi menggunakan ReturnType
type DataSiswaHasil = ReturnType<typeof buatDataSiswa>;

// 3. Objek baru wajib mematuhi tipe hasil ekstraksi
const siswaBaru: DataSiswaHasil = {
  namaSiswa: "Putra",
  kelasSiswa: "XI RPL 1",
  tanggalDibuat: new Date(),
  aktif: false
};

console.log("Data hasil fungsi:", buatDataSiswa("Andi", "XI RPL 2"));
console.log("Data objek baru  :", siswaBaru);
```

Jalankan dengan perintah:
```text
tsx src/bab9/returntype-utility.ts
```

## Output
```text
Data hasil fungsi: {
  namaSiswa: 'Andi',
  kelasSiswa: 'XI RPL 2',
  tanggalDibuat: 2026-08-01T...Z,
  aktif: true
}
Data objek baru  : {
  namaSiswa: 'Putra',
  kelasSiswa: 'XI RPL 1',
  tanggalDibuat: 2026-08-01T...Z,
  aktif: false
}
```

---

## Penjelasan Baris per Baris

- `buatDataSiswa` — Fungsi yang mengembalikan objek dengan empat properti.
- `ReturnType<typeof buatDataSiswa>` — TypeScript memeriksa tipe return fungsi tersebut dan menghasilkan tipe objek `{ namaSiswa: string, kelasSiswa: string, tanggalDibuat: Date, aktif: boolean }`.
- Objek `siswaBaru` wajib mematuhi bentuk properti tersebut.

---

## Latihan
1. Buat fungsi `buatKoordinat(x: number, y: number)` yang mengembalikan objek `{ x, y, label: string }`.
2. Gunakan `ReturnType` untuk membuat tipe `Koordinat`.
3. Buat variabel menggunakan tipe tersebut dan tampilkan.

---

## Ringkasan
- `ReturnType<T>` mengambil tipe data keluaran (return) dari sebuah fungsi.
- Wajib menggunakan `typeof` di depan nama fungsi nyata.
- Sangat membantu menyinkronkan tipe data store agar selalu cocok dengan fungsi pembuatnya secara otomatis.

:::tip[Langkah Selanjutnya]
Lanjut ke **Parameters** untuk mempelajari cara mengintip input parameter fungsi.
:::
