document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('cv-print-btn');
  if (btn) btn.addEventListener('click', function () { window.print(); });
});
