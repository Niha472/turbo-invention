function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
classifier=ml5.imageClassifier('MobileNet',modelloaded)
}
function draw(){
image(video,0,0,300,300)
classifier.classify(video,getresult)
}
function modelloaded(){
console.log("modelisloaded")
}
var old_result=''
function getresult(error,result){
  if (error) {
    console.log(error)
  }
else{
  console.log(result)
document.getElementById("close").innerHTML=result[0].label
document.getElementById("open").innerHTML=result[0].accuracy
}
}
