require('dotenv').config();
const express = require("express");
const cors=require("cors");

const connectTODb= require('./config/db.js');
// const { connect } = require('mongoose');
// import express from 'express';

const app=express();

// Express middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// init connect db 
connectTODb()

const userRoutes= require('./routes/user_routes.js')
 
app.use('/',userRoutes)

module.exports=app;