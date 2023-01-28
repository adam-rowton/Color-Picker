const colorBtn = document.getElementById('get-colors-btn')

const colorDisplayGrid = document.getElementById('color-display-grid')


colorBtn.addEventListener('click', function () {
    let selectorInput = document.getElementById('color-selector').value
    let seedColor = document.getElementById('color-preview-box').value.slice(1)
    
    getColors(seedColor, selectorInput)
})



function getColors(seedColor, palette) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${palette}`)
    .then(res => res.json())
    .then(data => {
        
        let colorArray = data.colors.map(color => color.hex.value)
        
        renderColors(colorArray)
    })}


function renderColors(hexValues) {
    let colorsHtml = ""
    hexValues.forEach(hex => {
        colorsHtml += `
        <div class="color-container">
        <div class="color" style="background-color:${hex}">

        </div>
        <div class="hex-value-container">
            ${hex}
        </div>
</div>`
    })
   
    colorDisplayGrid.innerHTML = colorsHtml
}

