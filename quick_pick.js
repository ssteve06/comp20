
// Creates an array of the winning numbers from random
function create_win(){
win_num = new Array();
for (var i = 0; i < 5; i++) {
  win_num.push(parseInt(Math.random() * 48 + 1));
}
win_num.push(parseInt(Math.random() * 18 + 1));
}

//displays the winning array in the html id in the arg
function display_arr()
{
  document.getElementById(arguments[0]).innerHTML = "";

  for (var i = 0; i < arguments[1].length - 2; i++) {
    document.getElementById(arguments[0]).innerHTML +=
    arguments[1][i] + ", ";
  }
  document.getElementById(arguments[0]).innerHTML +=
  arguments[1][arguments[1].length - 2];

  document.getElementById(arguments[0]).innerHTML +=
  "  Lucky Ball: " + arguments[1][arguments[1].length - 1];
}

//sorts the winning array
function sort_arr()
{
  for (var j = 0; j < arguments[0].length - 1; j++) {
    min = arguments[0][j];
    min_index = j;
    for (var i = j; i < arguments[0].length - 1; i++) {
      if(arguments[0][i] < min){
        min = arguments[0][i];
        min_index = i;
      }
    }
      temp = arguments[0][j];
      arguments[0][j] = min;
      arguments[0][min_index] = temp;
  }
}

function deter_pay()
{
  document.getElementById("user_guess").innerHTML = "Your Guess Was";
  document.getElementById("word_prize").innerHTML = "Your Prize is";
  clear_prize_area();
  parse_user();
  sort_arr(user_array);
  display_arr("user_gues", user_array);
  if(win_num[win_num.length - 1] == user_array[user_array.length - 1])
    calc_win_ball();
  else
    calc_win();
}

function parse_user()
{
  user_array = new Array();
  var user_raw = document.getElementById("nums").value;
  var user_lucky_raw = document.getElementById("Lucky Ball").value;
  for (var i = 0; i < 5; i++) {
    user_array.push(parseInt(user_raw));
    if(user_array[user_array.length - 1] < 10)
      user_raw = user_raw.substr(2);
    else
      user_raw = user_raw.substr(3);
  }
  user_array.push(parseInt(user_lucky_raw));
}

function calc_win_ball()
{
  var num_same = deter_same(win_num, user_array);
  print_winning("You got ", "prize_txt1");
  print_winning(num_same, "prize1");
  print_winning(" correct and the the Lucky Number. Therefore, you win ", "prize_txt2");
    if(num_same == 0)
      print_winning("$4");
    else if(num_same == 1)
      print_winning("$6");
    else if(num_same == 2)
      print_winning("$25");
    else if(num_same == 3)
      print_winning("$150");
    else if(num_same == 4)
      print_winning("$5,000");
    else if(num_same == 5)
      print_winning("JackPot! $7,000 a WEEK for life!");
    else
      print_winning("nothing, sorry!");
}

function deter_same()
{
  var num_same = 0;
  var win_temp = arguments[0].slice();
  var user_temp = arguments[1].slice();
  for(var i = 0; i < user_temp.length - 1; i++){
    for(var j = 0; j < win_temp.length - 1; j++)
      if(user_temp[i] == win_temp[j]){
        num_same++;
        user_temp.splice(i, 1);
        win_temp.splice(j, 1);
        i--;
        break;
      }
  }
  return num_same;
}

function print_winning()
{
  if(arguments.length == 1)
    document.getElementById("prize2").innerHTML += arguments[0];
  else
    document.getElementById(arguments[1]).innerHTML += arguments[0];
}

function calc_win()
{
    var num_same = deter_same(win_num, user_array);
    print_winning("You got ", "prize_txt1");
    print_winning(num_same, "prize1");
    print_winning(" correct but not the Lucky Number. Therefore, you win ", "prize_txt2");
    if(num_same == 2)
      print_winning("$3");
    else if(num_same == 3)
      print_winning("$20");
    else if(num_same == 4)
      print_winning("$200");
    else if(num_same == 5)
      print_winning("JackPot! $25,000 a YEAR for life!");
    else
      print_winning("nothing, sorry!");
}

function clear_prize_area()
{
  document.getElementById("prize_txt1").innerHTML = "";
  document.getElementById("prize1").innerHTML = "";
  document.getElementById("prize2").innerHTML = "";
  document.getElementById("prize_txt2").innerHTML = "";
}
