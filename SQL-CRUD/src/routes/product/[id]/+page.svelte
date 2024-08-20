<script lang="ts">
  import ProductForm from "$lib/ProductForm.svelte";
  import type { PageServerData } from "./$types";
  export let data: PageServerData;

</script>

<ProductForm product={data.product} />


