tellme
======

Send a pushover message

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
