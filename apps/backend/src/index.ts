import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
	res.json({
		msg: 'A working backend',
	});
});

app.listen(5000, () => {
	console.log('app is running at 5000 ');
});
