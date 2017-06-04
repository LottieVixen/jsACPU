//Generate memory array buffer, 8*0xff
var memspace 	= new ArrayBuffer(0xff); //make arraybuffer (bytes) in size
var mem 		= Uint8Array(memspace); //make array split into 8bit chunks

//make CPU class
class CPU {
	constructor(){
	}
	run() {
		let instruction = mem[0x00] 
	}
}

fetch("./nop.bin")
	.then((response) => response.arrayBuffer())
	.then((arrayBuffer) => {
		memspace = arrayBuffer;
	})
