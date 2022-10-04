//Made by Rowx 30/09/2022

var listing = {
    list:[
    {
        name : "Car Lookup",
        inputs: [
            {label: "Plate", placeholder: "EN-741-BN",mandatory:""},
            {label: "VIN", placeholder: "WAUZZZ8P39A062063",mandatory:""}
        ] 
    },
    {
        name : "Credit Card Lookup",
        inputs: [
            {label: "Card 16 number", placeholder: "5335819774563694",mandatory:"required"},
        ]
    },
    {
        name : "Email Lookup",
        inputs: [
            {label: "Email", placeholder: "john@gmail.com",mandatory:"required"},
        ]
    },
    {
        name : "Leak Lookup",
        inputs: [
            {label: "Email", placeholder: "john@gmail.com",mandatory:"required"},
        ]
    },
    {
        name : "Google Dorks",
        inputs: [
            {label: "query", placeholder: "D0pp3lgang3r",mandatory:"required"},
        ]
    },
    {
        name : "Github Account",
        inputs: [
            {label: "github account", placeholder: "D0pp3lgang3r",mandatory:"required"},
        ]
    },
    {
        name : "Reddit Account",
        inputs: [
            {label: "reddit account", placeholder: "D0pp3lgang3r",mandatory:"required"},
        ]
    },
    {
        name : "Steam Account",
        inputs: [
            {label: "steam user", placeholder: "doppelx",mandatory:"required"},
        ]
    },
    {
        name : "Instagram Account",
        inputs: [
            {label: "insta username", placeholder: "D0pp3lgang3r",mandatory:"required"},
        ]
    },
    {
        name : "Twitter Account",
        inputs: [
            {label: "twitter username", placeholder: "brainshell_off",mandatory:"required"},
            {label: "tweet keyword", placeholder: "Berserk",mandatory:""}
        ]
    },
    {
        name : "Facebook Account",
        inputs: [
            {label: "facebook username", placeholder: "zuck",mandatory:"required"}
        ]
    },
    {
        name : "Phone Lookup",
        inputs: [
            {label: "Phone", placeholder: "+33624451258",mandatory:"required"}
        ]
    },
    {
        name : "Name Lookup",
        inputs: [
            {label: "Name", placeholder: "Jean",mandatory:"required"},
            {label: "Firstname", placeholder: "John",mandatory:""},
            {label: "City", placeholder: "Paris",mandatory:""},
            {label: "Country", placeholder: "France",mandatory:""}
        ]
    },
    {
        name : "Shodan",
        inputs: [
            {label: "Query", placeholder: "ip,domain,server name,...",mandatory:"required"}
        ]
    },
    {
        name : "IBAN",
        inputs: [
            {label: "IBAN", placeholder: "CH5604835012345678009",mandatory:"required"}
        ]
    },
    {
        name : "Profiler",
        inputs: [
            {label: "Username", placeholder: "D0pp3lgang3r",mandatory:"required"}
        ]
    },
    {
        name : "Mac Address Lookup",
        inputs: [
            {label: "BSSID", placeholder: "12:93:97:51:C9:02",mandatory:"required"}
        ]
    },
    {
        name : "IP Lookup",
        inputs: [
            {label: "IP", placeholder: "125.175.126.133",mandatory:"required"}
        ]
    },
    {
        name : "Torrent Lookup",
        inputs: [
            {label: "IP", placeholder: "185.123.184.152",mandatory:"required"}
        ]
    },
    {
        name : "DNS Lookup",
        inputs: [
            {label: "domain", placeholder: "google.com",mandatory:"required"}
        ]
    },
    {
        name : "Linkedin Search",
        inputs: [
            {label: "username", placeholder: "jude",mandatory:"required"}
        ]
    },
    ]
 };
var textDeSortie = "test avec vla les données Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, esse natus sunt dicta aliquid consequatur provident nisi molestias, nobis excepturi ipsum accusantium. Maiores rem, aliquam voluptatem alias fuga exercitationem suscipit?";
function activate(opt,index){
    let title = document.getElementById("researchTitle");
    let zone = document.getElementById("searchZone");

    title.innerHTML = opt.innerHTML;

    zone.innerHTML="";
    for(let elt=0;elt<listing.list[index].inputs.length;elt++){
        zone.innerHTML+="<label for='search' id='labelSearch'>"+listing.list[index].inputs[elt].label+" :</label>";
        zone.innerHTML+="<input type='search' id='search' "+listing.list[index].inputs[elt].mandatory+" placeholder="+listing.list[index].inputs[elt].placeholder+"></input>";
        if(listing.list[index].inputs[elt].mandatory == "required"){
            zone.innerHTML+="<h5>* This argument is mandatory</h5>"
        }
    }
    zone.innerHTML+="<div class='startResearch'><button id='startResearch' type='submit'>Search 🔎</button></div>";

    zone.innerHTML+="<div class='output'><h2>Output</h2><textarea disabled>"+textDeSortie+"</textarea></div>";
}

