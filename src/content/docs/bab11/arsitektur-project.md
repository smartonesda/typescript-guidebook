---
title: "Arsitektur Project — BAB 11"
description: Memahami Layered Architecture untuk membagi kode program menjadi Presentation Layer, Service Layer, dan Repository Layer.
---

# Arsitektur Project (Layered Architecture)

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan konsep Layered Architecture secara sederhana.
- Membedakan tugas Presentation Layer, Service Layer, dan Repository Layer.
- Memahami alur perjalanan data dari input pengguna hingga masuk ke memori penyimpanan.

---

## Pendahuluan
Ketika project aplikasimu bertambah besar, menulis semua kode di dalam satu tempat akan menimbulkan kekacauan. Kode pemrosesan database akan tercampur dengan kode cetak teks ke layar. 

Untuk mengatasinya, software engineer menggunakan pola **Layered Architecture** (Arsitektur Berlapis) untuk memisahkan tugas masing-masing bagian program.

---

## Penjelasan
Arsitektur berlapis membagi aplikasi kita menjadi 3 lapisan:

```text
    Presentation Layer (main.ts)
              │
              ▼ meminta data ke
       Service Layer (siswa-service.ts)
              │
              ▼ meminta data murni ke
      Repository Layer (academic-repository.ts)
```

### 1. Presentation Layer (Tampilan)
Ini adalah gerbang depan aplikasi. Ia bertugas menampilkan menu, meminta input ketikan dari user, dan menampilkan output teks hasil. Ia **tidak tahu** bagaimana cara menghitung nilai rata-rata atau menyimpan data ke array.

### 2. Service Layer (Logika Bisnis)
Ini adalah otak aplikasi. Ia menerima data mentah dari presentasi, menghitung rata-rata, memproses kelulusan, melakukan fetch API dari internet, dan mengemas data sebelum dikirim ke repositori.

### 3. Repository Layer (Akses Data)
Ini adalah pelayan gudang data. Ia hanya bertugas menambah, mencari, mengupdate, dan menghapus data murni dari array memori RAM. Ia tidak peduli tentang menu console.log atau nilai kelulusan.

---

## Analogi Kehidupan Sehari-hari: Alur Kerja Restoran

Bayangkan alur pemesanan makanan di restoran:

```text
Wali Murid / Pelanggan  ──► Memesan ke Pelayan (Presentation Layer)
                                   │
                                   ▼ mencatat & menyerahkan ke
                             Koki Utama (Service Layer) ──► Mengolah resep, memasak
                                   │
                                   ▼ mengambil bahan dari
                             Asisten Gudang (Repository Layer) ──► Kulkas Penyimpanan (RAM)
```

Pelanggan tidak boleh berjalan masuk ke dapur kulkas sendiri untuk mengambil daging (keamanan data terjaga karena terisolasi lewat layer).

---

## Visual Illustration: Alur Pendaftaran Siswa Baru

```text
User ketik data ──► main.ts ──► SiswaService ──► AcademicRepository ──► Array RAM
                                (Validasi &      (Simpan objek)
                                 Rata-rata)
```

---

## Live Coding: Alur Komunikasi Layer Sederhana
Berikut adalah representasi kode bagaimana ketiga layer berkomunikasi:

```ts
// 1. Repository Layer (Simpan Data)
class RepoSimpan {
  private data: string[] = [];
  tambah(item: string) { this.data.push(item); }
  ambil() { return this.data; }
}

// 2. Service Layer (Proses Logika)
class ServiceProses {
  constructor(private repo: RepoSimpan) {}
  tambahKapital(nama: string) {
    this.repo.tambah(nama.toUpperCase()); // proses bisnis
  }
}

// 3. Presentation Layer (Tampilan)
const repo = new RepoSimpan();
const service = new ServiceProses(repo);
service.tambahKapital("putra"); // input nama kecil, masuk database besar
console.log("Database:", repo.ambil());
```

---

## Output
Hasil eksekusi alur komunikasi layer di atas di terminal:

```text
Database: [ 'PUTRA' ]
```

---

## Penjelasan Baris per Baris
- `class RepoSimpan`: Hanya mengurusi penyimpanan data array murni.
- `class ServiceProses`: Mengambil input, mengubah menjadi huruf kapital (logika bisnis), lalu menyuruh repositori menyimpannya.
- `service.tambahKapital("putra")`: Presentasi memanggil service untuk mengolah data.

---

## Common Mistakes
- **Mengakses database langsung dari tampilan**: Menulis `repo.tambah()` langsung di dalam menu `main.ts` tanpa melewati `SiswaService`. Ini merusak keamanan validasi data.

---

## Tips
:::tip[Gunakan Dependency Injection]
Selalu kirimkan objek repositori ke dalam constructor service saat instansiasi. Ini disebut *Dependency Injection*, pola desain yang membuat kodemu sangat mudah diuji secara modular.
:::

---

## Latihan
1. Tuliskan di file latihan: apa tugas utama dari Service Layer pada arsitektur berlapis?
2. Jelaskan mengapa kita tidak boleh menuliskan perintah `console.log()` untuk mencetak laporan langsung di dalam class `AcademicRepository`.
