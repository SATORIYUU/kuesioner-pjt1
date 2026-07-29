# 📊 Aplikasi Kuesioner & Executive Dashboard

Proyek aplikasi manajemen kuesioner berbasis web yang dirancang untuk pengumpulan data responsif, analisis hasil kuesioner, serta visualisasi data dalam bentuk *Executive Information System (EIS)* dashboard. Sistem ini mendukung akses multi-role (termasuk *Superadmin* dan *User*) dengan integrasi penuh ke Supabase sebagai backend-as-a-service dan MySQL untuk penyimpanan data utama.

---

## 🚀 Fitur Utama

- **Authentication & Multi-Role Access Control**
  - Autentikasi aman berbasis Supabase Auth.
  - Pembatasan hak akses halaman menggunakan *Nuxt Route Middleware* khusus (`User`, `Admin`, `Superadmin`).
- **Manajemen Kuesioner Interaktif**
  - Pembuatan dan pendistribusian pertanyaan kuesioner secara fleksibel.
  - Pengumpulan jawaban dari responden secara realtime.
- **Executive Information System (EIS) Dashboard**
  - Visualisasi data statistik agregat dan metrik partisipasi responden.
  - Antarmuka responsif yang disesuaikan untuk tampilan desktop maupun perangkat seluler.
- **Manajemen User & Akses (Superadmin)**
  - Panel kontrol terpusat untuk mengelola profil pengguna dan perubahan *role* pengguna melalui tabel `access`.
  - Keamanan akses API dan integrasi basis data terproteksi.

---

## 🛠️ Tech Stack

### Frontend & Framework
- **[Nuxt 3](https://nuxt.com/)** / **[Vue 3](https://vuejs.org/)** – Framework bawaan untuk arsitektur *Single Page Application (SPA)* & *Server-Side Rendering (SSR)*.
- **TypeScript / JavaScript** – Bahasa pemrograman utama untuk logika aplikasi.

### Backend & Database
- **[Supabase](https://supabase.com/)** – PostgreSQL engine, Authentication, dan Client-side Query API.
- **MySQL** – Database relasional untuk penyimpanan data terstruktur.

### Tools & Utility
- **VS Code** – IDE Pengembangan.
- **Git & GitHub** – Version control dan repositori kode.

---

## ⚙️ Cara Run / Setup Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek secara lokal di komputer Anda:

### 1. Prasyarat System
Pastikan Anda telah menginstal **Node.js** (versi 18.x atau lebih baru) dan **npm / pnpm / yarn** di komputer Anda.

### 2. Clone Repositori
```bash
git clone https://github.com/USERNAME_ANDA/NAMA_REPOSITORI.git
cd NAMA_REPOSITORI
```

### 3. Install Dependensi
```bash
npm install
# atau
pnpm install
```

### 4. Konfigurasi Environment Variable
Salin file sampel environment dan sesuaikan nilainya:
```bash
cp .env.example .env
```
*(Isi `.env` sesuai panduan section di bawah).*

### 5. Jalankan Mode Development
```bash
npm run dev
```
Buka browser Anda dan akses aplikasi di: `http://localhost:3000`

---

## 🔑 Konfigurasi Environment (`.env.example`)

Buat file bernama `.env` di direktori utama proyek Anda dan lengkapi variabel lingkungan berikut:

```env
# Supabase Configuration
SUPABASE_URL=https://your-supabase-project-id.supabase.co
SUPABASE_KEY=your-supabase-anon-key

# Database Configuration (MySQL)
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_database_password
DB_NAME=kuesioner_db

# App Configuration
NODE_ENV=development
```

---
*Dibuat oleh [Nama Anda]*
