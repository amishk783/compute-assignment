(()=>{"use strict";const e='[data-testid="tweetTextarea_0"]';function t(e){var t,o;if(document.querySelector('div[aria-labelledby="modal-header"][aria-modal="true"][role="dialog"]')){if(document.getElementById("twitterButton"))console.log("Button already exists");else if(null===(null===(t=e.parentElement)||void 0===t?void 0:t.querySelector("#twee-button"))){const t=function(){const e=document.createElement("button");e.className="quote-tweet-button",e.id="twitterButton";const t=chrome.runtime.getURL("icons48.png");e.innerHTML=`<img src="${t}"  style="width: 24px; height: 24px; margin-right: 8px; cursor: pointer;" /> `;const o=e.querySelector("img");return o&&o.addEventListener("click",(e=>{e.stopPropagation(),console.log("Image inside button clicked"),function(){var e;const t=null===(e=document.querySelector('[data-testid="tweetText"]'))||void 0===e?void 0:e.textContent;t&&(alert(t),n(t))}()})),e}();null===(o=e.parentElement)||void 0===o||o.insertAdjacentElement("afterend",t)}}else console.log("mode is not opended")}const o=new MutationObserver((o=>{o.forEach((o=>{o.addedNodes.forEach((o=>{if(o instanceof HTMLElement){const n=o.querySelector('[data-testid="reply"]'),r=o.querySelector(e);n&&(console.log("Reply button found"),n.addEventListener("click",(()=>{setTimeout((()=>{const o=document.querySelector(e);o&&t(o)}),100)})));const c='div[aria-labelledby="modal-header"][aria-modal="true"][role="dialog"]',l=document.querySelector(c);r&&l&&(console.log("Textarea found"),t(r))}}))}))}));o.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("unload",(()=>{o.disconnect()}));const n=t=>{const o=document.querySelector(e);if(!o)return void console.error("Textarea not found");const n=o.querySelector("span");n?(n.textContent=t,n.click(),n.dispatchEvent(new Event("input",{bubbles:!0}))):console.error("Span for text content not found")}})();