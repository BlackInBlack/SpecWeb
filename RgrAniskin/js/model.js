var model = {
    x0 : 500,
    y0 : 500,
    k:0.25,
    b:1,
    checkFirst: true,
    checkSecond: true,
    x: 100,
    n1:1,
    n2:2,
    angel:90,
    angel1:90,
    colors : ['#FFFF00', '#0f0'],
    grafics : {
        g1: [],
        g2: [],
    },
    createGraficsPos: function() {
        this.grafics.g1 = [];
        this.grafics.g2 = [];
        var ox = Number(this.x);
        //var ox = 12;
        var top = 500;
        console.log(this.x);
        
        this.grafics.g1.push({
            x: ox,
            y: top,
        })
        this.grafics.g1.push({
            // x: this.x,
            x: 0,
            y: 0,
        })
        this.grafics.g1.push({
            x: ox,
            y: top,
        })
        this.grafics.g1.push({
            // x: this.x,
            x: 0,
            y: 0,
        })

        this.grafics.g1.push({
            // x: this.x,
            x: 0,
            y: 0,
        })

        var tan = top/ox;
        //alert("tg("+tan+")");
        var a1 =90-Math.abs(Math.atan(tan) / Math.PI * 180);
        this.angel1 = a1;
        //alert("a1= "+a1);
        var sina1 = Math.sin( a1 * (Math.PI / 180));
        //alert("sin(a1)= "+Math.sin( a1 * (Math.PI / 180)));
        var n = this.n2/this.n1;
        console.log("n = " + n);
        var sinb1 = sina1 / (this.n2/this.n1);
        console.log("sin a = " + sina1 + ", sin b = " + sinb1);

        b1 = Math.asin(sinb1);
        
        //alert("sin(b1)= "+sinb1);
        //alert("b1= "+Math.asin(b1) / Math.PI * 180);
        if(ox > 0) {
            this.angel = -Math.asin(b1) / Math.PI * 180;
        } else {
            this.angel = Math.asin(b1) / Math.PI * 180;
        } 
    },

    returnGrafic: function(index) {
        return this.grafics["g"+index];
    },

    returnGraficsColors: function(index) {
        return this.colors[index];
    },

    returnStartPost: function() {
        return {x0,y0};
    },

    setKandB: function(k,b) {
        this.n1 = k;
        this.n2 = b;
    },
    setX: function(val) {
        this.x = Number(val);
    },
};

// module.exports = {
//     model: model
// } 
module.exports = model;

