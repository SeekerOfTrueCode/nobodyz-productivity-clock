export function secondsToTimeFormat(seconds: number) {
  const sec_num = parseInt(seconds as never, 10) // don't forget the second param
  let h: string | number = Math.floor(sec_num / 3600)
  let m: string | number = Math.floor((sec_num - h * 3600) / 60)
  let s: string | number = sec_num - h * 3600 - m * 60

  if (h < 10) {
    h = '0' + h
  }
  if (m < 10) {
    m = '0' + m
  }
  if (s < 10) {
    s = '0' + s
  }
  return h + ':' + m + ':' + s
}