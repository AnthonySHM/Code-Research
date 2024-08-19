<script lang="ts">
    export let product:Product;
</script>
<form method="post" action="/product/{product.rowid}?/delete" class="d-inline-block">
<button type="submit" class="btn btn-danger btn-sm">Delete</button>
</form>