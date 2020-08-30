$(function () {
  var container = $("#container");
  var ball = $("#ball");
  var block = $(".block");
  var block1 = $("#block1");
  var block2 = $("#block2");
  var restart_btn = $("#restart_btn");

  var container_width = parseInt(container.width());
  var container_height = parseInt(container.height());
  var block_initial_position = parseInt(block.css("right"));
  var block_initial_height = parseInt(block.css("height"));
  var ball_left = parseInt(ball.css("left"));
  var ball_height = parseInt(ball.height());
  var speed = 10;
  var move_ball_up = false;
  var game_over = false;

  var movement = setInterval(function () {
    if (
      collision(ball, block1) ||
      collision(ball, block2) ||
      parseInt(ball.css("top")) <= 0 ||
      parseInt(ball.css("top")) > container_height - ball_height
    ) {
      stop_game();
    } else {
      var block_current_position = parseInt(block.css("right"));
      //if it move out of container
      if (block_current_position > container_width) {
        //changing pole height before reapprearing
        var new_height = parseInt(Math.random() * 100);
        block1.css("height", block_initial_height + new_height);
        block2.css("height", block_initial_height - new_height);
        block_current_position = block_initial_position;
      }

      block.css("right", block_current_position + speed);
      if (move_ball_up === false) {
        move_ball_down();
      }
    }
  }, 40);

  $(document).on("keydown", function (e) {
    var key = e.keyCode;
    if (key === 32 && move_ball_up === false && game_over === false) {
      move_ball_up = setInterval(up, 50);
    }
  });

  $(document).on("keyup", function (e) {
    var key = e.keyCode;
    if (key === 32) {
      clearInterval(move_ball_up);
      move_ball_up = false;
    }
  });

  function move_ball_down() {
    ball.css("top", parseInt(ball.css("top")) + 5);
  }
  function up() {
    ball.css("top", parseInt(ball.css("top")) - 7);
  }
  function stop_game() {
    clearInterval(movement);
    game_over = true;
    restart_btn.show();
  }

  restart_btn.click(function () {
    location.reload();
  });

  
  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }
});
