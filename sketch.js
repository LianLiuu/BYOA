let resolution = 0.001;
let scale = 20;
let t = 0;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(255);
  for (let i = 0; i<60; i++){
    var radius = i*3
    //for changing radius
    //var radius = i*3 + sin(i*0.1) * 10;
    var centerx = 200;
    var centery = 200;
    stroke(0,0,0);
    noFill();
    beginShape();
    for (let j = 0; j<120; j++){
      var angle = j/119 * PI * 2;
      var distFromPi = PI- angle;
      if (distFromPi < -PI) distFromPi += TWO_PI;
      if (distFromPi > PI) distFromPi -= TWO_PI;
      var pct_2 = map(abs(distFromPi),PI/4, PI,0,1,true);
      var pct = map(abs(distFromPi),0,0.65*PI,0.8,0,true);
    //pct = pow(pct,1,5);u
    //pct *= (sin(i*0.5) * 0.5 + 0.5);
    var x = centerx + (0.7- 0.55 *pct - 0.12*pct_2 + 0.12*i/200) * radius * cos(angle);
    var y = centery + radius * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);
  }
  
  for (let i = 0; i<60; i++){
    var radius2 = i*3+ sin(i*0.01-millis()/1000)*10;
    //for changing radius
    //var radius = i*3 + sin(i*0.1) * 10;
    var centerx2 = 200;
    var centery2 = 200;
    stroke(0,0,0);
    noFill();
    beginShape();
    for (let j = 0; j<120; j++){
      var angle2 = j/119 * PI * 2;
      var distFromPi2 = PI- angle2;
      if (distFromPi2 < -PI) distFromPi2 += TWO_PI;
      if (distFromPi2 > PI) distFromPi2 -= TWO_PI;
      var pct2 = map(abs(distFromPi2),PI/4, 0.8*PI,0,1,true);
    //pct = pow(pct,1,5);u
    //pct *= (sin(i*0.5) * 0.5 + 0.5);
    var x2 = centerx2 + (0.7- 0.4 *pct2) * radius2 * cos(angle2) + 210;
    var y2 = centery2 + radius2 * sin(angle2);
    vertex(x2, y2);
  }
  endShape(CLOSE);
  }
  
  for (let i = 0; i<60; i++){
    var radius3 = i*3;
    //for changing radius
    //var radius = i*3 + sin(i*0.1) * 10;
    var centerx3 = 200;
    var centery3 = 200;
    stroke(0,0,0);
    noFill();
    beginShape();
    for (let j = 0; j<120; j++){
      var angle3 = j/119 * PI * 2;
      var distFromPi3 = PI- angle3;
      if (distFromPi3 < -PI) distFromPi3 += TWO_PI;
      if (distFromPi3 > PI) distFromPi3 -= TWO_PI;
      var pct3 = map(abs(distFromPi3), PI/2, 0.6*PI,0,1,true);
      var pct4 =  map(abs(distFromPi3),PI/5,PI/2,1,0.5,true);
    //pct = pow(pct,1,5);u
    //pct *= (sin(i*0.5) * 0.5 + 0.5);
      var x3 = centerx3 + (0.7- 0.5 *pct4) * radius3 * cos(angle3) + 400;
      var y3 = centery3 + radius3 * sin(angle3);
      var n = map(noise(x3 * resolution+t, y3 * resolution+t), 0, 1, -scale, scale);
      curveVertex(x3+n, y3+n);
    }
  endShape(CLOSE);
  t += 0.0005;
  }
}
