function button(label) {
  const element = div.createElement('button');
  element.innerHTML = label || 'submit';
  return element;
}

export default button;
