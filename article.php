<?php
    require_once "header.php";
    if(isset($_GET['id'])) {
        $article = genericSelect("articoli", ['title' , 'article'], "articleNum=?", [$_GET['id']], $con);
        echo "<div class=\"article\">" .
        "<input hidden type=\"text\" id=\"sectionTitle\" value=\"" . $article ['title'] . "\">" .
        "<div class=\"articleText\">" . $article ['article'] . "</div>" ;
        require_once "comment.php";
        echo "</div>";
        

    } else {
        echo "Impossibile caricare correttamente la pagina.";
    }
    require_once "footer.php";
?>