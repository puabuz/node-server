import express, {Request, Response} from 'express'
const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    let string = 'Any string';
    res.send(string);
})

app.listen(port, () => {
    console.log(`Сервер запущен на порту: ${port}`)
})