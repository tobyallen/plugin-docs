@twilio/plugin-docs
========================

Access and stream your Twilio debugger logs.

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
## Setup

Head over to the [twilio-cli documentation](https://www.twilio.com/docs/twilio-cli/quickstart).

# Usage

```sh-session
$ twilio --help docs 
open twilio docs

USAGE
  $ twilio docs:COMMAND

COMMANDS
  docs:google  Search Twilio's site on Google with the provided Search String
  docs:open    Open up the docs page, optionally launch a specifc product you'd like to see.
  docs:search  Launch Docs Search with the provided Search String
```

# Commands
<!-- commands -->
* [`twilio docs:open`](#twilio-docsopen)
* [`twilio docs:search`](#twilio-docssearch)
* [`twilio docs:google`](#twilio-docsgoogle)

## `twilio docs:open`

Open up the docs page, optionally launch a specifc product you'd like to see.

```
USAGE
  $ twilio docs:open [PRODUCT]

ARGUMENTS
  PRODUCT  Name of product you would like to jump directly into

OPTIONS
OPTIONAL FLAGS
  -l=(debug|info|warn|error|none)  [default: info] Level of logging messages.
  -o=(columns|json|tsv|none)       [default: columns] Format of command output.
  -p, --profile=profile            Shorthand identifier for your profile.
  --silent                         Suppress output and logs. This is a shorthand for "-l none -o none".

```

## `twilio docs:search`

Launch Docs Search with the provided Search String
```
USAGE
  $ twilio docs:search SEARCHSTRING

ARGUMENTS
  SEARCHSTRING  Search String to use inside the twilio documentation.

OPTIONS
OPTIONAL FLAGS
  -l=(debug|info|warn|error|none)  [default: info] Level of logging messages.
  -o=(columns|json|tsv|none)       [default: columns] Format of command output.
  -p, --profile=profile            Shorthand identifier for your profile.
  --silent                         Suppress output and logs. This is a shorthand for "-l none -o none".

```

## `twilio docs:google`

Search Twilio's site on Google with the provided Search String

```
USAGE
  $ twilio docs:google SEARCHSTRING

ARGUMENTS
  SEARCHSTRING  Search String to use when Googling the Twilio site.

OPTIONS
OPTIONAL FLAGS
  -l=(debug|info|warn|error|none)  [default: info] Level of logging messages.
  -o=(columns|json|tsv|none)       [default: columns] Format of command output.
  -p, --profile=profile            Shorthand identifier for your profile.
  --silent                         Suppress output and logs. This is a shorthand for "-l none -o none".

MORE INFO
  https://twilio.com/docs/api/
```

<!-- commandsstop -->
