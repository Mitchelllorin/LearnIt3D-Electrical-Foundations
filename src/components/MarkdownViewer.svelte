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

<div class="lesson" bind:this={container}>

    {@html html}

</div>

<style>
.lesson {
    padding: 20px;
    font-size: 1.1rem;
    line-height: 1.6;
}
</style>
I don't understand why you don't know I guess the most basic of things you just sat here and fucking made the fucking thing with me and you don't even know that it's module 01:02 03
