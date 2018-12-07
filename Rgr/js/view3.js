var view = {
    getKandB: function() {
        var kInput = document.getElementById("kInput");
        var bInput = document.getElementById("bInput");
        var k = parseInt(kInput.value);
        var b = parseInt(bInput.value);
        return {k,b};
    },

    clearMap: function() {
        var svg = document.getElementById("svg");
        map.innerHTML ="";
    },

    showMap: function () {
        this.clearMap();
        var map = document.getElementById("map");
        var main = document.getElementById("main");
        var svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
        svg.setAttribute("viewBox","0 0 1000 1000");
        svg.setAttribute("width","1000px");
        svg.setAttribute("height","700px");
        svg.id = "svgMain";
        svg.className= "svg";
        //svg.innerHTML = "<polyline points='0,100 50,25 50,75 100,0' />"
        map.appendChild(svg);

        var p = document.createElementNS("http://www.w3.org/2000/svg",'polyline');
        p.setAttribute("fill","none");
        p.setAttribute("stroke","#0074d9");
        p.setAttribute("stroke-width","1");
        p.setAttribute("points","0,0 0,1000 1000,1000 1000,0 0,0 500,0 500,1000 1000,1000 1000,500 0,500 ");
        svg.appendChild(p);
    },

    showGrafic: function(grafic,color) {
        var svg = document.getElementById('svgMain');
        var maxCount = 35 + 10;
        var x0 = y0 = 1000;
        var width = 1000;
        var height = 700;
        var stepY = Math.round(height / maxCount);
        var stepX = Math.round(width / 10);

        var m = 0;
        var x_max = 10;


        var nr_color = 0;
        var p = document.createElementNS("http://www.w3.org/2000/svg",'polyline');
        p.setAttribute("fill","none");
        p.setAttribute("stroke",color);
        p.setAttribute("stroke-width","1");
        var points="";
            for (var m in grafic) {
                var xy = grafic[m];
                var x =  parseInt(x0 + xy.x -500);
                var y =  parseInt((y0 + xy.y*(-1)-500),10); 
                points+=x+","+y+" ";
            }
        p.setAttribute("points",points);
        svg.appendChild(p);
        
    }
}
