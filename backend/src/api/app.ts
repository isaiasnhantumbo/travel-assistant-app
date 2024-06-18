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
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false // Disable the `X-RateLimit-*` headers
});
// DTO's
new MappingProfiles().MappingProfiles();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
RegisterRoutes(app);
app.use(errorMiddleware);

export { app };
