let PAGE = 1;

let mode = 'light';

export function setPage() {
  PAGE = PAGE + 1;
}

export function getPage() {
  return PAGE;
}

export function resetPage() {
  PAGE = 1;
}

export function setMode() {
  mode = mode === 'light' ? 'dark' : 'light';
}

export function getMode() {
  return mode;
}
