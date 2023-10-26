import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const body = await request.formData();
		const id = body.get('id');
		console.log({ id });
		return { id };
	}
};
