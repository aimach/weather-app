import express from "express";
import { Request, Response } from "express";
import axios from "axios";
require("dotenv").config();

const app = express();
const port = 3000;

app.get(
  "/forecast/:cityName/:nbOfDays",
  async (req: Request, res: Response) => {
    try {
      const apiKey = process.env.API_KEY;
      const { cityName, nbOfDays } = req.params;
      const forecast = await axios.get(
        `
http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=${nbOfDays}&aqi=no&alerts=no&lang=fr`
      );
      res.send(forecast.data);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Error while fetching the forecast" });
    }
  }
);

app.get("/search/:cityName", async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.API_KEY;
    const { cityName } = req.params;
    const cities = await axios.get(
      `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${cityName}&country=France`
    );
    console.log();
    res.send(cities.data);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Error while fetching the forecast" });
  }
});

// start the server
app.listen(port, () =>
  console.log(`Newspaper API listening at http://localhost:${port}`)
);
