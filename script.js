const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
	//console.log(this.value);
	//console.log(this.dataset);
	//console.log(suffix);
	//console.log(this.name);
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);



}


// for DOM event 'change' check https://developer.mozilla.org/en-US/docs/Web/Events
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
