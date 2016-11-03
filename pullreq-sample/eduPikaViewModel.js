var eduPikaViewModel = {
    count: ko.observable(0),
    addCount: function () {
        this.count(this.count() + 1);
    }
};

ko.applyBindings(eduPikaViewModel);
