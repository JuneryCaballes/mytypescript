import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.post('/user', (req: Request, res: Response) => {   
    const { firstName, lastName, email } = req.body;

    if (!firstName || !lastName || !email) {
        return res.status(400).json({ error: 'Missing required fields' });
    }   
    const user = {
        id: Math.floor(Math.random() * 1000),
        firstName,
        lastName,
        email
    };
    res.status(201).json(user);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 