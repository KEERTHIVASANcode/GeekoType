var user_name;
var old_count_a=old_count_b=old_count_c=old_count_d=old_count_e=old_count_f=old_count_g=old_count_h=0;
var old_count_i=old_count_k=old_count_m=old_count_o=old_count_q=old_count_s=old_count_u=old_count_w=old_count_y=0;
var old_count_j=old_count_l=old_count_n=old_count_p=old_count_r=old_count_t=old_count_v=old_count_x=old_count_z=0;

	auth.onAuthStateChanged((user) => {
	if (user) { 
		//console.log(user);
		db.collection('users').where("email", "==", user.email).get().then((snapshot) => {
		snapshot.docs.forEach(doc => {
			 user_name = doc.data().name;
		});
		
		var sam = 0;
		db.collection('users').doc(user_name).collection('errors_and_speed').get().then((snapshot) => { 
			snapshot.docs.forEach(doc => { 
				sam+=1;
			});
			//console.log(sam);
			var label_c = [];
			var datas_c = [];
			for(var i=1;i<=sam;i++){
				label_c[i-1] = 'sample'+String(i);
			}
			db.collection('users').doc(user_name).collection('errors_and_speed').get().then((snapshot) => {
				var j=0;
			snapshot.docs.forEach(doc => {
			 datas_c[j++] = doc.data().error;
		});
				var char = document.getElementById('canvas').getContext('2d');

						var myChart = new Chart(char,{
							type: 'line',
							data: {
								labels: label_c,
								datasets: [
								{
									label: 'errors',
									data:datas_c,
									//backgroundColor: ['red','yellow','blue','pink','orange','black'],
									fill: 'false',
									borderColor:"rgb(75, 192, 192)",
									lineTension:0.05
								}
							  ]
							},
							options: {
								    scales: {
								        xAxes: [{
								            gridLines: {
								                drawOnChartArea: false
								            }
								        }],
								        yAxes: [{
								            gridLines: {
								                drawOnChartArea: false
								            }
								        }]
								    }
								}
						});
					});
			});

		var samd= 0;
		db.collection('users').doc(user_name).collection('errors_and_speed').get().then((snapshot) => { 
			snapshot.docs.forEach(doc => { 
				samd+=1;
			});
			//console.log(sam);
			var label_d = [];
			var datas_d = [];
			for(var k=1;k<=samd;k++){
				label_d[k-1] = 'sample'+String(k);
			}
			db.collection('users').doc(user_name).collection('errors_and_speed').get().then((snapshot) => {
				var l=0;
			snapshot.docs.forEach(doc => {
			 datas_d[l++] = doc.data().speed;
		});
			
		 	var char1 = document.getElementById('canvas1').getContext('2d');

			var myChart = new Chart(char1,{
						type: 'line',
						data: {
							labels: label_d,
							datasets: [
							{
								label: 'speed',
								data:datas_d,
								//backgroundColor: ['red','yellow','blue','pink','orange','black'],
								fill: 'false',
								borderColor:"rgb(75, 192, 192)",
								lineTension:0.05
							}
						  ]
						},
						options: {
							    scales: {
							        xAxes: [{
							            gridLines: {
							                drawOnChartArea: false
							            }
							        }],
							        yAxes: [{
							            gridLines: {
							                drawOnChartArea: false
							            }
							        }]
							    }
							}
					});
				});
			});

		
		db.collection('users').doc(user_name).collection('keys').doc('keyCount').get().then(function(doc) {
			old_count_a = doc.data().a;
			old_count_b = doc.data().b;
			old_count_c = doc.data().c;
			old_count_d = doc.data().d;
			old_count_e = doc.data().e;
			old_count_f = doc.data().f;
			old_count_g = doc.data().g;
			old_count_h = doc.data().h;
			old_count_i = doc.data().i;
			old_count_j = doc.data().j;
			old_count_k = doc.data().k;
			old_count_l = doc.data().l;
			old_count_m = doc.data().m;
			old_count_n = doc.data().n;
			old_count_o = doc.data().o;
			old_count_p = doc.data().p;
			old_count_q = doc.data().q;
			old_count_r = doc.data().r;
			old_count_s = doc.data().s;
			old_count_t = doc.data().t;
			old_count_u = doc.data().u;
			old_count_v = doc.data().v;
			old_count_w = doc.data().w;
			old_count_x = doc.data().x;
			old_count_y = doc.data().y;
			old_count_z = doc.data().z;

			var char2 = document.getElementById('canvas2').getContext('2d');
			var myChart2 = new Chart(char2,{
			type: 'bar',
			data: {
				labels: ["a","b","c","d","e","f",'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
				datasets: [
				{
					label: 'Frequency of alphabeets',
					data: [old_count_a,old_count_b,old_count_c,old_count_d,old_count_e,old_count_f,old_count_g,old_count_h,old_count_i,
					old_count_j,old_count_k,old_count_l,old_count_m,old_count_n,old_count_o,old_count_p,old_count_q,old_count_r,old_count_s,
					old_count_t,old_count_u,old_count_v,old_count_w,old_count_x,old_count_y,old_count_z],
					backgroundColor: "rgb(75, 192, 192)",
				    hoverBackgroundColor: "pink",
				}
			  ]
			},
			options: {
				    scales: {
				        xAxes: [{
				            gridLines: {
				                drawOnChartArea: false
				            }
				        }],
				        yAxes: [{
				            gridLines: {
				                drawOnChartArea: false
				            }
				        }]
				    }
				}

		});
	});
		//console.log(old_count_a);
	});

	}
});