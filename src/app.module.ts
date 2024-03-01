import { Module } from '@nestjs/common';
import { RoutePost } from './postController.ts';
import { ServiceEndpoint } from './service.ts';
import { SampleController } from './messageController.ts';
import { RouteGet } from './getControllet.ts';
import { RoutePut } from './putController.ts';

@Module({
	controllers: [SampleController, RoutePost, RoutePut, RouteGet],
	providers: [ServiceEndpoint],
})
export class AppModule {}
