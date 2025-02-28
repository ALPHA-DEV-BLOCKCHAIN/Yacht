/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

// Import your components
import PurchaseYacht from '@/pages/PurchaseYacht.vue' 
import UserDashboard from '@/pages/UserDashboard.vue'// Ensure the path is correct

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes, // Include auto-generated routes if you are using vue-router/auto
    {
      path: '/purchase/:id',
      name: 'PurchaseYacht',
      component: PurchaseYacht,
      props: true // This allows passing route params as props to the component
    },
    
{

  path: '/profile',
  name: 'UserDashboard',
  component: UserDashboard,
  meta: { requiresAuth: true }
}
    
    
    // other routes...
  ]
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
