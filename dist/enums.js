"use strict";
var CardsSuit;
(function (CardsSuit) {
    CardsSuit[CardsSuit["Clubs"] = 0] = "Clubs";
    CardsSuit[CardsSuit["Diamond"] = 1] = "Diamond";
    CardsSuit[CardsSuit["Hearts"] = 2] = "Hearts";
    CardsSuit[CardsSuit["Spades"] = 3] = "Spades";
})(CardsSuit || (CardsSuit = {}));
const card = CardsSuit.Clubs;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
const shape = {
    type: "circle",
    color: [Color.Red, Color.Green]
};
console.log(shape);
