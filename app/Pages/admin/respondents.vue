<template>
  <div class="h-screen w-full bg-[#F4F7FA] flex overflow-hidden font-sans text-slate-800">
    
    <!-- OVERLAY MOBILE -->
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
          @click="closeSidebarAndNotif"
          :class="route.path === '/admin/dashboard' ? 'bg-blue-50 text-[#004B87] font-bold border-l-4 border-[#004B87]' : 'text-slate-600 hover:bg-slate-50 font-medium'"
          class="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v-2a2 2 0 01-2-2v-2z" /></svg>
          <span>Overview</span>
        </NuxtLink>
        
        <NuxtLink 
          to="/admin/klien" 
          @click="closeSidebarAndNotif"
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
          @click="closeSidebarAndNotif"
          :class="route.path === '/admin/respondents' ? 'bg-blue-50 text-[#004B87] font-bold border-l-4 border-[#004B87]' : 'text-slate-600 hover:bg-slate-50 font-medium'"
          class="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
          <span>Data Responden</span>
        </NuxtLink>

        <NuxtLink 
          to="/admin/questions" 
          @click="closeSidebarAndNotif"
          :class="route.path === '/admin/questions' ? 'bg-blue-50 text-[#004B87] font-bold border-l-4 border-[#004B87]' : 'text-slate-600 hover:bg-slate-50 font-medium'"
          class="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
          </svg>
          <span>Kuisioner</span>
        </NuxtLink>
      </nav>

      <div class="p-4 border-t border-slate-200">
        <button @click="triggerLogoutPrompt" class="flex items-center space-x-3 px-4 py-3 w-full text-slate-600 hover:text-red-600 hover:bg-red-50 font-medium rounded-xl transition-colors cursor-pointer">
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
          <button @click="isSidebarOpen = !isSidebarOpen" class="text-slate-500 hover:text-[#004B87] transition-colors focus:outline-none bg-white border border-slate-200 hover:bg-slate-50 p-1.5 rounded-lg shadow-sm cursor-pointer">
            <svg v-if="isSidebarOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <h1 class="text-base sm:text-xl font-extrabold text-slate-800 tracking-tight">Perum Jasa Tirta I</h1>
        </div>

        <div class="flex items-center space-x-3 sm:space-x-6">
          
          <!-- IKON NOTIFIKASI LONCENG RESPONDEN BARU -->
          <div class="relative">
            <button 
              @click="toggleNotification" 
              class="relative p-2 text-slate-500 hover:text-[#004B87] hover:bg-slate-50 rounded-xl transition-all focus:outline-none border border-transparent hover:border-slate-200 cursor-pointer"
              title="Notifikasi Responden Baru"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>

              <!-- BADGE MERAH COUNTER (PROPOSIONAL & BULAT RAPI) -->
              <span 
                v-if="hasUnread && unreadCount > 0" 
                class="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-[11px] font-bold h-5 min-w-[20px] px-1.5 rounded-full flex items-center justify-center border-2 border-white shadow-sm leading-none animate-pulse"
              >
                {{ unreadCount > 9 ? '9+' : unreadCount }}
              </span>
            </button>

            <!-- DROPDOWN BOX NOTIFIKASI -->
            <div 
              v-if="isNotificationOpen" 
              class="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden z-50 transition-all duration-200"
            >
              <div class="p-3.5 sm:p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
                <h3 class="text-xs font-black text-slate-800 uppercase tracking-wider">Responden Baru</h3>
                <span class="bg-blue-100 text-[#004B87] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                  {{ notificationsList.length }} Baru
                </span>
              </div>

              <div class="max-h-80 overflow-y-auto divide-y divide-slate-100 custom-scrollbar">
                <div v-if="notificationsList.length === 0" class="p-6 text-center">
                  <div class="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-2 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                  </div>
                  <p class="text-xs text-slate-400 font-medium">Belum ada respon baru.</p>
                </div>

                <div 
                  v-else 
                  v-for="notif in notificationsList" 
                  :key="notif.id" 
                  @click="navigateToRespondents"
                  class="p-3.5 hover:bg-blue-50/50 transition-colors cursor-pointer flex gap-3 items-start"
                >
                  <div class="w-8 h-8 rounded-lg bg-blue-50 text-[#004B87] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100/60">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 truncate">{{ notif.company_name }}</p>
                    <p class="text-[11px] text-slate-500 truncate">{{ notif.nama_pengisi }} baru mengisi kuesioner.</p>
                    <span class="text-[10px] text-slate-400 font-medium mt-1 block">{{ notif.time_ago }}</span>
                  </div>
                </div>
              </div>

              <div class="p-3 border-t border-slate-100 bg-slate-50 text-center">
                <NuxtLink to="/admin/respondents" @click="isNotificationOpen = false" class="text-xs font-bold text-[#004B87] hover:underline">
                  Lihat Semua Data Responden →
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- USER PROFILE DATA -->
          <div class="flex items-center space-x-3 border-l border-slate-200 pl-4 sm:pl-6 h-9">
            <div class="hidden sm:block text-right">
              <p class="text-sm font-bold text-slate-900 leading-none">
                {{ isSuperAdmin ? 'User2' : 'User1' }}
              </p>
              <p class="text-[10px] text-slate-500 font-medium mt-1">
                {{ isSuperAdmin ? 'Superadmin' : 'Admin' }}
              </p>
            </div>
            <div class="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-[#004B87] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm shrink-0">
              {{ isSuperAdmin ? 'SA' : 'AD' }}
            </div>
          </div>

        </div>
      </header>

      <!-- MAIN BODY -->
      <div class="flex-1 overflow-auto p-4 sm:p-8 custom-scrollbar">
        <div class="max-w-7xl mx-auto space-y-6">
          
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 mb-1">Data Responden & Penilaian</h2>
              <p class="text-xs sm:text-sm text-slate-400 font-medium">Monitoring status pengisian kuesioner (Maksimal 2 Responden per Perusahaan).</p>
            </div>
            <div class="text-xs text-slate-500 font-medium bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm self-start sm:self-auto">
              Total Ditampilkan: <span class="font-bold text-[#004B87]">{{ filteredRespondents.length }}</span> / {{ allClientsList.length }} Perusahaan
            </div>
          </div>

          <!-- SUMMARY CARDS -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Sudah Mengisi (Lengkap 2x)</span>
              <div class="flex items-baseline justify-between mt-2">
                <span class="text-2xl font-extrabold text-emerald-600">{{ statusCounts.fullyFilled }}</span>
                <span class="text-[10px] font-semibold text-slate-400">Perusahaan</span>
              </div>
            </div>

            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Baru Mengisi (1x)</span>
              <div class="flex items-baseline justify-between mt-2">
                <span class="text-2xl font-extrabold text-amber-500">{{ statusCounts.partiallyFilled }}</span>
                <span class="text-[10px] font-semibold text-slate-400">Perusahaan</span>
              </div>
            </div>

            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Belum Mengisi (0x)</span>
              <div class="flex items-baseline justify-between mt-2">
                <span class="text-2xl font-extrabold text-rose-500">{{ statusCounts.unfilled }}</span>
                <span class="text-[10px] font-semibold text-slate-400">Perusahaan</span>
              </div>
            </div>

            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Responden Masuk</span>
              <div class="flex items-baseline justify-between mt-2">
                <span class="text-2xl font-extrabold text-[#004B87]">{{ statusCounts.totalRespondentsCount }}</span>
                <span class="text-[10px] font-semibold text-slate-400">Orang</span>
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
                <option value="lengkap">Lengkap (2x Mengisi)</option>
                <option value="mengisi">Mengisi (1x Mengisi)</option>
                <option value="belum">Belum Mengisi (0x)</option>
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
                class="text-xs text-rose-600 hover:text-rose-800 font-bold px-2 py-1 cursor-pointer"
              >
                Reset
              </button>

            </div>
          </div>

          <!-- TABLE DATA -->
          <div class="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden w-full">
            <div class="overflow-x-auto w-full">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#004B87] text-white text-[11px] font-bold uppercase tracking-wider">
                  <tr>
                    <th class="px-6 py-4 w-16 text-center">No.</th>
                    <th class="px-6 py-4">Nama Perusahaan</th>
                    <th class="px-6 py-4">Status Pengisian</th>
                    <th class="px-6 py-4">Progres Responden</th>
                    <th class="px-6 py-4">Tanggal Terakhir</th>
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
                  
                  <tr 
                    @click="toggleRow(row.id)" 
                    class="hover:bg-slate-50/80 cursor-pointer transition-colors font-semibold"
                    :class="expandedRowId === row.id ? 'bg-slate-50/50' : ''"
                  >
                    <td class="px-6 py-4 text-center text-slate-400 font-bold">
                      {{ ((currentPage - 1) * itemsPerPage) + index + 1 }}
                    </td>
                    <td class="px-6 py-4 text-[#004B87] font-bold whitespace-normal">{{ row.company }}</td>
                    
                    <td class="px-6 py-4">
                      <span 
                        :class="row.respondentsCount === 2 
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-200' 
                          : row.respondentsCount === 1 
                          ? 'bg-amber-100 text-amber-800 border-amber-200' 
                          : 'bg-slate-100 text-slate-500 border-slate-200'" 
                        class="px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase inline-block whitespace-nowrap"
                      >
                        {{ row.respondentsCount === 2 ? 'Lengkap (2/2)' : row.respondentsCount === 1 ? 'Mengisi (1/2)' : 'Belum Mengisi (0/2)' }}
                      </span>
                    </td>

                    <td class="px-6 py-4">
                      <div class="flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full" :class="row.respondentsCount >= 1 ? 'bg-emerald-500' : 'bg-slate-300'"></span>
                        <span class="w-2 h-2 rounded-full" :class="row.respondentsCount >= 2 ? 'bg-emerald-500' : 'bg-slate-300'"></span>
                        <span class="text-[11px] text-slate-500 font-medium ml-1">({{ row.respondentsCount }} Responden)</span>
                      </div>
                    </td>

                    <td class="px-6 py-4 text-slate-500 font-medium whitespace-nowrap">{{ row.date }}</td>
                  </tr>

                  <!-- DETAIL ACCORDION -->
                  <tr v-if="expandedRowId === row.id" class="bg-slate-50/90">
                    <td colspan="5" class="p-6 border-b border-slate-200 shadow-inner whitespace-normal">
                      <div class="space-y-6 w-full max-w-6xl mx-auto">
                        
                        <div v-if="row.respondentsList.length === 0" class="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-amber-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <h4 class="text-sm font-bold text-amber-800">Klien Belum Mengisi Kuesioner</h4>
                          <p class="text-xs text-amber-600 mt-1">Belum ada rincian jawaban evaluasi, loyalitas, maupun saran yang terekam dari perusahaan ini.</p>
                        </div>

                        <template v-else>
                          <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">PILIH DUDUKAN RESPONDEN:</span>
                              <div class="flex flex-wrap gap-2">
                                <button 
                                  v-for="(resp, rIdx) in row.respondentsList" 
                                  :key="resp.id"
                                  @click="activeRespondentIndex[row.id] = rIdx"
                                  :class="activeRespondentIndex[row.id] === rIdx 
                                    ? 'bg-[#004B87] text-white shadow-md border-[#004B87]' 
                                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'"
                                  class="px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer"
                                >
                                  <span class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                                    {{ rIdx + 1 }}
                                  </span>
                                  <span>{{ resp.nama_pengisi || 'Tanpa Nama' }}</span>
                                  <span class="opacity-75 font-normal">({{ resp.jabatan || 'Tanpa Jabatan' }})</span>
                                </button>
                              </div>
                            </div>

                            <div class="flex items-center gap-3 shrink-0">
                              <div class="text-right text-xs bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                                <span class="text-slate-400 font-medium">Tanggal Pengisian: </span>
                                <span class="font-bold text-slate-800">
                                  {{ currentActiveRespondent(row).dateFormatted }}
                                </span>
                              </div>

                              <button 
                                v-if="isSuperAdmin" 
                                @click="openDeleteModal(currentActiveRespondent(row))"
                                class="px-3 py-2 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                                title="Hapus Data Responden Ini"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                <span>Hapus</span>
                              </button>
                            </div>
                          </div>

                          <div v-if="currentActiveRespondent(row)" class="space-y-6">
                            
                            <!-- PROFIL RESPONDEN -->
                            <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div class="flex items-center gap-3">
                                  <div class="w-10 h-10 rounded-full bg-blue-50 text-[#004B87] border border-blue-100 flex items-center justify-center font-extrabold text-sm shrink-0">
                                    {{ currentActiveRespondent(row).nama_pengisi?.substring(0, 2).toUpperCase() || 'RS' }}
                                  </div>
                                  <div>
                                    <h4 class="text-sm font-extrabold text-slate-800 leading-tight">
                                      {{ currentActiveRespondent(row).nama_pengisi || 'Tanpa Nama' }}
                                    </h4>
                                    <p class="text-xs text-slate-500 font-medium mt-0.5">
                                      {{ currentActiveRespondent(row).jabatan || 'Tanpa Jabatan' }}
                                    </p>
                                  </div>
                                </div>

                                <div class="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
                                  <a 
                                    :href="currentActiveRespondent(row).phone !== '-' ? `https://wa.me/${currentActiveRespondent(row).phone.replace(/^0/, '62')}` : '#'" 
                                    target="_blank"
                                    class="flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-lg font-bold hover:bg-emerald-100 transition-colors cursor-pointer"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>{{ currentActiveRespondent(row).phone }}</span>
                                  </a>

                                  <a 
                                    :href="currentActiveRespondent(row).email !== '-' ? `mailto:${currentActiveRespondent(row).email}` : '#'" 
                                    class="flex items-center gap-2 bg-blue-50 text-[#004B87] border border-blue-200 px-3 py-1.5 rounded-lg font-bold hover:bg-blue-100 transition-colors cursor-pointer"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#004B87]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>{{ currentActiveRespondent(row).email }}</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            
                            <!-- TABEL EVALUASI -->
                            <div class="space-y-3">
                              <div class="flex items-center justify-between">
                                <div class="flex items-center gap-2">
                                  <span class="bg-[#004B87] text-white text-[10px] font-bold px-2 py-0.5 rounded">Bagian A</span>
                                  <h4 class="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                                    Rincian Evaluasi Layanan (Skala 1 - 4)
                                  </h4>
                                </div>
                                <div class="flex items-center gap-2 text-[10px] font-bold">
                                  <span class="px-2 py-0.5 rounded bg-blue-50 text-[#004B87] border border-blue-100">Rata-rata Kepuasan: {{ calculateAvg(currentActiveRespondent(row).evalQuestions, 'satisfaction') }}</span>
                                  <span class="px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-100">Rata-rata Kepentingan: {{ calculateAvg(currentActiveRespondent(row).evalQuestions, 'importance') }}</span>
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
                                    <tr v-for="q in currentActiveRespondent(row).evalQuestions" :key="q.id" class="hover:bg-slate-50/60 transition-colors">
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

                            <!-- LOYALITAS -->
                            <div class="space-y-3 pt-2">
                              <div class="flex items-center gap-2">
                                <span class="bg-[#004B87] text-white text-[10px] font-bold px-2 py-0.5 rounded">Bagian B</span>
                                <h4 class="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                                  Pengukuran Loyalitas Pelanggan (Opsi Terpilih)
                                </h4>
                              </div>

                              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div 
                                  v-for="loy in currentActiveRespondent(row).loyaltyAnswers" 
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

                            <!-- SARAN -->
                            <div class="space-y-2 pt-2">
                              <div class="flex items-center gap-2">
                                <span class="bg-[#004B87] text-white text-[10px] font-bold px-2 py-0.5 rounded">Bagian C</span>
                                <h4 class="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                                  Catatan Saran & Kritik Responden
                                </h4>
                              </div>
                              
                              <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden">
                                <div class="absolute top-0 left-0 bottom-0 w-1 bg-[#004B87]"></div>
                                <p v-if="currentActiveRespondent(row).feedback && currentActiveRespondent(row).feedback.trim()" class="text-xs text-slate-800 font-medium leading-relaxed italic pl-2">
                                  "{{ currentActiveRespondent(row).feedback }}"
                                </p>
                                <p v-else class="text-xs text-slate-400 italic pl-2">
                                  Tidak ada catatan masukan tertulis dari responden ini.
                                </p>
                              </div>
                            </div>

                          </div>

                        </template>

                      </div>
                    </td>
                  </tr>

                  <!-- ACCORDION CONTROL -->
                  <tr v-if="expandedRowId !== row.id">
                    <td colspan="5" class="p-0">
                      <div @click="toggleRow(row.id)" class="w-full bg-blue-50/30 hover:bg-blue-50/70 text-slate-400 hover:text-[#004B87] flex items-center justify-center py-1.5 transition-colors cursor-pointer border-b border-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                      </div>
                    </td>
                  </tr>
                  <tr v-else>
                    <td colspan="5" class="p-0">
                      <div @click="toggleRow(null)" class="w-full bg-sky-100/40 hover:bg-sky-100/70 text-[#004B87] flex items-center justify-center py-1.5 transition-colors cursor-pointer border-b border-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m4.5 15.75 7.5-7.5 7.5 7.5" /></svg>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- PAGINATION -->
            <div class="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-600">
              <div>
                Menampilkan <span class="font-bold text-[#004B87]">{{ filteredRespondents.length }}</span> dari <span class="font-bold text-slate-800">{{ allFilteredData.length }}</span> data
              </div>

              <div class="flex items-center gap-2">
                <button 
                  @click="currentPage--" 
                  :disabled="currentPage === 1"
                  class="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-white transition-all cursor-pointer"
                >
                  Sebelumnya
                </button>

                <span class="px-3 py-1.5 font-bold text-[#004B87]">
                  Halaman {{ currentPage }} dari {{ totalPages }}
                </span>

                <button 
                  @click="currentPage++" 
                  :disabled="currentPage >= totalPages"
                  class="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-white transition-all cursor-pointer"
                >
                  Selanjutnya
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>

    <!-- MODAL HAPUS -->
    <div 
      v-if="showDeleteModal" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm transition-all"
    >
      <div class="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
        <div class="bg-[#004B87] px-6 py-4 flex items-center justify-between text-white">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-rose-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3 class="text-base font-extrabold tracking-tight">Konfirmasi Hapus Responden</h3>
          </div>
          <button @click="showDeleteModal = false" class="text-white/80 hover:text-white transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="p-6 space-y-4">
          <div class="bg-rose-50 border border-rose-100 rounded-xl p-4">
            <p class="text-xs font-bold text-rose-600 uppercase tracking-wider mb-1">PERINGATAN!</p>
            <p class="text-xs text-rose-700 leading-relaxed font-medium">
              Apakah Anda yakin ingin menghapus data responden berikut? Seluruh jawaban evaluasi & loyalitas yang diisikan akan dihapus secara <span class="font-extrabold underline">permanen</span>.
            </p>
          </div>

          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <div>
              <span class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Nama Responden</span>
              <p class="text-sm font-extrabold text-[#004B87]">{{ targetRespondent?.nama_pengisi || 'Tanpa Nama' }}</p>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Jabatan</span>
              <p class="text-xs font-bold text-slate-700">{{ targetRespondent?.jabatan || 'Tanpa Jabatan' }}</p>
            </div>
          </div>

          <div class="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
            <button 
              type="button" 
              @click="showDeleteModal = false"
              class="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Batal
            </button>
            
            <button 
              type="button"
              @click="confirmDeleteRespondent"
              :disabled="isDeleting"
              style="background-color: #e11d48 !important; color: #ffffff !important;"
              class="px-6 py-2.5 hover:opacity-90 font-extrabold text-xs rounded-xl shadow-md transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-1.5 min-w-[140px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span>{{ isDeleting ? 'Menghapus...' : 'Hapus Responden' }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL LOGOUT -->
    <div 
      v-if="showLogoutModal" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm transition-all"
    >
      <div class="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-sm overflow-hidden transform transition-all">
        <div class="bg-[#004B87] px-6 py-4 flex items-center justify-between text-white">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12" />
            </svg>
            <h3 class="text-base font-extrabold tracking-tight">Konfirmasi Keluar</h3>
          </div>
          <button @click="showLogoutModal = false" class="text-white/80 hover:text-white transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="p-6 space-y-4 text-center">
          <div class="w-12 h-12 bg-rose-50 border border-rose-100 rounded-full flex items-center justify-center mx-auto text-rose-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12" />
            </svg>
          </div>

          <div>
            <h4 class="text-sm font-extrabold text-slate-800">Keluar dari Portal Admin?</h4>
            <p class="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
              Sesi Anda akan diakhiri dan Anda perlu masuk kembali untuk mengakses portal.
            </p>
          </div>

          <div class="pt-3 flex items-center justify-center gap-3 border-t border-slate-100">
            <button 
              type="button" 
              @click="showLogoutModal = false"
              class="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs rounded-xl transition-colors cursor-pointer w-full"
            >
              Batal
            </button>
            
            <button 
              type="button"
              @click="confirmLogout"
              style="background-color: #e11d48 !important; color: #ffffff !important;"
              class="px-5 py-2.5 hover:opacity-90 font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer w-full flex items-center justify-center gap-1.5"
            >
              <span>Ya, Keluar</span>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const supabase = useSupabaseClient()

