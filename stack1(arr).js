function stackObject(){
    var data = [];
    this.push = function(val){
        data.push(val);
        return this;
    }

    this.pop = function(){
        return data.pop();
    }

    this.isEmpty = function(){
        return !data.length;
    }

    this.size = function(){
        return data.length;
    }

    this.contains = function(val){
        return !(data.indexOf(val) == -1)
    }
}

var quint = new stackObject();
var dino = new stackObject();
console.log(quint);
quint.push(17).push("A");
console.log(quint);
console.log(quint.pop());
console.log(quint.isEmpty());
console.log(quint.size());
console.log(quint.contains(17))
console.log(quint)
