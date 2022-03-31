const { flags } = require('@oclif/command');
const { TwilioClientCommand } = require('@twilio/cli-core').baseCommands;
const { TwilioCliError } = require('@twilio/cli-core').services.error;
const { sleep } = require('@twilio/cli-core').services.JSUtils;
const querystring = require('querystring');
const open = require('open');
const { Flags } = require('@oclif/core');

const BASE_URL = 'https://www.twilio.com/docs/';

//https://www.twilio.com/docs/search?q=voice Search String

class DocsOpener extends TwilioClientCommand {
  constructor(argv, config, secureStorage) {
    super(argv, config, secureStorage);

    this.showHeaders = true;
    this.latestLogEvents = [];
  }

  static args = [
    {name: 'product', description: 'product', required: false},
  ];

  async run() {
    await super.run();

    const {args} = this.parse(DocsOpener);

    // Open Browser Window to page.
    const url = BASE_URL;

    if (args.path) {
      open(url+args.path);
    } else {
      open(url+'/all');
    }
    
  }

}

DocsOpener.description = `Open up the docs page, optionally launch a specifc product you'd like to see.`;


module.exports = DocsOpener
