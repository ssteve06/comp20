var num1, num2;
var div;

function get_nums()
{
  var div = document.getElementById("form");
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  if(num1 == "")
    num1 = 0;
  if(num2 == "")
    num2 = 0;

  if(document.getElementById("display_num"))
    document.getElementById("display_num").remove();
  var display_num = document.createElement("h2");
  display_num.setAttribute("id", "display_num");
  display_num.innerHTML = "Num1: " + num1 + "<br>Num2: " + num2;
  div.appendChild(display_num);
}

function isFactor(num, test)
{
  return num % test == 0;
}

function showFactors(arr)
{
  div = document.getElementById("form");
//  if(document.getElementById("fact"))
  //  document.getElementById("fact").remove();
  var span = document.createElement("span");
  span.setAttribute("id", "fact");
  span.setAttribute("class", "fact");
  span.setAttribute("name", "fact");
  for (var i = 0; i < arr.length; i++)
    span.innerHTML += arr[i] + " ";
  span.innerHTML += "<br>"
  div.appendChild(span);
}

function addFactors(array)
{
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function getFactors(num)
{
  var arr = new Array();
  for(var i = 1; i < num; i++)
    if(num % i == 0)
      arr.push(i);
  return arr;
}


function handler()
{
  get_nums();
  showFactors(getFactors(num1));
  showFactors(getFactors(num2));
  var sum1 = addFactors(getFactors(num1));
  var sum2 = addFactors(getFactors(num2));
  var result = document.createElement("p");
  result.innerHTML = "Sum of factors of num1 is " + sum1;
  result.innerHTML += "<br>Sum of factors of num2 is " + sum2;
  result.innerHTML += "<br>Therefore, numbers " + num1 + " and " + num2 + " are ";
  if(sum2 =! num1 || sum1 != num2)
    result.innerHTML += "not ";
  result.innerHTML += " amicable numbers.";
  div.appendChild(result);
}
