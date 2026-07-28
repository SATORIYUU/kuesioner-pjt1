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

      <!-- Navigation Menu -->
      <nav class="flex-1 px-4 space-y-2 mt-4">
        <NuxtLink 
          to="/admin/dashboard" 
          :class="route.path.includes('/admin/dashboard') || route.path.includes('/admin/overview') ? 'bg-blue-50 text-[#004B87] font-bold border-l-4 border-[#004B87]' : 'text-slate-600 hover:bg-slate-50 font-medium'"
          class="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2h-2a2 2 0 01-2-2v-2z" /></svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
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
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="2" 
            stroke="currentColor" 
            class="h-5 w-5 shrink-0"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </aside>

    <!-- CONTENT AREA -->
    <div class="flex-1 flex flex-col min-w-0 bg-[#F8FAFC] overflow-hidden">
      
      <!-- NAVBAR HEADER -->
      <header class="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 sm:px-8 shrink-0 sticky top-0 z-20">
        <div class="flex items-center space-x-4">
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

      <!-- MAIN SCROLLABLE CONTENT BODY -->
      <div class="flex-1 overflow-auto p-4 sm:p-8 custom-scrollbar">
        <div class="max-w-7xl mx-auto space-y-6">
          
          <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Dashboard Utama</h2>

          <!-- BARIS ATAS: DIAGRAM BATANG & PANEL RINGKASAN -->
          <div class="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch w-full">
            
            <!-- 1. AREA DIAGRAM BATANG -->
            <div class="w-full md:w-2/3 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between min-w-0">
              <h3 class="text-sm font-bold text-slate-800 uppercase tracking-wider">Total Responden per-Kategori</h3>
              <div class="flex items-end justify-around h-44 pt-4 px-2 w-full border-b border-slate-100 pb-0">
                <div v-for="cat in categoryBreakdown" :key="cat.name" class="flex flex-col items-center flex-1 mx-1 h-full justify-end relative">
                  
                  <span class="text-xs font-bold text-slate-700 mb-1.5">{{ cat.count }}</span>
                  
                  <div 
                    class="w-10 md:w-12 rounded-t-sm shadow-sm transition-all duration-700 min-h-[4px]"
                    :style="{ 
                      height: (totalResponden > 0 ? (cat.count / totalResponden) * 110 : 0) + 'px',
                      backgroundColor: cat.colorHex 
                    }"
                  ></div>
                  
                  <span class="text-[10px] font-bold text-slate-500 text-center mt-2.5 truncate w-14 sm:w-20" :title="cat.name">
                    {{ cat.name }}
                  </span>
                </div>
              </div>
            </div>

            <!-- 2. PANEL RINGKASAN SURVEI (FONT DAN HEADING DISAMAKAN DENGAN KIRI) -->
            <div class="w-full md:w-1/3 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between min-w-0">
              <div>
                <!-- Header Panel disamakan persis ukurannya dengan Kiri -->
               <h3 class="text-sm font-bold text-slate-800 uppercase tracking-wider">Ringkasan Survei</h3>

                <!-- Konten Metrik -->
                <div class="space-y-3 text-xs mt-3">
                  
                  <!-- Total Responden & Nilai Kepuasan -->
                  <div class="flex gap-2.5">
                    <div class="flex-1 bg-slate-50 p-2.5 rounded-xl flex flex-col justify-center">
                      <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Responden</p>
                      <div class="flex items-center gap-1.5 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-slate-700">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6 0 3.375 3.375 0 0 1 6 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                        <span class="text-sm font-bold text-slate-800">{{ totalResponden }}</span>
                      </div>
                    </div>

                    <div class="flex-1 bg-slate-50 p-2.5 rounded-xl flex flex-col justify-center">
                      <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Nilai Kepuasan</p>
                      <div class="flex items-center gap-1.5 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4 text-amber-500 shrink-0">
                          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm font-bold text-emerald-600">{{ overallSatisfaction }}/5.0</span>
                      </div>
                    </div>
                  </div>

                  <!-- Indikator Tertinggi -->
                  <div class="flex items-center justify-between p-2.5 bg-emerald-50/70 rounded-xl">
                    <div class="min-w-0 pr-2">
                      <p class="text-[10px] font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5 text-emerald-600 shrink-0">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 0 3-3V8.25a3 3 0 0 0-3-3H6.75a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75c-.621 0-1.125.504-1.125 1.125v3.375m9 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18M6.75 18.75H5.625a1.125 1.125 0 0 1-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125H6.75" />
                        </svg>
                        <span>Indikator Tertinggi</span>
                      </p>
                      <p class="font-bold text-slate-500 mt-0.5 truncate text-[11px]" :title="highestIndicator.title">{{ highestIndicator.title }}</p>
                    </div>

                    <!-- Angka Skor Super Tebal Solid -->
                    <span 
                      class="text-emerald-600 text-base shrink-0 px-2 py-0.5" 
                      style="font-weight: 700; -webkit-text-stroke: 0.5px #059669;"
                    >
                      {{ highestIndicator.score }}
                    </span>
                  </div>

                  <!-- Indikator Terendah -->
                  <div class="flex items-center justify-between p-2.5 bg-rose-50/70 rounded-xl">
                    <div class="min-w-0 pr-2">
                      <p class="text-[10px] font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5 text-rose-600 shrink-0">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 8.5 8.5l-2.001.001M21.75 18v-5.25m0 5.25-5.25-5.25" />
                        </svg>
                        <span>Indikator Terendah</span>
                      </p>
                      <p class="font-bold text-slate-500 mt-0.5 truncate text-[11px]" :title="lowestIndicator.title">{{ lowestIndicator.title }}</p>
                    </div>

                    <!-- Angka Skor Super Tebal Solid -->
                    <span 
                      class="text-rose-600 text-base shrink-0 px-2 py-0.5" 
                      style="font-weight: 700; -webkit-text-stroke: 0.5px #e11d48;"
                    >
                      {{ lowestIndicator.score }}
                    </span>
                  </div>

                </div>
              </div>

              <!-- Footer Tanggal (Samakan Gaya Text) -->
              <div class="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium mt-3">
                <span class="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5 text-slate-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                  <span>Terakhir Update:</span>
                </span>
                <span class="font-bold text-slate-700">{{ lastUpdatedDate }}</span>
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
            <div class="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 class="text-sm font-bold text-slate-800 uppercase tracking-wider">Recent Submissions</h3>
              
              <!-- Fungsional Filter Kategori & Tanggal -->
             <!-- Filter Dropdown & Search -->
              <div class="flex flex-wrap items-center gap-2">
                
                <!-- Search Input -->
                <div class="relative w-full sm:w-48">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 text-slate-400">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
                    </svg>
                  </div>
                  <input v-model="searchFilter" type="text" placeholder="Search respondent..." class="block w-full pl-9 pr-3 py-1.5 border border-slate-200 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-[#004B87]" />
                </div>

                <!-- Dropdown Kategori -->
                <select 
                  v-model="selectedCategory" 
                  class="border border-slate-200 rounded-md px-3 py-1.5 text-xs font-bold text-slate-700 bg-white focus:ring-2 focus:ring-[#004B87] outline-none cursor-pointer min-w-[140px]"
                >
                  <option value="">Semua Kategori</option>
                  <option value="PLTA">PLTA</option>
                  <option value="PDAM">PDAM</option>
                  <option value="Industri">Industri</option>
                  <option value="Pihak yang Berkepentingan">Pihak Berkepentingan</option>
                </select>

                <!-- Dropdown Bulan & Tahun -->
                <select 
                  v-model="selectedMonthYear" 
                  class="border border-slate-200 rounded-md px-3 py-1.5 text-xs font-bold text-slate-700 bg-white focus:ring-2 focus:ring-[#004B87] outline-none cursor-pointer min-w-[130px]"
                >
                  <option value="">Semua Waktu</option>
                  <option v-for="date in availableDates" :key="date" :value="date">{{ date }}</option>
                </select>

              </div>
            </div>

            <!-- TABEL DENGAN HEADER BIRU SESUAI GAMBAR -->
            <div class="overflow-x-auto p-0 m-0">
              <table class="w-full text-left text-xs whitespace-nowrap">
                <thead class="bg-[#004B87] text-white font-bold uppercase">
                  <tr>
                    <th class="px-6 py-4">Company Name</th>
                    <th class="px-6 py-4">Main Category</th>
                    <th class="px-6 py-4">Sub-Category</th>
                    <th class="px-6 py-4">Submission Date</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 font-medium text-slate-700">
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
const lastUpdatedDate = ref('-')
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

