function calculator(number){
    return  {
        add: function(value){
            return number + value;
        },
        sub: function(value){
            return number - value;
        },
        mult: function(value){
            return number * value;
        },
        set: function(value){
            return   number = value;
        
        },
        get: function(){
            return number;
        }
    }
}

const value = calculator(10);

console.log(value.add(45));
console.log(value.sub(45));
console.log(value.mult(5));
console.log(value.set(100));
console.log(value.get());
console.log(value.mult(5));
