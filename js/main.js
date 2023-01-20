// EL OBJETIVO DE ESTE ALGORITMO ES VENDER TANTO PELUCHES COMO JUEGOS DE POKEMON.
// 1) TE PREGUNTA UN PELUCHE DE QUE POKEMON QUERES COMPRAR.
// 2) TE PASA EL VALOR DEL PELUCHE CON EL IVA Y EL DESCUENTO DE NAVIDAD YA INCLUIDO.
// 3) TE PREGUNTA SI QUERES (O NO) AGREGAR UNA GIFTCARD CON UN 20%. Y TE PASA EL PRECIO (O NO) CON LA GIFTCARD INCLUIDA. 
// 4) TE PREGUNTA SI QUERES (O NO) SUMARLE AL MONTO TOTAL UN ENVIOO. Y TE PASA EL PRECIO CON LA GIFTCARD (EN CASO DE QUE HAYAS PUESTO QUE SI), MAS EL ENVIO (SI ELEGISTE QUE SI).
// 5) TE PREGUNTA QUE JUEGO DE POKEMON QUERES COMPRAR.
// 6) TE PASA EL VALOR DEL JUEGO CON EL IVA Y EL DESCUENTO DE NAVIDAD YA INCLUIDO.
// 7) TE PREGUNTA SI QUERES (O NO) AGREGAR UNA GIFTCARD. Y TE PASA EL PRECIO. Y TE PASA EL PRECIO (O NO) CON LA GIFTCARD INCLUIDA.
// 8) TE PREGUNTA SI QUERES (O NO) SUMARLE AL MONTO TOTAL UN ENVIOO. Y TE PASA EL PRECIO CON LA GIFTCARD (EN CASO DE QUE HAYAS PUESTO QUE SI), MAS EL ENVIO (SI ELEGISTE QUE SI).
// 9) Y POR ULTIMO TE PIDE QUE CALIFIQUES TU EXPERIENCIA DE COMPRA, DEL 1 AL 10.

// ¡¡¡¡IMPORTANTE!!!! ACLARACION: PARA VER EL PRECIO DEL PRODUCTO ESCRIBIR SIMPLEMENTE EL NUMERO QUE TIENEN, POR EJEMPLO: "1. MEW" , ESCRIBIR SOLO "1". 
// LO MISMO CUANDO SE TE PREGUNTA SI DESEAR AGREGAR UNA GIFTCARD O AGREGAR ENVIO. EJEMPLO: "Si" O "No", ESCRIBIR SOLO "Si", RESPETANDO EL CAMELCASE, LO MISMO EL "ESC", PARA SALIR DEL CATALOGO. 

// INVENTARIO DE PELUCHES 
const pelucheMew = 750;
const peluchePikachu = 1500;
const pelucheCharmander = 1000;
const pelucheSquirtle = 1200;
const pelucheEevee = 2000;
const pelucheBulbasur = 1100;
const pelucheLapras = 900;
const pelucheRaichu = 850;
const pelucheVulpix = 1300;
const pelucheZapdos = 1900;
// VIDEOJUEGOS DE LAS NUEVE GENERACIONES DE POKEMON
const juegoRojoYAzul = 1300;
const juegoOroYPlata = 1250;
const juegoRubiYZafiro = 950;
const juegoDiamanteYPerla = 1250;
const juegoNegroYBlanco = 1550;
const juegoXY = 1690;
const juegoSolYLuna = 1700;
const juegoEspadaYEscudo = 1880;
const juegoEscarlataYPurpura = 2100;

// DESCUENTOS E IVA
const giftCard = 0.80;
const descuentoNavidad = 150;
const iva = 1.21;

// ENVIO
const envio = 75;


// FUNCIONES Y RETURNS
sumar = (a, b) => (a + b);
restar = (a, b) => (a - b);
dividir = (a, b) => (a / b);
multiplicar = (a, b) => (a * b);


// Precio con iva Y con descuento de Navidad. SIN ENVIO. DE PELUCHES.
const precioTotalSinEnvio1 = restar(multiplicar(pelucheMew, iva), descuentoNavidad);
const precioTotalSinEnvio2 = restar(multiplicar(peluchePikachu, iva), descuentoNavidad);
const precioTotalSinEnvio3 = restar(multiplicar(pelucheCharmander, iva), descuentoNavidad);
const precioTotalSinEnvio4 = restar(multiplicar(pelucheSquirtle, iva), descuentoNavidad);
const precioTotalSinEnvio5 = restar(multiplicar(pelucheEevee, iva), descuentoNavidad);
const precioTotalSinEnvio6 = restar(multiplicar(pelucheBulbasur, iva), descuentoNavidad);
const precioTotalSinEnvio7 = restar(multiplicar(pelucheLapras, iva), descuentoNavidad);
const precioTotalSinEnvio8 = restar(multiplicar(pelucheRaichu, iva), descuentoNavidad);
const precioTotalSinEnvio9 = restar(multiplicar(pelucheVulpix, iva), descuentoNavidad);
const precioTotalSinEnvio10 = restar(multiplicar(pelucheZapdos, iva), descuentoNavidad);
// Precio con iva Y con descuento de Navidad. SIN ENVIO. DE JUEGOS.
const precioTotalSinEnvio11 = restar(multiplicar(juegoRojoYAzul, iva), descuentoNavidad);
const precioTotalSinEnvio12 = restar(multiplicar(juegoOroYPlata, iva), descuentoNavidad);
const precioTotalSinEnvio13 = restar(multiplicar(juegoRubiYZafiro, iva), descuentoNavidad);
const precioTotalSinEnvio14 = restar(multiplicar(juegoDiamanteYPerla, iva), descuentoNavidad);
const precioTotalSinEnvio15 = restar(multiplicar(juegoNegroYBlanco, iva), descuentoNavidad);
const precioTotalSinEnvio16 = restar(multiplicar(juegoXY, iva), descuentoNavidad);
const precioTotalSinEnvio17 = restar(multiplicar(juegoSolYLuna, iva), descuentoNavidad);
const precioTotalSinEnvio18 = restar(multiplicar(juegoEspadaYEscudo, iva), descuentoNavidad);
const precioTotalSinEnvio19 = restar(multiplicar(juegoEscarlataYPurpura, iva), descuentoNavidad);



// Precio con iva y con descuento de Navidad. CON ENVIO DE PELUCHES
const precioTotalConEnvio1 = (sumar(restar(multiplicar(pelucheMew, iva), descuentoNavidad), envio));
const precioTotalConEnvio2 = (sumar(restar(multiplicar(peluchePikachu, iva), descuentoNavidad), envio));
const precioTotalConEnvio3 = (sumar(restar(multiplicar(pelucheCharmander, iva), descuentoNavidad), envio));
const precioTotalConEnvio4 = (sumar(restar(multiplicar(pelucheSquirtle, iva), descuentoNavidad), envio));
const precioTotalConEnvio5 = (sumar(restar(multiplicar(pelucheEevee, iva), descuentoNavidad), envio));
const precioTotalConEnvio6 = (sumar(restar(multiplicar(pelucheBulbasur, iva), descuentoNavidad), envio));
const precioTotalConEnvio7 = (sumar(restar(multiplicar(pelucheLapras, iva), descuentoNavidad), envio));
const precioTotalConEnvio8 = (sumar(restar(multiplicar(pelucheRaichu, iva), descuentoNavidad), envio));
const precioTotalConEnvio9 = (sumar(restar(multiplicar(pelucheVulpix, iva), descuentoNavidad), envio));
const precioTotalConEnvio10 = (sumar(restar(multiplicar(pelucheZapdos, iva), descuentoNavidad), envio));
// Precio con iva y con descuento de Navidad. CON ENVIO DE JUEGOS
const precioTotalConEnvio11 = (sumar(restar(multiplicar(juegoRojoYAzul, iva), descuentoNavidad), envio));
const precioTotalConEnvio12 = (sumar(restar(multiplicar(juegoOroYPlata, iva), descuentoNavidad), envio));
const precioTotalConEnvio13 = (sumar(restar(multiplicar(juegoRubiYZafiro, iva), descuentoNavidad), envio));
const precioTotalConEnvio14 = (sumar(restar(multiplicar(juegoDiamanteYPerla, iva), descuentoNavidad), envio));
const precioTotalConEnvio15 = (sumar(restar(multiplicar(juegoNegroYBlanco, iva), descuentoNavidad), envio));
const precioTotalConEnvio16 = (sumar(restar(multiplicar(juegoXY, iva), descuentoNavidad), envio));
const precioTotalConEnvio17 = (sumar(restar(multiplicar(juegoSolYLuna, iva), descuentoNavidad), envio));
const precioTotalConEnvio18 = (sumar(restar(multiplicar(juegoEspadaYEscudo, iva), descuentoNavidad), envio));
const precioTotalConEnvio19 = (sumar(restar(multiplicar(juegoEscarlataYPurpura, iva), descuentoNavidad), envio));



