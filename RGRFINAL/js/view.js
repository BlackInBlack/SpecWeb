var view = {
    a:90,
    b:90,
    getKandB: function() {
        var kInput = document.getElementById("kInput");
        var bInput = document.getElementById("bInput");
        var k = Number(kInput.value);
        var b = Number(bInput.value);
        return {k,b};
    },

    clearMap: function() {
        var canvas = document.getElementById("canvas2d");
        this.context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
    },

    showMap: function () {
        var canvas = document.getElementById("canvas2d");
        canvas.width= 800;
        canvas.height=800;
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
        this.context.fillStyle = "#000000";
        this.context.fillRect(0, 0, canvas.width, canvas.height/2);
        this.context.fillStyle = "#00BFFF";
        this.context.fillRect(0, canvas.height/2, canvas.width, canvas.height/2);
        this.context.beginPath();
        this.context.moveTo(0, canvas.height/2);
        this.context.lineTo(canvas.width, canvas.height/2);
        this.context.strokeStyle = '#FFFFFF';
        this.context.stroke();
        
        this.context.beginPath();
        this.context.moveTo(canvas.width/2, 0);
        this.context.lineTo(canvas.width/2, canvas.height);
        this.context.strokeStyle = '#FFFFFF';
        this.context.stroke();
        
    },

    showInfo: function (angle1,angle2) {
        document.getElementById('a1').value = Math.abs(angle1);
        document.getElementById('b1').value = Math.abs(angle2);
    },

    showGrafic: function(grafic,color,angle) {
        
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
        var prev_x, prev_y;
        gr.beginPath();
            for (var m in grafic) {
                var xy = grafic[m];
                var x = x0 + xy.x;
                var y = (y0 + xy.y*(-1)); 
                console.log(x,y);
                if (1 == m) 
                {
                    gr.moveTo(x, y);
                    prev_x = x;
                    prev_y = y;
                } 
                else {
                    gr.quadraticCurveTo(x, y,prev_x,prev_y);
                }
                    
                prev_x = x;
                prev_y = y;
                //gr.arc(x, y, 1, 0, 1 * Math.PI, false);
            }
            var r= 500;
            var theta = (90-angle) * (Math.PI / 180);
            gr.lineTo(prev_x + r * Math.cos(theta), prev_y + r * Math.sin(theta));
            gr.strokeStyle = color; //цвет линии
            nr_color++;	
            gr.lineWidth = 4;//толщина линии	
            
            gr.stroke();
            gr.stroke();
            
            gr.lineCap = "round"; 
        
    }
}
