
const container=document.querySelector(".app");

const myApp=[
				{
				type: "FRUITS",
				msg: "Tremy E-Solutions <br> (Click the Correct Option)",
				path:"",
				structure:[{question:"apple",options:['apple.jpeg','banana.jpeg','mango.jpeg','grape.jpeg'], key:0},
							{question:"banana",options:['apple.jpeg','banana.jpeg','mango.jpeg','grape.jpeg'], key:1},
							{question:"mango",options:['apple.jpeg','banana.jpeg','mango.jpeg','grape.jpeg'], key:2},
							{question:"grape",options:['apple.jpeg','banana.jpeg','mango.jpeg','grape.jpeg'], key:3},
							{question:"pawpaw",options:['pawpaw.jpeg','banana.jpeg','mango.jpeg','grape.jpeg'], key:0},
							{question:"pear",options:['apple.jpeg','pear.jpeg','mango.jpeg','grape.jpeg'], key:1},
							{question:"watermelon",options:['watermelon.jpeg','banana.jpeg','mango.jpeg','grape.jpeg'], key:0},
							{question:"lemon",options:['apple.jpeg','banana.jpeg','mango.jpeg','lemon.jpeg'], key:3},
							{question:"blueberry",options:['blueberry.jpeg','pawpaw.jpeg','mango.jpeg','watermelon.jpeg'], key:0},
							{question:"orange",options:['mango.jpeg','orange.jpeg','mango.jpeg','pear.jpeg'], key:1}
							]
				},

				{
				type: "VEGETABLES",
				msg: "Tremy E-Solutions <br> Click the Correct Option",
				path:"",
				structure:[{question:"carrot",options:['carrot.jpeg','pepper.jpeg','tomatoes.jpeg','spinach.jpg'], key:0},
							{question:"tomatoes",options:['carrot.jpeg','pepper.jpeg','tomatoes.jpeg','spinach.jpg'], key:2},
							{question:"pepper",options:['carrot.jpeg','pepper.jpeg','tomatoes.jpeg','spinach.jpg'], key:1},
							{question:"spinach",options:['carrot.jpeg','pepper.jpeg','tomatoes.jpeg','spinach.jpg'], key:3},
							{question:"carbage",options:['carrot.jpeg','carbage.jpeg','tomatoes.jpeg','spinach.jpg'], key:1},
							{question:"garlic",options:['garlic.jpeg','pepper.jpeg','tomatoes.jpeg','spinach.jpg'], key:0},
							{question:"onion",options:['carrot.jpeg','onion.jpeg','tomatoes.jpeg','spinach.jpg'], key:1},
							{question:"okra",options:['okra.jpeg','pepper.jpeg','tomatoes.jpeg','spinach.jpg'], key:0}
							]
				},

				{
				type: "ANIMAL",
				msg: "Tremy E-Solutions <br> Click the Correct Option",
				path:"",
				structure:[{question:"dog",options:['dog.jpeg','lion.jpeg','horse.jpeg','pig.jpeg'], key:0},
							{question:"rat",options:['dog.jpeg','rat.jpeg','horse.jpeg','pig.jpeg'], key:1},
							{question:"fox",options:['dog.jpeg','lion.jpeg','fox.jpeg','pig.jpeg'], key:2},
							{question:"lion",options:['dog.jpeg','lion.jpeg','horse.jpeg','pig.jpeg'], key:1},
							{question:"pig",options:['dog.jpeg','lion.jpeg','horse.jpeg','pig.jpeg'], key:3},
							{question:"horse",options:['dog.jpeg','lion.jpeg','horse.jpeg','pig.jpeg'], key:2},
							{question:"bear",options:['dog.jpeg','lion.jpeg','horse.jpeg','bear.jpeg'], key:3},
							{question:"cat",options:['dog.jpeg','cat.jpeg','tortise.jpeg','pig.jpeg'], key:1},
							{question:"elephant",options:['elephant.jpeg','lion.jpeg','tiger.jpeg','pig.jpeg'], key:0},
							{question:"tiger",options:['cat.jpeg','tiger.jpeg','horse.jpeg','giraff.jpeg'], key:1},
							{question:"giraff",options:['bear.jpeg','lion.jpeg','horse.jpeg','giraff.jpeg'], key:3},
							{question:"zebra",options:['zebra.jpeg','bear.jpeg','horse.jpeg','tortise.jpeg'], key:0},
							{question:"cheetah",options:['sheep.jpeg','cheetah.jpeg','horse.jpeg','snake.jpeg'], key:1},
							{question:"deer",options:['tiger.jpeg','bear.jpeg','deer.jpeg','sheep.jpeg'], key:2},
							{question:"sheep",options:['sheep.jpeg','bear.jpeg','giraff.jpeg','tiger.jpeg'], key:0},
							{question:"snake",options:['rat.jpeg','bear.jpeg','fox.jpeg','snake.jpeg'], key:3},
							{question:"rabbit",options:['rat.jpeg','rabbit.jpeg','cat.jpeg','tortise.jpeg'], key:1},
							{question:"tortise",options:['tiger.jpeg','tortise.jpeg','elephant.jpeg','cat.jpeg'], key:1}
							]
				},
				{
				type: "PARTS OF THE BODY",
				msg: "Tremy E-Solutions <br> Click the Correct Option",
				path:"",
				structure:[{question:"Head",options:['hand.jpeg','leg.jpeg','head.jpeg','knee.jpeg'], key:2},
							{question:"Eyes",options:['finger.jpeg','eyes.jpeg','gum.jpeg','jaw.jpeg'], key:1},
							{question:"Knee",options:['hand.jpeg','leg.jpeg','head.jpeg','knee.jpeg'], key:3},
							{question:"Jaw",options:['finger.jpeg','eyes.jpeg','gum.jpeg','jaw.jpeg'], key:3},
							{question:"Leg",options:['hand.jpeg','leg.jpeg','head.jpeg','knee.jpeg'], key:1},
							{question:"Gum",options:['finger.jpeg','eyes.jpeg','gum.jpeg','jaw.jpeg'], key:2}

							]
				},
				{
				type: "BIRDS",
				msg: "Tremy E-Solutions <br> Click the Correct Option",
				path:"",
				structure:[{question:"Hen",options:['duck.jpeg','flamingo.jpeg','hen.jpeg','pigeon.jpeg'], key:2},
							{question:"Parrot",options:['parrot.jpeg','rooster.jpeg','turkey.jpeg','ostrich.jpeg'], key:0},
							{question:"Flamingo",options:['duck.jpeg','flamingo.jpeg','hen.jpeg','pigeon.jpeg'], key:1},
							{question:"Duck",options:['duck.jpeg','rooster.jpeg','turkey.jpeg','ostrich.jpeg'], key:0},
							{question:"Ostrich",options:['duck.jpeg','flamingo.jpeg','ostrich.jpeg','pigeon.jpeg'], key:2},
							{question:"Rooster",options:['parrot.jpeg','rooster.jpeg','turkey.jpeg','ostrich.jpeg'], key:1},
							{question:"Pigeon",options:['duck.jpeg','flamingo.jpeg','hen.jpeg','pigeon.jpeg'], key:3},
							{question:"Turkey",options:['parrot.jpeg','rooster.jpeg','turkey.jpeg','ostrich.jpeg'], key:2}

							]
				},

				{
				type: "INSECT",
				msg: "Tremy E-Solutions <br> Click the Correct Option",
				path:"",
				structure:[{question:"ANT",options:['housefly.jpeg','scorpion.jpeg','ant.jpeg','beetle.jpeg'], key:2},
							{question:"BEETLE",options:['beetle.jpeg','millipede.jpeg','mosquito.jpeg','housefly.jpeg'], key:0},
							{question:"BUG",options:['mosquito.jpeg','bug.jpeg','scorpion.jpeg','ant.jpeg'], key:1},
							{question:"HOUSEFLY",options:['housefly.jpeg','scorpion.jpeg','ant.jpeg','beetle.jpeg'], key:0},
							{question:"MILLIPEDE",options:['beetle.jpeg','millipede.jpeg','mosquito.jpeg','housefly.jpeg'], key:1},
							{question:"MOSQUITO",options:['mosquito.jpeg','bug.jpeg','scorpion.jpeg','ant.jpeg'], key:0},
							{question:"SCORPION",options:['mosquito.jpeg','bug.jpeg','scorpion.jpeg','ant.jpeg'], key:2}
							]
				},

				{
				type: "GENERAL",
				msg: "Tremy E-Solutions <br> Click the Correct Option",
				path:"",
				structure:[{question:"BAG",options:['bag.jpeg','book.jpeg','bed.jpeg','broom.jpeg'], key:0},
							{question:"BED",options:['bed.jpeg','bus.jpeg','book.jpeg','bucket.jpeg'], key:0},
							{question:"BOOKS",options:['bucket.jpeg','book.jpeg','broom.jpeg','bed.jpeg'], key:1},
							{question:"BROOM",options:['broom.jpeg','bulb.jpeg','car.jpeg','bus.jpeg'], key:0},
							{question:"BUCKET",options:['broom.jpeg','bucket.jpeg','bed.jpeg','bag.jpeg'], key:1},
							{question:"BULB",options:['bulb.jpeg','book.jpeg','broom.jpeg','bed.jpeg'], key:0},
							{question:"BUS",options:['bag.jpeg','bucket.jpeg','bus.jpeg','bed.jpeg'], key:2},
							{question:"CAR",options:['cup.jpeg','book.jpeg','broom.jpeg','car.jpeg'], key:3},
							{question:"CHAIR",options:['chair.jpeg','bus.jpeg','fan.jpeg','bucket.jpeg'], key:0},
							{question:"CUP",options:['bucket.jpeg','cup.jpeg','broom.jpeg','bed.jpeg'], key:1},
							{question:"COMPUTER",options:['desktop.jpeg','fan.jpeg','car.jpeg','crayon.jpeg'], key:0},
							{question:"FAN",options:['broom.jpeg','fan.jpeg','bed.jpeg','chair.jpeg'], key:1},
							{question:"CRAYON",options:['crayon.jpeg','book.jpeg','broom.jpeg','bed.jpeg'], key:0},
							{question:"FORK",options:['cup.jpeg','bucket.jpeg','fan.jpeg','fork.jpeg'], key:3},
							{question:"GENERATOR",options:['iron.jpeg','generator.jpeg','fan.jpeg','mouse.jpeg'], key:1},
							{question:"IRON",options:['laptop.jpeg','pen.jpeg','iron.jpeg','fork.jpeg'], key:2},
							{question:"LAPTOP",options:['plate.jpeg','laptop.jpeg','fan.jpeg','fork.jpeg'], key:1},
							{question:"MOUSE",options:['mouse.jpeg','printer.jpeg','laptop.jpeg','fork.jpeg'], key:0},
							{question:"PIN",options:['pin.jpeg','pencil.jpeg','spoon.jpeg','fork.jpeg'], key:0},
							{question:"PENCIL",options:['pot.jpeg','pen.jpeg','pencil.jpeg','fork.jpeg'], key:2},
							{question:"PEN",options:['pen.jpeg','pencil.jpeg','spoon.jpeg','fork.jpeg'], key:0},
							{question:"PLATE",options:['cup.jpeg','plate.jpeg','fan.jpeg','fork.jpeg'], key:1},
							{question:"POT",options:['plate.jpeg','pot.jpeg','iron.jpeg','fork.jpeg'], key:1},
							{question:"SPOON",options:['cup.jpeg','pen.jpeg','fork.jpeg','spoon.jpeg'], key:3},
							{question:"RADIO",options:['printer.jpeg','bucket.jpeg','radio.jpeg','fork.jpeg'], key:2}
							]
				},

				{
				type: "SHAPES",
				msg: "Tremy E-Solutions <br> Click the Correct Option",
				path:"nonlt",
				structure:[{question:"CIRCLE",options:['circle.png','rectangle.png','triangle.png','square.png'], key:0},
							{question:"TRIANGLE",options:['circle.png','rectangle.png','triangle.png','square.png'], key:2},
							{question:"SQUARE",options:['circle.png','rectangle.png','triangle.png','square.png'], key:3},
							{question:"RECTANGLE",options:['circle.png','rectangle.png','triangle.png','square.png'], key:1}
							
							]
				},
			]

	// create select element
	const select=document.createElement("select");
		select.setAttribute("onchange","load(this)")
	for(let i=0;i<myApp.length;i++){
		const option=document.createElement("option");
		option.value=i;
		option.innerHTML=myApp[i].type;
		select.appendChild(option);
	}

