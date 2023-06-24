class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  
  function createCats(stringArray) {
    const cats = [];
    for (const string of stringArray) {
      const [name, age] = string.split(' ');
      const cat = new Cat(name, parseInt(age));
      cats.push(cat);
    }
    return cats;
  }
  
  const catStrings = ['Kitty 3', 'Whiskers 5', 'Smokey 2'];
    
  const cats = createCats(catStrings);

for (const cat of cats) {
  cat.meow();
}