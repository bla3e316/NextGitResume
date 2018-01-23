export default class Home extends React.Component {
  handleSubmin = e => {
    e.preventDefault()

    const {username} = this.setState

    fetch('https://api.github.com/users/${username}')
  }

    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmin}>
                <input
                  type="text"
                  placeholder="Type GitHub username..."
                  onChange={e => this.setState({ username: e.target.value })}
                />
              </form>
            </div>
        )
    }
}
