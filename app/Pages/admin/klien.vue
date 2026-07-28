<template>
  <div class="h-screen w-full bg-[#F4F7FA] flex overflow-hidden font-sans text-slate-800">
    
    <!-- Latar Belakang Overlay untuk Mobile (Sidebar) -->
    <div 
      v-if="isSidebarOpen" 
      @click="isSidebarOpen = false"
      class="fixed inset-0 bg-slate-900/50 z-20 lg:hidden transition-opacity"
    ></div>

    <!-- SIDEBAR COMPONENT (IDENTIK 100% DENGAN OVERVIEW) -->
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
          to="/admin/klien" 
          :class="route.path === '/admin/klien' ? 'bg-blue-50 text-[#004B87] font-bold border-l-4 border-[#004B87]' : 'text-slate-600 hover:bg-slate-50 font-medium'"
          class="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>Data Klien</span>
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
          to="/admin/questions" 
          :class="route.path === '/admin/questions' ? 'bg-blue-50 text-[#004B87] font-bold border-l-4 border-[#004B87]' : 'text-slate-600 hover:bg-slate-50 font-medium'"
          class="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
          </svg>
          <span>Manage Questions</span>
        </NuxtLink>
      </nav>

      <div class="p-4 border-t border-slate-200">
        <button @click="handleLogout" class="flex items-center space-x-3 px-4 py-3 w-full text-slate-600 hover:text-red-600 hover:bg-red-50 font-medium rounded-xl transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </aside>

    <!-- CONTENT AREA -->
    <div class="flex-1 flex flex-col min-w-0 bg-[#F8FAFC] overflow-hidden">
      
      <!-- NAVBAR HEADER (IDENTIK 100% DENGAN OVERVIEW) -->
      <header class="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 sm:px-8 shrink-0 sticky top-0 z-20">
        <div class="flex items-center space-x-4">
          <!-- Button Toggle Hide / Unhide Sidebar << -->
          <button @click="isSidebarOpen = !isSidebarOpen" class="text-slate-500 hover:text-[#004B87] transition-colors focus:outline-none bg-white border border-slate-200 hover:bg-slate-50 p-1.5 rounded-lg shadow-sm">
            <svg v-if="isSidebarOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <h1 class="text-base sm:text-xl font-extrabold text-slate-800 tracking-tight">Perum Jasa Tirta 1</h1>
        </div>

        <div class="flex items-center space-x-6 sm:space-x-8">
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

      <!-- MAIN SCROLLABLE CONTENT BODY (KLIEN) -->
      <div class="flex-1 overflow-auto p-4 sm:p-8 custom-scrollbar">
        <div class="max-w-7xl mx-auto space-y-6">
          
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Daftar Hak Akses Klien</h2>
              <p class="text-xs text-slate-500 mt-0.5">Kelola status dan otorisasi responden terdaftar untuk kuesioner.</p>
            </div>
            <div class="text-xs text-slate-500 font-medium bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
              Total Klien: <span class="font-bold text-[#004B87]">{{ filteredClientList.length }}</span> / {{ clientList.length }}
            </div>
          </div>

          <!-- SEARCHBAR & FILTER TOOLBAR -->
          <div class="bg-white p-4 border border-slate-200 rounded-xl shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
            
            <!-- Search Input -->
            <div class="relative w-full md:w-80">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input 
                v-model="searchQuery" 
                type="text" 
                placeholder="Cari nama perusahaan..." 
                class="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-[#004B87] focus:outline-none"
              />
            </div>

            <!-- Dropdown Filters -->
            <div class="flex flex-wrap items-center gap-2 w-full md:w-auto">
              
              <!-- Filter Kategori -->
              <select v-model="selectedCategory" class="border border-slate-200 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#004B87] bg-white">
                <option value="">Semua Kategori</option>
                <option value="Pemanfaat">Pemanfaat</option>
                <option value="Pihak Yang Berkepentingan (PYB)">Pihak Yang Berkepentingan (PYB)</option>
              </select>

              <!-- Filter Sub Kategori (PLTA, PDAM, Industri) -->
              <select v-model="selectedSubCategory" class="border border-slate-200 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#004B87] bg-white">
                <option value="">Semua Sub Kategori</option>
                <option value="PLTA">PLTA</option>
                <option value="PDAM">PDAM</option>
                <option value="Industri">Industri</option>
              </select>

              <!-- Filter Status -->
              <select v-model="selectedStatus" class="border border-slate-200 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#004B87] bg-white">
                <option value="">Semua Status</option>
                <option value="aktif">Aktif</option>
                <option value="tidak aktif">Tidak Aktif</option>
              </select>

              <!-- Reset Filter Button -->
              <button 
                v-if="searchQuery || selectedCategory || selectedSubCategory || selectedStatus" 
                @click="resetFilters" 
                class="text-xs text-rose-600 hover:text-rose-800 font-bold px-2 py-1"
              >
                Reset
              </button>

            </div>
          </div>

          <!-- TABEL DATA KLIEN -->
          <div class="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <table class="w-full text-left text-xs">
              <thead class="bg-[#004B87] text-white font-bold uppercase">
                <tr>
                  <th class="px-6 py-3.5">Klien / Perusahaan</th>
                  <th class="px-6 py-3.5">Kategori</th>
                  <th class="px-6 py-3.5">Sub Kategori</th>
                  <th class="px-6 py-3.5">Status Akses</th>
                  <th class="px-6 py-3.5">Keterangan</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 font-medium text-slate-700">
                <tr v-if="isLoading">
                  <td colspan="5" class="px-6 py-8 text-center text-slate-400 font-semibold animate-pulse">Memuat data klien...</td>
                </tr>
                <tr v-else-if="filteredClientList.length === 0">
                  <td colspan="5" class="px-6 py-8 text-center text-slate-400 font-semibold">Tidak ada data klien yang sesuai dengan filter/pencarian.</td>
                </tr>
                <tr v-else v-for="item in filteredClientList" :key="item.id" class="hover:bg-slate-50 transition-colors">
                  <td class="px-6 py-4 font-bold text-[#004B87]">{{ item.company_name }}</td>
                  <td class="px-6 py-4">{{ item.category || '-' }}</td>
                  <td class="px-6 py-4">{{ item.sub_category || '-' }}</td>
                  <td class="px-6 py-4">
                    <span 
                      :class="item.status === 'aktif' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : 'bg-rose-100 text-rose-700 border-rose-200'"
                      class="px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase"
                    >
                      {{ item.status || 'tidak aktif' }}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-slate-500">{{ item.keterangan || '-' }}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const supabase = useSupabaseClient()

