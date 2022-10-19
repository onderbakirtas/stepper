export type TCountdownOptions = {
  start: number
  className?: string
}

class Countdown {
  private _timeleft: number
  private _el: Element | HTMLElement
  private _span: HTMLSpanElement = document.createElement('span')
  private _timer?: ReturnType<typeof setInterval>

  options: TCountdownOptions = {
    start: 0,
    className: 'cd-element',
  }

  constructor(node: Element, customOptions: TCountdownOptions) {
    if (!customOptions) {
      throw Error("You need to specify 'options'.")
    }

    if (!customOptions.start) {
      throw Error("You need to specify 'start' value.")
    }

    if (node instanceof Element === false) {
      throw Error('Wrong node.')
    }

    this.options = { ...this.options, ...customOptions }

    this._el = node
    this._timeleft = customOptions.start
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this._span.classList.add(this.options.className!)
    this._span.innerText = customOptions.start.toString()

    this._el.innerHTML = ''
    this._el.appendChild(this._span)

    this.addStyles()
    this.startTimer()
  }

  private addStyles() {
    const styleBlock = document.createElement('style')
    styleBlock.appendChild(
      document.createTextNode('.cd-element{color:red;font-size:24px}'),
    )
    document.head.appendChild(styleBlock)
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

  restart() {
    this._timeleft = this.options.start
    this._span.innerText = this._timeleft.toString()
    clearInterval(this._timer)
    this.startTimer()
  }

  destroy() {
    clearInterval(this._timer)
  }
}

export { Countdown }
