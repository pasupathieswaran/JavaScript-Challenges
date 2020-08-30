function fun() {
  var to = document.getElementById("total").value;
  var inp1 = document.getElementById("inp1").value;
  var inp2 = document.getElementById("inp2").value;
  var inp3 = document.getElementById("inp3").value;
  var inp4 = document.getElementById("inp4").value;
  var tot = parseInt(to);
  var in1 = parseInt(inp1);
  var in2 = parseInt(inp2);
  var in3 = parseInt(inp3);
  var in4 = parseInt(inp4);
  if (isNaN(inp1) || isNaN(inp2) || isNaN(inp3) || isNaN(inp4) || isNaN(to)) {
    alert("Please enter numeric values");
  }
  var value;
  var i = 0;
  if (in1 >= 0) {
    i++;
  }
  if (in2 >= 0) {
    i++;
  }
  if (in3 >= 0) {
    i++;
  }
  if (in4 >= 0) {
    i++;
  }

  if (i == 3) {
    if (in2 >= 0 && in3 >= 0 && in4 >= 0) {
      value = tot - (in2 + in3 + in4);
      document.getElementById("inp1").value = value;
    } else if (in1 >= 0 && in3 >= 0 && in4 >= 0) {
      value = tot - (in1 + in3 + in4);
      document.getElementById("inp2").value = value;
    } else if (in1 >= 0 && in2 >= 0 && in4 >= 0) {
      value = tot - (in1 + in2 + in4);
      document.getElementById("inp3").value = value;
    } else if (in1 >= 0 && in2 >= 0 && in3 >= 0) {
      value = tot - (in1 + in2 + in3);
      document.getElementById("inp4").value = value;
    }
    console.log(value);
  }
}
