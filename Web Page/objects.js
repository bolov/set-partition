class Item {
    constructor(name, value)
    {
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

//console.log(default_sets_hack_str);


function clear_sets()
{
}
