import {Request, Response} from "express";

export interface ApiRoutes  {
    addPlayer?: (req: Request, res: Response, next: any) => void,
    updatePlayer?: (req: Request, res: Response, next: any) => void,
    removePlayer?: (req: Request, res: Response, next: any) => void,
    listPlayers?: (req: Request, res: Response, next: any) => void,
    getPlayer?: (req: Request, res: Response, next: any) => void,
    addGame?: (req: Request, res: Response, next: any) => void,
    updateGame?: (req: Request, res: Response, next: any) => void,
    removeGame?: (req: Request, res: Response, next: any) => void,
    listGames?: (req: Request, res: Response, next: any) => void,
    getGame?: (req: Request, res: Response, next: any) => void,
};