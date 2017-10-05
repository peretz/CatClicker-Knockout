var initialCats = [
    {
        "name" : "Pedrito",
        "image" : "images/cat1.jpg",
        "clickCount" : 0,
        "nicknames": ["Pedrin", "Cosita", "Pirruron"]
    },
    {
        "name" : "Juanito",
        "image" : "images/cat2.jpg",
        "clickCount" : 0,
        "nicknames": ["Juanjo", "Juanin"]
    },
    {
        "name" : "Luis",
        "image" : "images/cat3.jpg",
        "clickCount" : 0,
        "nicknames": ["Luigi", "Luisin"]
    },
    {
        "name" : "Mario",
        "image" : "images/cat4.jpg",
        "clickCount" : 0,
        "nicknames": ["Mariuchis"]
    },
    {
        "name" : "Chuchito",
        "image" : "images/cat5.jpg",
        "clickCount" : 0,
        "nicknames": ["Jesusin"]
    },
    {
        "name" : "Kevin",
        "image" : "images/cat6.jpg",
        "clickCount" : 0,
        "nicknames": ["Kevincin", "Vincho"]
    }
]

var Cat = function(cat) {
    this.name = ko.observable(cat.name);
    this.image = ko.observable(cat.image);
    this.clickCount = ko.observable(cat.clickCount);
    this.nicknames = ko.observableArray(cat.nicknames);

    this.maturity = ko.computed(function() {
        if (this.clickCount() < 5) {
            return "Infant";
        }
        else if (this.clickCount() >= 5 && this.clickCount() < 10) {
            return "Pubert";
        }
        else if (this.clickCount() >= 10 && this.clickCount() < 15) {
            return "Teen";
        }
        else if (this.clickCount() >= 15 && this.clickCount() < 20) {
            return "Adult";
        }
        else {
            return "Elder";
        }
    }, this);
}

var ViewModel = function() {

    this.listOfCats = ko.observableArray([]);

    var self = this;
    initialCats.forEach(function(catEntry) {
       self.listOfCats.push(new Cat(catEntry)); 
    });

    this.currentCat = ko.observable(this.listOfCats()[0]);

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.setCurrentCat = function(selectedCat) {
        self.currentCat(selectedCat);
    };
}

ko.applyBindings(new ViewModel());
