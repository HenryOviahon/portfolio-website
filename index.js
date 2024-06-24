

//enable opacity of java list
function myFunction() {

    var list1 = document.getElementById("list1");

    if (list1.style.visibility = "hidden"){ //use if statements to determine whether to make visible or hidden
        list1.style.transition = "all, 0.2s";
        list1.style.visibility ="visible";
        list1.style.opacity ="1";
    }
    if (list1.style.visibility = "visible"){
        list1.style.transition = "all, 0.2s";
        list1.style.visibility ="hidden";
        list1.style.opacity ="0";
    }

    
    

}
    
