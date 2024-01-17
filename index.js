function displayProductsSlideshow(Slideshowlist) {
  let i = 0;
  let productsHTML = ' ';
  for (i = 0; i < 3; i++) {
    console.log(Slideshowlist[i].image);
    productsHTML +=
      `<div class="w3-display-container mySlides">
    <img src="${Slideshowlist[i].image}" style="width:100%">
    <div class="w3-display-topleft w3-container w3-padding-32">
      <span class="w3-white w3-padding-large w3-animate-bottom">${Slideshowlist[i].name}</span>
    </div>
  </div>
  `
  }

  productsHTML += `<div class="w3-container w3-dark-grey w3-padding w3-xlarge">
  <div class="w3-left" onclick="plusDivs(-1)"><i class="fa fa-arrow-circle-left w3-hover-text-teal"></i></div>
  <div class="w3-right" onclick="plusDivs(1)"><i class="fa fa-arrow-circle-right w3-hover-text-teal"></i></div>

    <div class="w3-center">
        <span class="w3-tag demodots w3-border w3-transparent w3-hover-white" onclick="currentDiv(1)"></span>
        <span class="w3-tag demodots w3-border w3-transparent w3-hover-white" onclick="currentDiv(2)"></span>
        <span class="w3-tag demodots w3-border w3-transparent w3-hover-white" onclick="currentDiv(3)"></span>
      </div>
    </div>`
  document.getElementById('Slideshow').innerHTML = productsHTML;
}

function displayProductsCatalogo(productlist) {
  let productsHTML = ' ';
  let i = 0;
  productlist.forEach(element => {
    productsHTML +=
      `<div class="w3-third w3-margin-bottom">
      <div class="w3-card-4">
        <img src="${element.image}" style="width:100%">
        <div class="w3-container">
          <h3>${element.name}</h3> 
          <p>$ ${element.price}</p>
          <p><button class="w3-button w3-light-grey w3-block" onclick="SetCurrentItem( ${i} )" ><a href="Producto.html" class="w3-button w3-block">Ver</a></button></p>
        </div>
      </div>
    </div>`
    i++;
  });
  document.getElementById('about').innerHTML = productsHTML;
}

function SetCurrentItem(id) {
  localStorage.setItem('Item', id);
  var CurrentItem = localStorage.getItem('Item');
  console.log(CurrentItem);
}

function displayProducts(Productlist) {
  let productsHTML = ' ';
  let i = 0;
  var CurrentItem = localStorage.getItem('Item');
  console.log(CurrentItem);
  for(i=0;i<3;i++){
  
    productsHTML +=
      `<div class="w3-display-container mySlides">
    <img src="${Productlist[CurrentItem][i].image}" style="width:100%">
    <div class="w3-display-topleft w3-container w3-padding-32">
      <span class="w3-white w3-padding-large w3-animate-bottom">${Productlist[CurrentItem][i].name}</span>
    </div>
  </div>`
    
  }
  productsHTML += `<div class="w3-container w3-dark-grey w3-padding w3-xlarge">
  <div class="w3-left" onclick="plusDivs(-1)"><i class="fa fa-arrow-circle-left w3-hover-text-teal"></i></div>
  <div class="w3-right" onclick="plusDivs(1)"><i class="fa fa-arrow-circle-right w3-hover-text-teal"></i></div>

  <div class="w3-center">
    <span class="w3-tag demodots w3-border w3-transparent w3-hover-white" onclick="currentDiv(1)"></span>
    <span class="w3-tag demodots w3-border w3-transparent w3-hover-white" onclick="currentDiv(2)"></span>
    <span class="w3-tag demodots w3-border w3-transparent w3-hover-white" onclick="currentDiv(3)"></span>
  </div>
</div>`
  document.getElementById('Product').innerHTML = productsHTML;
}


/*Onload Function*/
window.onload = async() =>{
  /*alert(Slideshowlist[0].image)*/
  var pathname = window.location.pathname;
  switch (pathname) {
    case "/index.html":
      console.log("hola1");
      displayProductsSlideshow(Slideshowlist);
      break;
    case "/Paginas/Catalogo.html":
      console.log("hola2");
      displayProductsCatalogo(productlist);
      break;
    case "/Paginas/Contacto.html":
      console.log("hola3");
      break;
    case "/Paginas/Producto.html":
      console.log("hola4");
      displayProducts(Productlist)
      break;
  }
    // Slideshow
    var slideIndex = 1;
      showDivs(slideIndex);

      function plusDivs(n) {
        showDivs(slideIndex += n);
      }

      function currentDiv(n) {
        showDivs(slideIndex = n);
      }

      function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demodots");
        if (n > x.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = x.length} ;
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" w3-white", "");
        }
        x[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " w3-white";
      }
}




/* BASE DE DATOS */

const productlist = [
  {
    id: 1,
    name: 'Muebles1',
    price: 1000,
    image: "../Recursos/Muebles1.png"
  },
  {
    id: 2,
    name: 'Muebles2',
    price: 1020,
    image: "../Recursos/Muebles2.png"
  },
  {
    id: 3,
    name: 'Muebles3',
    price: 1002,
    image: "../Recursos/Muebles3.png"
  },
  {
    id: 4,
    name: 'Muebles4',
    price: 1003,
    image: "../Recursos/Muebles4.png"
  },
  {
    id: 5,
    name: 'Muebles5',
    price: 1004,
    image: "../Recursos/Muebles5.png"
  },
  {
    id: 6,
    name: 'Muebles6',
    price: 1005,
    image: "../Recursos/Muebles6.png"
  }

]

const Slideshowlist = [
  {
    id: 1,
    name: 'Canastos 1',
    image: "Recursos/Canastos1.png"
  },
  {
    id: 2,
    name: 'Canastos 2',
    image: "Recursos/Canastos2.png"
  },
  {
    id: 3,
    name: 'Canastos 3',
    image: "Recursos/Canastos3.png"
  },

]

const Productlist = [
  [
    {
      id: 1,
      name: 'Canastos 1',
      image: "../Recursos/Canastos1.png"
    },
    {
      id: 2,
      name: 'Canastos 2',
      image: "../Recursos/Canastos2.png"
    },
    {
      id: 3,
      name: 'Canastos 3',
      image: "../Recursos/Canastos3.png"
    }
  ],
  [
    {
      id: 1,
      name: 'Pollo 1',
      image: "../Recursos/Canastos1.png"
    },
    {
      id: 2,
      name: 'Pollo 2',
      image: "../Recursos/Canastos2.png"
    },
    {
      id: 3,
      name: 'Pollo 3',
      image: "../Recursos/Canastos3.png"
    }
  ],
  [
    {
      id: 1,
      name: 'Cerdo 1',
      image: "../Recursos/Canastos1.png"
    },
    {
      id: 2,
      name: 'Cerdo 2',
      image: "../Recursos/Canastos2.png"
    },
    {
      id: 3,
      name: 'Cerdo 3',
      image: "../Recursos/Canastos3.png"
    }
  ]
];
