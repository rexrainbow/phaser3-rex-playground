export default {
    onCorrectPosition() {
        this.setAlpha(1);
        this.setSwapEnable(false);
    },

    onIncorrectPosition() {
        this.setAlpha(0.5);
        this.setSwapEnable(true);
    },
}