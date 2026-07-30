<template>
  <div class="h-screen w-full bg-[#F4F7FA] flex overflow-hidden font-sans text-slate-800">
    
    <!-- Latar Belakang Overlay untuk Mobile -->
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
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2h-2a2 2 0 01-2-2v-2z" /></svg>
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
      
      <!-- NAVBAR HEADER -->
      <header class="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 sm:px-8 shrink-0 sticky top-0 z-20">
        <div class="flex items-center space-x-4">
          <button @click="isSidebarOpen = !isSidebarOpen" class="text-slate-500 hover:text-[#004B87] transition-colors focus:outline-none bg-white border border-slate-200 hover:bg-slate-50 p-1.5 rounded-lg shadow-sm">
            <svg v-if="isSidebarOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <h1 class="text-base sm:text-xl font-extrabold text-slate-800 tracking-tight">Perum Jasa Tirta I</h1>
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
          
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 mb-1">Data Responden & Penilaian</h2>
              <p class="text-xs sm:text-sm text-slate-400 font-medium">Monitoring status pengisian kuesioner dengan rincian Skala Kepuasan, Kepentingan, dan Loyalitas.</p>
            </div>
            <div class="text-xs text-slate-500 font-medium bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm self-start sm:self-auto">
              Total Ditampilkan: <span class="font-bold text-[#004B87]">{{ filteredRespondents.length }}</span> / {{ allClientsList.length }} Klien
            </div>
          </div>

          <!-- 4 SUMMARY CARDS BOX -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Sudah Mengisi</span>
              <div class="flex items-baseline justify-between mt-2">
                <span class="text-2xl font-extrabold text-emerald-600">{{ statusCounts.filled }}</span>
                <span class="text-[10px] font-semibold text-slate-400">Responden</span>
              </div>
            </div>

            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Belum Mengisi</span>
              <div class="flex items-baseline justify-between mt-2">
                <span class="text-2xl font-extrabold text-rose-500">{{ statusCounts.unfilled }}</span>
                <span class="text-[10px] font-semibold text-slate-400">Responden</span>
              </div>
            </div>

            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Klien Aktif</span>
              <div class="flex items-baseline justify-between mt-2">
                <span class="text-2xl font-extrabold text-[#004B87]">{{ statusCounts.active }}</span>
                <span class="text-[10px] font-semibold text-slate-400">Klien</span>
              </div>
            </div>

            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Klien Non-Aktif</span>
              <div class="flex items-baseline justify-between mt-2">
                <span class="text-2xl font-extrabold text-slate-400">{{ statusCounts.inactive }}</span>
                <span class="text-[10px] font-semibold text-slate-400">Klien</span>
              </div>
            </div>
          </div>

          <!-- SEARCH & FILTER TOOLBAR -->
          <div class="bg-white p-4 border border-slate-200 rounded-xl shadow-sm flex flex-col lg:flex-row gap-3 items-center justify-between">
            
            <div class="relative w-full lg:w-72">
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

            <div class="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              
              <select v-model="selectedFillStatus" class="border border-slate-200 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#004B87] bg-white font-medium">
                <option value="">Semua Status Pengisian</option>
                <option value="sudah">Sudah Mengisi</option>
                <option value="belum">Belum Mengisi</option>
              </select>

              <select v-model="selectedDateSort" class="border border-slate-200 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#004B87] bg-white font-medium">
                <option value="terbaru">Tanggal: Paling Baru</option>
                <option value="terlama">Tanggal: Paling Lama</option>
              </select>

              <label class="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-lg text-xs bg-slate-50 cursor-pointer hover:bg-slate-100 select-none font-medium">
                <input 
                  type="checkbox" 
                  v-model="hideInactive" 
                  class="rounded border-slate-300 text-[#004B87] focus:ring-[#004B87] h-3.5 w-3.5"
                />
                <span>Sembunyikan Klien Tidak Aktif</span>
              </label>

              <button 
                v-if="searchQuery || selectedFillStatus || selectedDateSort !== 'terbaru' || hideInactive" 
                @click="resetFilters" 
                class="text-xs text-rose-600 hover:text-rose-800 font-bold px-2 py-1"
              >
                Reset
              </button>

            </div>
          </div>

          <!-- RESPONDENT EXPANDABLE TABLE -->
          <div class="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden w-full">
            <div class="overflow-x-auto w-full">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#004B87] text-white text-[11px] font-bold uppercase tracking-wider">
                  <tr>
                    <th class="px-6 py-4 w-16 text-center">No.</th>
                    <th class="px-6 py-4">Nama Perusahaan</th>
                    <th class="px-6 py-4">Status Pengisian</th>
                    <th class="px-6 py-4">Status Klien</th>
                    <th class="px-6 py-4">Tanggal Pengisian</th>
                  </tr>
                </thead>
                
                <tbody v-if="isLoading" class="divide-y divide-slate-100 font-medium">
                  <tr>
                    <td colspan="5" class="px-6 py-12 text-center text-slate-400 animate-pulse font-semibold">
                      Sinkronisasi master klien & status kuesioner...
                    </td>
                  </tr>
                </tbody>

                <tbody v-else-if="filteredRespondents.length === 0" class="divide-y divide-slate-100 font-medium">
                  <tr>
                    <td colspan="5" class="px-6 py-12 text-center text-slate-400 font-semibold">
                      Tidak ada data perusahaan yang sesuai dengan filter.
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
                    <td class="px-6 py-4 text-center text-slate-400 font-bold">{{ index + 1 }}</td>
                    <td class="px-6 py-4 text-[#004B87] font-bold whitespace-normal">{{ row.company }}</td>
                    
                    <td class="px-6 py-4">
                      <span 
                        :class="row.hasFilled ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : 'bg-slate-100 text-slate-500 border-slate-200'" 
                        class="px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase inline-block whitespace-nowrap"
                      >
                        {{ row.hasFilled ? 'Sudah Mengisi' : 'Belum Mengisi' }}
                      </span>
                    </td>

                    <td class="px-6 py-4">
                      <span 
                        :class="row.clientStatus === 'aktif' ? 'text-emerald-600 font-bold' : 'text-slate-400 font-medium'"
                        class="text-[11px] capitalize whitespace-nowrap"
                      >
                        ● {{ row.clientStatus || 'aktif' }}
                      </span>
                    </td>

                    <td class="px-6 py-4 text-slate-500 font-medium whitespace-nowrap">{{ row.date }}</td>
                  </tr>

                  <!-- ACCORDION CONTENT DETAIL EVALUASI & LOYALITAS -->
                  <tr v-if="expandedRowId === row.id" class="bg-slate-50/90">
                    <td colspan="5" class="p-6 border-b border-slate-200 shadow-inner whitespace-normal">
                      
                      <div class="space-y-6 w-full max-w-6xl mx-auto">
                        
                        <!-- BAGIAN UNTUK RESPOSNDEN BELUM MENGISI -->
                        <div v-if="!row.hasFilled" class="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-amber-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <h4 class="text-sm font-bold text-amber-800">Klien Belum Mengisi Kuesioner</h4>
                          <p class="text-xs text-amber-600 mt-1">Belum ada rincian jawaban evaluasi, loyalitas, maupun saran yang terekam dari perusahaan ini.</p>
                        </div>

                        <!-- BAGIAN JIKA SUDAH MENGISI -->
                        <template v-else>
                          
                          <!-- 1. BAGIAN TABEL EVALUASI (KEPUASAN & KEPENTINGAN) -->
                          <div class="space-y-3">
                            <div class="flex items-center justify-between">
                              <div class="flex items-center gap-2">
                                <span class="bg-[#004B87] text-white text-[10px] font-bold px-2 py-0.5 rounded">Bagian A</span>
                                <h4 class="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                                  Rincian Evaluasi Layanan (Skala 1 - 4)
                                </h4>
                              </div>
                              <div class="flex items-center gap-2 text-[10px] font-bold">
                                <span class="px-2 py-0.5 rounded bg-blue-50 text-[#004B87] border border-blue-100">Rata-rata Kepuasan: {{ calculateAvg(row.evalQuestions, 'satisfaction') }}</span>
                                <span class="px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-100">Rata-rata Kepentingan: {{ calculateAvg(row.evalQuestions, 'importance') }}</span>
                              </div>
                            </div>

                            <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                              <table class="w-full text-left text-xs">
                                <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                                  <tr>
                                    <th class="p-3 w-12 text-center">No.</th>
                                    <th class="p-3">Butir Pertanyaan Evaluasi</th>
                                    <th class="p-3 text-center w-32">Kepuasan (1-4)</th>
                                    <th class="p-3 text-center w-32">Kepentingan (1-4)</th>
                                  </tr>
                                </thead>
                                <tbody class="divide-y divide-slate-100">
                                  <tr v-for="q in row.evalQuestions" :key="q.id" class="hover:bg-slate-50/60 transition-colors">
                                    <td class="p-3 text-center font-bold text-slate-400">{{ q.id }}</td>
                                    <td class="p-3 font-medium text-slate-700 leading-relaxed">{{ q.text }}</td>
                                    <td class="p-3 text-center">
                                      <span 
                                        :class="q.satisfaction >= 3 ? 'bg-blue-50 text-[#004B87] border-blue-100' : 'bg-rose-50 text-rose-600 border-rose-100'"
                                        class="px-2.5 py-1 rounded-md font-extrabold border inline-block min-w-[50px]"
                                      >
                                        {{ q.satisfaction || '-' }} / 4
                                      </span>
                                    </td>
                                    <td class="p-3 text-center">
                                      <span 
                                        :class="q.importance >= 3 ? 'bg-amber-50 text-amber-800 border-amber-100' : 'bg-slate-100 text-slate-500 border-slate-200'"
                                        class="px-2.5 py-1 rounded-md font-extrabold border inline-block min-w-[50px]"
                                      >
                                        {{ q.importance || '-' }} / 4
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>

                          <!-- 2. BAGIAN PILIHAN LOYALITAS (CARD GRID) -->
                          <div class="space-y-3 pt-2">
                            <div class="flex items-center gap-2">
                              <span class="bg-[#004B87] text-white text-[10px] font-bold px-2 py-0.5 rounded">Bagian B</span>
                              <h4 class="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                                Pengukuran Loyalitas Pelanggan (Opsi Terpilih)
                              </h4>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div 
                                v-for="loy in row.loyaltyAnswers" 
                                :key="loy.id" 
                                class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all"
                              >
                                <div>
                                  <div class="flex items-center justify-between mb-2">
                                    <span class="text-[11px] font-bold text-[#004B87] uppercase tracking-wider">{{ loy.title }}</span>
                                    <span class="text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
                                      {{ loy.selectedVal }}
                                    </span>
                                  </div>
                                  <p class="text-xs text-slate-700 font-medium leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100 italic">
                                    "{{ loy.selectedText }}"
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- 3. BAGIAN SARAN / MASUKAN RESPONDEN -->
                          <div class="space-y-2 pt-2">
                            <div class="flex items-center gap-2">
                              <span class="bg-[#004B87] text-white text-[10px] font-bold px-2 py-0.5 rounded">Bagian C</span>
                              <h4 class="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                                Catatan Saran & Kritik Responden
                              </h4>
                            </div>
                            
                            <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden">
                              <div class="absolute top-0 left-0 bottom-0 w-1 bg-[#004B87]"></div>
                              <p v-if="row.feedback && row.feedback.trim()" class="text-xs text-slate-800 font-medium leading-relaxed italic pl-2">
                                "{{ row.feedback }}"
                              </p>
                              <p v-else class="text-xs text-slate-400 italic pl-2">
                                Tidak ada catatan masukan tertulis dari responden ini.
                              </p>
                            </div>
                          </div>

                        </template>

                      </div>

                    </td>
                  </tr>

                  <!-- ACCORDION DOWN ARROW -->
                  <tr v-if="expandedRowId !== row.id">
                    <td colspan="5" class="p-0">
                      <div @click="toggleRow(row.id)" class="w-full bg-blue-50/30 hover:bg-blue-50/70 text-slate-400 hover:text-[#004B87] flex items-center justify-center py-1.5 transition-colors cursor-pointer border-b border-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                      </div>
                    </td>
                  </tr>
                  <tr v-else>
                    <td colspan="5" class="p-0">
                      <div @click="toggleRow(null)" class="w-full bg-sky-100/40 hover:bg-sky-100/70 text-[#004B87] flex items-center justify-center py-1.5 transition-colors cursor-pointer border-b border-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /></svg>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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

