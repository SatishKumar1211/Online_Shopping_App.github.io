// contains procduct model (blueprint)
//contains structure of pizza object
//pizza object = id name desc price rating image

class Product{
    constructor(id , name , desc, price, url){
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.price=price;
        this.url=url;
        this.isAddedInCart = false;
    }
}
export default Product;