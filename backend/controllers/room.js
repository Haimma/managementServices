exports.onAccept = (req, res) => {
  let data = {
    queue: req.body.queue,
    currnet: req.body.currnet,
    logs: req.body.logs,
    next: req.body.next,
    last: req.body.last,
  };
  data.currnet = data.next;
  data.queue.shift();
  if (data.next === data.last) {
    data.last = 0;
    data.next = 0;
  }
  else {
    data.next = data.queue[0];
  }
  data.logs.unshift(data.currnet + ' Entered to room 01');
  res.status(200).json({
    data
  });
}

exports.onSkip = (req, res) => {
  let data = {
    queue: req.body.queue,
    logs: req.body.logs,
    next	: req.body.next,
    last: req.body.last
  };
  data.logs.unshift(data.next + ' Skip');
  data.queue.shift();
  if (data.next === data.last) {
    data.next = 0;
    data.last = 0;
  }
  else {
    data.next = data.queue[0];
  }
  res.status(200).json({
    data
  });
}

exports.onOut = (req, res) => {
  let data = {
    currnet: req.body.currnet,
    logs: req.body.logs,
  };
  data.logs.unshift(data.currnet + ' Out from room 01');
  data.currnet = 0;
  res.status(200).json({
    data
  });
}
