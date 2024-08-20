<script lang="ts">
  import ProductForm from "$lib/ProductForm.svelte";

    let product: Product ={
     rowid:0,
     name:'',
     price: 0   
    }
</script>

<ProductForm {product} />


