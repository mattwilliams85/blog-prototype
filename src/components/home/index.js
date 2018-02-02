import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Burst from '../burst'

export class Home extends Component {
  componentWillMount () {
    this.props.fetchPosts()
    this.setState({
      favorites: JSON.parse(localStorage.getItem('faves')) || {},
      activeTags: {}
    })
  }

  toggleFavorite (post) {
    let { favorites } = this.state

    favorites[post.id] ? delete favorites[post.id] : favorites[post.id] = post
    localStorage.setItem('faves', JSON.stringify(favorites))
    this.setState({ favorites })
  }

  toggleTag (tag) {
    let { activeTags } = this.state

    activeTags[tag] ? delete activeTags[tag] : activeTags[tag] = tag
    this.setState({ activeTags })
  }

  isHidden = (tags) => {
    const { activeTags } = this.state
    let visible = 'hidden'

    tags.forEach(tag => { if (activeTags[tag]) visible = '' })
    return Object.keys(activeTags).length ? visible : ''
  }

  render () {
    const { toggleFavorite, toggleTag, isHidden } = this
    const { posts } = this.props
    const { favorites, activeTags } = this.state

    return (
      <div className='Home--root'>
        <div className='column posts'>
          <div className='content'>
            <h1>BLOG POSTS</h1>
            
            <div>
              {Object.keys(activeTags).length ? `Active Tags:  ` : ''}
              {Object.values(activeTags).map((tag, i) => 
                <span key={i} onClick={toggleTag.bind(this, tag)} className='tag'>#{tag}
              </span>)}
            </div>
            
            {posts.map(post => {
              const { id, title, body, tags, creationTime } = post
              
              return (
                <div key={id} className={`post ${isHidden(tags)}`}>
                  <div className='date'>{moment(creationTime).format('MM/DD')}</div>
                  <h3>{title}</h3>
                  <div dangerouslySetInnerHTML={{__html: body}} />
                  <div className="footer">
                    <div className='tags'>
                      {tags.map((tag, i) => <span key={i} onClick={toggleTag.bind(this, tag)} className='tag'>#{tag}</span>)}
                    </div>
                    <div onClick={toggleFavorite.bind(this, post)} id={`test-${id}`} style={{position: 'relative'}}>
                      <Burst isActive={!favorites[id]} parent={`#test-${id}`}/>
                      <i className={`material-icons ${favorites[id] ? 'fav' : ''}`}>favorite</i>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className='column favorites'>
          <div className='content'>
            <h1>FAVORITES</h1>
            {Object.values(favorites).map(post => {
              const { id, title, body, tags, creationTime } = post

              return (
                <div key={id} className='post'>
                  <h3>{title}</h3>
                  <div>Created on: {moment(creationTime).format('MMM Do')}</div>
                  <div dangerouslySetInnerHTML={{ __html: body }} />
                  <div className="footer">
                    <div className='tags'>
                      {tags.map((tag, i) => <span key={i} className='tag'>#{tag}</span>)}
                    </div>
                    <div onClick={toggleFavorite.bind(this, post)}>
                      <i className="material-icons fav">favorite</i>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  posts: PropTypes.array,
  fetchPosts: PropTypes.func.isRequired,
  isIncrementing: PropTypes.bool,
  incrementAsync: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired
}
