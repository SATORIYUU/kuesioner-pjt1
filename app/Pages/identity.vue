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

      <NuxtLink to="/" class="text-xs sm:text-sm font-bold text-slate-500 hover:text-[#004B87] transition-colors flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Kembali
      </NuxtLink>
    </nav>

    <!-- MAIN FORM SECTION -->
    <main class="flex-1 w-full max-w-lg mx-auto px-4 py-12 flex flex-col justify-center relative z-10">
      
      <div class="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 border border-slate-200">
        
        <div class="text-center mb-8">
          <span class="inline-block bg-sky-100 text-[#004B87] text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            Langkah 1 dari 2
          </span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Identitas Responden</h2>
          <p class="text-sm text-slate-500 mt-2">Mohon lengkapi nama dan data kontak Anda sebelum memulai pengisian kuesioner layanan.</p>
        </div>

        <!-- INFO PERUSAHAAN (OTOMATIS DARI HALAMAN SEBELUMNYA) -->
        <div class="bg-sky-50 border border-sky-100 rounded-xl p-4 mb-6 text-center">
          <p class="text-[10px] font-bold text-sky-600 uppercase tracking-wider mb-1">Mewakili Instansi / Perusahaan</p>
          <p class="text-base font-extrabold text-[#004B87]">{{ companyName || 'Memuat data...' }}</p>
        </div>

        <form @submit.prevent="submitIdentity" class="space-y-6">
          
          <!-- 1. NAMA LENGKAP -->
          <div class="space-y-2">
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Nama Lengkap <span class="text-rose-500">*</span>
            </label>
            <input 
              v-model="namaPengisi"
              type="text" 
              required
              placeholder="Masukkan nama lengkap Anda..." 
              class="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#004B87] font-medium text-sm transition-all"
            />
          </div>

          <!-- 2. JABATAN -->
          <div class="space-y-2">
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Jabatan <span class="text-rose-500">*</span>
            </label>
            <input 
              v-model="jabatanPengisi"
              type="text" 
              required
              placeholder="Contoh: Manajer Operasional" 
              class="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#004B87] font-medium text-sm transition-all"
            />
          </div>

          <!-- 3. NOMOR TELEPON (HANYA ANGKA) -->
          <div class="space-y-2">
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Nomor Telepon / WA <span class="text-rose-500">*</span>
            </label>
            <input 
              v-model="phonePengisi"
              type="text"
              inputmode="numeric"
              pattern="[0-9]*"
              required
              @input="filterPhoneInput"
              placeholder="Contoh: 081234567890" 
              class="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#004B87] font-medium text-sm transition-all"
            />
          </div>

          <!-- 4. EMAIL RESMI -->
          <div class="space-y-2">
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Email Resmi <span class="text-rose-500">*</span>
            </label>
            <input 
              v-model="emailPengisi"
              type="email" 
              required
              placeholder="Contoh: nama@perusahaan.com" 
              class="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#004B87] font-medium text-sm transition-all"
            />
          </div>

          <!-- SUBMIT BUTTON -->
          <div class="pt-4">
            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="w-full bg-[#004B87] text-white hover:bg-[#003865] font-bold py-3.5 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg text-sm sm:text-base disabled:opacity-50 cursor-pointer"
            >
              <span v-if="isSubmitting">Memproses Data...</span>
              <span v-else>Lanjut ke Kuesioner</span>
              <svg v-if="!isSubmitting" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </form>
      </div>

    </main>

    <!-- FOOTER -->
    <footer class="w-full bg-[#004B87] border-t border-sky-700/50 px-6 py-4 text-xs text-white text-center relative z-10">
      <p class="text-sky-200/80">© 2026 Perum Jasa Tirta I. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const companyName = ref('')
const category = ref('')
const subCategory = ref('')

const namaPengisi = ref('')
const jabatanPengisi = ref('')
const phonePengisi = ref('')
const emailPengisi = ref('')

const isSubmitting = ref(false)

// SANITASI INPUT NOMOR TELEPON (HANYA MENGIZINKAN DIGIT ANGKA)
const filterPhoneInput = (event) => {
  phonePengisi.value = event.target.value.replace(/\D/g, '')
}

// Ambil data perusahaan yang dipilih dari localStorage saat halaman diload
onMounted(() => {
  companyName.value = localStorage.getItem('pending_company_name') || ''
  category.value = localStorage.getItem('pending_category') || ''
  subCategory.value = localStorage.getItem('pending_sub_category') || ''

  if (!companyName.value) {
    alert('Sesi tidak valid. Silakan pilih instansi/perusahaan terlebih dahulu dari halaman utama.')
    router.push('/')
  }
})

// FUNGSI UNTUK PROSES KE HALAMAN KUESIONER
const submitIdentity = () => {
  if (!namaPengisi.value || !jabatanPengisi.value || !phonePengisi.value || !emailPengisi.value) return

  try {
    isSubmitting.value = true

    localStorage.setItem('pending_nama_pengisi', namaPengisi.value)
    localStorage.setItem('pending_jabatan', jabatanPengisi.value)
    localStorage.setItem('pending_phone', phonePengisi.value)
    localStorage.setItem('pending_email', emailPengisi.value)

    localStorage.setItem('active_client_name', companyName.value)
    localStorage.setItem('pending_category', category.value || '')
    localStorage.setItem('pending_sub_category', subCategory.value || '')

    router.push('/questionnaire')
  } catch (err) {
    console.error('Gagal menyimpan data sementara:', err.message)
    alert('Terjadi kesalahan sistem: ' + err.message)
  } finally {
    isSubmitting.value = false
  }
}
</script>