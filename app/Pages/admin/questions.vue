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

    <!-- MAIN CONTENT AREA -->
    <div class="flex-1 flex flex-col min-w-0 min-h-screen overflow-y-auto">
      
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

      <main class="p-4 sm:p-8 space-y-6 flex-1 max-w-7xl w-full mx-auto">
        
        <!-- HEADER INTERFACE & TOMBOL TAMBAH -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-1">Daftar Pertanyaan</h2>
            <p class="text-xs sm:text-sm text-slate-400 font-medium">Tambah, edit, atau hapus butir instrumen evaluasi kepuasan secara langsung.</p>
          </div>
          <button 
            @click="openAddModal" 
            class="bg-[#004B87] hover:bg-sky-900 text-white px-4 py-2 rounded-lg font-bold text-sm shadow flex items-center gap-2 transition-colors"
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
                  <th class="px-6 py-4">Isi Pertanyaan</th>
                  <th class="px-6 py-4 w-48">Klasifikasi Dimensi</th>
                  <th class="px-6 py-4 w-32 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 font-semibold text-slate-700">
                <tr v-if="questionsList.length === 0">
                  <td colspan="4" class="px-6 py-12 text-center text-slate-400 font-medium">
                    Belum ada pertanyaan kuesioner di database. Silakan tambah data baru.
                  </td>
                </tr>
                <tr v-else v-for="q in questionsList" :key="q.id" class="hover:bg-slate-50/60 transition-colors">
                  <td class="px-6 py-4 text-center font-bold text-slate-400">Q{{ q.id }}</td>
                  <td class="px-6 py-4 text-slate-900 whitespace-normal leading-relaxed font-medium">
                    {{ q.question_text }}
                  </td>
                  <td class="px-6 py-4">
                    <span class="bg-blue-50 text-[#004B87] px-2.5 py-1 rounded-md text-xs font-bold border border-blue-100 uppercase tracking-wide">
                      {{ q.dimension }}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <div class="flex items-center justify-center gap-2">
                      <button @click="openEditModal(q)" class="p-1.5 text-amber-600 hover:bg-amber-50 rounded border border-transparent hover:border-amber-200 transition-all" title="Ubah Pertanyaan">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg>
                      </button>
                      <button @click="deleteQuestion(q.id)" class="p-1.5 text-red-600 hover:bg-red-50 rounded border border-transparent hover:border-red-200 transition-all" title="Hapus Pertanyaan">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>

    <!-- MODAL DIALOG INPUT (UNTUK TAMBAH & EDIT DATA) -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl border border-slate-200 shadow-xl max-w-md w-full overflow-hidden transition-all transform scale-100">
        <div class="p-6 border-b border-slate-100 flex justify-between items-center bg-[#004B87] text-white">
          <h3 class="font-bold text-base">{{ isEditMode ? 'Edit Pertanyaan Kuesioner' : 'Tambah Pertanyaan Baru' }}</h3>
          <button @click="isModalOpen = false" class="text-white/80 hover:text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <form @submit.prevent="saveQuestion" class="p-6 space-y-4">
          <!-- Nomot Urut ID Pertanyaan (Hanya Muncul di Mode Tambah) -->
          <div v-if="!isEditMode">
            <label class="block text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">ID Nomor Pertanyaan (Opsional)</label>
            <input 
              v-model.number="form.id" 
              type="number" 
              min="1"
              :placeholder="`Otomatis (Rekomendasi: ${suggestedNextId})`" 
              class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#004B87] focus:bg-white font-bold"
            />
            <p class="text-[10px] text-slate-400 mt-1">Kosongkan jika ingin sistem menentukan ID berikutnya secara otomatis.</p>
          </div>

          <div>
            <label class="block text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">Isi Kuesioner Pertanyaan</label>
            <textarea 
              v-model="form.question_text" 
              rows="3" 
              required
              placeholder="Masukkan bunyi kalimat instrumen indikator evaluasi kuesioner..." 
              class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#004B87] focus:bg-white font-medium"
            ></textarea>
          </div>

          <div>
            <label class="block text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">Klasifikasi Skor Dimensi</label>
            <select 
              v-model="form.dimension" 
              required
              class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#004B87] focus:bg-white font-bold"
            >
              <option value="kepuasan">Kepuasan Pelanggan (Q1-Q5)</option>
              <option value="kepercayaan">Kepercayaan Publik (Q6-Q10)</option>
              <option value="keterikatan">Keterikatan Pelanggan (Q11-Q15)</option>
              <option value="permintaan">Permintaan Ulang (Q16-Q20)</option>
              <option value="wom">Word of Mouth Behavior (Q21-Q25)</option>
            </select>
          </div>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
            <button 
              type="button" 
              @click="isModalOpen = false" 
              class="px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Batal
            </button>
            <button 
              type="submit" 
              class="px-5 py-2 text-sm font-bold text-white bg-[#004B87] hover:bg-sky-900 rounded-lg shadow transition-colors"
            >
              Simpan Data
            </button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const supabase = useSupabaseClient()

// Layout States
const isSidebarOpen = ref(true)
const isLoading = ref(true)

// Modal & Form Handling States
const isModalOpen = ref(false)
const isEditMode = ref(false)
const currentEditId = ref(null)
const questionsList = ref([])

const form = ref({
  id: null,
  question_text: '',
  dimension: 'kepuasan'
})

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
      .select('id, question_text, dimension, created_at')
      .order('id', { ascending: true })

    if (error) throw error
    questionsList.value = data || []
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
  form.value.id = null
  form.value.question_text = ''
  form.value.dimension = 'kepuasan'
  isModalOpen.value = true
}

// Buka Modal Mode Ubah/Edit Data
const openEditModal = (item) => {
  isEditMode.value = true
  currentEditId.value = item.id
  form.value.id = item.id
  form.value.question_text = item.question_text
  form.value.dimension = item.dimension
  isModalOpen.value = true
}

// CREATE & UPDATE: Menyimpan data pertanyaan ke database
const saveQuestion = async () => {
  try {
    if (isEditMode.value && currentEditId.value) {
      // Jalankan fungsi UPDATE
      const { error } = await supabase
        .from('questions')
        .update({
          question_text: form.value.question_text,
          dimension: form.value.dimension
        })
        .eq('id', currentEditId.value)

      if (error) throw error
    } else {
      // Jalankan fungsi CREATE/INSERT dengan Penanganan ID yang Aman
      const targetId = form.value.id || suggestedNextId.value

      // Cek apakah ID sudah ada di list lokal untuk cegah duplikasi
      const isDuplicate = questionsList.value.some(q => Number(q.id) === Number(targetId))
      if (isDuplicate) {
        alert(`ID Q${targetId} sudah digunakan! Silakan pilih nomor ID lain.`)
        return
      }

      const { error } = await supabase
        .from('questions')
        .insert([{
          id: targetId,
          question_text: form.value.question_text,
          dimension: form.value.dimension
        }])

      if (error) throw error
    }

    isModalOpen.value = false
    await loadQuestionsData() // Refresh list tabel otomatis
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

onMounted(() => {
  loadQuestionsData()
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
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f5f9;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 8px;
}
</style>