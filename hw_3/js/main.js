const form = $('#price-form');
let formData = form.serializeJSON();
console.log(formData);

show_hide_blocks();

form.on('keyup change', 'input', function(){ //input + select textarea
    formData = form.serializeJSON();
    show_hide_blocks();
    formData = form.serializeJSON();
    console.log(formData);

    $('#total-price').text(count_price(formData));
});

function show_hide_blocks() {
    if (formData.type == 'site') {
        $('[data-name = "pages"]').show();
        $('[data-name = "landing"]').hide();
        $('[name="sections"]').val('');
    }
    else if (formData.type == 'landing') {
        $('[data-name = "landing"]').show();
        $('[data-name = "pages"]').hide();
        $('[name="pages-unique"]').val('');
        $('[name="pages-general"]').val('');
    }
    if (formData.mobile == 'on') {
        $('[data-name="mobile"]').show();
    }
    else {
        $('[data-name="mobile"]').hide();
        $('[name="mobile-number"]')[0].checked = true;
        $('[name="mobile-number"]')[1].checked = false;
        $('[name="mobile-number"]')[2].checked = false;
    }
}
function count_price(formData) {
    let price = 0;
    price = 4000*formData['pages-unique'] + 2500*formData['pages-general'] + 2000*formData['sections'] + 
    1200*formData['carousel'] + 900*formData['modals'] + 1500*formData['forms'];
    if ($('[name="mobile-number"]')[1].checked == true) {
        price *= 1.3;
    }
    if ($('[name="mobile-number"]')[2].checked == true) {
        price *= 1.5;
    }
    if (formData['pixelPerfect'] == 'on') {
        price *= 1.2;
    }
    if (formData['retinaReady'] == 'on') {
        price *= 1.2;
    }
    if (formData['googlePageSpeed'] == 'on') {
        price *= 1.2;
    }
    if (formData['urgentOrder'] == 'on') {
        price *= 1.5;
    }
    return price;
}