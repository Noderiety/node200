module.exports = (app) => {
	app.get('/user', (req, res) => res.end('This is /user'))
}