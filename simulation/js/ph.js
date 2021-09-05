var ountcan,rv,answer1,answer2,answer3,answer4,answer8;
var el1,opt1,el2,opt2,el3,opt3;
var count=0;

var ca;
var questions=["Buffer solutions are used to </br>calibrate pH meters because </br>they resist changes in pH.",
				"The pH scale is ",
				"What is the neutral value of pH scale is ",
				"pH is measure of ___________ ions",
				"Measurement of pH value of</br> sea water helps in ",
				"A pH meter is a high impedance </br>electrometer calibrated in terms of pH",
				"What factors can affect the pH of drinking water?"];
				
var options2=[["True","False"],//true
			  ["a linear scale","an exponential scale","a logarithmic scale","none of the above"],//"a logarithmic scale"
			  ["Less than 5","Equal to 7","Less than 8","Less than 10"],//"Equal to 7"
			  ["Hydrogen","Oxygen","Hydroxide","Carbonates"],//hydrogen
			  ["sterilization","fermentation","agricultural activity","corrosion research"], //corrosion research
			  ["True","False"],//true
			  ["Temperature","Dissolved Minerals","Carbon dioxide concentration","All of the above"]];//"All of the above"
	          
function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}

			  
var pH1=[[7.8,5.3,1.9,2.46],
         [8.0,5.6,2.2,2.49],
		 [8.2,7.9,2.4,2.52],
		 [8.3,8.6,2.6,2.54],
		 [8.5,9.0,2.8,2.55]];
var pH2=[["Sea Water","Sewage water","Lime water","Carbonated drink"],
		["Alkaline","Alkaline","Acidic","Acidic"],
		["1","1","2","2"]];