const isSidebarOpen = ref(true)
const isLoading = ref(true)
const isDeleting = ref(false)

const showDeleteModal = ref(false)
const targetRespondent = ref(null)

// STATE NOTIFIKASI LONCENG
const isNotificationOpen = ref(false)
const notificationsList = ref([])
const hasUnread = ref(false)
const unreadCount = ref(0)

const closeSidebarAndNotif = () => {
  isNotificationOpen.value = false
  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false
  }
}

const toggleNotification = () => {
  isNotificationOpen.value = !isNotificationOpen.value
  if (isNotificationOpen.value) {
    hasUnread.value = false
    unreadCount.value = 0
    localStorage.setItem('notif_read_status', 'true')
  }
}

// FETCH NOTIFIKASI SUPABASE
const fetchNotifications = async (isNewInsert = false) => {
  try {
    const { data: responses } = await supabase
      .from('questionnaire_responses')
      .select('id, created_at, respondent_id')
      .order('created_at', { ascending: false })
      .limit(5)

    if (!responses) return

    const { data: respondentsList } = await supabase
      .from('respondents')
      .select('id, company_name, nama_pengisi, jabatan')

    notificationsList.value = responses.map(res => {
      const match = respondentsList?.find(r => r.id === res.respondent_id || r.id === res.id)
      return {
        id: res.id,
        company_name: match?.company_name || 'Perusahaan Baru',
        nama_pengisi: match?.nama_pengisi || 'Anonim',
        time_ago: new Date(res.created_at).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      }
    })

    const isRead = localStorage.getItem('notif_read_status') === 'true'

    if (isNewInsert) {
      localStorage.removeItem('notif_read_status')
      hasUnread.value = true
      unreadCount.value = unreadCount.value + 1
    } else if (!isRead && notificationsList.value.length > 0) {
      hasUnread.value = true
      unreadCount.value = notificationsList.value.length
    } else {
      hasUnread.value = false
      unreadCount.value = 0
    }
  } catch (err) {
    console.error('Gagal mengambil notifikasi:', err)
  }
}

