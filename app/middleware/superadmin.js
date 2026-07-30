export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useSupabaseUser()
  const client = useSupabaseClient()

  // 1. Cek apakah user sudah login
  if (!user.value) {
    return navigateTo('/login')
  }

  // 2. Ambil data role dari tabel access
  const { data, error } = await client
    .from('access')
    .select('role')
    .eq('id', user.value.id)
    .single()

  // 3. Jika error atau rolenya bukan superadmin, lempar ke halaman utama
  if (error || data?.role !== 'superadmin') {
    return navigateTo('/')
  }
})