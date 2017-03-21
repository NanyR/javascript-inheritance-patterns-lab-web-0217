function Point(x, y){
  this.x= x;
  this.y= y
};

Point.prototype.toString= function(){
  return `${String(this.x)}, ${String(this.y)}`;
};

function Shape(){
};
Shape.prototype.move = function(x,y) {
  this.position =new Point(x, y);
}
Shape.prototype.addToPlane= function(x, y){
  this.position= new Point(x, y);
}

function Circle (radius){
  Shape.call(this);
  this.radius= radius;
}
  Circle.prototype=Object.create(Shape.prototype);
  Circle.prototype.constructor=Circle;

  Circle.prototype.diameter = function(){
    return this.radius * 2
  }
  Circle.prototype.area = function() {
    return Math.PI * this.radius^2;
  }
  Circle.prototype.circumference =function() {
    return (2 * Math.PI * this.radius);
  }



function Polygon(sides){
  Shape.call(this);
  this.sides=sides;
}
Polygon.prototype=Object.create(Shape.prototype);
Polygon.prototype.constructor=Polygon;

Polygon.prototype.perimeter = function(){
     let per=this.sides.reduce(function(acc, side){
      return acc + side.length;
    },0)
        return per;
  }

Polygon.prototype.numberOfSides = function(){
    if(this.sides.length){
      return this.sides.length;
    }
  };



function Side(length){
  this.length=length;
}

function Quadrilateral(side1, side2, side3, side4){
  const args= Array.prototype.slice.call(arguments);
  Polygon.call(this, args.map(function(side){
    return new Side(side);
  }));
};
Quadrilateral.prototype=Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor=Quadrilateral;


function Triangle(side1, side2, side3){
  const args= Array.prototype.slice.call(arguments);
  Polygon.call(this, args.map(function(side){
    return new Side(side);
  }));
  this.side1= side1;
  this.side2=side2;
  this.side3=side3;
}
Triangle.prototype=Object.create(Polygon.prototype);
Triangle.prototype.constructor=Triangle;

function Rectangle(width, height){
    Quadrilateral.call(this, width, width, height, height);
    this.width=width;
    this.height=height;
  }
Rectangle.prototype=Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor=Rectangle;

Rectangle.prototype.area= function() {
      return this.width * this.height;
    }



function Square(length){
  Rectangle.call(this, length, length);
  this.length=length;
};

Square.prototype=Object.create(Rectangle.prototype);
Square.prototype.constructor=Square;
Square.prototype.listProperties=()=>{
    for(prop in this){
      if(this.hasOwnProperty(prop)){
        return prop;
      }
    }
  }
