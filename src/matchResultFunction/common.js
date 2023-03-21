export const dataSave = (text, state) => {
  localStorage.setItem(text, JSON.stringify(state));
};
