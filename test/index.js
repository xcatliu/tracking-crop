import crop from '../src/index';

crop(document.getElementById('face'), {
    width: 400,
    height: 200
}, ({ x, y, width, height }) => {
    console.log(x, y, width, height);
    document.body.innerHTML += `<div style="position:absolute; background-color:rgba(255,0,0,0.3); top:${y}px; left:${x}px; width:${width}px; height:${height}px;"></div>`;
});
