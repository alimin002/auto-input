//auto-input versi 1
//author:Alimin 
//email:alimin1313@gmail.com
	document.onkeypress  = function(event){
    if (event.keyCode === 105) {
      if (confirm('ini adalah fitur untuk membuat input dummy!,Klik button oke untuk membuat dummy data secara otomatis, Klik button No untuk membatalkan?')) {
        var input = document.getElementsByTagName('INPUT');
        for (var i = 0; input[i]; i++){
          var input_type=input[i].getAttribute("type");
          if(input_type=="text"){
            input[i].value=input[i].getAttribute("name");
          }

          if(input_type=="hidden"){
            input[i].value=input[i].getAttribute("name");
          }
         
          if(input_type=="date"){           
            input[i].value="2005-05-05";
          }

          if(input_type=="number"){
            input[i].value="1000";
          }

          if(input_type=="radio"){
            input[i].checked=true;
          }

          if(input_type=="checkbox"){
            input[i].checked=true;
          }    
        }

        var textarea = document.getElementsByTagName('TEXTAREA');
        for (var i = 0; textarea[i]; i++){
          textarea[i].value=textarea[i].getAttribute("name");
        }
      }
 
    }
  };