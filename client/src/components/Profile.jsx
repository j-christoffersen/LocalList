import React from 'react';
import axios from 'axios';
import JobList from './JobList.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      averageRating: 0,
    };
  }

  componentDidMount() {
    axios.get('/api/jobs')
    .then((jobs) => {
      this.setState({
        jobs: jobs.data
      })
    })
    .catch(err => {
      if (err) {
        throw err;
      }
    })

    axios.get(`/api/reviews?doerId=${this.props.user.id}`)
      .then((response) => {
        this.setState({
          averageRating: response.data.averageRating,
        });
      });
  }

  render() {
    return (
      <div>
        <div><strong>User: </strong><span>{this.props.user ? this.props.user.username : 'Jinxuan'}</span>
        <br />
        {/*<strong>Address:</strong><span>{this.props.profile.Address}</span>*/}
        <div>{this.state.averageRating === null ? 'No rating yet!' : `Rating: ${this.state.averageRating}` }</div>
        </div>
        <h3>Jobs that you have claimed on or done so far:</h3>
          {/*list all jobs that had been completed or claimed by user
          */}
          <JobList jobs={this.state.jobs} />

          {/*I want to list jobs done by user and jobs posted by user separately
          so will need to add extra filed in jobs table to indicate jobs poster and jobs claimer*/}
      </div>
    )
  }
}

module.exports = Profile;
