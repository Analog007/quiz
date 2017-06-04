<?php include_once('array.php'); ?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Quizz app</title>
        <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Open+Sans|Helvetica+Neue' type='text/css'>
        <link rel="stylesheet" href="includes/bootstrap/css/bootstrap.min.css" type="text/css">
        <link rel="stylesheet" href="includes/fontawesome/css/font-awesome.min.css" type="text/css">
        <link rel="stylesheet" href="skin/default/css/default.css" type="text/css">
    </head>
    <body>
        <main class="container module-quiz">
            <h2>
                Which Greenpeace Campaign Are You?
                <small>How will you be saving the world today?</small>
            </h2>
            <div class="module-quiz-content">
                <?php foreach ($categories as $item) {
                    if($item["type"] == 'grid'){
                        include('view/grid.php');
                    } else {
                        include('view/list.php');
                    }
                } ?>
            </div>
            <div class="module-quiz-result">

            </div>
        </main>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="includes/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.5.3/modernizr.min.js" type="text/javascript"></script>
        <script src="js/app.js"></script>
        <script type="text/javascript">
            $(function(){
                /*load the app*/
//                $('.module-quiz-content').quiz();
            })
        </script>
    </body>
</html>
