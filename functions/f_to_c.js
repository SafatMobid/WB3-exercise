function convertFtoC(temp)
{
    let celcius= (temp -32)*(5/9)
    return celcius;
}

console.log ("when fahrenheit is 212 degree, celcius is " + convertFtoC(212) + "\n"+ "when fahrenheit is 90 degree, celcius is " + convertFtoC(90)
+ "\n" + "when fahrenheit is 72 degree, celcius is " + convertFtoC(72) + "\n" +  "when fahrenheit is 32 degree, celcius is " + convertFtoC(32) + 
"\n"+ "when fahrenheit is 0 degree, celcius is " + convertFtoC(0) + "\n"+ "when fahrenheit is -40 degree, celcius is " + convertFtoC(-40))