fetch("https://api.escuelajs.co/api/v1/products")
.then(function(response) {
return response.json(); // convert JSON -> object
})
.then(function(data) {
const productsDiv = document.getElementById("products");


data.forEach(function(p) {
productsDiv.innerHTML += `
<div>
<img src="${p.images[0]}" width="150">
<h3>${p.title}</h3>
<p>Giá: ${p.price}$</p>
<p>Danh mục: ${p.category.name}</p>
<hr>
</div>
`;
});
})
.catch(function(error) {
console.log(error);
});