const searchQuery = ref('')
const selectedFillStatus = ref('')
const selectedDateSort = ref('terbaru')
const hideInactive = ref(false)

const expandedRowId = ref(null)

const allClientsList = ref([])
const combinedRespondentsList = ref([])
const masterQuestions = ref([])

// Definisi opsi teks loyalitas untuk rekap admin
const loyaltyDefinitions = [
  {
    id: 1,
    title: '1. Kepuasan Pelanggan',
    options: {
      1: 'Saya menyukai layanan jasa air baku dari pihak selain Perum Jasa Tirta I yang lebih menguntungkan usaha saya.',
      2: 'Saya tidak mengalami ketidakpuasan selama menjadi pelanggan layanan jasa air baku Perum Jasa Tirta I dan saya sudah terbiasa menjadi pelanggan.',
      3: 'Saya puas dengan layanan jasa air baku Perum Jasa Tirta I, tapi bila ada layanan sejenis dari pihak lain yang lebih murah saya akan beralih.',
      4: 'Saya menyukai layanan jasa air baku Perum Jasa Tirta I dan akan lebih puas jika menggunakan layanan PJT I dibanding pihak lain.',
      5: 'Saya sangat puas dengan layanan jasa air baku Perum Jasa Tirta I dan saya akan merekomendasikan layanan tersebut kepada rekan-rekan saya.'
    }
  },
  {
    id: 2,
    title: '2. Kepercayaan (Trust)',
    options: {
      1: 'Saya tidak memiliki kepercayaan khusus terhadap Perum Jasa Tirta I, saya lebih mengutamakan prinsip ekonomi dalam bisnis saya.',
      2: 'Saya biasa mempercayakan pemenuhan kebutuhan air baku saya pada layanan jasa air baku Perum Jasa Tirta I.',
      3: 'Saya percaya pada layanan Perum Jasa Tirta I, tapi ada kemungkinan saya beralih ke penyedia jasa lain yang lebih terpercaya.',
      4: 'Saya benar-benar percaya pada kerjasama yang saya jalin dengan Perum Jasa Tirta I.',
      5: 'Saya bangga mempercayakan pemenuhan air baku saya pada layanan jasa air Perum Jasa Tirta I.'
    }
  },
  {
    id: 3,
    title: '3. Keterikatan',
    options: {
      1: 'Saya sering berpindah-pindah penyedia jasa layanan air baku, saya jarang terikat pada satu jenis layanan/perusahaan.',
      2: 'Sudah menjadi kebiasaan saya meminta Perum Jasa Tirta I untuk memenuhi kebutuhan air baku saya.',
      3: 'Saya tidak pernah dikecewakan oleh PJT I, tapi saya tidak memiliki komitmen khusus untuk selalu bekerjasama.',
      4: 'Saya yakin layanan PJT I lebih baik dari pihak lain, mungkin saya akan terus melanjutkan kerjasama.',
      5: 'Saya yakin layanan PJT I lebih baik dari pihak lain dan saya memiliki komitmen untuk terus bekerjasama.'
    }
  },
  {
    id: 4,
    title: '4. Permintaan Ulang',
    options: {
      1: 'Saya jarang / tidak pernah melakukan permintaan ulang terhadap layanan jasa air baku PJT I secara berturut-turut.',
      2: 'Saya biasa meminta layanan jasa air baku PJT I, tapi jarang melakukan permintaan ulang secara berturut-turut.',
      3: 'Setidaknya saya pernah melakukan permintaan ulang terhadap layanan jasa air baku PJT I sebanyak tiga kali berturut-turut.',
      4: 'Saya selalu meminta layanan jasa air baku Perum Jasa Tirta I karena saya menyukai layanan tersebut.',
      5: 'Saya akan selalu menjadi pelanggan setia PJT I dan selalu meminta layanannya karena bangga menjalin kerjasama.'
    }
  },
  {
    id: 5,
    title: '5. Word-of-Mouth Behavior',
    options: {
      1: 'Saya tidak pernah berniat merekomendasikan layanan jasa air baku Perum Jasa Tirta I kepada rekan atau kolega saya.',
      2: 'Saya biasa menggunakan layanan PJT I dan merekomendasikannya bila ada rekan yang menanyakannya.',
      3: 'Saya puas menggunakan layanan PJT I, bila ada rekan meminta rekomendasi maka saya merekomendasikannya sebagai alternatif.',
      4: 'Saya menyukai layanan PJT I dan merekomendasikan layanannya bila ada rekan yang membutuhkan informasi.',
      5: 'Saya senang dan bangga menjadi pelanggan PJT I, sehingga tanpa diminta saya akan menceritakan pengalaman positif kepada rekan.'
    }
  }
]

