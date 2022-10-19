type TCountdownOptions = {
  start: number
}

class Countdown {
  constructor(node: HTMLElement, options: TCountdownOptions) {
    console.log(node)
    console.log('options:', options)
    // this.init(options.start)
  }

  // init(target: number) {
  //   let timeleft = target
  //   const timer = setInterval(() => {
  //     if (timeleft === 0) {
  //       clearInterval(timer)
  //     }
  //     timeleft -= -1
  //   })
  // }
}

export { Countdown }

export const Stepper = (step: number) => `Current step is: ${step}`
