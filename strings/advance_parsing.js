function parseAndDisplayName(Name)

{
    let firstSpace = Name.indexOf(" ")
    let lastSpace = Name.lastIndexOf(" ")
    let middleSpace = Name.substring(firstSpace+1, lastSpace)
    let firstname = Name.substring(0, firstSpace)
    //let middlename = Name.substring(firstSpace + 1)
    let lastname = Name.substring(lastSpace + 1)
    
    console.log("Name: " + Name)

    if (firstSpace == -1)
    {
        console.log("Only Name: " + Name);
    }
    else if (firstSpace == lastSpace)
    {
        console.log("First Name : " + firstname)
        console.log("Last Name: " + lastname)
    }
    else
    {
        console.log("First Name : " + firstname)
        console.log("Middle Name: " + middleSpace)
        console.log ("Last Name :" + lastname)
    }

}

parseAndDisplayName("Cher")
parseAndDisplayName("Brenda Kaye")
parseAndDisplayName("Dana Lynn Wyatt")