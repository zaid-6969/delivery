// ---------------------------navigation hamburger-------------------

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ------------------------main page----------------------------


const input = document.querySelector('.main-input');
const search = document.querySelector('.search');
const ul = document.querySelector('.ul-suggest');
const suggestItems = document.querySelectorAll('.suggest'); 

input.addEventListener('input', function() {
    const query = input.value.trim().toLowerCase(); 

    ul.style.padding = '0px';
    ul.style.display = 'block';

    suggestItems.forEach((item) => {
        const text = item.textContent.toLowerCase();

        if (text.includes(query) && query !== '') { 
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});


// --------------------------navLinks--------------------------
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});


// -----------------page switch---------------------

// const about=document.getElementsByQuerySelectorAll('.about').addEventListener('click',function(){
//     window.location.href='about.html';
// })

// ---------------------------------scroll animation-------------------------

 // GSAP animation for a continuous loop
 gsap.to(".scroll-images", {
    x: "-50%", 
    duration: 10, 
    repeat: -1, 
    ease: "linear", 
    onRepeat: () => {
       
        gsap.set(".scroll-images", { x: 0 });
    }
});


// ---------------------cards js--------------------

const cardData = [
    {
        image: 'main-page-food/mutton-biryani.png', 
        title: 'Mutton Biryani',
    },
    {
        image: 'main-page-food/chicken-biryani.png',
        title: 'Chicken Biryani',
    },
    {
        image: 'main-page-food/full-meals.png',
        title: 'Full Meals',
    },
    {
        image: 'main-page-food/kabab.png',
        title: 'Kabab',
    },
    {
        image: 'main-page-food/shawerma.png',
        title: 'Shawerma',
    },
    {
        image: 'main-page-food/sandwich.png',
        title: 'Sandwich',
    },
    {
        image: 'main-page-food/burger.png',
        title: 'Burger',
    },
    {
        image: 'main-page-food/Italian-pizza.png',
        title: 'Italian Pizza',
    },
    {
        image: 'main-page-food/chicken-pizza.png',
        title: 'Chicken Pizza',
    },
    {
        image: 'main-page-food/Fried-Chicken.png',
        title: 'Fried Chicken',
    },  
  

];


function generateCards() {
    const cardsContainer = document.getElementById('cards-container');
    
    cardData.map(card => {

        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        

        const img = document.createElement('img');
        img.src = card.image;
        img.alt = card.title;
        
   
        const title = document.createElement('h3');
        title.innerText = card.title;
        
       
        cardElement.appendChild(img);
        cardElement.appendChild(title);
        

        cardsContainer.appendChild(cardElement);
    });
}


generateCards();


// --------------------card function----------------

const cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
        totalAmount.textContent = 'Total: Rs. 0';
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        cartItem.innerHTML = `
            <span>${item.name} - Rs.${item.price}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;

        cartItems.appendChild(cartItem);
        total += item.price;
    });

    totalAmount.textContent = `Total: Rs. ${total}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

renderCart();