// Precio con iva, con descuento de Navidad y descuento de GITFCARD. SIN ENVIO. DE PELUCHES
const precioTotalConGiftcard1 = multiplicar(restar(multiplicar(pelucheMew, iva), descuentoNavidad), giftCard);
const precioTotalConGiftcard2 = multiplicar(restar(multiplicar(peluchePikachu, iva), descuentoNavidad), giftCard);
const precioTotalConGiftcard3 = multiplicar(restar(multiplicar(pelucheCharmander, iva), descuentoNavidad), giftCard);
const precioTotalConGiftcard4 = multiplicar(restar(multiplicar(pelucheSquirtle, iva), descuentoNavidad), giftCard);
const precioTotalConGiftcard5 = multiplicar(restar(multiplicar(pelucheEevee, iva), descuentoNavidad), giftCard);
const precioTotalConGiftcard6 = multiplicar(restar(multiplicar(pelucheBulbasur, iva), descuentoNavidad), giftCard);
const precioTotalConGiftcard7 = multiplicar(restar(multiplicar(pelucheLapras, iva), descuentoNavidad), giftCard);
const precioTotalConGiftcard8 = multiplicar(restar(multiplicar(pelucheRaichu, iva), descuentoNavidad), giftCard);
const precioTotalConGiftcard9 = multiplicar(restar(multiplicar(pelucheVulpix, iva), descuentoNavidad), giftCard);
const precioTotalConGiftcard10 = multiplicar(restar(multiplicar(pelucheZapdos, iva), descuentoNavidad), giftCard);
// Precio con iva, con descuento de Navidad y descuento de GITFCARD. SIN ENVIO. DE JUEGOS
const precioTotalConGiftcard11 = multiplicar(restar(multiplicar(juegoRojoYAzul, iva), descuentoNavidad), giftCard);
const precioTotalConGiftcard12 = multiplicar(restar(multiplicar(juegoOroYPlata, iva), descuentoNavidad), giftCard);
const precioTotalConGiftcard13 = multiplicar(restar(multiplicar(juegoRubiYZafiro, iva), descuentoNavidad), giftCard);
const precioTotalConGiftcard14 = multiplicar(restar(multiplicar(juegoDiamanteYPerla, iva), descuentoNavidad), giftCard);
const precioTotalConGiftcard15 = multiplicar(restar(multiplicar(juegoNegroYBlanco, iva), descuentoNavidad), giftCard);
const precioTotalConGiftcard16 = multiplicar(restar(multiplicar(juegoXY, iva), descuentoNavidad), giftCard);
const precioTotalConGiftcard17 = multiplicar(restar(multiplicar(juegoSolYLuna, iva), descuentoNavidad), giftCard);
const precioTotalConGiftcard18 = multiplicar(restar(multiplicar(juegoEspadaYEscudo, iva), descuentoNavidad), giftCard);
const precioTotalConGiftcard19 = multiplicar(restar(multiplicar(juegoEscarlataYPurpura, iva), descuentoNavidad), giftCard);


// Precio con iva, con descuento de Navidad y descuento de GIFTCARD. CON ENVIO. DE PELUCHES
const precioTotalConGiftcardYEnvio1 = sumar(multiplicar(restar(multiplicar(pelucheMew, iva), descuentoNavidad), giftCard), envio);
const precioTotalConGiftcardYEnvio2 = sumar(multiplicar(restar(multiplicar(peluchePikachu, iva), descuentoNavidad), giftCard), envio);
const precioTotalConGiftcardYEnvio3 = sumar(multiplicar(restar(multiplicar(pelucheCharmander, iva), descuentoNavidad), giftCard), envio);
const precioTotalConGiftcardYEnvio4 = sumar(multiplicar(restar(multiplicar(pelucheSquirtle, iva), descuentoNavidad), giftCard), envio);
const precioTotalConGiftcardYEnvio5 = sumar(multiplicar(restar(multiplicar(pelucheEevee, iva), descuentoNavidad), giftCard), envio);
const precioTotalConGiftcardYEnvio6 = sumar(multiplicar(restar(multiplicar(pelucheBulbasur, iva), descuentoNavidad), giftCard), envio);
const precioTotalConGiftcardYEnvio7 = sumar(multiplicar(restar(multiplicar(pelucheLapras, iva), descuentoNavidad), giftCard), envio);
const precioTotalConGiftcardYEnvio8 = sumar(multiplicar(restar(multiplicar(pelucheRaichu, iva), descuentoNavidad), giftCard), envio);
const precioTotalConGiftcardYEnvio9 = sumar(multiplicar(restar(multiplicar(pelucheVulpix, iva), descuentoNavidad), giftCard), envio);
const precioTotalConGiftcardYEnvio10 = sumar(multiplicar(restar(multiplicar(pelucheZapdos, iva), descuentoNavidad), giftCard), envio);
// Precio con iva, con descuento de Navidad y descuento de GIFTCARD. CON ENVIO. DE JUEGOS.
const precioTotalConGiftcardYEnvio11 = sumar(multiplicar(restar(multiplicar(juegoRojoYAzul, iva), descuentoNavidad), giftCard), envio);
const precioTotalConGiftcardYEnvio12 = sumar(multiplicar(restar(multiplicar(juegoOroYPlata, iva), descuentoNavidad), giftCard), envio);
const precioTotalConGiftcardYEnvio13 = sumar(multiplicar(restar(multiplicar(juegoRubiYZafiro, iva), descuentoNavidad), giftCard), envio);
const precioTotalConGiftcardYEnvio14 = sumar(multiplicar(restar(multiplicar(juegoDiamanteYPerla, iva), descuentoNavidad), giftCard), envio);
const precioTotalConGiftcardYEnvio15 = sumar(multiplicar(restar(multiplicar(juegoNegroYBlanco, iva), descuentoNavidad), giftCard), envio);
const precioTotalConGiftcardYEnvio16 = sumar(multiplicar(restar(multiplicar(juegoXY, iva), descuentoNavidad), giftCard), envio);
const precioTotalConGiftcardYEnvio17 = sumar(multiplicar(restar(multiplicar(juegoSolYLuna, iva), descuentoNavidad), giftCard), envio);
const precioTotalConGiftcardYEnvio18 = sumar(multiplicar(restar(multiplicar(juegoEspadaYEscudo, iva), descuentoNavidad), giftCard), envio);
const precioTotalConGiftcardYEnvio19 = sumar(multiplicar(restar(multiplicar(juegoEscarlataYPurpura, iva), descuentoNavidad), giftCard), envio);

//FUNCION 
function bienvenida (){
    alert("                                              ¡Hola!          \n                    ¡Bienvenido a la Website Oficial de Pokemon!")
    alert("A continuacion le mostraremos el catalogo con los peluches mas exclusivos del Mundo Pokemon.")
}