// KOMPUTASI METRIK
const overallSatisfaction = computed(() => {
  const scores = categoryCards.value.map(c => Number(c.score))
  const sum = scores.reduce((acc, curr) => acc + curr, 0)
  return scores.length > 0 ? (sum / scores.length).toFixed(2) : '0.00'
})

const highestIndicator = computed(() => {
  if (!categoryCards.value.length) return { title: '-', score: '0.00' }
  const sorted = [...categoryCards.value].sort((a, b) => Number(b.score) - Number(a.score))
  return { title: sorted[0].title, score: sorted[0].score }
})

const lowestIndicator = computed(() => {
  if (!categoryCards.value.length) return { title: '-', score: '0.00' }
  const sorted = [...categoryCards.value].sort((a, b) => Number(a.score) - Number(b.score))
  return { title: sorted[0].title, score: sorted[0].score }
})

// State untuk Filter Dropdown
const selectedCategory = ref('')
const selectedMonthYear = ref('')

// Computed List Bulan & Tahun Unik
const availableDates = computed(() => {
  if (!tableData.value.length) return []
  const dates = tableData.value.map(item => {
    const parts = (item.date || '').split(' ')
    if (parts.length === 3) return `${parts[1]} ${parts[2]}`
    return item.date
  }).filter(Boolean)
  return [...new Set(dates)]
})

