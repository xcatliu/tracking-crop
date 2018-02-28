import crop from '../src/index';
import imgList from './img-list';

const appElement = document.getElementById('app');

for (let i = 0; i < 100; i++) {
    const imgContainerElement = document.createElement('div');
    imgContainerElement.className = 'img-container';
    const imgElement = document.createElement('img');
    imgElement.className = 'img';
    imgElement.onload = () => {
        const naturalWidth = imgElement.naturalWidth;
        const naturalHeight = imgElement.naturalHeight;
        if (naturalWidth > naturalHeight) {
            imgElement.style.height = '100px';
            imgElement.style.marginLeft = -(naturalWidth / naturalHeight * 100 - 100) / 2;
        } else {
            imgElement.style.width = '100px';
            imgElement.style.marginTop = -(naturalHeight / naturalWidth * 100 - 100) / 2;
        }
    };
    imgElement.src = imgList[i];
    imgContainerElement.appendChild(imgElement);
    appElement.appendChild(imgContainerElement);
}

document.getElementById('start').addEventListener('click', () => {
    const startTime = Date.now();
    let j = 0;
    for (let i = 0; i < 100; i++) {
        const imgElement = document.querySelectorAll('.img')[i];
        imgElement.style.opacity = 1;
        crop(imgElement, {
            width: 100,
            height: 100
        }, ({ x, y, width, height, faces }) => {
            j++;
            if (j === 100) {
                document.getElementById('stdout').innerHTML = 'Total time: ' + (Date.now() - startTime);
            }
            if (faces.length === 0) {
                imgElement.style.opacity = 0.3;
            }
            if (faces.length > 0) {
                imgElement.style.marginLeft = -x;
                imgElement.style.marginTop = -y;
            }
        });
    }
});
