let express = require("express");
const userModel = require("../model/userModel");
let { bodyChecker } = require("../util_funct");
let userRouter = express.Router();
const { createElement,
    getElement, deleteElement,
    updateElement } = require("../helper/factory");

let createUser = createElement(userModel);
let getUser = getElement(userModel);
let deleteUser = deleteElement(userModel);
let updateUser = updateElement(userModel);

userRouter
    .route("/:id")
    .get(bodyChecker, getUser)
    .patch(bodyChecker, updateUser)
    .delete(bodyChecker, deleteUser)

userRouter
    .route("/")
    .get(getUser)
    .post(bodyChecker, createUser);

module.exports = userRouter;