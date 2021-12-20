const button = document.querySelector(".color-btn")


button.addEventListener("click",function() {
	maincontainer = document.querySelector(".main-container");
	maincontainerheader = document.querySelector(".box-2-header")

	let n = (Math.random() * 0xfffff * 1000000).toString(16);

	const hexValue =  '#' + n.slice(0, 6);

	maincontainer.style.backgroundColor =  hexValue;
	maincontainerheader.innerHTML = 'HEX: ' + hexValue;
})
