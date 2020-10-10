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
function mostrarCarrito(articulos){

    let htmlContentToAppend = "";
    for(let i = 0; i < articulos.length; i++){
        let product = articulos[i];

            htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + product.src + `"  class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ product.name +`</h4>
                            
                        </div>
                       
                        <br>
                        <h4 class="mb-1">` + product.currency + ` ` + product.unitCost + `</h4>
                        </div>
                </div>
            </a>
            `
        }

        document.getElementById("carrito").innerHTML = htmlContentToAppend;
    
}