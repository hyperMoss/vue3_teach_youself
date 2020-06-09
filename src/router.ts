import { createRouter, createWebHistory } from 'vue-router';
import { scrollWaiter } from './scrollWaiter.ts';
import { globalState } from './store.ts';
import Home from './views/Home.vue';
import Mouse from './views/Mouse.vue';
import TodoList from './views/Todo.vue';
import User from './views/User.vue';
const component = () => {
  console.log('fetching component')
  return import('./views/Generic.vue')
}
export const routerHistory = createWebHistory()
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [{ path: '/home', redirect: '/' },
  {
    path: '/',
    components: { default: Home, other: component },
    props: { default: to => ({ waited: to.meta.waitedFor }) },
  },
  {
    path: '/mouse',
    components: { default: Mouse, other: component },
  },
  {
    path: '/todo',
    components: { default: TodoList},
  },
  {
    path: '/always-redirect',
    redirect: () => ({
      name: 'user',
      params: { id: String(Math.round(Math.random() * 100)) },
    }),
  },
  { path: '/users/:id', name: 'user', component: User, props: true },
  {
    path: '/lazy',
    component: async () => {
      await delay(500)
      return component()
    },
  },
],
  async scrollBehavior(to, from, savedPosition) {
    await scrollWaiter.wait()
    if (savedPosition) {
      return savedPosition
    } else {
      // TODO: check if parent in common that works with alias
      if (to.matched.every((record, i) => from.matched[i] !== record))
        return { left: 0, top: 0 }
    }
    // leave scroll as it is by not returning anything
    // https://github.com/Microsoft/TypeScript/issues/18319
    return false
  },
})
const delay = (t: number) => new Promise(resolve => setTimeout(resolve, t))

// remove trailing slashes
router.beforeEach((to, from, next) => {
  if (/.\/$/.test(to.path)) {
    to.meta.redirectCode = 301
    next(to.path.replace(/\/$/, ''))
  } else next()
  // next()
})

router.beforeEach(async (to, from, next) => {
  // console.log(`Guard from ${from.fullPath} to ${to.fullPath}`)
  if (to.params.id === 'no-name') return next(false)

  const time = Number(to.query.delay)
  if (time > 0) {
    console.log('⏳ waiting ' + time + 'ms')
    to.meta.waitedFor = time
    await delay(time)
  }
  next()
})

router.beforeEach((to, from, next) => {
  if (globalState.cancelNextNavigation) return next(false)
  next()
})

router.afterEach((to, from) => {
  // console.log(
  //   `After guard: from ${from.fullPath} to ${
  //     to.fullPath
  //   } | location = ${location.href.replace(location.origin, '')}`
  // )
})

router.beforeEach((to, from, next) => {
  // console.log('second guard')
  if (to.query.to) next(to.query.to as string)
  else next()
})

const dirLog = {
  '': '？',
  back: '⏪',
  forward: '⏩',
}
routerHistory.listen((to, from, info) => {
  console.log(`${dirLog[info.direction]} as a ${info.type}`)
})
