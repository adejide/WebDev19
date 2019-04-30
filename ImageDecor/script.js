var img = document.getElementsByTagName('img')
var image;
var imgEl = document.createElement('img');
imgEl.crossOrigin = 'anonymous';
imgEl.onload = function() {
  image = new fabric.Image(imgEl);
  image.filters = [new       fabric.Image.filters.HueRotation()];
  canvas.add(image);
}
imgEl.src = 'file:///C:/Users/jideola/Desktop/WebDev19/ImageDecor/shiba-inu.jpg';


document.getElementById("hue").onclick = function() {
  image.filters[0].rotation = 2 * Math.random() - 1;
  console.log(image.filters[0].rotation);
  image.applyFilters();
  canvas.requestRenderAll();
};
