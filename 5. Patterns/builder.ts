class SomeProduct {
    someParts: string[];

    constructor() {
        this.someParts = [];
    }
}

interface IBuilder<T> {
    buildSomePartA(): this;
    buildSomePartB(): this;
    buildSomePartC(): this;
    getBuildResult(): T;
}

class SomeProductBuilder implements IBuilder<SomeProduct> {
    protected readonly _someProduct: SomeProduct;

    constructor() {
        this._someProduct = new SomeProduct();
    }

    buildSomePartA(): this {
        this._someProduct.someParts.push('A');
        return this;
    }
    buildSomePartB(): this {
        this._someProduct.someParts.push('B');
        return this;
    }
    buildSomePartC(): this {
        this._someProduct.someParts.push('C');
        return this;
    }

    getBuildResult(): SomeProduct {
        return this._someProduct;
    }
}

class SomeBuildDirector {
    public static buildSomeProduct(): SomeProduct {
        return new SomeProductBuilder()
                                       .buildSomePartA()
                                       .buildSomePartB()
                                       .buildSomePartC()
                                       .getBuildResult()
    }
}


let someProduct = SomeBuildDirector.buildSomeProduct();
console.log(someProduct.someParts);