var val;
var p=Math.floor(Math.random()*(5));
function navNext()
{
	for(temp=0;temp<=10;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

//to prevent from entering non-integer values and alphabets
$(function()
{
	$('input').on('input', function() {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
});

function magic()
{
	if(simsubscreennum==1)
	{
		$("input[type='radio'][name='options']").click(function()
		{
			document.getElementById("r1").disabled = true;
			document.getElementById("r2").disabled = true;
			document.getElementById("r3").disabled = true;
			document.getElementById("r4").disabled = true;
			rv=$("input[name='options']:checked").val();
			val=rv;
			if(rv==1)
			{
				document.getElementById("l1-1").style.color="red";
				document.getElementById("nextButton").style.visibility="visible";
			}
			if(rv==2)
			{
				document.getElementById("l1-2").style.color="red";
				document.getElementById("nextButton").style.visibility="visible";
			}
			if(rv==3)
			{
				document.getElementById("l1-3").style.color="red";
				limeJuice();
			}
			if(rv==4)
			{
				document.getElementById("l1-4").style.color="red";
				pourCoke();
			}
		});
	}
	if(simsubscreennum==2)
	{
		$("#2-1").fadeIn(500);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},700);
	}
	if(simsubscreennum==3)
	{
		can=3;
		cleanElectrode();
	}
	
	if(simsubscreennum==4)
	{
		can=4;
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left:590px; top:450px; height:30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(0deg)";
		document.getElementById("4-2").onclick=function()
		{
			myStopFunction();
			document.getElementById("4-2").onclick="";
			calibrate();
		}
		document.getElementById("4-3").onclick=function()
		{
			myStopFunction();
			document.getElementById("4-3").onclick="";
			calibrate();
		}
	}
	if(simsubscreennum==5)
	{
		can=5;
		cleanElectrode();
	}
	
	if(simsubscreennum==6)
	{
		can=6;
		document.getElementById("p"+can+"-7").innerHTML="0.00";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left:590px; top:450px; height:30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(0deg)";
		document.getElementById("6-2").onclick=function()
		{
			myStopFunction();
			document.getElementById("6-2").onclick="";
			calibrate2();
		}
		document.getElementById("6-3").onclick=function()
		{
			myStopFunction();
			document.getElementById("6-3").onclick="";
			calibrate2();
		}
	}
	if(simsubscreennum==7)
	{
		$("#7-1").fadeIn(500);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},700);
	}
	if(simsubscreennum==8)
	{
		can=7;
		cleanElectrode();
	}
	
	if(simsubscreennum==9)
	{
		can=8;
		if(rv==1)
		{
			document.getElementById("8-1").style="position:absolute; left:472.5px; top:390px; border-top:2px solid #E4FFFF; background-color:#F5FCFF; width:63px; height:80px; opacity:0.65;";
			document.getElementById("8-3").style="position:absolute; left:475px; top:407.5px; border:1px solid black; text-align:center; background-color:#ffffff; cursor:pointer;font-size:9px; padding:2px;";
			document.getElementById("8-3").innerHTML="Sea water";
		}
		if(rv==2)
		{
			document.getElementById("8-1").style="position:absolute; left:472.5px; top:390px; border-top:2px solid #FFFACD; background-color:#FFFACD; width:59px; height:80px;";
			document.getElementById("8-3").style="position:absolute; left:480px; top:407.5px; border:1px solid black; text-align:center; background-color:#ffffff; cursor:pointer;font-size:9px; padding:2.75px;";
			document.getElementById("8-3").innerHTML="Sewage </br> water";
		}
		if(rv==3)
		{
			document.getElementById("8-1").style="position:absolute; left:472.5px; top:390px; border-top:2px solid #D3D3D3; background-color:#FFFFFF; width:59px; height:80px; opacity:0.3;";
			document.getElementById("8-3").style="position:absolute; left:473px; top:407.5px; border:1px solid black; text-align:center; background-color:#ffffff; cursor:pointer;font-size:9px; padding:2px; ";
			document.getElementById("8-3").innerHTML="Lime water";			
		}
		if(rv==4)
		{
			document.getElementById("8-1").style="position:absolute; left:472.5px; top:390px; border-top:2px solid #2b1d0e; background-color:#492A15; width:59px; height:80px;";
			document.getElementById("8-3").style="position:absolute; left:472.49px; top:405px; border:1px solid black; text-align:center; background-color:#ffffff; cursor:pointer;font-size:8.5px; padding:2x;";
			document.getElementById("8-3").innerHTML="Carbonated </br>drink";
		}
		
		document.getElementById("p"+can+"-7").innerHTML="0.00";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left:590px; top:450px; height:30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(0deg)";
		document.getElementById("8-2").onclick=function()
		{
			myStopFunction();
			document.getElementById("8-2").onclick="";
			calibrate2();
		}
		document.getElementById("8-3").onclick=function()
		{
			myStopFunction();
			document.getElementById("8-3").onclick="";
			calibrate2();
		}
	}
	if(simsubscreennum==10)
	{
		document.getElementById("p8-1").style.visibility="hidden";
		document.getElementById("p9-1").innerHTML="The pH of "+pH2[0][val-1]+" = "+pH1[p][val-1];
		document.getElementById("q1-1").innerHTML="The "+pH2[0][val-1]+" is __________ .";
	}
}

function checkInference()
{
	document.getElementById("nextButton").style.visibility="hidden";
	var str;
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val() == pH2[2][val-1])
	{
		document.getElementById("ans").innerHTML="Good! Your answer is correct.";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is "+pH2[1][val-1];
	}
	setTimeout(function()
	{
		document.getElementById("p9-1").style.visibility="hidden";
		document.getElementById("inference").style.visibility="hidden";
		document.getElementById("infAns").innerHTML="A pH less than 7 is acidic.</br>A pH of 7 is neutral.</br>A pH greater than 7 is basic.";
		$("#infAns").fadeIn(750);
	},1000);
}

