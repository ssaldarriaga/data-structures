class HashTable {
  constructor(size) {
    this.data =  new Array(size);
  }

  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  add(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const bucket = this.data[address];
    if (bucket) {
      const index = bucket.findIndex(([bucketKey]) => bucketKey === key);
      return bucket[index][1];
    }
  }

  getHashes() {
    const hashes = [];
    for (let i = 0; i < this.data.length - 1; i++) {
      const bucket = this.data[i];
      if (Array.isArray(bucket)) {
        const [key] = bucket[0];
        hashes.push(this.hashMethod(key))
      }
    }
    return hashes;
  }

  delete(key) {
    const address = this.hashMethod(key);
    const values = this.data[address];
    if (Array.isArray(values)) {
      if (values.length === 1) {
        delete this.data[address]
        return values;
      }

      const deletedValues = [];
      const remainigValue = [];
      for (let i = 0; i < values.length; i++) {
        const [itemKey] = values[i];
        const bucketValues = itemKey === key ? deletedValues : remainigValue;
        bucketValues.push(values[i]);
      }
      this.data[address] = remainigValue.length ? remainigValue : undefined;
      return deletedValues;
    }
    
    return undefined;
  }
}

const hashTable = new HashTable(50);

// console.log('HashTable', hashTable);
console.log('add', hashTable.add('sebas', 'Hello'));
console.log('add', hashTable.add('Diego', 1990));
console.log('add', hashTable.add('Mariana', 1998));
console.log('add', hashTable.add('Alejandra', 2000));
console.log('get', hashTable.get('Mariana'));
// console.log('HashTable', hashTable);
// console.log('getHashes', hashTable.getHashes());
console.log('delete', hashTable.delete('Alejandra'))
console.log('HashTable', hashTable);