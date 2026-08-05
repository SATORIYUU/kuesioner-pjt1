<template>
  <div 
    class="min-h-screen w-full bg-[#F4F7FA] flex flex-col font-sans text-slate-800 overflow-x-hidden"
    style="background-image: url('/Sutami.png'); background-size: cover; background-position: center; background-attachment: fixed;"
  >
    
    <!-- NAVBAR -->
    <nav class="w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 px-4 sm:px-8 py-4 flex items-center justify-between shadow-sm relative z-10">
      <div class="flex items-center space-x-3">
        <img src="/logopjt1.png" alt="Logo PJT I" class="h-6 sm:h-8 w-auto object-contain" />
        <span class="text-lg sm:text-xl font-bold text-[#004B87]">Perum Jasa Tirta I</span>
      </div>

      <div class="flex items-center text-xs sm:text-sm font-medium text-slate-600">
        <a href="https://jasatirta1.co.id/" target="_blank" rel="noopener noreferrer" class="hover:text-[#004B87] transition-colors">
          Tentang Kami
        </a>
      </div>
    </nav>

    <!-- MAIN ACCESS CARD SECTION -->
    <main class="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-stretch justify-center relative z-10 box-border">
      
      <!-- SISI KIRI: RESPONDENT ACCESS FORM -->
      <div class="w-full lg:flex-1 bg-[#004B87] text-white rounded-2xl p-6 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden box-border">
        <div class="space-y-6 sm:space-y-8 w-full">
          <div>
            <span class="inline-block bg-sky-700/50 text-sky-200 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 sm:mb-6">Akses Publik</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 sm:mb-4">Respondent Access</h1>
            <p class="text-sky-100 text-sm sm:text-base leading-relaxed max-w-md">
              Pilih nama instansi/perusahaan Anda untuk memulai proses kuesioner penilaian layanan tahunan.
            </p>
          </div>

          <div class="space-y-5 max-w-md w-full relative">
            
            <!-- 1. SEARCHABLE DROPDOWN INPUT -->
            <div class="relative">
              <label class="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-sky-200 mb-2">
                Pilih Perusahaan / Instansi Terdaftar
              </label>

              <!-- Search Box Input -->
              <div class="relative">
                <input 
                  v-model="searchQuery"
                  type="text" 
                  placeholder="Ketik untuk mencari nama perusahaan..." 
                  @focus="isDropdownOpen = true"
                  @input="onSearchInput"
                  class="w-full bg-white text-slate-900 px-4 py-3.5 pr-10 rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-sky-400 font-medium text-sm transition-all shadow-sm"
                  :class="showError ? 'ring-2 ring-red-400' : ''"
                />

                <!-- Chevron Icon -->
                <button 
                  type="button" 
                  @click="isDropdownOpen = !isDropdownOpen" 
                  class="absolute inset-y-0 right-0 px-3 flex items-center text-slate-400 hover:text-slate-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 transition-transform" :class="isDropdownOpen ? 'rotate-180' : ''">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </div>

              <!-- List Hasil Pencarian Dropdown -->
              <div 
                v-if="isDropdownOpen && filteredClients.length > 0" 
                class="absolute z-50 mt-1 w-full bg-white text-slate-800 rounded-xl shadow-2xl max-h-60 overflow-y-auto border border-slate-200 divide-y divide-slate-100 text-xs sm:text-sm"
              >
                <div 
                  v-for="client in filteredClients" 
                  :key="client.id"
                  @click="selectClient(client)"
                  class="px-4 py-3 hover:bg-sky-50 cursor-pointer transition-colors flex justify-between items-center"
                >
                  <span class="font-bold text-slate-800">{{ client.company_name }}</span>
                  <span class="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded border">
                    {{ client.sub_category !== 'None' ? client.sub_category : client.category }}
                  </span>
                </div>
              </div>

              <!-- No Match Notice -->
              <div 
                v-if="isDropdownOpen && filteredClients.length === 0" 
                class="absolute z-50 mt-1 w-full bg-white text-slate-500 rounded-xl p-4 shadow-xl border text-xs text-center font-medium"
              >
                Responden Tidak Ditemukan, Silahkan Hubungi Admin
              </div>

              <!-- Error Message -->
              <p v-if="showError" class="text-xs text-red-300 font-bold mt-1.5 flex items-center gap-1 animate-pulse">
                <span>⚠️ Silakan pilih perusahaan </span>
              </p>
            </div>

            <!-- 2. AUTO-POPULATED BADGES (TAMPILAN DENGAN INFO OTOMATIS) -->
            <div v-if="selectedClient" class="bg-sky-900/60 border border-sky-400/30 p-4 rounded-xl space-y-3 transition-all">
              <div class="flex items-center justify-between text-xs">
                <span class="text-sky-200 font-medium">Kategori:</span>
                <span class="font-bold bg-sky-800 text-white px-2.5 py-1 rounded-md border border-sky-600/50">
                  {{ selectedClient.category }}
                </span>
              </div>
              <div class="flex items-center justify-between text-xs">
                <span class="text-sky-200 font-medium">SubKategori:</span>
                <span class="font-bold bg-sky-800 text-white px-2.5 py-1 rounded-md border border-sky-600/50">
                  {{ selectedClient.sub_category || 'None' }}
                </span>
              </div>
            </div>

            <!-- 3. TOMBOL MULAI ISI KUESIONER -->
            <div class="pt-2 w-full">
              <button 
                @click="navigateToQuestionnaire" 
                :disabled="isSubmitting"
                class="w-full bg-[#D9EAFD] text-[#004B87] hover:bg-white font-bold py-3.5 sm:py-4 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg text-sm sm:text-base disabled:opacity-50"
              >
                <span v-if="isSubmitting">Memeriksa Akses...</span>
                <span v-else>Mulai Isi Kuesioner</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

          </div>
        </div>

        <div class="flex items-center space-x-2 text-[10px] sm:text-xs text-sky-200/80 pt-4 mt-8 border-t border-sky-700/30 shrink-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944a11.954 11.954 0 007.834 3.056c.11.684.166 1.383.166 2.09 0 4.743-3.148 8.749-7.5 10.025a11.955 11.955 0 01-7.5-10.025c0-.707.055-1.406.166-2.09zM10 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          <span>Sistem Keamanan Terenkripsi Perum Jasa Tirta I</span>
        </div>
      </div>

      <!-- SISI KANAN: ADMIN ACCESS CARD -->
      <div class="w-full lg:flex-1 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-md overflow-hidden box-border">
        <div class="p-6 sm:p-10 flex-1 flex flex-col justify-between w-full max-w-md box-border">
          <div class="w-full">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-sky-50 rounded-xl flex items-center justify-center text-[#004B87] mb-4 sm:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Admin Access</h2>
            <p class="text-slate-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Halaman internal untuk administrator dan tim validasi data. Masuk menggunakan kredensial resmi institusi.
            </p>
          </div>

          <div class="space-y-4 sm:space-y-6 w-full">
            <!-- SESUDAH (Mengarahkan ke Halaman Login): -->
            <button 
              @click="router.push('/admin/login')" 
              class="w-full bg-white border-2 border-[#004B87] text-[#004B87] hover:bg-sky-50 font-bold py-3.5 sm:py-4 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all text-sm sm:text-base cursor-pointer"
            >
              <span>Login sebagai Admin</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- FOOTER -->
    <footer class="w-full bg-[#004B87] border-t border-sky-700/50 px-6 sm:px-12 py-6 text-xs text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
      <div>
        <span class="font-semibold text-white">Perum Jasa Tirta I</span>
        <p class="text-sky-200/80">© 2026 Perum Jasa Tirta I. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const supabase = useSupabaseClient()

const clientsMaster = ref([])
const searchQuery = ref('')
const isDropdownOpen = ref(false)
const selectedClient = ref(null)
const showError = ref(false)
const isSubmitting = ref(false)

// Fetch master clients dari Supabase
const fetchClientsMaster = async () => {
  try {
    const { data, error } = await supabase
      .from('clients')
      .select('id, company_name, category, sub_category, status')
      .eq('status', 'aktif')
      .order('company_name', { ascending: true })

    if (error) throw error
    clientsMaster.value = data || []
  } catch (err) {
    console.error('Gagal mengambil daftar klien:', err.message)
  }
}

// Compute pencarian nama perusahaan
const filteredClients = computed(() => {
  if (!searchQuery.value.trim()) return clientsMaster.value.slice(0, 20)
  const q = searchQuery.value.toLowerCase().trim()
  return clientsMaster.value.filter(c => c.company_name.toLowerCase().includes(q))
})

const onSearchInput = () => {
  isDropdownOpen.value = true
  showError.value = false
  if (selectedClient.value && selectedClient.value.company_name !== searchQuery.value) {
    selectedClient.value = null
  }
}

const selectClient = (client) => {
  selectedClient.value = client
  searchQuery.value = client.company_name
  isDropdownOpen.value = false
  showError.value = false
}

const navigateToQuestionnaire = async () => {
  if (!selectedClient.value) {
    showError.value = true
    return
  }

  try {
    isSubmitting.value = true

    // 1. PENGECEKAN LIMITASI: Hitung berapa kali perusahaan ini sudah mengisi kuesioner
    const { count, error: countError } = await supabase
      .from('respondents')
      .select('*', { count: 'exact', head: true })
      .eq('company_name', selectedClient.value.company_name)

    if (countError) throw countError

    // 2. JIKA SUDAH SERING ISI (>= 2 KALI), TAMPILKAN ALERT DAN HENTIKAN
    if (count !== null && count >= 2) {
      alert('Kuesioner sudah selesai diisi')
      return
    }

    // 3. JIKA MASIH DIBAWAH LIMIT (< 2), SIMPAN PILIHAN SEMENTARA & CEK KE IDENTITAS
    localStorage.setItem('pending_company_id', selectedClient.value.id)
    localStorage.setItem('pending_company_name', selectedClient.value.company_name)
    localStorage.setItem('pending_category', selectedClient.value.category)
    localStorage.setItem('pending_sub_category', selectedClient.value.sub_category || 'None')

    // Pindah ke file identitas baru untuk isi Nama & Jabatan
    router.push('/identity')
  } catch (err) {
    console.error('Gagal memeriksa data responden:', err.message)
    alert('Terjadi kesalahan sistem: ' + err.message)
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  fetchClientsMaster()
})
</script>