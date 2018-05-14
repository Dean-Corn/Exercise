var express = require('express');
var Exercise = require('./model');

var app = express.Router();

var exercise = new Exercise();

module.exports = app
    .get('/state', (req, res) =>  res.send(exercise) )
    .post('/exerciselogin', (req, res) => {
        try{
            exercise.Login(req.body.Name);
            res.send( { success: true } );            
            } catch (error) {
            res.status(403).send({ success: false, message: error.message });
            }
    })
    .post('/bio', (req, res) => {
        try {
            exercise.SetBio(req.body.Name, req.body.Bio);
            res.send( { success: true } );            
            } catch (error) {
            res.status(403).send({ success: false, message: error.message });
            }
    })
    .post('/picture', (req, res) => {
        try {
            exercise.SetPic(req.body.Name, req.body.Pic);
            res.send( { success: true } );            
            } catch (error) {
            res.status(403).send({ success: false, message: error.message });
            }
    })
    .get('/users/:Name', (req, res) =>{
        var me = exercise.ReturnUser(req.params.Name);
        res.send(me);
    })