const navigateToRespondents = () => {
  isNotificationOpen.value = false
  router.push('/admin/respondents')
}

const userRole = ref('')
const isSuperAdmin = computed(() => userRole.value === 'superadmin')

const showLogoutModal = ref(false)

const triggerLogoutPrompt = () => {
  showLogoutModal.value = true
}

const confirmLogout = () => {
  localStorage.removeItem('is_admin_logged_in')
  localStorage.removeItem('user_role')
  localStorage.removeItem('notif_read_status')
  showLogoutModal.value = false
  router.push('/')
}

const searchQuery = ref('')
const selectedFillStatus = ref('')
const selectedDateSort = ref('terbaru')
const hideInactive = ref(false)

const currentPage = ref(1)
const itemsPerPage = ref(20)

const expandedRowId = ref(null)
const activeRespondentIndex = ref({})

const allClientsList = ref([])
const combinedRespondentsList = ref([])
const masterQuestions = ref([])

const loyaltyDefinitions = [
  {
    id: 13,
    title: '1. KEPUASAN PELANGGAN',
    options: {
      1: 'Saya menyukai layanan jasa air baku dari pihak selain Perum Jasa Tirta I yang lebih menguntungkan usaha saya.',
      2: 'Saya tidak mengalami ketidakpuasan selama menjadi pelanggan layanan jasa air baku Perum Jasa Tirta I dan saya sudah terbiasa menjadi pelanggan.',
      3: 'Saya puas dengan layanan jasa air baku Perum Jasa Tirta I, tapi bila ada layanan sejenis dari pihak lain yang lebih murah saya akan beralih.',
      4: 'Saya menyukai layanan jasa air baku Perum Jasa Tirta I dan akan lebih puas jika menggunakan layanan PJT I dibanding pihak lain.',
      5: 'Saya sangat puas dengan layanan jasa air baku Perum Jasa Tirta I dan saya akan merekomendasikan layanan tersebut kepada rekan-rekan saya.'
    }
  },
  {
    id: 14,
    title: '2. KEPERCAYAAN (TRUST)',
    options: {
      1: 'Saya tidak memiliki kepercayaan khusus terhadap Perum Jasa Tirta I, saya lebih mengutamakan prinsip ekonomi dalam bisnis saya.',
      2: 'Saya biasa mempercayakan pemenuhan kebutuhan air baku saya pada layanan jasa air baku Perum Jasa Tirta I.',
      3: 'Saya percaya pada layanan Perum Jasa Tirta I, tapi ada kemungkinan saya beralih ke penyedia jasa lain yang lebih terpercaya.',
      4: 'Saya benar-benar percaya pada kerjasama yang saya jalin dengan Perum Jasa Tirta I.',
      5: 'Saya bangga mempercayakan pemenuhan air baku saya pada layanan jasa air Perum Jasa Tirta I.'
    }
  },
  {
    id: 15,
    title: '3. KETERIKATAN',
    options: {
      1: 'Saya sering berpindah-pindah penyedia jasa layanan air baku, saya jarang terikat pada satu jenis layanan/perusahaan.',
      2: 'Sudah menjadi kebiasaan saya meminta Perum Jasa Tirta I untuk memenuhi kebutuhan air baku saya.',
      3: 'Saya tidak pernah dikecewakan oleh PJT I, tapi saya tidak memiliki komitmen khusus untuk selalu bekerjasama.',
      4: 'Saya yakin layanan PJT I lebih baik dari pihak lain, mungkin saya akan terus melanjutkan kerjasama.',
      5: 'Saya yakin layanan PJT I lebih baik dari pihak lain dan saya memiliki komitmen untuk terus bekerjasama.'
    }
  },
  {
    id: 16,
    title: '4. PERMINTAAN ULANG',
    options: {
      1: 'Saya jarang / tidak pernah melakukan permintaan ulang terhadap layanan jasa air baku PJT I secara berturut-turut.',
      2: 'Saya biasa meminta layanan jasa air baku PJT I, tapi jarang melakukan permintaan ulang secara berturut-turut.',
      3: 'Setidaknya saya pernah melakukan permintaan ulang terhadap layanan jasa air baku PJT I sebanyak tiga kali berturut-turut.',
      4: 'Saya selalu meminta layanan jasa air baku Perum Jasa Tirta I karena saya menyukai layanan tersebut.',
      5: 'Saya akan selalu menjadi pelanggan setia PJT I dan selalu meminta layanannya karena bangga menjalin kerjasama.'
    }
  },
  {
    id: 17,
    title: '5. WORD-OF-MOUTH BEHAVIOR',
    options: {
      1: 'Saya tidak pernah berniat merekomendasikan layanan jasa air baku Perum Jasa Tirta I kepada rekan atau kolega saya.',
      2: 'Saya biasa menggunakan layanan PJT I dan merekomendasikannya bila ada rekan yang menanyakannya.',
      3: 'Saya puas menggunakan layanan PJT I, bila ada rekan meminta rekomendasi maka saya merekomendasikannya sebagai alternatif.',
      4: 'Saya menyukai layanan PJT I dan merekomendasikan layanannya bila ada rekan yang membutuhkan informasi.',
      5: 'Saya senang dan bangga menjadi pelanggan PJT I, sehingga tanpa diminta saya akan menceritakan pengalaman positif kepada rekan.'
    }
  }
]

