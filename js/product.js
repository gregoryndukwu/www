window.onload = function(){

const urlParams = new URLSearchParams(window.location.search);
const product_Number = urlParams.get('product_Number');
const qt_stock = urlParams.get('qt_stock');
const name = urlParams.get('name');
const supplier = urlParams.get('supplier');
const unit_price = urlParams.get('unit_price');
const dt_supplied = urlParams.get('dt_supplied');

document.getElementById("product_number").innerHTML = product_Number;
document.getElementById("qtd_stock").innerHTML = qt_stock;
document.getElementById("name").innerHTML = name;
document.getElementById("supplier").innerHTML = supplier;
document.getElementById("unit").innerHTML = unit_price;
document.getElementById("dt_supplied").innerHTML = dt_supplied;


}    