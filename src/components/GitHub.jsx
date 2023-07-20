import "../styles/GitHub.css"

import git from "../assets/icons/github.svg"

export function GitHub() {
  return (
    <a className="github-link" href="https://github.com/ValeRonKozlov" aria-label="Github" target="balnk">
      <img className="github-img" src={git} alt="github"></img>
      Github
    </a>
  )
}