const currentActiveRespondent = (row) => {
  if (!row.respondentsList || row.respondentsList.length === 0) return null
  const idx = activeRespondentIndex.value[row.id] || 0
  return row.respondentsList[idx] || row.respondentsList[0]
}

const openDeleteModal = (resp) => {
  if (!resp || !resp.id) return
  targetRespondent.value = resp
  showDeleteModal.value = true
}

const confirmDeleteRespondent = async () => {
  if (!targetRespondent.value || !targetRespondent.value.id) return

  try {
    isDeleting.value = true

    await supabase.from('questionnaire_responses').delete().eq('respondent_id', targetRespondent.value.id)
    const { error } = await supabase.from('respondents').delete().eq('id', targetRespondent.value.id)

    if (error) throw error

    showDeleteModal.value = false
    targetRespondent.value = null
    fetchData()
  } catch (err) {
    alert('Gagal menghapus data responden: ' + err.message)
  } finally {
    isDeleting.value = false
  }
}

const statusCounts = computed(() => {
  let fullyFilled = 0
  let partiallyFilled = 0
  let unfilled = 0
  let totalRespondentsCount = 0

  combinedRespondentsList.value.forEach(r => {
    totalRespondentsCount += r.respondentsCount
    if (r.respondentsCount === 2) fullyFilled++
    else if (r.respondentsCount === 1) partiallyFilled++
    else unfilled++
  })

  return { fullyFilled, partiallyFilled, unfilled, totalRespondentsCount }
})

