var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){
setTimeout(function()
{
    img_id = "selfie1";
    takeSnapshot();
    speak_data = "Tirando sua selfie 10 segundos";
    var UtterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(UtterThis)

}, 5000);
    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Tirando sua selfie nos próximos 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

 
}
function takeSnapshot(){
    console.log(img_id);
    if(img_id=="selfie1"){
     document.getElementById("result1").innerHTML = '<img id="selfie1" src= "'+data_uri+'"/>';
    }
    if(img_id=="selfie2"){
        document.getElementById("result2").innerHTML = '<img id="selfie2" src= "'+data_uri+'"/>';
       }
       if(img_id=="selfie3"){
        document.getElementById("result3").innerHTML = '<img id="selfie3" src= "'+data_uri+'"/>';
       }
}
