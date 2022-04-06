//Function to compute the simple interest.
function compute()
{
   //Creating variables and assigning to them the value of their respective input elements
    var principal = document.getElementById("principal").value;
    var rate      = document.getElementById("rate").value;
    var years     = document.getElementById("years").value;
    
    //Creating interest variable and assigning to it the calulated  Simple Interest value
    var interest  = principal * years * rate /100;
    
    //Converting the 'No of Years' into the actual year in the future and assigning the value to variable year.
    var year      = new Date().getFullYear()+parseInt(years);
    
    //Validation for "Principal" input box.
    // If the entered value is 0 or -1 or undefined or null then an alert will  pop up and finally return to the same page.
    if (principal <= 0 || principal === undefined || principal === null)
    {
        alert("Enter a positive number");
        //Amount input box will be focused.
        document.getElementById("principal").focus();
        return;
    }
    else{
        
        //Creating variable resultOutput and assigning to it the value of it's  input element named result
        var resultOutput = document.getElementById("result");
        
        //Setting its inner html property as the display
        resultOutput.innerHTML = "If you deposit " + "<span><mark>" + principal + "</mark></span>"  + ", <br> at an interest rate of "+ "<span><mark>" + rate + "</mark></span>"+"<mark>%</mark>." + "<br> You will receive an amount of " + "<span><mark>" + interest + "</mark></span>" + ", <br> in the year " + "<span><mark>" + year + "</mark></span><br>";
    }
    
}

//Function to read the value of the range slider 
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    
    //Display range value to the <span>adjacent to the slider
    document.getElementById("rate_val").innerText=rateval;
}    