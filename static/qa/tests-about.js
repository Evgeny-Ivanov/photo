suite('Тесты страницы "О себе"', function () {
    test('Должна быть ссылка на страницу услуг', function () {
       assert($('a[href="/prices"]').length);
    });
});