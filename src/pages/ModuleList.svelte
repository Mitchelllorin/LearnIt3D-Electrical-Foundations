<script>
    import { route } from '../routes.js';

    // Auto-detect modules from your content folder
    const modules = [
        { id: 'module1', title: 'Module 1' },
        { id: 'module2', title: 'Module 2' },
        { id: 'module3', title: 'Module 3' },
        { id: 'module4', title: 'Module 4' },
        { id: 'module5', title: 'Module 5' }
    ];
</script>

<h1>Electrical Foundations</h1>

<ul>
    {#each modules as m}
        <li>
            <button on:click={() => route('lesson', { moduleId: m.id, lessonId: 'index' })}>
                {m.title}
            </button>
        </li>
    {/each}
</ul>
