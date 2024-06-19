import { Request } from "express";
import * as jwt from "jsonwebtoken";

import { UnauthorizedError } from "./../../shared/errors/AppError";

export async function expressAuthentication (
  request: Request,
  securityName: string,
  scopes?: string[]
): Promise<any> {
  console.log({ securityName });

  if (securityName === "jwt") {
    const authHeader = request.get("Authorization");

    if (!authHeader) {
      throw new UnauthorizedError("No token provided");
    } else {
      const token = authHeader.split(" ")[1];

      let decodedToken: any;
      const TOKEN_SECRET = process.env.TOKEN_SECRET;

      try {
        decodedToken = jwt.verify(token, TOKEN_SECRET);

        if (!decodedToken) {
          throw new UnauthorizedError("Not authenticated");
        }
      } catch (e) {
        throw new UnauthorizedError("Invalid token");
      }
    }
  }
}
