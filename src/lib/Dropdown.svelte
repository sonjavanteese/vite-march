<script>
  import { clickOutside } from "./clickOutside";
  import { createPopper } from "@popperjs/core";
  let dropdownPopoverShow = false;

  let btnDropdownRef;
  let popoverDropdownRef;
  const handClickOut = () => {
    if (dropdownPopoverShow) {
      dropdownPopoverShow = false;
    }
  };
  const toggleDropdown = () => {
    if (dropdownPopoverShow) {
      dropdownPopoverShow = false;
    } else {
      dropdownPopoverShow = true;
      createPopper(btnDropdownRef, popoverDropdownRef, {
        placement: "bottom-start",
      });
    }
  };
</script>

<div class="inline-flex">
  <div class="w-full px-1">
    <div use:clickOutside on:clickOutside={handClickOut} class="relative inline-flex align-middle w-full">
      <button
        class="text-white font-bold capitalize text-sm px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-900 ease-linear transition-all duration-150"
        type="button"
        bind:this={btnDropdownRef}
        on:click={toggleDropdown}
      >
        Navi
      </button>
      <div
        bind:this={popoverDropdownRef}
        class="bg-white rounded text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48 {dropdownPopoverShow
          ? 'block'
          : 'hidden'}"
      >
        <slot>
          <a
            href="/"
            class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
            data-active-class="bg-gray-300"
            on:click={toggleDropdown}
          >
            Lorem Link
          </a>
        </slot>
      </div>
    </div>
  </div>
</div>
