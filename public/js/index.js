var pin = new Array();

var counter = 1;

$(document).ready(function(){
    $(".btn-floating").click(function(event){
        console.log(event.currentTarget.innerText);
        if (counter>4) return;
        let current = "#out_"+counter;
        console.log($(current));
        $(current)[0].value = event.currentTarget.innerText;
        counter++;
    });
    
    $("#clear").click(function(){
        $("#out_1")[0].value = "";
        $("#out_2")[0].value = "";
        $("#out_3")[0].value = "";
        $("#out_4")[0].value = "";
        counter=1;
    })

});