bienvenida()

// VENTA DE PELUCHES DE POKEMON
let quiereEnvio;
let producto;
let quiereGiftcard;
const peluchesImportados = "\n1. Peluche de Mew \n2. Peluche de Pikachu \n3. Peluche de Charmander \n4. Peluche de Squirtle \n5. Peluche de Eevee \n6. Peluche de Bulbasur \n7. Peluche de Lapras \n8. Peluche de Raichu \n9. Peluche de Vulpix \n10. Peluche de Zapdos \nPara salir, pulse 'ESC'";

do {
    producto = prompt("Ingrese un numero del producto que desea adquirir: " + peluchesImportados)


    if (producto == "1") {
        alert("El precio de su Peluche de Mew con iva mas el descuento de Navidad le queda: $" + precioTotalSinEnvio1)

        if (producto == "1") {
            quiereGiftcard = prompt("¿Quiere añadir una Giftcard de descuento? Indique 'Si' o 'No'")
            if (quiereGiftcard == "Si") {
                alert("Al costo total de su producto le restariamos el 20% de la Gifcard. Por tanto, le quedaria en: $" + precioTotalConGiftcard1)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a restar el 20% de la Giftcard y le vamos a sumar el envio . Le quedaria en: $" + precioTotalConGiftcardYEnvio1)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, le restamos el 20% de la Giftcard pero NO del envio. Le quedaria en: $" + precioTotalConGiftcard1)
                    alert("¡Muchas gracias por comprar!")
                }
            }
            else if (quiereGiftcard == "No") {
                alert("Okey, su precio sin la Giftcard le quedaria en: $" + precioTotalSinEnvio1)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a sumar el envio y SIN 20% de la Giftcard. Le quedaria en: $" + precioTotalConEnvio1)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, no le restamos el 20% de la Giftcard, ni tampoco del envio. Por tanto, le quedaria en: $" + precioTotalSinEnvio1)
                    alert("¡Muchas gracias por comprar!")
                }
            }
        }

    } else if (producto === "2") {
        alert("El precio de su Peluche de Pikachu con iva mas el descuento de Navidad le queda: $" + precioTotalSinEnvio2)

        if (producto == "2") {
            quiereGiftcard = prompt("¿Quiere añadir una Giftcard de descuento? Indique 'Si' o 'No'")
            if (quiereGiftcard == "Si") {
                alert("Al costo total de su producto le restariamos el 20% de la Gifcard. Por tanto, le quedaria en: $" + precioTotalConGiftcard2)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a restar el 20% de la Giftcard y le vamos a sumar el envio . Le quedaria en: $" + precioTotalConGiftcardYEnvio2)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, le restamos el 20% de la Giftcard pero NO del envio. Le quedaria en: $" + precioTotalConGiftcard2)
                    alert("¡Muchas gracias por comprar!")
                }
            }
            else if (quiereGiftcard == "No") {
                alert("Okey, su precio sin la Giftcard le quedaria en: $" + precioTotalSinEnvio2)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a sumar el envio y SIN 20% de la Giftcard. Le quedaria en: $" + precioTotalConEnvio2)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, no le restamos el 20% de la Giftcard, ni tampoco del envio. Por tanto, le quedaria en: $" + precioTotalSinEnvio2)
                    alert("¡Muchas gracias por comprar!")
                }
            }
        }

    } else if (producto == "3") {
        alert("El precio de su Peluche de Charmander con iva mas el descuento de Navidad le queda: $" + precioTotalSinEnvio3)

        if (producto == "3") {
            quiereGiftcard = prompt("¿Quiere añadir una Giftcard de descuento? Indique 'Si' o 'No'")
            if (quiereGiftcard == "Si") {
                alert("Al costo total de su producto le restariamos el 20% de la Gifcard. Por tanto, le quedaria en: $" + precioTotalConGiftcard3)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a restar el 20% de la Giftcard y le vamos a sumar el envio . Le quedaria en: $" + precioTotalConGiftcardYEnvio3)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, le restamos el 20% de la Giftcard pero NO del envio. Le quedaria en: $" + precioTotalConGiftcard3)
                    alert("¡Muchas gracias por comprar!")
                }
            }
            else if (quiereGiftcard == "No") {
                alert("Okey, su precio sin la Giftcard le quedaria en: $" + precioTotalSinEnvio3)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a sumar el envio y SIN 20% de la Giftcard. Le quedaria en: $" + precioTotalConEnvio3)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, no le restamos el 20% de la Giftcard, ni tampoco del envio. Por tanto, le quedaria en: $" + precioTotalSinEnvio3)
                    alert("¡Muchas gracias por comprar!")
                }
            }
        }
    } else if (producto == "4") {
        alert("El precio de su Peluche de Squirtle con iva mas el descuento de Navidad le queda: $" + precioTotalSinEnvio4)

        if (producto == "4") {
            quiereGiftcard = prompt("¿Quiere añadir una Giftcard de descuento? Indique 'Si' o 'No'")
            if (quiereGiftcard == "Si") {
                alert("Al costo total de su producto le restariamos el 20% de la Gifcard. Por tanto, le quedaria en: $" + precioTotalConGiftcard4)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a restar el 20% de la Giftcard y le vamos a sumar el envio . Le quedaria en: $" + precioTotalConGiftcardYEnvio4)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, le restamos el 20% de la Giftcard pero NO del envio. Le quedaria en: $" + precioTotalConGiftcard4)
                    alert("¡Muchas gracias por comprar!")
                }
            }
            else if (quiereGiftcard == "No") {
                alert("Okey, su precio sin la Giftcard le quedaria en: $" + precioTotalSinEnvio4)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a sumar el envio y SIN 20% de la Giftcard. Le quedaria en: $" + precioTotalConEnvio4)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, no le restamos el 20% de la Giftcard, ni tampoco del envio. Por tanto, le quedaria en: $" + precioTotalSinEnvio4)
                    alert("¡Muchas gracias por comprar!")
                }
            }
        }
    } else if (producto == "5") {
        alert("El precio de su Peluche de Eevee con iva mas el descuento de Navidad le queda: $" + precioTotalSinEnvio5)

        if (producto == "5") {
            quiereGiftcard = prompt("¿Quiere añadir una Giftcard de descuento? Indique 'Si' o 'No'")
            if (quiereGiftcard == "Si") {
                alert("Al costo total de su producto le restariamos el 20% de la Gifcard. Por tanto, le quedaria en: $" + precioTotalConGiftcard5)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a restar el 20% de la Giftcard y le vamos a sumar el envio . Le quedaria en: $" + precioTotalConGiftcardYEnvio5)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, le restamos el 20% de la Giftcard pero NO del envio. Le quedaria en: $" + precioTotalConGiftcard5)
                    alert("¡Muchas gracias por comprar!")
                }
            }
            else if (quiereGiftcard == "No") {
                alert("Okey, su precio sin la Giftcard le quedaria en: $" + precioTotalSinEnvio5)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a sumar el envio y SIN 20% de la Giftcard. Le quedaria en: $" + precioTotalConEnvio5)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, no le restamos el 20% de la Giftcard, ni tampoco del envio. Por tanto, le quedaria en: $" + precioTotalSinEnvio5)
                    alert("¡Muchas gracias por comprar!")
                }
            }
        }
    } else if (producto == "6") {
        alert("El precio de su Peluche de Bulbasur con iva mas el descuento de Navidad le queda: $" + precioTotalSinEnvio6)

        if (producto == "6") {
            quiereGiftcard = prompt("¿Quiere añadir una Giftcard de descuento? Indique 'Si' o 'No'")
            if (quiereGiftcard == "Si") {
                alert("Al costo total de su producto le restariamos el 20% de la Gifcard. Por tanto, le quedaria en: $" + precioTotalConGiftcard6)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a restar el 20% de la Giftcard y le vamos a sumar el envio . Le quedaria en: $" + precioTotalConGiftcardYEnvio6)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, le restamos el 20% de la Giftcard pero NO del envio. Le quedaria en: $" + precioTotalConGiftcard6)
                    alert("¡Muchas gracias por comprar!")
                }
            }
            else if (quiereGiftcard == "No") {
                alert("Okey, su precio sin la Giftcard le quedaria en: $" + precioTotalSinEnvio6)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a sumar el envio y SIN 20% de la Giftcard. Le quedaria en: $" + precioTotalConEnvio6)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, no le restamos el 20% de la Giftcard, ni tampoco del envio. Por tanto, le quedaria en: $" + precioTotalSinEnvio6)
                    alert("¡Muchas gracias por comprar!")
                }
            }
        }
    } else if (producto == "7") {
        alert("El precio de su Peluche de Lapras con iva mas el descuento de Navidad le queda: $" + precioTotalSinEnvio7)

        if (producto == "7") {
            quiereGiftcard = prompt("¿Quiere añadir una Giftcard de descuento? Indique 'Si' o 'No'")
            if (quiereGiftcard == "Si") {
                alert("Al costo total de su producto le restariamos el 20% de la Gifcard. Por tanto, le quedaria en: $" + precioTotalConGiftcard7)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a restar el 20% de la Giftcard y le vamos a sumar el envio . Le quedaria en: $" + precioTotalConGiftcardYEnvio7)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, le restamos el 20% de la Giftcard pero NO del envio. Le quedaria en: $" + precioTotalConGiftcard7)
                    alert("¡Muchas gracias por comprar!")
                }
            }
            else if (quiereGiftcard == "No") {
                alert("Okey, su precio sin la Giftcard le quedaria en: $" + precioTotalSinEnvio7)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a sumar el envio y SIN 20% de la Giftcard. Le quedaria en: $" + precioTotalConEnvio7)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, no le restamos el 20% de la Giftcard, ni tampoco del envio. Por tanto, le quedaria en: $" + precioTotalSinEnvio7)
                    alert("¡Muchas gracias por comprar!")
                }
            }
        }
    } else if (producto == "8") {
        alert("El precio de su Peluche de Raichu con iva mas el descuento de Navidad le queda: $" + precioTotalSinEnvio8)

        if (producto == "8") {
            quiereGiftcard = prompt("¿Quiere añadir una Giftcard de descuento? Indique 'Si' o 'No'")
            if (quiereGiftcard == "Si") {
                alert("Al costo total de su producto le restariamos el 20% de la Gifcard. Por tanto, le quedaria en: $" + precioTotalConGiftcard8)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a restar el 20% de la Giftcard y le vamos a sumar el envio . Le quedaria en: $" + precioTotalConGiftcardYEnvio8)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, le restamos el 20% de la Giftcard pero NO del envio. Le quedaria en: $" + precioTotalConGiftcard8)
                    alert("¡Muchas gracias por comprar!")
                }
            }
            else if (quiereGiftcard == "No") {
                alert("Okey, su precio sin la Giftcard le quedaria en: $" + precioTotalSinEnvio8)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a sumar el envio y SIN 20% de la Giftcard. Le quedaria en: $" + precioTotalConEnvio8)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, no le restamos el 20% de la Giftcard, ni tampoco del envio. Por tanto, le quedaria en: $" + precioTotalSinEnvio8)
                    alert("¡Muchas gracias por comprar!")
                }
            }
        }
    } else if (producto == "9") {
        alert("El precio de su Peluche de Vulpix con iva mas el descuento de Navidad le queda: $" + precioTotalSinEnvio9)

        if (producto == "9") {
            quiereGiftcard = prompt("¿Quiere añadir una Giftcard de descuento? Indique 'Si' o 'No'")
            if (quiereGiftcard == "Si") {
                alert("Al costo total de su producto le restariamos el 20% de la Gifcard. Por tanto, le quedaria en: $" + precioTotalConGiftcard9)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a restar el 20% de la Giftcard y le vamos a sumar el envio . Le quedaria en: $" + precioTotalConGiftcardYEnvio9)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, le restamos el 20% de la Giftcard pero NO del envio. Le quedaria en: $" + precioTotalConGiftcard9)
                    alert("¡Muchas gracias por comprar!")
                }
            }
            else if (quiereGiftcard == "No") {
                alert("Okey, su precio sin la Giftcard le quedaria en: $" + precioTotalSinEnvio9)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a sumar el envio y SIN 20% de la Giftcard. Le quedaria en: $" + precioTotalConEnvio9)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, no le restamos el 20% de la Giftcard, ni tampoco del envio. Por tanto, le quedaria en: $" + precioTotalSinEnvio9)
                    alert("¡Muchas gracias por comprar!")
                }
            }
        }
    } else if (producto == "10") {
        alert("El precio de su Peluche de Zapdos con iva mas el descuento de Navidad le queda: $" + precioTotalSinEnvio10)

        if (producto == "10") {
            quiereGiftcard = prompt("¿Quiere añadir una Giftcard de descuento? Indique 'Si' o 'No'")
            if (quiereGiftcard == "Si") {
                alert("Al costo total de su producto le restariamos el 20% de la Gifcard. Por tanto, le quedaria en: $" + precioTotalConGiftcard10)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a restar el 20% de la Giftcard y le vamos a sumar el envio . Le quedaria en: $" + precioTotalConGiftcardYEnvio10)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, le restamos el 20% de la Giftcard pero NO del envio. Le quedaria en: $" + precioTotalConGiftcard10)
                    alert("¡Muchas gracias por comprar!")
                }
            }
            else if (quiereGiftcard == "No") {
                alert("Okey, su precio sin la Giftcard le quedaria en: $" + precioTotalSinEnvio10)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su producto le vamos a sumar el envio y SIN 20% de la Giftcard. Le quedaria en: $" + precioTotalConEnvio10)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, no le restamos el 20% de la Giftcard, ni tampoco del envio. Por tanto, le quedaria en: $" + precioTotalSinEnvio10)
                    alert("¡Muchas gracias por comprar!")
                }
            }
        }
    }

} while (producto !== "ESC") {
    alert("                 ¡Gracias por visitar nuestro catalogo de peluches! \n \nA continuacion le mostraremos el catalogo con los videojuegos mas legendarios del Mundo Pokemon.")
}

