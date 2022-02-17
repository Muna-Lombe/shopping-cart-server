// will include all functionality for 
// 1. adding
// 2. listing
// 3. *deleting
// 4. calculating total
// 5. calculating discount
// 6. removing from stock


class Product{
    constructor({name, price}){
        this.name = name;
        this.price = price;
    }
    find(id){
        
    }
}



class ShoppingCart {
    constructor() {  // Constructor
      this.product;
      this.cart = [];
    }
    
    // 1. adding
    add(prd){
        let id = this.cart.length
        this.cart.push({prd})
    };
    // 2. listing
    all(){
        return this.cart
    }
    // 3. *deleting
    remove(id){
        this.cart.splice(id-1, 1)
    }
    // 4. calculating total
    // 5. calculating discount
    // 6. removing from stock
}
// TEST DATA
// const prds = [{name:'cake',price: '12'}, {name: 'pizza', price:'19'},{name: 'bread', price:'10'}]
// // let sc = {product: prds.map((prd) => new Product(prd))};

export {ShoppingCart, Product};