const { flags } = require('@oclif/command');
const { TwilioClientCommand } = require('@twilio/cli-core').baseCommands;
const { TwilioCliError } = require('@twilio/cli-core').services.error;
const { sleep } = require('@twilio/cli-core').services.JSUtils;
const querystring = require('querystring');
const open = require('open');

const SEARCH_URL = 'https://www.google.com/search?q=site%3Atwilio.com+';

//https://www.twilio.com/docs/search?q=voice Search String

class DocsGoogle extends TwilioClientCommand {
  constructor(argv, config, secureStorage) {
    super(argv, config, secureStorage);

    this.showHeaders = true;
    this.latestLogEvents = [];
  }

  static args = [
    {name: 'searchString', description: 'Search String to use when Googling the Twilio site.', required: true},
  ];

  async run() {
    await super.run();

    const {args} = this.parse(DocsGoogle);

    // Open Browser Window to page.
    const url = SEARCH_URL;
    open(url+args.searchString);
  }
}

DocsGoogle.description = `Search Twilio's site on Google with the provided Search String`;

module.exports = DocsGoogle
