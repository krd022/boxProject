const originalColors = {
  box1: "#FF0800",
  box2: "#0000FF",
  box3: "#66FF00",
};

const boxes = document.querySelectorAll('.box');

function changeBoxColor(box, color) {
  box.style.backgroundColor = color;
}

function resetBoxColors() {
  boxes.forEach((box, index) => {
    changeBoxColor(box, originalColors[`box${index + 1}`]);
  });
}

function toggleBoxVisibility(box) {
  box.style.display = box.style.display === 'none' ? 'inline-block' : 'none';
}

document.getElementById('changeAll').addEventListener('click', () => {
  boxes.forEach((box, index) => {
    changeBoxColor(box, `#${Math.floor(Math.random() * 16777215).toString(16)}`);
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