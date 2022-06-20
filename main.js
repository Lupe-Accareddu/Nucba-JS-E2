const arrayPizzas=[
    {
      id:1,
      nombre:"Jamon y Morrones",
      ingredientes:["queso","jamon","morrones"],
      precio:750,
    },
    {
      id:2,
      nombre:"Cebolla",
      ingredientes:["queso","cebolla","oregano"],
      precio:500,
    },
    {
      id:3,
      nombre:"Muzzarella",
      ingredientes:["muzarella","oregano","aceitunas"],
      precio:550,
    },
    {
      id:4,
      nombre:"Bacon",
      ingredientes:["panceta","queso","aceitunas"],
      precio:850,
    },
    {
      id:5,
      nombre:"Albahaca",
      ingredientes:["albahaca","queso","aceitunas"],
      precio:650,
    },{
      id:6,
      nombre:"Tomates",
      ingredientes:["queso","tomate","oregano"],
      precio:550,
    }
    ];

//Punto A
    arrayPizzas.forEach(elemento => {
        if ((elemento.id % 2) !== 0){
            console.log(`La pizza de ${elemento.nombre} con id: ${elemento.id} es impar`)
        }
    })

//Punto B

for (i = 0; i < arrayPizzas.length; i++) {
    if (arrayPizzas[i].precio < 600) {
      console.log(`La pizza de ${arrayPizzas[i].nombre} cuesta menos $600. Su costo es de $${arrayPizzas[i].precio}`)
    }
  }

//Punto C

arrayPizzas.forEach((elemento, nombre) => console.log(`Tenemos Pizza de ${elemento.nombre}`))

//Punto D

arrayPizzas.forEach((elemento, precio) => console.log(`Tenemos pizzas que cuestan $${elemento.precio}`))

//Punto E
   arrayPizzas.forEach((elemento, precio) => console.log(`La pizza de ${elemento.nombre} cuesta $${elemento.precio}`))