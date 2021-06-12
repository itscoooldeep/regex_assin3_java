function SMS(sms){
    if(sms<=50){
        alert("Charges for sms :" +sms*0/100+"rupees");
    }
    else if(sms>50 && sms<=200){
      alert("Charges for sms :" +sms*25/100+"rupees");
    }
    else if(sms > 200 && sms <= 400){
      alert("Charges for sms :" +sms*40/100+"rupees");
    }
    else if(sms>400){
      alert("Charges for sms :" +sms*45/100+"rupees");
    }
    else{
        alert("wrong value");
    }
}
function CALLS(calls){
    if(calls<=50){
        alert("Charges for calls :" +calls*50/100+"rupees");
    }
    else if(calls>50 && calls<=150){
      alert("Charges for calls :" +calls*70/100+"rupees");
    }
    else if(calls > 150 && calls <= 300){
      alert("Charges for calls :" +calls*85/100+"rupees");
    }
    else if(calls>300){
      alert("Charges for calls :" +calls*95/100+"rupees");
    }
    else{
        alert("wrong value");
    }
}



document.getElementById("submitbutton").addEventListener("click",function callnsms(){
    var sms = document.getElementById("sms").value;
    var calls = document.getElementById("calls").value;
    alert("your sms input:"+ sms);
    alert("your calls input:"+ calls);
    SMS(sms);
    CALLS(calls);
    alert("Total Charges:"+ sms+calls)

});




