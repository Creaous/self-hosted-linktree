<script lang="ts">
  import { possessiveUsername } from '$lib';

  let { children } = $props();
  import '../app.css';
</script>

<svelte:head>
  <title>{possessiveUsername} Links</title>
  <meta
    name="description"
    content={`${possessiveUsername} profile of links!`}
  />
  <meta name="author" content={username} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="/favicon.png" />
</svelte:head>

{@render children()}
