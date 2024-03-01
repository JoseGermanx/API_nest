import { AppModule } from './app.module.ts';
import { NestFactory } from '@nestjs/core';
import { type Server } from 'http';

const app = await NestFactory.create(AppModule);
await app.listen(3000);

// disposing on hot reload, dev env code only!
import.meta.hot?.on('vite:beforeFullReload', async () => {
	const server = app.getHttpServer() as Server;
	server.closeAllConnections();
	await app.close();
});
