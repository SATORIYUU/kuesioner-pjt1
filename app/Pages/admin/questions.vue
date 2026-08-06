<template>
  <div class="min-h-screen w-full bg-[#F4F7FA] flex font-sans text-slate-800 overflow-x-hidden">
    
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
          @click="closeSidebarAndNotif"
          :class="route.path === '/admin/dashboard' ? 'bg-blue-50 text-[#004B87] font-bold border-l-4 border-[#004B87]' : 'text-slate-600 hover:bg-slate-50 font-medium'"
          class="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2h-2a2 2 0 01-2-2v-2z" /></svg>
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

    <!-- MAIN CONTENT AREA -->
    <div class="flex-1 flex flex-col min-w-0 min-h-screen overflow-y-auto">
      
      <!-- NAVBAR HEADER -->
      <header class="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 sm:px-8 shrink-0 sticky top-0 z-20">
        <div class="flex items-center space-x-4">
          <button @click="isSidebarOpen = !isSidebarOpen" class="text-slate-500 hover:text-[#004B87] transition-colors focus:outline-none bg-white border border-slate-200 hover:bg-slate-50 p-1.5 rounded-lg shadow-sm cursor-pointer">
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

      <main class="p-4 sm:p-8 space-y-6 flex-1 max-w-7xl w-full mx-auto">
        
        <!-- HEADER INTERFACE & TOMBOL TAMBAH -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-1">Daftar Pertanyaan</h2>
            <p class="text-xs sm:text-sm text-slate-400 font-medium">Tambah, edit, atau hapus butir instrumen kuesioner evaluasi dan loyalitas secara langsung.</p>
          </div>
          <button 
            @click="openAddModal" 
            class="bg-[#004B87] hover:bg-sky-900 text-white px-4 py-2 rounded-lg font-bold text-sm shadow flex items-center gap-2 transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            <span>Tambah Pertanyaan</span>
          </button>
        </div>

        <!-- LOADING STATE -->
        <div v-if="isLoading" class="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div class="w-12 h-12 border-4 border-slate-200 border-t-[#004B87] rounded-full animate-spin mb-4"></div>
          <p class="text-slate-500 font-medium">Sinkronisasi daftar pertanyaan kuesioner...</p>
        </div>

        <!-- LIST OF QUESTIONS TABLE -->
        <div v-else class="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm border-collapse">
              <thead class="bg-[#004B87] text-white text-[11px] font-bold uppercase tracking-wider">
                <tr>
                  <th class="px-6 py-4 w-16 text-center">ID</th>
                  <th class="px-6 py-4 w-40">Kategori Utama</th>
                  <th class="px-6 py-4 w-48">Sub-Kategori / Dimensi</th>
                  <th class="px-6 py-4">Isi Pertanyaan / Topik</th>
                  <th class="px-6 py-4 w-32 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 font-semibold text-slate-700">
                <tr v-if="questionsList.length === 0">
                  <td colspan="5" class="px-6 py-12 text-center text-slate-400 font-medium">
                    Belum ada pertanyaan kuesioner di database. Silakan tambah data baru.
                  </td>
                </tr>
                <template v-else v-for="q in questionsList" :key="q.id">
                  <!-- MAIN ROW -->
                  <tr class="hover:bg-slate-50/60 transition-colors">
                    <td class="px-6 py-4 text-center font-bold text-slate-400">Q{{ q.id }}</td>
                    <td class="px-6 py-4">
                      <span 
                        :class="q.kategori === 'Loyalitas Pelanggan' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-blue-50 text-[#004B87] border-blue-100'" 
                        class="px-2.5 py-1 rounded-md text-xs font-bold border uppercase tracking-wide inline-block"
                      >
                        {{ q.kategori || 'Evaluasi Layanan' }}
                      </span>
                    </td>
                    <td class="px-6 py-4 text-xs font-bold text-slate-600 uppercase">
                      {{ q.dimension }}
                    </td>
                    <td class="px-6 py-4 text-slate-900 whitespace-normal leading-relaxed font-medium">
                      {{ q.question_text }}
                    </td>
                    <td class="px-6 py-4 text-center">
                      <div class="flex items-center justify-center gap-2">
                        <button @click="openEditModal(q)" class="p-1.5 text-amber-600 hover:bg-amber-50 rounded border border-transparent hover:border-amber-200 transition-all cursor-pointer" title="Ubah Pertanyaan">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg>
                        </button>
                        <button @click="deleteQuestion(q.id)" class="p-1.5 text-red-600 hover:bg-red-50 rounded border border-transparent hover:border-red-200 transition-all cursor-pointer" title="Hapus Pertanyaan">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                        </button>
                        <!-- TOMBOL EXPAND DROPDOWN -->
                        <button 
                          @click="q.isExpanded = !q.isExpanded" 
                          class="p-1.5 text-slate-400 hover:text-slate-800 transition-transform duration-300 cursor-pointer"
                          :class="q.isExpanded ? 'rotate-180' : ''"
                          title="Lihat Opsi/Skala Jawaban"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <!-- ACCORDION DROPDOWN ROW -->
                  <tr v-if="q.isExpanded" class="bg-slate-50/80">
                    <td colspan="5" class="px-6 py-4 border-b border-slate-200">
                      <div class="pl-12 pr-4">
                        <!-- TAMPILAN JIKA EVALUASI LAYANAN -->
                        <div v-if="q.kategori !== 'Loyalitas Pelanggan'" class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-medium text-slate-600">
                          <div class="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                            <span class="block font-bold text-[#004B87] mb-2 uppercase tracking-wide">Pilihan Skala Kepuasan (1 - 4):</span>
                            <div class="grid grid-cols-2 gap-1.5">
                              <span>1: Tidak Baik 😡</span>
                              <span>2: Kurang Baik 🙁</span>
                              <span>3: Baik 😊</span>
                              <span>4: Sangat Baik 🤩</span>
                            </div>
                          </div>
                          <div class="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                            <span class="block font-bold text-amber-600 mb-2 uppercase tracking-wide">Pilihan Skala Kepentingan (1 - 4):</span>
                            <div class="grid grid-cols-2 gap-1.5">
                              <span>1: Tidak Penting ⚪</span>
                              <span>2: Kurang Penting 🟡</span>
                              <span>3: Penting 🟠</span>
                              <span>4: Sangat Penting 🔴</span>
                            </div>
                          </div>
                        </div>

                        <!-- TAMPILAN JIKA LOYALITAS PELANGGAN -->
                        <div v-else class="text-xs font-medium text-slate-600">
                          <span class="block font-bold text-emerald-700 mb-2 uppercase tracking-wide">Pernyataan Pilihan Tunggal (Skala 1 - 5):</span>
                          <div class="space-y-1.5">
                            <div 
                              v-for="(opt, oIdx) in (q.options || defaultLoyaltyOptions[q.dimension] || [])" 
                              :key="oIdx"
                              class="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm"
                            >
                              <span class="bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px] shrink-0 mt-0.5">Skala {{ oIdx + 1 }}</span>
                              <span class="text-slate-800 font-medium leading-relaxed">{{ opt || '(Belum diatur)' }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>

    <!-- MODAL DIALOG INPUT (FIX SCROLL FULLOVERLAY - ANTI TERPOTONG ATAS) -->
    <div 
      v-if="isModalOpen" 
      class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 overflow-y-auto p-4 sm:p-6 flex justify-center items-start min-h-screen"
    >
      <div class="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-xl my-6 sm:my-10 flex flex-col overflow-hidden transition-all relative shrink-0">
        
        <!-- MODAL HEADER -->
        <div class="px-5 py-4 sm:px-6 sm:py-5 border-b border-slate-100 flex justify-between items-center bg-[#004B87] text-white shrink-0">
          <h3 class="font-extrabold text-base sm:text-lg tracking-tight">{{ isEditMode ? 'Edit Pertanyaan Kuesioner' : 'Tambah Pertanyaan Baru' }}</h3>
          <button 
            @click="isModalOpen = false" 
            type="button" 
            class="text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- MODAL BODY FORM -->
        <form @submit.prevent="saveQuestion" class="flex flex-col">
          <div class="p-4 sm:p-6 space-y-5 sm:space-y-6">
            
            <!-- [1]. KLASIFIKASI KATEGORI (PALING ATAS) -->
            <div class="space-y-4 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
              <div>
                <label class="block text-xs sm:text-sm font-extrabold text-slate-700 uppercase tracking-wider mb-2">1. Klasifikasi Kategori Utama</label>
                <select 
                  v-model="form.kategori" 
                  @change="handleKategoriChange"
                  required
                  class="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#004B87] font-bold text-slate-800 shadow-sm"
                >
                  <option value="Evaluasi Layanan">Evaluasi Layanan (Skala 1-4)</option>
                  <option value="Loyalitas Pelanggan">Loyalitas Pelanggan (Skala 1-5)</option>
                </select>
              </div>

              <div>
                <label class="block text-xs sm:text-sm font-extrabold text-slate-700 uppercase tracking-wider mb-2">2. Sub-Kategori / Dimensi</label>
                <select 
                  v-model="form.dimension" 
                  required
                  class="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#004B87] font-bold text-slate-800 shadow-sm"
                >
                  <template v-if="form.kategori === 'Evaluasi Layanan'">
                    <option value="Nyata (Tangible)">Nyata (Tangible)</option>
                    <option value="Kemampuan (Reliability)">Kemampuan (Reliability)</option>
                    <option value="Tanggap (Responsiveness)">Tanggap (Responsiveness)</option>
                    <option value="Kepastian / Jaminan (Assurance)">Kepastian / Jaminan (Assurance)</option>
                    <option value="Perhatian Khusus (Empathy)">Perhatian Khusus (Empathy)</option>
                  </template>
                  <template v-else>
                    <option value="Kepuasan Pelanggan">1. Kepuasan Pelanggan</option>
                    <option value="Kepercayaan (Trust)">2. Kepercayaan (Trust)</option>
                    <option value="Keterikatan Pelanggan">3. Keterikatan Pelanggan</option>
                    <option value="Permintaan Ulang">4. Permintaan Ulang</option>
                    <option value="Word of Mouth Behavior">5. Word of Mouth Behavior</option>
                  </template>
                </select>
              </div>
            </div>

            <!-- [2]. ISI KUESIONER PERTANYAAN -->
            <div>
              <label class="block text-xs sm:text-sm font-extrabold text-slate-700 uppercase tracking-wider mb-2">Isi Kuesioner Pertanyaan / Topik</label>
              <textarea 
                v-model="form.question_text" 
                rows="3" 
                required
                placeholder="Masukkan bunyi kalimat instrumen indikator kuesioner..." 
                class="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#004B87] focus:bg-white font-medium text-slate-800 leading-relaxed shadow-sm resize-none"
              ></textarea>
            </div>

            <!-- [3]. OPSI TUNGGAL PERNYATAAN (KHUSUS LOYALITAS) -->
            <div v-if="form.kategori === 'Loyalitas Pelanggan'" class="bg-emerald-50/80 p-4 sm:p-5 rounded-2xl border border-emerald-200/80 space-y-4">
              <div class="flex items-center justify-between">
                <label class="block text-xs sm:text-sm font-extrabold text-emerald-900 uppercase tracking-wider">Opsi Pernyataan (Single Choice)</label>
                <span class="text-xs font-extrabold bg-emerald-200 text-emerald-800 px-2.5 py-1 rounded-full">5 Skala Jawaban</span>
              </div>
              <p class="text-xs sm:text-sm text-emerald-800 font-medium">Masukkan 5 tingkatan pernyataan dari skala terkecil (1) hingga tertinggi (5):</p>
              
              <div v-for="i in 5" :key="i" class="flex items-start gap-3">
                <span class="bg-emerald-700 text-white font-bold w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs mt-1 shadow-sm">{{ i }}</span>
                <textarea 
                  v-model="form.options[i - 1]"
                  rows="2"
                  required
                  :placeholder="`Tuliskan teks pernyataan opsi skala ${i}...`"
                  class="flex-1 bg-white border border-slate-300 rounded-xl p-2.5 text-xs sm:text-sm font-medium focus:ring-1 focus:ring-emerald-600 focus:outline-none text-slate-800 leading-relaxed shadow-sm resize-none"
                ></textarea>
              </div>
            </div>

            <!-- [4]. ID NOMOR PERTANYAAN -->
            <div v-if="!isEditMode" class="pt-3 border-t border-slate-100">
              <label class="block text-xs sm:text-sm font-extrabold text-slate-700 uppercase tracking-wider mb-2">ID Nomor Pertanyaan (Opsional)</label>
              <input 
                v-model.number="form.id" 
                type="number" 
                min="1"
                :placeholder="`Otomatis (Rekomendasi: ${suggestedNextId})`" 
                class="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#004B87] focus:bg-white font-bold text-slate-800 shadow-sm"
              />
              <p class="text-xs text-slate-400 font-medium mt-1">Kosongkan jika ingin sistem menentukan ID berikutnya secara otomatis.</p>
            </div>

          </div>

          <!-- FOOTER TOMBOL MODAL -->
          <div class="px-5 py-4 sm:px-6 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3 shrink-0">
            <button 
              type="button" 
              @click="isModalOpen = false" 
              class="px-5 py-2.5 text-sm sm:text-base font-bold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              Batal
            </button>
            <button 
              type="submit" 
              class="px-6 py-2.5 text-sm sm:text-base font-bold text-white bg-[#004B87] hover:bg-sky-900 rounded-xl shadow-md transition-all cursor-pointer"
            >
              Simpan Data
            </button>
          </div>
        </form>

      </div>
    </div>

    <!-- MODAL POP-UP KONFIRMASI LOGOUT -->
    <div 
      v-if="showLogoutModal" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm transition-all"
    >
      <div class="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-sm overflow-hidden transform transition-all">
        
        <!-- HEADER POP-UP -->
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

        <!-- BODY POP-UP -->
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

          <!-- FOOTER BUTTONS -->
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
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const supabase = useSupabaseClient()

// Layout States
const isSidebarOpen = ref(true)
const isLoading = ref(true)

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

// HAK AKSES SUPERADMIN
const userRole = ref('')
const isSuperAdmin = computed(() => userRole.value === 'superadmin')

// STATE MODAL LOGOUT POP-UP
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

// Modal & Form Handling States
const isModalOpen = ref(false)
const isEditMode = ref(false)
const currentEditId = ref(null)
const questionsList = ref([])

const form = ref({
  id: null,
  kategori: 'Evaluasi Layanan',
  dimension: 'Nyata (Tangible)',
  question_text: '',
  options: ['', '', '', '', '']
})

// Opsi Standar Loyalitas sebagai Fallback
const defaultLoyaltyOptions = {
  'Kepuasan Pelanggan': [
    'Saya menyukai layanan jasa air baku dari pihak selain Perum Jasa Tirta I yang lebih menguntungkan usaha saya.',
    'Saya tidak mengalami ketidakpuasan selama menjadi pelanggan layanan jasa air baku Perum Jasa Tirta I dan saya sudah terbiasa menjadi pelanggan.',
    'Saya puas dengan layanan jasa air baku Perum Jasa Tirta I, tapi bila ada layanan sejenis dari pihak lain yang lebih murah saya akan beralih.',
    'Saya menyukai layanan jasa air baku Perum Jasa Tirta I dan akan lebih puas jika menggunakan layanan PJT I dibanding pihak lain.',
    'Saya sangat puas dengan layanan jasa air baku Perum Jasa Tirta I dan saya akan merekomendasikan layanan tersebut kepada rekan-rekan saya.'
  ],
  'Kepercayaan (Trust)': [
    'Saya tidak memiliki kepercayaan khusus terhadap Perum Jasa Tirta I, saya lebih mengutamakan prinsip ekonomi dalam bisnis saya.',
    'Saya biasa mempercayakan pemenuhan kebutuhan air baku saya pada layanan jasa air baku Perum Jasa Tirta I.',
    'Saya percaya pada layanan Perum Jasa Tirta I, tapi ada kemungkinan saya beralih ke penyedia jasa lain yang lebih terpercaya.',
    'Saya benar-benar percaya pada kerjasama yang saya jalin dengan Perum Jasa Tirta I.',
    'Saya bangga mempercayakan pemenuhan air baku saya pada layanan jasa air Perum Jasa Tirta I.'
  ],
  'Keterikatan Pelanggan': [
    'Saya sering berpindah-pindah penyedia jasa layanan air baku, saya jarang terikat pada satu jenis layanan/perusahaan.',
    'Sudah menjadi kebiasaan saya meminta Perum Jasa Tirta I untuk memenuhi kebutuhan air baku saya.',
    'Saya tidak pernah dikecewakan oleh PJT I, tapi saya tidak memiliki komitmen khusus untuk selalu bekerjasama.',
    'Saya yakin layanan PJT I lebih baik dari pihak lain, mungkin saya akan terus melanjutkan kerjasama.',
    'Saya yakin layanan PJT I lebih baik dari pihak lain dan saya memiliki komitmen untuk terus bekerjasama.'
  ],
  'Permintaan Ulang': [
    'Saya jarang / tidak pernah melakukan permintaan ulang terhadap layanan jasa air baku PJT I secara berturut-turut.',
    'Saya biasa meminta layanan jasa air baku PJT I, tapi jarang melakukan permintaan ulang secara berturut-turut.',
    'Setidaknya saya pernah melakukan permintaan ulang terhadap layanan jasa air baku PJT I sebanyak tiga kali berturut-turut.',
    'Saya selalu meminta layanan jasa air baku Perum Jasa Tirta I karena saya menyukai layanan tersebut.',
    'Saya akan selalu menjadi pelanggan setia PJT I dan selalu meminta layanannya karena bangga menjalin kerjasama.'
  ],
  'Word of Mouth Behavior': [
    'Saya tidak pernah berniat merekomendasikan layanan jasa air baku Perum Jasa Tirta I kepada rekan atau kolega saya.',
    'Saya biasa menggunakan layanan PJT I dan merekomendasikannya bila ada rekan yang menanyakannya.',
    'Saya puas menggunakan layanan PJT I, bila ada rekan meminta rekomendasi maka saya merekomendasikannya sebagai alternatif.',
    'Saya menyukai layanan PJT I dan merekomendasikan layanannya bila ada rekan yang membutuhkan informasi.',
    'Saya senang dan bangga menjadi pelanggan PJT I, sehingga tanpa diminta saya akan menceritakan pengalaman positif kepada rekan.'
  ]
}

const handleKategoriChange = () => {
  if (form.value.kategori === 'Evaluasi Layanan') {
    form.value.dimension = 'Nyata (Tangible)'
  } else {
    form.value.dimension = 'Kepuasan Pelanggan'
  }
}

// Menghitung saran ID berikutnya (Max ID + 1)
const suggestedNextId = computed(() => {
  if (!questionsList.value || questionsList.value.length === 0) return 1
  const maxId = Math.max(...questionsList.value.map(q => Number(q.id) || 0))
  return maxId + 1
})

// READ: Ambil data kuesioner pertanyaan dari database Supabase
const loadQuestionsData = async () => {
  try {
    isLoading.value = true
    const { data, error } = await supabase
      .from('questions')
      .select('id, question_text, dimension, kategori, options, created_at')
      .order('id', { ascending: true })

    if (error) throw error
    
    questionsList.value = (data || []).map(q => ({
      ...q,
      isExpanded: false
    }))
  } catch (err) {
    console.error('Gagal mengambil data pertanyaan:', err.message)
  } finally {
    isLoading.value = false
  }
}

// Buka Modal Tambah Data Baru
const openAddModal = () => {
  isEditMode.value = false
  currentEditId.value = null
  form.value = {
    id: null,
    kategori: 'Evaluasi Layanan',
    dimension: 'Nyata (Tangible)',
    question_text: '',
    options: ['', '', '', '', '']
  }
  isModalOpen.value = true
}

// Buka Modal Mode Ubah/Edit Data
const openEditModal = (item) => {
  isEditMode.value = true
  currentEditId.value = item.id
  form.value = {
    id: item.id,
    kategori: item.kategori || 'Evaluasi Layanan',
    dimension: item.dimension || 'Nyata (Tangible)',
    question_text: item.question_text || '',
    options: item.options && item.options.length === 5 ? [...item.options] : ['', '', '', '', '']
  }
  isModalOpen.value = true
}

// CREATE & UPDATE: Menyimpan data pertanyaan ke database
const saveQuestion = async () => {
  try {
    const payload = {
      question_text: form.value.question_text,
      dimension: form.value.dimension,
      kategori: form.value.kategori,
      options: form.value.kategori === 'Loyalitas Pelanggan' ? form.value.options : null
    }

    if (isEditMode.value && currentEditId.value) {
      // Jalankan fungsi UPDATE
      const { error } = await supabase
        .from('questions')
        .update(payload)
        .eq('id', currentEditId.value)

      if (error) throw error
    } else {
      // Jalankan fungsi CREATE/INSERT dengan Penanganan ID yang Aman
      const targetId = form.value.id || suggestedNextId.value

      const isDuplicate = questionsList.value.some(q => Number(q.id) === Number(targetId))
      if (isDuplicate) {
        alert(`ID Q${targetId} sudah digunakan! Silakan pilih nomor ID lain.`)
        return
      }

      payload.id = targetId

      const { error } = await supabase
        .from('questions')
        .insert([payload])

      if (error) throw error
    }

    isModalOpen.value = false
    await loadQuestionsData()
    alert('Pertanyaan kuesioner berhasil disimpan!')
  } catch (err) {
    alert('Gagal menyimpan data: ' + err.message)
  }
}

// DELETE: Menghapus butir pertanyaan secara permanen dengan ID unik
const deleteQuestion = async (id) => {
  if (!confirm(`Apakah Anda yakin ingin menghapus indikator pertanyaan Q${id}?`)) return
  
  try {
    const { error } = await supabase
      .from('questions')
      .delete()
      .eq('id', id)

    if (error) throw error
    await loadQuestionsData()
    alert('Pertanyaan berhasil dihapus dari kuesioner!')
  } catch (err) {
    alert('Gagal menghapus data: ' + err.message)
  }
}

let realtimeChannel = null

onMounted(() => {
  userRole.value = localStorage.getItem('user_role') || 'admin'
  loadQuestionsData()
  fetchNotifications()

  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false
  }

  realtimeChannel = supabase
    .channel('public:questions_questionnaire_responses')
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