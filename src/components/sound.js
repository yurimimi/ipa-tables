export class IpaSoundElement extends HTMLDivElement {
  /**
   * @note ***don't*** use ctor to get attributes, it's yet too early to
   *       at the init time.
   */
  constructor() {
    super();
    // const shadowRoot = this.attachShadow({ mode: "open" });
    // shadowRoot.appendChild()
  }

  connectedCallback() {
    // Why can I see the innerHTML, if this thing says I couldn't
    // https://javascript.info/custom-elements
    // console.log(this.innerHTML);

    const {
      wiki = "",
      sound = "",
      shaded,
    } = Object.fromEntries(
      Array.from(this.attributes).map((item) => [item.name, item.value])
    );

    if (shaded !== undefined) {
      this.setAttribute("class", "shaded");
      return;
    } else {
      this.setAttribute("class", "dropdown");
    }
    if (
      this.innerHTML.trim() === "" ||
      this.innerHTML === null ||
      wiki === "" ||
      sound === ""
    ) {
      return;
    }
    const offset = this.calculateDropdownOffsetFromRight();
    const dropdownContent = createDropdownWithTranslation(offset);
    // create an anchor with the provided link (the `wiki` attr)
    const wikipageLink = createWikiLinkElement(wiki);
    const audioElement = createAudioElement(sound);
    // assemble
    dropdownContent.appendChild(wikipageLink);
    dropdownContent.appendChild(audioElement);
    // attach the dropdown element
    this.appendChild(dropdownContent);
  }

  /**
   * Calculates the offset of a dropdown element from the right side
   * of the body.
   * @returns {number} The offset of the dropdown element from the
   * right side of the body.
   */
  calculateDropdownOffsetFromRight() {
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = this.getBoundingClientRect();
    const offset = bodyRect.right - elemRect.right;

    const halfWidthOfDropdown = 300 / 2; // hardcoded approx
    return offset - halfWidthOfDropdown;
  }
}

/**
 * Creates an audio element with the specified source.
 * @param {string} source The URL of the audio file.
 * @returns {HTMLElement} The created audio element.
 */
function createAudioElement(source) {
  const audioElement = document.createElement("audio");
  // show audioplayer controls
  audioElement.setAttribute("controls", "");
  const soundSource = document.createElement("source");
  // attach the source of the sound sample
  soundSource.setAttribute("src", source);
  soundSource.setAttribute("type", "audio/ogg");
  audioElement.appendChild(soundSource);
  audioElement.appendChild(
    document.createTextNode("Your browser does not support the audio element.")
  );
  return audioElement;
}

/**
 * Creates a dropdown element with a dynamic translation based on the
 *  offset parameter.
 * @param {number} offset The offset of the dropdown element from
 * the right side of the body.
 * @returns {HTMLDivElement} The created dropdown element.
 */
function createDropdownWithTranslation(offset) {
  const dropdown = document.createElement("div");
  // dynamic translation, depending on the position on the screen
  // (the distance to the window edge)
  dropdown.setAttribute("class", "dropdown-content");
  let translate = "-50% -0.1rem";
  if (offset < 0) {
    offset = Math.floor(offset);
    translate = `calc(-50% + ${offset}px) -0.1rem`;
  }
  dropdown.style.translate = translate;
  return dropdown;
}

/**
 * Creates a hyperlink element for a Wikipedia page with the provided
 * link.
 * @param {string} link The URL of the Wikipedia page.
 * @returns {HTMLAnchorElement} The created hyperlink element.
 */
function createWikiLinkElement(link) {
  const wikipageLink = document.createElement("a");
  wikipageLink.href = link;
  wikipageLink.innerHTML = "Wiki";
  wikipageLink.setAttribute("class", "wikipage");
  return wikipageLink;
}
