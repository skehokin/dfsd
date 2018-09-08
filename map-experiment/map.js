//ok so I've turned to making a list of boxes and trying to add them in turn to
//the body, but even that's not working. WHy???????
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let boxRecord = [];
const box = document.createElement("DIV");
box.style.width = "1000px";
box.style.height = "1000px";
box.style.display = "flex";
box.style.backgroundColor = getRandomColor();
box.style.flexWrap = "wrap";

function bisectBox(box) {
  //console.log(box);
  const whichHalf = Math.random() > 0.5 ? "height" : "width";
  const newDimensions = {
    box0: {
      height: parseInt(box.style.height),
      width: parseInt(box.style.width)
    },
    box1: {
      height: parseInt(box.style.height),
      width: parseInt(box.style.width)
    }
  };

  newDimensions.box0[whichHalf] = Math.floor(
    Math.random() * parseInt(box.style[whichHalf])
  );
  newDimensions.box1[whichHalf] =
    parseInt(box.style[whichHalf]) - newDimensions.box0[whichHalf];
  //console.log("width", newWidth, "height", newHeight);
  box = [document.createElement("DIV"), document.createElement("DIV")];

  for (let i = 0; i < box.length; i++) {
    box[i].style.height = String(newDimensions["box" + i].height) + "px";
    box[i].style.width = String(newDimensions["box" + i].width) + "px";
    //box[i].style.border = "1px solid black";
    box[i].style.display = "flex";
    //box[i].style.flexWrap = "wrap";
    box[i].style.backgroundColor = getRandomColor();
    //debugger;
  }

  //   newBox.style.width = String(newWidth) + "px";
  //   newBox.style.height = String(newHeight) + "px";
  //   newBox.style.border = "1px solid black";
  //newBox.appendChild(document.createTextNode(" "));
  //console.log("before push", boxRecord);
  boxRecord.push(box);
  //console.log("after push", boxRecord);
  if (parseInt(box[0].style.width) > 50 && parseInt(box[0].style.height) > 50) {
    bisectBox(box[0]);
  } else {
    boxRecord.push("end");
  }
  if (parseInt(box[1].style.width) > 50 && parseInt(box[1].style.height) > 50) {
    bisectBox(box[1]);
  } else {
    boxRecord.push("end");
  }
}

//bisectBox(box);

//const thefinalbox = makeBox(1000, 1000);
//console.log(box);
console.log(boxRecord);

function appendBoxes() {
  for (let i = 0; i < boxRecord.length; i++) {
    if (i === 0) {
      box.appendChild(boxRecord[i][0]);
      box.appendChild(boxRecord[i][1]);
    } else if (i % 2 !== 0) {
      if (box[i] !== "end") {
        console.log(box[i]);
        boxRecord[i - 1][0].appendChild(boxRecord[i][0]);
        boxRecord[i - 1][0].appendChild(boxRecord[i][1]);
      }
    } else {
      if (box[i] !== "end") {
        boxRecord[i - 1][1].appendChild(boxRecord[i][0]);
        boxRecord[i - 1][1].appendChild(boxRecord[i][1]);
      }
    }
    //   console.log(boxRecord[i][0].style.cssText);
    //   console.log(boxRecord[i][0].style.cssText);
  }
}

//   console.log(boxRecord);
//   //document.body.appendChild(boxRecord[i]);
// }

// for (let i = 10; i > 0; i--) {
//   document.body.appendChild(document.createElement("DIV"));
// }
function getGrey() {
  const letters = "456789ABCDE";
  const newLetter =
    letters[Math.floor(Math.random() * 11)] +
    letters[Math.floor(Math.random() * 11)];
  color = "#";
  for (let i = 3; i > 0; i--) {
    color += newLetter;
  }
  console.log(color);
  return color;
}

getGrey();

document.body.appendChild(box);
const letters = "abcdefghijklmnopqr!tuvwxyz";

for (let i = 1200; i > 0; i--) {
  const panel = document.createElement("DIV");
  panel.style.width = "10px";
  panel.style.height = "10px";
  fill = document.createTextNode(letters[Math.floor(Math.random() * 26)]);
  panel.appendChild(fill);
  //panel.style.display = "flex";
  if (
    (i % 50 === 33 && i > 200 && i < 800) ||
    (i > 233 && i < 260) ||
    i === 1000
  ) {
    panel.style.backgroundColor = "black";
  } else {
    panel.style.backgroundColor = getGrey();
  }
  panel.style.color = getGrey();
  //panel.style.flexWrap = "wrap";
  box.appendChild(panel);
}

const roomOverlay = document.createElement("DIV");
roomOverlay.style.width = "1000px";
roomOverlay.style.height = "1000px";
roomOverlay.style.position = "absolute";
roomOverlay.style.top = 0;
roomOverlay.style.left = 0;
roomOverlay.style.backgroundColor = "blue";
roomOverlay.style.opacity = 0.3;

//document.body.appendChild(roomOverlay);

document.body.style.padding = 0;
document.body.style.margin = 0;

//roomOverlay.appendChild();