// VENTA DE JUEGOS DE POKEMONS
const juegossPokemon = "\n11. Pokemon Rojo y Pokemon Azul \n12. Pokemon Oro y Pokemon Plata \n13. Pokemon Rubi y Pokemon Zafiro \n14. Pokemon Diamante y Pokemon Perla \n15. Pokemon Negro y Pokemon Blanco \n16. Pokemon X y Pokemon Y \n17. Pokemon Sol y Pokemon Luna \n18. Pokemon Espada y Pokemon Escudo \n19. Pokemon Escarlata y Pokemon Purpura \nPara salir, pulse 'ESC"
let juego 

do {
    juego = prompt("Ingrese un numero del juego que desea adquirir: " + juegossPokemon)


    if (juego == "11") {
        alert("El precio de su juego: Pokemon Rojo y Pokemon Azul con iva mas el descuento de Navidad le queda: $" + precioTotalSinEnvio11)

        if (juego == "11") {
            quiereGiftcard = prompt("¿Quiere añadir una Giftcard de descuento? Indique 'Si' o 'No'")
            if (quiereGiftcard == "Si") {
                alert("Al costo total de su juego le restariamos el 20% de la Gifcard. Por tanto, le quedaria en: $" + precioTotalConGiftcard11)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su juego le vamos a restar el 20% de la Giftcard y le vamos a sumar el envio . Le quedaria en: $" + precioTotalConGiftcardYEnvio11)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, le restamos el 20% de la Giftcard pero NO del envio. Le quedaria en: $" + precioTotalConGiftcard11)
                    alert("¡Muchas gracias por comprar!")
                }
            }
            else if (quiereGiftcard == "No") {
                alert("Okey, su precio sin la Giftcard le quedaria en: $" + precioTotalSinEnvio11)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su juego le vamos a sumar el envio y SIN 20% de la Giftcard. Le quedaria en: $" + precioTotalConEnvio11)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, no le restamos el 20% de la Giftcard, ni tampoco del envio. Por tanto, le quedaria en: $" + precioTotalSinEnvio11)
                    alert("¡Muchas gracias por comprar!")
                }
            }
        }

    } else if (juego == "12") {
        alert("El precio de su juego: Pokemon Oro y Pokemon Plata con iva mas el descuento de Navidad le queda: $" + precioTotalSinEnvio12)

        if (juego == "12") {
            quiereGiftcard = prompt("¿Quiere añadir una Giftcard de descuento? Indique 'Si' o 'No'")
            if (quiereGiftcard == "Si") {
                alert("Al costo total de su juego le restariamos el 20% de la Gifcard. Por tanto, le quedaria en: $" + precioTotalConGiftcard12)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su juego le vamos a restar el 20% de la Giftcard y le vamos a sumar el envio . Le quedaria en: $" + precioTotalConGiftcardYEnvio12)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, le restamos el 20% de la Giftcard pero NO del envio. Le quedaria en: $" + precioTotalConGiftcard12)
                    alert("¡Muchas gracias por comprar!")
                }
            }
            else if (quiereGiftcard == "No") {
                alert("Okey, su precio sin la Giftcard le quedaria en: $" + precioTotalSinEnvio12)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su juego le vamos a sumar el envio y SIN 20% de la Giftcard. Le quedaria en: $" + precioTotalConEnvio12)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, no le restamos el 20% de la Giftcard, ni tampoco del envio. Por tanto, le quedaria en: $" + precioTotalSinEnvio12)
                    alert("¡Muchas gracias por comprar!")
                }
            }
        }

    } else if (juego == "13") {
        alert("El precio de su juego: Pokemon Rubi y Pokemon Zafiro con iva mas el descuento de Navidad le queda: $" + precioTotalSinEnvio13)

        if (juego == "13") {
            quiereGiftcard = prompt("¿Quiere añadir una Giftcard de descuento? Indique 'Si' o 'No'")
            if (quiereGiftcard == "Si") {
                alert("Al costo total de su juego le restariamos el 20% de la Gifcard. Por tanto, le quedaria en: $" + precioTotalConGiftcard13)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su juego le vamos a restar el 20% de la Giftcard y le vamos a sumar el envio . Le quedaria en: $" + precioTotalConGiftcardYEnvio13)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, le restamos el 20% de la Giftcard pero NO del envio. Le quedaria en: $" + precioTotalConGiftcard13)
                    alert("¡Muchas gracias por comprar!")
                }
            }
            else if (quiereGiftcard == "No") {
                alert("Okey, su precio sin la Giftcard le quedaria en: $" + precioTotalSinEnvio3)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su juego le vamos a sumar el envio y SIN 20% de la Giftcard. Le quedaria en: $" + precioTotalConEnvio13)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, no le restamos el 20% de la Giftcard, ni tampoco del envio. Por tanto, le quedaria en: $" + precioTotalSinEnvio13)
                    alert("¡Muchas gracias por comprar!")
                }
            }
        }
    } else if (juego == "14") {
        alert("El precio de su juego: Pokemon Diamante y Pokemon Perla con iva mas el descuento de Navidad le queda: $" + precioTotalSinEnvio14)

        if (juego == "14") {
            quiereGiftcard = prompt("¿Quiere añadir una Giftcard de descuento? Indique 'Si' o 'No'")
            if (quiereGiftcard == "Si") {
                alert("Al costo total de su juego le restariamos el 20% de la Gifcard. Por tanto, le quedaria en: $" + precioTotalConGiftcard14)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su juego le vamos a restar el 20% de la Giftcard y le vamos a sumar el envio . Le quedaria en: $" + precioTotalConGiftcardYEnvio14)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, le restamos el 20% de la Giftcard pero NO del envio. Le quedaria en: $" + precioTotalConGiftcard14)
                    alert("¡Muchas gracias por comprar!")
                }
            }
            else if (quiereGiftcard == "No") {
                alert("Okey, su precio sin la Giftcard le quedaria en: $" + precioTotalSinEnvio14)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su juego le vamos a sumar el envio y SIN 20% de la Giftcard. Le quedaria en: $" + precioTotalConEnvio14)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, no le restamos el 20% de la Giftcard, ni tampoco del envio. Por tanto, le quedaria en: $" + precioTotalSinEnvio14)
                    alert("¡Muchas gracias por comprar!")
                }
            }
        }
    } else if (juego == "15") {
        alert("El precio de su juego: Pokemon Negro y Pokemon Blanco con iva mas el descuento de Navidad le queda: $" + precioTotalSinEnvio15)

        if (juego == "15") {
            quiereGiftcard = prompt("¿Quiere añadir una Giftcard de descuento? Indique 'Si' o 'No'")
            if (quiereGiftcard == "Si") {
                alert("Al costo total de su juego le restariamos el 20% de la Gifcard. Por tanto, le quedaria en: $" + precioTotalConGiftcard15)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su juego le vamos a restar el 20% de la Giftcard y le vamos a sumar el envio . Le quedaria en: $" + precioTotalConGiftcardYEnvio15)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, le restamos el 20% de la Giftcard pero NO del envio. Le quedaria en: $" + precioTotalConGiftcard15)
                    alert("¡Muchas gracias por comprar!")
                }
            }
            else if (quiereGiftcard == "No") {
                alert("Okey, su precio sin la Giftcard le quedaria en: $" + precioTotalSinEnvio15)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su juego le vamos a sumar el envio y SIN 20% de la Giftcard. Le quedaria en: $" + precioTotalConEnvio15)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, no le restamos el 20% de la Giftcard, ni tampoco del envio. Por tanto, le quedaria en: $" + precioTotalSinEnvio15)
                    alert("¡Muchas gracias por comprar!")
                }
            }
        }
    } else if (juego == "16") {
        alert("El precio de su juego: Pokemon X y Pokemon Y con iva mas el descuento de Navidad le queda: $" + precioTotalSinEnvio16)

        if (juego == "16") {
            quiereGiftcard = prompt("¿Quiere añadir una Giftcard de descuento? Indique 'Si' o 'No'")
            if (quiereGiftcard == "Si") {
                alert("Al costo total de su juego le restariamos el 20% de la Gifcard. Por tanto, le quedaria en: $" + precioTotalConGiftcard16)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su juego le vamos a restar el 20% de la Giftcard y le vamos a sumar el envio . Le quedaria en: $" + precioTotalConGiftcardYEnvio16)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, le restamos el 20% de la Giftcard pero NO del envio. Le quedaria en: $" + precioTotalConGiftcard16)
                    alert("¡Muchas gracias por comprar!")
                }
            }
            else if (quiereGiftcard == "No") {
                alert("Okey, su precio sin la Giftcard le quedaria en: $" + precioTotalSinEnvio16)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su juego le vamos a sumar el envio y SIN 20% de la Giftcard. Le quedaria en: $" + precioTotalConEnvio16)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, no le restamos el 20% de la Giftcard, ni tampoco del envio. Por tanto, le quedaria en: $" + precioTotalSinEnvio16)
                    alert("¡Muchas gracias por comprar!")
                }
            }
        }
    } else if (juego == "17") {
        alert("El precio de su juego: Pokemon Sol y Pokemon Luna con iva mas el descuento de Navidad le queda: $" + precioTotalSinEnvio17)

        if (juego == "17") {
            quiereGiftcard = prompt("¿Quiere añadir una Giftcard de descuento? Indique 'Si' o 'No'")
            if (quiereGiftcard == "Si") {
                alert("Al costo total de su juego le restariamos el 20% de la Gifcard. Por tanto, le quedaria en: $" + precioTotalConGiftcard17)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su juego le vamos a restar el 20% de la Giftcard y le vamos a sumar el envio . Le quedaria en: $" + precioTotalConGiftcardYEnvio17)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, le restamos el 20% de la Giftcard pero NO del envio. Le quedaria en: $" + precioTotalConGiftcard17)
                    alert("¡Muchas gracias por comprar!")
                }
            }
            else if (quiereGiftcard == "No") {
                alert("Okey, su precio sin la Giftcard le quedaria en: $" + precioTotalSinEnvio17)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su juego le vamos a sumar el envio y SIN 20% de la Giftcard. Le quedaria en: $" + precioTotalConEnvio17)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, no le restamos el 20% de la Giftcard, ni tampoco del envio. Por tanto, le quedaria en: $" + precioTotalSinEnvio17)
                    alert("¡Muchas gracias por comprar!")
                }
            }
        }
    } else if (juego == "18") {
        alert("El precio de su juego: Pokemon Espada y Pokemon Escudo con iva mas el descuento de Navidad le queda: $" + precioTotalSinEnvio18)

        if (juego == "18") {
            quiereGiftcard = prompt("¿Quiere añadir una Giftcard de descuento? Indique 'Si' o 'No'")
            if (quiereGiftcard == "Si") {
                alert("Al costo total de su juego le restariamos el 20% de la Gifcard. Por tanto, le quedaria en: $" + precioTotalConGiftcard18)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su juego le vamos a restar el 20% de la Giftcard y le vamos a sumar el envio . Le quedaria en: $" + precioTotalConGiftcardYEnvio18)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, le restamos el 20% de la Giftcard pero NO del envio. Le quedaria en: $" + precioTotalConGiftcard18)
                    alert("¡Muchas gracias por comprar!")
                }
            }
            else if (quiereGiftcard == "No") {
                alert("Okey, su precio sin la Giftcard le quedaria en: $" + precioTotalSinEnvio18)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su juego le vamos a sumar el envio y SIN 20% de la Giftcard. Le quedaria en: $" + precioTotalConEnvio18)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, no le restamos el 20% de la Giftcard, ni tampoco del envio. Por tanto, le quedaria en: $" + precioTotalSinEnvio18)
                    alert("¡Muchas gracias por comprar!")
                }
            }
        }
    } else if (juego == "19") {
        alert("El precio de su juego: Pokemon Escarlata y Pokemon Purpura con iva mas el descuento de Navidad le queda: $" + precioTotalSinEnvio19)

        if (juego == "19") {
            quiereGiftcard = prompt("¿Quiere añadir una Giftcard de descuento? Indique 'Si' o 'No'")
            if (quiereGiftcard == "Si") {
                alert("Al costo total de su juego le restariamos el 20% de la Gifcard. Por tanto, le quedaria en: $" + precioTotalConGiftcard19)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su juego le vamos a restar el 20% de la Giftcard y le vamos a sumar el envio . Le quedaria en: $" + precioTotalConGiftcardYEnvio19)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, le restamos el 20% de la Giftcard pero NO del envio. Le quedaria en: $" + precioTotalConGiftcard19)
                    alert("¡Muchas gracias por comprar!")
                }
            }
            else if (quiereGiftcard == "No") {
                alert("Okey, su precio sin la Giftcard le quedaria en: $" + precioTotalSinEnvio19)
                quiereEnvio = prompt("¿Quiere envio? Indiquie 'Si' o 'No'. ")
                if (quiereEnvio === "Si") {
                    alert("Al costo total de su juego le vamos a sumar el envio y SIN 20% de la Giftcard. Le quedaria en: $" + precioTotalConEnvio19)
                    alert("¡Muchas gracias por comprar!")
                } else if (quiereEnvio == "No") {
                    alert("Okey, no le restamos el 20% de la Giftcard, ni tampoco del envio. Por tanto, le quedaria en: $" + precioTotalSinEnvio19)
                    alert("¡Muchas gracias por comprar!")
                }
            }
        }
    }

} while (juego !== "ESC") {
    alert("¡Gracias por visitarnos! ¡Vuelva pronto!")
}

