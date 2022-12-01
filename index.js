const PORT = 8000;
import express from 'express';
import { response } from 'express';
import  routes  from './routes/routes.js';

const app = express();

app.use("/",routes);

app.listen(PORT,()=>{
    console.info(`Serve is running on http://localhost:${PORT}`)
})