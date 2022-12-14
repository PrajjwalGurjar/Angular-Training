//Create a class of item (itemid, itemname, itemprice, category) 
//and create object of the class and print each detail of item. 
//With arrow functions.
class Item{
    itemid:number;
     itemname:string;
     itemprice:number
     category:string
     
     constructor(itemid:number,itemname:string,itemprice:number,category:string) {
      this.itemid=itemid;
      this.itemname=itemname;
      this.itemprice=itemprice;
      this.category=category;
}
}
let obj=new Item(1,"jeans",500,"fashion")
let print1=(obj:Item)=>{
    console.log(obj);
}
print1(obj);