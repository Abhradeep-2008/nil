Webcam.set({
    height:300,
    width:350,
    image_format:'png',  
    png_quality:100
  });
  
  camera = document.getElementById("webcam_view");
  
  Webcam.attach(camera);
  
  function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("snapshot_view").innerHTML= "<img id='snapshot' src="+data_uri+">";
    });
  }
  
  console.log("ml5 version is "+ ml5.version);
  
  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/r3i570ZdL/model.json", modelLoaded);
  
  function modelLoaded(){
      console.log("Model Loaded!");
  }
  
  function speak(){
      var synth = window.speechSynthesis;
      speak_data_1 = "First Prediction is:" + prediction1;
      speak_data_2 = "And the second prediction is:" + prediction2;
      var utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
      synth.speak(utterthis);
  }