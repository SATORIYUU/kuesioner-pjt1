<template>
  <div class="min-h-screen bg-[#F4F7FA] flex flex-col md:flex-row font-sans text-slate-800">
    
    <!-- SIDEBAR NAVIGASI SESI -->
    <aside class="hidden md:flex w-64 bg-white border-r border-slate-200 flex-col justify-between p-6 shadow-sm shrink-0">
      <div class="space-y-8">
        <div @click="goToHome" class="cursor-pointer group flex items-center space-x-3">
          <img src="/logopjt1.png" alt="Logo PJT I" class="h-8 w-auto object-contain" />
          <div>
            <h2 class="text-base font-bold text-[#004B87] group-hover:text-sky-700 transition-colors leading-none mb-1">Perum Jasa Tirta I</h2>
            <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Utility Portal 2026</span>
          </div>
        </div>

        <nav class="space-y-2">
          <!-- Sesi 1: Evaluasi Layanan -->
          <button 
            @click="currentSession = 0"
            class="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm transition-all text-left font-medium"
            :class="currentSession === 0 
              ? 'bg-[#E6F0FA] text-[#004B87] font-bold shadow-sm' 
              : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'"
          >
            <span 
              class="w-5 h-5 rounded-full flex items-center justify-center text-xs font-mono transition-all shrink-0"
              :class="currentSession === 0 ? 'bg-[#004B87] text-white' : 'border border-slate-300 text-slate-400'"
            >
              1
            </span>
            <span class="truncate">Kuesioner Evaluasi</span>
          </button>

          <!-- Sesi 2: Pengukuran Loyalitas -->
          <button 
            @click="currentSession = 1"
            class="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm transition-all text-left font-medium"
            :class="currentSession === 1 
              ? 'bg-[#E6F0FA] text-[#004B87] font-bold shadow-sm' 
              : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'"
          >
            <span 
              class="w-5 h-5 rounded-full flex items-center justify-center text-xs font-mono transition-all shrink-0"
              :class="currentSession === 1 ? 'bg-[#004B87] text-white' : 'border border-slate-300 text-slate-400'"
            >
              2
            </span>
            <span class="truncate">Loyalitas Pelanggan</span>
          </button>
          
          <!-- Sesi 3: Saran & Catatan -->
          <button 
            @click="currentSession = 2"
            class="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm transition-all text-left font-medium"
            :class="currentSession === 2 
              ? 'bg-[#E6F0FA] text-[#004B87] font-bold shadow-sm' 
              : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'"
          >
            <span 
              class="w-5 h-5 rounded-full flex items-center justify-center text-xs font-mono transition-all shrink-0"
              :class="currentSession === 2 ? 'bg-[#004B87] text-white' : 'border border-slate-300 text-slate-400'"
            >
              3
            </span>
            <span>Saran & Catatan</span>
          </button>
        </nav>
      </div>

      <div class="space-y-2 border-t border-slate-100 pt-4">
        <button @click="goToHome" class="w-full flex items-center space-x-3 px-3 py-2 text-red-500 hover:text-red-700 text-sm font-medium text-left">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 11-6 0v-1m6-10V5a3 3 0 11-6 0v-1" /></svg>
          <span>Keluar</span>
        </button>
      </div>
    </aside>

    <div class="flex-1 flex flex-col justify-between min-w-0">
      <header class="bg-white border-b border-slate-200 px-4 sm:px-8 py-4 flex items-center justify-between shadow-sm">
        <div class="flex items-center space-x-2 text-xs sm:text-sm font-medium truncate">
          <span class="text-slate-800 font-bold">SURVEI KEPUASAN & LOYALITAS PELANGGAN</span>
          <span class="text-slate-300 hidden sm:inline">|</span>
          <span class="text-slate-400 font-semibold truncate">Sesi {{ currentSession + 1 }}: {{ currentSessionName }}</span>
        </div>
      </header>

      <!-- VIEW KONTEN UTAMA -->
      <main class="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-10 space-y-6 overflow-y-auto">
        
        <div v-if="isLoading" class="bg-white border border-slate-200 rounded-xl p-12 shadow-sm text-center flex flex-col items-center justify-center">
          <div class="w-10 h-10 border-4 border-slate-200 border-t-[#004B87] rounded-full animate-spin mb-4"></div>
          <p class="text-sm font-medium text-slate-500">Memuat indikator kuesioner dari database...</p>
        </div>

        <div v-else class="space-y-6">
          
          <!-- HEADER SESI & PROGRESS BAR -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-sm space-y-4">
            
            <!-- PETUNJUK KETERANGAN SKALA UNTUK SESI EVALUASI LAYANAN -->
            <div v-if="currentSession === 0" class="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
              <div class="text-xs font-bold text-slate-700 uppercase tracking-wider">Petunjuk Skala Penilaian (1 - 4):</div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <span class="font-bold text-[#004B87] block mb-1">Tingkat Kepuasan:</span>
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-1 text-slate-600 font-medium">
                    <span>1: Tidak Baik 😡</span>
                    <span>2: Kurang Baik 🙁</span>
                    <span>3: Baik 😊</span>
                    <span>4: Sangat Baik 🤩</span>
                  </div>
                </div>
                <div>
                  <span class="font-bold text-amber-700 block mb-1">Tingkat Kepentingan:</span>
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-1 text-slate-600 font-medium">
                    <span>1: Tidak Penting ⚪</span>
                    <span>2: Kurang Penting 🟡</span>
                    <span>3: Penting 🟠</span>
                    <span>4: Sangat Penting 🔴</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between gap-2">
              <div>
                <h1 class="text-xl sm:text-2xl font-bold text-slate-900">{{ currentSessionName }}</h1>
                <p class="text-slate-400 text-xs sm:text-sm font-medium mt-0.5">
                  <template v-if="currentSession === 0">
                    Berikan penilaian secara objektif pada setiap butir pertanyaan berdasarkan tingkat **Kepuasan** dan **Kepentingan**.
                  </template>
                  <template v-else-if="currentSession === 1">
                    Pilihlah **satu opsi pernyataan** pada setiap topik yang paling menggambarkan kondisi atau pandangan Anda.
                  </template>
                  <template v-else>
                    Silakan tuliskan masukan, saran, atau kritik Anda untuk peningkatan layanan kami ke depan.
                  </template>
                </p>
              </div>
              <span class="text-xs sm:text-sm font-bold text-[#004B87] shrink-0">Sesi {{ currentSession + 1 }} dari 3</span>
            </div>
            
            <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div class="bg-[#004B87] h-full transition-all duration-500" :style="{ width: ((currentSession + 1) / 3 * 100) + '%' }"></div>
            </div>
          </div>

          <!-- 1. TAMPILAN EVALUASI LAYANAN (12 PERTANYAAN DENGAN SUBTEMA & 2 KOLOM SKALA 1-4) -->
          <div v-if="currentSession === 0" class="space-y-6">
            <div 
              v-for="(q, idx) in evalQuestions" 
              :key="q.id" 
              class="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-sm space-y-4"
            >
              <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div class="flex items-start space-x-3">
                  <span class="bg-[#004B87] text-white text-xs font-bold px-2 py-0.5 rounded-md mt-0.5 shrink-0">{{ idx + 1 }}</span>
                  <p class="text-slate-800 text-sm sm:text-base font-semibold leading-relaxed">{{ q.text }}</p>
                </div>
                
                <div class="flex items-center gap-2 shrink-0 self-start">
                  <!-- BADGE SUBTEMA -->
                  <span class="bg-sky-50 text-[#004B87] border border-sky-200 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full">
                    Subtema: {{ q.subtheme }}
                  </span>

                  <!-- TOMBOL RESET PILIHAN PER SOAL -->
                  <button 
                    v-if="answers[`q${q.id}_kepuasan`] || answers[`q${q.id}_kepentingan`]"
                    @click="resetQuestionAnswer(q.id)"
                    type="button"
                    class="text-[10px] font-bold text-rose-500 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-2 py-0.5 rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-1"
                    title="Reset Pilihan Pertanyaan Ini"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              <!-- 2 KOLOM SKALA LIKERT (KEPUASAN & KEPENTINGAN) -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
                
                <!-- KOLOM KEPUASAN (1-4) -->
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2">
                  <span class="text-xs font-bold text-[#004B87] uppercase tracking-wider block mb-2">1. TINGKAT KEPUASAN</span>
                  <div class="space-y-2.5">
                    <button 
                      v-for="item in likertOptions.kepuasan" 
                      :key="item.val"
                      @click="answers[`q${q.id}_kepuasan`] = item.val"
                      type="button"
                      :class="answers[`q${q.id}_kepuasan`] === item.val 
                        ? 'bg-[#004B87] text-white border-[#004B87] shadow-md ring-2 ring-[#004B87] ring-offset-1' 
                        : 'bg-white text-slate-700 border-slate-200 hover:border-[#004B87] hover:bg-blue-50/30'"
                      class="w-full py-3 sm:py-3.5 px-4 border rounded-xl text-xs transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-95 flex items-center justify-between cursor-pointer"
                    >
                      <div class="flex items-center space-x-2">
                        <span class="font-extrabold text-sm">{{ item.val }}.</span>
                        <span class="font-bold">{{ item.label }}</span>
                      </div>
                      <span class="text-lg sm:text-xl leading-none">{{ item.emoji }}</span>
                    </button>
                  </div>
                </div>

                <!-- KOLOM KEPENTINGAN (1-4) -->
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2">
                  <span class="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-2">2. TINGKAT KEPENTINGAN</span>
                  <div class="space-y-2.5">
                    <button 
                      v-for="item in likertOptions.kepentingan" 
                      :key="item.val"
                      @click="answers[`q${q.id}_kepentingan`] = item.val"
                      type="button"
                      :class="answers[`q${q.id}_kepentingan`] === item.val 
                        ? 'bg-[#004B87] text-white border-[#004B87] shadow-md ring-2 ring-[#004B87] ring-offset-1' 
                        : 'bg-white text-slate-700 border-slate-200 hover:border-[#004B87] hover:bg-blue-50/30'"
                      class="w-full py-3 sm:py-3.5 px-4 border rounded-xl text-xs transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-95 flex items-center justify-between cursor-pointer"
                    >
                      <div class="flex items-center space-x-2">
                        <span class="font-extrabold text-sm">{{ item.val }}.</span>
                        <span class="font-bold">{{ item.label }}</span>
                      </div>
                      <span class="text-lg sm:text-xl leading-none">{{ item.emoji }}</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <!-- 2. TAMPILAN LOYALITAS PELANGGAN (5 TOPIC SINGLE CHOICE) -->
          <div v-else-if="currentSession === 1" class="space-y-5">
            <div 
              v-for="(group, gIdx) in loyaltyGroups" 
              :key="group.id" 
              class="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-sm space-y-4"
            >
              <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-3 gap-2">
                <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span class="w-6 h-6 rounded-full bg-[#004B87] text-white flex items-center justify-center text-xs font-bold shrink-0">{{ gIdx + 1 }}</span>
                  <span>{{ group.title }}</span>
                </h3>

                <!-- TOMBOL RESET LOYALITAS PER TEMA -->
                <button 
                  v-if="answers[`loyalitas_${group.id}`]"
                  @click="answers[`loyalitas_${group.id}`] = null"
                  type="button"
                  class="text-[10px] font-bold text-rose-500 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-2.5 py-1 rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-1 shrink-0 self-start sm:self-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Reset Pilihan</span>
                </button>
              </div>

              <div class="space-y-2.5">
                <label 
                  v-for="(option, oIdx) in group.options" 
                  :key="oIdx"
                  @click="answers[`loyalitas_${group.id}`] = option.val"
                  :class="answers[`loyalitas_${group.id}`] === option.val ? 'border-[#004B87] bg-[#004B87] text-white shadow-md' : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:border-slate-400'"
                  class="flex items-start p-3.5 sm:p-4 border rounded-xl cursor-pointer transition-all duration-300 ease-out transform hover:scale-[1.01] active:scale-[0.99] space-x-3 text-sm"
                >
                  <input 
                    type="radio" 
                    :name="`loyalty_${group.id}`" 
                    :value="option.val"
                    :checked="answers[`loyalitas_${group.id}`] === option.val"
                    class="mt-1 h-4 w-4 shrink-0 transition-colors cursor-pointer"
                    :class="answers[`loyalitas_${group.id}`] === option.val ? 'text-white border-white focus:ring-white' : 'text-[#004B87] focus:ring-[#004B87]'"
                  />
                  <span class="leading-relaxed font-medium">{{ option.text }}</span>
                </label>
              </div>
            </div>
          </div>

          <!-- 3. TAMPILAN SARAN & CATATAN -->
          <div v-else class="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
            <div class="space-y-2">
              <label class="block text-sm font-bold text-slate-900">Saran, Kritik, atau Catatan Tambahan:</label>
              <textarea 
                v-model="saranText"
                rows="6"
                placeholder="Tuliskan saran Anda di sini untuk membantu peningkatan kualitas layanan Perum Jasa Tirta I..."
                class="w-full p-4 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#004B87] placeholder-slate-400 transition-all hover:border-[#004B87]"
              ></textarea>
            </div>
          </div>

          <!-- BUTTON NAVIGASI BAWAH -->
          <div class="flex items-center justify-between pt-2 sm:pt-4 gap-4">
            <button @click="handleBack" type="button" class="bg-white border-2 border-slate-200 hover:border-slate-400 text-slate-600 font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl flex items-center justify-center space-x-2 transition-all hover:scale-105 active:scale-95 text-sm shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              <span>{{ currentSession === 0 ? 'Batal' : 'Kembali' }}</span>
            </button>
            
            <button @click="handleNext" type="button" class="bg-[#004B87] hover:bg-sky-900 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl flex items-center justify-center space-x-2 transition-all hover:scale-105 active:scale-95 shadow-md text-sm">
              <span>{{ currentSession === 2 ? 'Kirim Kuesioner' : 'Simpan & Lanjutkan' }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>

        </div>
      </main>

      <footer class="bg-white border-t border-slate-100 px-4 sm:px-8 py-4 text-[9px] sm:text-[10px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <p>© 2026 Perum Jasa Tirta I. All rights reserved.</p>
        <div class="flex space-x-4 font-medium text-slate-400">
          <a href="#" class="hover:underline">Privacy Policy</a>
          <a href="#" class="hover:underline">Sustainability Report</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router' 

const router = useRouter()
const supabase = useSupabaseClient()

const currentSession = ref(0)
const saranText = ref('')
const isLoading = ref(true)

const likertOptions = {
  kepuasan: [
    { val: 1, label: 'Tidak Baik', emoji: '😡' },
    { val: 2, label: 'Kurang Baik', emoji: '🙁' },
    { val: 3, label: 'Baik', emoji: '😊' },
    { val: 4, label: 'Sangat Baik', emoji: '🤩' }
  ],
  kepentingan: [
    { val: 1, label: 'Tidak Penting', emoji: '⚪' },
    { val: 2, label: 'Kurang Penting', emoji: '🟡' },
    { val: 3, label: 'Penting', emoji: '🟠' },
    { val: 4, label: 'Sangat Penting', emoji: '🔴' }
  ]
}

// Subtema mapping untuk 12 butir evaluasi berdasarkan Kuesioner.xlsx
const subthemesMap = {
  1: 'Nyata (Tangible)',
  2: 'Nyata (Tangible)',
  3: 'Kemampuan (Reliability)',
  4: 'Kemampuan (Reliability)',
  5: 'Kemampuan (Reliability)',
  6: 'Tanggap (Responsiveness)',
  7: 'Tanggap (Responsiveness)',
  8: 'Kepastian / Jaminan (Assurance)',
  9: 'Kepastian / Jaminan (Assurance)',
  10: 'Perhatian Khusus (Empathy)',
  11: 'Perhatian Khusus (Empathy)',
  12: 'Perhatian Khusus (Empathy)'
}

const evalQuestions = ref([])
const answers = ref({})

// Reset jawaban per-pertanyaan evaluasi
const resetQuestionAnswer = (qId) => {
  delete answers.value[`q${qId}_kepuasan`]
  delete answers.value[`q${qId}_kepentingan`]
}

// Data Opsi Pilihan Tunggal untuk Pengukuran Loyalitas Pelanggan
const loyaltyGroups = ref([
  {
    id: 1,
    title: '1. Kepuasan Pelanggan',
    options: [
      { val: 1, text: 'Saya menyukai layanan jasa air baku dari pihak selain Perum Jasa Tirta I yang lebih menguntungkan usaha saya.' },
      { val: 2, text: 'Saya tidak mengalami ketidakpuasan selama menjadi pelanggan layanan jasa air baku Perum Jasa Tirta I dan saya sudah terbiasa menjadi pelanggan.' },
      { val: 3, text: 'Saya puas dengan layanan jasa air baku Perum Jasa Tirta I, tapi bila ada layanan sejenis dari pihak lain yang lebih murah saya akan beralih.' },
      { val: 4, text: 'Saya menyukai layanan jasa air baku Perum Jasa Tirta I dan akan lebih puas jika menggunakan layanan PJT I dibanding pihak lain.' },
      { val: 5, text: 'Saya sangat puas dengan layanan jasa air baku Perum Jasa Tirta I dan saya akan merekomendasikan layanan tersebut kepada rekan-rekan saya.' }
    ]
  },
  {
    id: 2,
    title: '2. Kepercayaan (Trust)',
    options: [
      { val: 1, text: 'Saya tidak memiliki kepercayaan khusus terhadap Perum Jasa Tirta I, saya lebih mengutamakan prinsip ekonomi dalam bisnis saya.' },
      { val: 2, text: 'Saya biasa mempercayakan pemenuhan kebutuhan air baku saya pada layanan jasa air baku Perum Jasa Tirta I.' },
      { val: 3, text: 'Saya percaya pada layanan Perum Jasa Tirta I, tapi ada kemungkinan saya beralih ke penyedia jasa lain yang lebih terpercaya.' },
      { val: 4, text: 'Saya benar-benar percaya pada kerjasama yang saya jalin dengan Perum Jasa Tirta I.' },
      { val: 5, text: 'Saya bangga mempercayakan pemenuhan air baku saya pada layanan jasa air Perum Jasa Tirta I.' }
    ]
  },
  {
    id: 3,
    title: '3. Keterikatan Pelanggan',
    options: [
      { val: 1, text: 'Saya sering berpindah-pindah penyedia jasa layanan air baku, saya jarang terikat pada satu jenis layanan/perusahaan.' },
      { val: 2, text: 'Sudah menjadi kebiasaan saya meminta Perum Jasa Tirta I untuk memenuhi kebutuhan air baku saya.' },
      { val: 3, text: 'Saya tidak pernah dikecewakan oleh PJT I, tapi saya tidak memiliki komitmen khusus untuk selalu bekerjasama.' },
      { val: 4, text: 'Saya yakin layanan PJT I lebih baik dari pihak lain, mungkin saya akan terus melanjutkan kerjasama.' },
      { val: 5, text: 'Saya yakin layanan PJT I lebih baik dari pihak lain dan saya memiliki komitmen untuk terus bekerjasama.' }
    ]
  },
  {
    id: 4,
    title: '4. Permintaan Ulang',
    options: [
      { val: 1, text: 'Saya jarang / tidak pernah melakukan permintaan ulang terhadap layanan jasa air baku PJT I secara berturut-turut.' },
      { val: 2, text: 'Saya biasa meminta layanan jasa air baku PJT I, tapi jarang melakukan permintaan ulang secara berturut-turut.' },
      { val: 3, text: 'Setidaknya saya pernah melakukan permintaan ulang terhadap layanan jasa air baku PJT I sebanyak tiga kali berturut-turut.' },
      { val: 4, text: 'Saya selalu meminta layanan jasa air baku Perum Jasa Tirta I karena saya menyukai layanan tersebut.' },
      { val: 5, text: 'Saya akan selalu menjadi pelanggan setia PJT I dan selalu meminta layanannya karena bangga menjalin kerjasama.' }
    ]
  },
  {
    id: 5,
    title: '5. Word-of-Mouth Behavior',
    options: [
      { val: 1, text: 'Saya tidak pernah berniat merekomendasikan layanan jasa air baku Perum Jasa Tirta I kepada rekan atau kolega saya.' },
      { val: 2, text: 'Saya biasa menggunakan layanan PJT I dan merekomendasikannya bila ada rekan yang menanyakannya.' },
      { val: 3, text: 'Saya puas menggunakan layanan PJT I, bila ada rekan meminta rekomendasi maka saya merekomendasikannya sebagai alternatif.' },
      { val: 4, text: 'Saya menyukai layanan PJT I dan merekomendasikan layanannya bila ada rekan yang membutuhkan informasi.' },
      { val: 5, text: 'Saya senang dan bangga menjadi pelanggan PJT I, sehingga tanpa diminta saya akan menceritakan pengalaman positif kepada rekan.' }
    ]
  }
])

const fetchQuestionsFromDB = async () => {
  try {
    isLoading.value = true
    const { data, error } = await supabase
      .from('questions')
      .select('id, question_text, dimension')
      .order('id', { ascending: true })

    if (error) throw error

    if (data) {
      evalQuestions.value = data
        .filter(item => item.id <= 12)
        .map(item => ({
          id: item.id,
          text: item.question_text,
          subtheme: subthemesMap[item.id] || 'Umum'
        }))
    }
  } catch (err) {
    console.error('Gagal mengambil data pertanyaan dari Supabase:', err.message)
  } finally {
    isLoading.value = false
  }
}

const currentSessionName = computed(() => {
  if (currentSession.value === 0) return 'Kuesioner Evaluasi Layanan'
  if (currentSession.value === 1) return 'Pengukuran Loyalitas Pelanggan'
  return 'Saran & Catatan'
})

const handleBack = () => {
  if (currentSession.value === 0) {
    router.push('/')
  } else {
    currentSession.value--
  }
}

const handleNext = async () => {
  if (currentSession.value === 0) {
    const unfinishedEval = evalQuestions.value.some(q => 
      !answers.value[`q${q.id}_kepuasan`] || !answers.value[`q${q.id}_kepentingan`]
    )
    if (unfinishedEval) {
      alert('Mohon lengkapi penilaian Kepuasan dan Kepentingan (skala 1-4) untuk seluruh pertanyaan evaluasi.')
      return
    }
    currentSession.value = 1
  } 
  else if (currentSession.value === 1) {
    const unfinishedLoyalty = loyaltyGroups.value.some(g => !answers.value[`loyalitas_${g.id}`])
    if (unfinishedLoyalty) {
      alert('Mohon pilih satu opsi jawaban untuk setiap topik pengukuran loyalitas.')
      return
    }
    currentSession.value = 2
  } 
  else {
    try {
      const respondentId = localStorage.getItem('current_respondent_id')
      if (!respondentId) {
        alert('Sesi pengisian telah berakhir. Silakan isi kembali dari halaman awal.')
        router.push('/')
        return
      }

      const { error } = await supabase
        .from('questionnaire_responses')
        .insert([
          {
            respondent_id: respondentId,
            answers: answers.value,
            feedback: saranText.value.trim() !== '' ? saranText.value.trim() : null
          }
        ])

      if (error) throw error

      localStorage.removeItem('current_respondent_id')
      router.push('/confirmation')
    } catch (err) {
      console.error('Gagal mengirimkan kuesioner:', err.message)
      alert('Terjadi kesalahan saat menyimpan data kuesioner. Silakan periksa koneksi Anda dan coba lagi.')
    }
  }
}

const goToHome = () => {
  router.push('/')
}

onMounted(() => {
  fetchQuestionsFromDB()
})
</script>