function my_show(num){
    for(i = num; i >= 1; i--){
        s = "#collapse_" + i;
//        alert("show: " + s);
        $(s).collapse('show');
    }
    for(i = num + 1; i <= 5; i++){
        s = "#collapse_" + i;
//        alert("hide: " + s);
        $(s).collapse('hide');
    }
//    console.log($(".row-" + num).find("div"));
    $(".row-" + num).find("button").removeClass("btn-primary");
    $(".row-" + num).find("button").removeClass("btn-success");
    $(".row-" + num).find("button").addClass("btn-secondary");
    console.log(event);
    $(event.target).removeClass("btn-secondary");
    $(event.target).addClass("btn-success");
    $(".row-" + (num + 1)).find("button").removeClass("btn-secondary");
    $(".row-" + (num + 1)).find("button").removeClass("btn-success");
    $(".row-" + (num + 1)).find("button").addClass("btn-primary");
    $("#progress").width(30 + (num * 15) + "%");
}