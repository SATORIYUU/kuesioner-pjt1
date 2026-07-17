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

      <NuxtLink 
          to="/admin/respondents" 
          :class="route.path === '/admin/respondents' ? 'bg-blue-50 text-[#004B87] font-bold border-l-4 border-[#004B87]' : 'text-slate-600 hover:bg-slate-50 font-medium'"
          class="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
          <span>Respondent Data</span>
        </NuxtLink>

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
          <h1 class="text-base sm:text-xl font-extrabold text-slate-800 tracking-tight">Data Responden</h1>
        </div>
      </header>

      <main class="p-4 sm:p-8 space-y-6 flex-1 max-w-7xl w-full mx-auto">
        
        <!-- Page Title Description & Export Button -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-1">Data Responden</h2>
            <p class="text-xs sm:text-sm text-slate-400 font-medium">Manage and view detailed infrastructure & service quality assessments.</p>
          </div>
          <button class="bg-[#004B87] text-white px-4 py-2 rounded-lg font-bold text-sm shadow flex items-center gap-2 hover:bg-sky-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
            <span>Export Report</span>
          </button>
        </div>

        <!-- 4 SUMMARY CARDS BOX (Sesuai Layout Gambar Referensi) -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="card in summaryCards" :key="card.name" class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">{{ card.name }}</span>
            <div class="flex items-baseline justify-between mt-2">
              <span class="text-2xl font-extrabold text-slate-800">{{ card.count }}</span>

            </div>
          </div>
        </div>

        <!-- SEARCH AND FILTER INTERFACE -->
        <div class="flex items-center gap-3 w-full">
          <div class="relative flex-1">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" /></svg>
            </span>
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search connections, systems, or logs..." 
              class="w-full bg-white border border-slate-200 rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#004B87]"
            />
          </div>
          <button class="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-bold text-sm shadow-sm flex items-center gap-2 hover:bg-slate-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>
            <span>Filter</span>
          </button>
        </div>

        <!-- RESPONDENT EXPANDABLE TABLE -->
        <div class="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm whitespace-nowrap border-collapse">
              <thead class="bg-[#004B87] text-white text-[11px] font-bold uppercase tracking-wider">
                <tr>
                  <th class="px-6 py-4 w-12 text-center">No.</th>
                  <th class="px-6 py-4 min-w-[200px]">Nama Perusahaan</th>
                  <th class="px-6 py-4">Kategori</th>
                  <th class="px-6 py-4">Sub Kategori</th>
                  <th class="px-6 py-4">Tanggal</th>
                </tr>
              </thead>
              
              <tbody v-if="isLoading" class="divide-y divide-slate-100 font-medium">
                <tr>
                  <td colspan="5" class="px-6 py-12 text-center text-slate-400 animate-pulse font-semibold">
                    Loading data responses and calculating classifications...
                  </td>
                </tr>
              </tbody>

              <tbody v-else-if="filteredRespondents.length === 0" class="divide-y divide-slate-100 font-medium">
                <tr>
                  <td colspan="5" class="px-6 py-12 text-center text-slate-400 font-semibold">
                    No data respondents found.
                  </td>
                </tr>
              </tbody>

              <tbody v-else v-for="(row, index) in filteredRespondents" :key="row.id" class="border-b border-slate-200">
                <!-- ROW DATA UTAMA -->
                <tr 
                  @click="toggleRow(row.id)" 
                  class="hover:bg-slate-50/80 cursor-pointer transition-colors font-semibold"
                  :class="expandedRowId === row.id ? 'bg-slate-50/50' : ''"
                >
                  <td class="px-6 py-5 text-center text-slate-400 font-bold">{{ index + 1 }}</td>
                  <td class="px-6 py-5 text-slate-900 font-bold whitespace-normal">{{ row.company }}</td>
                  <td class="px-6 py-5">
                    <span class="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold border border-emerald-100">
                      {{ row.mainCat }}
                    </span>
                  </td>
                  <td class="px-6 py-5">
                    <span :class="row.subCat !== '-' ? 'bg-cyan-50 text-cyan-700 border border-cyan-100' : 'bg-slate-100 text-slate-400'" class="px-3 py-1 rounded-full text-xs font-bold">
                      {{ row.subCat }}
                    </span>
                  </td>
                  <td class="px-6 py-5 text-slate-500">{{ row.date }}</td>
                </tr>

                <!-- DROPDOWN ACCORDION CONTENT -->
                <tr v-if="expandedRowId === row.id">
                  <td colspan="5" class="bg-white px-8 py-6 border-t border-slate-100 shadow-inner">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full">
                      
                      <!-- Sisi Kiri: Klasifikasi Dimensi -->
                      <div class="lg:col-span-6 space-y-4">
                        <h4 class="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">Klasifikasi</h4>
                        
                        <div v-for="dim in row.dimensions" :key="dim.id" class="border-b border-slate-100 pb-3">
                          <div 
                            @click="toggleDimension(dim.id)" 
                            class="flex items-center justify-between cursor-pointer group"
                          >
                            <div class="flex items-center gap-3">
                              <div :class="dim.color" class="w-4 h-4 rounded shadow-sm shrink-0"></div>
                              <span class="text-sm font-bold text-slate-700 group-hover:text-[#004B87] transition-colors">{{ dim.title }}</span>
                            </div>
                            <div class="flex items-center gap-2">
                              <span class="text-sm font-extrabold text-slate-900">{{ dim.score }}</span>
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="2.5" 
                                stroke="currentColor" 
                                :class="expandedDimId === dim.id ? 'rotate-180 text-[#004B87]' : 'text-slate-400'"
                                class="h-4 w-4 transition-transform duration-200"
                              >
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                              </svg>
                            </div>
                          </div>

                          <div v-if="expandedDimId === dim.id" class="mt-3 bg-slate-50 rounded-xl p-3 space-y-2 border border-slate-100 transition-all">
                            <div v-for="q in dim.questions" :key="q.id" class="flex justify-between items-center text-xs font-medium text-slate-600">
                              <span>Pertanyaan {{ q.id }}</span>
                              <span class="font-bold text-slate-800">Skor: {{ q.value }} / 5</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- PERBAIKAN SISI KANAN: Kotak Saran Terbatas & Bisa di-Scroll -->
                      <div class="lg:col-span-6 flex flex-col h-full w-full">
                        <div>
                          <h4 class="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">Saran</h4>
                          <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 shadow-sm w-full max-h-48 overflow-y-auto custom-scrollbar">
                            <p class="text-sm text-slate-600 font-medium leading-relaxed italic whitespace-normal break-words">
                              <span v-if="row.feedback && row.feedback.trim()">"{{ row.feedback }}"</span>
                              <span v-else class="text-slate-400 font-normal">Tidak ada catatan saran tertulis yang dikirimkan oleh responden ini.</span>
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </td>
                </tr>

                <!-- TOMBOL ACTION PANAH DROPDOWN BAWAH ROW -->
                <tr v-if="expandedRowId !== row.id">
                  <td colspan="5" class="p-0">
                    <div @click="toggleRow(row.id)" class="w-full bg-blue-50/30 hover:bg-blue-50/70 text-slate-400 hover:text-[#004B87] flex items-center justify-center py-1 transition-colors cursor-pointer border-b border-slate-200">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                    </div>
                  </td>
                </tr>
                <tr v-else>
                  <td colspan="5" class="p-0">
                    <div @click="toggleRow(null)" class="w-full bg-sky-100/40 hover:bg-sky-100/70 text-[#004B87] flex items-center justify-center py-1 transition-colors cursor-pointer border-b border-slate-200">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /></svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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

