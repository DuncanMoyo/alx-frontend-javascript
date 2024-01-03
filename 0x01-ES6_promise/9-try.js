const guardrail = (mathFunction) => {
  const queue = [];
  try {
    const value = mathFunction();
    queue.push(value);
  } catch (error) {
    queue.push(error.message);
  }
  queue.push('Guardrail was processed');
  return queue;
};

export default guardrail;
