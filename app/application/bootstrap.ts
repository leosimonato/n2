import db from '../persistence/db/mongodb/config';
import server from './server';

const bootstrap = async () => {
   await db();
   await server();
};

bootstrap();