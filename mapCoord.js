/***************************Constructor functions***************************/
function AdjMap(num = 0) {
	this.map = []; //creates empty array to start with
	for (var i = 0; i < num; i++) { //populates map with num x num dimensions with no connections
		this.map.push([]); //pushes an empty array for every index from 0-num exclusive
		for (var j = 0; j < num; j++) {
			this.map[i].push(0); //pushes a 0 for every index from 0-num exclusive into every array in this.map
		}
	}
	return this;
}
/***************************Constructor functions***************************/

/****************************Prototype functions****************************/
AdjMap.prototype.AddVector = function() {
	var vec = []; //creates a new array to push to this.map
	for (var i = 0; i < this.map.length; i++) {
		vec.push(0); //pushes a 0 to this new array at every index (to make it equal in size to the other arrays in this.map)
	}
	this.map.push(vec); //push that new array to this.map
	for (var j = 0; j < this.map.length; j++) {
		this.map[j].push(0); //add a 0 to the end of every array in this.map (including the new one)
	}
	return this;
};

AdjMap.prototype.RemVector = function(idx) {
	this.map.splice(idx, 1); //remove one element from this.map at the given index
	for (var i = 0; i < this.map.length; i++) {
		this.map[i].splice(idx, 1); //for every array in this.map, remove 1 element at the given index
	}
	return this;
};

AdjMap.prototype.AddEdge = function(idx1, idx2) { //creates connection between the two indexes
	this.map[idx1][idx2] = 1;
	this.map[idx2][idx1] = 1;
	return this;
};

AdjMap.prototype.RemEdge = function(idx1, idx2) { //removes connection between the two indexes
	this.map[idx1][idx2] = 0;
	this.map[idx2][idx1] = 0;
	return this;
};
/****************************Prototype functions****************************/

/***********************************Tests***********************************/
var myAdjMap = new AdjMap(10);
console.log(myAdjMap.map);
myAdjMap.AddVector();
console.log(myAdjMap.map);
myAdjMap.AddEdge(2, 4);
myAdjMap.AddEdge(10, 5);
myAdjMap.AddEdge(2, 6);
myAdjMap.AddEdge(0, 6);
myAdjMap.AddEdge(5, 8);
console.log(myAdjMap.map);
myAdjMap.RemEdge(2, 4);
console.log(myAdjMap.map);
myAdjMap.RemVector(2);
console.log(myAdjMap.map);
/***********************************Tests***********************************/
