const express = require('express')
const { get_info, get_id, get_post, new_user, book_pet } = require('../controllers/pets_controller')
const router = express.Router()




router.route('/').get(get_info)
router.route("/:id").get(get_id)
router.route("/new_user").post(new_user)
router.route("/login").post(get_post)
router.route("/booking").post(book_pet)


module.exports = router