function cleanElectrode()
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left:570px; top:365px; height:30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(0deg)";
	document.getElementById(can+"-4").onclick=function()
	{
		myStopFunction();
		document.getElementById(can+"-4").onclick="";	
		$("#"+can+"-4").animate({"position":"absolute","left":"210px"},700);
		$("#"+can+"-5").animate({"position":"absolute","left":"265px"},700,
		function()
		{
			document.getElementById(can+"-6").style.visibility="visible";
			$("#"+can+"-5").animate({"position":"absolute","top":"340px"},1200);
			$("#"+can+"-3").animate({"position":"absolute","top":"372px"},1200,
			function()
			{
				document.getElementById(can+"-6").style.visibility="hidden";
				setTimeout(function()
				{
					document.getElementById(can+"-4").style.visibility="hidden";
					document.getElementById(can+"-5").style.visibility="hidden";
					document.getElementById(can+"-1a").style.webkitAnimation="rotateElectrode 1s forwards";
					document.getElementById(can+"-1b").style.webkitAnimation="rotateElectrode 1s forwards";
					setTimeout(function()
					{
						document.getElementById("note"+can+"-1").style.visibility="visible";
						document.getElementById("b"+can+"-1").onclick=function()
						{
							document.getElementById("note"+can+"-1").style.visibility="hidden";
							document.getElementById(can+"-7a").style.visibility="visible";
							document.getElementById(can+"-7b").style.visibility="visible";
							setTimeout(function()
							{
								$("#"+can+"-1a").animate({"position":"absolute","left":"290px","top":"110px"},1000,
								function()
								{
									$("#"+can+"-7a").animate({"position":"absolute","left":"310px","top":"221px"},700);
									$("#"+can+"-7b").animate({"position":"absolute","left":"310.5px","top":"214px"},700,
									function()
									{
										$("#"+can+"-7a").animate({"position":"absolute","left":"310px","top":"227px"},200);
										$("#"+can+"-7b").animate({"position":"absolute","left":"310.5px","top":"220px"},200,
										function()
										{
											document.getElementById(can+"-7a").style.webkitAnimation="moveTissue1 1s 3";
											document.getElementById(can+"-7b").style.webkitAnimation="moveTissue2 1s 3";
											setTimeout(function()
											{
												$("#"+can+"-1a").animate({"position":"absolute","left":"190px","top":"110px"},500);
												$("#"+can+"-7a").animate({"position":"absolute","left":"360px","top":"181px"},500);
												$("#"+can+"-7b").animate({"position":"absolute","left":"360.5px","top":"174px"},500,
												function()
												{
													document.getElementById(can+"-7a").style.visibility="hidden";
													document.getElementById(can+"-7b").style.visibility="hidden";
													$("#"+can+"-1b").animate({"position":"absolute","left":"290px","top":"110px"},
													function()
													{
														document.getElementById(can+"-7a").style.webkitAnimation="";
														document.getElementById(can+"-7b").style.webkitAnimation="";
														document.getElementById(can+"-7a").style.visibility="visible";
														document.getElementById(can+"-7b").style.visibility="visible";
														$("#"+can+"-7a").animate({"position":"absolute","left":"310px","top":"227px"},500);
														$("#"+can+"-7b").animate({"position":"absolute","left":"310.5px","top":"220px"},500,
														function()
														{
															document.getElementById(can+"-7a").style.webkitAnimation="moveTissue1 1s 3";
															document.getElementById(can+"-7b").style.webkitAnimation="moveTissue2 1s 3";
															setTimeout(function()
															{
																$("#"+can+"-1b").animate({"position":"absolute","left":"220px","top":"110px"},500);
																$("#"+can+"-7a").animate({"position":"absolute","left":"360px","top":"181px"},500);
																$("#"+can+"-7b").animate({"position":"absolute","left":"360.5px","top":"174px"},500,
																function()
																{
																	document.getElementById(can+"-7a").style.visibility="hidden";
																	document.getElementById(can+"-7b").style.visibility="hidden";
																	// $("#3-1b").animate({"position":"absolute","left":"290px","top":"110px"});
																	if(can==3)
																	{
																		validateAnswer(1,2,"370px","200px");
																	}
																	if(can==5)
																	{
																		validateAnswer(3,0,"350px","200px");
																	}
																	if(can==7)
																	{
																		validateAnswer(2,1,"350px","200px");
																	}
																	//document.getElementById("nextButton").style.visibility="visible";
																});
															},3000);																	
														});
													});
												});
											},3000);
										});
									});
								});
							},250);
						}
					},1000);
				},250);
			});
		});
	}
}

