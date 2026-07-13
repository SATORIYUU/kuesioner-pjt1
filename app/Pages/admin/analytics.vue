<template>
  <div class="min-h-screen w-full bg-[#F4F7FA] flex font-sans text-slate-800 overflow-x-hidden">
    
    <!-- SIDEBAR COMPONENT -->
    <aside 
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:-ml-64'"
      class="fixed lg:relative inset-y-0 left-0 w-64 bg-white border-r border-slate-200 flex flex-col z-30 transition-all duration-300 ease-in-out shrink-0"
    >
      <div class="p-6 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="/logopjt1.png" alt="Logo PJT I" class="h-8 w-auto object-contain" />
          <div>
            <h2 class="text-lg font-extrabold text-[#004B87] tracking-tight leading-tight">PJT I Admin</h2>
            <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Utility Portal</p>
          </div>
        </div>
        <button @click="isSidebarOpen = false" class="lg:hidden text-slate-400 hover:text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Menu Navigasi Sidebar Dinamis -->
      <nav class="flex-1 px-4 space-y-2 mt-4">
        <!-- Overview Menu -->
        <NuxtLink 
          to="/admin/dashboard" 
          :class="route.path === '/admin/dashboard' 
            ? 'bg-blue-50 text-[#004B87] font-bold border-l-4 border-[#004B87]' 
            : 'text-slate-600 hover:bg-slate-50 font-medium'"
          class="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
          <span>Overview</span>
        </NuxtLink>

        <!-- Respondent Data Menu -->
        <NuxtLink 
          to="/admin/respondents" 
          :class="route.path === '/admin/respondents' 
            ? 'bg-blue-50 text-[#004B87] font-bold border-l-4 border-[#004B87]' 
            : 'text-slate-600 hover:bg-slate-50 font-medium'"
          class="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
          <span>Respondent Data</span>
        </NuxtLink>

        <!-- Analytics Menu -->
        <NuxtLink 
          to="/admin/analytics" 
          :class="route.path === '/admin/analytics' 
            ? 'bg-blue-50 text-[#004B87] font-bold border-l-4 border-[#004B87]' 
            : 'text-slate-600 hover:bg-slate-50 font-medium'"
          class="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          <span>Analytics</span>
        </NuxtLink>
      </nav>

      

      <div class="p-4 border-t border-slate-200">
        <button @click="handleLogout" class="flex items-center space-x-3 px-4 py-3 w-full text-slate-600 hover:text-red-600 hover:bg-red-50 font-medium rounded-xl transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 11-6 0v-1m6-10V5a3 3 0 11-6 0v-1" /></svg>
          <span>Logout</span>
        </button>
      </div>
    </aside>

    <!-- MAIN CONTENT AREA -->
    <div class="flex-1 flex flex-col min-w-0 min-h-screen overflow-y-auto">
      <header class="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 sm:px-8 shrink-0 sticky top-0 z-20">
        <div class="flex items-center space-x-4">
          <button @click="isSidebarOpen = !isSidebarOpen" class="text-slate-500 hover:text-[#004B87] transition-colors focus:outline-none bg-white border border-slate-200 hover:bg-slate-50 p-1.5 rounded-lg shadow-sm">
            <svg v-if="isSidebarOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <h1 class="text-base sm:text-xl font-extrabold text-slate-800 tracking-tight">Strategic Analytics & Insights</h1>
        </div>
        <div class="text-xs sm:text-sm font-semibold bg-blue-50 text-[#004B87] px-3 py-1.5 rounded-lg border border-blue-100">
          Real-time Sync Active
        </div>
      </header>

      <main class="p-4 sm:p-8 space-y-6 flex-1 max-w-7xl w-full mx-auto">
        <div v-if="isLoading" class="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div class="w-12 h-12 border-4 border-slate-200 border-t-[#004B87] rounded-full animate-spin mb-4"></div>
          <p class="text-slate-500 font-medium">Mengkalkulasi parameter dan menyusun grafik secara real-time...</p>
        </div>

        <div v-else class="space-y-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 class="text-base font-bold text-slate-800 mb-1">Responden Kategori Breakdown</h3>
                <p class="text-xs text-slate-400 font-medium mb-6">Distribusi profile sub-kategori pengisi kuesioner</p>
              </div>
              
              <div class="space-y-4">
                <div v-for="cat in categoryBreakdown" :key="cat.name" class="space-y-1.5">
                  <div class="flex items-center justify-between text-xs sm:text-sm font-bold">
                    <span class="text-slate-600">{{ cat.name }}</span>
                    <span class="text-[#004B87]">{{ cat.count }} Responden ({{ cat.percentage }}%)</span>
                  </div>
                  <div class="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                    <div :class="cat.color" class="h-full transition-all duration-1000" :style="{ width: cat.percentage + '%' }"></div>
                  </div>
                </div>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400 font-medium text-right">
                Total data masuk: {{ totalResponden }} instansi
              </div>
            </div>

            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 class="text-base font-bold text-slate-800 mb-1">Rataan Skor 5 Dimensi Likert</h3>
              <p class="text-xs text-slate-400 font-medium mb-6">Analisis kekuatan kepuasan berdasarkan topik indikator</p>

              <div class="space-y-4">
                <div v-for="dim in dimensionScores" :key="dim.id" class="flex items-center gap-4">
                  <span class="text-xl sm:text-2xl w-8 shrink-0">{{ dim.icon }}</span>
                  <div class="flex-1 min-w-0">
                    <div class="flex justify-between text-xs sm:text-sm font-bold mb-1">
                      <span class="text-slate-700 truncate mr-2">{{ dim.title }}</span>
                      <span class="text-slate-800 shrink-0">{{ dim.score }} <span class="text-xs text-slate-400 font-normal">/ 5.0</span></span>
                    </div>
                    <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div :class="dim.color" class="h-full transition-all duration-700" :style="{ width: (dim.score / 5) * 100 + '%' }"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div class="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div>
                <h3 class="text-base font-bold text-slate-800 mb-0.5">PJT1 Feedback Stream (Sesi 6)</h3>
                <p class="text-xs text-slate-400 font-medium">Kumpulan aspirasi, saran, dan catatan tertulis langsung dari pelanggan</p>
              </div>
              <span class="bg-amber-50 text-amber-700 text-xs px-2.5 py-1 rounded-md font-bold border border-amber-100">Catatan Asli</span>
            </div>

            <div class="space-y-3 max-h-[400px] overflow-y-auto pr-2">
              <div v-if="feedbackStream.length === 0" class="text-center py-10 text-slate-400 font-medium text-sm">
                Belum ada saran tertulis yang dikirimkan oleh responden.
              </div>
              
              <div v-else v-for="(feed, idx) in feedbackStream" :key="idx" class="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <span class="font-bold text-sm text-[#004B87]">{{ feed.company }}</span>
                  <div class="flex items-center gap-2 text-xs font-semibold text-slate-400">
                    <span class="bg-slate-200 text-slate-600 px-2 py-0.5 rounded text-[10px]">{{ feed.subCat }}</span>
                    <span>•</span>
                    <span>{{ feed.date }}</span>
                  </div>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed italic bg-white p-3 rounded-lg border border-slate-100">
                  "{{ feed.text }}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const supabase = useSupabaseClient()

// State Layout Responsif
const isSidebarOpen = ref(true)
const isLoading = ref(true)

// Raw Data Pool
const rawResponses = ref([])
const totalResponden = ref(0)

// 1. Data Breakdown Sub-Kategori (Dihitung Real-time & Dinamis)
const categoryCounts = ref({ PLTA: 0, PDAM: 0, Industri: 0, 'Instansi Pemerintah': 0 })

const categoryBreakdown = computed(() => {
  const list = [
    { name: 'PLTA', count: categoryCounts.value.PLTA, color: 'bg-blue-500' },
    { name: 'PDAM', count: categoryCounts.value.PDAM, color: 'bg-sky-400' },
    { name: 'Industri / Swasta', count: categoryCounts.value.Industri, color: 'bg-indigo-500' },
    { name: 'Instansi Pemerintah', count: categoryCounts.value['Instansi Pemerintah'], color: 'bg-emerald-500' }
  ]
  return list.map(item => ({
    ...item,
    percentage: totalResponden.value > 0 ? ((item.count / totalResponden.value) * 100).toFixed(1) : '0.0'
  }))
})

// 2. Data Rata-rata 5 Dimensi Likert Topik
const dimensionScores = ref([
  { id: 'kepuasan', title: 'Kepuasan Pelanggan (Q1-Q5)', score: '0.00', icon: '😊', color: 'bg-green-500' },
  { id: 'kepercayaan', title: 'Kepercayaan Publik (Q6-Q10)', score: '0.00', icon: '🛡️', color: 'bg-blue-500' },
  { id: 'keterikatan', title: 'Keterikatan Pelanggan (Q11-Q15)', score: '0.00', icon: '🤝', color: 'bg-sky-500' },
  { id: 'permintaan', title: 'Permintaan Ulang (Q16-Q20)', score: '0.00', icon: '🔁', color: 'bg-emerald-500' },
  { id: 'wom', title: 'Word of Mouth Behavior (Q21-Q25)', score: '0.00', icon: '🗣️', color: 'bg-indigo-500' }
])

// 3. Feedback Stream Filtered Array
const feedbackStream = ref([])

// Helper perubah format tanggal
const formatDate = (dateStr) => {
  if (!dateStr) return '-'
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}

// FUNGSI UTAMA FETCH REAL-TIME DATA & PERHITUNGAN MATEMATIS
const loadAnalyticsData = async () => {
  try {
    isLoading.value = true
    
    const { data, error } = await supabase
      .from('questionnaire_responses')
      .select(`
        id,
        answers,
        notes,
        created_at,
        respondents (
          company_name,
          category,
          sub_category
        )
      `)
      
    if (error) throw error
    
    if (data) {
      rawResponses.value = data
      totalResponden.value = data.length

      const counts = { PLTA: 0, PDAM: 0, Industri: 0, 'Instansi Pemerintah': 0 }
      
      const mapping = {
        kepuasan: [1, 2, 3, 4, 5],
        kepercayaan: [6, 7, 8, 9, 10],
        keterikatan: [11, 12, 13, 14, 15],
        permintaan: [16, 17, 18, 19, 20],
        wom: [21, 22, 23, 24, 25]
      }
      const sums = { kepuasan: 0, kepercayaan: 0, keterikatan: 0, permintaan: 0, wom: 0 }
      const countsDim = { kepuasan: 0, kepercayaan: 0, keterikatan: 0, permintaan: 0, wom: 0 }
      
      const tempFeedbacks = []

      data.forEach(item => {
        const r = item.respondents || {}
        
        if (r.sub_category && counts[r.sub_category] !== undefined) {
          counts[r.sub_category]++
        } else if (r.sub_category === 'Industri') {
          counts.Industri++
        }

        const ans = item.answers || {}
        Object.keys(mapping).forEach(catId => {
          mapping[catId].forEach(qId => {
            const val = ans[qId]
            if (val !== undefined && val !== null) {
              sums[catId] += Number(val)
              countsDim[catId]++
            }
          })
        })

        if (item.notes && item.notes.trim() !== '') {
          tempFeedbacks.push({
            company: r.company_name || 'Instansi Tanpa Nama',
            subCat: r.sub_category || 'Pemanfaat',
            date: formatDate(item.created_at),
            text: item.notes
          })
        }
      })

      categoryCounts.value = counts
      feedbackStream.value = tempFeedbacks

      dimensionScores.value = dimensionScores.value.map(dim => {
        const sum = sums[dim.id]
        const cnt = countsDim[dim.id]
        return {
          ...dim,
          score: cnt > 0 ? (sum / cnt).toFixed(2) : '0.00'
        }
      })
    }
  } catch (err) {
    console.error('Gagal mengambil data analitik:', err.message)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  loadAnalyticsData()
  
  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false
  }
})

const handleLogout = () => {
  if (confirm('Apakah Anda yakin ingin keluar?')) {
    localStorage.removeItem('is_admin_logged_in')
    router.push('/')
  }
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 8px;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 8px;
}
::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>