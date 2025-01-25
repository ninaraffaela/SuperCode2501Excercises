MouseOver Farbwechsel vom background-color 

linear gradient (diagonal
background-image: linear-gradient(direction, color-stop1, color-stop2, ...); )


**diagonal von unten links nach oben rechts**
 background-image: linear-gradient(to top right, red, yellow);
 

 **regenbogenfarben links nach rechts**
   background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet); 

... endstand heute:
obwohl ich theoretisch weiß wie ich mehrfarbigen diagonalen Farbverlauf erzeuge, erscheint die box nicht. irgendwas fehlt. siehe roter comment in der css

für den mouseOverHover der die Farbreihenfolge ändert, dann entsprechend den linear-gradient wiederverwenden, aber eben Farbe 1 und 3 getauscht