const statusCounts = computed(() => {
  let filled = 0
  let unfilled = 0
  let active = 0
  let inactive = 0

  allClientsList.value.forEach(c => {
    if (c.status === 'aktif') active++
    else inactive++
  })

  combinedRespondentsList.value.forEach(r => {
    if (r.hasFilled) filled++
    else unfilled++
  })

  return { filled, unfilled, active, inactive }
})

const filteredRespondents = computed(() => {
  let result = combinedRespondentsList.value.filter(item => {
    const matchesSearch = !searchQuery.value || 
      item.company.toLowerCase().includes(searchQuery.value.toLowerCase())

    let matchesFillStatus = true
    if (selectedFillStatus.value === 'sudah') matchesFillStatus = item.hasFilled
    if (selectedFillStatus.value === 'belum') matchesFillStatus = !item.hasFilled

    let matchesActive = true
    if (hideInactive.value) matchesActive = item.clientStatus === 'aktif'

    return matchesSearch && matchesFillStatus && matchesActive
  })

  result.sort((a, b) => {
    const timeA = a.rawDate ? new Date(a.rawDate).getTime() : 0
    const timeB = b.rawDate ? new Date(b.rawDate).getTime() : 0

    if (selectedDateSort.value === 'terbaru') {
      return timeB - timeA
    } else {
      return timeA - timeB
    }
  })

  return result
})

