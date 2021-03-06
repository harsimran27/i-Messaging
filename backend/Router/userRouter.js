const express = require("express");
const userModel = require("../model/userModel");
let userRouter = express.Router();
const { createElement, getElement, deleteElement, updateElement } = require("../helper/factory");
const { bodyChecker, protectRoute } = require("../util_funct");

let createUser = createElement(userModel);
let getUser = getElement(userModel);
let updateUser = updateElement(userModel);
let deleteUser = deleteElement(userModel);

userRouter.use(protectRoute);

userRouter
    .route("/:id")
    .get(bodyChecker, getUser)
    .patch(bodyChecker, updateUser)
    .delete(bodyChecker, deleteUser)

userRouter
    .route("/")
    .post(bodyChecker, createUser);

module.exports = userRouter;