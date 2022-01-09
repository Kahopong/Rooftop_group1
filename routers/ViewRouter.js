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

        router.get("/index", (req, res) => {
            res.render("index");
        });

        router.get("/upload", (req, res) => {
            res.render("upload");
        });

        router.get("/success-upload", (req, res) => {
            res.render("success-upload");
        });




        return router;
    }
}

module.exports = ViewRouter;