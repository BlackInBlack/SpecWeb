// Инициализация canvas и получение из него WebGL контекста
var canvas = document.getElementById('glCanvas');

var gl = canvas.getContext('webgl');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
gl.viewport(0, 0, window.innerWidth, window.innerHeight);

var vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, document.getElementById('vertexShader').text);
gl.compileShader(vertexShader);

if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    console.log(gl.getShaderInfoLog(vertexShader));
}

var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, document.getElementById('fragmentShader').text);
gl.compileShader(fragmentShader);

if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    console.log(gl.getShaderInfoLog(fragmentShader));
}

var program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.log('Could not initialize shaders');
}


var uCube = gl.getUniformLocation(program, 'u_cube');
var uCamera = gl.getUniformLocation(program, 'u_camera');
var aPosition = gl.getAttribLocation(program, 'a_position');
var aColor = gl.getAttribLocation(program, 'a_color');

var vertexBuffer = gl.createBuffer();
var vertices = [
    // Передняя грань
    -2, -2, -2,
    2, -2, -2,
    -2, -2, 2,

    2, -2, 2,
    -2, -2, 2,
    2, -2, -2,

    1, -1, 1,
    2, -2, -2,
    1, -1, -1,

    1, -1, 1,
    2, -2, 2,
    2, -2, -2,

    -2, -2, -2,
    -1, -1, -1,
    -1, -1, 1,

    -2, -2, -2,
    -1, -1, 1,
    -2, -2, 2,

    // Задняя грань
    -2, 2, -2,
    -2, 2, 2,
    2, 2, -2,

    2, 2, 2,
    2, 2, -2,
    -2, 2, 2,

    -1, 1, -1,
    -2, 2, 2,
    -1, 1, 1,

    -1, 1, -1,
    -2, 2, -2,
    -2, 2, 2,

    2, 2, 2,
    1, 1, 1,
    1, 1, -1,

    2, 2, 2,
    1, 1, -1,
    2, 2, -2,

    // Нижняя грань
    -1, -1, -1,
    -1, 1, -1,
    1, -1, -1,

    1, 1, -1,
    1, -1, -1,
    -1, 1, -1,

    // Верхняя грань
    -1, -1, 1,
    1, -1, 1,
    -1, 1, 1,

    1, 1, 1,
    -1, 1, 1,
    1, -1, 1,

    // Левая грань
    -1, -1, -1,
    -1, -1, 1,
    -1, 1, -1,

    -1, 1, 1,
    -1, 1, -1,
    -1, -1, 1,

    // Правая грань
    1, -1, -1,
    1, 1, -1,
    1, -1, 1,

    1, 1, 1,
    1, -1, 1,
    1, 1, -1
];
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

var colorBuffer = gl.createBuffer();
var colors = [
    // Передняя грань
    1, 0.5, 0.5,
    1, 0.5, 0.5,
    1, 0.5, 0.5,
    1, 0.5, 0.5,
    1, 0.5, 0.5,
    1, 0.5, 0.5,

    0.3, 0.5, 0.5,
    0.3, 0.5, 0.5,
    0.3, 0.5, 0.5,

    0.3, 0.5, 0.5,
    0.3, 0.5, 0.5,
    0.3, 0.5, 0.5,

    0.3, 0.5, 0.5,
    0.3, 0.5, 0.5,
    0.3, 0.5, 0.5,

    0.3, 0.5, 0.5,
    0.3, 0.5, 0.5,
    0.3, 0.5, 0.5,

    

    // Задняя грань
    0.4, 0.3, 0.1,
    0.4, 0.3, 0.1,
    0.4, 0.3, 0.1,
    0.4, 0.3, 0.1,
    0.4, 0.3, 0.1,
    0.4, 0.3, 0.1,

    0.7, 0.3, 0.1,
    0.7, 0.3, 0.1,
    0.7, 0.3, 0.1,

    0.7, 0.3, 0.1,
    0.7, 0.3, 0.1,
    0.7, 0.3, 0.1,

    0.7, 0.3, 0.1,
    0.7, 0.3, 0.1,
    0.7, 0.3, 0.1,

    0.7, 0.3, 0.1,
    0.7, 0.3, 0.1,
    0.7, 0.3, 0.1,



    // Нижняя грань
    0.5, 0.7, 1,
    0.5, 0.7, 1,
    0.5, 0.7, 1,
    0.5, 0.7, 1,
    0.5, 0.7, 1,
    0.5, 0.7, 1,

    // Верхняя грань
    0.5, 0.7, 1,
    0.5, 0.7, 1,
    0.5, 0.7, 1,
    0.5, 0.7, 1,
    0.5, 0.7, 1,
    0.5, 0.7, 1,

    // Левая грань
    0.3, 1, 0.3,
    0.3, 1, 0.3,
    0.3, 1, 0.3,
    0.3, 1, 0.3,
    0.3, 1, 0.3,
    0.3, 1, 0.3,

    // right face
    0.3, 1, 0.3,
    0.3, 1, 0.3,
    0.3, 1, 0.3,
    0.3, 1, 0.3,
    0.3, 1, 0.3,
    0.3, 1, 0.3
];
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

var cameraMatrix = mat4.create();
mat4.perspective(cameraMatrix, 0.5, window.innerWidth / window.innerHeight, 0.1, 1000);
mat4.translate(cameraMatrix, cameraMatrix, [0, 0, -20]);


var cubeMatrix = mat4.create();
var lastRenderTime = Date.now();

function render() {
    // Запрашиваем рендеринг на следующий кадр
    requestAnimationFrame(render);
    var time = Date.now();
    var dt = lastRenderTime - time;

    // Вращаем куб относительно оси Y
    mat4.rotateX(cubeMatrix, cubeMatrix, dt / 3000);
    mat4.rotateY(cubeMatrix, cubeMatrix, dt / 3000);
    // Вращаем куб относительно оси Z
    mat4.rotateZ(cubeMatrix, cubeMatrix, dt / 1000);

    gl.clearColor(0.0, 0.0, 0.0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Включаем фильтр глубины
    gl.enable(gl.DEPTH_TEST);

    gl.useProgram(program);

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.enableVertexAttribArray(aColor);
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 0, 0);

    gl.uniformMatrix4fv(uCube, false, cubeMatrix);
    gl.uniformMatrix4fv(uCamera, false, cameraMatrix);

    gl.drawArrays(gl.TRIANGLES, 0, 60);

    lastRenderTime = time;
}

render();