// Layout States
const isSidebarOpen = ref(true)
const isLoading = ref(true)
const searchQuery = ref('')

// Accordion States
const expandedRowId = ref(null)
const expandedDimId = ref(null)

// Raw Database Pool
const respondentsDataList = ref([])
const totalCount = ref(0)
const summaryCounts = ref({ PLTA: 0, PDAM: 0, Industri: 0, PihakBerkepentingan: 0 })

// Computed stat-cards array
const summaryCards = computed(() => [
  { name: 'PDAM', count: summaryCounts.value.PDAM },
  { name: 'PLTA', count: summaryCounts.value.PLTA },
  { name: 'Industri', count: summaryCounts.value.Industri },
  { name: 'Pihak Berkepentingan', count: summaryCounts.value.PihakBerkepentingan }
])

// Filter Search Query Functionality
const filteredRespondents = computed(() => {
  if (!searchQuery.value.trim()) return respondentsDataList.value
  const query = searchQuery.value.toLowerCase().trim()
  return respondentsDataList.value.filter(res => 
    res.company.toLowerCase().includes(query) || 
    res.mainCat.toLowerCase().includes(query) || 
    res.subCat.toLowerCase().includes(query)
  )
})

// Toggle Accordion Functions
const toggleRow = (rowId) => {
  expandedRowId.value = expandedRowId.value === rowId ? null : rowId
  expandedDimId.value = null // reset sub-dropdown
}

