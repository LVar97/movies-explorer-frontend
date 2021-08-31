function setLocalStorageData(key, value) {
  const item = JSON.stringify(value);
  localStorage.setItem(key, item);
}
function getLocalStorageDataByKey(key) {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
}
function removeLocalStorageDataByKey(key) {
  localStorage.removeItem(key);
}
function clearAllLocalStorageData() {
  localStorage.clear();
}

export {
  setLocalStorageData,
  getLocalStorageDataByKey,
  removeLocalStorageDataByKey,
  clearAllLocalStorageData,
};