$(document).ready(function(){
let click=0;
    $("#click1").click(function(){
        if(click%2==0){
            $("#click1").animate({width:"50%",color:"black",backgroundColor:"rgba(255, 193, 90, 0.3)"},400);
            $("#click1").text("Half");
        }else{
        $("#click1").animate({width:"100%",color:"white",backgroundColor:"rgba(255, 193, 90, 0.9)"},400);
        $("#click1").text("Full");
    }
    click++;
    })

    let click2=0;
    $("#click2").click(function(){
        if(click2%2==0){
            $("#click2").animate({height:"50%",color:"black",backgroundColor:"rgb(255, 0, 0,0.3)"},400);
            $("#click2").text("Half");
        }else{
        $("#click2").animate({height:"100%",color:"white",backgroundColor:"rgb(255, 0, 0,0.6)"},400);
        $("#click2").text("Full");
    }
    click2++;
    })

    $("#move").draggable();
})