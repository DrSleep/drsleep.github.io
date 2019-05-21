tf.setBackend('webgl');
// Even though it is an FCN-model
// smaller image size is preferrable for the demonstration purposes
// You can set any image size that even divides 32
const IMAGE_SIZE = 224;

const MAX_DEPTH = 8.;
const MIN_DEPTH = 0.;

const pascalvoc = [[ 0,0,0 ],[ 128,0,0 ],[ 0,128,0 ],
                    [ 128,128,0 ],[ 0,0,128 ],[ 128,0,128 ],
                    [ 0,128,128 ],[ 128,128,128 ],[ 64,0,0 ],
                    [ 192,0,0 ],[ 64,128,0 ],[ 192,128,0 ],
                    [ 64,0,128 ],[ 192,0,128 ],[ 64,128,128 ],
                    [ 192,128,128 ],[ 0,64,0 ],[ 128,64,0 ],
                    [ 0,192,0 ],[ 128,192,0 ],[ 0,64,128 ],
                    [ 128,64,128 ],[ 0,192,128 ],[ 128,192,128 ],
                    [ 64,64,0 ],[ 192,64,0 ],[ 64,192,0 ],
                    [ 192,192,0 ],[ 64,64,128 ],[ 192,64,128 ],
                    [ 64,192,128 ],[ 192,192,128 ],[ 0,0,64 ],
                    [ 128,0,64 ],[ 0,128,64 ],[ 128,128,64 ],
                    [ 0,0,192 ],[ 128,0,192 ],[ 0,128,192 ],
                    [ 128,128,192 ],[ 64,0,64 ]];

const toCMAP = async (preds, cmap, offset) => {
    const width = preds.shape.slice(0, 1);
    const height = preds.shape.slice(1, 2);
    const data = await preds.data();
    const bytes = new Uint8ClampedArray(width * height * 4);

    for (let i = 0; i < height * width; ++i) {
        // invert mask.  Invert the segmentation mask.
        const partId = data[i];
        const j = i * 4;

        if (partId === -1) {
            bytes[j + 0] = 255;
            bytes[j + 1] = 255;
            bytes[j + 2] = 255;
            bytes[j + 3] = 255;
        } else {
            const color = cmap[partId + offset];

            if (!color) {
                throw new Error(`No color could be found for part id ${partId}`);
            }
            bytes[j + 0] = color[0];
            bytes[j + 1] = color[1];
            bytes[j + 2] = color[2];
            bytes[j + 3] = 255;
        }
    }

    return new ImageData(bytes, width, height);
}

const toCMAPDepth = async (preds) => {
    const width = preds.shape.slice(0, 1);
    const height = preds.shape.slice(1, 2);
    const data = await preds.data();
    const bytes = new Uint8ClampedArray(width * height * 4);

    for (let i = 0; i < height * width; ++i) {
        // invert mask.  Invert the segmentation mask.
        const partId = data[i];
        const j = i * 4;

        if (partId === -1) {
            bytes[j + 0] = 255;
            bytes[j + 1] = 255;
            bytes[j + 2] = 255;
            bytes[j + 3] = 255;
        } else {
            const color = interpolateLinearly(partId, jet);
            
            if (!color) {
                throw new Error(`No color could be found for part id ${partId}`);
            }
            bytes[j + 0] = color[0] * 255.;
            bytes[j + 1] = color[1] * 255.;
            bytes[j + 2] = color[2] * 255.;
            bytes[j + 3] = 255;
        }
    }

    return new ImageData(bytes, width, height);
}

