export default {
    addBackground(background) {
        this.background = background;
        var bounds = background.getBounds();
        this.matter.world.setBounds(
            bounds.x, bounds.y, bounds.width, bounds.height,
            32,
            true, true, true, true
        );
        const walls = this.matter.world.walls;

        Object.values(walls).forEach(function (w) {
            w.restitution = 1;
            w.friction = 0;
            w.frictionStatic = 0;
        });

        var floor = this.matter.world.walls.bottom;
        floor.label = 'floor';
        floor.isSensor = true;

        return this;
    }
}