document.querySelector(".quiz-box").appendChild(select);


	//create class
	class App{
		constructor(myApp,container){
			this.app=myApp;
			this.container=container;
			this.index=0;
			this.score=0;
			this.quizSize=this.app.structure.length
			this.optionSize=this.app.structure[0].options.length;
			this.msgEle=this.container.querySelector(".msg");
			this.quizEle=this.container.querySelector(".quiz");
			this.optionEle=this.container.querySelector(".option-box");
			this.questionNumber=this.container.querySelector(".question-number");
			this.scoreEle=this.container.querySelector(".score-board");
			this.setQuestion();
			this.setOptions();
			this.scoreBoard();


		}
	 	setQuestion(){
			this.msgEle.innerHTML=this.app.msg;
			this.quizEle.innerHTML=this.app.structure[this.index].question;
			this.questionNumber.innerHTML=(this.index+1)+"/"+this.quizSize;
	}

	setOptions(){
		this.optionEle.innerHTML="";
		for(let i=0; i<this.optionSize; i++){
			const button=document.createElement("button")
			button.type="button";
			button.id=i;
			const img=document.createElement("img");
			img.src=this.app.path+"/"+this.app.structure[this.index].options[i];
			button.appendChild(img)
			this.optionEle.appendChild(button)
		}
		this.optionClick();

	}

	scoreBoard(){
		this.scoreEle.innerHTML=this.score;
	}

	optionClick(){
		const that=this;
		const options=this.optionEle.children;
		for(let i=0; i<options.length; i++){
			options[i].addEventListener("click",function(){
				const span=document.createElement("span");
				if(this.id==that.app.structure[that.index].key){
					span.innerHTML="Correct";
					this.classList.add("correct");
					that.score++;
					that.scoreBoard();
				}
				else{
					span.innerHTML="wrong";
					this.classList.add("wrong");
				}
				this.appendChild(span);

				for(let j=0; j<that.optionEle.children.length; j++){

					if(this.id==that.optionEle.children[j].id){

					}
					else if(that.optionEle.children[j].id==that.app.structure[that.index].key){
						var span2=document.createElement("span");
						span2.innerHTML="Correct";
						that.optionEle.children[j].appendChild(span2);
						that.optionEle.children[j].classList.add("correct");
					}
					else{
						that.optionEle.children[j].classList.add("hide");
					}
				}
				this.style.pointerEvents="none";
				that.index++;

				if(that.index>that.quizSize-1){
					setTimeout(function(){
						that.quizOver();
					},2000);
					

				}

				//next quiz update
				setTimeout(function(){
					
					that.setQuestion()
					that.setOptions()

				},2000);
			})


		}
	}

	quizOver(){
		this.msgEle.innerHTML="";
		this.quizEle.innerHTML="";
		
		if(this.score > this.quizSize/2){

			this.optionEle.innerHTML="<h1><span>Quiz Over</span> <br> Welldone</h1>";
		}
		else{
			this.optionEle.innerHTML="<h1><span>Quiz Over</span> <br> You Need More Practice</h1>";
		}
		
	}
	}



	// create object without onchange of select
	const app1=new App(myApp[0],container)

	function load(ele){
		const app1=new App(myApp[ele.value],container)
	}
