tellme
======

Send a pushover message

## Install

```sh
npm install -g @maxkueng/tellme
```

## Config

`~/.tellmerc`
```ini

[pushover]
apikey = blablabla
userkey = stuffthing
```

## Example

```sh
ansible-playbook somestuff.yml && tellme "Ansible done"
```
