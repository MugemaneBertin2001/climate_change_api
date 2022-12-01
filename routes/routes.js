import express from "express";
import pathsResult from "../controllers/pathsResult.js";

 const routes = express.Router();

routes.get("/",pathsResult.home);

routes.get("/news",pathsResult.allNewspaper);

routes.get("/news/:newspaperID",pathsResult.spacificNewspaper);
export default routes 

