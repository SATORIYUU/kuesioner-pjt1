<template>
  <div 
    class="min-h-screen w-full bg-[#F4F7FA] flex flex-col font-sans text-slate-800 overflow-x-hidden relative"
    style="background-image: url('/Sutami.png'); background-size: cover; background-position: center; background-attachment: fixed;"
  >
    <!-- Overlay Transparan agar Background Sutami Lebih Halus -->
    <div class="absolute inset-0 bg-slate-900/10 z-0"></div>

    <!-- NAVBAR UTAMA -->
    <nav class="w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 px-4 sm:px-8 py-4 flex items-center justify-between shadow-sm relative z-10">
      <div @click="router.push('/')" class="flex items-center space-x-3 cursor-pointer group">
        <img src="/logopjt1.png" alt="Logo PJT I" class="h-6 sm:h-8 w-auto object-contain" />
        <span class="text-lg sm:text-xl font-bold text-[#004B87] group-hover:text-sky-700 transition-colors">Perum Jasa Tirta</span>
      </div>
    </nav>

    <!-- KARTU REGISTER UTAMA -->
    <main class="flex-1 w-full max-w-md mx-auto px-4 flex items-center justify-center relative z-10 py-12 box-border">
      <div class="w-full bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-6 sm:p-10 flex flex-col shadow-2xl box-border">
        
        <!-- Bagian Logo Utama & Judul -->
        <div class="text-center mb-6">
          <img src="/logopjt1.png" alt="Logo Perum Jasa Tirta I" class="h-12 w-auto object-contain mx-auto mb-3" />
          <h1 class="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">Request Access</h1>
          <p class="text-slate-400 text-xs font-medium mt-1">
            Complete the form below to register your administrative account.
          </p>
        </div>

        <!-- FORM REGISTRASI -->
        <form @submit.prevent="handleRegister" class="space-y-4">
          
          <!-- Input Nama Lengkap -->
          <div>
            <label class="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Full Name</label>
            <input 
              v-model="fullName"
              type="text" 
              required
              placeholder="e.g. Adhi Surya" 
              class="w-full bg-white border border-slate-200 text-slate-900 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B87] font-medium text-sm transition-all shadow-sm"
            />
          </div>

          <!-- Input Email Institusi -->
          <div>
            <label class="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Official Email</label>
            <input 
              v-model="email"
              type="email" 
              required
              placeholder="name@jasatirta1.co.id" 
              class="w-full bg-white border border-slate-200 text-slate-900 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B87] font-medium text-sm transition-all shadow-sm"
            />
          </div>

          <!-- Input Password -->
          <div>
            <label class="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Password</label>
            <div class="relative">
              <input 
                v-model="password"
                :type="showPassword ? 'text' : 'password'" 
                required
                placeholder="••••••••" 
                class="w-full bg-white border border-slate-200 text-slate-900 pl-4 pr-11 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B87] font-medium text-sm transition-all shadow-sm"
              />
              <button 
                @click="showPassword = !showPassword"
                type="button"
                class="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Input Kode Verifikasi Atasan (Sekarang Bebas Diisi Apa Saja) -->
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label class="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Supervisor Verification Code</label>
              <div class="group relative flex items-center text-slate-400 hover:text-slate-600 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div class="absolute bottom-full right-0 mb-2 w-48 bg-slate-900 text-white text-[10px] p-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 font-medium leading-relaxed">
                  Demo Mode: Masukkan kode atau teks bebas apa saja pada kolom ini untuk memvalidasi akun.
                </div>
              </div>
            </div>
            <input 
              v-model="supervisorCode"
              type="text" 
              required
              placeholder="Masukkan kode bebas untuk demo..." 
              class="w-full bg-white border border-slate-200 text-slate-900 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B87] font-medium text-sm transition-all shadow-sm"
            />
          </div>

          <!-- Tombol Submit Registrasi -->
          <div class="pt-3">
            <button 
              type="submit" 
              class="w-full bg-[#004B87] hover:bg-sky-900 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md text-sm cursor-pointer"
            >
              <span>Submit Registration Request</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </button>
          </div>
        </form>

        <!-- Link Kembali Ke Login -->
        <div class="mt-6 text-center">
          <button @click="router.push('/admin/login')" class="text-xs sm:text-sm text-[#004B87] hover:underline font-semibold cursor-pointer">
            Return to Login Page
          </button>
        </div>

      </div>
    </main>

    <!-- FOOTER BAWAH -->
    <footer class="w-full bg-[#004B87] border-t border-sky-700/50 px-6 sm:px-12 py-3 text-[10px] text-white flex flex-col sm:flex-row items-center justify-center gap-4 text-center relative z-10 font-medium tracking-wide">
      <div class="flex items-center space-x-4 text-sky-200/90">
        <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944a11.954 11.954 0 007.834 3.056c.11.684.166 1.383.166 2.09 0 4.743-3.148 8.749-7.5 10.025a11.955 11.955 0 01-7.5-10.025c0-.707.055-1.406.166-2.09zM10 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" /></svg> ISO 27001 Certified</span>
        <span>•</span>
        <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" /></svg> Encryption Active</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const supabase = useSupabaseClient()

const fullName = ref('')
const email = ref('')
const password = ref('')
const supervisorCode = ref('')
const showPassword = ref(false)

const handleRegister = async () => {
  // Validasi sederhana: pastikan kolom kode supervisor diisi (tidak kosong)
  if (!supervisorCode.value || !supervisorCode.value.trim()) {
    alert('Mohon isi Supervisor Verification Code bebas untuk demo.')
    return
  }

  try {
    // Proses pendaftaran user asli ke dalam database Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email: email.value.trim(),
      password: password.value,
      options: {
        data: {
          full_name: fullName.value.trim(),
          supervisor_token: supervisorCode.value.trim() // Token bebas disimpan sebagai metadata
        }
      }
    })

    if (error) throw error

    alert('Registrasi akun admin sukses disimpan ke Supabase!')
    router.push('/admin/login')
  } catch (err) {
    console.error('Registrasi Supabase bermasalah:', err.message)
    alert(`Gagal Mendaftar: ${err.message}`)
  }
}
</script>