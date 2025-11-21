<script lang="ts">
  import {
    username,
    description,
    links,
    possessiveUsername,
    type ButtonStyle,
    type ButtonColor,
    type ButtonSize,
    extra,
  } from '$lib';
</script>

<div class="flex h-screen flex-col items-center justify-center gap-4">
  <div class="avatar">
    <div class="w-24 rounded-full">
      <img src="/favicon.png" alt={`${possessiveUsername} Avatar`} />
    </div>
  </div>
  <!-- User Info -->
  <div class="flex flex-col items-center">
    <h2 class="text-xl font-bold">{username}</h2>
    <p>{description}</p>
  </div>
  <!-- Links-->
  <div class="flex flex-col items-center gap-2">
    {#each links as link (link.name)}
      {@const color: ButtonColor = link.button?.color || 'neutral'}
      {@const style: ButtonStyle | undefined = link.button?.style}
      {@const size: ButtonSize | undefined = link.button?.size}
      <a href={link.url} class="w-full">
        <button
          class={`btn btn-${color} ${style && `btn-${style}`} ${size && `btn-${size}`} w-full`}
        >
          {@html link.icon}
          {link.name}
        </button>
      </a>
    {/each}
  </div>
  {#if extra?.bottom?.isHtml}
    {@html extra?.bottom.content}
  {:else}
    <p>{extra?.bottom?.content}</p>
  {/if}
</div>
