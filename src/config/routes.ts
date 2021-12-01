import Dashboard from '../components/views/Dashboard'
import Home from '../components/views/Home'
import IRoute from '../interfaces/main/route'

export const routes: IRoute[] = [
  {
    path: '/', name: 'Home Page', component: Home, exact: true
  }
] 

export const protectedRoutes: IRoute[] = [
  {
    path: '/dashboard', name: 'Dashboard Page', component: Dashboard, exact: true
  }
]