//TEMAS DE LA PRIMERA PRE-ENTREGA | ALUMNO: LUCAS CABRAL




// ACA EMPIEZAN LOS TEMAS VISTOS DESDE LA 4TA CLASE A LA 7MA, LO SOLICITADO PARA LA ¡¡¡LA SEGUNDA PRE-ENTREGA!!! ALUMNO: LUCAS CABRAL

//ESTO ES UN APARTADO DONDE DE ENTRE 30 POKEMONS TE SALTA UNO RANDOM Y TE DEJA REPETIR EL PRECIO UNAS 10 VECES CON LA ESPERANZA DE QUE TE TOQUE UNO QUE SEA DE TU AGRADO. 
const pokemones = {
    1: "Pikachu",
    2: "Bulbasaur",
    3: "Charmander",
    4: "Squirtle",
    5: "Mew",
    6: "Arcanine",
    7: "Dragonair",
    8: "Ponyta",
    9: "Clefairy",
    10: "Dragonite",
    11: "Mewtwo",
    12: "Eevee",
    13: "Ekans",
    14: "Raichu",
    15: "Typhlosion",
    16: "Togepi",
    17: "Shuckle",
    18: "Houndoom",
    19: "Latios",
    20: "Cinccino",
    21: "Emolga",
    22: "Virizion",
    23: "Cobalion",
    24: "Keldeo",
    25: "Meloetta",
    26: "Fennekin",
    27: "Meowth",
    28: "Poliwhirl",
    29: "Kadabra",
    30: "Tentacruel"
};

