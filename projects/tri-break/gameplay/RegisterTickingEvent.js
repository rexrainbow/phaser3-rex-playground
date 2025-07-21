var RegisterTickingEvent = function () {
    var print = this.scene.add.text(0, 0, '', { fontSize: 30 });

    var onTicking = function () {
        var velocity = this.ball.body.velocity;
        var vx = velocity.x, vy = velocity.y;
        print.text = `${Math.floor(vx * 1000) / 1000}\n${Math.floor(vy * 1000) / 1000}`
    }
    this.scene.events.on('update', onTicking, this);

    this.on('destroy', function () {
        this.scene.events.off('update', onTicking, this);
    }, this)
}

export default RegisterTickingEvent;