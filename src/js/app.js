for (var i = 1; i <= 28; i++) {
    if(i < 10){
        $('#number').append('<div class="day_'+i+' col col__agenda p-0"><div class="p-0 pt-3 pb-3">0'+i+'</div></div>');
        
    }else{
        $('#number').append('<div class="day_'+i+' col col__agenda p-0"><div class="p-0 pt-3 pb-3">'+i+'</div></div>');    
    }
    
    $('#primary').append('<div class="day_'+i+' col col__agenda p-0 pt-1 pb-1"><div id="primary_'+i+'" class="pt-3 pb-3"></div></div>');
    $('#agenda_container_1').append('<div class="day_'+i+' col col__agenda p-0 pt-1 pb-1"><div id="agenda_1_'+i+'" class="p-0 pt-3 pb-3"></div></div>'); 
    $('#agenda_container_2').append('<div class="day_'+i+' col col__agenda p-0 pt-1 pb-1"><div id="agenda_2_'+i+'" class="p-0 pt-3 pb-3"></div></div>'); 
    $('#agenda_container_3').append('<div class="day_'+i+' col col__agenda p-0 pt-1 pb-1"><div id="agenda_3_'+i+'" class="p-0 pt-3 pb-3"></div></div>');
    $('#agenda_container_4').append('<div class="day_'+i+' col col__agenda p-0 pt-1 pb-1"><div id="agenda_4_'+i+'" class="p-0 pt-3 pb-3"></div></div>'); 
    $('#agenda_container_5').append('<div class="day_'+i+' col col__agenda p-0 pt-1 pb-1"><div id="agenda_5_'+i+'" class="p-0 pt-3 pb-3"></div></div>'); 
    
    if(i == 2 || i == 5){
        $('#primary_'+i).addClass('right');  
        if(i == 2){
            $('#agenda_'+i).addClass('right bg-orange');   
        }
        if(i == 5){
            $('#primary_'+i).addClass('full_right');     
        }
        
    } 
    if(i == 3){
        $('#primary_'+i).addClass('center');  
        $('#agenda_'+i).addClass('left bg-blue');  
    }     
    if(i == 4 || i == 6){
        $('#primary_'+i).addClass('left');    
        if(i == 6){
            $('#primary_'+i).addClass('full_left');      
        }        
    } 
    if(i == 7){
        $('#primary_'+i).addClass('both'); 
        $('#agenda_3_'+i).addClass('left bg-orange'); 
    } 
    if(i == 16){
        $('#primary_'+i).addClass('right'); 
        $('#agenda_2_'+i).addClass('right bg-blue');  
    } 
    if(i > 14){
        $('#agenda_2_'+i).addClass('center bg-blue');   
    } 
    if(i == 8){ 
        $('#agenda_3_'+i).addClass('right bg-red');  
    }
    if(i > 8){ 
        $('#agenda_3_'+i).addClass('center bg-red');  
        $('#agenda_5_'+i).addClass('center bg-yellow');
    } 
    if(i > 16){
        $('#primary_'+i).addClass('center');    
    }     
}

$('#primary_button').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.small-menu').css("flex", "0 0 16.66667%");
            $('#agenda-container').fadeIn(1000);
        }else{
            $(this).addClass('active');
            $('.small-menu').css("flex", "0 0 8.33333%");
            $('#agenda-container').fadeOut(1000)
        }
});
