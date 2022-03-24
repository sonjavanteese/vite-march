<script>
  import "flowbite/dist/flowbite.css";
  import "../app.css";
  import Modal from '$lib/Modal.svelte';
  import Drawer from '$lib/Drawer.svelte';
  import AppBar from '$lib/AppBar.svelte';
  import Dropdown from '$lib/Dropdown.svelte';
  let open = false;
  let modalShow = false;
  let typeModal = true;
  const toggle = () => {
    modalShow = !modalShow;
  };
</script>

<Modal type={typeModal ? 'modal' : 'popup'} bind:open={modalShow} />
<AppBar bind:open>

<!-- 

  <button on:click={toggle} class="nav-btn nav-btn-default">
    {typeModal ? 'Modal' : 'Popup'}
  </button> -->
  <Dropdown>
    <button on:click={toggle} 
    class="block w-full py-2 px-4 text-gray-800 text-left focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
      {typeModal ? 'Modal' : 'Popup'}
    </button>
  </Dropdown>

</AppBar>
<Drawer bind:open>
  <label for="toggle-example" class="flex relative items-center cursor-pointer mt-4 mr-2 mb-4 ml-2">
    <input bind:checked={typeModal} type="checkbox" id="toggle-example" class="sr-only">
    <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Modal / Popup</span>
  </label>

</Drawer>

<main>
  <slot />
</main>
<style windi:preflights:global windi:safelist:global global>
  main {
    flex: 1;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  
</style>
