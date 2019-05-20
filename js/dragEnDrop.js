$(function () {
    $(function snapDrag() {
        $("#snapTarget").sortable({
            revert: true
        });
        $("#kaart1").draggable({
            snap: ".snapTarget",
            connectToSortable: "#snapTarget",
            helper: "clone",
            revert: "invalid"
        });
        $("#kaart2").draggable({
            snap: ".snapTarget",
            connectToSortable: "#snapTarget",
            helper: "clone",
            revert: "invalid"
        });
        $("#kaart3").draggable({
            snap: ".snapTarget",
            connectToSortable: "#snapTarget",
            helper: "clone",
            revert: "invalid"
        });
        $("#kaart4").draggable({
            snap: ".snapTarget",
            connectToSortable: "#snapTarget",
            helper: "clone",
            revert: "invalid"
        });
        $("#kaart5").draggable({
            snap: ".snapTarget",
            connectToSortable: "#snapTarget",
            helper: "clone",
            revert: "invalid"
        });
        $("#kaart6").draggable({
            snap: ".snapTarget",
            connectToSortable: "#snapTarget",
            helper: "clone",
            revert: "invalid"
        });
    });
})

