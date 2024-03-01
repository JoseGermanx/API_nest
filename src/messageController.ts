import { Controller, Get } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ServiceEndpoint } from './service.ts';

@Controller()
export class SampleController {
	constructor(private readonly ServiceEndpoint: ServiceEndpoint) {}
	@Get()
	helloWorld() {
		return this.ServiceEndpoint.getMessage;
	}
}
