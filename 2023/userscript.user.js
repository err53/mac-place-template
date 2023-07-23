// ==UserScript==
// @name         McMaster + Friendly Unis Logo template
// @namespace    http://tampermonkey.net/
// @version      2023.2.1
// @description  try to take over the canvas!
// @author       oralekin and xpert104
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/err53/mac-place-template/blob/main/2023/userscript.user.js
// @downloadURL  https://github.com/err53/mac-place-template/blob/main/2023/userscript.user.js
// @grant        none
// ==/UserScript==
// Shamelessly stolen from the osu! r/place team (thanks!)

if (window.top !== window.self) {
    window.addEventListener('load', () => {
        // Load the image
        const image = document.createElement("img");
        // The `?token=$(date +%s)` is added to url to update image in overlay faster
        image.src = "https://raw.githubusercontent.com/err53/mac-place-template/main/2023/dotted-place-template-mac.png?token=$(date +%s)";
        image.onload = () => {
            image.style = `position: absolute; left: 0; top: 0; width: ${image.width/3}px; height: ${image.height/3}px; image-rendering: pixelated; z-index: 1`;
        };
      
        // Add the image as overlay
        const camera = document.querySelector("garlic-bread-embed").shadowRoot.querySelector("garlic-bread-camera");
        const canvas = camera.querySelector("garlic-bread-canvas");
        canvas.shadowRoot.querySelector('.container').appendChild(image);
      
        // Add a style to put a hole in the pixel preview (to see the current or desired color)
        const waitForPreview = setInterval(() => {
            const preview = camera.querySelector("garlic-bread-pixel-preview");
            if (preview) {
              clearInterval(waitForPreview);
              const style = document.createElement('style')
              style.innerHTML = '.pixel { clip-path: polygon(-20% -20%, -20% 120%, 37% 120%, 37% 37%, 62% 37%, 62% 62%, 37% 62%, 37% 120%, 120% 120%, 120% -20%); }'
              preview.shadowRoot.appendChild(style);
            }
        }, 100);
    }, false);
}
