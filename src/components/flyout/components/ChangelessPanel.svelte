<div>
    <slot></slot>
</div>

<style lang="scss">
    @use "$style/_defaults" as defaults;
    @use "$style/_palette.scss" as palette;

    div {
        
        position: sticky;
        top: 10px;
        background: palette.$secondary;
        --border: 200px;
        border-radius: 300px;
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: -15px 19px 5px 1px rgba(0, 0, 0, 0.25);
        padding: 13px;
    }
</style>