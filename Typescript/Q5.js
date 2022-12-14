// Create interface shape with shapename, and a method 
// printname method. Now implement the shape interface to 
// class Cone, Sphere, and Rectangle class. Now you have to 
// print the area of each shape using area method input will be 
// pass to constructor of each class.
var Cone = /** @class */ (function () {
    function Cone(radius, slantHeight) {
        this.shapename = "Cone";
        this.radius = radius;
        this.slantHeight = slantHeight;
    }
    Cone.prototype.printname = function () {
        console.log(this.shapename);
    };
    Cone.prototype.AreaOfCone = function () {
        return 3.14 * this.radius * (this.slantHeight + this.radius);
    };
    return Cone;
}());
var Sphere = /** @class */ (function () {
    function Sphere(radius) {
        this.shapename = "Sphere";
        this.radius = radius;
    }
    Sphere.prototype.printname = function () {
        console.log(this.shapename);
    };
    Sphere.prototype.AreaOfSphere = function () {
        return 4 * this.radius * this.radius;
    };
    return Sphere;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.shapename = "Rectangle";
        this.length = length;
        this.width = width;
    }
    Rectangle.prototype.printname = function () {
        console.log(this.shapename);
    };
    Rectangle.prototype.AreaOfRectangle = function () {
        return this.length * this.width;
    };
    return Rectangle;
}());
var obj1 = new Cone(4, 5);
var obj2 = new Sphere(4);
var obj3 = new Rectangle(3, 4);
console.log(obj1.AreaOfCone());
console.log(obj2.AreaOfSphere());
console.log(obj3.AreaOfRectangle());
