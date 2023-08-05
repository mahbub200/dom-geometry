document.getElementById("triangle-button")
  .addEventListener("click", function () {
   
    let base = inputFieldById("triangle-input-base");
    let height = inputFieldById("triangle-input-height");
    const area = 0.5 * base * height;
    // console.log(area);
   
   
    let areaTwoDecimel=twoDecimel(area);

    dynamicTextSet(areaTwoDecimel);
  });
document
  .getElementById("rectangle-button")
  .addEventListener("click", function () {
    let width = inputFieldById("rectangle-input-width");
    let length = inputFieldById("rectangle-input-length");
    const area = width * length;
    // console.log(area);
    let areaTwoDecimel=twoDecimel(area);

    dynamicTextSet(areaTwoDecimel);

  });
document
  .getElementById("parallelogram-button")
  .addEventListener("click", function () {
    let base = inputFieldById("parallelogram-input-base");
    let height = inputFieldById("parallelogram-input-height");
    const area = base * height;
    let areaTwoDecimel=twoDecimel(area);

    dynamicTextSet(areaTwoDecimel);
  });
document
  .getElementById("rhombus-button")
  .addEventListener("click", function () {
    let d1 = inputFieldById("rhombus-input-d1");
    let d2 = inputFieldById("rhombus-input-d2");
    const area = 0.5 * d1 * d2;
    console.log(area);
    let areaTwoDecimel=twoDecimel(area);

    dynamicTextSet(areaTwoDecimel);
  });
document
  .getElementById("pentagon-button")
  .addEventListener("click", function () {
    let p = inputFieldById("pentagon-input-p");
    let base = inputFieldById("pentagon-input-base");
    const area = 0.5 * p * base;
    console.log(area);
    let areaTwoDecimel=twoDecimel(area);

    dynamicTextSet(areaTwoDecimel);
  });
document
  .getElementById("ellipse-button")
  .addEventListener("click", function () {
    const pi = 3.14;
    let a = inputFieldById("ellipse-input-a");
    let base = inputFieldById("ellipse-input-base");
    const area = pi * a * base;
    let areaTwoDecimel=twoDecimel(area);

    dynamicTextSet(areaTwoDecimel);
    console.log(area);
  });


