import { Duplex } from 'stream';
//custom stream - websocket
const duplexStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log('Writing:', chunk.toString());
    callback();
  },
  read(size) {
    this.push('Hello from Duplex Stream!\n');
    this.push(null);
  }
});

duplexStream.write('This is input data');
duplexStream.end();

duplexStream.on('data', (chunk) => {
  console.log('Reading:', chunk.toString());
});
