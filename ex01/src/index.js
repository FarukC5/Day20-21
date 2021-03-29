
/*
function keyFunction() {
  document.getElementById("text").innerHTML = document.button;
 
}
 */
var elements = document.getElementsByClassName("key");

var myFunction = function(event) {
let text = document.getElementById('text')
text.innerText = text.innerText +  event.target.value;
   
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}




/*
const keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
  },

  eventHandelers: {
    oninput: null,
    onclose: null,
  },
  properties: {
    value: "",
    capsLock: false,
  },

  
  init() {
    // create main elements
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    // setup main elements
    this.elements.main.classList.add("keyboard");
    this.elements.keysContainer.classList.add("keyboard_keys"); // ovdje dodati jos
    this.elements.keysContainer.appendChild(this._createKeys());
    this.elements.keys = this.elements.keysContainer.querySelectorAll(
      ".key"
    );

    // adds to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

    // auto use keyboard for elements with use_keyboard_input

    document.querySelectorAll(".text").forEach((element) => {
      element.addEventListener("focus", () => {
        this.open(element.value, (currentValue) => {
          element.value = currentValue;
        });
      });
    });
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "backspace",
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "enter",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "caps",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      "-",
      "_",
      "shift",
      "space",
      "submit",
    ];

    //    create HTML for icon ne treba mi ovo
        const createIconHTML = (icon_name) => {
          return <i class="material-icons">$(icon_name)</i>
     };

    // compressed

    keyLayout.forEach((key) => {
      const keyElement = document.createEvent("button");
      //const insertLineBreak = ["backspace", "enter", "caps", "shift"].indexOf(key) !== -1;

      // Add atributes/classes
      keyElement.setAttributes("type", "button");
      keyElement.classList.add("key");

      switch (key) {
        case "backspace":
          keyElement.classList.add("key", "key_back");
          keyElement.innerHTML = createIconHTML("backspace");

          keyElement.addEventListener("click", () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1
            );
            this._trigerEvent("oninput");
          });
          break;

        case "caps":
          keyElement.classList.add(
            "keyboard_key",
            "keyboard_key_caps",
            "keyboard_key--activatable"
          );
          keyElement.innerHTML = createIconHTML("keyboard_capslock");

          keyElement.addEventListener("click", () => {
            this.toggleCapsLock();
            keyElement.classList.toggle(
              "keyboard_key--active",
              this.properties.capsLock
            );
          });

          break;

        case "enter":
          keyElement.classList.add("key", "key_enter");
          keyElement.innerHTML = createIconHTML("keyboard_return");

          keyElement.addEventListener("click", () => {
            this.properties.value += "\n";
            this._triggerEvent("oninput");
          });
          break;

        case "space":
          keyElement.classList.add("key", "key_space");
          keyElement.innerHTML = createIconHTML("space_bar");

          keyElement.addEventListener("click", () => {
            this.properties.value += " ";
            this._triggerEvent("oninput");
          });
          break;

        case "done":
          keyElement.classList.add("key", "key_ok");
          keyElement.innerHTML = createIconHTML("check_circle");

          keyElement.addEventListener("click", () => {
            this.close();
            this._triggerEvent("onclose");
          });
          break;

        default:
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener("click", () => {
            this.properties.value += this.properties.capsLock
              ? key.toUpperCase()
              : key.toLowerCase();
            this._triggerEvent("oninput");
          });
          break;
      }

      fragment.appendChild(keyElement);
      if (insertLineBreak) {
        fragment.appendChild(document.createEvent("br"));
      }

      // mozda vratiti  },
    });

    return fragment;
  },

  _triggerEvent(handlerName) {
    console.log("Event Trigered! Event Name: " + handlerName);
    if (typeof this.eventHandelers[handlerName] == "function") {
      this.eventHandelers[handlerName](this.properties.value);
    }
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        key.textCount = this.properties.capsLock
          ? key.textContent.toUperCase()
          : key.textContent.toLowerCase();
      }
    }
  },

  open(initalValue, oninput, onclose) {
    this.properties.value = initalValue || "";
    this.eventHandelers.oninput = oninput;
    this.eventHandelers.onclose = onclose;
    this.elements.main.classList.remove("keyboard--hidden");
  },

  close() {
    this.properties.value = "";
    this.eventHandelers.oninput = oninput;
    this.eventHandelers.onclose = onclose;
    this.elements.main.classList.add("keyboard--hidden");
  },
};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});


*/