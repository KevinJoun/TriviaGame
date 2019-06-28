$(document).ready(function(){
    var timerStart = 60;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    function resultsCheck(){
        if($("#Q1A1").is(':checked')){
            correct++;
        }else if($("#Q1A2").is(':checked')){
            incorrect++;
        }else{
            unanswered++;
        };

        if($("#Q2A3").is(':checked')){
            correct++;
        }else if($("#Q2A1").is(':checked') || $("#Q2A2").is(':checked') || $("#Q2A4").is(':checked')){
            incorrect++;
        }else{
            unanswered++;
        };

        if($("#Q3A4").is(':checked')){
            correct++;
        }else if($("#Q3A1").is(':checked') || $("#Q3A2").is(':checked') || $("#Q3A3").is(':checked')){
            incorrect++;
        }else{
            unanswered++;
        };

        if($("#Q4A1").is(':checked')){
            correct++;
        }else if($("#Q4A2").is(':checked') || $("#Q4A3").is(':checked')){
            incorrect++;
        }else{
            unanswered++;
        };

        if($("#Q5A1").is(':checked')){
            correct++;
        }else if($("#Q5A2").is(':checked') || $("#Q5A3").is(':checked') || $("#Q5A4").is(':checked')){
            incorrect++;
        }else{
            unanswered++;
        };

        if($("#Q6A3").is(':checked')){
            correct++;
        }else if($("#Q6A1").is(':checked') || $("#Q6A2").is(':checked') || $("#Q6A4").is(':checked')){
            incorrect++;
        }else{
            unanswered++;
        };
    };
//on dom load, questions-screen and answers-screen are hidden.
$("#questions-screen").hide();
$("#results-screen").hide();
//starts the game when the start button is pressed. Hides the start screen and shows the questions screen.
    $("#start").on("click", function(){
        $(this).parent().hide();     
        $("#questions-screen").show();
        var timer = setInterval(function(){
            $("#timer").html(--timerStart);
            if(timerStart === 0){
                clearInterval(timer);
                resultsCheck();
                $("#correct").html(correct);
                $("#incorrect").html(incorrect);
                $("#unanswered").html(unanswered);
                $("#questions-screen").hide();
                $("#results-screen").show();
                }
            }, 1000);
    });
    $("#submit").on("click", function(){
        clearInterval(timer);
        resultsCheck();
        $("#correct").html(correct);
        $("#incorrect").html(incorrect);
        $("#unanswered").html(unanswered);
        $("#questions-screen").hide();
        $("#results-screen").show();
    })
});
