function displayProductsSlideshow(Slideshowlist) {
  let productsHTML = ' ';
  productsHTML += `<div class="w3-content w3-section" style="max-width:500px">`
  Slideshowlist.forEach(element => {
    productsHTML += `<img class="mySlides" src="${element.image}" style="width:100%">`
  });

  productsHTML += `</div>`
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
  let descriptionHTML = ' ';
  let i = 0;
  var CurrentItem = localStorage.getItem('Item');
  console.log(CurrentItem);
  Productlist[CurrentItem].forEach(element => {
    productsHTML +=`<div class="w3-display-container mySlides">
    <img src="${element.image}" style="width:100%">
    <div class="w3-display-topleft w3-container w3-padding-32">
      <span class="w3-white w3-padding-large w3-animate-bottom" style="opacity:0.7">${element.name}</span>
    </div>
  </div>`
  });
  
  productsHTML += `<div class="w3-container w3-dark-grey w3-padding w3-xlarge">
  <div class="w3-left" onclick="plusDivs(-1)"><i class="fa fa-arrow-circle-left w3-hover-text-teal"></i></div>
  <div class="w3-right" onclick="plusDivs(1)"><i class="fa fa-arrow-circle-right w3-hover-text-teal"></i></div>

  <div class="w3-center">`
Productlist[CurrentItem].forEach(element => {
  productsHTML += `<span class="w3-tag demodots w3-border w3-transparent w3-hover-white" onclick="currentDiv(${i})"></span>`
  i++;
  })
  productsHTML +=`</div>
  </div>`

  document.getElementById('Product').innerHTML = productsHTML;
  descriptionHTML += `<p>${Productlist[CurrentItem][0].description}</p>`
  document.getElementById('Description').innerHTML = descriptionHTML;
}


/*Onload Function*/
function OnLoader(){
  var pathname = window.location.pathname;
  if(pathname == "/ArtemaderaPage/" || pathname == "/ArtemaderaPage/index.html" || pathname == "/index.html"){
    console.log("hola1");
    var myIndex = 0;
    displayProductsSlideshow(Slideshowlist);
    carousel();
  } else if(pathname == "/ArtemaderaPage/Paginas/Catalogo.html" || pathname == "/Paginas/Catalogo.html"){
    console.log("hola2");
    displayProductsCatalogo(productlist);
  } else if(pathname == "/ArtemaderaPage/Paginas/Producto.html" || pathname == "/Paginas/Producto.html"){
    console.log("hola3");
    displayProducts(Productlist);
  }
  
    

      //automatic slideshow
      
      function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 5000); // Change image every 2 seconds
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
  }

]

//Esta parte controla las fotos dentro de cada producto del catalogo, esta solamente admite 3 fotos al mismo tiempo
//Para agregar fotos para algun producto hay que agregar una de las secciones abajo entre [ ] y cambiar la direccion de la foto en "../Recursos/Canastos1.png"
const Productlist = [

  [ //ID1
    {
      id: 1,
      name: 'Frente',
      description: 'Biblioteca Casita1',
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
      description: 'Biblioteca Casita',
      image: "../Recursos/Modular1metro.jpeg"
    }
  ],
  [ //ID 3
    {
      id: 1,
      name: 'Repisa doble y triple',
      description: 'Biblioteca Casita',
      image: "../Recursos/RepisaDobleTriple.jpeg"
    }
  ],
[ //ID4
    {
      id: 1,
      name: 'Escritorio de 1 metro y Banqueta baja',
      description: 'Biblioteca Casita',
      image: "../Recursos/EscritorioBanqueta.jpeg"
    }
  ],
[ //ID5
    {
      id: 1,
      name: 'Canasto alto',
      description: 'Biblioteca Casita',
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
      description: 'Biblioteca Casita',
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
      description: 'Biblioteca Casita',
      image: "../Recursos/Didacticas.jpeg"
    },
    {
      id: 2,
      name: 'Canastos de madera',
      image: "../Recursos/CanastoMadera.jpeg"
    }
  ]

];
