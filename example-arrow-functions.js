var names = ['test', 'test3', 'test2'];

// names.forEach(function (name) {
//     console.log('foreach', name)
// });

// names.forEach((name) => {
//     console.log('arrow', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('TESTER'));

var person = {
    name: 'Ryan',
    greet: () => {
        names.forEach((name) => {
            console.log(this.name + ', Says hi to ' + name)
        })
    }
};

person.greet();

addStmt = (a, b) => {
    return a + b;
}

addExpr = (a, b) => a + b;


console.log(addStmt(2, 2));
console.log(addExpr(3, -4));