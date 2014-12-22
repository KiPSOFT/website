function fullpage() {
    var $img = $('#fullpage').find('img');
    if ($img.length === 0)
        return;
    var imageWidth = $img[0].width, imageHeight = $img[0].height, maxWidth = $(window).width(), maxHeight = $(window).height(), widthRatio = maxWidth / imageWidth, heightRatio = maxHeight / imageHeight;
    var ratio = widthRatio;

    if (widthRatio * imageHeight > maxHeight)
        ratio = heightRatio;

    $img.attr('width', imageWidth * ratio).attr('height', imageHeight * ratio);
    $('#fullpage').css({ height: imageHeight * ratio });
}

$(document).ready(function() {
    $('.menu').find('a[href="' + window.location.pathname + '"]').addClass('selected');
    $(window).resize(fullpage);
    fullpage();
    $('.menu-button').bind('click', function(e) {
        $('.menu').toggle();
    });
});