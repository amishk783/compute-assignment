(()=>{"use strict";const e='[data-testid="tweetTextarea_0"]',t='[data-testid="tweetTextarea_0_label"]';function o(e){var t,o;if(!(null===(t=e.parentElement)||void 0===t?void 0:t.querySelector(".quote-tweet-button"))){const t=function(){const e=document.createElement("button");e.className="quote-tweet-button";const t=chrome.runtime.getURL("icons/icon48.png");return e.innerHTML=`<img src="${t}" alt="Quote" />`,e.addEventListener("click",(()=>{console.log("Quote button clicked")})),e}();null===(o=e.parentElement)||void 0===o||o.insertBefore(t,e),console.log("Button injected")}}console.log("🚀 ~ TWEET_COMPOSE_SELECTOR:",t),(()=>{const e=document.createElement("div");e.style.cssText="\n    position: fixed;\n    top: 10px;\n    right: 10px;\n    background: red;\n    color: white;\n    padding: 10px;\n    z-index: 9999;\n    font-size: 14px;\n    border-radius: 5px;\n  ",e.textContent="Tweet Extension Active!",document.body.appendChild(e),setTimeout((()=>e.remove()),5e3)})();const n=new MutationObserver((n=>{console.log("🚀 ~ observer ~ mutations:",n),n.forEach((n=>{n.addedNodes.forEach((n=>{if(n instanceof HTMLElement){const c=n.querySelector('[data-testid="reply"]');console.log("🚀 ~ mutation.addedNodes.forEach ~ replyButton:",c);const d=n.querySelector(e);console.log("🚀 ~ mutation.addedNodes.forEach ~ tweetTextarea:",d);const s=n.querySelector(t);console.log("🚀 ~ mutation.addedNodes.forEach ~ composeArea:",s),c&&(console.log("Reply button found"),c.addEventListener("click",(()=>{setTimeout((()=>{const t=document.querySelector(e);t&&o(t)}),100)}))),(d||s)&&(console.log("Textarea found"),o(d||s))}}))}))}));n.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("unload",(()=>{n.disconnect()}))})();