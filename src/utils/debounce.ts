let timeout: NodeJS.Timeout;

export const debounce = (callback: () => any, timeoutMs: number): void => {
  clearTimeout(timeout);
  timeout = setTimeout(callback, timeoutMs);
};
