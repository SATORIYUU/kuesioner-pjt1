<template>
  <div class="min-h-screen bg-[#F4F7FA] flex flex-col md:flex-row font-sans text-slate-800">
    
    <!-- SIDEBAR NAVIGASI SESI -->
    <aside class="hidden md:flex w-64 bg-white border-r border-slate-200 flex-col justify-between p-6 shadow-sm shrink-0">
      <div class="space-y-8">
        <div @click="goToHome" class="cursor-pointer group flex items-center space-x-3">
          <img src="/logopjt1.png" alt="Logo PJT I" class="h-8 w-auto object-contain" />
          <div>
            <h2 class="text-base font-bold text-[#004B87] group-hover:text-sky-700 transition-colors leading-none mb-1">Perum Jasa Tirta</h2>
            <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Utility Portal 2026</span>
          </div>
        </div>

        <nav class="space-y-1.5">
          <!-- Render Tombol Sesi Dinamis Berdasarkan Dimensi yang Ditemukan di Database -->
          <button 
            v-for="(topic, index) in topics" 
            :key="topic.id"
            @click="currentSession = index"
            class="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm transition-all text-left font-medium"
            :class="currentSession === index 
              ? 'bg-[#E6F0FA] text-[#004B87] font-bold shadow-sm' 
              : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'"
          >
            <span 
              class="w-5 h-5 rounded-full flex items-center justify-center text-xs font-mono transition-all"
              :class="currentSession === index ? 'bg-[#004B87] text-white' : 'border border-slate-300 text-slate-400'"
            >
              {{ index + 1 }}
            </span>
            <span class="truncate">{{ topic.name }}</span>
          </button>
          
          <button 
            @click="currentSession = topics.length"
            class="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm transition-all text-left font-medium"
            :class="currentSession === topics.length 
              ? 'bg-[#E6F0FA] text-[#004B87] font-bold shadow-sm' 
              : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'"
          >
            <span 
              class="w-5 h-5 rounded-full flex items-center justify-center text-xs font-mono"
              :class="currentSession === topics.length ? 'bg-[#004B87] text-white' : 'border border-slate-300 text-slate-400'"
            >
              {{ topics.length + 1 }}
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
          <span class="text-slate-800 font-bold">KUESIONER PENGUKURAN LOYALITAS PELANGGAN</span>
          <span class="text-slate-300 hidden sm:inline">|</span>
          <span class="text-slate-400 font-semibold truncate">Sesi: {{ currentSessionName }}</span>
        </div>
      </header>

      <!-- VIEW KONTEN UTAMA -->
      <main class="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-8 py-6 sm:py-10 space-y-6 overflow-y-auto">
        
        <!-- LOADING STATE SAAT KONEKSI DENGAN SUPABASE -->
        <div v-if="isLoading" class="bg-white border border-slate-200 rounded-xl p-12 shadow-sm text-center flex flex-col items-center justify-center">
          <div class="w-10 h-10 border-4 border-slate-200 border-t-[#004B87] rounded-full animate-spin mb-4"></div>
          <p class="text-sm font-medium text-slate-500">Sinkronisasi butir indikator kuesioner dari server...</p>
        </div>

        <div v-else class="space-y-6">
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-sm space-y-4">
            
            <div v-if="currentSession < topics.length" class="bg-slate-50 border border-slate-200 rounded-xl p-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600">
              <span class="flex items-center gap-1.5"><span class="w-5 h-5 bg-white border border-slate-300 rounded flex items-center justify-center font-bold text-[#004B87]">1</span> Sangat Tidak Setuju</span>
              <span class="flex items-center gap-1.5"><span class="w-5 h-5 bg-white border border-slate-300 rounded flex items-center justify-center font-bold text-slate-500">2</span> Tidak Setuju</span>
              <span class="flex items-center gap-1.5"><span class="w-5 h-5 bg-white border border-slate-300 rounded flex items-center justify-center font-bold text-slate-500">3</span> Netral</span>
              <span class="flex items-center gap-1.5"><span class="w-5 h-5 bg-white border border-slate-300 rounded flex items-center justify-center font-bold text-slate-500">4</span> Setuju</span>
              <span class="flex items-center gap-1.5"><span class="w-5 h-5 bg-white border border-slate-300 rounded flex items-center justify-center font-bold text-[#004B87]">5</span> Sangat Setuju</span>
            </div>

            <div class="flex items-center justify-between gap-2 pt-1">
              <div>
                <h1 class="text-xl sm:text-2xl font-bold text-slate-900">{{ currentSessionName }}</h1>
                <p class="text-slate-400 text-xs sm:text-sm font-medium mt-0.5">
                  {{ currentSession === topics.length ? 'Silakan tuliskan masukan Anda untuk peningkatan layanan kami.' : 'Berikan pilihan penilaian Anda secara objektif berdasarkan indikator skala di atas.' }}
                </p>
              </div>
              <span class="text-xs sm:text-sm font-bold text-[#004B87] shrink-0">Sesi {{ currentSession + 1 }} dari {{ topics.length + 1 }}</span>
            </div>
            
            <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div class="bg-[#004B87] h-full transition-all duration-500" :style="{ width: progressPercentage + '%' }"></div>
            </div>
          </div>

          <!-- RENDER INDIKATOR PERTANYAAN SECARA DINAMIS DARI DATABASE -->
          <div v-if="currentSession < topics.length" class="space-y-4">
            <div 
              v-for="(q, idx) in currentQuestions" 
              :key="q.id" 
              class="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6"
            >
              <div class="flex items-start space-x-2 max-w-xl">
                <!-- Penomoran otomatis dinamis -->
                <span class="text-slate-400 font-bold text-sm sm:text-base">{{ idx + 1 }}.</span>
                <p class="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">{{ q.text }}</p>
              </div>
              
              <div class="flex items-center space-x-2.5 shrink-0 pt-2 lg:pt-0 border-t border-slate-100 lg:border-t-0 justify-between sm:justify-start">
                <div v-for="score in 5" :key="score" class="flex flex-col items-center">
                  <button 
                    @click="answers[q.id] = score"
                    :class="answers[q.id] === score ? 'bg-[#004B87] border-[#004B87] text-white shadow-md scale-105' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'"
                    class="w-10 h-10 rounded-xl border font-bold text-sm transition-all flex items-center justify-center"
                    type="button"
                  >
                    {{ score }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- SESI FEEDBACK / SARAN CRITIC -->
          <div v-else class="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
            <div class="space-y-2">
              <label class="block text-sm font-bold text-slate-900">Saran, Kritik, atau Catatan Tambahan:</label>
              <textarea 
                v-model="saranText"
                rows="6"
                placeholder="Tuliskan saran Anda di sini untuk membantu kemajuan kualitas distribusi air baku Perum Jasa Tirta I..."
                class="w-full p-4 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder-slate-400"
              ></textarea>
            </div>
          </div>

          <!-- BUTTON NAVIGASI BAWAH -->
          <div class="flex items-center justify-between pt-2 sm:pt-4 gap-4">
            <button @click="handleBack" type="button" class="bg-white border-2 border-slate-200 hover:border-slate-400 text-slate-600 font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl flex items-center justify-center space-x-2 transition-all text-sm shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              <span>{{ currentSession === 0 ? 'Batal' : 'Kembali' }}</span>
            </button>
            
            <button @click="handleNext" type="button" class="bg-[#004B87] hover:bg-sky-900 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md text-sm">
              <span>{{ currentSession === topics.length ? 'Kirim Kuesioner' : 'Simpan & Lanjutkan' }}</span>
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
          <a href="#" class="hover:underline">Contact Support</a>
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

// Kategori Topik Sesi Tetap Dinamis Mengikuti Mapping Dimensi Database
const topics = ref([
  { id: 'kepuasan', name: 'Kepuasan Pelanggan' },
  { id: 'kepercayaan', name: 'Kepercayaan (Trust)' },
  { id: 'keterikatan', name: 'Keterikatan Pelanggan' },
  { id: 'permintaan', name: 'Permintaan Ulang' },
  { id: 'wom', name: 'Word of Mouth' }
])

// Menyimpan seluruh butir pertanyaan hasil fetch Supabase
const allQuestions = ref([])

// Menyimpan object status jawaban { "1": null, "2": null, ... }
const answers = ref({})

// FETCH DATA DARI DATABASE SUPABASE
const fetchQuestionsFromDB = async () => {
  try {
    isLoading.value = true
    const { data, error } = await supabase
      .from('questions')
      .select('id, question_text, dimension')
      .order('id', { ascending: true })

    if (error) throw error

    if (data) {
      // Mapping ke format array lokal
      allQuestions.value = data.map(item => ({
        id: item.id,
        topicId: item.dimension ? item.dimension.toLowerCase().trim() : 'kepuasan',
        text: item.question_text
      }))

      // Bangun reactively object answers penampung skala likert berdasarkan ID unik di DB
      const initialAnswers = {}
      allQuestions.value.forEach(q => {
        initialAnswers[q.id] = null
      })
      answers.value = initialAnswers
    }
  } catch (err) {
    console.error('Gagal mengambil konfigurasi soal kuesioner:', err.message)
  } finally {
    isLoading.value = false
  }
}

// Ambil data saat komponen ter-mount
onMounted(() => {
  fetchQuestionsFromDB()
})

const currentQuestions = computed(() => {
  if (currentSession.value >= topics.value.length) return []
  const activeTopicId = topics.value[currentSession.value].id
  return allQuestions.value.filter(q => q.topicId === activeTopicId)
})

const currentSessionName = computed(() => {
  if (currentSession.value === topics.value.length) return 'Saran & Catatan Tambahan'
  return topics.value[currentSession.value].name
})

const progressPercentage = computed(() => {
  return Math.round(((currentSession.value + 1) / (topics.value.length + 1)) * 100)
})

const handleBack = () => {
  if (currentSession.value === 0) {
    router.push('/')
  } else {
    currentSession.value--
  }
}

const handleNext = async () => {
  if (currentSession.value < topics.value.length) {
    // Cari apakah ada soal di sesi aktif yang belum dipilih nilainya
    const unfinished = currentQuestions.value.some(q => answers.value[q.id] === null)
    if (unfinished) {
      alert('Mohon isi seluruh pertanyaan pada sesi ini sebelum melanjutkan.')
      return
    }
    currentSession.value++
  } else {
    try {
      const respondentId = localStorage.getItem('current_respondent_id')
      
      if (!respondentId) {
        alert('Sesi pengisian kadaluarsa. Silakan isi ulang identitas Anda dari halaman awal.')
        router.push('/')
        return
      }

      // Kirim hasil jawaban langsung berupa JSON object dinamis { "1": 5, "2": 4, ... } ke Supabase
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
      console.error('Gagal mengirim kuesioner ke Supabase:', err.message)
      alert('Gagal mengirimkan kuesioner ke server. Silakan periksa koneksi Anda dan coba lagi.')
    }
  }
}

const goToHome = () => {
  router.push('/')
}
</script>