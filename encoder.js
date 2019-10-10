// convert ascii text to binary
function textToBinary() 
{
    var  output = document.getElementById("outputBox");  
    var input = document.getElementById("inputBox").value;
    //output.value = "";
    var binaryValue = "";
    for (i=0; i < input.length; i++) 
    {
        //output.value += "0" + input[i].charCodeAt(0).toString(2);
        binaryValue += "0" + input[i].charCodeAt(0).toString(2);
    }
    console.log(binaryValue);
    binaryToDNA(binaryValue);
}

//convert binary to DNA 
function binaryToDNA(binaryString)
{
    var  output = document.getElementById("outputBox");
    var dnaValue = "";
    var splitBinaryString = binaryString.match(/.{1,2}/g);
    
    output.value = splitBinaryString;
}