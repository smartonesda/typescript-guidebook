---
title: "Utility Type: Omit"
description: Menggunakan Utility Type Omit<T, K> untuk membuang beberapa properti tertentu dari tipe objek di TypeScript.
---

# Utility Type: `Omit`

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan fungsi dari Utility Type `Omit<T, K>`.
- Menggunakan `Omit` untuk membuang properti objek yang tidak diinginkan.
- Membedakan penggunaan `Pick` dan `Omit`.

---

## Pendahuluan

Jika `Pick` digunakan untuk **memilih** properti yang diinginkan, **`Omit`** (artinya: menghilangkan / mengabaikan) digunakan untuk **membuang** properti yang tidak kita inginkan dari sebuah objek. 

Contoh: Kita memiliki objek `Siswa` yang memiliki properti sensitif seperti `password` dan `catatanSanksi`. Saat kita ingin mengirim data siswa ke luar sistem (seperti ke aplikasi mobile), kita ingin membuang kedua properti tersebut demi keamanan.

---

## Penjelasan Materi: Cara Kerja `Omit`

Utility Type `Omit<T, K>` membuat tipe data baru dengan membuang properti (kunci `K`) dari tipe asal `T`.

Sintaks dasar:

```ts
type TipeBaru = Omit<TipeAsal, "kunci1" | "kunci2">;
```

Tipe baru yang dihasilkan akan memiliki seluruh properti `TipeAsal` **kecuali** properti `"kunci1"` dan `"kunci2"`.

---

## Analogi Kehidupan Sehari-hari: Menyensor Kolom Rahasia dari Map Rapor

Kamu memiliki map rapor lengkap siswa. Untuk keperluan dibagikan kepada pengurus kelas:

Kamu memfotokopi map rapor tersebut, namun sengaja menempelkan selotip kertas hitam di atas kolom **"Catatan Pelanggaran Sikap"** dan **"Alamat Rumah"** agar tertutup saat difotokopi.

```text
Omit<Rapor, "Catatan" | "Alamat"> = Hasil fotokopi yang kolom catatan dan alamatnya telah dihilangkan
```

Hasil cetak fotokopi yang baru memuat seluruh data rapor **kecuali** bagian yang disensor tersebut.

---

## Visual Illustration: Transformasi Omit

```text
Tipe Asli: { nama: string, kelas: string, nilai: number }
                 │
                 ▼ Diproses Omit<T, "nilai">
Tipe Baru: { nama: string, kelas: string }
```

---

## Mari Mencoba: Menyensor Password Akun Siswa

Mari kita buat program yang menyaring data akun siswa sebelum ditampilkan ke publik menggunakan `Omit`.

Buat file bernama `src/bab9/omit-utility.ts`:

```ts
type AkunSiswa = {
  id: string;
  nama: string;
  email: string;
  passwordHash: string; // properti sensitif
  saldoKantin: number;
};

// Membuat tipe publik dengan membuang 'passwordHash'
type ProfilPublik = Omit<AkunSiswa, "passwordHash">;

const dataAkun: AkunSiswa = {
  id: "SIS-1001",
  nama: "Putra Ramadhan",
  email: "putra@smk.sch.id",
  passwordHash: "sha256$8f9g2h1j",
  saldoKantin: 25000
};

// Objek ini dilarang keras memuat properti passwordHash
const profilTampil: ProfilPublik = {
  id: dataAkun.id,
  nama: dataAkun.nama,
  email: dataAkun.email,
  saldoKantin: dataAkun.saldoKantin
};

console.log("Profil Publik (Aman):", profilTampil);

// Coba lakukan ini (Error!)
// const profilBocor: ProfilPublik = {
//   ...dataAkun // Error! passwordHash ikut masuk padahal tidak boleh ada di ProfilPublik
// };
```

Jalankan dengan perintah:
```text
tsx src/bab9/omit-utility.ts
```

## Output
```text
Profil Publik (Aman): {
  id: 'SIS-1001',
  nama: 'Putra Ramadhan',
  email: 'putra@smk.sch.id',
  saldoKantin: 25000
}
```

---

## Penjelasan Baris per Baris

- `Omit<AkunSiswa, "passwordHash">` — Membuat tipe baru yang memiliki seluruh properti `AkunSiswa` kecuali `passwordHash`.
- Objek `profilTampil` berhasil divalidasi oleh TypeScript sehingga data rahasia `passwordHash` aman tidak terikut di dalamnya.

---

## Pick vs Omit: Pilih yang Mana?

- Gunakan **`Pick`** jika properti yang ingin diambil jumlahnya **sedikit** (misal: punya 20 properti, hanya butuh 2).
- Gunakan **`Omit`** jika properti yang ingin dibuang jumlahnya **sedikit** (misal: punya 20 properti, ingin membuang 2 saja).

---

## Latihan
1. Buat tipe `Mobil` (merk: string, platNomor: string, warna: string).
2. Buat tipe `MobilUmum` yang membuang properti `platNomor` menggunakan `Omit`.
3. Buat objeknya dan tampilkan hasilnya.

---

## Ringkasan
- `Omit<T, K>` membuat tipe baru dengan membuang beberapa properti `K` dari objek `T`.
- Berguna untuk menyembunyikan properti sensitif sebelum dikirim ke client/publik.
- Membantu efisiensi penulisan dibanding harus menulis ulang properti-properti sisa secara manual.

:::tip[Langkah Selanjutnya]
Lanjut ke **Record** untuk mempelajari pemetaan tipe key-value berkelompok.
:::
