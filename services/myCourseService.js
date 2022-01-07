//List my course
//current booking,favourite and reviews

class MyCourseService {
  constructor(knex) {
    this.knex = knex;
  }

  listbooking(user_id) {
    return this.knex
      .select("*")
      .from("user_booking")
      .join("course", "user_booking.course_id", "course.id")
      .where("users_id", user_id)
      .where("listing", null);
  }

  listfav(user_id) {
    return this.knex
      .select("*")
      .from("user_favorite")
      .join("course", "user_favorite.course_id", "course.id")
      .where("users_id", user_id)
      .where("listing", null);
  }
}

module.exports = MyCourseService;

//For trying individual js files

const knexFile = require("../knexfile").development;
const knex = require("knex")(knexFile);
let myCourseService = new MyCourseService(knex);

// myCourseService.listbooking(2)
// myCourseService.listfav(1)
