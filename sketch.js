var table;
var peoples, people = [];
var y = [];
var biolinks=[];
var names=[];
var titles=[];
var locations=[];
var launchdates=[];
var careerdays=[];
var countrys=[];
var bios=[];
var twitters=[];

function preload(){
  peoples=loadJSON('assets/people.json');
}

function setup() {
   //createCanvas(windowWidth,windowHeight);
   createCanvas(500,500);
   for(var i=0;i<peoples.people.length;i++){
      biolinks.push(peoples.people[i].biolink);
      titles.push(peoples.people[i].title);
      names.push(peoples.people[i].name);
      locations.push(peoples.people[i].location);
      launchdates.push(peoples.people[i].launchdate);
      y.push(i*200);
      careerdays.push(peoples.people[i].careerdays);
      countrys.push(peoples.people[i].country);
      bios.push(peoples.people[i].bio);
      twitters.push(peoples.people[i].twitter);
   }
}

function draw() {
  background(33);
  text("SCROLL UP TO SEE MORE",10,-10)
  for(var i=0;i<peoples.people.length;i++){
    var p = map(height-abs(y[i]*2-height/3),0,height*1.2,0,255);
    var daysInSpace = (Date.now()-Date.parse(launchdates[i]))/1000/60/60/24/2;
    //var f = map(daysInSpace,0,200,0,255)
    
    fill(i*255/peoples.people.length,200,90,p/1.4-20);
    //stroke(100,100,100,p);
        for(var j=0;j<careerdays[i]+1;j++){
      rect(80+j*2,y[i]+height/2.5+48,0.9,4);
    }
    ellipse(0,y[i]+height/2.5,p/1.1);
    rect(380,y[i]+height/2.5-80,daysInSpace,10);

    fill(255,255,255,p);
    textStyle(BOLD);
    textSize(28);
    text(names[i],80,y[i]+height/2.5-30);
    
    noStroke();
    fill(200,200,200,p);
    textStyle(NORMAL);
    textSize(13);
    text(titles[i],80,y[i]+height/2.5-6);
    textSize(10);
    text(countrys[i],80,y[i]+height/2.5+72);
    

    
    textSize(10);
    text('DAYS  IN  '+locations[i]+': '+(Date.now()-Date.parse(launchdates[i]))/1000/60/60/24,80,y[i]+height/2.5-71);
    
    textSize(6);
    text('CAREERDAYS : '+careerdays[i],80,y[i]+height/2.5+42);
    
    textSize(4);
    text('BIOLINK : '+ biolinks[i],80,y[i]+height/2.5+10);
    text('BIO : '+ bios[i],80,y[i]+height/2.5+18);
    text('TWITTERS : '+ twitters[i],80,y[i]+height/2.5+26);
  }   

  

}


function mouseWheel(event) {
      for(var i=0;i<peoples.people.length;i++){
     y[i]-=event.deltaY; 
  }   
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
