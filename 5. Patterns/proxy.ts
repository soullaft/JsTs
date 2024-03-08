interface SomeSubject {
    doAction(): void;
}

class SomeRealSubject implements SomeSubject {
    private s: string;

    constructor(s: string) {
        this.s = s;
    }
    public doAction(): void {
        console.log("`doAction` of RealSubject", this.s, "is being called!");
    }
}

class SomeProxy implements SomeSubject {
    private realSubject: SomeRealSubject;
    private s: string;

    constructor(s: string) {
        this.s = s;
    }

    public doAction(): void {
        console.log("`doAction` of Proxy(", this.s, ")");
        if (this.realSubject === null || this.realSubject === undefined) {
            console.log("creating a new RealSubject.");
            this.realSubject = new SomeRealSubject(this.s);
        }
        this.realSubject.doAction();
    }
}


function Do(): void {
    let proxy1: SomeProxy = new SomeProxy("SomeProxy1");
    let proxy2: SomeProxy = new SomeProxy("SomeProxy2");

    proxy1.doAction();
	proxy1.doAction();
	proxy2.doAction();
	proxy2.doAction();
	proxy1.doAction();
}


Do();