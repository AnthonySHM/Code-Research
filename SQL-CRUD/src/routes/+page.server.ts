import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  let products: Product[] = await locals.db.all('select rowid,* from products;')
  return {products};
};
