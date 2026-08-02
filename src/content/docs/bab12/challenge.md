---
title: "Challenge BAB 12"
description: Sepuluh latihan refactoring (perapian kode) untuk melatih penulisan kode bersih di TypeScript.
---

# Challenge BAB 12: Refactoring

## Tujuan Pembelajaran
Setelah menyelesaikan challenge ini, kamu diharapkan dapat:
- Mengidentifikasi *code smell* (gejala kode buruk) secara mandiri.
- Merapikan kode rumit menjadi sederhana (KISS).
- Memisahkan fungsi panjang menjadi unit modular kecil (Single Responsibility).

---

## Pendahuluan
Setelah berhasil membangun aplikasi dasar, langkah terbaik untuk menguji keahlianmu adalah dengan menyelesaikan berbagai tantangan pengerjaan ulang (*refactoring*) tanpa panduan kode langsung.

---

## Penjelasan
Di halaman ini, kamu ditantang untuk merapikan kode-kode program kotor. Cobalah menganalisis apa yang salah dengan kode tersebut, lalu tulislah versi bersihnya di file projectmu secara mandiri.

---

## Analogi Kehidupan Sehari-hari: Lomba Kebersihan Diri
Menyelesaikan challenge refactoring seperti **mengikuti lomba merapikan seragam sekolah**:

```text
Tantangan:
- Kancingkan kemeja yang terlewat (Atur nama variabel)
- Setrika baju lecek (Format Prettier)
- Rapikan kerah dasi yang melenceng (Enkapsulasi)
```

Tindakan ini tidak mengubah tinggi atau berat badanmu (logika program tetap). Namun, penampilanmu menjadi sangat rapi dan siap menghadapi penilaian guru industri.

---

## Visual Illustration: Tahapan Refactoring

```text
Identifikasi Kode Kotor ──► Analisis Masalah ──► Tulis Kode Bersih ──► Jalankan Tes
```

---

## Daftar 10 Tantangan Refactoring

### 1. Refactor Nama Variabel (Naming)
Miliki kode kotor berikut, ubah menjadi nama variabel yang deskriptif dan mematuhi camelCase:
```ts
const a = "Budi";
let t_s = 17;
const KKM = 75;
```

### 2. Refactor Fungsi Tunggal (Single Responsibility)
Pecah fungsi yang melakukan dua tugas ini menjadi dua fungsi kecil yang fokus:
```ts
function prosesNilaiSiswa(nama: string, nilai: number): void {
  const lulus = nilai >= 75;
  console.log(`${nama} dinyatakan ${lulus ? "LULUS" : "REMEDIAL"}`);
}
```

### 3. Refactor Jarak Baris (Formatting)
Kode di bawah ini menumpuk padat. Berikan baris kosong (*newline*) di tempat yang tepat agar kode "bernapas" dan mudah dibaca:
```ts
const nama="Putra";const umur=17;const kelas="XI RPL 1";function sapa(){console.log(nama);console.log(umur);console.log(kelas);}sapa();
```

### 4. Refactor Logika DRY (Duplikasi)
Temukan duplikasi rumus keliling lingkaran, pindahkan ke fungsi helper terpusat:
```ts
const r1 = 7;
const keliling1 = 2 * 3.14 * r1;
const r2 = 10;
const keliling2 = 2 * 3.14 * r2;
```

### 5. Refactor Logika KISS (Kesederhanaan)
Sederhanakan logika ternary bertumpuk yang rumit ini menggunakan `if-else` atau switch-case yang lebih mudah dibaca sekilas:
```ts
const dapatStatus = (n: number) => n >= 90 ? "A" : n >= 75 ? "B" : "C";
```

### 6. Refactor Menghilangkan Magic Number
Pindahkan angka `75` yang tidak jelas maknanya (*magic number*) ke dalam konstanta bernama (UPPER_SNAKE_CASE) di bagian atas:
```ts
function cek(n: number) {
  return n >= 75;
}
```

### 7. Refactor Parameter Objek
Fungsi di bawah ini memiliki 5 parameter. Refactor agar menerima 1 parameter berupa objek terstruktur:
```ts
function buatProfil(nama: string, kelas: string, nis: number, email: string, aktif: boolean) {}
```

### 8. Refactor Early Return
Gunakan teknik *early return* (keluar fungsi lebih cepat jika kondisi tidak terpenuhi) untuk menghilangkan nested `if` yang terlalu dalam:
```ts
function proses(siswa: any) {
  if (siswa) {
    if (siswa.aktif) {
      console.log(siswa.nama);
    }
  }
}
```

### 9. Refactor Type Safety (Anti-Any)
Ganti tipe `any` di bawah ini dengan interface tipe objek yang spesifik:
```ts
function cetak(siswa: any) {
  console.log(siswa.nama);
}
```

### 10. Refactor Menghilangkan Komentar Redundan
Hapus komentar yang tidak perlu (yang hanya mengulang kode) dan ubah kode agar "menjelaskan dirinya sendiri" (*self-documenting*):
```ts
// membuat variabel nama berisi string Budi
const nama = "Budi"; 
// fungsi untuk mengecek apakah lulus
function cek(n: number) {
  return n >= 75; // return true jika n lebih besar atau sama dengan 75
}
```

---

## Langkah Selanjutnya
Lanjut ke **Ringkasan** untuk meninjau kembali seluruh rangkuman bab.

---

## Ringkasan
- Challenge melatih kemampuan analisis untuk menyederhanakan dan merapikan kode program.
- Menghindari duplikasi, parameter berlebih, dan *magic number* adalah kunci utama kode bersih.

---

## Latihan
1. Buat berkas-berkas latihan di atas di folder `src/bab12/challenge/` komputermu.
2. Pastikan program berjalan lancar tanpa error kompilasi.
