// convert ascii text to binary
function textToBinary(clicked_id) 
{
    //var  output = document.getElementById("outputBox");  
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
    console.log("binary value of ascii: " + binaryValue);

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

//Objective 4: DNA actually consists of two, complementary strands that are attached in such a way 
// that every A matches T and G matches C (and the inverses).  
// Given a complementary strand of DNA, output the ASCII equivalent of the primary strand.

// function to convert complementary strand to primary strand DNA
function getPrimaryStrand()
{
    var input = document.getElementById("complementaryInputBox").value;
    console.log(input);
    var chars = {'A':'T','T':'A','C':'G', 'G':'C'};
    input = input.replace(/[ATGC]/g, m => chars[m]);
    console.log("primary strand: " + input);

    primaryToBinary(input);
}

function primaryToBinary(primaryStrand)
{
    var chars = {'A':'00','T':'01','C':'11', 'G':'10'};
    var  output = document.getElementById("primaryOutputBox");
    primaryStrand = primaryStrand.replace(/[ATGC]/g, m => chars[m]);
    console.log(primaryStrand);

    primaryStrand = primaryStrand.replace(/(\w{8})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
    var binString = '';

    primaryStrand.split(" ").map(function(bin) 
    {
        binString += String.fromCharCode(parseInt(bin, 2));
    });

    output.value = binString;
}