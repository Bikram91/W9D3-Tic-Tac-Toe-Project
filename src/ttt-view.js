class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;

    this.setupBoard();
    this.bindEvents();

  }

  setupBoard() {
    let ul = document.createElement('ul')
    // let li = document.createElement('li')
      this.el.appendChild(ul)
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          let li = document.createElement('li')
          li.dataset.pos = [i,j];
          ul.appendChild(li) 
        }
       
      }
  }
  
  bindEvents() {
    this.el.addEventListener("click", this.handleClick.bind(this))
    

  }

  handleClick(event) {
    console.log(event);
    this.makeMove(event.target)
  }
  
  makeMove(square) {
    let newarr;
    newarr = square.dataset.pos.split(',');
    this.game.playMove([parseInt(newarr[0]), parseInt(newarr[1])])
    //  console.log([parseInt(newarr[0]), parseInt(newarr[1])]);
    square.innerHTML = this.game.currentPlayer
    square.classList.add(this.game.currentPlayer);

    if (this.game.board.isOver()) {
      alert(`${this.game.currentPlayer} You Won!!!'`)
    }
  }
  
}

module.exports = View;
