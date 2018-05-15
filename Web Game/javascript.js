var start_btn = $('#start_btn');

start_btn.click(function () {

    start_btn.slideUp();

    //saving dom objects to variables
    var game_area = $('#game_area');
    var ship = $('#ship');
    var asteroid = $('.asteroid');
    var asteroid_1 = $('#asteroid_1');
    var asteroid_2 = $('#asteroid_2');
    var score = $('#score');
    var speed_span = $('#speed');
    var restart_btn = $('#restart_btn');

    //some initial setup 
    var game_area_width = parseInt(game_area.width());
    var game_area_height = parseInt(game_area.height());
    var asteroid_initial_position = parseInt(asteroid.css('right'));
    var asteroid_initial_height = parseInt(asteroid.css('height'));
    var ship_left = parseInt(ship.css('left'));
    var ship_height = parseInt(ship.height());
    var speed = 10;

    //bool declarations
    var go_up = false;
    var score_updated = false;
    var game_over = false;


    var the_game = setInterval(function () {

        if (collision(ship, asteroid_1) || collision(ship, asteroid_2) || parseInt(ship.css('top')) <= 0 || parseInt(ship.css('top')) > game_area_height - ship_height) {

            stop_the_game();

        } else {

            var asteroid_current_position = parseInt(asteroid.css('right'));

            //update the score when the asteroids have passed the ship successfully
            if (asteroid_current_position > game_area_width - ship_left) {
                if (score_updated === false) {
                    score.text(parseInt(score.text()) + 1);
                    score_updated = true;
                }
            }

            //check whether the asteroids went out of the game_area
            if (asteroid_current_position > game_area_width) {
                var new_height = parseInt(Math.random() * 100);

                //change the asteroids height
                asteroid_1.css('height', asteroid_initial_height + new_height);
                asteroid_2.css('height', asteroid_initial_height - new_height);

                //increase speed
                speed += 1;
                speed_span.text(speed);

                score_updated = false;

                asteroid_current_position = asteroid_initial_position;
            }

            //move the asteroids
            asteroid.css('right', asteroid_current_position + speed);

            if (go_up === false) {
                go_down();
            }
        }

    }, 40);

    $(document).on('keydown', function (e) {
        var key = e.keyCode;
        if (key === 39 && go_up === false && game_over === false) {
            go_up = setInterval(up, 50);
        }
    });

    $(document).on('keyup', function (e) {
        var key = e.keyCode;
        if (key === 39) {
            clearInterval(go_up);
            go_up = false;
        }
    });


    function go_down() {
        ship.css('top', parseInt(ship.css('top')) + 6);
    }

    function up() {
        ship.css('top', parseInt(ship.css('top')) - 12);
    }

    function stop_the_game() {
        clearInterval(the_game);
        game_over = true;
        restart_btn.slideDown();
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

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2){
            return false;
        } 
        return true;
    }



});