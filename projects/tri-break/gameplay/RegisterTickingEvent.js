var RegisterTickingEvent = function () {
    var print = this.scene.add.text(0, 0, '', { fontSize: 30 });

    // Keep ball speed constant (optional but useful)
    var onAfterUpdate = function () {
        if (this.ballSpeed === 0) {
            return;
        }

        this.setBallSpeed(this.ballSpeed);

        var velocity = this.ball.body.velocity;
        var vx = velocity.x, vy = velocity.y;
        print.text = `${Math.floor(vx * 1000) / 1000}\n${Math.floor(vy * 1000) / 1000}`
    }
    this.matter.world.on('afterupdate', onAfterUpdate, this);

    this.on('destroy', function () {
        this.matter.world.off('afterupdate', onAfterUpdate, this);
        print.destroy();
    }, this)
}

export default RegisterTickingEvent;