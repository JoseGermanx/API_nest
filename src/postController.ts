import { Body, Controller, Post } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ServiceEndpoint } from './service.ts';

@Controller('/post')
class RoutePost {
	constructor(private readonly serviceEndpoint: ServiceEndpoint) {}

	@Post()
	async findAll(@Body() body: unknown) {
		return this.serviceEndpoint.postData(body);
	}
}

export { RoutePost };
