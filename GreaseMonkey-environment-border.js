// ==UserScript==
// @name         Colorise par environnement
// @namespace    https://yanncharlou.fr
// @version      1.0
// @description  Colorise par environnement
// @author       Yann Charlou
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // keywords and colors in decreasing priority order
    const urlConfigs = [
        { url: "staging.website.fr", color: "yellow" }, // staging
        { url: "website.fr", color: "red" }, // production

    ];

    // Function to apply border if the URL matches
    function applyBorder() {
        const currentUrl = window.location.href;
        for (const config of urlConfigs) {
            if (currentUrl.includes(config.url)) {
                const borderDiv = document.createElement('div');
                borderDiv.style.position = 'fixed';
                borderDiv.style.top = '0';
                borderDiv.style.left = '0';
                borderDiv.style.width = '100%';
                borderDiv.style.height = '100%';
                borderDiv.style.border = `10px solid ${config.color}`;
                borderDiv.style.opacity = '0.5';
                borderDiv.style.zIndex = '9999';
                borderDiv.style.pointerEvents = 'none';
                document.body.appendChild(borderDiv);
                break;
            }
        }
    }

    // Apply the border when the script runs
    applyBorder();
})();
