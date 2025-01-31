var questionlist = [
    "Quand à été inventé le terme IA ?", 
    "Qui est considéré comme le père l'IA ?", 
    "Quelle discipline l'IA à elle battu en premier ?: Les échecs ou le go", 
    "En quoi le maching learning diffère de la programmation traditionelle ?", 
    "Quels sont les différents type de maching learning ?",
    "Que permet les algorithmes de cluestering",
    "Quelle valeur chiffré représente l'energie contenu dans les synapses dans un neurone artificiel",
    "Quelle sorte d'algorithme le perceptron utiliser pour se corriger au fil du temps ?"
];

var replist = [
    "En 1956 à la conférence de Dartmouth",
    "Alan Turing",
    "Les échecs en 1996 grace à Deep blue, le champion de go sera battu en 2016 par AlphaGo",
    "Un aglorithme de maching learning ne repose pas sur une suite d'instructions mais sur un apprentissage",
    "Apprentissage supervisé (régression, classification) / appretissage non-supervisé (cluestering, association)",
    "Les algorithmes de cluestering permettent de ...",
    "Le poids représente le voltage d'un synapse dans un neurone artificiel",
    "Le perceptron utilise la rétropropagation pour se corriger, il compare son résultat à celui attendu"];

var iter = 1;

function printRep() {
    document.getElementById("questrep").innerHTML=`${replist[iter-1]}`;

    document.getElementById("repButton").style="display: none;";
    document.getElementById("nextButton").style="display: block;";


}

function nextQuestion() {
    if (questionlist[iter]) {
        document.getElementById("questrep").innerHTML=`Question ${iter+1}: <br> ${questionlist[iter]}`;
        document.getElementById("repButton").style="display: block;";
    }
    else {
        document.getElementById("questrep").style='display: none;'
		document.getElementById("image_fin").style='display: block;'
        document.getElementById("repButton").style="display: none;";

    }
    
    document.getElementById("nextButton").style="display: none;";
    iter += 1;
}

$(document).ready(function() {
    var $window = $(window);
    var target_elements = document.getElementsByClassName("frame");

    function check_visibility() {
        var window_height = $window.height();
        var window_scrolling_distance = $window.scrollTop();
        var window_bottom_pos = window_height + window_scrolling_distance;

        $.each(target_elements, function() {
            manage_appartion($(this), window_scrolling_distance, window_bottom_pos);
        });
    }

    function manage_appartion(element, window_scrolling_distance, window_bottom_pos) {
        var element_height = element.outerHeight();
        var element_top_distance = element.offset().top;
        var element_bottom_pos = element_height + element_top_distance;

        if ((element_bottom_pos >= window_scrolling_distance) &&
            (element_bottom_pos <= window_bottom_pos)) {
            element.addClass('load');
        }
    }

    $window.on('scroll resize', check_visibility);
    $window.trigger('scroll');
});
