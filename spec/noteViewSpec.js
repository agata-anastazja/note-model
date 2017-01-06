"use strict";


(function(windowArg) {

function testView() {
  var noteDouble = {};
  var noteListDouble =  {};
  noteDouble.text = "I like chocolate";
  noteListDouble.getAllNotes = function(){
    return [noteDouble];
   };
  noteListDouble.getHtmlList = function(getAllNotes){
    return "<ul><li><div>" + "I like chocolate" + "</div></li></ul>";
  }
  var controller = noteController(noteListDouble);
  var element = document.getElementById("app");
  debugger;
  if(element.innerHTML === "<ul><li><div>I like chocolate</div></li></ul>"){
    console.log("Pass note controller");
  }else{

    console.log("failed controller test")
  };

  };

  windowArg.testView = testView;
})(this);

testView();
