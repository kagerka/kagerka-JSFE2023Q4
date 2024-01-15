export { svg };

const xmlns = "http://www.w3.org/2000/svg";

let svg = document.createElementNS(xmlns, "svg");
svg.setAttributeNS(null, "viewBox", "0 0 353 581");
svg.setAttributeNS(null, "width", '453');
svg.setAttributeNS(null, "height", '581');
svg.setAttributeNS(null, "fill", 'none');

const rect1 = document.createElementNS(xmlns, "rect");
rect1.setAttributeNS(null, 'x', '176.337');
rect1.setAttributeNS(null, 'y', '34.6662');
rect1.setAttributeNS(null, 'width', '39');
rect1.setAttributeNS(null, 'height', '199.598');
rect1.setAttributeNS(null, 'transform', 'rotate(45 176.337 34.6662)');
rect1.setAttributeNS(null, 'fill', '#202020');
rect1.setAttributeNS(null, 'stroke', '#FFFEFE');
rect1.setAttributeNS(null, 'stroke-width', '3');
svg.append(rect1)

const rect2 = document.createElementNS(xmlns, "rect");
rect2.setAttributeNS(null, 'x', '34.5');
rect2.setAttributeNS(null, 'y', '1.5');
rect2.setAttributeNS(null, 'width', '39');
rect2.setAttributeNS(null, 'height', '578');
rect2.setAttributeNS(null, 'rx', '3.5');
rect2.setAttributeNS(null, 'fill', '#202020');
rect2.setAttributeNS(null, 'stroke', '#FFFEFE');
rect2.setAttributeNS(null, 'stroke-width', '3');
svg.append(rect2)

const rect3 = document.createElementNS(xmlns, "rect");
rect3.setAttributeNS(null, 'x', '351.5');
rect3.setAttributeNS(null, 'y', '34.5');
rect3.setAttributeNS(null, 'width', '39');
rect3.setAttributeNS(null, 'height', '350');
rect3.setAttributeNS(null, 'rx', '3.5');
rect3.setAttributeNS(null, 'transform', 'rotate(90 351.5 34.5)');
rect3.setAttributeNS(null, 'fill', '#202020');
rect3.setAttributeNS(null, 'stroke', '#FFFEFE');
rect3.setAttributeNS(null, 'stroke-width', '3');
svg.append(rect3)

const rect4 = document.createElementNS(xmlns, "rect");
rect4.setAttributeNS(null, 'x', '298');
rect4.setAttributeNS(null, 'y', '75');
rect4.setAttributeNS(null, 'width', '10');
rect4.setAttributeNS(null, 'height', '74');
rect4.setAttributeNS(null, 'fill', '#202020');
svg.append(rect4)

let head = document.createElementNS(xmlns, "circle");
head.setAttributeNS(null, 'id', 'head');
head.setAttributeNS(null, 'class', 'visible');
head.setAttributeNS(null, 'cx', '302');
head.setAttributeNS(null, 'cy', '190');
head.setAttributeNS(null, 'r', '48');
head.setAttributeNS(null, 'fill', 'white');
head.setAttributeNS(null, 'stroke', '#202020');
head.setAttributeNS(null, 'stroke-width', '5');
svg.append(head)

const leftHand = document.createElementNS(xmlns, "rect");
leftHand.setAttributeNS(null, 'id', 'leftHand');
leftHand.setAttributeNS(null, 'class', 'visible');
leftHand.setAttributeNS(null, 'x', '398');
leftHand.setAttributeNS(null, 'y', '30');
leftHand.setAttributeNS(null, 'width', '5');
leftHand.setAttributeNS(null, 'height', '100');
leftHand.setAttributeNS(null, 'transform', 'rotate(39.64 63.7964 0)');
leftHand.setAttributeNS(null, 'fill', '#202020');
svg.append(leftHand)

const rightHand = document.createElementNS(xmlns, "rect");
rightHand.setAttributeNS(null, 'id', 'rightHand');
rightHand.setAttributeNS(null, 'class', 'visible');
rightHand.setAttributeNS(null, 'y', '376');
rightHand.setAttributeNS(null, 'x', '80');
rightHand.setAttributeNS(null, 'width', '5');
rightHand.setAttributeNS(null, 'height', '100');
rightHand.setAttributeNS(null, 'transform', 'rotate(-39.6353 0 3.18951)');
rightHand.setAttributeNS(null, 'fill', '#202020');
svg.append(rightHand)

const body = document.createElementNS(xmlns, "rect");
body.setAttributeNS(null, 'id', 'body');
body.setAttributeNS(null, 'class', 'visible');
body.setAttributeNS(null, 'x', '300');
body.setAttributeNS(null, 'y', '240');
body.setAttributeNS(null, 'width', '5');
body.setAttributeNS(null, 'height', '131');
body.setAttributeNS(null, 'fill', '#202020');
svg.append(body)

const leftLeg = document.createElementNS(xmlns, "rect");
leftLeg.setAttributeNS(null, 'id', 'leftLeg');
leftLeg.setAttributeNS(null, 'class', 'visible');
leftLeg.setAttributeNS(null, 'x', '480');
leftLeg.setAttributeNS(null, 'y', '130');
leftLeg.setAttributeNS(null, 'width', '5');
leftLeg.setAttributeNS(null, 'height', '100');
leftLeg.setAttributeNS(null, 'transform', 'rotate(39.64 63.7964 0)');
leftLeg.setAttributeNS(null, 'fill', '#202020');
svg.append(leftLeg)

const rightLeg = document.createElementNS(xmlns, "rect");
rightLeg.setAttributeNS(null, 'id', 'rightLeg');
rightLeg.setAttributeNS(null, 'class', 'visible');
rightLeg.setAttributeNS(null, 'y', '476');
rightLeg.setAttributeNS(null, 'x', '-2');
rightLeg.setAttributeNS(null, 'width', '5');
rightLeg.setAttributeNS(null, 'height', '100');
rightLeg.setAttributeNS(null, 'transform', 'rotate(-39.6353 0 3.18951)');
rightLeg.setAttributeNS(null, 'fill', '#202020');
svg.append(rightLeg)