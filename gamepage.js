function send() {
     number1 = document.getElementById("number1").value;
     number2 = document.getElementById("number1").value;

    actualawnser = number1*number2;
    console.log(actualawnser);
    document.getElementById("number1").value =" ";
    document.getElementById("number2").value =" ";

    question_number = "<h4>" + number1 + "X" + number2 + "<h4>";
    input_box = "<br>Awnser: <input type ='text' id = 'input_check_box' placeholder = 'awnser here'>";
    check_button = "<br><br><button class= 'btn btn-info' onclick = 'check()'>";

    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
     
}