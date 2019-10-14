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

// turn primary strand to binary, then turn from binary to ascii
function primaryToBinary(primaryStrand)
{
    var  output = document.getElementById("primaryOutputBox");

    // replace dna letters with binary numbers
    var chars = {'A':'00','T':'01','C':'11', 'G':'10'};
    primaryStrand = primaryStrand.replace(/[ATGC]/g, m => chars[m]);
    console.log(primaryStrand);

    // binary number to ascii
    primaryStrand = primaryStrand.replace(/(\w{8})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
    var binString = '';
    primaryStrand.split(" ").map(function(bin) 
    {
        binString += String.fromCharCode(parseInt(bin, 2));
    });
    
    output.value = binString;
}

function getDnaStrings()
{
    var dna1 = document.getElementById("lcsInputbox1").value;
    var dna2 = document.getElementById("lcsInputbox2").value;

    //call lcs function
    var array;
    longestCommonSubsequence(dna1, dna2);
}

function commonSubsequence(dna1, dna2)
{
    var output = document.getElementById("subsequenceOutputBox");
    
    var dna1Substring = dna1.substr(0, dna1.length - 1);
    var dna2Substring = dna2.substr(0, dna2.length - 1);
 
    if (dna1.length == 0 || dna2.length == 0) 
    {
        output.value = '';
    } 
    else if (dna1.charAt(dna1.length - 1) === dna2.charAt(dna2.length - 1)) 
    {
        return commonSubsequence(dna1Substring, dna2Substring) + dna1.charAt(dna1.length - 1);
    } 
    else 
    {
        var x = commonSubsequence(dna1, dna2Substring);
        var y = commonSubsequence(dna1Substring, dna2);
        output.value = (x.length > y.length) ? x : y;
    }
}

function longestCommonSubsequence(set1, set2) 
{
    var output = document.getElementById("subsequenceOutputBox");
    // Init LCS matrix.
    const lcsMatrix = Array(set2.length + 1).fill(null).map(() => Array(set1.length + 1).fill(null));

    // Fill first row with zeros.
    for (let columnIndex = 0; columnIndex <= set1.length; columnIndex += 1) 
    {
        lcsMatrix[0][columnIndex] = 0;
    }

    // Fill first column with zeros.
    for (let rowIndex = 0; rowIndex <= set2.length; rowIndex += 1) 
    {
        lcsMatrix[rowIndex][0] = 0;
    }   

    // Fill rest of the column that correspond to each of two strings.
    for (let rowIndex = 1; rowIndex <= set2.length; rowIndex += 1) 
    {
        for (let columnIndex = 1; columnIndex <= set1.length; columnIndex += 1) 
        {
            if (set1[columnIndex - 1] === set2[rowIndex - 1]) 
            {
                lcsMatrix[rowIndex][columnIndex] = lcsMatrix[rowIndex - 1][columnIndex - 1] + 1;
            } 
            else    
            {
                lcsMatrix[rowIndex][columnIndex] = Math.max(
                lcsMatrix[rowIndex - 1][columnIndex],
                lcsMatrix[rowIndex][columnIndex - 1],
                );
            }
    }
}

    // Calculate LCS based on LCS matrix.
    if (!lcsMatrix[set2.length][set1.length]) 
    {
        // If the length of largest common string is zero then return empty string.
        //return [''];
        output.value = "No common subsequence";
    }

    const longestSequence = [];
    let columnIndex = set1.length;
    let rowIndex = set2.length;

    while (columnIndex > 0 || rowIndex > 0) 
    {
        if (set1[columnIndex - 1] === set2[rowIndex - 1]) 
        {
            // Move by diagonal left-top.
            longestSequence.unshift(set1[columnIndex - 1]);
            columnIndex -= 1;
            rowIndex -= 1;
        } 
        else if (lcsMatrix[rowIndex][columnIndex] === lcsMatrix[rowIndex][columnIndex - 1]) 
        {
            // Move left.
            columnIndex -= 1;
        } 
        else    
        {
            // Move up.
            rowIndex -= 1;
        }
    }
    
    if(longestSequence.length < 1)
    {
        output.value = "No common subsequence";
    }
    else
    {
        output.value = longestSequence.join("");
    }
    
}