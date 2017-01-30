const translate = require('google-translate-api');
const argparse = require('argparse')

const parser = new argparse.ArgumentParser({
  addHelp: true,
  description: "translator"
});

parser.addArgument(
  [ '-o', '--origin' ],
  {
    help: 'origin language, default: auto',
    type: String,
    defaultValue: 'auto',
    required: false
  }
)

parser.addArgument(
  [ '-d', '--destination' ],
  {
    help: 'destination language, default: en',
    type: String,
    defaultValue: 'en',
    required: false
  }
)

parser.addArgument(
  [ '-l', '--languages' ],
  {
    help: 'show all available languages',
    type: Boolean,
    defaultValue: false,
    action: 'storeTrue',
    required: false
  }
)

parser.addArgument(
  [ '-t', '--text' ],
  {
    help: 'text which should get translated',
    type: String,
    required: false
  }
)

const args = parser.parseArgs();

if(args.languages) {
  console.log(translate.languages);
  process.exit(0);
}

if(args.text == null) {
  console.log('argument text is required');
  process.exit(1);
}

translate(args.text, {from: args.origin, to: args.destination}).then(res => {
  console.log(res.text);
}).catch(err => {
  console.log(err);
});
