//list edit info for shops and users

class FormService {
    constructor(knex) {
        this.knex = knex;
    }

    list() {
        return this.knex("form")
            .select("*")
            .then((info) => {
                if (info.length > 0) {
                    return info;
                } else {
                    throw new Error("Cannot list info.");
                }
            });
    }

    submit_s1(input) {
        return this.knex("farmlog")
            .insert({
                s1q1: input.s1q1,
                s1q2: input.s1q2,
                s1q3: input.s1q3,
                s1q4: input.s1q4,
                s1q5: input.s1q5,
            })
    }
    submit_s2(input) {
        return this.knex("planting")
            .insert({
                s2q1: input.s2q1,
                s2q1_remarks: input.s2q1_remarks,
                s2q2: input.s2q2,
                s2q2_fertiliser: input.s2q2_fertiliser,
                s2q2_method: input.s2q2_method,
                s2q3: input.s2q3,
                s2q3_quantity: input.s2q3_quantity,
                s2q3_remarks: input.s2q3_remarks,
                s2q4: input.s2q4,
                s2q4_fertiliser: input.s2q4_fertiliser,
                s2q4_usage: input.s2q4_usage,
                s2q4_remarks: input.s2q4_remarks,
                s2q5: input.s2q5,
            })
    }
    submit_s3(input) {
        return this.knex("irrigation")
            .insert({
                s3q1: input.s3q1,
                s3q2: input.s3q2,
                s3q3: input.s3q3,
            })
    }

    submit_s4(input) {
        return this.knex("grooming")
            .insert({
                s4q1: input.s4q1,
                s4q1_pest: input.s4q1_pest,
                s4q1_usage: input.s4q1_usage,
                s4q2: input.s4q2,
                s4q3: input.s4q3,
                s4q4: input.s4q4,
            })
    }

    submit_s5(input) {
        return this.knex("harvest")
            .insert({
                s5q1: input.s5q1,
                s5q2: input.s5q2,
                s5q3: input.s5q3,
            })
    }

    submit_s6(input) {
        return this.knex("garden_management")
            .insert({
                s6q1: input.s6q1,
                s6q1_remarks: input.s6q1_remarks,
                s6q2_num: input.s6q2_num,
                s6q3: input.s6q3,
                s6q3_item: input.s6q3_item,
                s6q3_quantity: input.s6q3_quantity,
                s6q4: input.s6q4,
                s6q4_remarks: input.s6q4_remarks,
            })
    }

    submit_s7(input) {
        return this.knex("other_issues")
            .insert({
                other_issues: input.other_issues,
            })
    }

    ///s6q2_num
}


module.exports = FormService;

//For trying individual js files

const knexFile = require("../knexfile").development;
const knex = require("knex")(knexFile);
let formService = new FormService(knex);
// formService.list().then((a) => console.log(a))