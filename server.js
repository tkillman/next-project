const next = require('next');
const routes = require('./routes');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);
const express = require('express');

async function start(port = 3001) {
  try {
    await app.prepare();
    express().use(handler).listen(3001);
  
    console.log(`server on. port: ${port}`);
  } catch (e) {
    console.error(e);
  }
}

start();