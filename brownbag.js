// zellers algorithm:

const myObj = {
    zeller(_d, _m, _y){
        let d = 25
        let m = 1;
        let y = 1996;

            let f, l, s, x;

                if (m < 3) {
             m = m +12;
                y = y -1;
    }

 
            f = Math.floor(y/100);
            l = y - 100 * f;

            s = Math.floor(2.6*m - 5.39) + Math.floor(l/4) + Math.floor(f/4) + + d + l - (2*f);

            x = s - (7*Math.floor(s/7));

            console.log(x)



    }
}

// result=4
// 4 means Thursday


