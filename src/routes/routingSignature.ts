import {Request, Response} from "express";

export interface IndexRoutes  {
    home?: (req: Request, res: Response, next: any) => void,
    addPlayer?: (req: Request, res: Response, next: any) => void,
    addGame?: (req: Request, res: Response, next: any) => void,
}