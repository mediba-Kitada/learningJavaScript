// WeakMapとクロージャによるプロパティのプライベート化
const Car = (function() {
  const carProps = new WeakMap() // クロージャ内にWeakMapを隠蔽
  class Car {
    constructor(make, model) {
      this.make = make
      this.model = model
      this._userGears = ['P', 'N', 'R', 'D']
      carProps.set(this, { userGear: this._userGears[0] }) // クラスの外からアクセスさせたくないプロパティを指定
    }

    get userGear() { return carProps.get(this).userGear }
    set userGear(value) {
      if (this._userGears.indexOf(value) < 0)
        throw new Error(`ギア指定が正しくない:${value}`)
      carProps.get(this).userGear = value
    }

    shift(gear) { this.userGear = gear }
  }
  return Car
})() // IIFE(Immediately Invoked Function Expression)によりクロージャを形成

const car1 = new Car('Tesla', 'Moldel S')
const car2 = new Car('Mazda', '3i')
console.log(car1)
console.log(car2)

car1.shift('D')
car2.shift('R')

car1.userGear = 'N'
console.log(car1.userGear)
car1.userGear = 'X'
