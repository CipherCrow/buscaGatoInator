const BASE_UR = "https://thatcopy.pw/catapi/rest/";
const btnCat = document.getElementById("change-cat");
const imgCat = document.getElementById("cat");

const getcat = async () =>{
	try{
		const data = await fetch(BASE_UR);
		const json = await data.json();

		return json.webpurl;	
	}
	catch(e){
		console.log(e.message);
	}
}

const loadImg = async () =>{
	imgCat.src = await getcat();
}

btnCat.addEventListener("click", loadImg);
loadImg();