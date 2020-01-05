function reset() {
$('.box').remove();
};

for (var i = 1; i <= 28; i++) {
    if(i < 10){
        $('#number').append('<div class="day_'+i+' col__agenda p-0"><div class="p-0 pt-2 pb-2"><p class="font-weight-bold m-0">0'+i+'</p></div></div>');
        
    }else{
        $('#number').append('<div class="day_'+i+' col__agenda p-0"><div class="p-0 pt-2 pb-2"><p class="font-weight-bold m-0">'+i+'</p></div></div>');    
    }
    
    $('#primary').append('<div class="day_'+i+' col__agenda p-0 pt-1 pb-1"></div></div>');
    $('#agenda__1').append('<div class="day_'+i+' col__agenda p-0 pt-1 pb-1"></div></div>'); 
    $('#agenda__2').append('<div class="day_'+i+' col__agenda p-0 pt-1 pb-1"></div></div>'); 
    $('#agenda__3').append('<div class="day_'+i+' col__agenda p-0 pt-1 pb-1"></div></div>');
    $('#agenda__4').append('<div class="day_'+i+' col__agenda p-0 pt-1 pb-1"></div></div>'); 
    $('#agenda__5').append('<div class="day_'+i+' col__agenda p-0 pt-1 pb-1"></div></div>');    
}

