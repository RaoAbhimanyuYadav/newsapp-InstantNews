import React, { Component } from 'react';
import NewsItem from './NewsItem';


export class News extends Component {
  articles=[
    {
      "source": {
          "id": "the-washington-post",
          "name": "The Washington Post"
      },
      "author": "Laura Meckler",
      "title": "Public education is facing a crisis of epic proportions",
      "description": "From enrollment to politics to violence, America's public schools have not faced a challenge this great since Brown v. Board of Education.",
      "url": "https://www.washingtonpost.com/education/2022/01/30/public-education-crisis-enrollment-violence/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/D553N7F6EQI6XERKYQGJO5F4JA.jpg&w=1440",
      "publishedAt": "2022-01-30T11:00:05Z",
      "content": "Public education is facing a crisis unlike anything in decades, and it reaches into almost everything that educators do: from teaching math, to counseling anxious children, to managing the building.\r… [+17737 chars]"
  },
  {
      "source": {
          "id": "bbc-sport",
          "name": "BBC Sport"
      },
      "author": "BBC Sport",
      "title": "Australia & England produce one of the best",
      "description": "Geoff Lemon reflects on a vintage day of cricket as daring England attempted to pull off the boldest run chase in women's Test history.",
      "url": "http://www.bbc.co.uk/sport/cricket/60190388",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/16913/production/_123053429_gettyimages-1367620878.jpg",
      "publishedAt": "2022-01-30T18:22:28.6895657Z",
      "content": "Kate Cross blocked out the final ball of the Women's Ashes Test to ensure it finished as a draw\r\nThis is how the game should be.\r\nNine women crowded around the bat, plus the wicketkeeper close behind… [+5120 chars]"
  },
  {
      "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  },
  {
      "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  },
  {
      "source": {
          "id": "the-jerusalem-post",
          "name": "The Jerusalem Post"
      },
      "author": null,
      "title": "Congresswoman Nita Lowey: I am proud to stand with Israel",
      "description": "Gantz: Security of Israel is above politics; PA: This is a crime.",
      "url": "https://www.jpost.com/Arab-Israeli-Conflict/Gantz-Security-of-Israel-is-above-politics-Palestinians-This-is-a-crime-607595",
      "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/448812",
      "publishedAt": "2019-11-13T04:41:00Z",
      "content": "US Ambassador David M. Friedman said the US stands “with our friend and ally Israel at this critical moment” on social media on Tuesday after roughly 170 rockets were fired on Israel from the Gaza St… [+6160 chars]"
  }
]
  constructor(){
    super();
    this.state={
      articles: this.articles,
      loadiing : false
    }

  }
  render() {
    return(
        <div className='container my-3'>

          <h2>Instant News -- Top headlines</h2>  
            <div className="row">
              {this.state.articles.map((element)=>{
                return <div key ={element.url} className="col-md-4">
                <NewsItem title={element.title.slice(0,40)} discription={element.content.slice(0,100)} imgUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
              })}
              
              
            </div>
        </div>
    );
  }
}

export default News;