const allFilteredData = computed(() => {
  let result = combinedRespondentsList.value.filter(item => {
    const matchesSearch = !searchQuery.value || 
      item.company.toLowerCase().includes(searchQuery.value.toLowerCase())

    let matchesFillStatus = true
    if (selectedFillStatus.value === 'lengkap') matchesFillStatus = item.respondentsCount === 2
    if (selectedFillStatus.value === 'mengisi') matchesFillStatus = item.respondentsCount === 1
    if (selectedFillStatus.value === 'belum') matchesFillStatus = item.respondentsCount === 0

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

const filteredRespondents = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return allFilteredData.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(allFilteredData.value.length / itemsPerPage.value) || 1
})

watch([searchQuery, selectedFillStatus, hideInactive], () => {
  currentPage.value = 1
})

const resetFilters = () => {
  searchQuery.value = ''
  selectedFillStatus.value = ''
  selectedDateSort.value = 'terbaru'
  hideInactive.value = false
  currentPage.value = 1
}

const toggleRow = (rowId) => {
  expandedRowId.value = expandedRowId.value === rowId ? null : rowId
  if (rowId && activeRespondentIndex.value[rowId] === undefined) {
    activeRespondentIndex.value[rowId] = 0
  }
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

    const clientsRes = await supabase
      .from('clients')
      .select('id, company_name, status')
      .order('id', { ascending: true })

    if (clientsRes.error) console.error('Error Klien:', clientsRes.error.message)
    allClientsList.value = clientsRes.data || []

    const questionsRes = await supabase
      .from('questions')
      .select('id, question_text')
      .order('id', { ascending: true })

    if (questionsRes.error) console.error('Error Questions:', questionsRes.error.message)
    masterQuestions.value = questionsRes.data || []

    const respondentsRes = await supabase
      .from('respondents')
      .select('id, company_name, nama_pengisi, jabatan, phone, email')

    if (respondentsRes.error) console.error('Error Respondents:', respondentsRes.error.message)
    const respondentsData = respondentsRes.data || []

    const responsesRes = await supabase
      .from('questionnaire_responses')
      .select('*')

    if (responsesRes.error) console.error('Error Responses:', responsesRes.error.message)
    const responsesData = responsesRes.data || []

    const responsesMap = new Map()
    responsesData.forEach(res => {
      responsesMap.set(res.respondent_id, res)
    })

    const respondentsByCompanyMap = new Map()
    respondentsData.forEach(r => {
      const cleanName = (r.company_name || '').trim().toLowerCase()
      if (!respondentsByCompanyMap.has(cleanName)) {
        respondentsByCompanyMap.set(cleanName, [])
      }
      respondentsByCompanyMap.get(cleanName).push(r)
    })

    combinedRespondentsList.value = allClientsList.value.map(client => {
      const clientNameClean = (client.company_name || '').trim().toLowerCase()
      const matchedRespondents = respondentsByCompanyMap.get(clientNameClean) || []

      const respondentsListFormatted = matchedRespondents.map(r => {
        const matchResponse = responsesMap.get(r.id)
        const ans = matchResponse ? (matchResponse.answers || {}) : {}

        const evalQuestions = masterQuestions.value
          .filter(q => q.id <= 12)
          .map(q => ({
            id: q.id,
            text: q.question_text,
            satisfaction: matchResponse ? (ans[`q${q.id}_kepuasan`] || 0) : 0,
            importance: matchResponse ? (ans[`q${q.id}_kepentingan`] || 0) : 0
          }))

        const loyaltyAnswers = loyaltyDefinitions.map((loy, lIdx) => {
          const val = matchResponse 
            ? (ans[`loyalitas_${loy.id}`] || ans[`loyalitas_${lIdx + 1}`] || 0) 
            : 0

          return {
            id: loy.id,
            title: loy.title,
            selectedVal: val ? `Opsi ${val}` : '-',
            selectedText: (val && loy.options[val]) ? loy.options[val] : 'Belum dipilih / Tidak ada data'
          }
        })

        return {
          id: r.id,
          nama_pengisi: r.nama_pengisi,
          jabatan: r.jabatan,
          phone: r.phone || '-', 
          email: r.email || '-',
          rawDate: matchResponse ? matchResponse.created_at : null,
          dateFormatted: matchResponse ? formatDate(matchResponse.created_at) : 'Belum Selesai',
          feedback: matchResponse ? matchResponse.feedback : '',
          evalQuestions,
          loyaltyAnswers
        }
      })

      const lastDate = respondentsListFormatted.length > 0 
        ? respondentsListFormatted[respondentsListFormatted.length - 1].rawDate 
        : null

      return {
        id: client.id,
        company: client.company_name,
        clientStatus: client.status || 'aktif',
        respondentsCount: respondentsListFormatted.length,
        rawDate: lastDate,
        date: lastDate ? formatDate(lastDate) : 'Belum Mengisi',
        respondentsList: respondentsListFormatted
      }
    })

  } catch (err) {
    console.error('Gagal memuat data responden:', err.message)
  } finally {
    isLoading.value = false
  }
}

let realtimeChannel = null

onMounted(() => {
  userRole.value = localStorage.getItem('user_role') || 'admin'
  fetchData()
  fetchNotifications()

  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false
  }

  realtimeChannel = supabase
    .channel('public:respondents_questionnaire_responses')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'questionnaire_responses' }, () => {
      fetchNotifications(true)
      fetchData()
    })
    .subscribe()
})

onUnmounted(() => {
  if (realtimeChannel) {
    supabase.removeChannel(realtimeChannel)
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