function calibrate()
{
	document.getElementById(can+"-4").style.visibility="visible";
	$("#"+can+"-1").animate({"position":"absolute","left":"314px"},750);
	$("#"+can+"-2").animate({"position":"absolute","left":"310px"},750);
	$("#"+can+"-3").animate({"position":"absolute","left":"319px"},750);
	$("#"+can+"-4").animate({"position":"absolute","left":"350px"},750,
	function()
	{
		document.getElementById(can+"-4").style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left:259px; top:420px; height:30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById(can+"-5").onclick=function()
		{
			myStopFunction();
			document.getElementById(can+"-5").onclick="";
			document.getElementById(can+"-7").style.backgroundColor="#D3D3D3";
			document.getElementById("p"+can+"-7").innerHTML="0.00";
			document.getElementById(can+"-4").style.visibility="hidden";
			//place electrode1
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left:370px; top:220px; height:30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			document.getElementById(can+"-6a").onclick=function()
			{
				myStopFunction();
				document.getElementById(can+"-6a").onclick="";
				$("#"+can+"-6a").animate({"position":"absolute","left":"92.5px"},700,
				function()
				{
					$("#"+can+"-6a").animate({"position":"absolute","top":"253px"},700,
					function()
					{
						//place electrode2
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left:400px; top:220px; height:30px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
						// Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
						// Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(180deg)";
						document.getElementById(can+"-6b").onclick=function()
						{
							myStopFunction();
							document.getElementById(can+"-6b").onclick="";
							$("#"+can+"-6b").animate({"position":"absolute","left":"107.5px"},700,
							function()
							{
								$("#"+can+"-6b").animate({"position":"absolute","top":"243px"},700,
								function()
								{
									document.getElementById("p"+can+"-7").innerHTML="7.00";
									//document.getElementById("nextButton").style.visibility="visible";
									validateAnswer(0,0,"440px","200px");
								});
							});
						}
					});
				});
			}
		}
	});
}

function calibrate2()
{
	document.getElementById(can+"-4").style.visibility="visible";
	$("#"+can+"-1").animate({"position":"absolute","left":"316.5px"},750);
	$("#"+can+"-2").animate({"position":"absolute","left":"310px"},750);
	if(can==6)
	{
		$("#"+can+"-3").animate({"position":"absolute","left":"319px"},750);
	}
	if(can==8)
	{
		if(rv==1)
		{
			$("#"+can+"-3").animate({"position":"absolute","left":"319px"},750);
		}
		if(rv==2)
		{
			$("#"+can+"-3").animate({"position":"absolute","left":"324px"},750);
		}
		if(rv==3)
		{
			$("#"+can+"-3").animate({"position":"absolute","left":"317px"},750);
		}
		if(rv==4)
		{
			$("#"+can+"-3").animate({"position":"absolute","left":"316.49px"},750);
		}
	}
	$("#"+can+"-4").animate({"position":"absolute","left":"350px"},750,
	function()
	{
		document.getElementById(can+"-4").style.visibility="hidden";
		//place electrode1
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left:370px; top:220px; height:30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById(can+"-6a").onclick=function()
		{
			myStopFunction();
			document.getElementById(can+"-6a").onclick="";
			$("#"+can+"-6a").animate({"position":"absolute","left":"92.5px"},700,
			function()
			{
				$("#"+can+"-6a").animate({"position":"absolute","top":"253px"},700,
				function()
				{
					//place electrode2
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left:400px; top:220px; height:30px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById(can+"-6b").onclick=function()
					{
						myStopFunction();
						document.getElementById(can+"-6b").onclick="";
						$("#"+can+"-6b").animate({"position":"absolute","left":"107.5px"},700,
						function()
						{
							$("#"+can+"-6b").animate({"position":"absolute","top":"243px"},700,
							function()
							{
								if(can==6)
								{
									document.getElementById("p"+can+"-7").innerHTML="4.00";
									document.getElementById("nextButton").style.visibility="visible";
								}
								if(can==8)
								{
									document.getElementById("p"+can+"-7").innerHTML=pH1[p][val-1];
									document.getElementById("p8-1").style.visibility="visible";
									document.getElementById("p8-1").innerHTML="pH of "+pH2[0][val-1]+" is "+pH1[p][val-1];
									if(can==6)
									{
										validateAnswer(5,0,"300px","300px");
									}
									if(can==8)
									{
										document.getElementById("nextButton").style.visibility="visible";
										// if(val==1)
										// {
											// validateAnswer(4,3,"450px","300px");
										// }
										// if(val==3)
										// {
											// validateAnswer(6,3,"450px","300px");
										// }
										// if(val==2 || val==4)
										// {
											// document.getElementById("nextButton").style.visibility="visible";
										// }
									}
								}
							});
						});
					}
				});
			});
		}
	});
}