const devolucion = ["Tu pokemon favorito al azar es: \n"]

const resultados = {
    resultado1: "",
    resultado2: "",
    resultado3: "",
    resultado4: "",
    resultado5: "",
    resultado6: "",
    resultado7: "",
    resultado8: "",
    resultado9: "",
    resultado10: ""
};


const numeros = ["PRIMER", "SEGUNDO", "TERCER", "CUARTO", "QUINTO", "SEXTO", "SEPTIMO", "OCTAVO", "NOVENO", "DECIMO y ULTIMO"]

//MATH.RANDOM | MATH.FLOOR | OBJECTS.KEY/VALUE | LENGHT
function mostrarPokemon() {
    let randomPokemon = Math.floor(Math.random() * Object.keys(pokemones).length) + 1;
    let nombrePokemon = pokemones[randomPokemon]
    resultados.resultado1 = devolucion + nombrePokemon;

    let randomPokemon2 = Math.floor(Math.random() * Object.keys(pokemones).length) + 1;
    let nombrePokemon2 = pokemones[randomPokemon2]
    resultados.resultado2 = devolucion + nombrePokemon2;

    let randomPokemon3 = Math.floor(Math.random() * Object.keys(pokemones).length) + 1;
    let nombrePokemon3 = pokemones[randomPokemon3]
    resultados.resultado3 = devolucion + nombrePokemon3;

    let randomPokemon4 = Math.floor(Math.random() * Object.keys(pokemones).length) + 1;
    let nombrePokemon4 = pokemones[randomPokemon4]
    resultados.resultado4 = devolucion + nombrePokemon4;

    let randomPokemon5 = Math.floor(Math.random() * Object.keys(pokemones).length) + 1;
    let nombrePokemon5 = pokemones[randomPokemon5]
    resultados.resultado5 = devolucion + nombrePokemon5;

    let randomPokemon6 = Math.floor(Math.random() * Object.keys(pokemones).length) + 1;
    let nombrePokemon6 = pokemones[randomPokemon6]
    resultados.resultado6 = devolucion + nombrePokemon6;

    let randomPokemon7 = Math.floor(Math.random() * Object.keys(pokemones).length) + 1;
    let nombrePokemon7 = pokemones[randomPokemon7]
    resultados.resultado7 = devolucion + nombrePokemon7;

    let randomPokemon8 = Math.floor(Math.random() * Object.keys(pokemones).length) + 1;
    let nombrePokemon8 = pokemones[randomPokemon8]
    resultados.resultado8 = devolucion + nombrePokemon8;

    let randomPokemon9 = Math.floor(Math.random() * Object.keys(pokemones).length) + 1;
    let nombrePokemon9 = pokemones[randomPokemon9]
    resultados.resultado9 = devolucion + nombrePokemon9;

    let randomPokemon10 = Math.floor(Math.random() * Object.keys(pokemones).length) + 1;
    let nombrePokemon10 = pokemones[randomPokemon10]
    resultados.resultado10 = devolucion + nombrePokemon10;

    let randomPokemon11 = Math.floor(Math.random() * Object.keys(pokemones).length) + 1;
    let nombrePokemon11 = pokemones[randomPokemon11]
    resultados.resultado11 = devolucion + nombrePokemon11;

    let resultadoFinal = Object.values(resultados);


alert("A continuacion te asignaremos un Pokemon al Azar entre 30. Esperemos que te guste alguno.")

    for (let i = 0; i < 10; i++) {
        preguntaRandom = prompt(resultadoFinal[1 + i * 1] + "\n" + "\n¿Te gusta este " + numeros[0 + i * 1] + " Pokemon random que te salio? Indique 'Si' o 'No'."+"\n\nSi elegis que 'Si' termina el ciclo, si apretas que 'No', te asignaremos otro Pokemon RANDOM"+"\n" + "\nSi quieres salir, apreta 'ESC'");

        if (preguntaRandom === "ESC") {
            console.log(preguntaRandom)
            break;
        }
        else if (preguntaRandom === "Si") {
            alert("¡Magnifico! Gracias por participar.");
            console.log(preguntaRandom)
            break;
        } else if (preguntaRandom === "No") {
            alert("Lamentamos que no te haya gustado tu Pokemon random. ¡Vamos! Intentalo de nuevo");
            console.log(preguntaRandom)
        }
        else {
            alert("Por favor, ingresa una respuesta válida.");
            i--;
        }
    }

    if (preguntaRandom !== "Si") {
        alert("El bucle termina aca, lamentamos que no te haya tocado ningun Pokemon random de tu interes. ¡Hasta pronto!\n\nGracias por visitarnos y tomarte un tiempo para interacturar con todas nuestras funcionalidades Web. ¡Es un placer recibir tu vistar!\n¡Estamos a la expectativa de tu regreso!\n\nPikachu, ¡te manda un gran abrazo!");
    }
}
window.onload = mostrarPokemon;




