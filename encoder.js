// convert ascii text to binary
function textToBinary(clicked_id) 
{
    var  output = document.getElementById("outputBox");  
    var input = document.getElementById("inputBox").value;
    var binaryValue = "";

    // convert text to binary
    // for (i=0; i < input.length; i++) 
    // {
    //     binaryValue += input[i].charCodeAt(0).toString(2);
    // }

    // // left padding for binary value if needed
    // while(binaryValue.length < 8)
    // {
    //     binaryValue = "0" + binaryValue;
    // }

    var length = input.length, output = [];
    for (var i = 0;i < length; i++) 
    {
        var bin = input[i].charCodeAt().toString(2);
        output.push(Array(8-bin.length+1).join("0") + bin);
    }

    binaryValue = output.join("");
    console.log(binaryValue);

    if(clicked_id == "dnaButton")
    {
        // call function to convert binary to dna string
        binaryToDNA(binaryValue);
    }
    else if (clicked_id == "rnaButton")
    {
        binaryToRNA(binaryValue);
    }
}

//convert binary to DNA string
// 00 -> A
// 01 => T
// 10 -> G
// 11 -> C
function binaryToDNA(binaryString)
{
    var  output = document.getElementById("outputBox");
    var dnaValue = "";
    var splitBinaryString = binaryString.match(/.{1,2}/g);
    
    for(i=0;i < splitBinaryString.length; i++)
    {
        if(splitBinaryString[i] == "00")
        {
            dnaValue += "A";
        }
        else if(splitBinaryString[i] == "01")
        {
            dnaValue += "T";
        }
        else if(splitBinaryString[i] == "10")
        {
            dnaValue += "G";
        }
        else if (splitBinaryString[i] == "11")
        {
            dnaValue += "C";
        }
    }
    //console.log(dnaValue);
    output.value = dnaValue;
}

//Objective 2: RNA is very similar to DNA, but it replaces T with U.  
//Make your program capable of encoding as either DNA or RNA.
// binary to RNA
function binaryToRNA(binaryString)
{
    var  output = document.getElementById("outputBox");
    var dnaValue = "";
    var splitBinaryString = binaryString.match(/.{1,2}/g);
    
    for(i=0;i < splitBinaryString.length; i++)
    {
        if(splitBinaryString[i] == "00")
        {
            dnaValue += "A";
        }
        else if(splitBinaryString[i] == "01")
        {
            dnaValue += "U";
        }
        else if(splitBinaryString[i] == "10")
        {
            dnaValue += "G";
        }
        else if (splitBinaryString[i] == "11")
        {
            dnaValue += "C";
        }
    }
    //console.log(dnaValue);
    output.value = dnaValue;
}

