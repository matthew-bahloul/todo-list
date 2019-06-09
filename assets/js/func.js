// when click on an item in the list, make it grey and cross it out
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// when click on delete button in li, fadeout and remove the element
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(400, function () {
        $(this).remove();
    });

    // stop the click event from bubbling up
    event.stopPropagation();
});

// add a new list item when enter (key code 13) is pressed in text input
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        if ($.trim(todoText) == '') {
            alert("can't add blank to-do task");
        }
        else {
            $(this).val("");
            $("ul").append("<li><span> <i class='fa fa-trash'></i> </span>" + todoText + "</li>");
        }
    }
});

// show or hide the input box
$(".fa-chevron-circle-up").click( function() {
    $(this).toggleClass("fa-chevron-circle-up");
    $(this).toggleClass("fa-chevron-circle-down");
    $("input[type='text']").fadeToggle()
});