//ESTO SIMULA SER UNA TIENDA ONLINE CON UN CARRITO DE COMPRAS, DONDE VOS ELEGIS LAS PELICULAS QUE QUERES Y VAS AGREGANDOLOS AL CARRITO Y SUMANDOS SUS RESPECTIVOS PRECIOS + IVA. EN CONSOLE.LOG() TE SALTAN TODAS LAS PELICULAS QUE ELGISTE.
const peliculas = [
    { Nombre: "1) Mewtwo Contraataca.", estreno: 1999, duracion: "1:37", precio: 3000 },
    { Nombre: "2) El Poder de uno.", estreno: 2000, duracion: "1:21", precio: 2500 },
    { Nombre: "3) El hechizo de los Unown.", estreno: 2001, duracion: "1:16", precio: 1200 },
    { Nombre: "4) Pokemon x siempre: Celebi, la voz del bosque.", Estreno: 2004, duracion: "1:20", precio: 4000 },
    { Nombre: "5) Heroes Pokemon: Latios y Latias.", estreno: 2004, duracion: "1:15", precio: 2850 },

    { Nombre: "6) Jirachi y los deseos.", streno: 2008, duracion: "1:15", precio: 1566 },
    { Nombre: "7) El destino de Deoxys", estreno: 2008, duracion: "1:15", precio: 3300 },
    { Nombre: "8) Lucario y el misterio de Mew.", estreno: 2008, duracion: "1:15", precio: 2900 },
    { Nombre: "9) Pokemon Ranger y el Templo del Mar.", Estreno: 2009, duracion: "1:15", precio: 1400 },
    { Nombre: "10) El surgimiento de Darkrai.", estreno: 2010, duracion: "1:15", precio: 900 },

    { Nombre: "11) Giratina y el guerro celestial.", estreno: 2010, duracion: "1:15", precio: 1200 },
    { Nombre: "12) Arceus y la joya de la vida.", estreno: 2010, duracion: "1:15", precio: 2100 },
    { Nombre: "13) Blanco - Victini y Zekrom.", estreno: 2012, duracion: "1:45", precio: 1600 },
    { Nombre: "14) Negro - Victini y Reshiram.", estreno: 2013, duracion: "1:37", precio: 1150 },
    { Nombre: "15) Kyurem contra el espadachin mistico.", estreno: 2012, duracion: "1:37", precio: 980},

    { Nombre: "16) Genesect y el despertar de una leyenda.", estreno: 2014, duracion: "1:37", precio: 2350 },
    { Nombre: "17) Diance y la crisalida de la destruccion.", estreno: 2015, duracion: "1:37", precio: 2000 },
    { Nombre: "18) Hoopa y un duelo historico.", estreno: 2016, duracion: "1:37", precio: 1999 },
    { Nombre: "19) Volcanion y la maravilla mecanica.", estreno: 2017, duracion: "1:37", precio: 3800 },
    { Nombre: "20) La pelicula Pokemon: ¡Yo te elijo!.", estreno: 2017, duracion: "1:37", precio: 3950 },
    { Nombre: "21) La pelicula Pokemon: El poder de todos.", estreno: 2019, duracion: "1:37", precio: 3350 },
    { Nombre: "22) Pokemon: Mewtwo contraataca-Evolucion.", estreno: 2020, duracion: "1:37", precio: 4250 },
    { Nombre: "23) La pelicula Pokemon: Los secretos de la selva.", estreno: 2021, duracion: "1:37", precio: 5000 }
]


//MAP
const nombrePelicula = peliculas.map( (el) => el.Nombre)
const peliculass = peliculas.map( (el) => el.precio)
console.log(peliculass)

let pregunta;
let sumaDeNumeros = 0
const capturadorDePrecios = []



