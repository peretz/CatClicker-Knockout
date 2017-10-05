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
    this.currentCat = ko.observable(new Cat({
        name: "Pedrito",
        image: "images/cat1.jpg",
        clickCount: 0,
        nicknames: ["Pedrin", "Cosita", "Pirruron"]
    }));

    var self = this;
    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());
