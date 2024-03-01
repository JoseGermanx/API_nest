import { Controller, Get } from '@nestjs/common';
import { ServiceEndpoint } from './service.ts';

@Controller()
export class SampleController {
	constructor(private readonly ServiceEndpoint: ServiceEndpoint) {}
	@Get()
	helloWorld() {
		return this.ServiceEndpoint.getMessage;
	}
}
