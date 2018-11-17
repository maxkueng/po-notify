import rucola from 'rucola';
import Pushover from 'pushover-notifications';
import getStdin from 'get-stdin';

const priorities = {
  lowest: -2,
  low: -1,
  normal: 0,
  high: 1,
  emergency: 2,
};

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

function sendMessage(token, user, payload) {
  return new Promise((resolve, reject) => {
    const po = new Pushover({
      user,
      token,
    });

    po.send(payload, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

const aliases = {
  u: 'user',
  m: 'message',
  t: 'title',
  p: 'priority',
  r: 'retry',
  e: 'expire',
  d: 'device',
};

(async () => {
  const conf = rucola('tellme', {}, aliases);

  const token = conf.get('token');
  if (!token) {
    fail('Missing option \'token\'');
  }

  const user = conf.get('user');
  if (!user) {
    fail('Missing option \'user\'');
  }

  const stdinMessage = await getStdin();
  const message = conf.get('_')[0] || conf.get('message') || stdinMessage.trim();
  if (!message) {
    fail('Missing message');
  }

  const title = conf.get('title');
  const actionUrl = conf.get('action.url');
  const actionLabel = conf.get('action.label');
  const device = conf.get('device');
  const sound = conf.get('sound');
  const retry = conf.get('retry');
  const expire = conf.get('expire');

  const prio = conf.get('priority') || 'normal';
  if (!Object.keys(priorities).includes(prio)) {
    fail(`Invalid priority '${prio}'`);
  }

  const priority = priorities[prio];

  if (priority >= 2) {
    if (!retry || parseInt(retry, 10) < 30) {
      fail('Missing or invalid retry interval');
    }
    if (!expire || parseInt(retry, 10) > 10800) {
      fail('Missing or invalid expiration');
    }
  }

  const payload = {
    message,
    title,
    url: actionUrl,
    url_title: actionLabel,
    sound,
    device,
    priority,
    retry,
    expire,
  };
  console.log(payload);

  try {
    return;
    const result = await sendMessage(token, user, payload);
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
})();

