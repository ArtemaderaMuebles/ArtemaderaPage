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
  var CurrentItem = localStorage.getItem('Categoria');
  let i = 0;
  console.log(CurrentItem);
  productlist.forEach(element => {
    if (element.categoria == CurrentItem) {
      productsHTML +=
        `<div class="w3-quarter w3-margin-bottom">
      <div class="w3-card-4">
        <img src="${element.image}" style="width:100%">
        <div class="w3-container">
          <h3>${element.name}</h3> 
          <p><button class="w3-button w3-light-grey w3-block" onclick="SetCurrentItem( ${i} )" ><a href="Producto.html" class="w3-button w3-block">Ver</a></button></p>
        </div>
      </div>
    </div>`
    }
    i++;
  });
  document.getElementById('about').innerHTML = productsHTML;
}

function SetCurrentItem(id) {
  localStorage.setItem('Item', id);
  var CurrentItem = localStorage.getItem('Item');
  console.log(CurrentItem);
}

//new
function displayProductsCategorias(Categorias) {
  let categoriaHTML = ' ';
  let i = 0;
  Categorias.forEach(element => {
    categoriaHTML +=
      `<div class="w3-half w3-margin-bottom">
      <div class="w3-col" >
        <img src="${element.image}" style="width:100%">
        <div class="w3-container">
          <h3>${element.name}</h3> 
          <p><button class="w3-button w3-light-grey w3-block" onclick="SetCurrentCategoria( ${i} )" ><a href="Catalogo.html" class="w3-button w3-block">Ver</a></button></p>
        </div>
      </div>
    </div>`
    i++;
  });
  document.getElementById('aboutCategorias').innerHTML = categoriaHTML;
}

function SetCurrentCategoria(id) {
  localStorage.setItem('Categoria', id);
  var CurrentItem = localStorage.getItem('Categoria');
  console.log(CurrentItem);
}

