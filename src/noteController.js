'use strict';

(function(windowArg){

  function noteController(noteList){
    var getAllNotes = noteList.getAllNotes()
    var element = document.getElementById("app");
    element.innerHTML = noteList.getHtmlList(getAllNotes);
  };
  windowArg.noteController = noteController;

})(this);
