import "express-async-errors";

import "../shared/container";

import cors from "cors";
import express, { Application } from "express";
import { rateLimit } from "express-rate-limit";
import swaggerUi from "swagger-ui-express";

import { MappingProfiles } from "../app/helpers/mappings/mapper";
import swaggerDocs from "./docs/swagger.json";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { RegisterRoutes } from "./routes";

const app: Application = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false
});
// DTO's
new MappingProfiles().MappingProfiles();
app.use(limiter);
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
RegisterRoutes(app);
app.use(errorMiddleware);

export { app };
