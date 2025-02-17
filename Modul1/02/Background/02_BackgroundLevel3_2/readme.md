3_2
komplikation mit der ausrichtung der boxen.
mit den angaben aus der aufgabe werden es boxen untereinander

.backgrounds{
    display: flex;
    justify-content: center;
    align-items: center;
}
<!-- Hier diese genaue benamsung hat gefehlt, dadurch hat er das übergeordnete div angesteuert -->
.backgrounds div{  
    font-size: small;
    height: 150px;
    width: 150px;
    margin: 10px;


<!-- und damit das bild in den container passt (sich verkleinert):
dafür hat gefehlt - background-size: cover; -->

.b-image{
    background: url(../img/sunset.jpg);
    background-size: cover;
}