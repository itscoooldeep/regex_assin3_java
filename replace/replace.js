function ReplaceString(){
 
    var text = document.getElementById("inputstring").value;
    var replaceWord = document.getElementById("replacewhom").value;
    var replaceWith = document.getElementById("replacewith").value;
 
let replacedText = text.replace(replaceWord , replaceWith);
replacedText = replacedText.replace(replaceWord , replaceWith);
document.getElementById("output").innerHTML = replacedText;
alert(replacedText);
}