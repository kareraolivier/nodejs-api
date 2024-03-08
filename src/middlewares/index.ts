import { Request, Response, NextFunction } from "express";

export const noStore = (
  _: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log("noStore middleware called");
  res.setHeader("Cache-Control", "no-store");
  next();
};
