// Display current value next to range inputs
//
// Use this code in your puzzle's <script> section to show
// the current value of each range slider next to the control.
// Place it before your initial draw() call.
document.querySelectorAll('input[type=range]').forEach(r => {
  const span = document.createElement('span');
  span.style.cssText = 'margin-left:1px;font-size:12px;color:#666';
  span.textContent = r.value;
  r.after(span);
  r.addEventListener('input', () => span.textContent = r.value);
});
