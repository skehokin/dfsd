const charFrame = document.createElement("DIV");
charFrame.style.position = "relative";
charFrame.style.height = "1000px";
const skin = "#C29584";
const clothes = "#8E081E";
const hair = "#2F071B";

const parts = {
  armR: {
    top: "45px",
    left: "119px",
    backgroundColor: skin,
    width: "7px",
    height: "50px",
    borderBottomLeftRadius: "3px",
    borderBottomRightRadius: "3px"
  },
  armL: {
    top: "45px",
    left: "163px",
    backgroundColor: skin,
    width: "7px",
    height: "50px",
    borderBottomLeftRadius: "3px",
    borderBottomRightRadius: "3px"
  },
  head: {
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    top: 0,
    left: "123px",
    backgroundColor: hair,
    width: "44px",
    height: "50px"
  },
  topTop: {
    borderRadius: "30px",
    borderBottomLeftRadius: "3px",
    borderBottomRightRadius: "3px",
    top: "45px",
    left: "120px",
    backgroundColor: clothes,
    width: "49px",
    height: "25px",
    transform: "rotate(180deg)"
  },
  body: {
    borderRadius: "8px",
    top: "50px",
    left: "127px",
    backgroundColor: clothes,
    width: "35px",
    height: "60px"
  },
  face: {
    borderRadius: "20px",
    borderTopLeftRadius: "2px",
    borderTopRightRadius: "2px",
    top: "20px",
    left: "130px",
    backgroundColor: skin,
    width: "30px",
    height: "22px"
  },
  eyeL: {
    borderBottomLeftRadius: "5px",
    borderTopRightRadius: "7px",
    borderBottomRightRadius: "1px",
    borderTopLeftRadius: 0,
    top: "23px",
    left: "131px",
    backgroundColor: "white",
    width: "10px",
    height: "8px"
  },
  eyeR: {
    borderBottomRightRadius: "5px",
    borderTopLeftRadius: "7px",
    borderBottomLeftRadius: "1px",
    borderTopRightRadius: 0,
    top: "23px",
    left: "149px",
    backgroundColor: "white",
    width: "10px",
    height: "8px"
  },
  pupilL: {
    borderRadius: "25px",
    borderBottomRightRadius: 2,
    top: "23px",
    left: "133px",
    backgroundColor: hair,
    width: "6px",
    height: "6px"
  },
  pupilR: {
    borderRadius: "25px",
    borderBottomLeftRadius: 2,
    top: "23px",
    left: "151px",
    backgroundColor: hair,
    width: "6px",
    height: "6px"
  },
  mouth: {
    borderRadius: "6px",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
    top: "35px",
    left: "140px",
    backgroundColor: hair,
    width: "10px",
    height: "6px"
  },
  collar: {
    borderRadius: "100px",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
    top: "45px",
    left: "135px",
    backgroundColor: skin,
    width: "20px",
    height: "10px"
  }
};

for (let key of Object.keys(parts)) {
  let part = document.createElement("DIV");
  //part = document.createElement("DIV");
  part.style.borderRadius = "10px";
  part.style.position = "absolute";

  for (let property of Object.keys(parts[key])) {
    console.log(parts[key][property]);
    part.style[property] = parts[key][property];
  }
  charFrame.appendChild(part);
}

document.body.appendChild(charFrame);
