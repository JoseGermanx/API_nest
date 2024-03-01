import { Body, Controller, Post } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ServiceEndpoint } from './service.ts';

@Controller('/post')
class RoutePost {
	ServiceEndpoint: ServiceEndpoint | undefined;
	constructor(private readonly serviceEndpoint: ServiceEndpoint) {}

	@Post()
	//ambien el nombre del método de findAll a post
	async post(@Body() body: unknown) {
		return this.serviceEndpoint.postData(body);
	}
}

export { RoutePost };
