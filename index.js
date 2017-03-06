function Rectangle(x, y, width, height) {
  //call superclass constructor
  Shape.call(this, 4, x, y);
  //set rectangle values
  this.width = width;
  this.height = height;
}
// set Rectangle prototype to an instance of a Shape
Rectangle.prototype = Object.create(Shape.prototype);
// set Rectangle constructor
Rectangle.prototype.constructor = Rectangle
 
// extend with Rectangle behavior
Rectangle.prototype.area = function() {
  return this.width * this.height;
}
Rectangle.prototype.perimeter = function () {
  return (this.width + this.height) * 2;
}

// function Rectangle(sides, width, height) {
//   this.sides = sides;
//   this.width = width;
//   this.height = height;
//   this.area = function() {
//     return this.width * this.height;
//   }
//   this.perimeter = function() {
//     return (this.width + this.height) * 2;
//   }
// }

// function Rectangle(sides, width, height) {
//   this.sides = sides;
//   this.width = width;
//   this.height = height;
//   this.area = () => {
//     return this.width * this.height;
//   };
//   this.perimeter = () => {
//     return (this.width + this.height) * 2;
//   };
// }

// // function Square(sides, length) {
// //   this.sides = sides;
// //   this.width = length;
// //   this.height = length;
// //   this.area = () => {
// //     return this.width * this.height;
// //   },
// //   this.perimeter = ()=> {
// //     return (this.width + this.height) * 2;
// //   }
// // }
 
// var rect = new Rectangle(4, 3, 5);
// var square = new Square(4, 2);
 
// rect.area();
// square.area();


// // Square constructor
// function Square(sides, length) {
//   Rectangle.call(this, sides, length, length);
// }
 
// var rect = new Rectangle(4, 3, 5);
// var square = new Square(4, 2);
 
// rect.area();
// square.area();

// Rectangle.prototype.internalAngles = 90;
// rect.internalAngles;
// square.internalAngles;

// var o = {};
// console.log(o.toString());


// Rectangle.prototype.flarp = 90;
// rect.flarp;
// square.flarp;



// function Sandwich(bread, condiments, cut) {
//   this.bread = bread;
//   this.condiments = condiments;
//   this.cut = cut;
// }

// var blt = new Sandwich("toast", "mayo", "triangles");
// // console.log(blt);

// var pbj = new Sandwich("crust", ["jelly", "peanut butter"], "half");

// var dougie_stuff = {bread: "kaiser roll", condiments: ["ham", "bacon", "anchovies"], cut: "no"};

// var qwer = Sandwich(dougie_stuff);

// console.log(qwer);



























