"use strict";

/*
* TEST 1
*/
// Test ett - Skapa en varibel, tilldela den värdet 10 och returnera variablen
function test1() {
    // Tilldelar variabeln tal med värdet 10
	var tal =10;
	// returnerar variabeln tal här
	return tal;
}


/*
* TEST 2
*/
// Skapa två variabler och tilldela dessa de numeriska värdena 2.5 och 8. 
// Multiplicera sedan de två variablerna, returnera produkten
function test2() {
	// tilldelar först värden
	var number1 =2.5;
	var number2 =8;
	// multiplicerar nu numbers/siffrorna med varandra och tar fram resultatet
	var resultat = number1 * number2;
	return resultat;
   
}


/*
* TEST 3
*/
// Du får två variabler av datatypen Number (tal1 och tal2)
// Dessa kommer som parametrar i funktionen nedan
// Minska den som heter tal1 med den som heter tal2 och returnera 
// resultatet av denna beräkning
function test3(tal1, tal2) {
	// tilldelar resultat och hur den ska komma fram till resultatet
	var resultat = tal1 - tal2;
	return resultat;
	// visar resultatet
}


/*
* TEST 4
*/
// Avrunda talet som kommer in som parametern tal (datatyp Number)
// Använd funktionen Math.round
function test4(tal) {
	// avrundar och returnerar till "tal"
	return Math.round (tal);
	
}


/*
* TEST 5
*/
// returnera längden på variablen text som kommer in som parameter.
// Variablen är av datatypen string
function test5(text) {
	// identifiera string som text
	var String = (text);
	// ta reda på längden av text
	var lengt_of_the_string = String.length;
	// returnera textens längd
	return String.length;
	

}


/*
* TEST 6
*/
// Returnera den näst sista bokstaven i textsträngen som kommer in i 
// parametern text
function test6(text) {
    // identifiera string som text
	var String = (text);
	// returnera näst sista bokstaven
	return String.charAt(String.length-2);
}


/*
* TEST 7
*/
// Parametrarna firstname och surname kommer in till funktionen
// returnera dessa som en textsträng på formen: "efternamn, förnamn"
// Exempelvis, innehåller firstname värdet "Greta" och surname värdet 
// "Karlsson"
// ska du returnera textsträngen "Karlsson, Greta"
function test7(firstname, surname) {
	// tilldela efternamn+förnamn inklusive ett kommatecken
	var full_name = surname+", "+firstname;
	// returnerar här hela namnet 
	return full_name;
	
}


/*
* TEST 8
*/
// strängen som kommer in med namnet word är en textsträng som innhåller 
// två ord med ett mellanslag emellan
// returnera det sista av dessa ord
// Kommer texsträngen "hej hopp" in ska alltså textsträngen "hopp" returneras
// Det finns flera sätt att lösa denna uppgift
// Ett tips kan vara att studera strängfunktionera indexOf och substr
//(se länktips i handledningen)
function test8(words) {
    // identifierar så att jag får "words" som string 
	var String = (words);
	// delar upp orden med ett mellanrum
	var mySplitResult= String.split(" ");
	var lastWord = mySplitResult[mySplitResult.length-1];
    // returnerar sista ordet	
	return lastWord;
	
}

/*
* TEST 9
*/
// Om numret i parametern number är större eller lika med 100 ska en 
// boolean true returneras
// annars ska en boolean false resturneras
function test9(number) {
    // identifierar "number"
    var String = (number);
    // tilldelar nu funktion om nummer är högre eller lika med 
    // 100 samt en return efter det.
	if(String>=100) {
	return String;
	}
	
}

/*
* TEST 10
*/
// Om parametern epost ELLER namn är tomma strängar ska texten "Du har 
// glömt att ange namn eller e-post"
// annars ska ytterligare en test göras ifall variablen epost innehåller 
// ett @-tecken. Är det sant ska texten "Ditt meddelande skickas" returneras
// annars ska texten "Ange en e-postadress" returneras
// För att kolla om en textsträng innehåller ett speciellt tecken kan 
// funktionen indexOf användas 
//(se länktips i handledningen)

function test10(epost, namn) {
    
        if (namn.length < 1 || epost.length < 1) 
        {
            return "Du har glömt att ange namn eller e-post";
        }
        else if (epost.indexOf("@") < 0) 
        {
            return  "Ange en e-postadress";
        }
        else{
            return "Ditt meddelande skickas";
        }

}

/*
* TEST 11
*/
// Du får en array som parameter till funktionen
// Returnera det mittersta värdet i denna array
// Ett tips kan vara att man kan behöva använda Math.round här för att räkna 
// ut det mittersta indexet i arrayen
//(se länktips i handledningen)
function test11(arr) {
    
    // delar upp arrayens längd i två delar
           var index = arr.length/2;
           // math.floor tar in ett tal och avrundar det nedåt (skickar jag t.ex. 5.5, returneras 5.0)
           index = Math.floor(index);
           //return skickar tillbaka det avrundade 5.0 (vilket är mitten av arrayens värde)
          return arr[index];
   }


/*
* TEST 12
*/
// Du får en array arr som parameter till funktionen
// Arrayen innehåller ett antal tal. Räkna ut medelvärdet av dessa tal och 
// returnera detta
// Medelvärdet är summan av alla tal i arrayen delat med antalet tal i arrayen
// Använd en for-loop för att lösa problemet
function test12(arr) {
    // sätter värde 0 först,sedan sätter loop om värdet är mindre än arrayens längd.
   var value = 0;
   for(var i = 0; i < arr.length; i++)
   
   {		value += arr[i];}
   // return skickar tillbaka
   value = value/arr.length;
   return value;
}





















/**
Kod för testning. Koden här under får du INTE röra!!
****************************************************
*/

var counter = 0;
if(test1() === 10) {doIt("test_1")}
if(test2() === 20) {doIt("test_2")}
if(test3(10, 5) === 5) {doIt("test_3")}
if(test4(3.5) === 4 && test4(3.4) === 3) {doIt("test_4")}
if(test5("erik") === 4 && test5("abcdefghijk") === 11){doIt("test_5")}
if(test6("tjolahopp") === "p" && test6("abcdefghijk") === "j"){ doIt("test_6")}
if(test7("Greta", "Karlsson") === "Karlsson, Greta" && test7("abc", "def") === "def, abc"){ doIt("test_7")}
if(test8("hej då!") === "då!" && test8("Pingvin Elefant") === "Elefant") {doIt("test_8")}
if(test9(100)  && !test9(99) && test9(101)) {doIt("test_9");}
if(test10("thajo@lnu.se", "John") === "Ditt meddelande skickas" 
&& test10("", "John") === "Du har glömt att ange namn eller e-post"
&& test10("thajo@lnu.se", "") === "Du har glömt att ange namn eller e-post"
&& test10("lnu.se", "John") === "Ange en e-postadress"
) {doIt("test_10")}
if(test11(new Array(2, 3, 5, 7, 11, 13, 17)) === 7 && test11(new Array(15, 1534, 1)) === 1534) {doIt("test_11");}
if(test12(new Array(2, 4, 6)) === 4 && test12(new Array(12, 87, 65, 23)) === 46.75) {doIt("test_13")}
function doIt(element_name) {
	counter++;
	document.getElementById(element_name).style.backgroundColor = "#00FF00";
}
if(counter > 12) {
	alert("Hurra! Du fixade första laborationen! Glöm inte att göra en release på github. Bra jobbat!");
}

