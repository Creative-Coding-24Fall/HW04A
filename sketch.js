let maxDiam = 80
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(224, 121, 159);
  noStroke();
  //218, 224, 235

for(var x = 0; x <= width; x += 80) {
  for(var y = 0; y <= height; y += 60) {

    let rn = random()
    let locrandom = random();

    let wDiam = random(maxDiam/2, 80);
    let hDiam = random(maxDiam/2, 40);

    if (rn < 0.33){
     fill(196, 154, 69);
    } else if (rn < 0.66){
      fill(116, 196, 69);
    } else{
      fill(127, 99, 1916);
    }     
     ellipse(x,y, wDiam, hDiam);

     fill(250,0,200);
     ellipse(x,y,30);
    
    xlocVar = random (-3-3);
    ylocVar = random (-3-3);
    sizeRandom = random(10,20);
     fill(30,49,36);
     ellipse(x+xlocVar,y+ylocVar,sizeRandom);

     
      ellipse(x+37.5,y+25,wDiam/2,hDiam/2);
      
      ellipse(x+37.5,y+25,wDiam/2,hDiam/2);

     fill(233,233,233);
     ellipse(x+37.5,y+25,10);

     fill(214, 198, 171,random(100,250));
     rect(x+37.5,y+25,wDiam/1.8); 
  }
}
}


function draw() {




}
