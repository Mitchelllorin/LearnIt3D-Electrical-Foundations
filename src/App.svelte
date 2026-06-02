<script>
    import { route, currentPage } from './routes.js';
    import ModuleList from './pages/ModuleList.svelte';
    import Lesson from './pages/Lesson.svelte';
</script>

{#if $currentPage.name === 'modules'}
    <ModuleList />
{:else if $currentPage.name === 'lesson'}
    <Lesson moduleId={$currentPage.moduleId} lessonId={$currentPage.lessonId} />
{/if}
