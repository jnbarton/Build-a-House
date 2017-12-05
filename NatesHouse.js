background(219, 255, 255);

fill(255, 255, 255);
rect(60, 150, 280, 207);//house walls

//siding
for (var x = 5; x < 12.5; x++) {
    for (var y = 2.45; y < 13; y++) {
        image(getImage("cute/StoneBlock"),
        y*25, x*26, 28, 55);
    }
}

fill(174, 180, 214); // roof
triangle(200, 28, 350, 150, 50, 150);

/* for (var a = -5; a < 3; a++) {
    var leftSide = 95 + (a * 15);
    image(getImage("cute/RoofWest"),
        leftSide+10, a*-15, 35, 55);
}*/ //failed roofing image :(

fill(120, 80, 19);
rect(180, 280, 40, 77);//door

//windows
for (var j = 5; j < 9; j+= 3.5) {
    for (var k = 2.5; k < 8; k+=3.2) {
    image(getImage("cute/WindowTall"),         k*45, j*32, 25, 55);
    }
}

// grass
for (var i = 0; i < 11; i++) {
    image(getImage("cute/GrassBlock"),         i*39, 340, 40, 55);
     }

//bushes
for (var g = 2.2; g < 11; g+=5) {
    image(getImage("cute/TreeTall"), 
    g*37, 320, 45, 70);
}