// Logika Filtering yang Diperbaiki & Akurat
const filteredTableData = computed(() => {
  let result = tableData.value

  // 1. Filter Search Text
  if (searchFilter.value.trim()) {
    const query = searchFilter.value.toLowerCase().trim()
    result = result.filter(item => 
      (item.company || '').toLowerCase().includes(query) || 
      (item.mainCat || '').toLowerCase().includes(query) || 
      (item.subCat || '').toLowerCase().includes(query)
    )
  }

  // 2. Filter Dropdown Kategori
  if (selectedCategory.value) {
    const target = selectedCategory.value.toLowerCase().trim()
    
    result = result.filter(item => {
      const main = (item.mainCat || '').toLowerCase().trim()
      const sub = (item.subCat || '').toLowerCase().trim()

      if (target === 'pihak yang berkepentingan') {
        return main.includes('pihak') || main.includes('berkepentingan') || sub === 'none'
      }
      if (target === 'industri') {
        return sub.includes('industri') || sub.includes('swasta')
      }
      // Untuk PLTA dan PDAM
      return sub.includes(target)
    })
  }

  // 3. Filter Dropdown Bulan & Tahun
  if (selectedMonthYear.value) {
    result = result.filter(item => (item.date || '').includes(selectedMonthYear.value))
  }

  return result
})

const formatDate = (dateString) => {
  if (!dateString) return '-'
  return new Date(dateString).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
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
    
    let mainCat = r.category ? String(r.category).toLowerCase().trim() : ''
    let subCat = r.sub_category ? String(r.sub_category).toLowerCase().trim() : ''

    if (subCat.includes('plta')) {
      counts.PLTA++
    } else if (subCat.includes('pdam')) {
      counts.PDAM++
    } else if (subCat.includes('industri') || subCat.includes('swasta')) {
      counts.Industri++
    } else if (
      subCat.includes('pemerintah') || 
      subCat.includes('pyb') || 
      mainCat.includes('pihak') || 
      mainCat.includes('berkepentingan') || 
      mainCat.includes('pyb')
    ) {
      counts.PihakBerkepentingan++
    } else {
      counts.PihakBerkepentingan++
    }

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

      if (responses.length > 0 && responses[0].created_at) {
        lastUpdatedDate.value = formatDate(responses[0].created_at)
      }

      tableData.value = responses.map(item => {
        const r = respondentsList ? respondentsList.find(res => res.id === item.respondent_id) : null
        const resObj = r || {}
        
        let subColorBadge = 'bg-purple-50 text-purple-700 border border-purple-100'
        let subCatText = resObj.sub_category ? String(resObj.sub_category).trim() : 'None'
        let mainCatText = resObj.category ? String(resObj.category).trim() : 'Pemanfaat'

        if (subCatText.toLowerCase().includes('plta')) subColorBadge = 'bg-blue-50 text-blue-700 border border-blue-100'
        else if (subCatText.toLowerCase().includes('pdam')) subColorBadge = 'bg-cyan-50 text-cyan-700 border border-cyan-100'
        else if (subCatText.toLowerCase().includes('industri') || subCatText.toLowerCase().includes('swasta')) subColorBadge = 'bg-indigo-50 text-indigo-700 border border-indigo-100'
        
        if (mainCatText.toLowerCase().includes('berkepentingan') || mainCatText.toLowerCase().includes('pyb') || subCatText.toLowerCase().includes('pemerintah')) {
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