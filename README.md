po-notify
=========

A command-line tool to send [Pushover][po] messages.

## Install

```sh
npm install -g po-notify
```

## Usage

```sh
po-notify [options] --message "Some message"
po-notify [options] "Some message"
echo "Some message" | po-notify [options]
```

### Options

 - `-t, --token TOKEN [required]`: Pushover API token
 - `-u, --user KEY [required]`: User or group key of the recipient
 - `-m, --message MESSAGE` [required]: Message body
 - `-t, --title TITLE [optional]`: Message title
 - `-p, --priority lowest|low|normal|high|emergency [optional; default: normal]`: Message priority
 - `-r, --retry SECONDS [optional]`: Retry interval. If priority is emergency this is required
 - `-e, --expire SECONDS [optional]`: Message expiration. If priority is emergency this is required
 - `-d, --device DEVICE [optional]`: Device name

All options can also be put in a configuration file in `~/.config/ponotify` or
`~/.ponotifyrc`. This can be in INI, YAML or JSON format. It's recommended that
you put `token` and `user` in a config file and provide the other options as
command-line arguments.

`~/.ponotifyrc`
```ini
token = af7sdf86sdg87dfg58df75g8d7gfdg
user = gd8fu8ewfu8fndsusadf8sdfu8fdus
```

Alternatively, you can use environment variables too:

```sh
export PONOTIFY_TOKEN=af7sdf86sdg87dfg58df75g8d7gfdg
export PONOTIFY_USER=gd8fu8ewfu8fndsusadf8sdfu8fdus

po-notify "Job completed"
```

## Example

```sh
ansible-playbook somestuff.yml && po-notify -t "Ansible done" "somestuff.yml completed successfully. Nice!"
```

## License

Copyright (c) 2017 - 2018 Max Kueng

MIT License


[po]: https://pushover.net/
