class Iterator {
    constructor(collection) {
        this.collection = collection;
        this.index = 0;
    }

    prev() {
        if (this.index <= 0)
            this.index = this.collection.length - 1;
        else
            this.index--;
        return this.getItem();
    }

    next() {
        if (this.index >= this.collection.length - 1)
            this.index = 0;
        else
            this.index++;
        return this.getItem();
    }

    getItem() {
        return this.collection[this.index];
    }
}