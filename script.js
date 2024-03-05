var countdownDate = new Date("March 10, 2024 11:30:00").getTime();
        var countdownFunction = setInterval(function(){
            var now = new Date().getTime();
            var distance = countdownDate - now;
            var days = Math.floor(distance/(1000*60*60*24));
            var hours = Math.floor((distance % (1000*60*60*24))/ (1000*60*60));
            var minutes = Math.floor((distance % (1000*60*60))/ (1000*60));
            var seconds = Math.floor((distance % (1000*60))/1000);
            document.getElementById("timer").innerHTML= days+"days: "+hours+"hours: "+ minutes+"minutes: "+ seconds+"s ";
            if (distance < 0){
                clearInterval(countdownFunction);
                document.getElementById("timer").innerHTML= "Sorry it has expired";
            }
        },1000);