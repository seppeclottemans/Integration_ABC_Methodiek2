$(function () {
  $(function snapDrag() {
    $( "#kaart1" ).draggable({ snap: ".snapTarget",});
    $( "#kaart2" ).draggable({ snap: ".snapTarget" });
    $( "#kaart3" ).draggable({ snap: ".snapTarget" });
    $( "#kaart4" ).draggable({ snap: ".snapTarget" });
    $( "#kaart5" ).draggable({ snap: ".snapTarget" });
    $( "#kaart6" ).draggable({ snap: ".snapTarget" });
  });
    $(function Sort() {
    $( "#kaartjes" ).sortable({revert: true});
    })
})