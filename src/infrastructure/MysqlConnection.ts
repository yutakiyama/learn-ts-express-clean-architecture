import { IDBConnection } from '@/interfaces/databases/IDBConnection';
import mysql from 'mysql';
import { databaseConfig } from '@/config/database';
import util from 'util';

export class MysqlConnection extends IDBConnection {
  private pool: any;

  constructor() {
    super();

    console.log('Create mysql connection pool.');

    this.pool = mysql.createPool({
      ...databaseConfig,
      connectionLimit: 5,
    });

    console.log('pool:', this.pool);

    // connection test
    this.pool.getConnection((error: any, connection: any) => {
      if (error) {
        console.error(`DB:: connection error. code: ${error.code}`);
      }

      if (connection) connection.release();
      return;
    });

    this.pool.query = util.promisify(this.pool.query);

    //
    this.pool.on('connection', function (connection: any) {
      console.log('DB:: Connected');
    });

    this.pool.on('acquire', function (connection: any) {
      console.log(`DB:: Connection ${connection.threadId} acquired`);
    });

    this.pool.on('enqueue', function () {
      console.log('DB:: Waiting for available connection');
    });

    this.pool.on('release', function (connection: any) {
      console.log(`DB:: Connection ${connection.threadId} released`);
    });
  }

  execute(query: string, params: any = null): any {
    if (params !== null) {
      return this.pool.query(query, params);
    } else {
      return this.pool.query(query);
    }
  }
}
