# Tracking Crop

[![Greenkeeper badge](https://badges.greenkeeper.io/xcatliu/tracking-crop.svg)](https://greenkeeper.io/)


Crop image using tracking.js

## Usage

```js
import crop from 'tracking-crop';

crop(document.getElementById('imageElement'), {
    width: 200,
    height: 200
}, ({ x, y, width, height }) => {
    console.log(x, y, width, height);
});
```
