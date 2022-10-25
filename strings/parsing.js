  function parseAndDisplayName(Name) {
    let first = Name.substring(0, Name.indexOf(" "));
    let last = Name.substring(Name.indexOf(" ") + 1);
    console.log("\n"+ "Name: " + Name  + ", First name: " + first + ", Last name: " + last);

}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");