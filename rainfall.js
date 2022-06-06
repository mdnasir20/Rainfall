
var rainfall = [47.0, 36.6, 34.7, 37.0, 41.9, 47.5, 61.7, 74.8,
				65.4, 69.7, 66.1, 54.6];

function calculateSum() {
   var sum = 0;
var annualRainfall;
    
for (var i = 0; i < rainfall.length; i++) { 
    annualRainfall = (sum += rainfall[i])
} 
    
   document.getElementById("answer").innerHTML = "The annual rainfall in Helsinki is " + annualRainfall.toFixed(1) + " mm."
}