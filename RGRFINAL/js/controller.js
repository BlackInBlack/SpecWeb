var controller = {
    cModel: model,
    cView: view,
    handleButtonClick: function() {
        var el = document.getElementById("buttonShow");
        var el1 = document.getElementById("rangeBar");
        var kInput = document.getElementById("kInput");
        var bInput = document.getElementById("bInput");
        var value = el1.value;
        el.onclick = function(e) {
            e = e || window.event;
            var obj = view.getKandB();
            value = el1.value;
            model.setX(value);
            model.setKandB(obj.k,obj.b);
            console.log(value);
            model.createGraficsPos();
            view.showMap();
            view.showGrafic(model.returnGrafic(1),model.returnGraficsColors(0),model.angel); 
            view.showInfo(model.angel1,model.angel);
        };
        
    },

    init: function() {
        this.cModel = model;
        this.cView = view;
        this.handleButtonClick();
        // this.handleCheckboxClick();
        // this.handleRangeChanged();
        this.cView.showMap();
    }
    

};

controller.init();
