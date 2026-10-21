export let cart= JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart = [
  {
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
  },
  {
    productId: 'dd82ca78-a18b-4e2a-9250-31e67412f98d',
    quantity: 1
  },
  {
    productId: '58b4fc92-e98c-42aa-8c55-b6b79996769a',
    quantity: 3
  }
]; 
}


function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId,quantitySelectorValue){
  let matchingItem;

    cart.forEach((cartItem)=>{
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });

    if(matchingItem){
      matchingItem.quantity+=quantitySelectorValue;
    }else{
      cart.push({
      productId: productId,
      quantity: quantitySelectorValue
    });
    }

    saveToStorage();
}

 export function removeFromCart(productId){
const newCart = [];

cart.forEach((cartItem)=>{
  if(cartItem.productId!==productId){
    newCart.push(cartItem);
  }
});

cart = newCart;

saveToStorage();
}

export function calculateCartQuantity(){
  let cartQuantity=0;

  cart.forEach((cartItem)=>{
    cartQuantity+=cartItem.quantity;
  });
  return cartQuantity;
}