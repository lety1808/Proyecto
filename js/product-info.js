//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var product = {};

var relatedProduct = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Muestro los prod relacionados del array (relatedProducts) de indo del prod y el JSON de Productos

function showRelatedProducts(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++) {
        var relIn = array[i];
        var relProduct = relatedProduct[relIn];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + relProduct.imgSrc + `" alt="">    
                <h4 class="mb-1">`+ relProduct.name +`</h4>
                <a href="product-info.html">Más información</a>
                </div>
        </div>
        `
    }
    document.getElementById("relatedProducts").innerHTML = htmlContentToAppend;
}

function showStars(stars){

    let estrellitas  = "";

    for(let i = 0; i < stars; i++){
        estrellitas += `<span style="font-size: 30px; color:orange;">★</span>`
    }
    for(let i = stars; i < 5; i++){
        estrellitas += `<span style="font-size: 30px; color: grey;">★</span>`
    }
    return estrellitas
}

// muestro los comentarios 
function showComments(array){
    
    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        var comment = array[i];
    
        htmlContentToAppend += `
        <table style="width:100%">
  
            <tr>
                <th><b>`+ comment.user +`</b>`+ ` ` + showStars(parseInt(comment.score)) +`</th>
            </tr>
            <tr>
                <td><i>`+ comment.description +`</i></td>
            </tr>
            <tr>
                <td><small>`+ comment.dateTime +`</small></td>
            </tr>
        </table>
        <br><br><br><br>
        `
    }
        document.getElementById("comments").innerHTML = htmlContentToAppend;
}


var comments= [];

function guardar(){
    var comment = {};
    var usuario = document.getElementById("userComentario").value;
    var descripcion = document.getElementById("descripcionComentario").value;
    var puntuacion = document.getElementById("puntuacion").value;
    
    usuario = comment.user;
    descripcion = comment.description;
    puntuacion = comment.score;
   

    comments.push(comment);
    mostrar(comments);
}

function mostrar(comments){
    var commentlist= `<dl>`;

    for(i=0; i<comments.length; i++){
        let comment = comments[i];

    commentlist+= `<dt>  ` + comment.user + `</dt>
    <dd> ` + comment.description + `</dd>
    <dd> Valoración: ` + comment.score + `.</dd> <hr>`
    }

    commentlist += `</dl>`;

    document.getElementById("listaComentarios").innerHTML=commentlist;
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productPriceHTML = document.getElementById("productPrice")
            let productCountHTML = document.getElementById("productsoldCount");
            let productCategoryHTML = document.getElementById("productCategory");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productPriceHTML.innerHTML = product.currency + " " + product.cost;
            productCountHTML.innerHTML = product.soldCount;
            productCategoryHTML.innerHTML = product.category;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        }
    });
});

 //Se carga el JSON de los productos para mostrar los relacionados dentro
 getJSONData(PRODUCTS_URL).then(function(resultObj){
    if (resultObj.status === "ok") { relatedProduct = resultObj.data; }

    //Muestra los productos relacionados
    showRelatedProducts(product.relatedProducts);
});




//contamos con un conjunto de imagenes dentro del json
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
if (resultObj.status === "ok"){
    comments = resultObj.data;
    mostrar(comments);
}
    }) });