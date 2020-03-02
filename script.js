function calc(){
    let name = document.getElementById("name").value;
    let length1;
    if ( name == "") {
        alert("Enter something for name please");
    }

    length1 = name.length;
   
    document.getElementById("length1").innerHTML = length1;
    
    

}