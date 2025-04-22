function calculateBMI(){
    var h= document.getElementById('height').value;
    var w=document.getElementById('weight').value;
    var bmi=w/(h/100*h/100);
    var total=bmi.toFixed(2);
    
    if(bmi<18.5){
        category="Underweight"
    }
     else if(bmi<25){
        category="Normalweight"
    }
    else if(bmi<30){
        category="Overweight"
    }
    else{
        category="Obesity"
    }

    document.getElementById('result').innerHTML="Your BMI is" +total+ "("+category+")"
}