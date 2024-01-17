import {Request, Response} from "express";
import {Game, Player} from "../../db/dbinit";
import {ApiRoutes} from "../../routes/api/routingSignature";
import NodeCache from "node-cache";

const myCache = new NodeCache();
const controller: ApiRoutes = {};

function deleteCache(startsW: string) {
    const allKeys = myCache.keys();
    const gameListKeys = allKeys.filter(key => key.startsWith(startsW));
    gameListKeys.forEach(key => {
        myCache.del(key)
        console.log(`Deleted key: ${key}`)
    });
    // gameListKeys.forEach(key => myCache.del(key));
}


controller.listPlayers = async (req: Request, res: Response, next) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;

    const cacheKey = `playersList_page_${page}_limit_${limit}`;
    const cacheContent = myCache.get(cacheKey);

    if (cacheContent) {
        return res.status(200).json({players: cacheContent});
    } else {
        const players: any = await Player.findAll({limit, offset});
        myCache.set(cacheKey, players);
        return res.status(200).json({players});
    }
}

controller.getPlayer = async (req: Request, res: Response, next) => {
    const {id} = req.params;
    const player: any = await Player.findOne({
        where: {
            id
        }
    });

    return res.status(200).json({player});
}

controller.updatePlayer = async (req: Request, res: Response, next) => {
    const {id} = req.params;
    const {name, surname, birthdate} = req.body;
    const player: any = await Player.findOne({
        where: {
            id
        }
    });

    player.name = name || player.name;
    player.surname = surname || player.surname;
    player.birthdate = birthdate || player.birthdate;

    await player.save();
    deleteCache("playersList");
    return res.status(200).json({player})
}

controller.removePlayer = async (req: Request, res: Response, next) => {
    const {id} = req.params;
    const player: any = await Player.findOne({
        where: {
            id
        }
    });

    await player.destroy();
    deleteCache("playersList");
    return res.status(200).json({player});
}

controller.addPlayer = async (req: Request, res: Response, next) => {
    const games: any = await Game.findAll();
    const {name, surname, birthdate} = req.body;
    const newPlayer = await Player.create({
        name,
        surname,
        birthdate,
        game_id: games[Math.floor(Math.random() * games.length)].id,
    });


    await newPlayer.save();
    deleteCache("playersList");
    return res.status(200).json({
        newPlayer,
    });
}

controller.listGames = async (req: Request, res: Response, next) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;

    const cacheKey = `gamesList_page_${page}_limit_${limit}`;
    const cacheContent = myCache.get(cacheKey);

    if (cacheContent) {
        return res.status(200).json({games: cacheContent});
    } else {
        const games: any = await Game.findAll({limit, offset});
        myCache.set(cacheKey, games);
        return res.status(200).json({games});
    }
}

controller.getGame = async (req: Request, res: Response, next) => {
    const {id} = req.params;
    const game: any = await Game.findOne({
        where: {
            id
        }
    });

    return res.status(200).json({game});
}

controller.updateGame = async (req: Request, res: Response, next) => {
    const {id} = req.params;
    const {title, description} = req.body;
    const game: any = await Game.findOne({
        where: {
            id
        }
    });

    game.title = title || game.title;
    game.description = description || game.description;

    await game.save();
    deleteCache("gamesList");
    return res.status(200).json({game});
}

controller.removeGame = async (req: Request, res: Response, next) => {
    const {id} = req.params;
    const game: any = await Game.findOne({
        where: {
            id
        }
    });

    await game.destroy();
    deleteCache("gamesList");
    return res.status(200).json({game});
}

controller.addGame = async (req: Request, res: Response, next) => {
    console.log(`Request body: ${JSON.stringify(req.body)}`);
    const {title, description} = req.body;
    const newGame = await Game.create({
        title,
        description,
    });

    await newGame.save();
    deleteCache("gamesList");
    return res.status(200).json({newGame});
}


module.exports = controller;
