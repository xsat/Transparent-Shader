var renderer = PIXI.autoDetectRenderer(300, 300, {backgroundColor : 0x00ffff});

document.body.appendChild(renderer.view);

var stage = new PIXI.Container();
var cat = PIXI.Sprite.fromImage('cat.png');
var fragment = '' +
    'precision mediump float;' +
    'varying vec2 vTextureCoord;' +
    'uniform sampler2D uSampler;' +

    'void main() {' +
        'vec4 t_current = texture2D(uSampler, vTextureCoord);' +
        'vec4 t_default = vec4(1.0, 0.0, 1.0, 1.0);' +

        'if (t_current == t_default) {' +
            'gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);' +
        '} else {' +
            'gl_FragColor = t_current;' +
        '}' +
    '}';

var filter = new PIXI.Filter('', fragment);

cat.filters = [filter];
cat.x = 50;
cat.y = 50;
stage.addChild(cat);

animate();

function animate() {
    requestAnimationFrame(animate);
    renderer.render(stage);
}
