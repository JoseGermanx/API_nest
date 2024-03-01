import { RoutePost } from '../postController.ts';
import { ServiceEndpoint } from '../service.ts';
import { vi, describe, test, expect, beforeEach } from 'vitest';
import { Test } from '@nestjs/testing';

describe('RoutePost', () => {
	let routePost: RoutePost;
	let serviceEndpoint: ServiceEndpoint;

	beforeEach(async () => {
		const moduleRef = await Test.createTestingModule({
			controllers: [RoutePost],
			providers: [ServiceEndpoint],
		}).compile();

		serviceEndpoint = moduleRef.get<ServiceEndpoint>(ServiceEndpoint);
		routePost = moduleRef.get<RoutePost>(RoutePost);
	});

	describe('findAll', async () => {
		test('should handle POST request with body', async () => {
			const mockBody = { body: 'test' };

			const postDataSpy = vi.fn().mockImplementation((body: unknown) => {
				return { message: 'data received', data: body };
			});
			serviceEndpoint.postData = postDataSpy;

			await routePost.findAll(mockBody);
			expect(postDataSpy).toHaveBeenCalledWith(mockBody);
		});
	});
});
