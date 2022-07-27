import axios from 'axios'
import React, { Component } from 'react'
import Button from './common/Button/Button'
import Loader from './common/Loader/Loader'
import ImageGallery from './ImageGallery/ImageGallery'
import Searchbar from './Searchbar/Searchbar'

export class App extends Component {
  state = {
    searchedValue: '',
    isLoading: false,
    page: 1,
    images: []
  }

  apiCall = async (searchedValue = '', page = 1) => {
    this.setState({isLoading: true})
    const resp = await axios.get(`https://pixabay.com/api/?q=${searchedValue}&page=${page}&key=28843000-997a7736ac02a37994c6fbbd0&image_type=photo&orientation=horizontal&per_page=12`).then(({ data }) => data.hits)
    this.setState({isLoading: false});
    return resp;
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const searchedValue = e.currentTarget.elements.searchFormInput.value;
    const images = await this.apiCall(searchedValue, this.state.page);
    this.setState({ images, searchedValue });
  }

  loadMore = async () => {
    const nextPage = this.state.page + 1;
    const images = await this.apiCall(this.state.searchedValue, nextPage);
    const newImagesList = this.state.images.concat(images)
    this.setState({images: newImagesList})
  }

  render() {
    const { images, isLoading } = this.state;

    return (
      <div className='App'>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {!!images.length && <Button loadMore={this.loadMore} />}
      </div>
    )
  }
}

export default App