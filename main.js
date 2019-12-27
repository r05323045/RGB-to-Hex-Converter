(function () {
    const rangeSlider = document.querySelector('.range-slider')
    const sliderInput = rangeSlider.querySelectorAll("input[type=range]")
    const rgbValue = rangeSlider.querySelectorAll(".right")
    const hexResult = document.querySelector('.hex-result')
    const hexValue = [[0, 0],[0, 0],[0, 0]]

    rangeSlider.oninput = function() {
        hexResult.textContent = '#'
        for (i=0 ; i<sliderInput.length; i++) {
            rgbValue[i].textContent = `${sliderInput[i].value} `
            hexValue[i] = [Math.floor(Number(rgbValue[i].textContent) / 16), Number(rgbValue[i].textContent) % 16]
            for (j=0 ; j<hexValue[i].length ; j++) {
                if (hexValue[i][j] > 9) {
                    hexValue[i][j] = String.fromCharCode(hexValue[i][j] + 87)
                } else {
                    hexValue[i][j] = hexValue[i][j].toString()
                }
            }
            hexResult.textContent += hexValue[i].join('')
        }
        document.querySelector('.wrapper').style.backgroundColor = hexResult.textContent
    }
})()