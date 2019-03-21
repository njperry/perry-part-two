
//First Variables
var eventType = prompt("What type of event are you attending; casual, semi-formal, or formal?", "").toLowerCase();

var tempFahr = Number(prompt("What will the temperature be in degrees fahrenheit?", ""));

//Event Logic
if(eventType =='casual')
{
	var x = ('something comfy');
}
else if(eventType =='semi-formal')
{
  var x = ('a polo');
}
else if(eventType =='formal')
{
  var x = ('a suit');
}

//NumTemp Logic
if(tempFahr < 54)
{
	var y = ('a coat');
}
else if(70 >= tempFahr && tempFahr >= 54)
{
  var y = ('a jacket');
}
else if(tempFahr > 70)
{
  var y = ('no jacket');
}

//Result Variable
var result = ('Since it\'s ' + tempFahr + ' degrees and you\'re going to a ' + eventType + ' event, you should wear ' + x + ' and ' + y + '.');

//Write syntax
document.write(result);
console.log(result);
alert(result)
