//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(CART_ART_URL).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                article = resultObj.data.articles; //es el atributo a mostrar.

    //**** Esto te serviría si fuera un solo elemento, pero en el JSON tenés varios ****/
               /* let articleNameHTML  = document.getElementById("articleName");
                let articleCountHTML = document.getElementById("articleCount");
                let articleUnitCostHTML = document.getElementById("articleUnitCost")
                let articleCurrencyHTML = document.getElementById("articleCurrency");*/
                
            
                /*articleNameHTML.innerHTML = articles.name;
                articleCountHTML.innerHTML = articles.count;
                articleUnitCostHTML.innerHTML = articles.unitCost;
                articleCurrencyHTML.innerHTML = articles.currency;*/
              
    
                //Muestro las imagenes en forma de galería
                mostrarCarrito(article);   //Muy bueno. La función puede ser similar a la que 
                //usaste para products. Debe recorrer el array e ir mostrandolas.
            }
        });
    });

   

//****************************************************************** */

const dolar = 40
const currency = "UYU"
var totalFinal = 0
var envioElegido = 0

function cambioSubtotal(i){
    let a = document.getElementById(i).value
    let b = article[i];

    b.count = parseInt(a);
    mostrarCarrito(article);
    sumatoriaTotal();
}

function change(num1, num2, num3){
    if (num3 === currency){
        num1 = num1/dolar
    }
    return num1 * num2
}


function mostrarCarrito(articulos){

    let htmlContentToAppend = "";
    for(let i = 0; i < articulos.length; i++){
        let product = articulos[i];
        total = change(product.unitCost, product.count, product.currency)
        totalFinal += total;

        
document.getElementById("goldradio").addEventListener("click", function(){
    envioElegido = document.getElementById("goldradio").value;
    sumatoriaTotal();
})
document.getElementById("premiumradio").addEventListener("click", function(){
    envioElegido = document.getElementById("premiumradio").value;
    sumatoriaTotal();
})

document.getElementById("standardradio").addEventListener("click", function(){
    envioElegido = document.getElementById("standardradio").value;
    sumatoriaTotal();
})


function sumatoriaTotal(){
    totalFinal = totalFinal + totalFinal * envioElegido;
    document.getElementById("finaltotal").innerHTML = totalFinal;

}

            htmlContentToAppend += `
       
             
            <tr class="thead-light">
            <th> </th>
            <th>Artículo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            </tr>
            <tr>
            <td class= "align-left" scope="row"> <a href="product-info.html"> <img width=160px img height=160px src="` + product.src + `" alt= " " class="img-thumbnail"></a></td>
            <td class= "align-left" style="font-size: larger;">` + product.name +`</td> 
            <td class= "align-left" style="white-space: nowrap">` + product.currency + ` ` + product.unitCost + `</td>
            <td class= "align-left td"><input style="input-cantidad;" type="number" name="cantidad" id="${i}" onchange="cambioSubtotal(${i})" value="` + product.count +`" min=0 style="width:5ch"></td>
            <td class= "align-left" style="white-space:nowrap" id="calculo${i}">USD `+ total + ` </td>
            <td class= "align-left"> <button id="boton-vaciar" class="btn btn-danger">Vaciar</button> </td>
            </tr>
            <div class="cart-totals-value" id="subtotal${i}"></div>
            </div>

                 
                
                        
      
            `
        }

        document.getElementById("carrito").innerHTML = htmlContentToAppend;
        document.getElementById("subtotal").innerHTML = totalFinal;
    
}