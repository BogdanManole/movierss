$.get('/list/watchlist', function (data) {
    var list_id = $(data).find('.export').html().match(/ur\d+/)
    $.post('/list/_ajax/edit', 'public=YES&action=privacy&list_id=' + list_id).done(function () {
        alert('Watchlist ID: ' + list_id);
    });
});
