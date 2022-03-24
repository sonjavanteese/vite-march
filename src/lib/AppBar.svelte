<script>
  export let open = false;
  const toggle = () => {
    open = !open;
  };
</script>

<nav class="text-white border-gray-900 px-2 sm:px-4 py-2 rounded-0 bg-gray-800">
  <div class="flex flex-wrap justify-between items-center px-4">
      <span on:click={toggle} class="flex items-center">
          <img src="./docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
      </span>
      <div class="flex md:order-2">

          <span class="flex-grow"></span>
          <slot></slot>
          <button
              on:click={toggle}
              type="button"
              class="inline-flex items-center justify-center ml-2 h-10 w-10 self-center text-sm text-gray-500 rounded-lg focus:outline-none dark:text-gray-400"
          >
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
              <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                  />
              </svg>
          </button>
      </div>
  </div>
</nav>
