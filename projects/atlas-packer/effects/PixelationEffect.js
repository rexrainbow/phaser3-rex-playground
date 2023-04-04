var PixelationEffect = function (scene, duration) {
    var camera = scene.cameras.main;
    var effect = camera.postFX.addPixelate(100);
    scene.tweens.add({
        targets: effect,
        amount: 0,

        duration: duration,

    })
        .on('complete', function () {
            camera.postFX.remove(effect);
        })

}

export default PixelationEffect;