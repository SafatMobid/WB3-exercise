function getSocSecTax(grosspay)
{
    let secTax = (grosspay * (6.2/100))
    return secTax;
}


function getMedicareTax(grosspay)
{
    let mediTax = (grosspay * (1.45/100))
    return mediTax;
}


function FederalTax(grosspay, withholdingCode)
{   
    if (withholdingCode == "0")
    {
        let fedTax = (grosspay * (23/100));
        return fedTax;
    }
    else if (withholdingCode=="1")
    {
        let fedTax = (grosspay * (21/100));
        return fedTax;
    }
    else if (withholdingCode=="2")
    {
        let fedTax = (grosspay * (19.5/100));
        return fedTax;
    }
    else if (withholdingCode=="3")
    {
        let fedTax = (grosspay * (18.5/100));
        return fedTax;
    }
    else if(withholdingCode=>"4")
    {
        changefedTax = (18/100) -((withholdingCode-4) * 0.005)
        let fedTax = (grosspay * changefedTax);
        return fedTax;
    }
}

console.log("The amount withheld for taxes is $" + FederalTax(1500, 6))