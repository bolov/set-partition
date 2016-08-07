$(document).ready(function() {
	$(".item").attr({"draggable": "true",
					"ondragstart" : "on_drag_start(event)",
					"ondragend" : "on_drag_end(event)",
					});
	
	$(".partition").attr({"ondrop" : "on_drop(event)",
					  "ondragover": "allow_drop(event)",	
					  "ondragenter": "on_drag_enter(event)",
	                  "ondragleave": "on_drag_leave(event)"});
});


var default_sets = [
	new Set("Default Set",
		[new Partition("Remaining Items",
			[new Item("Yolo", "250 GB"),
			 new Item("Mai mult yolo", "600 GB"),
			 new Item("Cel mai mult yolo", "1.5 TB"),
			]
		)]
	),
	new Set("Default Set",		 
		[new Partition("C: 250 GB",
			[new Item("Windows", "60 GB"),
			 new Item("Programs", "200 GB"),
			]
		 ),
		 new Partition("D: 500 GB",
			[new Item("Kituri", "100 GB"),
			 new Item("Games", "400 GB"),
			]
		 ),
		]
	),
];


console.log(default_sets);

console.log(JSON.stringify(default_sets));


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




