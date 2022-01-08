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
    
    submit(form) {
      return this.knex("form")
        .select("*")
        .insert({
            name: 'name'
        })
        
    }
  }
  
  module.exports = FormService;
  
  //For trying individual js files
  
  const knexFile = require("../knexfile").development;
  const knex = require("knex")(knexFile);
  let formService = new FormService(knex);
  // formService.list().then((a) => console.log(a))

  
  