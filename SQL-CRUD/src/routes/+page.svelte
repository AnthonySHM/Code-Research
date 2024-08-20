<script lang="ts">
import DeleteButton from "$lib/DeleteButton.svelte";
import type { PageServerData } from "./$types";
export let data : PageServerData;

</script>

<h1>Products</h1>

  <a href="/product/create" class="btn btn-primary">Create</a>


<table class="table table-bodered">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Price</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {#each data.products as product}
      <tr>
        <td>{product.rowid}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <a href="/product/{product.rowid}" class="btn btn-small btn-primary">Edit</a>
          <DeleteButton {product} />
        </td>
      </tr>
    {/each}
  </tbody>
</table>