const filesElement = document.getElementById('files');
filesElement.addEventListener('change', evt => {
  let files = evt.target.files;
  // Display thumbnails & issue call to predict each image.
  for (let i = 0, f; f = files[i]; i++) {
    // Only process image files (skip non image files)
    if (!f.type.match('image.*')) {
      continue;
    }
    let reader = new FileReader();
    const idx = i;
    // Closure to capture the file information.
    reader.onload = e => {
      // Fill the image & call predict.
      let img = document.getElementById('inpimg');
      img.src = e.target.result;
      img.height = IMAGE_SIZE;
      img.width = IMAGE_SIZE;
      img.onload = () => mtrflwDemo3(img);
    };

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
});

const filesElement0 = document.getElementById('files0');
filesElement0.addEventListener('change', evt => {
  let files = evt.target.files;
  // Display thumbnails & issue call to predict each image.
  for (let i = 0, f; f = files[i]; i++) {
    // Only process image files (skip non image files)
    if (!f.type.match('image.*')) {
      continue;
    }
    let reader = new FileReader();
    const idx = i;
    // Closure to capture the file information.
    reader.onload = e => {
      // Fill the image & call predict.
      let img = document.getElementById('inpimg0');
      img.src = e.target.result;
      img.height = IMAGE_SIZE;
      img.width = IMAGE_SIZE;
      img.onload = () => rflwDemo(img);
    };

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
});



const mtrflwDemo = async (imElement) => {
    // const imElement = document.getElementById('inpimg');
    const offset = 1; // label mask offset
    const img = tf.browser.fromPixels(imElement).toFloat();
    const scale = tf.scalar(255.);
    const mean = tf.tensor3d([0.485, 0.456, 0.406], [1,1,3]);
    const std = tf.tensor3d([0.229, 0.224, 0.225], [1,1,3]);
    const normalised = img.div(scale).sub(mean).div(std);
    const model = await tf.loadLayersModel('/assets/misc/tfjs_target_dir/model.json');
    const batched = normalised.transpose([2,0,1]).expandDims();
    const predictions = model.predict(batched);

    const initShape = batched.shape.slice(2,4);
    const segmPred = tf.image.resizeBilinear(predictions[0].transpose([0,2,3,1]), initShape);
    const segmMask = segmPred.argMax(3).reshape(initShape);
    const depthPred = tf.image.resizeBilinear(predictions[1].squeeze(0).transpose([1,2,0]), initShape);
    const depthMask = depthPred.clipByValue(MIN_DEPTH, MAX_DEPTH).sub(MIN_DEPTH).div(MAX_DEPTH-MIN_DEPTH).reshape(initShape);

    const segmOut = await toCMAP(segmMask, pascalvoc, offset);
    const depthOut = await toCMAPDepth(depthMask);
    
    const segmCanvas = document.getElementById('segm');
    const depthCanvas = document.getElementById('depth');

    await tf.browser.toPixels(tf.browser.fromPixels(segmOut), segmCanvas);
    await tf.browser.toPixels(tf.browser.fromPixels(depthOut), depthCanvas);

  };

const rflwDemo = async (imElement) => {
    // const imElement = document.getElementById('inpimg');
    const offset = 0; // label mask offset
    const img = tf.browser.fromPixels(imElement).toFloat();
    const scale = tf.scalar(255.);
    const mean = tf.tensor3d([0.485, 0.456, 0.406], [1,1,3]);
    const std = tf.tensor3d([0.229, 0.224, 0.225], [1,1,3]);
    const normalised = img.div(scale).sub(mean).div(std);
    const model = await tf.loadLayersModel('/assets/misc/tfjs_lwrfmbv2/model.json');
    const batched = normalised.transpose([2,0,1]).expandDims();
    const predictions = model.predict(batched);

    const initShape = batched.shape.slice(2,4);
    const segmPred = tf.image.resizeBilinear(predictions.transpose([0,2,3,1]), initShape);
    const segmMask = segmPred.argMax(3).reshape(initShape);

    const segmOut = await toCMAP(segmMask, pascalvoc, offset);
    
    const segmCanvas = document.getElementById('segm0');

    await tf.browser.toPixels(tf.browser.fromPixels(segmOut), segmCanvas);
  };


  const mtrflwDemo3 = async (imElement) => {
      // triplet: depth, normals, segmentation
    // const imElement = document.getElementById('inpimg');
    const offset = 1; // label mask offset
    const img = tf.browser.fromPixels(imElement).toFloat();
    const scale = tf.scalar(255.);
    const mean = tf.tensor3d([0.485, 0.456, 0.406], [1,1,3]);
    const std = tf.tensor3d([0.229, 0.224, 0.225], [1,1,3]);
    const normscale = tf.tensor3d([1., 1., -1.], [1,1,3]);
    const normsub = tf.tensor3d([-1., -1., 1], [1,1,3]);
    const normalised = img.div(scale).sub(mean).div(std);
    const model = await tf.loadLayersModel('/assets/misc/tfjs_triplet/model.json');
    const batched = normalised.transpose([2,0,1]).expandDims();
    const predictions = model.predict(batched);

    const initShape = batched.shape.slice(2,4);
    const segmPred = tf.image.resizeBilinear(predictions[2].transpose([0,2,3,1]), initShape);
    const segmMask = segmPred.argMax(3).reshape(initShape);
    const normPred = tf.image.resizeBilinear(predictions[1].transpose([0,2,3,1]), initShape);
    const normMask = normPred.div(tf.norm(normPred, 2, 3, true)).squeeze().sub(normsub).div(normscale).div(2.);
    const depthPred = tf.image.resizeBilinear(predictions[0].squeeze(0).transpose([1,2,0]), initShape);
    const depthMask = depthPred.clipByValue(MIN_DEPTH, MAX_DEPTH).sub(MIN_DEPTH).div(MAX_DEPTH-MIN_DEPTH).reshape(initShape);

    const segmOut = await toCMAP(segmMask, pascalvoc, offset);
    const depthOut = await toCMAPDepth(depthMask);
    
    const segmCanvas = document.getElementById('segm');
    const depthCanvas = document.getElementById('depth');
    const normCanvas = document.getElementById('norm');

    await tf.browser.toPixels(tf.browser.fromPixels(segmOut), segmCanvas);
    await tf.browser.toPixels(tf.browser.fromPixels(depthOut), depthCanvas);
    await tf.browser.toPixels(normMask, normCanvas);

  };