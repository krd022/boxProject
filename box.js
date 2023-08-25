const originalColors = {
  box1: "#FF0800",
  box2: "#0000FF",
  box3: "#66FF00",
};

const originalBorderStyles = {
  box1: "solid 4px #000000",
  box2: "dashed 5px #FFFF00",
  box3: "solid 4px #FF00FF",
};

const boxes = document.querySelectorAll('.box');

function changeBoxColor(box, color) {
  box.style.backgroundColor = color;
}

function changeBoxBorderColor(box, color) {
  box.style.borderColor = color;
}

function resetBoxColors() {
  boxes.forEach((box, index) => {
    const originalColor = originalColors[`box${index + 1}`];
  

    changeBoxColor(box, originalColor);
    box.style.border = originalBorderStyles[`box${index + 1}`];
  });
}

function resetBoxBorderColors() {
  boxes.forEach((box, index) => {
    changeBoxBorderColor(box, originalColors[`box${index + 1}`]);
  });
}

function toggleBoxVisibility(box) {
  box.style.display = box.style.display === 'none' ? 'inline-block' : 'none';
}

boxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    changeBoxBorderColor(box, `#${Math.floor(Math.random() * 16777215).toString(16)}`);
  });
});

document.getElementById('changeAll').addEventListener('click', () => {
  boxes.forEach((box, index) => {
    changeBoxColor(box, `#${Math.floor(Math.random() * 16777215).toString(16)}`);
  });
});

document.getElementById('changeAll').addEventListener('click', () => {
  boxes.forEach((box, index) => {
    changeBoxBorderColor(box, `#${Math.floor(Math.random() * 16777215).toString(16)}`);
  });
});

document.getElementById('changeBox1').addEventListener('click', () => {
  changeBoxColor(boxes[0], `#${Math.floor(Math.random() * 16777215).toString(16)}`);
});

document.getElementById('changeBox2').addEventListener('click', () => {
  changeBoxColor(boxes[1], `#${Math.floor(Math.random() * 16777215).toString(16)}`);
});

document.getElementById('changeBox3').addEventListener('click', () => {
  changeBoxColor(boxes[2], `#${Math.floor(Math.random() * 16777215).toString(16)}`);
});

document.getElementById('changeBox1').addEventListener('click', () => {
  changeBoxBorderColor(boxes[0], `#${Math.floor(Math.random() * 16777215).toString(16)}`);
});

document.getElementById('changeBox2').addEventListener('click', () => {
  changeBoxBorderColor(boxes[1], `#${Math.floor(Math.random() * 16777215).toString(16)}`);
});

document.getElementById('changeBox3').addEventListener('click', () => {
  changeBoxBorderColor(boxes[2], `#${Math.floor(Math.random() * 16777215).toString(16)}`);
});

document.getElementById('hideBox1').addEventListener('click', () => {
  toggleBoxVisibility(boxes[0]);
});

document.getElementById('hideBox2').addEventListener('click', () => {
  toggleBoxVisibility(boxes[1]);
});

document.getElementById('hideBox3').addEventListener('click', () => {
  toggleBoxVisibility(boxes[2]);
});

document.getElementById('hideAll').addEventListener('click', () => {
  boxes.forEach(box => {
    box.style.display = 'none';
  });
});

document.getElementById('resetColors').addEventListener('click', () => {
  resetBoxColors();
});


document.getElementById('showAll').addEventListener('click', () => {
  boxes.forEach(box => {
    box.style.display = 'inline-block';
  });
});

// Initialize box colors
resetBoxColors();

// Initialize box border styles using the CSS styles
boxes.forEach((box, index) => {
  const boxNumber = index + 1;
  box.classList.add(`box${boxNumber}`);
});