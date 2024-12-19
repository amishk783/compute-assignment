// add button on open

const REPLY_BUTTON_SELECTOR = '[data-testid="reply"]';
const TWEET_TEXTAREA_SELECTOR = '[data-testid="tweetTextarea_0"]';
const MODAL_SELECTOR =
  'div[aria-labelledby="modal-header"][aria-modal="true"][role="dialog"]';
//create button
function createQuoteButton(): HTMLButtonElement {
  const button = document.createElement("button");
  button.className = "quote-tweet-button";
  button.id = "twitterButton";

  const iconUrl = chrome.runtime.getURL("icons48.png");
  button.innerHTML = `<img src="${iconUrl}"  style="width: 24px; height: 24px; margin-right: 8px; cursor: pointer;" /> `;

  const image = button.querySelector("img");

  if (image) {
    image.addEventListener("click", (event) => {
      event.stopPropagation();
      console.log("Image inside button clicked");
      fetchTweet();
    });
  }
  return button;
}
// inject button
function injectQuoteButton(textareaContainer: Element): void {
  // check model is opened or not

  if (!document.querySelector(MODAL_SELECTOR)) {
    console.log("mode is not opended");
    return;
  }
  const existingButton = document.getElementById("twitterButton");
  if (existingButton) {
    console.log("Button already exists");
    return;
  }

  if (textareaContainer.parentElement?.querySelector("#twee-button") === null) {
    const button = createQuoteButton();

    textareaContainer.parentElement?.insertAdjacentElement("afterend", button);
  }
}


const observer = new MutationObserver((mutations: MutationRecord[]) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node instanceof HTMLElement) {
        const replyButton = node.querySelector(REPLY_BUTTON_SELECTOR);

        const tweetTextarea = node.querySelector(TWEET_TEXTAREA_SELECTOR);

        if (replyButton) {
          console.log("Reply button found");
          replyButton.addEventListener("click", () => {
            setTimeout(() => {
              const textarea = document.querySelector(TWEET_TEXTAREA_SELECTOR);
              if (textarea) {
                injectQuoteButton(textarea);
              }
            }, 100);
          });
        }
        const modalSelector =
          'div[aria-labelledby="modal-header"][aria-modal="true"][role="dialog"]';
        const modelIsOpen = document.querySelector(modalSelector);

        if (tweetTextarea && modelIsOpen) {
          console.log("Textarea found");
          injectQuoteButton(tweetTextarea as Element);
        }
      }
    });
  });
});

//fetch original tweet

function fetchTweet() {
  const fetchedTweet = document.querySelector(
    '[data-testid="tweetText"]'
  )?.textContent;
  if (!fetchedTweet) return;

  alert(fetchedTweet);
  populateTweetText(fetchedTweet);
}

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

window.addEventListener("unload", () => {
  observer.disconnect();
});

// populateTweetText

const populateTweetText = (tweet: string) => {
  const textarea = document.querySelector(
    TWEET_TEXTAREA_SELECTOR
  ) as HTMLElement;
  if (!textarea) {
    console.error("Textarea not found");
    return;
  }

  const spanTag = textarea.querySelector("span");

  if (!spanTag) {
    console.error("Span for text content not found");
    return;
  }

  spanTag.textContent = tweet;
  spanTag.click();
  spanTag.dispatchEvent(new Event("input", { bubbles: true }));
};
