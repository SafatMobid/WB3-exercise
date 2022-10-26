function parseAndDisplayName(Name) 
{
    let spacePos = Name.indexOf(" ")
    let first = Name.substring(0, spacePos);
    let middle = Name.substring(spacePos + 1)
    let last = Name.substring(spacePos);

    console.log("Name: " + Name);
    
    if (first == Name.substring(0, spacePos) && last != Name.substring(spacePos));
    {
        
        console.log("Only name: " + Name);
    }

    if (first == Name.substring(0, spacePos) && middle == Name.substring(spacePos + 1) && last == Name.substring(spacePos));
    {
        console.log("First Name: " + first);
        console.log("Middle Name: " + middle);
        console.log("Last Name: " + last)
    }

}

parseAndDisplayName("Cher");
parseAndDisplayName("Dana Lynn Wyatt")