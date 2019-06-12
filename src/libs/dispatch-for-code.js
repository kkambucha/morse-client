export default (event, callback) => {
  let code;

  if (event.key !== undefined && event.key !== false) {
    code = event.key;
  }

  callback(code);
}