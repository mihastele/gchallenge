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

controller.home = (req: Request, res: Response, next) => {
    return res.render('pages/index', {title: 'Express'});
}

controller.addPlayer = async (req: Request, res: Response, next) => {
    const games: any = await Game.findAll()
    const players: any = await Player.findAll()


    // const newGame = await Game.create({
    //     title: `${randomGamblingGames[Math.floor(Math.random() * randomGamblingGames.length)]} ${randomSportsNames[Math.floor(Math.random() * randomSportsNames.length)]} ${Math.floor(Math.random() * 100)}`,
    //     description: 'Super duper fun game',
    // });
    //
    // games.push(newGame)

    const newPlayer = await Player.create({
        name: 'John',
        surname: 'Doe',
        birthdate: new Date(),
        game_id: games[Math.floor(Math.random() * games.length)].id,
    });

    players.push(newPlayer);

    await newPlayer.save();

    // console.log(games)
    console.log(players);

    return res.status(200).json({
        games,
        players
    })
}

controller.addGame = async (req: Request, res: Response, next) => {


    console.log(`Request body: ${JSON.stringify(req.body)}`)

    const {title, description} = req.body

    const newGame = await Game.create({
        title,
        description,
    });

    await newGame.save()

    return res.status(200).json({newGame})
}


module.exports = controller;