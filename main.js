function setQuestion(idx) {
    var questions = JSON.parse($("#questions").html());

    var question = questions[idx];

    $("#question").html(question["question"]);
    $("#answer1").html(question["answer1"]);
    $("#answer2").html(question["answer2"]);

    window.location.hash = "" + idx;

    if (question["final"]) {
        $("#answer1").click(function() {
            showChuckle("paul");
        });
        $("#answer2").click(function() {
            showChuckle("barry");
        });
    } else {
        $(".answer").click(function() {
            setQuestion(idx + 1);
        });
    }
}

function showChuckle(whichOne) {
    $("#questionPanel").hide();
    var selector = "#" + whichOne;
    window.location.hash = whichOne;
    $(selector).show();

    $("#tryAgain").show();
}


$(function() {
    var hash = window.location.hash;
    if (! hash) {
        hash = "0";
    } else if (hash.charAt(0) == "#") {
        hash = hash.substring(1);
    }

    if (hash == "barry") {
        showChuckle("barry");
    } else if (hash == "paul") {
        showChuckle("paul");
    } else {
        setQuestion(parseInt(hash));
    }

    $("#tryAgainButton").click(function() {
        $(".result").hide();
        $("#questionPanel").show();
        setQuestion(0);
    });
});
