import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Home | Boom",
    isHome: true
  })
})

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About | Boom",
    isAbout: true
  })
})
router.get("/add", (req, res) => {
  res.render("add", {
    title: "Add Products",
    isAdd: true
  })
})

router.get("/products", (req, res) => {
  res.render("products", {
    title: "All Products",
    isProducts: true
  })
})

export default router;