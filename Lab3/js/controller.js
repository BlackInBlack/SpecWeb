var controller = {

    handleButtonClick: function() {
        var el = document.getElementById("buttonShow");
        el.onclick = function(e) {
            e = e || window.event;
            var obj = view.getKandB();
            model.setKandB(obj.k,obj.b);
            model.createGraficsPos();
            view.showMap();
            view.showGrafic(model.returnGrafic(1),model.returnGraficsColors); 
            view.showGrafic(model.returnGrafic(2),model.returnGraficsColors);
        };
        
    },

    handleCheckboxClick: function() {
        var el1 = document.getElementById("showF1");
        var el2 = document.getElementById("showF2");
        
        el1.onclick = function(e) {
            e = e || window.event;
            model.checkFirst = !model.checkFirst;
        };
        el2.onclick = function(e) {
            e = e || window.event;
            model.checkSecond= !model.checkSecond;
        };
    },

    init: function() {
        this.handleButtonClick();
        this.handleCheckboxClick();
    }
    

};

controller.init();
