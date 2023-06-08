document.addEventListener("DOMContentLoaded", function() {
    var items = document.querySelectorAll(".item");
    var container2 = document.getElementById("container2");
    var resetBtn = document.getElementById("resetBtn");
  
    items.forEach(function(item) {
      item.addEventListener("dragstart", dragStart);
    });
  
    container2.addEventListener("dragover", dragOver);
    container2.addEventListener("drop", drop);
  
    resetBtn.addEventListener("click", reset);
  
    var draggedItem = null;
  
    function dragStart() {
      draggedItem = this;
      setTimeout(function() {
        draggedItem.style.display = "none";
      }, 0);
    }
  
    function dragOver(e) {
      e.preventDefault();
    }
  
    function drop() {
      container2.appendChild(draggedItem);
      draggedItem.style.display = "block";
      draggedItem = null;
      showMessage("Item dropped successfully!");
    }
  
    function reset() {
      container2.innerHTML = "";
      items.forEach(function(item) {
        item.style.display = "block";
        document.getElementById("container1").appendChild(item);
      });
      showMessage("Reset successful!");
    }
  
    function showMessage(message) {
      var messageBox = document.createElement("div");
      messageBox.className = "message";
      messageBox.innerHTML = message;
      document.body.appendChild(messageBox);
      setTimeout(function() {
        document.body.removeChild(messageBox);
      }, 2000);
    }
  });
  