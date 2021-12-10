export const titleStringChecker = (string: string) => {
  const tv_copy_check = "TV",
        download_copy_check = "Download",
        everywhere_copy_check = "everywhere",
        kids_copy_check = "kids"
        
  // console.log(string)

  if (tv_copy_check) {
    return true
  } else if (download_copy_check) {
    return true
  } else {
    return false
  }
}