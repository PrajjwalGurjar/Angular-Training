//Create a class of item (itemid, itemname, itemprice, category) 
//and create object of the class and print each detail of item. 
//With arrow functions.
var Item = /** @class */ (function () {
    function Item(itemid, itemname, itemprice, category) {
        this.itemid = itemid;
        this.itemname = itemname;
        this.itemprice = itemprice;
        this.category = category;
    }
    return Item;
}());
var obj = new Item(1, "jeans", 500, "fashion");
var print1 = function (obj) {
    console.log(obj);
};
print1(obj);
