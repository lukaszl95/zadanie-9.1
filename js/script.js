function getTriangleArea(a,h) {
    if (a <= 0 || h <= 0) {
        console.log("Nieprawidłowe dane");
    } else {
        return a*h/2;
    }
}
console.log(getTriangleArea(10,6));
var triangle1Area = getTriangleArea(5,10);
var triangle2Area = getTriangleArea(15,30);
var triangle3Area = getTriangleArea(20,40);