import { value } from '@repo/common/config';
import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
	res.json({
		msg: 'A working backend',
		value: value,
	});
});

app.listen(5000, () => {
	console.log('app is running at 5000 ');
});
