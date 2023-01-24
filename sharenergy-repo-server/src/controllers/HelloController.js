class HelloController {
    async index(req, res) {
        return res.json({ hello: 'world sharenergy connect full'});
    }
}

export default new HelloController();