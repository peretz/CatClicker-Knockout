var ViewModel = function() {

    this.name = ko.observable("Pedrito");
    this.image = ko.observable("images/cat1.jpg");
    this.clickCount = ko.observable(0);
    this.nicknames = ["Pedrin", "Cosita", "Pirruron"];

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

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());
