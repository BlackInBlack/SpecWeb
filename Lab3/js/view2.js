var view = {
    getKandB: function() {
        var kInput = document.getElementById("kInput");
        var bInput = document.getElementById("bInput");
        var k = parseInt(kInput.value);
        var b = parseInt(bInput.value);
        return {k,b};
    },

    clearMap: function() {
        var map = document.getElementById("map");
        map.innerHTML ="";
    },

    showMap: function () {
        this.clearMap();
        var map = document.getElementById("map");
        //map.innerHTML = "";
        map.style.width= "1000px";
        map.style.height="700px";
        map.style.margin="auto";
        map.style.position="relative";
        map.style.border = "1px solid green";
        map.style.overflow = "hidden";

        var gor = document.createElement('div');
        var ver = document.createElement('div');
        //gor.style.width = "1px";
        gor.style.height = "700px";
        gor.style.border = "1px solid green";
        gor.style.margin= "auto";
        gor.style.position="absolute";
        gor.style.left="500px";

        ver.style.width = "1000px";
        //ver.style.height = "1px";
        ver.style.border = "1px solid green";
        ver.style.margin= "auto";
        ver.style.position="absolute";
        ver.style.top="350px";

        map.appendChild(gor);
        map.appendChild(ver);
    },

    showGrafic: function(grafic,color) {
        var map = document.getElementById("map");
        var maxCount = 35 + 10;
        var x0 = y0 = 500;
        var width = map.width;
        var height = map.height;
        var stepY = Math.round(height / maxCount);
        var stepX = Math.round(width / 10);

        var m = 0;
        var x_max = 10;


        var nr_color = 1;

            for (var m in grafic) {
                var xy = grafic[m];
                var x = x0 + xy.x;
                var y = (y0 + xy.y*(-1)-150); 
                var point = document.createElement('div');
                point.className="dot";
                point.style.position = "absolute";
                point.style.backgroundColor = color;
                var pos_x,pos_y;
                pos_x = x+'px';
                pos_y = y+'px';
                point.style.left = pos_x;
                point.style.top = pos_y;
                map.appendChild(point);
            }

            nr_color++;	

        
    }
}
