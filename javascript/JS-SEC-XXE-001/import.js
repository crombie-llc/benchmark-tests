const express = require('express');
 const xml2js = require('xml2js');
 
const parser = new xml2js.Parser();
 
 router.post('/upload', async (req, res) => {
   const result = await parser.parseStringPromise(req.body);
   res.json(result);
 });