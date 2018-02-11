import crop from '../src/index';

const startTime = Date.now();
for (let i = 0; i < 10; i++) {
    crop(document.getElementById('face'), {
        width: 200,
        height: 150
    }, ({ x, y, width, height }) => {
        document.body.innerHTML += `<div style="position:absolute; background-color:rgba(255,0,0,0.1); top:${y}px; left:${x}px; width:${width}px; height:${height}px;"></div><div>${Date.now() - startTime}</div>`;
    });
}
