<template>
  <div class="h-screen w-full bg-[#F4F7FA] flex overflow-hidden font-sans text-slate-800">
    
    <!-- MOBILE OVERLAY (Meredupkan latar belakang saat sidebar terbuka di HP) -->
    <div 
      v-if="isSidebarOpen" 
      @click="isSidebarOpen = false"
      class="fixed inset-0 bg-slate-900/50 z-20 lg:hidden transition-opacity"
    ></div>

   <!-- SIDEBAR -->
    <aside 
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:-ml-64'"
      class="fixed lg:relative inset-y-0 left-0 w-64 bg-white border-r border-slate-200 flex flex-col z-30 transition-all duration-300 ease-in-out shrink-0"
    >
      <!-- Sidebar Header -->
      <div class="p-6 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <!-- Logo PJT1 ditambahkan di sini -->
          <img src="/logopjt1.png" alt="Logo PJT I" class="h-8 w-auto object-contain" />
          <div>
            <h2 class="text-lg font-extrabold text-[#004B87] tracking-tight leading-tight">PJT I Admin</h2>
            <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Utility Portal</p>
          </div>
        </div>
        <!-- Tombol Tutup Sidebar (Hanya terlihat di Mobile) -->
        <button @click="isSidebarOpen = false" class="lg:hidden text-slate-400 hover:text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Menu Navigasi Sidebar -->
      <nav class="flex-1 px-4 space-y-2 mt-4">
        <a href="#" class="flex items-center space-x-3 px-4 py-3 bg-blue-50 text-[#004B87] font-bold rounded-xl border-l-4 border-[#004B87]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
          <span>Overview</span>
        </a>
        <a href="#" class="flex items-center space-x-3 px-4 py-3 text-slate-600 hover:bg-slate-50 font-medium rounded-xl transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
          <span>Respondent Data</span>
        </a>
        <a href="#" class="flex items-center space-x-3 px-4 py-3 text-slate-600 hover:bg-slate-50 font-medium rounded-xl transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          <span>Analytics</span>
        </a>
      </nav>

      <!-- Sidebar Footer (Logout) -->
      <div class="p-4 border-t border-slate-200">
        <button @click="handleLogout" class="flex items-center space-x-3 px-4 py-3 w-full text-slate-600 hover:text-red-600 hover:bg-red-50 font-medium rounded-xl transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 11-6 0v-1m6-10V5a3 3 0 11-6 0v-1" /></svg>
          <span>Logout</span>
        </button>
      </div>
    </aside>

    <!-- MAIN CONTENT AREA -->
    <main class="flex-1 flex flex-col min-w-0 bg-[#F8FAFC] overflow-hidden">
      
      <!-- TOP NAVBAR -->
      <header class="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 sm:px-8 shrink-0">
        <div class="flex items-center space-x-4">
          <!-- Tombol Hide/Unhide Sidebar -->
          <!-- Tombol Hide/Unhide Sidebar -->
          <button @click="isSidebarOpen = !isSidebarOpen" class="text-slate-500 hover:text-[#004B87] transition-colors focus:outline-none bg-white border border-slate-200 hover:bg-slate-50 p-1.5 rounded-lg shadow-sm">
            
            <!-- Ikon saat Sidebar TERBUKA (Tanda Panah Ganda Kiri / Tutup) -->
            <svg v-if="isSidebarOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>

            <!-- Ikon saat Sidebar TERTUTUP (Tanda Hamburger Menu Biasa) -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            
          </button>
          <h1 class="hidden sm:block text-lg font-bold text-[#004B87]"></h1>
        </div>

        <div class="flex items-center space-x-6 sm:space-x-8">
          <nav class="hidden md:flex items-center space-x-6 text-sm font-semibold">
            <a href="#" class="text-[#004B87] border-b-2 border-[#004B87] py-5">Dashboard</a>
            <a href="#" class="text-slate-500 hover:text-slate-800 transition-colors">Settings</a>
            <a href="#" class="text-slate-500 hover:text-slate-800 transition-colors">Support</a>
          </nav>
          
          <div class="flex items-center space-x-3 border-l border-slate-200 pl-6">
            <div class="hidden sm:block text-right">
              <p class="text-sm font-bold text-slate-900 leading-none">Admin User Profile</p>
              <p class="text-[10px] text-slate-500 font-medium mt-1">Operations Manager</p>
            </div>
            <div class="h-9 w-9 rounded-full bg-[#004B87] text-white flex items-center justify-center font-bold text-sm shadow-sm">
              AD
            </div>
          </div>
        </div>
      </header>

      <!-- SCROLLABLE CONTENT -->
      <div class="flex-1 overflow-auto p-4 sm:p-8">
        <div class="max-w-7xl mx-auto space-y-8">
          
          <!-- Page Header & Export -->
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-[#004B87] mb-1">Survey Overview</h2>
              <p class="text-sm text-slate-500 font-medium">Annual Infrastructure & Service Quality Assessment Dashboard</p>
            </div>
            <button class="bg-[#004B87] hover:bg-sky-900 text-white font-semibold py-2 px-5 rounded-lg flex items-center space-x-2 text-sm transition-all shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              <span>Export PDF</span>
            </button>
          </div>

          <!-- 5 CATEGORY CARDS GRID -->
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div v-for="(card, index) in categoryCards" :key="index" class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-start justify-between mb-4">
                <div :class="`w-10 h-10 rounded-xl flex items-center justify-center ${card.bgColor} ${card.textColor}`">
                  <span class="font-bold text-xl">{{ card.icon }}</span>
                </div>
                <span class="text-[10px] font-bold bg-slate-100 text-[#004B87] px-2 py-1 rounded-md">SCALE 5</span>
              </div>
              <h3 class="text-sm font-medium text-slate-600 mb-2 h-10">{{ card.title }}</h3>
              <div class="flex items-baseline space-x-1 mb-3">
                <span class="text-2xl font-extrabold text-[#004B87]">{{ card.score }}</span>
                <span class="text-sm font-medium text-slate-400">/ 5.00</span>
              </div>
              <div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div :class="`h-full ${card.barColor}`" :style="`width: ${(card.score / 5) * 100}%`"></div>
              </div>
            </div>
          </div>

          <!-- DATA TABLE SECTION -->
          <div class="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <!-- Table Header (Title, Search, & Filter Digabung di sini) -->
            <div class="p-5 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 class="text-lg font-bold text-[#004B87]">Recent Submissions</h3>
              
              <div class="flex items-center space-x-3 w-full md:w-auto">
                <!-- Search Bar -->
                <div class="relative flex-1 md:w-64">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </span>
                  <input type="text" placeholder="Search respondent..." class="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#004B87]" />
                </div>
                <!-- Tombol Filter Dipindah Ke Sini -->
                <button class="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-semibold py-2 px-4 rounded-lg flex items-center space-x-2 text-sm transition-colors shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                  <span>Filters</span>
                </button>
              </div>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
              <table class="w-full text-left text-sm whitespace-nowrap">
                <thead class="bg-slate-50 text-slate-500 font-bold uppercase text-[11px] tracking-wider">
                  <tr>
                    <th class="px-6 py-4">Company Name</th>
                    <th class="px-6 py-4">Main Category</th>
                    <th class="px-6 py-4">Sub-Category</th>
                    <th class="px-6 py-4">Submission Date</th>
                    <th class="px-6 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 font-medium">
  <!-- Status Loading -->
  <tr v-if="isLoading">
    <td colspan="5" class="px-6 py-10 text-center text-slate-400 font-semibold animate-pulse">
      Memuat data korespondensi dari Supabase...
    </td>
  </tr>
  
  <!-- Jika Data Kosong -->
  <tr v-else-if="tableData.length === 0">
    <td colspan="5" class="px-6 py-10 text-center text-slate-400 font-semibold">
      Belum ada responden yang mengisi kuesioner.
    </td>
  </tr>

  <!-- Tampilan Baris Data Asli -->
  <tr v-else v-for="(row, index) in tableData" :key="index" class="hover:bg-slate-50 transition-colors">
    <td class="px-6 py-4 text-[#004B87] font-bold">{{ row.company }}</td>
    <td class="px-6 py-4">
      <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-xs">{{ row.mainCat }}</span>
    </td>
    <td class="px-6 py-4">
      <span :class="`px-3 py-1 rounded-md text-xs font-bold ${row.subColor}`">{{ row.subCat }}</span>
    </td>
    <td class="px-6 py-4 text-slate-600">{{ row.date }}</td>
    <td class="px-6 py-4 text-center">
      <button @click="viewDetail(row.id)" class="text-[#004B87] hover:text-sky-600 p-2 rounded-lg hover:bg-blue-50 transition-colors" title="View Full Survey Detail">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
      </button>
    </td>
  </tr>
</tbody>
              </table>
            </div>

         <!-- Dynamic Pagination Footer -->
            <div class="px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
              <!-- Menampilkan jumlah data real yang masuk -->
              <span class="text-sm text-slate-500 font-medium">
                Showing {{ tableData.length }} of {{ tableData.length }} respondents
              </span>
              
              <!-- Navigasi Halaman (Dibuat sederhana/statis untuk 1 halaman jika data demo masih sedikit) -->
              <div v-if="tableData.length > 0" class="flex items-center space-x-1">
                <button class="px-3 py-1 border border-slate-200 rounded-md bg-white text-slate-400 cursor-not-allowed" disabled>‹</button>
                <button class="px-3 py-1 border border-slate-200 rounded-md bg-[#004B87] text-white font-bold">1</button>
                <button class="px-3 py-1 border border-slate-200 rounded-md bg-white text-slate-400 cursor-not-allowed" disabled>›</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const supabase = useSupabaseClient()

// Kontrol Toggle Sidebar
const isSidebarOpen = ref(true)

// State untuk memuat data (loading) dan menampung data asli dari Supabase
const isLoading = ref(true)
const tableData = ref([])

// State Nilai Rata-rata 5 Kategori Utama (Default 0.00 sebelum data masuk)
const categoryCards = ref([
  { id: 'kepuasan', title: 'Kepuasan Pelanggan', score: '0.00', icon: '😊', bgColor: 'bg-green-100', textColor: 'text-green-600', barColor: 'bg-green-400' },
  { id: 'kepercayaan', title: 'Kepercayaan', score: '0.00', icon: '🛡️', bgColor: 'bg-blue-100', textColor: 'text-blue-600', barColor: 'bg-blue-400' },
  { id: 'keterikatan', title: 'Keterikatan Pelanggan', score: '0.00', icon: '🤝', bgColor: 'bg-sky-100', textColor: 'text-sky-600', barColor: 'bg-sky-400' },
  { id: 'permintaan', title: 'Permintaan Ulang', score: '0.00', icon: '🔁', bgColor: 'bg-emerald-100', textColor: 'text-emerald-600', barColor: 'bg-emerald-400' },
  { id: 'wom', title: 'Word of Mouth Behavior', score: '0.00', icon: '🗣️', bgColor: 'bg-indigo-100', textColor: 'text-indigo-600', barColor: 'bg-indigo-400' }
])

// 1. Fungsi Mengubah Format Tanggal agar Rapi (Contoh: 24 Oct 2026)
const formatDate = (dateString) => {
  if (!dateString) return '-'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

// 2. Fungsi Utama Mengambil Data Real dari Supabase
const fetchDashboardData = async () => {
  isLoading.value = true
  try {
    // Ambil data respon kuesioner sekalian JOIN dengan tabel respondents
    const { data: responses, error } = await supabase
      .from('questionnaire_responses')
      .select(`
        id,
        answers,
        created_at,
        respondents (
          company_name,
          category,
          sub_category
        )
      `)
      .order('created_at', { ascending: false })

    if (error) throw error

    if (responses) {
      // TATA DATA UNTUK TABE`
      tableData.value = responses.map(item => {
        const r = item.respondents || {}
        
        // Atur warna badge sub-kategori secara dinamis
        let subColorBadge = 'bg-indigo-100 text-indigo-700'
        if (r.sub_category === 'PLTA') subColorBadge = 'bg-blue-100 text-blue-700'
        if (r.sub_category === 'PDAM') subColorBadge = 'bg-sky-100 text-sky-700'
        if (r.sub_category === 'Instansi Pemerintah') subColorBadge = 'bg-green-100 text-green-700'

        return {
          id: item.id,
          company: r.company_name || 'No Name',
          mainCat: r.category || '-',
          subCat: r.sub_category || 'None',
          date: formatDate(item.created_at),
          subColor: subColorBadge
        }
      })

      // HITUNG RATA-RATA SKOR 5 KATEGORI DARI DATA REAL
      calculateCategoryAverages(responses)
    }

  } catch (err) {
    console.error('Gagal memuat data dashboard:', err.message)
  } finally {
    isLoading.value = false
  }
}

// 3. Fungsi Logika Perhitungan Rata-rata per Dimensi Topik
const calculateCategoryAverages = (responses) => {
  if (!responses || responses.length === 0) return

  // Mapping pembagian ID pertanyaan (1-25) berdasarkan kategorinya
  const mapping = {
    kepuasan: [1, 2, 3, 4, 5],
    kepercayaan: [6, 7, 8, 9, 10],
    keterikatan: [11, 12, 13, 14, 15],
    permintaan: [16, 17, 18, 19, 20],
    wom: [21, 22, 23, 24, 25]
  }

  // Objek penampung total nilai dan total pertanyaan yang terisi
  const totals = {
    kepuasan: { sum: 0, count: 0 },
    kepercayaan: { sum: 0, count: 0 },
    keterikatan: { sum: 0, count: 0 },
    permintaan: { sum: 0, count: 0 },
    wom: { sum: 0, count: 0 }
  }

  // Iterasi hitung seluruh jawaban responden yang masuk
  responses.forEach(res => {
    const ans = res.answers || {}
    
    Object.keys(mapping).forEach(catId => {
      mapping[catId].forEach(qId => {
        const score = ans[qId]
        if (score !== undefined && score !== null) {
          totals[catId].sum += Number(score)
          totals[catId].count++
        }
      })
    })
  })

  // Perbarui nilai score pada card komponen di layar
  categoryCards.value = categoryCards.value.map(card => {
    const catData = totals[card.id]
    const average = catData.count > 0 ? (catData.sum / catData.count).toFixed(2) : '0.00'
    return {
      ...card,
      score: average
    }
  })
}

// Ambil data otomatis setiap kali halaman dashboard selesai dimuat
onMounted(() => {
  fetchDashboardData()
})

const handleLogout = () => {
  if (confirm('Apakah Anda yakin ingin keluar dari Portal Admin?')) {
    localStorage.removeItem('is_admin_logged_in')
    router.push('/')
  }
}

// Fungsi Navigasi ke Halaman Detail Responden menggunakan ID Asli Supabase
const viewDetail = (id) => {
  router.push(`/admin/detail/${id}`)
}
</script>