const { flags } = require('@oclif/command');
const { TwilioClientCommand } = require('@twilio/cli-core').baseCommands;
const { TwilioCliError } = require('@twilio/cli-core').services.error;
const { sleep } = require('@twilio/cli-core').services.JSUtils;
const querystring = require('querystring');
const open = require('open');

const SEARCH_URL = 'https://www.twilio.com/docs/search?q=';

//https://www.twilio.com/docs/search?q=voice Search String

class DocsSearch extends TwilioClientCommand {
  constructor(argv, config, secureStorage) {
    super(argv, config, secureStorage);

    this.showHeaders = true;
    this.latestLogEvents = [];
  }

  static args = [
    {name: 'searchString', description: 'Search String', required: true},
  ];

  async run() {
    await super.run();

    const {args} = this.parse(DocsSearch);

    // Open Browser Window to page.
    const url = SEARCH_URL;
    open(url+args.searchString);
  }
}

DocsSearch.description = `Launch Docs Search with Search String`;

module.exports = DocsSearch
