var controller = {
    cModel: 0,
    cView: 0,
    handleButtonClick: function() {
        var el = document.getElementById("buttonShow");
        var el1 = document.getElementById("rangeBar");
        var kInput = document.getElementById("kInput");
        var bInput = document.getElementById("bInput");
        var value = el1.value;
        el.onclick = function(e) {
            console.log(controller);
            e = e || window.event;
            var obj = controller.cView.getKandB();
            value = el1.value;
            controller.cModel.setX(value);
            controller.cModel.setKandB(obj.k,obj.b);
            console.log(value);
            controller.cModel.createGraficsPos();
            controller.cView.showMap();
            controller.cView.showGrafic(controller.cModel.returnGrafic(1),controller.cModel.returnGraficsColors(0),controller.cModel.angel); 
            controller.cView.showInfo(controller.cModel.angel1,controller.cModel.angel);
        };
        
    },

    init: function() {
        this.cModel = model;
        this.cView = view;
        this.handleButtonClick();
        this.cView.showMap();
    },
    init: function(a,b) {
        this.cModel = a;
        this.cView = b;
        this.handleButtonClick();
        this.cView.showMap();
        console.log(this.cModel);
        console.log(this.cView);

    }

    

};

// controller.init();
module.exports = controller;

