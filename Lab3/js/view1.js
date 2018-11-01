var view = {
    getKandB: function() {
        var kInput = document.getElementById("kInput");
        var bInput = document.getElementById("bInput");
        var k = parseInt(kInput.value);
        var b = parseInt(bInput.value);
        return {k,b};
    },

    clearMap: function() {
        var canvas = document.getElementById("canvas2d");
        this.context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
    },

    showMap: function () {
        var canvas = document.getElementById("canvas2d");
        canvas.width= 1000;
        canvas.height=700;
        canvas.style.border = "1px solid green";
        this.context = canvas.getContext("2d");
        this.kInput = document.getElementById("kInput");
        this.bInput = document.getElementById("bInput");
        this.showF1 = document.getElementById("showF1");
        this.showF2 = document.getElementById("showF2");
        this.button = document.getElementById("buttonShow");
        this.onKeyDownEvent = null;
        this.button.addEventListener('click', this.onClickDraw);
        this.context.fillStyle = "#ffffff";
        this.context.fillRect(0, 0, canvas.width, canvas.height);
        
        this.context.beginPath();
        this.context.moveTo(0, canvas.height/2);
        this.context.lineTo(canvas.width, canvas.height/2);
        this.context.strokeStyle = '#111111';
        this.context.stroke();
        
        this.context.beginPath();
        this.context.moveTo(canvas.width/2, 0);
        this.context.lineTo(canvas.width/2, canvas.height);
        this.context.strokeStyle = '#111111';
        this.context.stroke();
    },

    showGrafic: function(grafic,color) {
        
        var canvas = document.getElementById("canvas2d");
        var gr = canvas.getContext("2d");


        var maxCount = 35 + 10;
        var x0 = y0 = canvas.width/2;
        var width = canvas.width;
        var height = canvas.height;
        var stepY = Math.round(height / maxCount);
        var stepX = Math.round(width / 10);

        gr.beginPath();

        var m = 0;
        var x_max = 10;

        gr.lineWidth = 2;
        gr.stroke();
        gr.closePath();

        var nr_color = 0;
        gr.beginPath();
            for (var m in grafic) {
                var xy = grafic[m];
                var x = x0 + xy.x;
                var y = (y0 + xy.y*(-1)-150); 
            
                if (1 == m) 
                    gr.moveTo(x, y); 
                else 
                    gr.lineTo(x, y);
            
                gr.arc(x, y, 1, 0, 1 * Math.PI, false);
            }

            gr.strokeStyle = color; //цвет линии
            nr_color++;	
            gr.lineWidth = 1;//толщина линии		
            gr.stroke();
        
    }
}
