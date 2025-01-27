
1. 
hover über erstem buchstaben.
wie kombiniere ich hover und first-letter?

h1:first-letter:hover { funktioniert schonmal nicht....

=> Researched:  
h1:hover:first-letter

Reihenfolge ändern

**geht noch nicht:**

2. 
Aufzählungszeichen als Img einfügen recherchieren. geht noch nicht

.bills::after {
    list-style-image: url(../icons/bill.png);
}
geht nicht

=> Researched:

statt list-style-image nehmen wir content.......

.gym::after {
    /* list-style-image: url("../icons/gym.png"); */
    content: url("../icons/gym.png");
}

so gehts


