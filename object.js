const myobj = {
    fname: "joe",
    age: 20,
    address: "24 akiba street",
    occupation: "Developer",
    city: "calabar",

};
for (const property in myobj){
    console.log ('$ {property}: $ {myobj[property]}');
}