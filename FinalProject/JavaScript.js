var rLight = document.getElementById("redLight");

var gLight = document.getElementById("greenLight");
gLight.style.visibility = "hidden";

var cLogo = document.getElementById("chevyLogo");

var fLogo = document.getElementById("fordLogo");

var wTrophy = document.getElementById("winTrophy");
wTrophy.style.display = 'none';

var rAgain = document.getElementById("raceAgain");
rAgain.style.display = "none";

var cName = document.getElementById("chevyName");
cName.style.display = "none";

var fName = document.getElementById("fordName");
fName.style.display = "none";

var tName = document.getElementById("tieName");
tName.style.display = "none";

var sRace = document.getElementById("startRace");

var rText = document.getElementById("racingText");
rText.style.display = "none";

var wText = document.getElementById("winnerText");
wText.style.display = "none";



var newPos1 = 0;
var newPos2 = 0;





function startRace(){

    gLight.style.visibility = "visible";
    rLight.style.visibility = "hidden";
    sRace.style.display = "none";
    rText.style.display = "inline";
    


    var race = setInterval(racing, 500);

        function racing() {
            var distance1 = (Math.random() * 100) + newPos1;
            var distance2 = (Math.random() * 100) + newPos2;

            cLogo.style.left = distance1 + "px";
            fLogo.style.left = distance2 + "px";
            
            newPos1 = distance1;
            newPos2 = distance2;

            var cDistance = distance1;
            var fDistance = distance2;

            var finishline = screen.width;


            if((cDistance + 290) == (fDistance + 254) && (cDistance + 290) >= finishline && (fDistance + 254)  >= finishline){
                clearInterval(race);
                wTrophy.style.display = "inline";
                tName.style.display = "inline";
                rAgain.style.display = "inline";
                rText.style.display = "none";
                wText.style.display = "inline";
                
            }
            else if((cDistance + 290) >= finishline){
                clearInterval(race);
                fLogo.style.display = "none";
                wTrophy.style.display = "inline";
                cName.style.display = "inline";
                rAgain.style.display = "inline";
                rText.style.display = "none";
                wText.style.display = "inline";
            }
            else if((fDistance + 254) >= finishline){
                clearInterval(race);
                cLogo.style.display = "none";
                wTrophy.style.display = "inline";
                fName.style.display = "inline";
                rAgain.style.display = "inline";
                rText.style.display = "none";
                wText.style.display = "inline";
            }
        }
}

function reset(){
    cLogo.style.display = "inline";
    fLogo.style.display = "inline";
    rLight.style.visibility = "visible";
    gLight.style.visibility = "hidden";
    wTrophy.style.display = 'none';
    rAgain.style.display = "none";
    cName.style.display = "none";
    fName.style.display = "none";
    tName.style.display = "none";
    sRace.style.display = "inline";
    rText.style.display = "none";
    wText.style.display = "none";

    cLogo.style.left = "-35px";
    fLogo.style.left = 0;
    
    cDistance = 0;
    fDistance = 0;

    newPos1 = 0;
    newPos2 = 0;
    
    distance1 = 0;
    distance2 = 0;

}