function pourCoke()
{
	document.getElementById("c1-1").style.visibility="visible";
	document.getElementById("c1-2a").style.visibility="visible";
	document.getElementById("c1-4").style.visibility="visible";
	document.getElementById("c1-5").style.visibility="visible";
	document.getElementById("c1-6").style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left:525px; top:300px; height:30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById("c1-2a").onclick=function()
	{
		myStopFunction();
		document.getElementById("c1-2a").onclick="";
		document.getElementById("c1-2a").style.visibility="hidden";
		document.getElementById("c1-2b").style.visibility="visible";
		$("#c1-2b").animate({"position":"absolute","left":"432px","top":"140px"},350);
		$("#c1-1").animate({"position":"absolute","left":"505px","top":"162.5px"},360,
		function()
		{
			document.getElementById("c1-1").style.animation="rotateBottle 0.5s forwards";
			document.getElementById("c1-2b").style.animation="rotateBottle 0.5s forwards";
			var audio1=new Audio("images/carbonated_drink_sound.mp3");
			audio1.play();
			setTimeout(function()
			{
				$("#c1-1").css({"position":"absolute","left":"464px"});
				$("#c1-1").animate({"position":"absolute","top":"185px"},375,
				function()
				{
					$("#c1-4").animate({"position":"absolute","top":"290px"},2500);
					document.getElementById("c1-2b").style.animation="rotateBottle2 1s forwards";
					$("#c1-1").animate({"position":"absolute","top":"199px"},1000,
					function()
					{
						$("#c1-1").animate({"position":"absolute","top":"209px"},1000,
						function()
						{
							audio1.pause();
							document.getElementById("c1-1").style.visibility="hidden";
							document.getElementById("c1-2b").style.animation="rotateBottle3 0.5s forwards";
							setTimeout(function()
							{
								document.getElementById("c1-2b").style.visibility="hidden";
								document.getElementById("c1-6").style.visibility="hidden";
								$("#c1-4").animate({"position":"absolute","left":"142px","top":"390px"},500);
								$("#c1-5").animate({"position":"absolute","left":"135px","top":"375px"},500,
								function()
								{
									document.getElementById("nextButton").style.visibility="visible";
									document.getElementById("c1-4").style.visibility="hidden";
									document.getElementById("c1-5").style.visibility="hidden";
								});
							},750);
						});
					});
				});
			},400);
		});
	}
}

