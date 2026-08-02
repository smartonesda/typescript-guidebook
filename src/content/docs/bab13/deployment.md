---
title: "Deployment (Meluncurkan Aplikasi) — BAB 13"
description: Pengenalan konsep deployment aplikasi ke cloud menggunakan Vercel, Railway, Docker, dan CI/CD.
---

# Deployment (Meluncurkan Aplikasi)

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan arti istilah *Deployment* (Penerbitan Aplikasi).
- Mengenali berbagai layanan cloud hosting gratis/murah (Vercel, Netlify, Render, Railway).
- Memahami peran Docker dan konsep dasar CI/CD secara sekilas.

---

## Pendahuluan
Aplikasi yang berjalan di komputermu (*localhost*) hanya bisa diakses oleh kamu sendiri. Agar aplikasi bisa diakses oleh teman-temanmu, guru, atau pengguna di seluruh dunia via internet, kita harus mengunggah aplikasi tersebut ke komputer server internet khusus yang aktif 24 jam. Proses ini disebut **Deployment**.

---

## Penjelasan: Layanan Cloud & Container

Ada berbagai layanan cloud yang mempermudah proses deployment bagi pemula secara gratis atau murah:

### 1. Platform-as-a-Service (PaaS) untuk Frontend
- **Vercel** & **Netlify**: Sangat populer untuk meluncurkan website frontend (React/Vue/Next.js). Prosesnya otomatis terhubung ke akun GitHub-mu. Setiap kali kamu melakukan update kode ke GitHub, Vercel akan langsung mengupdate websitemu secara otomatis.

### 2. Cloud Hosting untuk Backend & Database
- **Render** & **Railway**: Layanan murah/gratis untuk mengunggah server backend Node.js/Express/NestJS dan database PostgreSQL/MySQL agar aktif 24 jam di internet.

### 3. Docker (Containerization)
Saat mendeploy server, seringkali muncul masalah: *"Di laptop saya jalannya normal, kok di server error?"*. 
**Docker** hadir untuk menyelesaikan masalah ini dengan membungkus aplikasi beserta seluruh konfigurasinya ke dalam satu wadah mandiri bernama **Container**. Wadah ini dijamin berjalan sama persis di komputer mana pun, baik di laptopmu maupun di server cloud.

### 4. CI/CD (Continuous Integration / Continuous Deployment)
Alur otomatisasi yang menguji kode programmu (`test`) dan langsung mendeploy-nya ke server (`deploy`) setiap kali kamu melakukan push kode ke GitHub.

---

## Visual Illustration: Alur Deployment Otomatis

```text
  [ Laptop Kamu ] ──► git push ──► [ GitHub Repositori ]
                                          │
                                          ▼ mendeteksi perubahan
                                    [ Vercel / Railway ]
                                          │
                                          ▼ build & deploy otomatis
                                   Aplikasi Live di Internet 🚀
```

---

## Tips Dunia Industri
:::note[Mulai dari yang Gratis]
Gunakan **Vercel** untuk semua project website frontend React/Vue buatanmu, dan gunakan **Railway** atau **Render** untuk server backend Node.js. Semuanya menyediakan kuota gratis yang sangat cukup untuk kebutuhan pamer portofolio sekolah dan tugas akhir SMK.
:::

---

## Langkah Selanjutnya
Mari kita pelajari cara berkontribusi di komunitas global pada halaman **Open Source**.

---

## Ringkasan
- Deployment adalah proses meluncurkan aplikasi agar bisa diakses di internet.
- Vercel/Netlify cocok untuk frontend; Render/Railway cocok untuk backend & database.
- Docker membungkus aplikasi ke dalam container agar berjalan konsisten di semua komputer.
- Alur CI/CD mengotomatiskan proses pengujian dan deployment langsung dari push Git.
