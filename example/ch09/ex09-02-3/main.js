class Car {
  constructor(make, model) {
    this.make = make
    this.model = model
    // _をプレフィックスし、プライベートプロパティであることを明示的にする
    this._userGears = ['P', 'N', 'R', 'D']
    this._userGear = this._userGears[0]
  }

  /**
   * アクセッサプロパティ(ダイナミックプロパティ)の実装
   * getまたはsetにつづいてプロパティ名userGearを名前としてもつ関数を定義するとgetter/setterを実装出来る
   */
  get userGear() { return this._userGear } // getter 
  set userGear(value) {
    if(this._userGears.indexOf(value) < 0)
      throw new Error(`ギア指定が正しくない:${value}`)
    this._userGear = value
  }

  /**
   * アクセッサプロパティを利用してプロパティを操作
   */
  shift(gear) { this.userGear = gear }
}

const car1 = new Car('Tesla', 'Model S')
const car2 = new Car('Mazda', '3i')
console.log(car1)
console.log(car2)
car1.shift('D')
car2.shift('R')
console.log(car1.userGear)
console.log(car2.userGear)
car1.userGear = 'X'
