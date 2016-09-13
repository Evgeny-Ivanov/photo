suite('Тесты общие для всех страниц', function () {
    test('У данной страницы допустимый заголовок', function () {
       assert(document.title &&
           document.title.toUpperCase() !== "TODO" &&
           document.title !== "Title");
    });

    test('Страница не должна содерать текста c чужого сайта', function () {
        assert(!~document.body.textContent.indexOf("Bulenkov.pro"));
    });
});