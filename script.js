function getWhat(A,B,N){

	var result = [];

	for (var i = 1; i <= N; i++) {
		if(i % A == 0 && i % B == 0){
			result.push("FB");
		}else if(i % A == 0){
			result.push("F");
		}else if(i % B == 0){
			result.push("B");
		}else{
			result.push(i);
		}	
	}

	return result.join(" ");
}


console.log(getWhat(2,7,15));



