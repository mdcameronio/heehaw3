



function myFunction() {

    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or empty
    let text;
    //get element from doc
    let list = document.getElementById("demo");
    //clear created element for next run
    list.innerHTML="";
    //clear error
    let error = document.getElementById("err");
    error.innerHTML="";
    //check if inputed number is a number
    if (isNaN(x)   ) {
        text = "enter valid number";
        document.getElementById("err").innerHTML = text;
        //check if number is negitive
    } else if(x < 0){
        text = "enter positive numbers only";
        document.getElementById("err").innerHTML = text;
        //check if input is empty
    }else if(x===""){
        text = "no number entered";
        document.getElementById("err").innerHTML = text;
        //if all is good run number through loop
    }else {

        for (let i = 1; i <=x ; i++) {
            //create element
            let doc = document.createElement("p");
            if(i%3===0&&i%5===0){
                doc.textContent = "Hee Haw!"
                list.appendChild(doc);
                //document.write("Hee Haw!<br>");
            }
            else if(i%3===0){
                doc.textContent = "Hee!"
                list.appendChild(doc);
                //document.write("Hee!<br>");

            }else if(i%5===0){
                doc.textContent = "Haw!"
                list.appendChild(doc);
                //document.write("Haw!<br>");
            }
            else {
                doc.textContent = i.toString() ;
                list.appendChild(doc);
                //document.write(i.toString() +"<br>");
            }
        }
    }
}

















