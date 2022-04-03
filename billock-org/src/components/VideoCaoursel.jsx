import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { Carousel } from 'react-responsive-carousel'
import {v4 as uuidv4} from 'uuid'


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
  
  getYoutubeSlide(url, isSelected) {
    return <iframe key={uuidv4()} width="560" height="315" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    //return <ReactPlayer key={uuidv4()} width="100%" url={url} playing={isSelected} />
  }
  
  render() {    
    return (
        <Carousel>
          {
            this.getData().map((item) => {return this.getYoutubeSlide(this.getVideoUrl(item['video_id']), false)})
          }
        </Carousel>
    );
  };
}
