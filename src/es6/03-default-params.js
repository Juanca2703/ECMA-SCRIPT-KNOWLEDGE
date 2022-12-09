function newUser (name, age, country) {
    var name = name || "camilo";
    var age = age || 21;
    var country = country || "CO";
    console.log(name, age, country);
}

newUser();
newUser("sebas", 21, "MX");



function newAdmin(name = "victor", age = 18, country = "PE"){
    console.log(name, age, country);
}

newAdmin();
newAdmin("Paula", 23, "CH");