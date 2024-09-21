<svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.80543 23.0545C6.36223 19.4699 0.505904 14.3814 0.816763 8.84625C1.32534 4.34622 5.15571 0.848785 9.80543 0.848785C14.4552 0.848785 18.2855 4.34622 18.7941 8.84625C19.0085 14.89 13.7175 19.072 9.80543 23.0545Z"
fill="currentColor"/>
<path class="colorB" d="M13.3473 9.95884C13.3473 11.8456 11.8824 13.3751 10.0754 13.3751C8.26835 13.3751 6.80347 11.8456 6.80347 9.95884C6.80347 8.07209 8.26835 6.54257 10.0754 6.54257C11.8824 6.54257 13.3473 8.07209 13.3473 9.95884Z"
fill="currentColor"/>
</svg>
    

<style lang="scss">
    @use "$style/_palette.scss" as palette;

    svg {
        color: palette.$secondary;
        position: relative;
        top: 3px; 

        .colorB {
            color: palette.$highlight;
        }
    }
</style>