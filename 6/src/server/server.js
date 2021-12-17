import express from "express";
import ReactDOM from 'react-dom/server';
// import { Header } from "../shared/Header.tsx";
import { App } from "../App";
import { indexTemplate } from "./indexTemplate.js";

const app=express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(App())),

    );
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});