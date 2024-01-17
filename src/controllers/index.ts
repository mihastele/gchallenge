import {Request, Response} from 'express';
import {IndexRoutes} from "../routes/routingSignature";
import {Game, Player, Picture, sequelize} from "../db/dbinit";
import {Mode} from "node:fs";
import {Model} from "sequelize";

const controller: IndexRoutes = {};

const randomGamblingGames = [
    "Poker",
    "Blackjack",
    "Baccarat",
    "Craps",
    "Roulette",
    "Keno",
    "Slot machines",
    "Video Poker",
]

const randomSportsNames = [
    "football",
    "basketball",
    "tennis",
    "volleyball",
    "baseball",
    "golf",
    "rugby",
    "cricket",
    "hockey",
]

controller.home = async (req: Request, res: Response, next) => {

    const games = await Game.findAll()
    const players = await Player.findAll()

    return res.render('pages/index', {games, players, title: 'Express'});
}



module.exports = controller;