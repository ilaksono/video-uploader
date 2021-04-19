
export const configBucket = (filetype, id) => ({
  bucketName: process.env.REACT_APP_AWS_BUCKET,
  dirName: `${filetype}/${id}/${new Date().getTime()}`, /* optional */
  region: process.env.REACT_APP_AWS_DEFAULT_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

export const formatInterviewTimePM = (d) => {
  const mons = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let ext = 'AM';
  const da = new Date(d);
  const m = da.getMonth();
  const day = da.getDate();
  const yr = da.getFullYear();
  let hr = da.getHours();
  let min = da.getMinutes();
  if (min < 10)
    min = `0${min}`;
  if (hr > 11) {
    ext = 'PM'
    if (hr > 12) hr -= 12;
  }

  return `${mons[m]} ${day}, ${yr} at ${hr}:${min} ${ext}`;
}
