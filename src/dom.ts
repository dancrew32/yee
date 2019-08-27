function getScrollXY() {
  const D = document;
  let scrOfX = 0,
    scrOfY = 0;
  if (typeof window.pageYOffset === "number") {
    //Netscape compliant
    scrOfY = window.pageYOffset;
    scrOfX = window.pageXOffset;
  } else if (D.body && (D.body.scrollLeft || D.body.scrollTop)) {
    //DOM compliant
    scrOfY = D.body.scrollTop;
    scrOfX = D.body.scrollLeft;
  } else if (
    D.D &&
    (D.documentElement.scrollLeft || D.documentElement.scrollTop)
  ) {
    //IE6 standards compliant mode
    scrOfY = D.documentElement.scrollTop;
    scrOfX = D.documentElement.scrollLeft;
  }
  return [scrOfX, scrOfY];
}

function getDocHeight() {
  const D = document;
  return Math.max(
    D.body.scrollHeight,
    D.documentElement.scrollHeight,
    D.body.offsetHeight,
    D.documentElement.offsetHeight,
    D.body.clientHeight,
    D.documentElement.clientHeight
  );
}

export function isScrollAtBottom(distFromBottom: number = 0) {
  return getDocHeight() == getScrollXY()[1] + window.innerHeight - distFromBottom;
}
