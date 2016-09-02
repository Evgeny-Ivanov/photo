function addEventListenerSubmit(formSelector) {
    var form = $(formSelector)[0];
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var duration = 4000;
        var formData = new FormData(form);
        $.ajax({
            type: "POST",
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            url: location.pathname,
            data: formData,
            success: function (data) {
                Materialize.toast('Форма успешно отправлена!', duration);
                form.reset();
                Materialize.updateTextFields()
            },
            error:  function(xhr, str){
                Materialize.toast('Возникла ошибка', duration);
            }
        });
    });
}
