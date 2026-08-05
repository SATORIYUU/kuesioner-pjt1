<template>
  <!-- BACKGROUND: Mengunci gambar Sutami agar konsisten dengan halaman utama -->
  <div 
    class="min-h-screen w-full bg-[#F4F7FA] flex flex-col font-sans text-slate-800 overflow-x-hidden"
    style="background-image: url('/Sutami.png'); background-size: cover; background-position: center; background-attachment: fixed;"
  >
    
    <!-- NAVBAR -->
    <nav class="w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 px-4 sm:px-8 py-4 flex items-center justify-between shadow-sm relative z-10">
      <div class="flex items-center space-x-3">
        <img src="/logopjt1.png" alt="Logo PJT I" class="h-6 sm:h-8 w-auto object-contain" />
        <span class="text-lg sm:text-xl font-bold text-[#004B87]">Perum Jasa Tirta</span>
      </div>
      <div class="flex items-center text-xs sm:text-sm font-medium text-slate-600">
        <a href="https://jasatirta1.co.id/" target="_blank" rel="noopener noreferrer" class="hover:text-[#004B87] transition-colors">Tentang Kami</a>
      </div>
    </nav>

    <!-- MAIN CONTENT: Kartu Validasi Berbentuk Glassmorphism Minimalis -->
    <main class="flex-1 w-full max-w-xl mx-auto px-4 flex items-center justify-center relative z-10 box-border py-12">
      <div class="w-full bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center shadow-2xl box-border">
        
        <!-- Efek Ornamen Cincin Sukses Medali -->
        <div class="relative mb-6">
          <div class="absolute inset-0 bg-emerald-100 rounded-full scale-125 opacity-40 animate-ping"></div>
          <div class="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <!-- Judul Berstatus Valid -->
        <h1 class="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Submisi Kuesioner Berhasil
        </h1>
        
        <!-- Teks Apresiasi Sesuai Permintaanmu -->
        <p class="text-slate-600 text-sm sm:text-base leading-relaxed font-medium max-w-sm mb-8">
          Terima Kasih Masukan Anda telah berhasil kami simpan. Feedback yang Anda berikan sangat berarti bagi kami untuk terus meningkatkan kualitas layanan publik Perum Jasa Tirta.
        </p>

        <!-- Tombol Kembali dengan Style Selaras Akses Publik -->
        <div class="w-full border-t border-slate-100 pt-6">
          <button 
            @click="backToHome" 
            class="w-full bg-[#004B87] hover:bg-sky-900 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md text-sm sm:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Selesai & Keluar</span>
          </button>
        </div>

      </div>
    </main>

    <!-- FOOTER -->
<footer class="w-full bg-[#004B87] border-t border-sky-700/50 px-6 sm:px-12 py-6 text-xs text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
  <div>
    <span class="font-semibold text-white">Perum Jasa Tirta</span>
    <p class="text-sky-200/80">© 2026 Perum Jasa Tirta. All rights reserved.</p>
  </div>
  <div class="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2 sm:gap-x-6 font-medium text-sky-100">
  </div>
</footer>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const backToHome = () => {
  router.push('/')
}
</script>