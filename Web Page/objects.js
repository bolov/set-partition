class Item {
    constructor(element, name, value)
    {
        this.element = element;
        this.name = name;
        this.value = value;
    }
}

class Partition {
    constructor(name, items)
    {
        this.name = name;
        this.items = items;
    }
}

class Set {
    constructor(name, partitions)
    {
        this.name = name;
        this.partitions = partitions;
    }
}
