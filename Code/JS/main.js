$(document).ready(function() {
    var $window = $(window);
    var target_elements = $('.frame');

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
            (element_top_distance <= window_bottom_pos)) {
            element.addClass('load');
        }
    }

    $window.on('scroll resize', check_visibility);
    $window.trigger('scroll');
});
