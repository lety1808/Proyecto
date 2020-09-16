//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var product = {};

//var relatedProduct = {};

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

