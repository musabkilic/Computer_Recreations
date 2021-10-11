let rmin = 2.95;
let rmax = 4.00;
let w = 900;
let aratio = 1.4142;

function setup() {
   createCanvas(w, w * aratio);
   noLoop();
}

function draw() {
   background(255);
   for (let y = 0; y < height; y++){
      let r = map(y, 0, height, rmin, rmax);

      let x = 0.3;
      for (let i = 0; i < 200; i++){
         x = r * x * (1 - x);
      }

      for (let i = 0; i < 300; i++){
         x = r * x * (1 - x);
         point(width * x, y);
      }
   }
}
