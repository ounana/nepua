import { createPool, MysqlError, Pool, PoolConnection } from 'mysql';

const POOL: Pool = createPool({
	connectionLimit: 10,
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '123456',
	database: 'my_db',
})

/**
 * query sql
 * @param sql 
 */
export function Query<T>(sql: string): Promise<T> {
	return new Promise<T>((
		resolve: (value: T) => void,
		reject: (reason: MysqlError) => void
	) => {
		POOL.getConnection((err: MysqlError, connection: PoolConnection) => {
			if (err) return reject(err)
			connection.query(sql, (err: MysqlError, results: T) => {
				//释放
				connection.release()
				err ? reject(err) : resolve(results)
			})
		})
	})
}