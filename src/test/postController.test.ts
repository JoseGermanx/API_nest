import { RoutePost } from '../postController.ts';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ServiceEndpoint } from '../service.ts';
import { vi, describe, test, expect, beforeEach } from 'vitest';

describe('RoutePost', () => {
	let routePost: RoutePost;
	let postDataSpy: unknown;

	beforeEach(async () => {
		postDataSpy = vi.fn().mockImplementation((body: unknown) => {
			return { message: 'data received', data: body };
		});
		const serviceEndpoint: ServiceEndpoint = {
			postData: postDataSpy,
			getMessage: vi.fn(),
			putData: vi.fn(),
			getData: vi.fn(),
		};

		routePost = new RoutePost(serviceEndpoint);
	});

	describe('Post', async () => {
		test('should handle POST request with body', async () => {
			const mockBody = { body: 'test' };
			await routePost.post(mockBody);
			expect(postDataSpy).toHaveBeenCalledWith(mockBody);
		});
	});
});
