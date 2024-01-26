import { Component } from "react";

import Button from "components/Button/Button";
import Modal from "components/Modal/Modal"
import Loader from "components/Loader/Loader"

import {searchImages} from "../../api/images"
import Searchbar from "./Searchbar/Searchbar"
import ImageGallery from "./ImageGallery/ImageGallery";

import styles from "./image-search.module.css"


class ImageSearch extends Component {
    state = {
      search: '',
      totalHits: 0,
      hits: [],
      loading: false,
      error: null,
      page: 1,
      modalOpen: false,
      imageDetails: {},
    };
  
    async componentDidUpdate(_, prevState) {
      const { search, page } = this.state;
      if (search && (search !== prevState.search || page !== prevState.page)) {
        this.fetchImages();
      }
    }
  
    async fetchImages() {
      const { search, page } = this.state;
      try {
        this.setState({ loading: true });
        const { data } = await searchImages(search, page);
        this.setState(({ hits }) => ({
          hits: data.hits?.length ? [...hits, ...data.hits] : hits,
        }));
        this.setState(() => ({
          totalHits: data.totalHits ? data.totalHits : 0,
        }));
        this.setState({ error: null });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
    }
  
    handleSearch = ({ search }) => {
      if(this.state.search === search){
        return alert (`Can't enter identical request.`)
      }
      this.setState({ search, totalHits: 0, hits: [], page: 1 });
    };
  
    loadMore = () => {
      this.setState(({ page }) => ({ page: page + 1 }));
    };
  
    showModal = ({ webformatURL, tags }) => {
      this.setState({
        modalOpen: true,
        imageDetails: {
          webformatURL,
          tags,
        },
      });
    };
  
    closeModal = () => {
      this.setState({
        modalOpen: false,
        imageDetails: {},
      });
    };
  
    render() {
      const { handleSearch, loadMore, showModal, closeModal } = this;
      const { totalHits, hits, loading, error, modalOpen, imageDetails } =
        this.state;
  
      const isImages = Boolean(hits.length);
      const isTotal = Boolean(totalHits > hits.length);
  
      return (
        <>
          <Searchbar onSubmit={handleSearch} />
          {error && <p className={styles.error}>ERROR: {error}</p>}
          {loading && <Loader />}
          {isImages && <ImageGallery showModal={showModal} items={hits} />}
          {isTotal && (
            <div className={styles.loadMoreWrapper}>
              <Button type="button" onClick={loadMore}>
                {loading ? <Loader /> : 'Load more'}
              </Button>
            </div>
          )}
  
          {modalOpen && (
            <Modal close={closeModal}>
              <img src={imageDetails.webformatURL} alt={imageDetails.tags} />
            </Modal>
          )}
        </>
      );
    }
  }
  
  export default ImageSearch;