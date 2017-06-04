//node stuff
var fs = require('fs');
var file = './nop.bin';

var memspace;

fs.readFile(file,function(err,data){
	if (!err) {
		memspace = data;
	} else {
		console.log(err);
		process.exit(1);
	}
})

//Generate memory array buffer, 8*0xff
//var memspace 	//= new ArrayBuffer(0xff); //make arraybuffer (bytes) in size
var mem 		= new Uint8Array(memspace); //make array split into 8bit chunks

//make CPU class
class CPU {
	constructor(){
		this.start = 0x00;
	}
	halt(){
		//not implimented properly, at all
		process.exit(0);
	}
	execute(instr){
		var A = mem[instr];
		var B = mem[instr+1];
		var C = mem[instr+2];
		if (!(A+B)){
			if (C==(instr+2)){ //if C points to it's own position
				this.halt();
			}
		} else {
			mem[instr+1] = A;
		}
		this.execute(C);
	}
	run() {
		let instruction = mem[this.start];
		this.execute(instruction);
	}
}

let cpu = new CPU();
cpu.run();
