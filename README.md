# Tracking Crop

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
