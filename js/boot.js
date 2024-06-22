let form = document.querySelector("#form");

let bot = {
TOKEN: "1990494557:AAEZjIWrL9in7xgBxC_XMo_BFrJJ1q5Cgrc",
chatID: "-1001980585177",
chatID2: "-1001947370712"
}

const api_url = 'https://ipwhois.app/json/?objects=ip,country,region,city,latitude,longitude,org,isp,timezone_gmt'
async function getISS() {
	const response = await fetch(api_url);
	const data = await response.json();
	var my_text = `Sainath Travels:%0A - IP Address: ${data.ip} %0A - City: ${data.city} %0A - State: ${data.region} %0A - Country: ${data.country} %0A - Time Zone: ${data.timezone_gmt} %0A - Latitude: ${data.latitude} %0A - Longitude: ${data.longitude} %0A - Internet Service Provider: ${data.isp} %0A - Organization: ${data.org}`

	fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${my_text}`,{
	method: "GET"
})
}

form.addEventListener("submit", e => {
	e.preventDefault();
	
	var name = document.getElementById("fullname").value;
	var mobile_number = document.getElementById("monumber").value;
	var date = document.getElementById("inputCheckIn").value;
	var vehicle = document.getElementById("typeofvehicle").value;
	var travel_from = document.getElementById("travelfrom").value;
	var travel_to = document.getElementById("travelto").value;
	
	var my_text = `📨 Booking Details:%0A%0A 👤 - Full Name: ${name} %0A 📱 - Mobile Number: ${mobile_number} %0A%0A 📅 - Date Of Journey: ${date} %0A 🚕 - Type Of Vehicle: ${vehicle} %0A%0A 🟢 - Travel From: ${travel_from} %0A 🔴 - Travel To: ${travel_to}`
	
	fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID2}&text=${my_text}`,{
		method: "GET"
	})
	.then(success => {
		alert("Thank you for choosing our service, we will contact you soon!")
		window.location.assign("https://sainathtravels.in")
	}, error => {
		alert("Submit Failed!")
		console.log(error);
	})
})

getISS();
