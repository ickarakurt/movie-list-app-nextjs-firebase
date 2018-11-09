const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();


	// This is the default route, don't edit this.
	server.get('*', (req, res) => {
		return handle(req, res);
	});
	const port = process.env.PORT || 3000;

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on port ${port}...`);
	});
});
