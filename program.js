"use strict";
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true)
    let jsonResponse = undefined
    if (parsedUrl.pathname === '/api/parsetime') {
        const date = new Date(parsedUrl.query.iso)
        jsonResponse = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
    } else if (parsedUrl.pathname === '/api/unixtime') {
        jsonResponse = { unixtime: new Date(parsedUrl.query.iso).getTime() }
    }
    if (jsonResponse) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(jsonResponse))
    }
    else {
        res.writeHead(404);
        res.end();
    }
})
server.listen(+process.argv[2]);