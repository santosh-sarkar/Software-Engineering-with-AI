const obj = {
    name : "computer",
    quantity : 1,
    start: function(){
        console.log(arguments)
        console.log(`${this.name} hahhahah`);
    }
}

obj.start(1,2)