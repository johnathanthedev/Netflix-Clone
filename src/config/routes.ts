import Dashboard from '../components/views/Dashboard'
import Home from '../components/views/Home'
import IRoute from '../interfaces/main/route'

const routes: IRoute[] = [
  {
    path: '/', name: 'Home Page', component: Home, exact: true
  },
  {
    path: '/dashboard', name: 'Dashboard Page', component: Dashboard, exact: true
  }
]

export default routes