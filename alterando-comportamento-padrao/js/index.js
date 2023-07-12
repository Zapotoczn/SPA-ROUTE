import { Router } from './router.js'

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/about", "/pages/about.html")
router.add("/contact", "/pages/contact.html")
router.add(400, "/pages/400.html")

  router.handle()

  window.route = () => router.route()
  window.onpopstate = () => router.handle()