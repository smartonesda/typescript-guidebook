---
title: "Access Modifier"
description: Mengamankan properti dan method Class menggunakan public, private, dan protected di TypeScript.
---

# Access Modifier

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan perbedaan antara `public`, `private`, & `protected`.
- Menentukan modifier yang tepat untuk menjaga keamanan data objek.
- Membaca dan memperbaiki error kompilasi akibat pelanggaran modifier.

---

## Pendahuluan

Secara default, seluruh properti dan method di dalam class bisa diakses bebas dari mana saja (luar class). Tetapi dalam pembuatan aplikasi nyata, membiarkan data penting diubah secara bebas sangat berbahaya. Kita membutuhkan **Access Modifier** untuk mengatur tingkat hak akses data tersebut.

---

## Tiga Jenis Access Modifier di TypeScript

TypeScript menyediakan tiga kata kunci untuk mengatur hak akses:

| Modifier | Akses dari dalam Class sendiri? | Akses dari Class anak (warisan)? | Akses dari luar Class? |
|---|---|---|---|
| **`public`** | Ya ✓ | Ya ✓ | Ya ✓ (Bebas) |
| **`protected`** | Ya ✓ | Ya ✓ | Tidak ✗ (Dilarang) |
| **`private`** | Ya ✓ | Tidak ✗ | Tidak ✗ (Dilarang) |

---

## Analogi Kehidupan Sehari-hari: Tingkat Akses Sekolah

Bayangkan gerbang dan area di sekolah:

### 1. Public (Halaman Depan Sekolah)
Halaman depan sekolah di dekat jalan raya terbuka untuk umum. Wali murid, penjual makanan, dan orang lewat boleh masuk ke halaman ini.
```text
Public = Halaman luar sekolah (siapa saja boleh masuk)
```

### 2. Protected (Ruang Guru)
Ruang guru hanya boleh dimasuki oleh Guru (kelas induk) dan Magang (kelas anak yang mewarisi sifat guru). Orang luar atau siswa biasa dilarang masuk.
```text
Protected = Ruang Guru (hanya untuk guru dan asisten magang)
```

### 3. Private (Laci Brankas Meja Kepala Sekolah)
Laci meja kepala sekolah dikunci rapat. Hanya Kepala Sekolah sendiri yang memegang kuncinya. Guru lain pun dilarang membukanya.
```text
Private = Laci Meja Kepala Sekolah (hanya untuk pemilik meja)
```

---

## Mari Mencoba: Praktik Tiga Hak Akses

Mari kita buat program class `AkunSiswa` yang mendemonstrasikan batasan dari ketiga access modifier tersebut.

Buat file bernama `src/bab8/access-modifier.ts`:

```ts
class AkunSiswa {
  public nama: string;          // Bisa diakses dari mana saja
  protected nomorAbsen: number; // Hanya untuk class ini dan keturunannya
  private password: string;     // Benar-benar rahasia (hanya di class ini)

  constructor(nama: string, absen: number, sandi: string) {
    this.nama = nama;
    this.nomorAbsen = absen;
    this.password = sandi;
  }

  // Method public untuk login (bisa diakses luar)
  public cobaLogin(sandiInput: string): void {
    if (sandiInput === this.password) {
      console.log(`✓ Login sukses! Selamat datang, ${this.nama}.`);
    } else {
      console.log("⚠ Login Gagal: Password salah!");
    }
  }
}

const siswaA = new AkunSiswa("Putra Ramadhan", 15, "rpl123");

// 1. Mengakses public (Boleh)
console.log(`Nama Siswa: ${siswaA.nama}`);

// 2. Mengakses method public (Boleh)
siswaA.cobaLogin("rpl123");

// 3. Mengakses private atau protected (Error!)
// console.log(siswaA.password);   // ✗ Error! Property 'password' is private
// console.log(siswaA.nomorAbsen);  // ✗ Error! Property 'nomorAbsen' is protected
```

Jalankan dengan perintah:
```text
tsx src/bab8/access-modifier.ts
```

## Output
```text
Nama Siswa: Putra Ramadhan
✓ Login sukses! Selamat datang, Putra Ramadhan.
```

---

## Penjelasan Baris per Baris

- `public nama` — properti `nama` diakses langsung di luar class (`siswaA.nama`) tanpa masalah.
- `private password` — properti ini dikunci rapat. Tidak ada kode di luar class `AkunSiswa` yang bisa membaca atau mengubahnya secara langsung. Satu-satunya cara mengecek password adalah dengan memanggil method public `cobaLogin()`.
- `protected nomorAbsen` — properti ini dilarang diakses langsung dari luar. Tetapi jika kita membuat class baru yang mewarisi `AkunSiswa`, class anak tersebut masih boleh memakainya (akan dibahas di halaman Inheritance).

---

## Parameter Properties dengan Access Modifier

Di halaman Constructor, kita belajar cara menyingkat kode menggunakan Parameter Properties. Kita bisa meletakkan `public`, `private`, atau `protected` langsung di dalam parameter constructor:

```ts
class Siswa {
  // TypeScript otomatis membuat property dan memasukkan nilainya
  constructor(
    public nama: string,
    private nis: number
  ) {}
}
```

---

## Kesalahan yang Sering Terjadi

### ❌ Mencoba memodifikasi properti private secara langsung dari luar class
```ts
siswaA.password = "rahasianew"; // Error di TypeScript!
```

**Perbaikan:** Buatlah method khusus (seperti `gantiPassword()`) di dalam class yang melakukan validasi terlebih dahulu sebelum mengubah properti private tersebut.

---

## Tips
:::tip[Gunakan Aturan Default Aman]
Sebagai aturan praktis yang aman: **Buatlah seluruh properti sebagai `private` secara default. Ubah menjadi `protected` atau `public` hanya jika memang benar-benar dibutuhkan.** Ini menjaga agar data objekmu tidak mudah dirusak dari luar.
:::

---

## Latihan
1. Buat class `SiswaUjian` menggunakan Parameter Properties singkat dengan properti: `public nama: string` dan `private nilai: number`.
2. Tambahkan method public `cetakStatus()` yang mencetak `"Lulus"` jika nilai >= 75 dan `"Remedial"` jika kurang.
3. Buat objeknya dan uji coba apakah properti `nilai` aman dari akses langsung luar.

---

## Ringkasan
- `public` — bebas diakses dari mana saja (default).
- `protected` — hanya bisa diakses dari class itu sendiri dan class keturunannya.
- `private` — hanya bisa diakses dari dalam class itu sendiri.
- Access Modifier adalah alat utama untuk menerapkan pilar Enkapsulasi di OOP.

:::tip[Langkah Selanjutnya]
Lanjut ke **Encapsulation** untuk memahami konsep penyembunyian data ini secara mendalam.
:::
