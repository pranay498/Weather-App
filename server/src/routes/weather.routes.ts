import { Router } from "express";
import { citySearch, currentWeather, forecastWeather } from "../controllers/weather.controller";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.get("/current", asyncHandler(currentWeather));
router.get("/forecast", asyncHandler(forecastWeather));
router.get("/search", asyncHandler(citySearch));

export default router;
