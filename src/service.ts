import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ServiceEndpoint {
	getMessage(): string {
		return 'Hello World';
	}

	postData(body: any): any {
		if (!body || Object.keys(body).length === 0) {
			throw new HttpException(
				'Request body is missing or empty',
				HttpStatus.BAD_REQUEST,
			);
		}
		return { message: 'data received', data: body };
	}

	putData(id: string): any {
		return { message: id };
	}

	getData(id: unknown): any {
		return { message: id };
	}
}
