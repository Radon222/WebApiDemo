
var uri = 'api/products';

$(function () {
    // Send an AJAX request
    var action = 'GetAllProducts';
    $.getJSON(uri + '/' + action)
        .done(function (data) {
            // On success, 'data' contains a list of products.
            $.each(data, function (key, item) {
                // Add a list item for the product.
                $('<li>', { text: formatItem(item) }).appendTo($('#products'));
            });
        });
});

function formatItem(item) {
    return item.Name + ': $' + item.Price;
}

function find() {
    var id = $('#prodId').val();
    var action = 'GetProduct';
    $.getJSON(uri + '/' + action + '/' + id)
        .done(function (data) {
            $('#product').text(formatItem(data));
        })
        .fail(function (jqXHR, textStatus, err) {
            $('#product').text('Error: ' + err);
        });
}
