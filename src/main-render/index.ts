// import { EventEmitter } from '../utils/events'
import HtmlBasement from '../html-basement'
import GameState from '../game-state'

export default class MainRender {
  // rect: Rect
  // canvas: HTMLCanvasElement
  // context: CanvasRenderingContext2D
  //
  // onRender = new EventEmitter<CanvasRenderingContext2D>()
  // state = { livingCells: [] }

  CELL_SIZE = 20
  PADDING = 1

  constructor (private html: HtmlBasement, private state: GameState) {
    this.html.onRender.subscribe(this.render)
  }

  render = (context: CanvasRenderingContext2D) => {
    this.state.livingCells.forEach(({ x, y }) => {
      context.fillRect(x * this.CELL_SIZE, y * this.CELL_SIZE, this.CELL_SIZE - this.PADDING, this.CELL_SIZE - this.PADDING)
    })
  }
}