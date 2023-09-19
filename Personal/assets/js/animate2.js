import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'



neonCursor({
    el: document.getElementById('demo12'),
    shaderPoints: 16,
    curvePoints: 40,
    curveLerp: 0.5,
    radius1: 2,
    radius2: 30,
    velocityTreshold: 10,
    sleepRadiusX: 10,
    sleepRadiusY: 10,
    sleepTimeCoefX: 0.0025,
    sleepTimeCoefY: 0.0025
})
