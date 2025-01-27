<script lang="ts">
    import { getTheme, setTheme } from "@wing/scripts/theme"

    let toggled = $state.raw(getTheme() == "dark");

    function onClick(e: MouseEvent) {
        setTheme();
        toggled = getTheme() == "dark"
    }
</script>

<button onclick={onClick}>
    <div>
        <!-- svelte-ignore slot_element_deprecated -->
        {#if toggled}
            <slot name="toggled" />
        {:else}
            <slot name="untoggled" />
        {/if}
    </div>
</button>

<style lang="scss">
    button {
        all: unset;
        cursor: pointer;
        border-radius: 50%;
        transition: all 0.5s;

        div {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &:hover {
            background: color-mix(in srgb, var(--onSurfaceAlt) 8%, transparent);
        }
    }
</style>