function displayProducts(Productlist) {
  let productsHTML = ' ';
  let descriptionHTML = ' ';
  let i = 0;
  var CurrentItem = localStorage.getItem('Item');
  console.log(CurrentItem);
  Productlist[CurrentItem].forEach(element => {
    productsHTML += `<div class="w3-display-container mySlides">
    <img src="${element.image}" style="width:100%">
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
  productsHTML += `</div>
  </div>`

  document.getElementById('Product').innerHTML = productsHTML;
  descriptionHTML += `<p>${Productlist[CurrentItem][0].description}</p>`
  document.getElementById('Description').innerHTML = descriptionHTML;
}


/*Onload Function*/
function OnLoader() {
  var pathname = window.location.pathname;
  if (pathname == "/ArtemaderaPage/" || pathname == "/ArtemaderaPage/index.html" || pathname == "/index.html") {
    console.log("hola1");
    displayProductsSlideshow(Slideshowlist);
    carousel();
  } else if (pathname == "/ArtemaderaPage/Paginas/Catalogo.html" || pathname == "/Paginas/Catalogo.html") {
    console.log("hola2");
    displayProductsCatalogo(productlist);
  } else if (pathname == "/ArtemaderaPage/Paginas/Producto.html" || pathname == "/Paginas/Producto.html") {
    console.log("hola3");
    displayProducts(Productlist);
    showDivs(slideIndex);
  } else if (pathname == "/ArtemaderaPage/Paginas/Categorias.html" || pathname == "/Paginas/Categorias.html") {
    console.log("hola2=4");
    displayProductsCategorias(Categorias);
  }

}
//automatic slideshow
function carousel() {
  var myIndex = 0;
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

//manual slideshow
var slideIndex = 1;

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
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-white";
}


/* BASE DE DATOS */

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

const Categorias = [

  {
    id: 0,
    name: 'Dormitorio',
    image: '../Recursos/MesadeLuz1.jpg'
  },
  {
    id: 1,
    name: 'Comedor',
    image: '../Recursos/Modular1metro.jpeg'
  },
  {
    id: 2,
    name: 'Estantes',
    image: '../Recursos/BibliotecaCasita1.jpeg'
  },
  {
    id: 3,
    name: 'Escritorios',
    image: '../Recursos/EscritorioBanqueta.jpeg'
  },
  {
    id: 4,
    name: 'Infantil',
    image: '../Recursos/OrdenadorMontessori1.jpg'
  },
  {
    id: 5,
    name: 'Deco',
    image: '../Recursos/Vinoteca1.jpg'
  },
  {
    id: 6,
    name: 'Cunas',
    image: '../Recursos/CunaFuncional1.jpeg'
  }
]


//Esta parte es el listado de productos en el catalogo, que incluye el nombre y la foto de caratula
//para agregar mas muebles deben agregar una seccion de las tipo id y cambiarle el nombre del mueble y de la image

const productlist = [
  {
    id: 1,
    name: 'Biblioteca Casita',
    categoria: 2,
    image: "../Recursos/BibliotecaCasita1.jpeg"
  },
  {
    id: 2,
    name: 'Bibliotecas Clásicas',
    categoria: 2,
    image: "../Recursos/Biblioteca3.jpg"
  },
  {
    id: 3,
    name: 'Modular',
    categoria: 1,
    image: "../Recursos/Modular1metro.jpeg"
  },
  {
    id: 4,
    name: 'Repisas doble y triple',
    categoria: 2,
    image: "../Recursos/RepisaDobleTriple.jpeg"
  },
  {
    id: 5,
    name: 'Combo Escritorio Banqueta',
    categoria: 3,
    image: "../Recursos/EscritorioBanqueta.jpeg"
  },
  {
    id: 6,
    name: 'Canastos de mimbre',
    categoria: 5,
    image: "../Recursos/Canasto3.jpeg"
  },
  {
    id: 7,
    name: 'Perillas de ceramica',
    categoria: 5,
    image: "../Recursos/Perillas1.jpeg"
  },
  {
    id: 8,
    name: 'Cajones de madera',
    categoria: 4,
    image: "../Recursos/CanastoMadera1.jpeg"
  },
  {
    id: 9,
    name: 'Biblioteca Balconera',
    categoria: 2,
    image: "../Recursos/BibliotecaBalconera1.jpg"
  },
  {
    id: 10,
    name: 'Vinoteca',
    categoria: 5,
    image: "../Recursos/Vinoteca1.jpg"
  },
  {
    id: 11,
    name: 'Tablas de picar',
    categoria: 5,
    image: "../Recursos/TablaPicada1.jpg"
  },
  {
    id: 12,
    name: 'Maceteros',
    categoria: 5,
    image: "../Recursos/Macetero1.jpg"
  }
  ,
  {
    id: 13,
    name: 'Mesitas de luz',
    categoria: 0,
    image: "../Recursos/MesadeLuz2.jpg"
  },
  {
    id: 14,
    name: 'Biblioteca Baja',
    categoria: 2,
    image: "../Recursos/BibliotecaBaja1.jpg"
  },
  {
    id: 15,
    name: 'Mesa Classic pata recta',
    categoria: 1,
    image: "../Recursos/Mesa1.jpg"
  },
  {
    id: 16,
    name: 'Ordenador',
    categoria: 2,
    image: "../Recursos/Ordenador1.jpg"
  },
  {
    id: 17,
    name: 'Mesa Camping',
    categoria: 1,
    image: "../Recursos/MesaCamping1.jpg"
  },
  {
    id: 18,
    name: 'Percheros',
    categoria: 5,
    image: "../Recursos/Perchero1.jpg"
  },
  {
    id: 19,
    name: 'Desayunador',
    categoria: 1,
    image: "../Recursos/Desayunador1.jpg"
  },
  {
    id: 20,
    name: 'Ordenador Montessori',
    categoria: 4,
    image: "../Recursos/OrdenadorMontessori1.jpg"
  },
  {
    id: 21,
    name: 'Cajon de madera',
    categoria: 4,
    image: "../Recursos/CajonMadera1.jpg"
  },
  {
    id: 22,
    name: 'Gervasoni',
    categoria: 1,
    image: "../Recursos/Gervasoni1.jpg"
  },
  {
    id: 23,
    name: 'Mesedora',
    categoria: 5,
    image: "../Recursos/Mesedora.jpg"
  },
  {
    id: 24,
    name: 'Tateti',
    categoria: 4,
    image: "../Recursos/Tateti1.jpg"
  },
  {
    id: 25,
    name: 'Lampara Rustica',
    categoria: 5,
    image: "../Recursos/Lampara1.jpg"
  },
  {
    id: 26,
    name: 'Silla Infantil',
    categoria: 4,
    image: "../Recursos/SillaInfantil1.jpg"
  },
  {
    id: 27,
    name: 'Mesa de TV',
    categoria: 1,
    image: "../Recursos/MesaTV1.jpg"
  },
  {
    id: 28,
    name: 'Cuna Funcional',
    categoria: 6,
    image: "../Recursos/CunaFuncional1.jpeg"
  }
]


//Esta parte controla las fotos dentro de cada producto del catalogo.
//Para agregar fotos para algun producto hay que agregar una de las secciones abajo entre [ ] y cambiar la direccion de la foto en "../Recursos/Canastos1.png"
const Productlist = [

  [ //ID1
    {
      id: 1,
      description: 'Bibliotecas Estilo Casita, en 60, 80 y 100 cm',
      image: "../Recursos/BibliotecaCasita1.jpeg"
    },
    {
      id: 2,
      image: "../Recursos/BibliotecaCasita2.jpeg"
    },
    {
      id: 3,
      image: "../Recursos/BibliotecaCasita3.jpeg"
    },
    {
      id: 4,
      image: "../Recursos/BibliotecaCasita4.jpg"
    },
    {
      id: 5,
      image: "../Recursos/BibliotecaCasita5.jpg"
    }
  ],
  [ //ID1
    {
      id: 1,
      description: 'Biblioteca Clásica de 40, 60 y 80 cm',
      image: "../Recursos/Biblioteca1.jpg"
    },
    {
      id: 2,
      image: "../Recursos/Biblioteca2.jpg"
    },
    {
      id: 3,
      image: "../Recursos/Biblioteca3.jpg"
    }
  ],
  [  //ID2
    {
      id: 1,
      description: 'Modular de 080, 100, 120, 150 y 200 cm',
      image: "../Recursos/Modular1metro.jpeg"
    },
    {
      id: 2,
      image: "../Recursos/Modular1.jpg"
    }
  ],
  [ //ID 3
    {
      id: 1,
      description: 'Repisa doble y triple',
      image: "../Recursos/RepisaDobleTriple.jpeg"
    }
  ],
  [ //ID4
    {
      id: 1,
      description: 'Combo Escritorio y Banqueta',
      image: "../Recursos/EscritorioBanqueta.jpeg"
    }
  ],
  [ //ID5
    {
      id: 1,
      description: 'Canastos de mimbre',
      image: "../Recursos/Canasto1.jpeg"
    },
    {
      id: 2,
      image: "../Recursos/Canasto2.jpeg"
    },
    {
      id: 3,
      image: "../Recursos/Canasto4.jpeg"
    },
    {
      id: 4,
      image: "../Recursos/Canasto5.jpeg"
    }
  ],
  [ //ID6
    {
      id: 1,
      description: 'Perillas de ceramica y metálicas',
      image: "../Recursos/Perillas1.jpeg"
    },
    {
      id: 2,
      image: "../Recursos/Perillas2.jpeg"
    },
    {
      id: 3,
      image: "../Recursos/Perillas3.jpeg"
    }
  ],
  [ //ID7
    {
      id: 1,
      description: 'Maderitas didácticas seleccionadas y Cajón de madera con ruedas',
      image: "../Recursos/CanastoMadera1.jpeg"
    },
    {
      id: 2,
      image: "../Recursos/CanastoMadera2.jpg"
    },
    {
      id: 3,
      image: "../Recursos/CanastoMadera3.jpg"
    }
  ],
  [ //ID1
    {
      id: 1,
      description: 'Biblioteca Balconera de tres o cuatro niveles',
      image: "../Recursos/BibliotecaBalconera1.jpg"
    },
    {
      id: 2,
      image: "../Recursos/BibliotecaBalconera2.jpg"
    }

  ],
  [ //ID7
    {
      id: 1,
      description: 'Vinotecas pequeñas, medianas y grandes',
      image: "../Recursos/Vinoteca1.jpg"
    },
    {
      id: 2,
      image: "../Recursos/Vinoteca2.jpg"
    },
    {
      id: 3,
      image: "../Recursos/Vinoteca3.jpg"
    }
  ],
  [ //ID7
    {
      id: 1,
      description: 'Tablas de picada pequeñas y medianas',
      image: "../Recursos/TablaPicada1.jpg"
    },
    {
      id: 2,
      image: "../Recursos/TablaPicada2.jpg"
    }
  ],
  [ //ID7
    {
      id: 1,
      description: 'Maceteros de multiples medidas',
      image: "../Recursos/Macetero1.jpg"
    }
  ],
  [ //ID7
    {
      id: 1,
      description: 'Mesitas de luz de distintos modelos',
      image: "../Recursos/MesadeLuz4.jpg"
    },
    {
      id: 2,
      image: "../Recursos/MesadeLuz2.jpg"
    },
    {
      id: 3,
      image: "../Recursos/MesadeLuz3.jpg"
    }
  ],
  [ //ID7
    {
      id: 1,
      description: 'Biblioteca Baja',
      image: "../Recursos/BibliotecaBaja1.jpg"
    },
    {
      id: 2,
      image: "../Recursos/BibliotecaBaja2.jpg"
    },
    {
      id: 3,
      image: "../Recursos/BibliotecaBaja3.jpg"
    }
  ],
  [ //ID7
    {
      id: 1,
      description: 'Conjunto Comedor',
      image: "../Recursos/Mesa1.jpg"
    },
    {
      id: 2,
      image: "../Recursos/Mesa2.jpg"
    }
  ],
  [ //ID7
    {
      id: 1,
      description: 'Ordenador',
      image: "../Recursos/Ordenador1.jpg"
    },
    {
      id: 2,
      image: "../Recursos/Ordenador2.jpg"
    }

  ],
  [ //ID7
    {
      id: 1,
      description: 'Mesa Camping',
      image: "../Recursos/MesaCamping1.jpg"
    },
    {
      id: 2,
      image: "../Recursos/MesaCamping2.jpg"
    }
  ],
  [
    {
      id: 1,
      description: 'Percheros de pared',
      image: "../Recursos/Perchero1.jpg"
    },
    {
      id: 2,
      image: "../Recursos/Perchero2.jpg"
    },
    {
      id: 3,
      image: "../Recursos/Perchero3.jpg"
    }
  ],
  [
    {
      id: 1,
      description: 'Desayunador',
      image: "../Recursos/Desayunador1.jpg"
    }
  ],
  [
    {
      id: 1,
      description: 'Ordenador Montessori',
      image: "../Recursos/OrdenadorMontessori1.jpg"
    },
    {
      id: 2,
      image: "../Recursos/OrdenadorMontessori2.jpg"
    }
  ],
  [
    {
      id: 1,
      description: 'Cajon de madera con ruedas',
      image: "../Recursos/CajonMadera1.jpg"
    },
    {
      id: 2,
      image: "../Recursos/CajonMadera2.jpg"
    }
  ],
  [
    {
      id: 1,
      description: 'Gervasoni',
      image: "../Recursos/Gervasoni1.jpg"
    }
  ],
  [
    {
      id: 1,
      description: 'Mesedora',
      image: "../Recursos/Mesedora.jpg"
    }
  ],
  [
    {
      id: 1,
      description: 'Tateti',
      image: "../Recursos/Tateti1.jpg"
    },
    {
      id: 2,
      image: "../Recursos/Tateti2.jpg"
    }
  ],
  [
    {
      id: 1,
      description: 'Lampara Rustica',
      image: "../Recursos/Lampara1.jpg"
    },
    {
      id: 2,
      image: "../Recursos/Lampara2.jpg"
    },
    {
      id: 3,
      image: "../Recursos/Lampara3.jpg"
    }
  ],
  [
    {
      id: 1,
      description: 'Silla Infantil',
      image: "../Recursos/SillaInfantil1.jpg"
    },
    {
      id: 2,
      image: "../Recursos/SillaInfantil2.jpg"
    }
  ],
  [
    {
      id: 1,
      description: 'Mesa de TV',
      image: "../Recursos/MesaTV1.jpg"
    }
  ],
  [
    {
      id: 1,
      description: 'Cuna Funcional',
      image: "../Recursos/CunaFuncional1.jpeg"
    }
  ]

];
