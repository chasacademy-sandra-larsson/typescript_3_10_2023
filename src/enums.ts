
enum CardsSuit {
    Clubs, 
    Diamond, 
    Hearts, 
    Spades
}


const card = CardsSuit.Clubs;


enum Color {
    Red,    // 0
    Green,  // 1
    Blue    // 2
}

interface Shape  {
    type: string;
    color: Color[];
}

const shape: Shape = {
    type: "circle",
    color: [Color.Red, Color.Green]
}

console.log(shape)