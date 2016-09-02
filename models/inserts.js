var ServicesModel = require("./services");
var WorkModel = require("./works");

function insertServices() {
    var items = [new ServicesModel({
        name: "walking",
        title: "Прогулочная фотосессия",
        img: "http://unsplash.it/400/400?image=41",
        message: "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:",
        shortMessage: "Прогулочная фотосессия – это фотосессия во время прогулки. И хороша она тем, что ваши фотографии в городе (будь то на улице или в парке) на природе (лес, речка) отличаются от студийных съемок большей естественностью."
    }), new ServicesModel({
        name: "studio",
        title: "Студийная съёмка",
        img: "http://unsplash.it/400/400?image=34",
        message: "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:",
        shortMessage: "Прогулочная фотосессия – это фотосессия во время прогулки. И хороша она тем, что ваши фотографии в городе (будь то на улице или в парке) на природе (лес, речка) отличаются от студийных съемок большей естественностью."
    }), new ServicesModel({
        name: "wedding",
        title: "Свадебная",
        img: "http://unsplash.it/400/400?image=33",
        message: "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:",
        shortMessage: "Прогулочная фотосессия – это фотосессия во время прогулки. И хороша она тем, что ваши фотографии в городе (будь то на улице или в парке) на природе (лес, речка) отличаются от студийных съемок большей естественностью."
    }), new ServicesModel({
        name: "family",
        title: "Семейная",
        img: "http://unsplash.it/400/400?image=35",
        message: "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:",
        shortMessage: "Прогулочная фотосессия – это фотосессия во время прогулки. И хороша она тем, что ваши фотографии в городе (будь то на улице или в парке) на природе (лес, речка) отличаются от студийных съемок большей естественностью."
    }), new ServicesModel({
        name: "children",
        title: "Детская",
        img: "http://unsplash.it/400/400?image=134",
        message: "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:",
        shortMessage: "Прогулочная фотосессия – это фотосессия во время прогулки. И хороша она тем, что ваши фотографии в городе (будь то на улице или в парке) на природе (лес, речка) отличаются от студийных съемок большей естественностью."
    }), new ServicesModel({
        name: "animals",
        title: "Фотосессия животных",
        img: "http://unsplash.it/400/400?image=37",
        message: "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:",
        shortMessage: "Прогулочная фотосессия – это фотосессия во время прогулки. И хороша она тем, что ваши фотографии в городе (будь то на улице или в парке) на природе (лес, речка) отличаются от студийных съемок большей естественностью."
    }), new ServicesModel({
        name: "object",
        title: "Предметная съёмка",
        img: "http://unsplash.it/400/400?image=39",
        message: "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:",
        shortMessage: "Прогулочная фотосессия – это фотосессия во время прогулки. И хороша она тем, что ваши фотографии в городе (будь то на улице или в парке) на природе (лес, речка) отличаются от студийных съемок большей естественностью."
    })];
    for(var servicesModel of items){
        servicesModel.save(function (err) {
            if(err) throw err;
        });
    }
}

function insertWorks() {
    var items = [
        new WorkModel({
            bigImg: "http://unsplash.it/1800/1800?image=175",
            tinyImg: "http://unsplash.it/800/800?image=175"
        }),
        new WorkModel({
            bigImg: "http://unsplash.it/1800/1800?image=12",
            tinyImg: "http://unsplash.it/800/800?image=12"
        }),
        new WorkModel({
            bigImg: "http://unsplash.it/1800/1800?image=57",
            tinyImg: "http://unsplash.it/800/800?image=57"
        }),
        new WorkModel({
            bigImg: "http://unsplash.it/1800/1800?image=89",
            tinyImg: "http://unsplash.it/800/800?image=89"
        }),
        new WorkModel({
            bigImg: "http://unsplash.it/1800/1800?image=45",
            tinyImg: "http://unsplash.it/800/800?image=45"
        })
    ];
    for(var model of items){
        model.save(function (err) {
            if(err) throw err;
        });
    }
}

insertServices();
insertWorks();
