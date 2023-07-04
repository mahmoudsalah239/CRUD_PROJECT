var ProductNameInput = document.getElementById("ProductName");
var ProductPriceInput = document.getElementById("ProductPrice");
var ProductCatogeryInput = document.getElementById("ProductCatogery");
var ProductDescriptionInput = document.getElementById("ProductDescription");
var updateindex;

var productContainer = [];
if (localStorage.getItem("products") != null) {
    productContainer = JSON.parse(localStorage.getItem("products"));

    displayProducts();
}



function addProduct() {
    var ProductItem = {
        name: ProductNameInput.value,
        price: ProductPriceInput.value,
        catogery: ProductCatogeryInput.value,
        description: ProductDescriptionInput.value,
    }
    if (document.getElementById("mainBtn").innerHTML == "update") {
        productContainer.splice(updateindex, 1, ProductItem);
        document.getElementById("mainBtn").innerHTML = "addproduct"
    }
    else {
        if (ProductNameInput.value != "" && ProductPriceInput.value != "" && ProductCatogeryInput.value != "" && ProductDescriptionInput.value != "") {

            productContainer.push(ProductItem);
        }
        else {
            ProductNameInput.style.borderColor = "red";
            ProductPriceInput.style.borderColor = "red";
            ProductCatogeryInput.style.borderColor = "red";
            ProductDescriptionInput.style.borderColor = "red";
        }


    }
    localStorage.setItem("products", JSON.stringify(productContainer));
    displayProducts();
    clearForm();
}

function clearForm() {
    ProductNameInput.value = ""
    ProductPriceInput.value = "";
    ProductCatogeryInput.value = "";
    ProductDescriptionInput.value = "";
}

function displayProducts() {
    var cartona = '';

    for (let i = 0; i < productContainer.length; i++) {
        cartona += `       
         <tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].catogery}</td>
        <td>${productContainer[i].description}</td>
        <td><button onclick="updateProuct(${i})" class="btn btn-outline-warning">update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button></td>
    </tr>`
    }
    document.getElementById("tableBody").innerHTML = cartona;
}

function deleteProduct(index) {
    productContainer.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(productContainer));
    displayProducts();

}

function searchProuct(term) {
    var cartona = '';
    for (let i = 0; i < productContainer.length; i++) {
        if (productContainer[i].name.toLowerCase().includes(term.toLowerCase())) {
            cartona += `       
                 <tr>
                <td>${i}</td>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].catogery}</td>
                <td>${productContainer[i].description}</td>
                <td><button onclick="updateProuct(${i})" class="btn btn-outline-warning">update</button></td>
                <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button></td>
            </tr>`

        }
        document.getElementById("tableBody").innerHTML = cartona;

    }
}



function updateProuct(i) {
    ProductNameInput.value = productContainer[i].name;
    ProductPriceInput.value = productContainer[i].price;
    ProductCatogeryInput.value = productContainer[i].catogery;
    ProductDescriptionInput.value = productContainer[i].description;
    updateindex = i;
    document.getElementById("mainBtn").innerHTML = "update";
    scrollToSection()


}


function scrollToSection() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}