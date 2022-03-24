<script>
  import {fade} from 'svelte/transition';
  import { quintInOut } from "svelte/easing";
</script>


<div transition:fade={{duration:400, easing: quintInOut}} class="fixed inset-0 z-25 bg-gray-900 bg-opacity-70 animate-animated animate-zoomIn"></div>

