import fetch from 'isomorphic-fetch'

export default class Home extends React.Component {
  state = {
    username: null,
    user: null
  }

  handleSubmin = e => {
    e.preventDefault()

    const {username} = this.setState

    fetch('https://api.github.com/users/${username}')
      .then(res => res.json())
      .then(user => this.setState({user}))
      .catch(err => console.error(err))
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
