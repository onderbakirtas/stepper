type TCountdownOptions = {
  start: number
}

class Countdown {
  private _timeleft: number
  private _el: Element | HTMLElement
  private _span: HTMLSpanElement = document.createElement('span')
  private _timer?: ReturnType<typeof setInterval>

  options: TCountdownOptions = {
    start: 0,
  }

  constructor(node: Element, options: TCountdownOptions) {
    if (!options) {
      throw Error("You need to specify 'options'.")
    }

    if (!options.start) {
      throw Error("You need to specify 'start' value.")
    }

    if (node instanceof Element === false) {
      throw Error('Wrong node.')
    }

    this._el = node
    this._timeleft = options.start
    this.options = { ...this.options, ...options }
    this._span.innerText = options.start.toString()

    this._el.innerHTML = ''
    this._el.appendChild(this._span)

    this.startTimer()
  }

  startTimer() {
    this._timer = setInterval(() => {
      if (this._timeleft < 2) {
        clearInterval(this._timer)
        this._span.innerHTML = "it's over"
      } else {
        this._timeleft -= 1
        this._span.innerHTML = this._timeleft.toString()
      }
    }, 1000)
  }

  destroy() {
    clearInterval(this._timer)
  }
}

export { Countdown }