function limeJuice()
{
	count=1;
	document.getElementById("lj1-1").style.visibility="visible";
	document.getElementById("lj1-2").style.visibility="visible";
	document.getElementById("lj1-3").style.visibility="visible";
	document.getElementById("lj1-4").style.visibility="visible";
	document.getElementById("c1-5").style.visibility="visible";
	document.getElementById("c1-6").style.visibility="visible";
	document.getElementById("v1-1").style.visibility="visible";
	for(i=1;i<=4;i++)
	{
		document.getElementById("l"+i).style.visibility="visible";
	}
	// place lime in squeezer
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left:552.5px; top:322.5px; height:30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";
	document.getElementById("l1").onclick=function()
	{
		myStopFunction();
		document.getElementById("l1").onclick="";
		document.getElementById("l1").style.visibility="hidden";
		document.getElementById("1-1").style.visibility="visible";
		$("#1-1").animate({"position":"absolute","left":"440px","top":"190px"},600,
		function()
		{
			$("#1-1").animate({"position":"absolute","left":"375px","top":"200px"},300,
			function()
			{
				document.getElementById("l1").style="position:absolute; left:385px; top:237.5px; background:yellow; display:inline-block; height:15px; width:30px; border-bottom-left-radius:30px; border-bottom-right-radius:30px;";
				document.getElementById("l1").style.visibility="visible";
				document.getElementById("1-1").style.visibility="hidden";
				
				//squeezing
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left:425px; top:175px; height:30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(245deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(245deg)"; 
				// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(245deg)";
				document.getElementById("lj1-1").onclick=function()
				{
					myStopFunction();
					document.getElementById("lj1-1").onclick="";
					document.getElementById("lj1-1").style.transformOrigin="0% 100%";
					document.getElementById("lj1-1").style.animation="rotateSqueezer1 1s forwards";
					setTimeout(function()
					{
						document.getElementById("lj1-1").style.transformOrigin="0% 100%";
						$("#lj1-4").animate({"position":"absolute","top":"342px"},5000);
						document.getElementById("lj1-1").style.animation="rotateSqueezer2 6s forwards";
						$("#drop1-1").css({"visibility":"visible","position":"absolute","left":"390px","top":"268px"});
						document.getElementById("drop1-1").style.animation="drop1 0.65s 8";
						setTimeout(function()
						{
							$("#drop1-2").css({"visibility":"visible","position":"absolute","left":"390px","top":"268px"});
							document.getElementById("drop1-2").style.animation="drop1 0.75s 7";
							setTimeout(function()
							{
								$("#drop1-3").css({"visibility":"visible","position":"absolute","left":"390px","top":"268px"});
								document.getElementById("drop1-3").style.animation="drop1 0.85s 6";
								setTimeout(function()
								{
									document.getElementById("drop1-1").style.visibility="hidden";
									document.getElementById("drop1-2").style.visibility="hidden";
									document.getElementById("drop1-3").style.visibility="hidden";
									setTimeout(function()
									{
										document.getElementById("v1-1").style.visibility="hidden";
										for(i=1;i<=4;i++)
										{
											document.getElementById("l"+i).style.visibility="hidden";
										}
										document.getElementById("lj1-1").style.visibility="hidden";
										document.getElementById("lj1-2").style.visibility="hidden";
										document.getElementById("lj1-3").style.visibility="hidden";
										document.getElementById("note2-1").style.visibility="visible";
										document.getElementById("b2-1").onclick=function()
										{
											document.getElementById("note2-1").style.visibility="hidden";
											setTimeout(function()
											{
												$("#lj1-4").animate({"position":"absolute","top":"290px"},500);
												document.getElementById("lj1-4").style.backgroundColor="#FFFFF0";
												setTimeout(function()
												{
													document.getElementById("1-2").style.visibility="hidden";
													$("#lj1-4").animate({"position":"absolute","left":"142px","top":"290px"},500);
													$("#c1-5").animate({"position":"absolute", "left":"135px","top":"275px"},500,
													function()
													{
														document.getElementById("lj1-4").style.visibility="hidden";
														document.getElementById("c1-5").style.visibility="hidden";
														document.getElementById("c1-6").style.visibility="hidden";
														document.getElementById("nextButton").style.visibility="visible";
													});
												},500);
											},1000);
										}
									},1000);
								},5500);
							},500);
						},500);
					},500);
				}
			});
		});
	}
}