for (var i = 1; i <= 28; i++) {
    if(i == 2){
        $('#agenda__1 .day_'+i).append('<div style="width: 100%" class="p-0 pt-2 bg-orange both offset-left pb-2"><p class="text-white font-weight-bold m-0">a</p></div>');
        $('#primary .day_'+i).append('<div style="width: 50%" class="p-0 pt-2 right offset-left pb-2"><p class="text-white font-weight-bold m-0">1</p></div>');
    }
    if(i == 3){
        $('#agenda__1 .day_'+i).append('<div style="width: 100%" class="p-0 pt-2 bg-blue both offset-left pb-2"><p class="text-white font-weight-bold m-0">b</p></div>');
        $('#agenda__2 .day_'+i).append('<div style="width: 100%" class="p-0 pt-2 bg-blue both pb-2"><p class="text-white font-weight-bold m-0">c</p></div>');
        $('#primary .day_'+i).append('<div style="width: 100%" class="p-0 pt-2 center pb-2"><p class="text-white font-weight-bold m-0">2</p></div>');
    }
    if(i == 4){
        $('#primary .day_'+i).append('<div style="width: 50%" class="p-0 pt-2 left pb-2"><p class="text-white font-weight-bold m-0">1</p></div>');
    }    
    if(i == 5){
        $('#agenda__1 .day_'+i).append('<div style="width: 200%" class="p-0 pt-2 bg-blue both pb-2"><p class="text-white font-weight-bold m-0">a</p></div>');
        $('#primary .day_'+i).append('<div style="width: 200%" class="p-0 pt-2 both pb-2"><p class="text-white font-weight-bold m-0">1</p></div>');
    }   
    if(i == 10){
        $('#agenda__1 .day_'+i).append('<div style="width: 100%" class="p-0 pt-2 bg-blue both pb-2"><p class="text-white font-weight-bold m-0">k</p></div>');
        $('#agenda__2 .day_'+i).append('<div style="width: 100%" class="p-0 pt-2 bg-blue offset-left both pb-2"><p class="text-white font-weight-bold m-0">d</p></div>');
        $('#primary .day_'+i).append('<div style="width: 50%" class="p-0 pt-2 right pb-2"><p class="text-white font-weight-bold m-0">1</p></div>');
        $('#primary .day_'+i).append('<div style="width: 50%" class="p-0 pt-2 center pb-2"><p class="text-white font-weight-bold m-0">2</p></div>');
    }   
    if(i == 11){
        $('#agenda__1 .day_'+i).append('<div style="width: 350%" class="p-0 pt-2 bg-orange both pb-2"><p class="text-white font-weight-bold m-0">dmo</p></div>');
        $('#agenda__2 .day_'+i).append('<div style="width: 150%" class="p-0 pt-2 bg-blue offset-left both pb-2"><p class="text-white font-weight-bold m-0">agrnlgkr..</p></div>');
        $('#agenda__3 .day_'+i).append('<div style="width: 1050%" class="p-0 pt-2 bg-purple both pb-2"><p class="text-white font-weight-bold m-0">a</p></div>');
        $('#agenda__4 .day_'+i).append('<div style="width: 100%" class="p-0 pt-2 bg-blue offset-left both pb-2"><p class="text-white font-weight-bold m-0">d</p></div>');
        $('#primary .day_'+i).append('<div style="width: 50%" class="p-0 pt-2 center pb-2"><p class="text-white font-weight-bold m-0">3</p></div>');
        $('#primary .day_'+i).append('<div style="width: 150%" class="p-0 pt-2 center pb-2"><p class="text-white font-weight-bold m-0">4</p></div>');
    } 
    if(i == 12){
        $('#agenda__4 .day_'+i).append('<div style="width: 100%" class="p-0 pt-2 bg-blue offset-left both pb-2"><p class="text-white font-weight-bold m-0">d</p></div>');
    }  
    if(i == 13){
        $('#primary .day_'+i).append('<div style="width: 50%" class="p-0 pt-2 center pb-2"><p class="text-white font-weight-bold m-0">3</p></div>');
        $('#primary .day_'+i).append('<div style="width: 50%" class="p-0 pt-2 center pb-2"><p class="text-white font-weight-bold m-0">2</p></div>');
    }    
    if(i == 14){
        $('#agenda__1 .day_'+i).append('<div style="width: 100%" class="p-0 pt-2 bg-blue offset-left both pb-2"><p class="text-white font-weight-bold m-0">a</p></div>');
        $('#agenda__2 .day_'+i).append('<div style="width: 900%" class="p-0 pt-2 bg-light-blue  both pb-2"><p class="text-white font-weight-bold m-0">e</p></div>');
        $('#agenda__4 .day_'+i).append('<div style="width: 1000%" class="p-0 pt-2 bg-yellow offset-left both pb-2"><p class="text-white font-weight-bold m-0">d</p></div>');
        $('#primary .day_'+i).append('<div style="width: 50%" class="p-0 pt-2 center pb-2"><p class="text-white font-weight-bold m-0">3</p></div>');
        $('#primary .day_'+i).append('<div style="width: 50%" class="p-0 pt-2 center pb-2"><p class="text-white font-weight-bold m-0">4</p></div>');        
    }
    if(i == 15){
        $('#agenda__5 .day_'+i).append('<div style="width: 100%" class="p-0 pt-2 bg-blue both pb-2"><p class="text-white font-weight-bold m-0">d</p></div>');
        $('#primary .day_'+i).append('<div style="width: 50%" class="p-0 pt-2 center pb-2"><p class="text-white font-weight-bold m-0">5</p></div>');
        $('#primary .day_'+i).append('<div style="width: 50%" class="p-0 pt-2 center pb-2"><p class="text-white font-weight-bold m-0">4</p></div>');        
    }    
    if(i == 16){
        $('#primary .day_'+i).append('<div style="width: 550%" class="p-0 pt-2 left pb-2"><p class="text-white font-weight-bold m-0">3</p></div>');        
    } 
    if(i == 21){
        $('#primary .day_'+i).append('<div style="width: 150%" class="p-0 pt-2 offset-left both pb-2"><p class="text-white font-weight-bold m-0">2</p></div>');        
    }  
    if(i == 23){
        $('#primary .day_'+i).append('<div style="width: 150%" class="p-0 pt-2 both pb-2"><p class="text-white font-weight-bold m-0">1</p></div>');        
    }     
    if(i == 24){
        $('#agenda__1 .day_'+i).append('<div style="width: 50%" class="p-0 pt-2 bg-blue offset-left both pb-2"><p class="text-white font-weight-bold m-0">a</p></div>');
        $('#primary .day_'+i).append('<div style="width: 50%" class="p-0 offset-left pt-2 both pb-2"><p class="text-white font-weight-bold m-0">1</p></div>');        
        
    }
    if(i == 25){
        $('#agenda__1 .day_'+i).append('<div style="width: 50%" class="p-0 pt-2 bg-blue both pb-2"><p class="text-white font-weight-bold m-0">...</p></div>');
        $('#primary .day_'+i).append('<div style="width: 50%" class="p-0 pt-2 both pb-2"><p class="text-white font-weight-bold m-0">1</p></div>');        
    }     
}


$('#primary_button').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.small-menu').css("flex", "0 0 16.66667%");
            $('#agenda-container').fadeIn(0);
        }else{
            $(this).addClass('active');
            $('.small-menu').css("flex", "0 0 8.33333%");
            $('#agenda-container').fadeOut(0)
        }
});


$('.col__agenda div').mousemove(function(){

    reset(); 
    $('.container').append('<div class="box bg-white"><p class="text-center"><h3>Plan existing</h3>Voulez vous continuez ?</p><div class="row"></div><button type="button" class="btn btn-dark">Oui</button><button type="button" class="btn btn-dark">Annuler</button></div>');   
    $('.box').mouseleave(function(){
        reset();
    });
    $(this).mouseleave(function(){
        reset();
    });    
    var x = event.clientX;
    var y = event.clientY;      
    console.log(x);
    $('.box').css({"top": y+"px","left" : x+"px"});     
});
