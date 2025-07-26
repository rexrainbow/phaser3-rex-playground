var RegisterCollisionEvent = function () {
    var onCollisionstart = function (event) {
        event.pairs.forEach(({ bodyA, bodyB }) => {
            var ballBody, hitTargetBody;
            if (bodyA.label === 'ball') {
                ballBody = bodyA;
                hitTargetBody = bodyB;
            } else if (bodyB.label === 'ball') {
                ballBody = bodyB;
                hitTargetBody = bodyA;
            }

            if (ballBody) {
                switch (hitTargetBody.label) {
                    case 'brick':
                        this.emit('hit-brick', hitTargetBody.gameObject, ballBody.gameObject);
                        break;

                    case 'floor':
                        this.emit('hit-floor', hitTargetBody.gameObject, ballBody.gameObject);
                        break;

                    case 'paddle':
                        this.emit('hit-paddle', hitTargetBody.gameObject, ballBody.gameObject);
                        break;
                }
            }
        });
    }
    this.matter.world.on('collisionstart', onCollisionstart, this);

    this.on('destroy', function () {
        this.matter.world.off('collisionstart', onCollisionstart, this);
    }, this)

    return this;
}

export default RegisterCollisionEvent;