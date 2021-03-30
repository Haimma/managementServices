exports.addToQueue = (req, res) => {
  const counter= req.body.counter
  let data = {
    queue: req.body.queue,
    logs: req.body.logs,
    next	: req.body.next,
    last: counter
  };
  data.queue.push(counter);
  data.logs.unshift(counter + ' Added to the queue');
  if (data.next === 0) {
    data.next = data.queue[0];
  }
  data.last = counter;
  res.status(200).json({
    data
  });
}
