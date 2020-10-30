var spanIDs = document.querySelectorAll("span.validacion"); 
// var spanIDs = document.getElementsByClassName("validacion"); 

function checkForm(){

    for (let i = 0; i < spanIDs.length; i++) {
        let elemento = spanIDs[i];

        var inputID = document.getElementById(elemento.id+"-input");
        var inputIDValue = document.getElementById(elemento.id+"-input").value;
        var spanValidacion = document.getElementById(elemento.id);
        
        if(inputIDValue==""){
            inputID.classList.remove("is-valid");
            inputID.classList.add("is-invalid");
            spanValidacion.classList.remove("valido");
            spanValidacion.classList.add("invalido");
            spanValidacion.innerHTML = `Debe ingresar ${elemento.id}`;
        } else{
            inputID.classList.remove("is-invalid");
            inputID.classList.add("is-valid");
            spanValidacion.classList.remove("invalido");
            spanValidacion.classList.add("valido");
            spanValidacion.innerHTML = "Ok";
        }
    }
}





//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(CART_ART_URL).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                article = resultObj.data.articles; //es el atributo a mostrar.

    //** Esto te serviría si fuera un solo elemento, pero en el JSON tenés varios **/
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

   

//********************** */

const dolar = 40;
const currency = "UYU";
var totalFinal = 0;
var costoEnvio = 0;
var envioElegido = 0;
const currencydolar = "USD ";
var totalFinalisimo = 0;

function calculoEnvio(subtotal){

  var x= document.getElementsByName('publicationType');
  for (i=0; x.length;i++){
      if (x[i].checked){
          return subtotal * x[i].value;
      }
  }
}
//********************************************************************* */
function totales(){

    var total=0;
    var subtotal=0;
    var envio=0;
  

    for (i=0; i<article.length; i++){
        subtotal += parseFloat(document.getElementById(i).value * article[i].unitCost); //Calculo los subtotales
    }
    envio=calculoEnvio(subtotal);
    total=subtotal + envio;
    document.getElementById('subTotal').innerHTML=subtotal.toFixed(2);
    document.getElementById('costoEnvio').innerHTML=envio.toFixed(2);
    document.getElementById('finalTotal').innerHTML=total.toFixed(2);
}
//************************************************************************ */

function borrar(posicion){
    article.splice(posicion,1);
    mostrarCarrito(article);
}
//*********************************************************************** */
function cambioSubtotal(i){
    let a = document.getElementById(i).value
    let b = article[i];

    



    b.count = parseInt(a);
    mostrarCarrito(article);
    
}

function change(num1, num2, num3){
    if (num3 === currency){
        num1 = num1/dolar
    }
    return num1 * num2
}
function mostrarCarrito(articulos){ //Bien pero acá debería escribir los artículos.

    let htmlContentToAppend = "";
    for(let i = 0; i < articulos.length; i++){
        let product = articulos[i];
        total1 = change(product.unitCost, product.count, product.currency)
        totalFinal += total1;

        
        htmlContentToAppend += `
                   
        <tr>
        <td class= "align-left" scope="row"> <a href="product-info.html"> <img width=160px img height=160px src="` + product.src + `" alt= " " class="img-thumbnail"></a></td>
        <td class= "align-left" style="font-size: larger;">` + product.name +`</td> 
        <td class= "align-left" style="white-space: nowrap">` + product.currency + ` ` + product.unitCost + `</td>
        <td class= "align-left td"><input style="input-cantidad;" type="number" name="cantidad" id="${i}" onchange="cambioSubtotal(${i})" value="` + product.count +`" min=0 style="width:5ch"></td>
        <td class= "align-left" style="white-space:nowrap" id="calculo${i}">USD `+ total1 + ` </td>
        <td class= "align-left"> <button id="boton-vaciar" class="btn btn-danger" onclick="borrar(${i});">Vaciar</button> </td>
        </tr>
        <div class="cart-totals-value" id="subtotal${i}"></div>
        </div>
        `
    }

    document.getElementById("carrito").innerHTML = htmlContentToAppend;

    totales();
 

}
        
        
    
        function envio() {
            costoEnvio = totalFinal * envioElegido;
            return costoEnvio;
        }

        function sumatoriaTotal(){
            totalFinalisimo = totalFinal + totalFinal * envioElegido;
            return totalFinalisimo;
        }
        
        
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







