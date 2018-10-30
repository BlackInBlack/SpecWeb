var model = {
    x0 : 500,
    y0 : 500,
    k:0.25,
    b:1,
    checkFirst: true,
    checkSecond: true,
    colors : ['#f00', '#0f0'],
    grafics : {
        g1: [],
        g2: [],
    },
    createGraficsPos: function() {
        this.grafics.g1 = [];
        this.grafics.g2 = [];
        for (let i = -300; i < 300; i++) {
            var z1,z2;
            z1 = Math.pow(this.k/6*i,2) + this.b;
            z2 = this.k*i + this.b;
            if(this.checkFirst)
            {
                this.grafics.g1.push({
                    x: i,
                    y: z1,
                })
            }
            if(this.checkSecond)
            {
                this.grafics.g2.push({
                    x: i,
                    y: z2,
                })
            }
        }
    },

    returnGrafic: function(index) {
        return this.grafics["g"+index];
    },

    returnGraficsColors: function() {
        return this.colors;
    },

    returnStartPost: function() {
        return {x0,y0};
    },

    setKandB: function(k,b) {
        this.k = k;
        this.b = b;
    }

};
