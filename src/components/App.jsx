import { getImages } from 'api/api';
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
    this.setState({ isLoading: true })
    const resp = await getImages(searchedValue, page);
    this.setState({ isLoading: false });
    return resp;
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const searchedValue = e.currentTarget.elements.searchFormInput.value;
    this.setState({ searchedValue, page: 1, images: [] });
  }

  loadImages = async () => {
    const page = this.state.page;
    const images = await this.apiCall(this.state.searchedValue, page);
    const newImagesList = this.state.images.concat(images)
    this.setState({ images: newImagesList })
  }

  changePage = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page || prevState.searchedValue !== this.state.searchedValue) {
      this.loadImages();
    }
  }

  render() {
    const { images, isLoading, page } = this.state;

    return (
      <div className='App'>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {!!images.length && <Button loadMore={this.changePage} />}
      </div>
    )
  }
}

export default App