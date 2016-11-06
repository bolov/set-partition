$(document).ready(function() {

    $(".items").sortable({
        connectWith: ".items"
    })

    $(".partitions").sortable({
        handle : "> .drag-handle",
        connectWith: ".partitions"
    })

    $(".sets").sortable({
        handle : "> .drag-handle",
        connectWith: ".sets"
    })
});
