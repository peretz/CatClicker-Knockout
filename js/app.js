var ViewModel = function() {

    this.name = ko.observable("Pedrito");
    this.image = ko.observable("images/cat1.jpg");
    this.clickCount = ko.observable(0);

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());
