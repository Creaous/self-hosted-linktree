<script lang="ts">
  import { possessiveUsername } from '$lib';

  let { children } = $props();
  import '../app.css';
</script>

<svelte:head>
  <title>{possessiveUsername} Links</title>
  <link rel="icon" href="/favicon.png" />
</svelte:head>

{@render children()}
