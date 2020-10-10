export default class Error {

  constructor() {
    this.render()
  }

  render() {
    document.body.innerHTML = /*html*/ `
      <div>
      <h1>Ooops... couldnt find what you were looking for</h1>
      </div>
    `;
  }
}