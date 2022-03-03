window.onload = function(){

const urlParams = new URLSearchParams(window.location.search);
const product_Number = urlParams.get('product_Number');
const qt_stock = urlParams.get('qt_stock');
const name = urlParams.get('name');
const supplier = urlParams.get('supplier');
const unit_price = urlParams.get('unit_price');
const dt_supplied = urlParams.get('dt_supplied');


const pop = function(){
    newpopupWindow = window.open ('', 'pagina', "width=350 height=350 top=250 left=450 titlebar=Products");
    newpopupWindow.document.write ("<p>Product Number:" + product_Number +"</p>");
    newpopupWindow.document.write ("<p>Quantity In Stock :" + qt_stock +"</p>");
    newpopupWindow.document.write ("<p>Name :" + name +"</p>");
    newpopupWindow.document.write ("<p>Supplier :" + supplier +"</p>");
    newpopupWindow.document.write ("<p>Unit Price :" + unit_price +"</p>");
    newpopupWindow.document.write ("<p>Date Supplied :" + dt_supplied +"</p>");
}


pop();

document.getElementById("product_number").innerHTML = product_Number;
document.getElementById("qtd_stock").innerHTML = qt_stock;
document.getElementById("name").innerHTML = name;
document.getElementById("supplier").innerHTML = supplier;
document.getElementById("unit").innerHTML = unit_price;
document.getElementById("dt_supplied").innerHTML = dt_supplied;



}    

function reset(){
    alert('test')
    document.getElementById('form1').reset();
}


function cancel() {
    alert('test')
    let text;
    if (confirm("Are you Sure / Want Cancel ?") == true) {
        window.location.href = "./emailForm.html";
    } else {
        document.getElementById("product_Number").focus();
    }
    
}  