$(document).ready(function() {

    $(".sets").sortable({
        handle : "> .list-header",
        connectWith: ".sets",
        cancel: ".editable",
    })

    $(".partitions").sortable({
        handle : "> .list-header",
        connectWith: ".partitions",
        cancel: ".editable",
    })

    $(".items").sortable({
        connectWith: ".items"
    })
});