// State Sidebar Toggle (Menggunakan boolean tunggal isSidebarOpen persis seperti Overview)
const isSidebarOpen = ref(true)

const isLoading = ref(true)
const clientList = ref([])

// State Filter & Search
const searchQuery = ref('')
const selectedCategory = ref('')
const selectedSubCategory = ref('')
const selectedStatus = ref('')

const fetchClients = async () => {
  try {
    isLoading.value = true
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .order('id', { ascending: true })

    if (error) throw error
    clientList.value = data || []
  } catch (err) {
    console.error('Gagal mengambil data klien:', err.message)
  } finally {
    isLoading.value = false
  }
}

// Filter Computations
const filteredClientList = computed(() => {
  return clientList.value.filter(item => {
    // 1. Search
    const matchesSearch = !searchQuery.value || 
      item.company_name?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.keterangan?.toLowerCase().includes(searchQuery.value.toLowerCase())

    // 2. Category
    const matchesCategory = !selectedCategory.value || item.category === selectedCategory.value

    // 3. Sub Category (PLTA, PDAM, Industri)
    let matchesSubCategory = true
    if (selectedSubCategory.value) {
      const sub = (item.sub_category || '').toLowerCase()
      const name = (item.company_name || '').toLowerCase()
      const filter = selectedSubCategory.value.toLowerCase()

      if (filter === 'plta') {
        matchesSubCategory = sub.includes('plta') || name.includes('plta')
      } else if (filter === 'pdam') {
        matchesSubCategory = sub.includes('pdam') || name.includes('pdam') || name.includes('perumda') || name.includes('perumdam')
      } else if (filter === 'industri') {
        matchesSubCategory = sub.includes('industri') || (!sub.includes('plta') && !name.includes('plta') && !name.includes('pdam') && !name.includes('perumda') && !name.includes('perumdam'))
      }
    }

    // 4. Status
    const matchesStatus = !selectedStatus.value || item.status === selectedStatus.value

    return matchesSearch && matchesCategory && matchesSubCategory && matchesStatus
  })
})

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ''
  selectedSubCategory.value = ''
  selectedStatus.value = ''
}

const handleLogout = () => {
  if (confirm('Apakah Anda yakin ingin keluar?')) {
    localStorage.removeItem('is_admin_logged_in')
    router.push('/')
  }
}

onMounted(() => {
  fetchClients()
  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false
  }
})
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