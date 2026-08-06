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
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v-2a2 2 0 01-2-2v-2z" /></svg>
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
          <span>Data Responden</span>
        </NuxtLink>

        <NuxtLink 
          to="/admin/questions" 
          :class="route.path === '/admin/questions' ? 'bg-blue-50 text-[#004B87] font-bold border-l-4 border-[#004B87]' : 'text-slate-600 hover:bg-slate-50 font-medium'"
          class="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
          </svg>
          <span>Kuisioner</span>
        </NuxtLink>
      </nav>

      <!-- TOMBOL LOGOUT SIDEBAR -->
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
          <button @click="isSidebarOpen = !isSidebarOpen" class="text-slate-500 hover:text-[#004B87] transition-colors focus:outline-none bg-white border border-slate-200 hover:bg-slate-50 p-1.5 rounded-lg shadow-sm">
            <svg v-if="isSidebarOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <h1 class="text-base sm:text-xl font-extrabold text-slate-800 tracking-tight">Perum Jasa Tirta 1</h1>
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

      <!-- MAIN SCROLLABLE CONTENT BODY (KLIEN) -->
      <div class="flex-1 overflow-auto p-4 sm:p-8 custom-scrollbar">
        <div class="max-w-7xl mx-auto space-y-6">
          
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Daftar Hak Akses Klien</h2>
              <p class="text-xs text-slate-500 mt-0.5">Kelola status dan otorisasi responden terdaftar untuk kuesioner.</p>
            </div>
            
            <div class="flex items-center gap-3">
              <!-- FITUR SUPERADMIN: TAMBAH KLIEN BARU -->
              <button 
                v-if="isSuperAdmin" 
                @click="openAddModal"
                class="px-4 py-2 bg-[#004B87] hover:bg-[#003865] text-white text-xs font-bold rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span>Tambah Klien</span>
              </button>

              <div class="text-xs text-slate-500 font-medium bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
                Total Klien: <span class="font-bold text-[#004B87]">{{ filteredClientList.length }}</span> / {{ clientList.length }}
              </div>
            </div>
          </div>

          <!-- SEARCHBAR & FILTER TOOLBAR -->
          <div class="bg-white p-4 border border-slate-200 rounded-xl shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
            
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

            <div class="flex flex-wrap items-center gap-2 w-full md:w-auto">
              
              <select v-model="selectedCategory" class="border border-slate-200 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#004B87] bg-white">
                <option value="">Semua Kategori</option>
                <option value="Pemanfaat">Pemanfaat</option>
                <option value="Pihak Yang Berkepentingan (PYB)">Pihak Yang Berkepentingan (PYB)</option>
              </select>

              <select v-model="selectedSubCategory" class="border border-slate-200 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#004B87] bg-white">
                <option value="">Semua Sub Kategori</option>
                <option value="PLTA">PLTA</option>
                <option value="PDAM">PDAM</option>
                <option value="Industri">Industri</option>
              </select>

              <select v-model="selectedStatus" class="border border-slate-200 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#004B87] bg-white">
                <option value="">Semua Status</option>
                <option value="aktif">Aktif</option>
                <option value="tidak aktif">Tidak Aktif</option>
              </select>

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
                  <th v-if="isSuperAdmin" class="px-6 py-3.5 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 font-medium text-slate-700">
                <tr v-if="isLoading">
                  <td :colspan="isSuperAdmin ? 6 : 5" class="px-6 py-8 text-center text-slate-400 font-semibold animate-pulse">Memuat data klien...</td>
                </tr>
                <tr v-else-if="filteredClientList.length === 0">
                  <td :colspan="isSuperAdmin ? 6 : 5" class="px-6 py-8 text-center text-slate-400 font-semibold">Tidak ada data klien yang sesuai dengan filter/pencarian.</td>
                </tr>
                <tr v-else v-for="item in filteredClientList" :key="item.id" class="hover:bg-slate-50 transition-colors">
                  <td class="px-6 py-4 font-bold text-[#004B87]">{{ item.company_name }}</td>
                  <td class="px-6 py-4">{{ item.category || '-' }}</td>
                  <td class="px-6 py-4">{{ item.sub_category || '-' }}</td>
                  
                  <td class="px-6 py-4">
                    <span 
                      :class="item.status === 'aktif' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : 'bg-rose-100 text-rose-700 border-rose-200'"
                      class="px-3 py-1 rounded-full text-[10px] font-bold border uppercase whitespace-nowrap inline-block text-center min-w-[70px]"
                    >
                      {{ item.status || 'tidak aktif' }}
                    </span>
                  </td>
                  
                  <td class="px-6 py-4 text-slate-500">{{ item.keterangan || '-' }}</td>

                  <td v-if="isSuperAdmin" class="px-6 py-4 text-center">
                    <div class="flex items-center justify-center gap-2">
                      
                      <!-- TOGGLE STATUS -->
                      <button 
                        @click="toggleStatus(item)" 
                        type="button"
                        class="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
                        :class="item.status === 'aktif' ? 'bg-emerald-500' : 'bg-slate-300'"
                        :title="item.status === 'aktif' ? 'Non-aktifkan Klien' : 'Aktifkan Klien'"
                      >
                        <span 
                          class="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out"
                          :class="item.status === 'aktif' ? 'translate-x-4' : 'translate-x-0'"
                        ></span>
                      </button>

                      <!-- EDIT KETERANGAN -->
                      <button 
                        @click="openEditModal(item)" 
                        type="button"
                        class="p-1.5 bg-slate-100 hover:bg-blue-50 text-slate-500 hover:text-[#004B87] rounded-lg border border-slate-200 hover:border-blue-200 transition-all cursor-pointer"
                        title="Edit Keterangan"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                      </button>

                      <!-- HAPUS KLIEN -->
                      <button 
                        @click="triggerDeletePrompt(item)" 
                        type="button"
                        class="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-500 hover:text-rose-700 rounded-lg border border-rose-200 transition-all cursor-pointer"
                        title="Hapus Klien"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </button>

                    </div>
                  </td>

                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

    </div>

    <!-- MODAL POP-UP EDIT KETERANGAN KLIEN -->
    <div 
      v-if="showEditModal" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm transition-all"
    >
      <div class="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
        
        <div class="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 class="text-base font-extrabold text-slate-900">Edit Keterangan Klien</h3>
          <button @click="showEditModal = false" class="text-slate-400 hover:text-slate-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form @submit.prevent="saveKeterangan" class="p-6 space-y-4">
          <div>
            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Nama Perusahaan</label>
            <p class="text-sm font-extrabold text-[#004B87]">{{ editingItem?.company_name }}</p>
          </div>

          <div class="space-y-1.5">
            <label class="block text-xs font-bold text-slate-700">Keterangan Tambahan <span class="text-rose-500">*</span></label>
            <input 
              v-model="keteranganInput" 
              type="text" 
              required
              placeholder="Contoh: Terdaftar Otomatis / Khusus VIP"
              class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold focus:bg-white focus:ring-2 focus:ring-[#004B87] focus:outline-none transition-all"
            />
          </div>

          <div class="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
            <button 
              type="button" 
              @click="showEditModal = false"
              class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Batal
            </button>
            <button 
              type="submit"
              :disabled="isSaving"
              class="px-5 py-2 bg-[#004B87] hover:bg-[#003865] text-white font-bold text-xs rounded-xl shadow-md transition-all disabled:opacity-50 cursor-pointer"
            >
              {{ isSaving ? 'Menyimpan...' : 'Simpan Keterangan' }}
            </button>
          </div>
        </form>

      </div>
    </div>

    <!-- MODAL POP-UP TAMBAH KLIEN BARU -->
    <div 
      v-if="showAddModal" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm transition-all"
    >
      <div class="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
        
        <div class="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 class="text-base font-extrabold text-slate-900">Tambah Klien Baru</h3>
          <button @click="showAddModal = false" class="text-slate-400 hover:text-slate-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form @submit.prevent="saveNewClient" class="p-6 space-y-4">
          <div class="space-y-1.5">
            <label class="block text-xs font-bold text-slate-700">Nama Perusahaan / Instansi <span class="text-rose-500">*</span></label>
            <input 
              v-model="newClient.company_name" 
              type="text" 
              required
              placeholder="Contoh: PT PLN Nusantara Power"
              class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold focus:bg-white focus:ring-2 focus:ring-[#004B87] focus:outline-none transition-all"
            />
          </div>

          <div class="space-y-1.5">
            <label class="block text-xs font-bold text-slate-700">Kategori <span class="text-rose-500">*</span></label>
            <select 
              v-model="newClient.category" 
              required
              class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#004B87] focus:outline-none transition-all"
            >
              <option value="Pemanfaat">Pemanfaat</option>
              <option value="Pihak Yang Berkepentingan (PYB)">Pihak Yang Berkepentingan (PYB)</option>
            </select>
          </div>

          <div class="space-y-1.5">
            <label class="block text-xs font-bold text-slate-700">Sub Kategori</label>
            <select 
              v-model="newClient.sub_category" 
              class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#004B87] focus:outline-none transition-all"
            >
              <option value="">-- Tanpa Sub Kategori --</option>
              <option value="PLTA">PLTA</option>
              <option value="PDAM">PDAM</option>
              <option value="Industri">Industri</option>
            </select>
          </div>

          <div class="space-y-1.5">
            <label class="block text-xs font-bold text-slate-700">Keterangan</label>
            <input 
              v-model="newClient.keterangan" 
              type="text" 
              placeholder="Contoh: Klien Baru 2026"
              class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold focus:bg-white focus:ring-2 focus:ring-[#004B87] focus:outline-none transition-all"
            />
          </div>

          <div class="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
            <button 
              type="button" 
              @click="showAddModal = false"
              class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Batal
            </button>
            <button 
              type="submit"
              :disabled="isSaving"
              class="px-5 py-2 bg-[#004B87] hover:bg-[#003865] text-white font-bold text-xs rounded-xl shadow-md transition-all disabled:opacity-50 cursor-pointer"
            >
              {{ isSaving ? 'Menyimpan...' : 'Tambah Klien' }}
            </button>
          </div>
        </form>

      </div>
    </div>

    <!-- MODAL POP-UP KONFIRMASI HAPUS KLIEN -->
    <div 
      v-if="showDeleteModal" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm transition-all"
    >
      <div class="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-sm overflow-hidden transform transition-all">
        
        <div class="bg-rose-600 px-6 py-4 flex items-center justify-between text-white">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <h3 class="text-base font-extrabold tracking-tight">Hapus Klien</h3>
          </div>
          <button @click="showDeleteModal = false" class="text-white/80 hover:text-white transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="p-6 space-y-4 text-center">
          <div class="w-12 h-12 bg-rose-50 border border-rose-100 rounded-full flex items-center justify-center mx-auto text-rose-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </div>

          <div>
            <h4 class="text-sm font-extrabold text-slate-800">Apakah Anda Yakin?</h4>
            <p class="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
              Klien <span class="font-bold text-rose-600">"{{ clientToDelete?.company_name }}"</span> akan dihapus permanen dari database.
            </p>
          </div>

          <div class="pt-3 flex items-center justify-center gap-3 border-t border-slate-100">
            <button 
              type="button" 
              @click="showDeleteModal = false"
              class="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs rounded-xl transition-colors cursor-pointer w-full"
            >
              Batal
            </button>
            
            <button 
              type="button"
              @click="confirmDeleteClient"
              :disabled="isDeleting"
              style="background-color: #e11d48 !important; color: #ffffff !important;"
              class="px-5 py-2.5 hover:opacity-90 font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer w-full flex items-center justify-center gap-1.5 disabled:opacity-50"
            >
              <span>{{ isDeleting ? 'Menghapus...' : 'Ya, Hapus' }}</span>
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- MODAL POP-UP KONFIRMASI LOGOUT -->
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const supabase = useSupabaseClient()

const isSidebarOpen = ref(true)
const isLoading = ref(true)
const isSaving = ref(false)
const clientList = ref([])

// STATE NOTIFIKASI LONCENG
const isNotificationOpen = ref(false)
const notificationsList = ref([])
const hasUnread = ref(false)
const unreadCount = ref(0)

const toggleNotification = () => {
  isNotificationOpen.value = !isNotificationOpen.value
  if (isNotificationOpen.value) {
    hasUnread.value = false
    unreadCount.value = 0
    localStorage.setItem('notif_read_status', 'true')
  }
}

// HAK AKSES SUPERADMIN
const userRole = ref('')
const isSuperAdmin = computed(() => userRole.value === 'superadmin')

// STATE MODAL LOGOUT
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

// STATE MODAL EDIT & TAMBAH KLIEN
const showEditModal = ref(false)
const editingItem = ref(null)
const keteranganInput = ref('')

const showAddModal = ref(false)
const newClient = ref({
  company_name: '',
  category: 'Pemanfaat',
  sub_category: 'Industri',
  keterangan: 'Klien Baru'
})

// STATE MODAL HAPUS KLIEN
const showDeleteModal = ref(false)
const clientToDelete = ref(null)
const isDeleting = ref(false)

// STATE FILTER
const searchQuery = ref('')
const selectedCategory = ref('')
const selectedSubCategory = ref('')
const selectedStatus = ref('')

// FETCH NOTIFIKASI SUPABASE (DENGAN PEMERIKSAAN LOCALSTORAGE)
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

// TOGGLE STATUS AKTIF / NON-AKTIF
const toggleStatus = async (item) => {
  const nextStatus = item.status === 'aktif' ? 'tidak aktif' : 'aktif'

  try {
    const { error } = await supabase
      .from('clients')
      .update({ status: nextStatus })
      .eq('id', item.id)

    if (error) throw error
    item.status = nextStatus
  } catch (err) {
    alert('Gagal mengubah status: ' + err.message)
  }
}

const openEditModal = (item) => {
  editingItem.value = item
  keteranganInput.value = item.keterangan || ''
  showEditModal.value = true
}

const saveKeterangan = async () => {
  if (!editingItem.value) return

  try {
    isSaving.value = true
    const { error } = await supabase
      .from('clients')
      .update({ keterangan: keteranganInput.value.trim() })
      .eq('id', editingItem.value.id)

    if (error) throw error
    
    editingItem.value.keterangan = keteranganInput.value.trim()
    showEditModal.value = false
  } catch (err) {
    alert('Gagal memperbarui keterangan: ' + err.message)
  } finally {
    isSaving.value = false
  }
}

const openAddModal = () => {
  newClient.value = {
    company_name: '',
    category: 'Pemanfaat',
    sub_category: 'Industri',
    keterangan: 'Klien Baru'
  }
  showAddModal.value = true
}

const saveNewClient = async () => {
  if (!newClient.value.company_name.trim()) return

  try {
    isSaving.value = true
    const { error } = await supabase
      .from('clients')
      .insert([{
        company_name: newClient.value.company_name.trim(),
        category: newClient.value.category,
        sub_category: newClient.value.sub_category || null,
        status: 'aktif',
        keterangan: newClient.value.keterangan.trim()
      }])

    if (error) throw error

    showAddModal.value = false
    fetchClients()
  } catch (err) {
    alert('Gagal menambah klien: ' + err.message)
  } finally {
    isSaving.value = false
  }
}

// BUKA MODAL HAPUS KLIEN
const triggerDeletePrompt = (item) => {
  clientToDelete.value = item
  showDeleteModal.value = true
}

// EKSEKUSI HAPUS KLIEN DARI SUPABASE
const confirmDeleteClient = async () => {
  if (!clientToDelete.value) return

  try {
    isDeleting.value = true
    const { error } = await supabase
      .from('clients')
      .delete()
      .eq('id', clientToDelete.value.id)

    if (error) throw error

    showDeleteModal.value = false
    clientToDelete.value = null
    fetchClients()
  } catch (err) {
    alert('Gagal menghapus klien: ' + err.message)
  } finally {
    isDeleting.value = false
  }
}

const filteredClientList = computed(() => {
  return clientList.value.filter(item => {
    const matchesSearch = !searchQuery.value || 
      item.company_name?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.keterangan?.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesCategory = !selectedCategory.value || item.category === selectedCategory.value

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

// REALTIME SUPABASE LISTENER FOR NOTIFICATIONS
let realtimeChannel = null

onMounted(() => {
  userRole.value = localStorage.getItem('user_role') || 'admin'
  fetchClients()
  fetchNotifications()

  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false
  }

  realtimeChannel = supabase
    .channel('public:klien_questionnaire_responses')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'questionnaire_responses' }, () => {
      fetchNotifications(true)
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