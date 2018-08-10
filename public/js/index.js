var pin = new Array();

var counter = 1;

$(document).ready(function(){
    $(".btn-floating").click(function(event){
        // $(".btn-floating").addClass('scale-out');
        console.log("hello");
        M.toast({ html: "Face detected please wait", displayLength: 300 });
					
        $(".curve_me").hide();	
        $('#canvas').removeAttr('hidden');
        $("#loader").css("visibility", "visible");
        $("#subBtn").removeClass('scale-in');	
        $("#subBtn").addClass('scale-out');

        var canvas = document.getElementById('canvas');
        canvas.style.hidden = false;
        var ctx = canvas.getContext('2d');

        ctx.drawImage(video, 0, 0);
        var dataURI = canvas.toDataURL('image/jpeg');
    
        loading = true;
        socket.emit('on-data', dataURI.replace(/^data\:image\/\w+\;base64\,/, '') );
    });
    
    $("#clear").click(function(){
        $("#out_1")[0].value = "";
        $("#out_2")[0].value = "";
        $("#out_3")[0].value = "";
        $("#out_4")[0].value = "";
        counter=1;
    })

});

