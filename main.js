const keyboard = {

    topRow: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
    middleRow: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''],
    bottomRow: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],

    createLayout: function() {
      const newArr = [this.topRow, this.middleRow, this.bottomRow];
      newArr.map(function(row) {
            row.map(function(letter) {
              keyboard.createButton(letter);
            })
        const body = document.querySelector('body');
        const br = document.createElement('br');
        body.appendChild(br);
        });
    },
    createButton: function(letter) {
        const body = document.querySelector('body');
        const button = document.createElement('button');

        button.innerText = letter;
        body.appendChild(button);
        button.classList.add('button');
        body.classList.add('body');
    }
};

let run = () => {
  keyboard.createLayout();
}
run();