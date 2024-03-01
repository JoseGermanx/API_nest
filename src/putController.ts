import { Controller, Put, Param } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ServiceEndpoint } from './service.ts';

@Controller('/put')
class RoutePut {
	constructor(private readonly ServiceEndpoint: ServiceEndpoint) {}
	@Put(':id')
	async findOne(@Param('id') id: string) {
		return this.ServiceEndpoint.putData(id);
	}
}
export { RoutePut };
