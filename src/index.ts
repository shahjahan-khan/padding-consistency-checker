import express from 'express';
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './config/swagger';
import { checkNumberPadding } from './padding-checker/padding-checker';
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use('/app-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec) )

app.post("/check-padding", (req, res) => {
    const { values } = req.body;

    if (!Array.isArray(values) || !values.every(v => typeof v === "string")) {
        return res.status(400).json({
            error: "values must be an array of strings"
        });
    }

    const result = checkNumberPadding(values);
    return res.json({ result });
});

app.get("/", (req, res) => {
    return res.send('app works');
});

app.listen(PORT, () =>{
    console.log(`app is running: PORT: ${PORT}`)
})