export default class Home extends React.Component {
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
