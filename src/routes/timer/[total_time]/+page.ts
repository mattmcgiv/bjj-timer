import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
export const load: PageLoad = ({ params }) => {
	if (params.total_time) {
		const totalTime = parseInt(params.total_time);
		if (isNaN(totalTime)) {
			throw error(400, 'Total time must be a number');
		} else {
			if (totalTime >= 1 && totalTime <= 3600) {
				return {
					totalTime: totalTime
				};
			} else {
				throw error(400, 'Total time must be between 1 and 3600 seconds');
			}
		}
	}
};
