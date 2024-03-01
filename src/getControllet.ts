import { Controller, Get, Query } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ServiceEndpoint } from './service.ts';

@Controller('/get')
class RouteGet {
	constructor(private readonly ServiceEndpoint: ServiceEndpoint) {}
	@Get()
	async findAll(@Query('id') id: unknown) {
		return this.ServiceEndpoint.getData(id);
	}
}

export { RouteGet };
