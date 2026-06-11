<script setup>
import { ref } from 'vue'

// State untuk menyimpan data pilihan responden
const namaInstansi = ref('')
const roleUtama = ref('') // 'pemanfaat' atau 'pyb'
const subRole = ref('')  // 'PLTA', 'PDAM', atau 'Industri'

const mulaiKuesioner = () => {
  alert(`Memulai kuesioner untuk ${namaInstansi.value} dengan role: ${roleUtama.value} ${subRole.value ? '-' + subRole.value : ''}`)
  // Nanti di sini kita akan arahkan ke halaman pertanyaan
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 font-sans">
    <div class="w-full max-w-xl bg-white rounded-2xl shadow-md p-8 border border-slate-100">
      
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold text-slate-800">Kuesioner Kepuasan Pelanggan</h1>
        <p class="text-blue-600 font-semibold tracking-wider uppercase text-sm mt-1">Perum Jasa Tirta I</p>
      </div>

      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Nama Instansi / Perusahaan</label>
          <input 
            v-model="namaInstansi"
            type="text" 
            placeholder="Masukkan nama instansi Anda..."
            class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-3">Pilih Kategori Role Anda</label>
          <div class="grid grid-cols-2 gap-4">
            <label :class="['flex flex-col items-center p-4 rounded-xl border-2 cursor-pointer transition', roleUtama === 'pemanfaat' ? 'border-blue-500 bg-blue-50/50' : 'border-slate-200 hover:bg-slate-50']">
              <input type="radio" v-model="roleUtama" value="pemanfaat" class="sr-only" />
              <span class="font-semibold text-slate-800">Pemanfaat</span>
              <span class="text-xs text-slate-500 text-center mt-1">PLTA, PDAM, atau Industri</span>
            </label>

            <label :class="['flex flex-col items-center p-4 rounded-xl border-2 cursor-pointer transition', roleUtama === 'pyb' ? 'border-blue-500 bg-blue-50/50' : 'border-slate-200 hover:bg-slate-50']">
              <input type="radio" v-model="roleUtama" value="pyb" class="sr-only" />
              <span class="font-semibold text-slate-800">PYB</span>
              <span class="text-xs text-slate-500 text-center mt-1">Pihak Berkepentingan</span>
            </label>
          </div>
        </div>

        <div v-if="roleUtama === 'pemanfaat'" class="p-4 bg-slate-50 rounded-xl border border-slate-100 animate-fade-in">
          <label class="block text-sm font-medium text-slate-700 mb-2">Pilih Kategori Pemanfaat</label>
          <select 
            v-model="subRole"
            class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="" disabled>-- Pilih Sub-Kategori --</option>
            <option value="PLTA">PLTA (Pembangkit Listrik Tenaga Air)</option>
            <option value="PDAM">PDAM (Perusahaan Daerah Air Minum)</option>
            <option value="Industri">Industri / Perusahaan Swasta</option>
          </select>
        </div>

        <button 
          @click="mulaiKuesioner"
          :disabled="!namaInstansi || !roleUtama || (roleUtama === 'pemanfaat' && !subRole)"
          class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-medium py-3.5 px-4 rounded-xl transition shadow-sm mt-4"
        >
          Mulai Isi Kuesioner
        </button>

      </div>
    </div>
  </div>
</template>