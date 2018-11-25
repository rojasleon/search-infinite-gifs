import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';
// import api from '../services/api';
// import Gif from './Gif';

import { fetchGifs } from '../actions';

function Home(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     gifs: [],
  //     term: '',
  //     limit: 12,
  //     loading: true,
  //   };
  // }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.scrolling);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.scrolling);
  // }

  const [term, useTerm] = useState('');
  const handleChange = ({ target: { value } }) => useTerm(value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    props.fetchGifs(term, 12)

    // const response = await api.gifs.getGifs(this.state.term, this.state.limit);
    // const gifs = response.data;

    // this.setState({
    //   gifs,
    //   limit: 12,
    //   loading: false,
    // });
  }

  // scrolling = async () => {

  //   if(this.state.loading) return null;

  //   const scrolled = window.scrollY;
  //   const vhHeigth = window.innerHeight;
  //   const fullHeight = document.body.clientHeight;

  //   if(!(scrolled + vhHeigth + 450 >= fullHeight)) {
  //     return null;
  //   }

  //   this.setState({ loading: true }, async () => {
  //     const response = await api.gifs.getGifs(this.state.term, this.state.limit);
  //     const gifs = response.data;

  //     this.setState({
  //       gifs: gifs,
  //       limit: this.state.limit + 12,
  //       loading: false,
  //     });
  //   })
  // }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search here!" onChange={handleChange} />
        <input type="submit" value="Submit" />
        {term}
      </form>
      {/* <div>
        {this.state.gifs
          .map((gif) => <Gif key={gif.id} {...gif} />)}
      </div> */}
    </div>
  )
}
export default connect(null, { fetchGifs })(Home);
