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
            "id": "the-washington-times",
            "name": "The Washington Times"
        },
        "author": "The Washington Times http://www.washingtontimes.com",
        "title": "Latest Quizzes",
        "description": "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
        "url": "https://www.washingtontimes.com/quiz/",
        "urlToImage": null,
        "publishedAt": "2021-02-10T03:52:37.2719772Z",
        "content": "Featured Quizzes\r\nAttention all William Shakespeare experts. Pinpoint the prose's origin plucked from one of his many famous plays in this multiple-choice challenge.\r\n Shares \r\nName these legendary c… [+32652 chars]"
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
              <div className="col-md-4">
              <NewsItem title='myTitle' discription='mydiscription' imgUrl="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/D553N7F6EQI6XERKYQGJO5F4JA.jpg&w=1440" newsUrl='/'/>
              </div>
              <div className="col-md-4">
              <NewsItem title='myTitle' discription='mydiscription'/>
              </div>
              <div className="col-md-4">
              <NewsItem title='myTitle' discription='mydiscription'/>
              </div>
            </div>
        </div>
    );
  }
}

export default News;
