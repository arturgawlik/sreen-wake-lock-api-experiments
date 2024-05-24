/**
 * @type {WakeLockSentinel | null}
 */
let wakeLock = null;

async function requetWakeLock() {
  try {
    wakeLock = await navigator.wakeLock.request("screen");
    wakeLock.addEventListener("release", (event) => {
      console.log("wakeLock released: ", wakeLock);
      console.log("event: ", event);
    });
    console.log("wakeLock requested: ", wakeLock);
  } catch (err) {
    console.error(err);
  }
}

await requetWakeLock();

setTimeout(async () => {
  await wakeLock.release();
  console.log("wakeLock release requested: ", wakeLock);
}, 10000);
