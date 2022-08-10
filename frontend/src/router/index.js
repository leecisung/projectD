import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import About from '../views/About.vue'
import Activity from '../views/Activity.vue'
import Explore from '../views/Explore.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Messages from '../views/Messages.vue'
import MessagesDetail from '../views/MessagesDetail.vue'
import Post from '../views/Post.vue'
import Profile from '../views/Profile.vue'
import Registration from '../views/Registration.vue'
import Search from '../views/Search.vue'
import Wallet from '../views/Wallet.vue'
import ProfilePostGrids from '../components/ProfilePostGrids.vue'
import ProfileSaved from '../components/ProfileSaved.vue'
import MovieIndexPage from '../views/MovieIndexPage'
import MovieDetailPage from '../views/MovieDetailPage'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/activity',
    name: 'activity',
    component: Activity
  },
  {
    path: '/explore',
    name: 'explore',
    component: Explore
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/messages',
    name: 'messages',
    component: Messages
  },
  {
    path: '/messages/Messagesdetail',
    name: 'messagesDetail',
    component: MessagesDetail
  },
  {
    path: '/post',
    name: 'post',
    component: Post
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/profile/saved',
    name: 'profile-saved',
    components: {
      default: Profile,
      saved: ProfileSaved
    }
  },
  {
    path: '/profile/tagged',
    name: 'profile-tagged',
    components: {
      default: Profile,
      tagged: ProfilePostGrids
    }
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: Wallet
  },
  {
    path: '/movieindexpage',
    name: 'movieindexpage',
    component: MovieIndexPage
  },
  {
    path: '/movieindexpage/:id',
    name: 'moviedetailpage',
    component: MovieDetailPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
