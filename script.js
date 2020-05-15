   var binaryBox = document.querySelector(".binaryBox");
   
   binaryBox.addEventListener('keydown', function(validation) {
        if(validation.keyCode != 48 && validation.keyCode != 49 && validation.keyCode != 96 && validation.keyCode != 97 && validation.keyCode != 8) {
          validation.preventDefault();
        }
    });

    
    function clicar() {

      var binary = document.querySelector(".binaryBox").value;

      if (document.querySelector(".binaryBox").value == "") {

        alert("Por favor, insira um valor"); 
        
      } else {

      var decimal = 0;


      for (var i = binary.length - 1; i >= 0; i--) {
        decimal = decimal + parseInt(binary[i])*Math.pow(2,binary.length-1-i);

        }

       document.querySelector(".resultBox").value = decimal;
      
    }
  }
    function limpar(){
      document.querySelector(".binaryBox").value = "";
      document.querySelector(".resultBox").value = "";
    }

  
