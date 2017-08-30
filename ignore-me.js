const protecfulDoge = document.getElementById("doge-protector")

function dogeProtec() {
  if (document.getElementById("doge-protector").className === "protec") {
    debugger
    protecfulDoge.classList.remove("protec")
    void protecfulDoge.offsetWidth
  }
  protecfulDoge.classList.add("protec")
  return "DOGE PROTEC!"
}
