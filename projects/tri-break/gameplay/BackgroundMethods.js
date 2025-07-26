export default {
    addBackground(background) {
        this.background = background;

        var bounds = background.getBounds();
        this.WorldLeft = bounds.left;
        this.WorldRight = bounds.right;
        this.WorldTop = bounds.top;
        this.WorldBottom = bounds.bottom;
        this.WorldCenterX = bounds.centerX;
        this.WorldCenterY = bounds.centerY;

        this.matter.world.setBounds(
            bounds.x, bounds.y, bounds.width, bounds.height,
            32,
            true, true, true, true
        );

        var floor = this.matter.world.walls.bottom;
        floor.label = 'floor';
        floor.isSensor = true;

        return this;
    }
}