tellme
======

Send a pushover message

## Install

```sh
npm install -g po-notify
```

## Config

`~/.ponotifyrc`
```ini
token = blablabla
user = stuffthing
```

## Example

```sh
ansible-playbook somestuff.yml && po-notify "Ansible done"
```
