class FormRouter {
    constructor(formService, express) {
        this.formService = formService;
        this.express = express;
    }

    router() {
        let router = this.express.Router();
        router.get("/", this.get.bind(this));
        router.post("/", this.post.bind(this));

        return router;
    }

    // GET form data
    // ==================================
    get(req, res) {
        return this.formService.list()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.status(500);
                return res.json(err);
            });
    }

    // POST form data
    // ==================================
    post(req, res) {
        return this.formService
            .submit(req.body.form)
            .then(() => this.formService.list())
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.status(500);
                return res.json(err);
            });
    }
}

module.exports = FormRouter;