const colorBtn = document.getElementById('get-colors-btn')





fetch('https://www.thecolorapi.com/scheme?hex=0047AB&mode=monochrome')
    .then(res => res.json())
    .then(data => {
        console.log((data.colors))
        getColorArray(data.colors)




    })

function getColorArray(colors) {
    let { hex } = colors

    console.log(hex)
}

function returnHex() {

}