import Express from 'express';
import bodyParser from 'body-parser';
import { router } from './router';

const server = () => {
  const express = Express();
  const port = 8888;

  express.use(bodyParser.urlencoded({ extended: true }));
  express.use(bodyParser.json());

  express.use((req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });

  /**
   * routing呼び出し
   */
  express.use('/', router);

  express.listen(port, () => {
    console.log('Started Express Process');
    console.log(`Running on http://localhost:${port}`);
  });
};

server();
