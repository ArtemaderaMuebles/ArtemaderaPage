function displayProductsSlideshow(Slideshowlist) {
  let i = 0;
  let productsHTML = ' ';
  for (i = 0; i < 3; i++) {
    console.log(Slideshowlist[i].image);
    productsHTML +=
      `<div class="w3-display-container mySlides">
    <img src="${Slideshowlist[i].image}" style="width:100%">
    <div class="w3-display-topleft w3-container w3-padding-32">
      
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
function OnLoader(){
  var pathname = window.location.pathname;
  if(pathname == "/ArtemaderaPage/" || pathname == "/ArtemaderaPage/index.html"){
    console.log("hola1");
    displayProductsSlideshow(Slideshowlist);
  } else if(pathname == "/ArtemaderaPage/Paginas/Catalogo.html"){
    console.log("hola2");
    displayProductsCatalogo(productlist);
  } else if(pathname == "/ArtemaderaPage/Paginas/Contacto.html"){
    console.log("hola3");
  } else if(pathname == "/ArtemaderaPage/Paginas/Producto.html"){
    console.log("hola4");
    displayProducts(Productlist);
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

//Esta primera parte es el listado de productos en el catalogo, que incluye el nombre y la foto de caratula
//para agregar mas muebles deben agregar una seccion de las tipo id y cambiarle el nombre del mueble y de la image

const productlist = [
  {
    id: 1,
    name: 'Biblioteca Casita',
    image: "../Recursos/BibliotecaCasita1.jpeg"
  },
  {
    id: 2,
    name: 'Modular',
    image: "../Recursos/Modular1metro.jpeg"
  },
  {
    id: 3,
    name: 'Repisas doble y triple',
    image: "../Recursos/RepisaDobleTriple.jpeg"
  },
  {
    id: 4,
    name: 'Combo Escritorio Banqueta',
    image: "../Recursos/EscritorioBanqueta.jpeg"
  },
  {
    id: 5,
    name: 'Canastos de mimbre',
    image: "../Recursos/Canasto3.jpeg"
  },
  {
    id: 6,
    name: 'Perillas de ceramica',
    image: "../Recursos/Perillas1.jpeg"
  },
  {
    id: 7,
    name: 'ArteMaderitas y Canastos de Madera',
    image: "../Recursos/Didacticas.jpeg"
  }

]

//Esta parte controla las diapositivas de la pagina principal, donde se encuentra el saludo de entrada
//Para cambiar las fotos simplemente modifica esta linea "Recursos/Canastos1.png" y cambia Canastos1.png por el nombre de tu foto
//no olvidarse de poner el .png o .jpg dependiendo el tipo de tu foto
const Slideshowlist = [
  {
    id: 1,
    image: "Recursos/Portada1.jpeg"
  },
  {
    id: 2,
    image: "Recursos/Frente1.png"
  },
  {
    id: 3,
    image: "Recursos/Frente2.png"
  },

]

//Esta parte controla las fotos dentro de cada producto del catalogo, esta solamente admite 3 fotos al mismo tiempo
//Para agregar fotos para algun producto hay que agregar una de las secciones abajo entre [ ] y cambiar la direccion de la foto en "../Recursos/Canastos1.png"
const Productlist = [

  [ //ID1
    {
      id: 1,
      name: 'Frente',
      image: "../Recursos/BibliotecaCasita1.jpeg"
    },
    {
      id: 2,
      name: 'Diagonal',
      image: "../Recursos/BibliotecaCasita2.jpeg"
    },
    {
      id: 3,
      name: 'Costado',
      image: "../Recursos/BibliotecaCasita3.jpeg"
    }
  ],
  [  //ID2
    {
      id: 1,
      name: 'Modular de 1 metro',
      image: "../Recursos/Modular1metro.jpeg"
    },
    {
      id: 2,
      name: '',
      image: ""
    },
    {
      id: 3,
      name: '',
      image: ""
    }
  ],
  [ //ID 3
    {
      id: 1,
      name: 'Repisa doble y triple',
      image: "../Recursos/RepisaDobleTriple.jpeg"
    },
    {
      id: 2,
      name: '',
      image: ""
    },
    {
      id: 3,
      name: '',
      image: ""
    }
  ],
[ //ID4
    {
      id: 1,
      name: 'Escritorio de 1 metro y Banqueta baja',
      image: "../Recursos/EscritorioBanqueta.jpeg"
    },
    {
      id: 2,
      name: '',
      image: ""
    },
    {
      id: 3,
      name: 'Costado',
      image: ""
    }
  ],
[ //ID5
    {
      id: 1,
      name: 'Canasto alto',
      image: "../Recursos/Canasto1.jpeg"
    },
    {
      id: 2,
      name: 'Canasto bajo',
      image: "../Recursos/Canasto2.jpeg"
    },
    {
      id: 3,
      name: 'Canasto redondo',
      image: "../Recursos/Canasto4.jpeg"
    },
    {
      id: 3,
      name: 'Canasto con manija',
      image: "../Recursos/Canasto5.jpeg"
    }
  ],
[ //ID6
    {
      id: 1,
      name: 'Set 1',
      image: "../Recursos/Perillas1.jpeg"
    },
    {
      id: 2,
      name: 'Set 2',
      image: "../Recursos/Perillas2.jpeg"
    },
    {
      id: 3,
      name: 'Set 3',
      image: "../Recursos/Perillas3.jpeg"
    }
  ],
[ //ID7
    {
      id: 1,
      name: 'Canastos y ArteMaderitas',
      image: "../Recursos/Didacticas.jpeg"
    },
    {
      id: 2,
      name: 'Canastos de madera',
      image: "../Recursos/CanastoMadera.jpeg"
    },
    {
      id: 3,
      name: '',
      image: ""
    }
  ]

];
