const cartCheckout = document.querySelector('.cart-section')
const CartIcon = document.getElementById('cart-icon')
const PlusItem = document.getElementById('plus-item')
const MinusItem = document.getElementById('minus-item')
const DeleteButton = document.getElementById('delete-button')
const State = document.getElementById('item-much')
const CartCapsule = document.querySelector('.cart-capsule')
const thumbnails = document.querySelectorAll('.img-thumbnail')
const bigPreview = document.querySelector('.img-big-preview')
const BurgerMenu = document.querySelector('.burger-menu')
const checkout = document.querySelector('.add-cart') 

class Cart{
    constructor(State){
        this.StateText = State
        this.Item = parseInt(State.value)
        this.totalPrice = undefined
    }
    addProduct(){
        if(this.Item == 0){
            let noCheckout = document.querySelector('.No-Checkout')
            // Data Upgrade
            CartCapsule.classList.toggle('hidden')
            noCheckout.classList.toggle('hidden')
            let price = 125
            this.Item = this.Item + 1
            this.totalPrice = this.Item * price
            let beforeInfo = document.querySelector('.attr-items')
            beforeInfo.classList.toggle('hidden')
            beforeInfo.innerText = this.Item
            let productPrice = document.querySelector('.card-data-price')
            productPrice.innerHTML = `$125.00 x ${parseInt(this.Item)}  <span style='font-weight: bold;'>$${this.totalPrice}</span>`
            this.StateText.value = this.Item
            console.log(this.Item)
        }
        else{
            let beforeInfo = document.querySelector('.attr-items')
            let price = 125
            this.Item = this.Item + 1
            this.totalPrice = this.Item * price
            let productPrice = document.querySelector('.card-data-price')
            beforeInfo.innerText = this.Item
            productPrice.innerHTML = `$125.00 x ${parseInt(this.Item)}  <span style='font-weight: bold;'>$${this.totalPrice}</span>`
            this.StateText.value = this.Item
            console.log(this.Item)
        }
    }
    MinusProduct(){
        if(this.Item <= 0){
            return 
        }
        else if(this.Item == 1){
            this.clearCart()
            let beforeInfo = document.querySelector('.attr-items')
            let noCheckout = document.querySelector('.No-Checkout')
            beforeInfo.classList.toggle('hidden')
            noCheckout.classList.toggle('hidden')
            this.Item = this.Item - 1
            this.StateText.value = this.Item
            console.log(this.Item)
        }else{
            let beforeInfo = document.querySelector('.attr-items')
            let price = 125
            this.Item = this.Item - 1
            this.totalPrice = this.Item * price
            beforeInfo.innerText = this.Item
            let productPrice = document.querySelector('.card-data-price')
            productPrice.innerHTML = `$125.00 x ${parseInt(this.Item)}  <span style='font-weight: bold;'>$${this.totalPrice}</span>`
            this.StateText.value = this.Item
            console.log(this.Item)
        }
    }
    deleteProduct(){
        this.clearCart()
    }
    updateInfo(){
        let beforeInfo = document.querySelector('.attr-items')
        beforeInfo.classList.toggle('hidden')
        beforeInfo.innerText = this.Item
        let productPrice = document.querySelector('.card-data-price')
        productPrice.innerHTML = `$125.00 x ${parseInt(this.Item)}  <span style='font-weight: bold;'>$${this.totalPrice}</span>`
        this.StateText.value = this.Item
        console.log(this.Item)
    }
    clearCart(){
        CartCapsule.classList.toggle('hidden')
        CartCapsule.parentElement.previousElementSibling.classList.toggle('hidden')

        this.Item = 0
        this.StateText.value = this.Item
    }
}
const cart = new Cart(State)

CartIcon.addEventListener('click',()=>{
    console.log("Hidden")
    cartCheckout.classList.toggle('hidden')
})

PlusItem.addEventListener('click',()=>{
    cart.addProduct()
    console.log('plus')
})

MinusItem.addEventListener('click',()=>{
    cart.MinusProduct()
    console.log('minus')
})

DeleteButton.addEventListener('click',()=>{
    cart.deleteProduct()
    console.log('delelte')
})

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click',()=>{
        let thumbnailSrc = thumbnail.src
        let regex = /-thumbnail/i
        thumbnailSrc = thumbnailSrc.replace(regex,'')
        bigPreview.src = thumbnailSrc
    })
})

checkout.addEventListener('click',()=>{
    cart.updateInfo()
})

function navSlide(){
    const nav = document.querySelector('.mobile-nav-menu');
    const navLinks = document.querySelectorAll('.mobile-nav-menu');
    nav.classList.toggle('open');

    // piece of shit that doesnt work and I dont know why
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index /7}s`;
        
    });

    nav.classList.toggle('hidden');
    BurgerMenu.children[0].classList.toggle('fa-bars')
    BurgerMenu.children[0].classList.toggle('fa-times')

}
BurgerMenu.addEventListener('click',()=>{
    navSlide()
})
