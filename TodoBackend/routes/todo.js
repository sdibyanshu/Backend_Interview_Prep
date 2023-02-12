const express=require('express');
const {getTodo} =require('../controllers/TodoController');

const todoRoute=express.Router();
todoRoute.get("/",getTodo);