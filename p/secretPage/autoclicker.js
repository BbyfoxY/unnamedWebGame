javascript:var clickStyle = document.createElement('style');clickStyle.innerHTML = '*{cursor: crosshair !important;}';document.body.appendChild(clickStyle);function addClick(e) {if (!e.isTrusted) {return;}if (e.target.classList.contains('clickTarget')) {e.target.classList.remove('clickTarget');} else {e.target.classList.add('clickTarget');}document.body.removeChild(clickStyle);document.body.removeEventListener('click', addClick);e.preventDefault();for (var i = 0; i < 100; i++) {autoClick(e.target);}}function autoClick(el) {if (el.classList.contains('clickTarget')) {element.click();setTimeout(() => {autoClick(e);}, 1);}}document.body.addEventListener('click', addClick, 0);