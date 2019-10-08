
function create_form()
{
  var item_names = new Array("Hotdogs", "French Fries", "Drinks");
  var item_price = new Array(3.25, 2.00, 1.50);
  var item_quant = new Array(0, 0, 0);

  var x = document.getElementById("enter");
  var form = document.createElement("form");
  form.setAttribute("action", "");
  form.setAttribute("method", "post");
  form.setAttribute("id", "form");

  heading = document.createElement("h2");
  heading.innerHTML = "Order Form";
  form.appendChild(heading);
  for(var i = 0; i < item_names.length; i++){
  inputelement = document.createElement('input'); // Create Input Field for Name
  inputelement.setAttribute("type", "text");
  inputelement.setAttribute("name", item_names[i]);
  inputelement.setAttribute("placeholder", item_names[i]);
  inputelement.setAttribute("id", item_names[i]);
  form.appendChild(inputelement);
  }

  button = document.createElement("input");
  button.setAttribute("type", "button");
  button.setAttribute("name", "Order");
  button.setAttribute("value", "Order");
  button.setAttribute("id", "button");
  button.addEventListener("click", function()
                         {
                           calc_total(item_names, item_price, item_quant);
                         }
                         );
  form.appendChild(button);
  x.appendChild(form);
}

function calc_total(item_names, item_price, item_quant)
{
  var total_price = 0;
  for(var i = 0; i < item_names.length; i++){
    item_quant[i] = document.getElementById(item_names[i]).value;
    if(item_quant[i] == "")
      item_quant[i] = 0;
    total_price +=  item_quant[i] * item_price[i];
  }
  var div = document.getElementById("display_price");
  div.innerHTML = "";
  var h2 = document.createElement("h2");
  h2.setAttribute("class", "h2");
  h2.innerHTML = "<br>You Ordered...<br>";
  div.appendChild(h2);

  var span = document.createElement("span");
  for (var i = 0; i < item_names.length; i++) {
    span.innerHTML += item_names[i] + ": " + item_quant[i] +
                      " at $" + item_price[i] + " each" + "<br>";
  }
  div.appendChild(span);

  var subtotal = document.createElement("h2");
  subtotal.innerHTML = "Subtotal";
  subtotal.setAttribute("class", "h2");
  div.appendChild(subtotal);
  var subtot = document.createElement("span");
  for (var i = 0; i < item_names.length; i++) {
    subtot.innerHTML += item_price[i] + " * " + item_quant[i] + " = "
                      + item_price[i] * item_quant[i] + "<br>";
  }
  subtot.innerHTML += "subtotal: " + total_price;
  div.appendChild(subtot);

  if(total_price >= 20){
    total_price *= .9;
    var discount = document.createElement("p");
    discount.innerHTML = "You got a 10% discount! Your new total is " + total_price;
    div.appendChild(discount);
  }

  total_price *= 1.0625;
  var tax = document.createElement("h2");
  subtotal.innerHTML = "Tax";
  subtotal.setAttribute("class", "h2");
  div.appendChild(subtotal);
  var tax1 = document.createElement("p");
  tax1.innerHTML = "Mass tax is 6.25% so your final total is ";
  var total = document.createElement("h2");
  total.innerHTML = total_price;
  subtotal.setAttribute("class", "h2");
  div.appendChild(tax1);
  div.appendChild(total);
  //alert(total_price);
}
