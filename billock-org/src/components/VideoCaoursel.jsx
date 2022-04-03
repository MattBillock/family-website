import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { Carousel } from 'react-responsive-carousel'
import {v4 as uuidv4} from 'uuid'


const YoutubeSlide = (url, isSelected ) => (
  <ReactPlayer width="100%" url={url} playing={isSelected} />
);

export default class VideoCarousel extends Component {
  getData() {
    return [ 
      {
        'group': 'chicago_brass_band',
        'video_id': '9ZPgw1KdqbM',
        'type': 'video',
        'legend': 'Mephistopheles, performed in St. Louis in 2019. I am on 1st tenor horn.'
      },
      {
        'group': 'sacramento_freelancers',
        'video_id': 'yBNaUF9jfR8',
        'type': 'video',
        'legend': 'Sacramento Freelancers 2017 DCA performance, Rochester, NY. I covered all baritone parts as needed.'
      },
      {
        'group': 'kilties',
        'video_id': 'Fk7R4W0nIOU',
        'type': 'video',
        'legend': 'The 2009 Kilties Baritone Quintet I&E Gold Medal Performance, Rochester, NY. I transcribed the music, organized and led rehearsals, and performed with the ensemble.'
      },
      {
        'group': 'sacramento_freelancers',
        'video_id': 'Koinu1HUhpw',
        'type': 'video',
        'legend': 'Sacramento Freelancers 2016 DCA performance, Rochester, NY. I covered lower baritone parts as needed.'
      }
    ]
  }


  getVideoUrl(video_id) {
    return `https://www.youtube.com/embed/${video_id}`
  }
  

render() {
    const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

    const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

    const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);

    const customRenderThumb = (children) =>
        children.map((item) => {
            const videoId = getVideoId(item.props.url);
            return <img src={getVideoThumb(videoId)} />;
        });

    return (
        <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb}>
          {
            this.getData().map((item) => <YoutubeSlide key={item['video_id']} url={this.getVideoUrl(item['video_id'])} />)
          }
        </Carousel>
    );
};
}
