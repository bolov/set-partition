$(document).ready(function() {
    $(".item").attr("draggable", "true");

    $(".items").on({dragstart : on_drag_start, dragend : on_drag_end}, ".item");

    $(".partitions")
        .on({
            dragover : allow_drop,
            dragenter : on_drag_enter,
            dragleave : on_drag_leave,
        },
            ".partition");
});

function allow_drop(ev)
{
    ev.preventDefault();
}

var drag_tmp_id = "drag-n-drop-tmp-id";
var drag_over_counter = 0;

function on_drag_start(ev)
{

    var target = $(ev.target).closest(".item");

    if (target.attr("id") == undefined || target.attr("id").length == 0)
        target.attr("id", drag_tmp_id);

    ev.dataTransfer.setData("text", target.attr("id"));
    console.log("set data: " + target.attr("id"));
}

function on_drag_end(ev)
{
    $("#" + drag_tmp_id).removeAttr("id");
}

function on_drop(ev)
{
    on_drag_leave(ev);

    items = $(ev.target).closest(".partition").children(".items");
    var data = ev.dataTransfer.getData("text");
    var source = $("#" + data);
    items.append(source);
}

function on_drag_enter(ev)
{
    if (drag_over_counter == 0) {
        $(ev.target).closest(".partition").addClass("drop-zone");
    }

    ++drag_over_counter;
}

function on_drag_leave(ev)
{
    --drag_over_counter;
    if (drag_over_counter == 0) {
        $(ev.target).closest(".partition").removeClass("drop-zone");
    }
}
