<script>
    import { onMount } from 'svelte';
    import { marked } from 'marked';

    export let file;
    let html = '';

    onMount(async () => {
        const res = await fetch(file);
        const text = await res.text();
        html = marked(text);
    });
</script>

<div class="lesson">

    {@html html}

</div>

<style>
.lesson {
    padding: 20px;
    font-size: 1.1rem;
    line-height: 1.6;
}
</style>
