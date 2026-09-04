import express, {type Request, type Response} from 'express';

const LoginRouter = express.Router();

interface LoginData{
    email:string;
    password:string
}

LoginRouter.post('/api/login', async (req: Request<{}, {}, LoginData>, res: Response)=> {
        const { email, password } = req.body;
        res.status(200).json({ message: "Success" });
        return;
    });

export default LoginRouter