const express = require("express");
const messageModel = require("../model/messageModel");
let messageRouter = express.Router();
const { createElement, getElement, deleteElement, updateElement } = require("../helper/factory");

let createChannel = createElement(messageModel);

messageRouter
    .route("/new/channel")
    .post(createChannel);

messageRouter
    .route("/get/channelList")
    .get(getChannelList)

messageRouter
    .route("/new/message")
    .post(updateMessage)

messageRouter
    .route("/get/conversation")
    .get(getConversation)

async function getChannelList(req, res) {
    try {
        let data = await messageModel.find();

        let channels = [];

        data.map((channelData) => {
            const channelInfo = {
                id: channelData._id,
                name: channelData.channel.name,
                description: channelData.channel.description,
                tag: channelData.channel.tag,
            }
            channels.push(channelInfo);
        })

        res.status(200).json({
            channels: channels,
        })

    } catch (err) {
        res.status(404).json({
            message: err.message,
        })
    }
}

async function updateMessage(req, res) {

    try {
        let data = await messageModel.findByIdAndUpdate(
            { _id: req.query.id },
            {
                $push: { conversation: req.body }
            })

        res.status(200).json({
            data: data
        })

    } catch (err) {
        res.status(404).json({
            message: err.message,
        })
    }
}

async function getConversation(req, res) {
    try {
        let data = await messageModel.findById({ _id: req.query.id });

        res.status(200).json({
            data: data,
        })

    } catch (err) {
        res.status(404).json({
            message: err.message,
        })
    }
}



module.exports = messageRouter;