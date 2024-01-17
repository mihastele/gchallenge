import {Request, Response} from "express";
import {Game, Player} from "../../db/dbinit";

import {ApiRoutes} from "../../routes/api/routingSignature";


const controller: ApiRoutes = {};

controller.listPlayers = async (req: Request, res: Response, next) => {
    const players: any = await Player.findAll()

    return res.status(200).json({players})
}

controller.getPlayer = async (req: Request, res: Response, next) => {
    const {id} = req.params

    const player: any = await Player.findOne({
        where: {
            id
        }
    })

    return res.status(200).json({player})
}

controller.updatePlayer = async (req: Request, res: Response, next) => {
    const {id} = req.params

    const {name, surname, birthdate} = req.body

    const player: any = await Player.findOne({
        where: {
            id
        }
    })

    player.name = name || player.name
    player.surname = surname || player.surname
    player.birthdate = birthdate || player.birthdate

    await player.save()

    return res.status(200).json({player})
}

controller.removePlayer = async (req: Request, res: Response, next) => {
    const {id} = req.params

    const player: any = await Player.findOne({
        where: {
            id
        }
    })

    await player.destroy()

    return res.status(200).json({player})
}

controller.addPlayer = async (req: Request, res: Response, next) => {
    const games: any = await Game.findAll()
    // const players: any = await Player.findAll()

    const {name, surname, birthdate} = req.body


    // const newGame = await Game.create({
    //     title: `${randomGamblingGames[Math.floor(Math.random() * randomGamblingGames.length)]} ${randomSportsNames[Math.floor(Math.random() * randomSportsNames.length)]} ${Math.floor(Math.random() * 100)}`,
    //     description: 'Super duper fun game',
    // });
    //
    // games.push(newGame)

    const newPlayer = await Player.create({
        name,
        surname,
        birthdate,
        game_id: games[Math.floor(Math.random() * games.length)].id,
    });

    // players.push(newPlayer);

    await newPlayer.save();

    // console.log(games)
    // console.log(players);

    return res.status(200).json({
        newPlayer,
    })
}


controller.listGames = async (req: Request, res: Response, next) => {
    const games: any = await Game.findAll()

    return res.status(200).json({games})
}

controller.getGame = async (req: Request, res: Response, next) => {
    const {id} = req.params

    const game: any = await Game.findOne({
        where: {
            id
        }
    })

    return res.status(200).json({game})
}

controller.updateGame = async (req: Request, res: Response, next) => {
    const {id} = req.params

    const {title, description} = req.body

    const game: any = await Game.findOne({
        where: {
            id
        }
    })

    game.title = title || game.title
    game.description = description || game.description

    await game.save()

    return res.status(200).json({game})
}

controller.removeGame = async (req: Request, res: Response, next) => {
    const {id} = req.params

    const game: any = await Game.findOne({
        where: {
            id
        }
    })

    await game.destroy()

    return res.status(200).json({game})
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