const resetFilters = () => {
  searchQuery.value = ''
  selectedFillStatus.value = ''
  selectedDateSort.value = 'terbaru'
  hideInactive.value = false
}

const toggleRow = (rowId) => {
  expandedRowId.value = expandedRowId.value === rowId ? null : rowId
}

const formatDate = (dateString) => {
  if (!dateString) return '-'
  return new Date(dateString).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

const calculateAvg = (questions, key) => {
  if (!questions || questions.length === 0) return '0.0'
  const valid = questions.map(q => q[key]).filter(v => v > 0)
  if (valid.length === 0) return '0.0'
  const sum = valid.reduce((a, b) => a + b, 0)
  return (sum / valid.length).toFixed(1)
}

const fetchData = async () => {
  try {
    isLoading.value = true

    const { data: clients, error: clientErr } = await supabase
      .from('clients')
      .select('*')
      .order('id', { ascending: true })

    if (clientErr) throw clientErr
    allClientsList.value = clients || []

    const { data: questions, error: qErr } = await supabase
      .from('questions')
      .select('id, question_text')
      .order('id', { ascending: true })

    if (qErr) throw qErr
    masterQuestions.value = questions || []

    const { data: responses, error: resErr } = await supabase
      .from('questionnaire_responses')
      .select('id, answers, feedback, created_at, respondent_id')

    if (resErr) throw resErr

    const { data: respondents, error: respErr } = await supabase
      .from('respondents')
      .select('id, company_name')

    if (respErr) throw respErr

    combinedRespondentsList.value = (clients || []).map(client => {
      const clientNameClean = (client.company_name || '').trim().toLowerCase()

      const matchedRespondents = (respondents || []).filter(r => {
        const respNameClean = (r.company_name || '').trim().toLowerCase()
        return respNameClean === clientNameClean
      })

      const matchedRespIds = matchedRespondents.map(r => r.id)

      let matchResponse = (responses || []).find(res => matchedRespIds.includes(res.respondent_id))

      if (!matchResponse && respondents && responses) {
        matchResponse = responses.find(res => {
          const respObj = respondents.find(r => r.id === res.respondent_id)
          if (!respObj) return false
          const respNameClean = (respObj.company_name || '').trim().toLowerCase()
          return respNameClean === clientNameClean
        })
      }

      const hasFilled = !!matchResponse
      const ans = matchResponse ? (matchResponse.answers || {}) : {}

      // Mapping pertanyaan evaluasi (Kepuasan & Kepentingan)
      const evalQuestions = masterQuestions.value
        .filter(q => q.id <= 12)
        .map(q => {
          return {
            id: q.id,
            text: q.question_text,
            satisfaction: hasFilled ? (ans[`q${q.id}_kepuasan`] || 0) : 0,
            importance: hasFilled ? (ans[`q${q.id}_kepentingan`] || 0) : 0
          }
        })

      // Mapping pilihan loyalitas
      const loyaltyAnswers = loyaltyDefinitions.map(loy => {
        const val = hasFilled ? (ans[`loyalitas_${loy.id}`] || 0) : 0
        return {
          id: loy.id,
          title: loy.title,
          selectedVal: val ? `Opsi ${val}` : '-',
          selectedText: (val && loy.options[val]) ? loy.options[val] : 'Belum dipilih / Tidak ada data'
        }
      })

      return {
        id: client.id,
        company: client.company_name,
        clientStatus: client.status || 'aktif',
        hasFilled: hasFilled,
        rawDate: matchResponse ? matchResponse.created_at : null,
        date: matchResponse ? formatDate(matchResponse.created_at) : 'Belum Mengisi',
        feedback: matchResponse ? matchResponse.feedback : '',
        evalQuestions,
        loyaltyAnswers
      }
    })

  } catch (err) {
    console.error('Gagal memuat data responden:', err.message)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
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