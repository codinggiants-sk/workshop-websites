const questionsNumber=document.querySelectorAll('.question').length;
let points=0;


document.getElementById("check").addEventListener("click", function() {
	points=0;

	for(let i=1;i<=questionsNumber;i++){
		for(let j=1;j<=3;j++){
			if(document.getElementById('q'+i+'-'+'a'+j).checked && document.getElementById('q'+i+'-'+'a'+j).classList.contains("correct")) { 
				points++;
				document.querySelector('#q'+i+'-'+'a'+j+'+label').classList.add('correct');
			} 
		}
	}

	document.getElementById('result').textContent='Correct answers '+points+'/'+questionsNumber;

});
