<p style="color:red">THIS IS THE REAL LESSON FILE</p>
<script>
    import SceneViewer from '../components/SceneViewer.svelte';
    import MarkdownViewer from '../components/MarkdownViewer.svelte';

    export let moduleId;

    // Build the correct scene path dynamically
    let scenePath = `/scenes/${moduleId}/scene.json`;

    // Load markdown dynamically too
    let markdownPath = `/content/${moduleId}.md`;
</script>

<h1>Module: {moduleId}</h1>

<MarkdownViewer src={markdownPath} />

<SceneViewer src={scenePath} />
