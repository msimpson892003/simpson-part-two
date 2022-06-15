golfName = prompt("Welcome to GC mini golf! What is your name?");
golfHoles =  parseInt(prompt("Hi, " + golfName + " Would you like to play 3 or 6 holes?"), 10);
while(golfHoles != 3 && golfHoles != 6){
    golfHoles =  parseInt(prompt("Please choose from either 3 or 6 holes to continue."), 10);
}
golfStrokes = 0;
golfPar = 3 * golfHoles;
golfScore = 0;

for(i=1; i <= golfHoles; i++){
    golfStrokes += parseInt(prompt("How many putts for hole " + i + "?"),10);
}
golfScore = golfStrokes - golfPar;
if (golfScore > 0){
    alert("Nice try, " + golfName + "... Your total par was: +" + golfScore + ".")
}else if (golfScore === 0){
    alert("Good game, " + golfName + ". Your total par was: 0.")
}else{
    alert("Great job, " + golfName + "! Your total par was: " + golfScore + ".")
}   