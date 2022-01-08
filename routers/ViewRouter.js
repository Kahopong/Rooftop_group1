//******** View Router *********
// //================================
// const auth = require("../Authentication/auth");
class ViewRouter {
    constructor(express) {
        this.express = express;
    }

    router() {
        let router = this.express.Router();

        //Error Page
        router.get("/error", (req, res) => {
            res.render("error", {
                error: req.flash("error"),
            });
        });

        router.get("/sections", (req, res) => {
            res.render("sections");
        });




        return router;
    }
}

module.exports = ViewRouter;