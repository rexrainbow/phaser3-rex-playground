import PixelationPostFx from '../../../../phaser3-rex-notes/plugins/pixelationpipeline.js';

var PixelationEffect = function (scene, duration) {
    // 1. Add PixelationPipeline class to pipelineManager
    var pipelineManager = scene.sys.renderer.pipelines;
    pipelineManager.addPostPipeline('Pixelation', PixelationPostFx);

    // 2. Add PixelationPipelineInstance to main-camera
    var camera = scene.cameras.main;
    camera.setPostPipeline(PixelationPostFx);
    var pipelineInstance = camera.getPostPipeline(PixelationPostFx);

    // 3. Ease properties of pipelineInstance
    pipelineInstance.setPixelSize(100, 100);
    var tweenTask = scene.tweens.add({
        targets: pipelineInstance,
        pixelWidth: 1,
        pixelHeight: 1,

        duration: duration,

    })

    // 4. Remove PixelationPipelineInstance
    tweenTask
        .on('complete', function () {
            camera.removePostPipeline(PixelationPostFx);
            pipelineManager.remove('Pixelation');
        })

}

export default PixelationEffect;