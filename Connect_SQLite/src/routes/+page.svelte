<script lang="ts">
  import type { PageServerData } from "./$types";
  export let data : PageServerData;
  </script>

<h1>Products</h1>
<table class="table table-bodered">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    {#each data.products as product}
      <tr>
        <td>{product.rowid}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    {/each}
  </tbody>
</table>