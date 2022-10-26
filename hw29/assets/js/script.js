class Circle {
    constructor(radius) {
      this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(newRadius) {
        this._radius = newRadius;
    }
    get diam() {
        return this._radius * 2;
    }
    get plosh() {
        return this.plo();
    }
    get dovs() {
        return this.dov();
    }
    plo() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    dov() {
        return 2 * Math.PI * this.radius;
    }
  };

  let firstCircle = new Circle (12);
  console.log('get-властивість, яке повертає радіус кола = ' + firstCircle.radius);
  firstCircle.radius = 20;
  console.log('set-властивість, що встановлює радіус кола = ' + firstCircle.radius);
  console.log('get-властивість, яке повертає діаметр кола = ' + firstCircle.diam);
  console.log('Площа кола = ' + firstCircle.plosh);
  console.log('Довжина кола = ' + firstCircle.dovs);