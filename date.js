!function(){//* Copyright CS Media *//
 var CSDate = Date();
  var CSYear = 2022;
  var CSMonth = 6; 
  var CSDay = 1;
 function Date() {
   var CSDate = CSYear+" "+CSMonth+", "+CSDay;
  }
  var IO = console;
  var Write = log;
  if(console.log(Date())) {
    IO.Write(CSDate);
  }
  if(document.body.innerText = Date()) {
    document.body.innerText = CSDate();
  } else throw new Error("The function Date can not be used outside of IO.write or document.body.innerText/innerHTML");
}