while (pregunta !== "Ninguna") {
    pregunta = prompt("¿Que peliculas quieres comprar?\nIndique el numero de las peliculas que quiera comprar, todas se agregaran al carrito con su respectivo precio y se sumaran. \nEscriba 'Ninguna' si quiere salir.\n\n"+nombrePelicula.join("\n"));
    capturadorDePrecios.push(pregunta)
    

    if (pregunta === "1") {
        sumaDeNumeros += peliculas[0].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[0].Nombre+", que tiene un costo de: $"+peliculas[0].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[0].precio*1.21)
    }
    else if (pregunta === "2") {
        sumaDeNumeros += peliculas[1].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[1].Nombre+", que tiene un costo de: $"+peliculas[1].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[1].precio*1.21)

    }
    else if (pregunta === "3") {
        sumaDeNumeros += peliculas[2].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[2].Nombre+", que tiene un costo de: $"+peliculas[2].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[2].precio*1.21)

    }
    else if (pregunta === "4") {
        sumaDeNumeros += peliculas[3].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[3].Nombre+", que tiene un costo de: $"+peliculas[3].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[3].precio*1.21)
    }
    else if (pregunta === "5") {
        sumaDeNumeros += peliculas[4].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[4].Nombre+", que tiene un costo de: $"+peliculas[4].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[4].precio*1.21)
    }
    else if (pregunta === "6") {
        sumaDeNumeros += peliculas[5].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[5].Nombre+", que tiene un costo de: $"+peliculas[5].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[5].precio*1.21)
    }
    else if (pregunta === "7") {
        sumaDeNumeros += peliculas[6].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[6].Nombre+", que tiene un costo de: $"+peliculas[6].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[6].precio*1.21)
    }
    else if (pregunta === "8") {
        sumaDeNumeros += peliculas[7].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[7].Nombre+", que tiene un costo de: $"+peliculas[7].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[7].precio*1.21)
    }
    else if (pregunta === "9") {
        sumaDeNumeros += peliculas[8].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[8].Nombre+", que tiene un costo de: $"+peliculas[8].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[8].precio*1.21)
    }
    else if (pregunta === "10") {
        sumaDeNumeros += peliculas[9].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[9].Nombre+", que tiene un costo de: $"+peliculas[9].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[9].precio*1.21)
    }
    else if (pregunta === "11") {
        sumaDeNumeros += peliculas[10].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[10].Nombre+", que tiene un costo de: $"+peliculas[10].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[10].precio*1.21)
    }
    else if (pregunta === "12") {
        sumaDeNumeros += peliculas[11].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[11].Nombre+", que tiene un costo de: $"+peliculas[11].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[11].precio*1.21)
    }
    else if (pregunta === "13") {
        sumaDeNumeros += peliculas[12].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[12].Nombre+", que tiene un costo de: $"+peliculas[12].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[12].precio*1.21)
    } 
    else if (pregunta === "14") {
        sumaDeNumeros += peliculas[13].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[13].Nombre+", que tiene un costo de: $"+peliculas[13].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[13].precio*1.21)
    }
    else if (pregunta === "15") {
        sumaDeNumeros += peliculas[14].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[14].Nombre+", que tiene un costo de: $"+peliculas[14].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[14].precio*1.21)
    }
    else if (pregunta === "16") {
        sumaDeNumeros += peliculas[15].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[15].Nombre+", que tiene un costo de: $"+peliculas[15].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[15].precio*1.21)
    }
    else if (pregunta === "17") {
        sumaDeNumeros += peliculas[16].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[16].Nombre+", que tiene un costo de: $"+peliculas[16].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[16].precio*1.21)
    }
    else if (pregunta === "18") {
        sumaDeNumeros += peliculas[17].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[17].Nombre+", que tiene un costo de: $"+peliculas[17].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[17].precio*1.21)
    }
    else if (pregunta === "19") {
        sumaDeNumeros += peliculas[18].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[18].Nombre+", que tiene un costo de: $"+peliculas[18].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[18].precio*1.21)
    }
    else if (pregunta === "20") {
        sumaDeNumeros += peliculas[19].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[19].Nombre+", que tiene un costo de: $"+peliculas[19].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[19].precio*1.21)
    }
    else if (pregunta === "21") {
        sumaDeNumeros += peliculas[20].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[20].Nombre+", que tiene un costo de: $"+peliculas[20].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[20].precio*1.21)
    }
    else if (pregunta === "22") {
        sumaDeNumeros += peliculas[21].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[21].Nombre+", que tiene un costo de: $"+peliculas[21].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[21].precio*1.21)
    }
    else if (pregunta === "23") {
        sumaDeNumeros += peliculas[22].precio;
        alert("Usted agrego al carrito de compras la pelicula: "+peliculas[22].Nombre+", que tiene un costo de: $"+peliculas[22].precio+". Pero con el 21% del iva le quedaria en: $"+peliculas[22].precio*1.21)
    }
    else{
        alert("Por favor, ingrese un numero del 1 al 23. ¡Gracias!")
    }
}

//POP Y JOIN
capturadorDePrecios.pop()
console.log("Usted eligio los siguientes articulos: "+capturadorDePrecios.join(", ")+".")
const precioPeliculasConIva = sumaDeNumeros * 1.21

alert("El precio total de las peliculas que eligio, mas el 21% del iva, asciende a: $" + precioPeliculasConIva)
alert("¡Muchas gracias por seguir eligiendonos! ¡Te volvemos a poke-esperar pronto!")
console.log("El total de lo gastado con el 21% del iva incluido es: $" + precioPeliculasConIva+". \nUsted esta comprando las siguientes peliculas: "+capturadorDePrecios.join(", ")+".");




//ESTE ES UN SIMULADOR EN BUCLE DE PELEAS DE POKEMONS. HAY DOS GRUPOS DONDE UN REPRESENTANTE RANDOM DE CADA GRUPO ENFRENTA A UNO DEL OTRO GRUPO, GANA EL QUE MAS FUERZA TENGA. 

//CLASS CONSTRUCTOR, CON THIS Y NEW.
class Pokemon {
    constructor(Nombre, Ataque, Defensa) {
        this.Nombre = Nombre;
        this.Ataque = Ataque;
        this.Defensa = Defensa;
    }
}

//OBJETOS
const grupo1 = [
    new Pokemon("Pikachu", 66, 50),
    new Pokemon("Charmander", 60, 43),
    new Pokemon("Gyarados", 125, 79),
    new Pokemon("Bulbasaur", 44, 49),
    new Pokemon("Zapdos", 106, 86),
    new Pokemon("Solgaleo", 111, 74)
];
const grupo2 = [
    new Pokemon("Mewtwo", 104, 95),
    new Pokemon("Squirtle", 48, 65),
    new Pokemon("Dragonite", 95, 69),
    new Pokemon("Snorlax", 102, 65),
    new Pokemon("Ponyta", 70, 61),
    new Pokemon("Reshiram", 107, 66)
];

let consulta

while (consulta !== "ESC" && consulta !== "No") {
    alert("¡Bienvenido, visitante Pokemon!\nEste es un pequeño simulador de combate de Pokemons, que funciona de la siguiente manera:\n\n1) Hay dos grupos donde un representante RANDOM de cada grupo salta al campo de batallar para pelear.\n2) El ganador sera el Pokemon que mas Ataque tenga.")
    function pelea() {
        const pokemon1 = grupo1[Math.floor(Math.random() * grupo1.length)];
        const pokemon2 = grupo2[Math.floor(Math.random() * grupo2.length)];

        alert("El combate se dara entre: " + pokemon1.Nombre + " vs " + pokemon2.Nombre)
        
        console.log("En esta pelea se enfrentaron: "+ pokemon1.Nombre + " vs " + pokemon2.Nombre);
        const pokemon1Poder = pokemon1.Ataque + pokemon1.Defensa;
        const pokemon2Poder = pokemon2.Ataque + pokemon2.Defensa;

        alert("El ganador de esta emocionante pelea es: " + (pokemon1Poder > pokemon2Poder ? pokemon1.Nombre : pokemon2.Nombre))
        console.log("Ganador: " + (pokemon1Poder > pokemon2Poder ? pokemon1.Nombre : pokemon2.Nombre));

        consulta = prompt("¿Quieres seguir jugando? Indique 'Si', 'No' o 'ESC' para salir.")
        if (consulta == "Si") {
            pelea()
        } 

    }
    pelea();
}

// Opinion de clientes acerca de la experiencia de compra.
function despedida (){
    alert("Y ¡Gracias por habernos visitado! ¡Te esperamos pronto!")
}
let opinion;
do {
    opinion = parseInt(prompt("Puntue del 1 al 10, cuan conforme quedo con la experiencia de navegacion de nuestra Website."))

    if (opinion < 10) {
        alert("¡Gracias por su opinion!")
        console.log(opinion)
    } else if (opinion == 10) {
        alert("¡Muchas gracias! Es un honor que le guste mi website 😀.")
    } else {
        alert("Inserte un numero del 1 al 10, por favor.")
    }

} while (opinion > 11);

despedida();
