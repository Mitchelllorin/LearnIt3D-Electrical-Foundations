<script>
    import MarkdownViewer from '../components/MarkdownViewer.svelte';
    export let moduleId;
    export let lessonId;

    let filePath = `/src/content/${moduleId}.md`;
</script>

<MarkdownViewer file={filePath} />