const toggleDimension = (dimId) => {
  expandedDimId.value = expandedDimId.value === dimId ? null : dimId
}

const formatDate = (dateString) => {
  if (!dateString) return '-'
  return new Date(dateString).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

// FETCH AND CLIENT-SIDE MAPPING DATA
const fetchRespondentsData = async () => {
  try {
    isLoading.value = true
    
    const { data: responses, error: resError } = await supabase
      .from('questionnaire_responses')
      .select('id, answers, feedback, created_at, respondent_id')
      .order('created_at', { ascending: false })

    if (resError) throw resError

    const { data: respondents, error: respError } = await supabase
      .from('respondents')
      .select('id, company_name, category, sub_category')

    if (respError) throw respError

    if (responses) {
      totalCount.value = responses.length

      const counts = { PLTA: 0, PDAM: 0, Industri: 0, PihakBerkepentingan: 0 }

      const mapping = {
        kepuasan: { title: 'Kepuasan Pelanggan', list: [1, 2, 3, 4, 5], color: 'bg-green-400' },
        kepercayaan: { title: 'Kepercayaan', list: [6, 7, 8, 9, 10], color: 'bg-cyan-400' },
        keterikatan: { title: 'Keterikatan Pelanggan', list: [11, 12, 13, 14, 15], color: 'bg-indigo-400' },
        permintaan: { title: 'Permintaan Ulang', list: [16, 17, 18, 19, 20], color: 'bg-yellow-300' },
        wom: { title: 'Word of Mouth Behavior', list: [21, 22, 23, 24, 25], color: 'bg-magenta-400 bg-fuchsia-400' }
      }

      respondentsDataList.value = responses.map(item => {
        const matchRes = respondents ? respondents.find(r => r.id === item.respondent_id) : null
        const r = matchRes || {}

        let subCatText = r.sub_category ? String(r.sub_category).trim() : '-'
        let mainCatText = r.category ? String(r.category).trim() : 'Pemanfaat'

        // Accumulate Box Counts
        if (subCatText === 'PLTA') counts.PLTA++
        else if (subCatText === 'PDAM') counts.PDAM++
        else if (subCatText === 'Industri' || subCatText === 'Swasta') counts.Industri++
        
        if (mainCatText === 'Pihak yang Berkepentingan' || subCatText === 'Instansi Pemerintah') {
          counts.PihakBerkepentingan++
          mainCatText = 'Pihak yang Berkepentingan'
          subCatText = '-'
        }

        // Calculate dimensions score arrays per single respondent row
        const ans = item.answers || {}
        const computedDimensions = Object.keys(mapping).map(key => {
          const dimInfo = mapping[key]
          let sum = 0
          let count = 0
          const questionsDetail = []

          dimInfo.list.forEach(qId => {
            const val = ans[qId] !== undefined ? ans[qId] : ans[String(qId)]
            if (val !== undefined && val !== null) {
              sum += Number(val)
              count++
              questionsDetail.push({ id: qId, value: val })
            } else {
              questionsDetail.push({ id: qId, value: 0 })
            }
          })

          const average = count > 0 ? (sum / count).toFixed(1) : '0.0'

          return {
            id: key,
            title: dimInfo.title,
            color: dimInfo.color,
            score: average,
            questions: questionsDetail
          }
        })

        return {
          id: item.id,
          company: r.company_name || 'No Name',
          mainCat: mainCatText,
          subCat: subCatText,
          date: formatDate(item.created_at),
          feedback: item.feedback,
          dimensions: computedDimensions
        }
      })

      summaryCounts.value = counts
    }
  } catch (err) {
    console.error('Failed to load respondent list data:', err.message)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchRespondentsData()
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
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f5f9;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
</style>