export const getDebounce = () => {
  let timeout: NodeJS.Timeout;

  return (callback: () => any, timeoutMs: number) => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, timeoutMs);
  };
};
