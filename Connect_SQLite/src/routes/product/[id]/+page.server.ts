import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ params, locals }) => {
  let product = await locals.db.get(
    "select rowid,* from products where rowid=?",
    params.id
  );
  return {product};
};


import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
    create: async (event) => {
      let data = await event.request.formData()
      await event.locals.db.run('insert into products (name, price) values (?, ?)',
      data.get('name'),
      data.get('price')
                          )
      redirect (303, '/')
    },
    update: async (event) => {
      let data = await event.request.formData()
      await event.locals.db.run('update products set name=?, price=? where rowid=?',
      data.get('name'),
      data.get('price'),
      event.params.id
                          )
      redirect (303, '/')
    },
    delete: async (event) => {
      await event.locals.db.run('delete from products where rowid=?', event.params.id)
      redirect (303, '/')
    },

  } satisfies Actions;
  