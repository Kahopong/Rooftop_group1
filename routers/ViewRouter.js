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

        router.get("/modal-form", (req, res) => {
            res.render("modal-form");
        });

        router.get("/upload", (req, res) => {
            res.render("upload");
        });

        router.get("/success", (req, res) => {
            res.render("success");
        });




        return router;
    }
}

module.exports = ViewRouter;