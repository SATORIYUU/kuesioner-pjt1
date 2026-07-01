<template>
  <div 
    class="min-h-screen w-full bg-[#F4F7FA] flex flex-col font-sans text-slate-800 overflow-x-hidden"
    style="background-image: url('/Sutami.png'); background-size: cover; background-position: center; background-attachment: fixed;"
  >
    
    <nav class="w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 px-4 sm:px-8 py-4 flex items-center justify-between shadow-sm relative z-10">
      <div class="flex items-center space-x-3">
        <img src="/logopjt1.png" alt="Logo PJT I" class="h-6 sm:h-8 w-auto object-contain" />
        <span class="text-lg sm:text-xl font-bold text-[#004B87]">Perum Jasa Tirta</span>
      </div>
      
      <div class="hidden md:flex items-center">
        <a href="#" class="text-[#004B87] border-b-2 border-[#004B87] pb-1 text-base font-extrabold tracking-wide">
          Dashboard
        </a>
      </div>

      <div class="flex items-center text-xs sm:text-sm font-medium text-slate-600">
  <a 
    href="https://jasatirta1.co.id/" 
    target="_blank" 
    rel="noopener noreferrer" 
    class="hover:text-[#004B87] transition-colors"
  >
    Tentang Kami
  </a>
</div>
    </nav>

    <main class="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-stretch justify-center relative z-10 box-border">
      
      <div class="w-full lg:flex-1 bg-[#004B87] text-white rounded-2xl p-6 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden box-border">
        <div class="space-y-6 sm:space-y-8 w-full">
          <div>
            <span class="inline-block bg-sky-700/50 text-sky-200 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 sm:mb-6">Akses Publik</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 sm:mb-4">Respondent Access</h1>
            <p class="text-sky-100 text-sm sm:text-base leading-relaxed max-w-md">
              Silakan isi identitas perusahaan Anda untuk memulai proses penilaian sumber daya air tahunan.
            </p>
          </div>

          <div class="space-y-4 sm:space-y-6 max-w-md w-full">
            <div>
              <label class="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-sky-200 mb-2">Nama Perusahaan</label>
              <input 
                v-model="companyName"
                type="text" 
                placeholder="Masukkan nama resmi perusahaan..." 
                @input="showError = false"
                :class="showError ? 'border-red-400 ring-2 ring-red-400' : 'border-transparent'"
                class="w-full bg-white text-slate-900 px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-sky-400 font-medium placeholder-slate-400 text-sm sm:text-base transition-all"
              />
              
              <div v-if="showError" class="flex items-center space-x-1.5 text-xs font-semibold mt-2 transition-all animate-pulse" style="color: #ef4444 !important;">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" style="color: #ef4444 !important;">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <span style="color: #ef4444 !important;">Nama perusahaan wajib diisi!</span>
              </div>
            </div>

            <div>
              <label class="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-sky-200 mb-2">Category</label>
              <div class="bg-sky-950/40 p-1.5 rounded-xl flex w-full">
                <button 
                  @click="category = 'Pemanfaat'"
                  :class="category === 'Pemanfaat' ? 'bg-sky-800 text-white shadow' : 'text-sky-200 hover:text-white'"
                  class="flex-1 text-center py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all"
                  type="button"
                >
                  Pemanfaat
                </button>
                <button 
                  @click="category = 'Pihak yang Berkepentingan'"
                  :class="category === 'Pihak yang Berkepentingan' ? 'bg-sky-800 text-white shadow' : 'text-sky-200 hover:text-white'"
                  class="flex-1 text-center py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all"
                  type="button"
                >
                  Pihak yang Berkepentingan
                </button>
              </div>
            </div>

            <div v-if="category === 'Pemanfaat'" class="space-y-2 pt-1 transition-all duration-300 w-full">
              <label class="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-sky-200 mb-2">Sub-Category</label>
              <div class="bg-sky-950/40 p-1.5 rounded-xl flex gap-1.5 w-full">
                <button 
                  v-for="sub in ['PLTA', 'PDAM', 'Industri']" 
                  :key="sub"
                  @click="subCategory = sub"
                  :class="subCategory === sub ? 'bg-sky-800 text-white shadow' : 'text-sky-200 hover:text-white'"
                  class="flex-1 text-center py-2 text-xs font-semibold rounded-lg transition-all"
                  type="button"
                >
                  {{ sub }}
                </button>
              </div>
            </div>

            <div class="pt-4 w-full">
              <button @click="navigateToQuestionnaire" class="w-full bg-[#D9EAFD] text-[#004B87] hover:bg-white font-bold py-3.5 sm:py-4 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg text-sm sm:text-base">
                <span>Mulai Isi Kuesioner</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-2 text-[10px] sm:text-xs text-sky-200/80 pt-4 mt-8 border-t border-sky-700/30 shrink-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944a11.954 11.954 0 007.834 3.056c.11.684.166 1.383.166 2.09 0 4.743-3.148 8.749-7.5 10.025a11.955 11.955 0 01-7.5-10.025c0-.707.055-1.406.166-2.09zM10 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          <span>Sistem Keamanan Terenkripsi Perum Jasa Tirta</span>
        </div>
      </div>

      <div class="w-full lg:flex-1 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-md overflow-hidden box-border">
        <div class="p-6 sm:p-10 flex-1 flex flex-col justify-between w-full max-w-md box-border">
          <div class="w-full">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-sky-50 rounded-xl flex items-center justify-center text-[#004B87] mb-4 sm:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Admin Access</h2>
            <p class="text-slate-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Halaman internal untuk administrator dan tim validasi data. Masuk menggunakan kredensial resmi institusi.
            </p>
          </div>

          <div class="space-y-4 sm:space-y-6 w-full">
            <button class="w-full bg-white border-2 border-[#004B87] text-[#004B87] hover:bg-sky-50 font-bold py-3.5 sm:py-4 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all text-sm sm:text-base">
              <span>Login sebagai Admin</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 11-6 0v-1" /></svg>
            </button>

            <div class="flex items-center space-x-3 pt-2">
              <div class="flex -space-x-2 overflow-hidden">
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

<!-- KOREKSI: Mengganti text-slate ke text-white di seluruh elemen footer -->
<!-- REVISI: Mengubah bg-white/90 menjadi bg-[#004B87] (Biru PJT I) dan merubah teks hitam menjadi putih murni -->
<footer class="w-full bg-[#004B87] border-t border-sky-700/50 px-6 sm:px-12 py-6 text-xs text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
  <div>
    <span class="font-semibold text-white">Perum Jasa Tirta</span>
    <p class="text-sky-200/80">© 2026 Perum Jasa Tirta. All rights reserved.</p>
  </div>
  <div class="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2 sm:gap-x-6 font-medium text-sky-100">
    <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
    <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
    <a href="#" class="hover:text-white transition-colors">Sustainability Report</a>
    <a href="#" class="hover:text-white transition-colors">Contact Support</a>
  </div>
</footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const companyName = ref('')
const category = ref('Pemanfaat')
const subCategory = ref('PLTA')

const showError = ref(false)

const navigateToQuestionnaire = () => {
  if (!companyName.value || !companyName.value.trim()) {
    showError.value = true
    return
  }
  
  showError.value = false
  router.push('/questionnaire')
}
</script>