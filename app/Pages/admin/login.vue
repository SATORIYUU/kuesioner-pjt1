<template>
  <div 
    class="min-h-screen w-full bg-[#F4F7FA] flex flex-col font-sans text-slate-800 overflow-x-hidden relative"
    style="background-image: url('/Sutami.png'); background-size: cover; background-position: center; background-attachment: fixed;"
  >
    <div class="absolute inset-0 bg-slate-900/10 z-0"></div>

    <nav class="w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 px-4 sm:px-8 py-4 flex items-center justify-between shadow-sm relative z-10">
      <div @click="router.push('/')" class="flex items-center space-x-3 cursor-pointer group">
        <img src="/logopjt1.png" alt="Logo PJT I" class="h-6 sm:h-8 w-auto object-contain" />
        <span class="text-lg sm:text-xl font-bold text-[#004B87] group-hover:text-sky-700 transition-colors">Perum Jasa Tirta</span>
      </div>
      <button 
        @click="router.push('/')" 
        class="text-xs sm:text-sm font-bold text-[#004B87] hover:text-sky-800 flex items-center space-x-1 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Kembali ke Beranda</span>
      </button>
    </nav>

    <main class="flex-1 w-full max-w-md mx-auto px-4 flex items-center justify-center relative z-10 py-12 box-border">
      <div class="w-full bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-6 sm:p-10 flex flex-col shadow-2xl box-border">
        
        <div class="text-center mb-8">
          <img src="/logopjt1.png" alt="Logo Perum Jasa Tirta I" class="h-14 w-auto object-contain mx-auto mb-4" />
          <h1 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Portal Admin Utility</h1>
          <p class="text-slate-400 text-xs sm:text-sm font-medium mt-1">
            Masuk menggunakan kredensial resmi untuk mengakses data kuesioner.
          </p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <div>
            <label class="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email Institusi</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </span>
              <input 
                v-model="email"
                type="email" 
                required
                placeholder="nama@jasatirta1.co.id" 
                class="w-full bg-white border border-slate-200 text-slate-900 pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B87] focus:border-transparent font-medium text-sm sm:text-base transition-all"
              />
            </div>
          </div>

          <div>
            <label class="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Kata Sandi</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input 
                v-model="password"
                :type="showPassword ? 'text' : 'password'" 
                required
                placeholder="••••••••" 
                class="w-full bg-white border border-slate-200 text-slate-900 pl-11 pr-11 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B87] focus:border-transparent font-medium text-sm sm:text-base transition-all"
              />
              <button 
                @click="showPassword = !showPassword"
                type="button"
                class="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>

          <div class="pt-2">
            <button 
              type="submit" 
              class="w-full bg-[#004B87] hover:bg-sky-900 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md text-sm sm:text-base cursor-pointer"
            >
              <span>Login</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200">
           <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
            </button>
          </div>
        </form>

        <div class="mt-8 pt-5 border-t border-slate-100 text-center">
          <p class="text-xs sm:text-sm text-slate-500 font-medium">
            Belum memiliki akun validasi? 
            <button @click="router.push('/admin/register')" class="text-[#004B87] hover:underline font-bold ml-1 cursor-pointer">
              Ajukan Registrasi
            </button>
          </p>
        </div>

      </div>
    </main>

    <footer class="w-full bg-[#004B87] border-t border-sky-700/50 px-6 sm:px-12 py-4 text-xs text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
      <div>
        <span class="font-semibold text-white">Perum Jasa Tirta I</span>
        <p class="text-sky-200/80">© 2026 Perum Jasa Tirta. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const supabase = useSupabaseClient()

const email = ref('')
const password = ref('')
const showPassword = ref(false)

const handleLogin = async () => {
  try {
    // Proses otentikasi login resmi menggunakan fungsi bawaan Supabase Auth
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value.trim(),
      password: password.value
    })

    if (error) throw error

    // Jika kredensial cocok, langsung lempar admin menuju halaman utama dashboard
    router.push('/admin/dashboard')
  } catch (err) {
    console.error('Login bermasalah:', err.message)
    alert('Gagal masuk. Periksa kembali kombinasi Email dan Kata Sandi Anda.')
  }
}
</script>