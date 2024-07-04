

//enable opacity of java list
function buttonResume() {

    var list1 = document.getElementById("list1");
    var button1 = document.getElementById("button1");


    if (list1.style.visibility == "visible"){ //use if statements to determine whether to make visible or hidden

        list1.style.transition = "all, 0.2s";
        list1.style.visibility = "hidden";
        list1.style.opacity ="0";
        button1.style.background = "rgb(9, 140, 255)";

        

    } 
    else {

        list1.style.transition = "all, 0.2s";
        list1.style.visibility ="visible";
        list1.style.opacity ="1";
        button1.style.background = "blue";
        
    }

    
    

}
    
