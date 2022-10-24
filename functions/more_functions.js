function displaymailinglabel(name, address, city, state, zip)
{
    console.log("The name is " + name + ". The address is " + address + ", the city is " +
    city + ", the state is " + state + ", and the zip is " + zip)
}

displaymailinglabel("John Doe", "Whowanttoknow Drive", "Nunya", "Business", "10240");
displaymailinglabel("Jane Doe", "Whatever Drive", "What", "New York", "46789")

function addnumbers(number1, number2)
{
   let total =  number1+number2;
   console.log (total);
}
addnumbers(21320, 68754);
addnumbers(32132, 3856);

function displayReciept(somenumber1, somenumber2)
{
    let change = somenumber2-somenumber1
    console.log("Total Due: $" + somenumber1 + "\n" + "Amount Paid: $" + somenumber2 + "\n" + "Change Due: $" + change)
}

displayReciept(120, 150)
displayReciept(1199, 1200)