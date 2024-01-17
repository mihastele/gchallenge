import {Request, Response} from "express";

export interface IndexRoutes  {
    home?: (req: Request, res: Response, next: any) => void
};