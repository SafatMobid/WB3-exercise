function convertCtoF(temp)
{
    let fahrenheit= (temp * (9/5) + 32)
    return fahrenheit;
}

console.log ("when Celcius is 212 degree, Fahrenheit is " + convertCtoF(100) + "\n"+ "when Celcius is 90 degree, Fahrenheit is " + convertCtoF(45)
+ "\n" + "when Celcius is 72 degree, Fahrenheit is " + convertCtoF(19) + "\n" +  "when Celcius is 32 degree, Fahrenheit is " + convertCtoF(0) + 
"\n"+ "when Celcius is 0 degree, Fahrenheit is " + convertCtoF(-7) + "\n"+ "when Celcius is -40 degree, Fahrenheit is " + convertCtoF(-40))