<script lang="ts">
  export let product: Product;

let action = product.rowid ? "update" : "create";
</script>

<div class="card">
  <div class="card-header">Product</div>
  <div class="card-body">
    <form method="post"
    action="/product/{product.rowid}?/{action}"
    >
      <label for="name">Name</label>
      <input
        id="name"
        name="name"
        class="form-control"
        bind:value={product.name}
      />

      <label for="price">Price</label>
      <input
        name="price"
        id="price"
        class="form-control"
        bind:value={product.price}
      />

      <button class="btn btn-primary" type="submit">Save</button>
    </form>
  </div>
</div>
