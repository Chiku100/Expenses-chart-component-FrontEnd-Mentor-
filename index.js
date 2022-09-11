$.getJSON("data.json", function (data) {
    for (let i = 0; i < data.length; i++) {
        $(".num" + (i + 1)).html("$" + data[i].amount);
    }
});
let days = document.querySelectorAll("#days div");
for (let i = 0; i < days.length; i++) {
    if (i === 2) {
        $(".wed").hover(function () {
            $(".num" + (i + 1)).removeClass("viz");
            $(".wed").css("background-color", "hsl(182, 22%, 76%)");
        }, function () {
            $(".wed").css("background-color", "hsl(186, 34%, 60%)");
            $(".num" + (i + 1)).addClass("viz");
        })
    } else {
        $(days[i]).hover(function () {
            $(".num" + (i + 1)).removeClass("viz");
            $(days[i]).css("background-color", "hsl(8, 44%, 80%)")
        }, function () {
            $(".num" + (i + 1)).addClass("viz");
            $(days[i]).css("background-color", "hsl(10, 79%, 65%)")
        })
    }
}