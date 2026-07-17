<template>
  <div class="h-screen w-full bg-[#F4F7FA] flex overflow-hidden font-sans text-slate-800">
    
    <!-- Latar Belakang Overlay untuk Mobile (Sidebar) -->
    <div 
      v-if="isSidebarOpen" 
      @click="isSidebarOpen = false"
      class="fixed inset-0 bg-slate-900/50 z-20 lg:hidden transition-opacity"
    ></div>

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

      <nav class="flex-1 px-4 space-y-2 mt-4">
        <NuxtLink 
          to="/admin/dashboard" 
          :class="route.path === '/admin/dashboard' ? 'bg-blue-50 text-[#004B87] font-bold border-l-4 border-[#004B87]' : 'text-slate-600 hover:bg-slate-50 font-medium'"
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
          :class="route.path === '/admin/analytics' ? 'bg-blue-50 text-[#004B87] font-bold border-l-4 border-[#004B87]' : 'text-slate-600 hover:bg-slate-50 font-medium'"
          class="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012-2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
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

    <!-- CONTENT AREA -->
    <div class="flex-1 flex flex-col min-w-0 bg-[#F8FAFC] overflow-hidden">
      
      <!-- NAVBAR HEADER -->
      <header class="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 sm:px-8 shrink-0 w-full relative z-10">
        <div class="flex items-center space-x-4">
          <button @click="isSidebarOpen = !isSidebarOpen" class="text-slate-500 hover:text-[#004B87] transition-colors focus:outline-none bg-white border border-slate-200 hover:bg-slate-50 p-1.5 rounded-lg shadow-sm">
            <svg v-if="isSidebarOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <h1 class="hidden sm:block text-lg font-bold text-[#004B87]">Perum Jasa Tirta I</h1>
        </div>

        <div class="flex items-center space-x-6 sm:space-x-8">
          <nav class="hidden md:flex items-center space-x-6 text-sm font-semibold h-16">
            <NuxtLink to="/admin/dashboard" class="text-[#004B87] border-b-2 border-[#004B87] h-full flex items-center px-1">Dashboard</NuxtLink>
          </nav>
          
          <div class="flex items-center space-x-3 border-l border-slate-200 pl-6 h-9">
            <div class="hidden sm:block text-right">
              <p class="text-sm font-bold text-slate-900 leading-none">Admin User Profile</p>
              <p class="text-[10px] text-slate-500 font-medium mt-1">Operations Manager</p>
            </div>
            <div class="h-9 w-9 rounded-full bg-[#004B87] text-white flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
              AD
            </div>
          </div>
        </div>
      </header>

      <!-- MAIN SCROLLABLE CONTENT BODY -->
      <div class="flex-1 overflow-auto p-4 sm:p-8 custom-scrollbar">
        <div class="max-w-7xl mx-auto space-y-6">
          
          <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Data Responden</h2>

          <!-- AREA DIAGRAM BATANG ATAS -->
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm max-w-xl">
            <div class="flex items-end justify-around h-48 pt-6 px-2 w-full border-b border-slate-100 pb-0">
              <div v-for="cat in categoryBreakdown" :key="cat.name" class="flex flex-col items-center flex-1 mx-1 h-full justify-end relative">
                
                <span class="text-xs font-bold text-slate-700 mb-2">{{ cat.count }}</span>
                
                <div 
                  class="w-10 rounded-t-sm shadow-sm transition-all duration-700 min-h-[4px]"
                  :style="{ 
                    height: (totalResponden > 0 ? (cat.count / totalResponden) * 120 : 0) + 'px',
                    backgroundColor: cat.colorHex 
                  }"
                ></div>
                
                <span class="text-[10px] sm:text-xs font-bold text-slate-500 text-center mt-3 truncate w-16" :title="cat.name">
                  {{ cat.name }}
                </span>
              </div>
            </div>
          </div>

          <!-- 5 KARTU METRIK DIMENSI -->
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
            <div v-for="card in categoryCards" :key="card.id" class="bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col justify-between overflow-hidden hover:shadow-md transition-shadow">
              
              <div class="p-4">
                <div class="flex items-center justify-between mb-3">
                  <div :class="card.textColor" class="text-lg bg-slate-50 p-1.5 rounded-lg shrink-0">
                    {{ card.icon }}
                  </div>
                  <span class="text-[9px] font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded tracking-wide uppercase">Scale 5</span>
                </div>
                <h3 class="text-xs font-bold text-slate-500 truncate mb-1" :title="card.title">{{ card.title }}</h3>
                <div class="flex items-baseline space-x-0.5">
                  <span class="text-xl font-extrabold text-slate-900">{{ card.score }}</span>
                  <span class="text-[10px] font-medium text-slate-400">/ 5.00</span>
                </div>
              </div>
              
              <div class="w-full bg-slate-100 h-1.5 mt-auto">
                <div 
                  :class="card.barColor" 
                  class="h-full transition-all duration-500" 
                  :style="{ width: ((Number(card.score) / 5) * 100) + '%' }"
                ></div>
              </div>
              
            </div>
          </div>

          <!-- TABLE RECENT SUBMISSIONS -->
          <div class="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden mt-6">
            <div class="p-5 border-b border-slate-100 flex items-center justify-between">
              <h3 class="text-sm font-bold text-slate-800 uppercase tracking-wider">Recent Submissions</h3>
              
              <div class="flex items-center space-x-2">
                <!-- PERBAIKAN SEARCH BAR: Pointer-events-none pada ikon dan padding lebih lebar -->
                <div class="relative w-44 sm:w-56">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 text-slate-400">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
                    </svg>
                  </div>
                  <input v-model="searchFilter" type="text" placeholder="Search respondent..." class="block w-full pl-9 pr-3 py-1.5 border border-slate-200 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-[#004B87]" />
                </div>
                <button class="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 font-bold py-1.5 px-3 rounded-md flex items-center space-x-1 text-xs transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-3.5 w-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" /></svg>
                  <span>Filters</span>
                </button>
              </div>
            </div>

            <!-- PERBAIKAN TABEL: Kolom Action Dihapus Sepenuhnya -->
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs whitespace-nowrap">
                <thead class="bg-slate-50 text-slate-400 font-bold uppercase border-b border-slate-100">
                  <tr>
                    <th class="px-6 py-3">Company Name</th>
                    <th class="px-6 py-3">Main Category</th>
                    <th class="px-6 py-3">Sub-Category</th>
                    <th class="px-6 py-3">Submission Date</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 font-semibold text-slate-700">
                  <tr v-if="isLoading">
                    <td colspan="4" class="px-6 py-8 text-center text-slate-400 animate-pulse">
                      Synchronizing with data metrics pool...
                    </td>
                  </tr>
                  <tr v-else-if="filteredTableData.length === 0">
                    <td colspan="4" class="px-6 py-8 text-center text-slate-400">
                      No matching survey responses found.
                    </td>
                  </tr>
                  <tr v-else v-for="(row, index) in filteredTableData" :key="index" class="hover:bg-slate-50 transition-colors">
                    <td class="px-6 py-4 text-[#004B87] font-bold">{{ row.company }}</td>
                    <td class="px-6 py-4">
                      <span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] font-bold border border-slate-200/60">{{ row.mainCat }}</span>
                    </td>
                    <td class="px-6 py-4">
                      <span :class="row.subColor" class="px-2 py-0.5 rounded text-[10px] font-bold">{{ row.subCat }}</span>
                    </td>
                    <td class="px-6 py-4 text-slate-500 font-medium">{{ row.date }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="px-6 py-3 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
              <span class="text-[11px] text-slate-400 font-medium">
                Showing {{ filteredTableData.length }} of {{ totalResponden }} respondents
              </span>
              <div class="flex items-center space-x-1">
                <button class="px-2.5 py-0.5 border border-slate-200 rounded text-[10px] bg-white text-slate-400" disabled>‹</button>
                <button class="px-2.5 py-0.5 border border-slate-200 rounded text-[10px] bg-[#004B87] text-white font-bold">1</button>
                <button class="px-2.5 py-0.5 border border-slate-200 rounded text-[10px] bg-white text-slate-400" disabled>›</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const supabase = useSupabaseClient()

const isSidebarOpen = ref(true)
const isLoading = ref(true)
const searchFilter = ref('')

const tableData = ref([])
const totalResponden = ref(0)
const subCategoryCounts = ref({ PLTA: 0, PDAM: 0, Industri: 0, PihakBerkepentingan: 0 })

const categoryCards = ref([
  { id: 'kepuasan', title: 'Kepuasan Pelanggan', score: '0.00', icon: '😊', textColor: 'text-green-500', barColor: 'bg-green-500' },
  { id: 'kepercayaan', title: 'Kepercayaan', score: '0.00', icon: '🛡️', textColor: 'text-blue-500', barColor: 'bg-blue-500' },
  { id: 'keterikatan', title: 'Keterikatan Pelanggan', score: '0.00', icon: '🤝', textColor: 'text-sky-500', barColor: 'bg-sky-500' },
  { id: 'permintaan', title: 'Permintaan Ulang', score: '0.00', icon: '🔁', textColor: 'text-emerald-500', barColor: 'bg-emerald-500' },
  { id: 'wom', title: 'Word of Mouth Behavior', score: '0.00', icon: '🗣️', textColor: 'text-indigo-500', barColor: 'bg-indigo-500' }
])

const categoryBreakdown = computed(() => [
  { name: 'PLTA', count: subCategoryCounts.value.PLTA, colorHex: '#B4F8C8' },
  { name: 'PDAM', count: subCategoryCounts.value.PDAM, colorHex: '#75E6DA' },
  { name: 'Industri', count: subCategoryCounts.value.Industri, colorHex: '#FFEBA1' },
  { name: 'Pihak Berkepentingan', count: subCategoryCounts.value.PihakBerkepentingan, colorHex: '#DC80F7' }
])

const filteredTableData = computed(() => {
  if (!searchFilter.value.trim()) return tableData.value
  const query = searchFilter.value.toLowerCase().trim()
  return tableData.value.filter(item => 
    item.company.toLowerCase().includes(query) || 
    item.mainCat.toLowerCase().includes(query) || 
    item.subCat.toLowerCase().includes(query)
  )
})

const formatDate = (dateString) => {
  if (!dateString) return '-'
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

const calculateDashboardMetrics = (responses, respondentsList) => {
  if (!responses || responses.length === 0) return

  const mapping = {
    kepuasan: [1, 2, 3, 4, 5],
    kepercayaan: [6, 7, 8, 9, 10],
    keterikatan: [11, 12, 13, 14, 15],
    permintaan: [16, 17, 18, 19, 20],
    wom: [21, 22, 23, 24, 25]
  }

  const totals = {
    kepuasan: { sum: 0, count: 0 },
    kepercayaan: { sum: 0, count: 0 },
    keterikatan: { sum: 0, count: 0 },
    permintaan: { sum: 0, count: 0 },
    wom: { sum: 0, count: 0 }
  }

  const counts = { PLTA: 0, PDAM: 0, Industri: 0, PihakBerkepentingan: 0 }

  responses.forEach(res => {
    const matchRes = respondentsList ? respondentsList.find(r => r.id === res.respondent_id) : null
    const r = matchRes || {}
    
    let mainCat = r.category ? String(r.category).trim() : ''
    let subCat = r.sub_category ? String(r.sub_category).trim() : ''

    if (subCat === 'PLTA') counts.PLTA++
    else if (subCat === 'PDAM') counts.PDAM++
    else if (subCat === 'Industri' || subCat === 'Swasta') counts.Industri++
    else if (subCat === 'Instansi Pemerintah' || mainCat === 'Pihak yang Berkepentingan') counts.PihakBerkepentingan++

    const ans = res.answers || {}
    Object.keys(mapping).forEach(catId => {
      mapping[catId].forEach(qId => {
        const score = ans[qId] !== undefined ? ans[qId] : ans[String(qId)]
        if (score !== undefined && score !== null) {
          totals[catId].sum += Number(score)
          totals[catId].count++
        }
      })
    })
  })

  subCategoryCounts.value = counts

  categoryCards.value = categoryCards.value.map(card => {
    const catData = totals[card.id]
    const average = catData.count > 0 ? (catData.sum / catData.count).toFixed(2) : '0.00'
    return { ...card, score: average }
  })
}

const fetchDashboardData = async () => {
  try {
    isLoading.value = true
    
    const { data: responses, error: resError } = await supabase
      .from('questionnaire_responses')
      .select('id, answers, created_at, respondent_id')
      .order('created_at', { ascending: false })

    if (resError) throw resError

    const { data: respondentsList, error: respError } = await supabase
      .from('respondents')
      .select('id, company_name, category, sub_category')

    if (respError) throw respError

    if (responses) {
      totalResponden.value = responses.length

      tableData.value = responses.map(item => {
        const r = respondentsList ? respondentsList.find(res => res.id === item.respondent_id) : null
        const resObj = r || {}
        
        let subColorBadge = 'bg-purple-50 text-purple-700 border border-purple-100'
        let subCatText = resObj.sub_category ? String(resObj.sub_category).trim() : 'None'
        let mainCatText = resObj.category ? String(resObj.category).trim() : 'Pemanfaat'

        if (subCatText === 'PLTA') subColorBadge = 'bg-blue-50 text-blue-700 border border-blue-100'
        if (subCatText === 'PDAM') subColorBadge = 'bg-cyan-50 text-cyan-700 border border-cyan-100'
        if (subCatText === 'Industri' || subCatText === 'Swasta') subColorBadge = 'bg-indigo-50 text-indigo-700 border border-indigo-100'
        
        if (mainCatText === 'Pihak yang Berkepentingan' || subCatText === 'Instansi Pemerintah') {
          mainCatText = 'Pihak yang Berkepentingan'
          subCatText = 'None'
          subColorBadge = 'bg-slate-100 text-slate-500'
        }

        return {
          id: item.id,
          company: resObj.company_name || 'No Name',
          mainCat: mainCatText,
          subCat: subCatText,
          date: formatDate(item.created_at),
          subColor: subColorBadge
        }
      })

      calculateDashboardMetrics(responses, respondentsList)
    }
  } catch (err) {
    console.error('Gagal memuat data dashboard:', err.message)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchDashboardData()
  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false
  }
})

const handleLogout = () => {
  if (confirm('Apakah Anda yakin ingin keluar dari Portal Admin?')) {
    localStorage.removeItem('is_admin_logged_in')
    router.push('/')
  }
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #f8fafc;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
</style>