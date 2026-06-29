function createSlider(labelText, min, max, step, value, parentId) {
  const parent = document.getElementById(parentId);
  const wrapper = document.createElement('div');
  const label = document.createElement('label');
  const valueLabel = document.createElement('div');
  const slider = document.createElement('input');

  label.textContent = labelText;
  label.style.marginTop = '12px';
  label.style.display = 'block';

  slider.type = 'range';
  slider.min = min;
  slider.max = max;
  slider.step = step;
  slider.value = value;
  slider.style.width = '100%';

  valueLabel.textContent = value;
  valueLabel.id = `${labelText.replace(/\s+/g, '')}Value`;
  valueLabel.style.marginTop = '4px';
  valueLabel.style.color = '#cbd5e1';

  slider.oninput = () => {
    valueLabel.textContent = slider.value;
  };

  wrapper.appendChild(label);
  wrapper.appendChild(slider);
  wrapper.appendChild(valueLabel);
  parent.appendChild(wrapper);

  return slider;
}
