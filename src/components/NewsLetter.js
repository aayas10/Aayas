import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class NewsLetter extends Component{
    render(){
        return(
            <section id="newsletter" className="newsletter">
  <div className="container">
    <div className="hm-footer-details">
      <div className="row">
        <div className=" col-md-3 col-sm-6 col-xs-12">
          <div className="hm-footer-widget">
            <div className="hm-foot-title">
              <h4>Information</h4>
            </div>
            <div className="hm-foot-menu">
              <ul>
                <li><a href="/aboutus">about us</a></li>
                <li><a href="/aboutus">contact us</a></li>
                
              </ul>
            </div>
          </div>
        </div>
        <div className=" col-md-3 col-sm-6 col-xs-12">
          <div className="hm-footer-widget">
            <div className="hm-foot-title">
              <h4>Locations</h4>
            </div>
            <div className="hm-foot-menu">
              <ul>
                <li><a href="#">Kathmandu</a></li>
                <li><a href="#">Bhaktapur</a></li>
                <li><a href="#">Lalitpur</a></li>
                <li><a href="#">Banepa</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" col-md-3 col-sm-6 col-xs-12">
          <div className="hm-footer-widget">
            <div className="hm-foot-title">
              <h4>my accounts</h4>
            </div>
            <div className="hm-foot-menu">
              <ul>
                <li><a href="#">my account</a></li>
                <li><a href="#">WatchList</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" col-md-3 col-sm-6  col-xs-12">
          <div className="hm-footer-widget">
            <div className="hm-foot-title">
              <h4>newsletter</h4>
            </div>
            <div className="hm-foot-para">
              <p>
                Subscribe  to get latest news,update and information.
              </p>
            </div>
            <div className="hm-foot-email">
              <div className="foot-email-box">
                <input type="text" className="form-control" placeholder="Enter Email Here...." />
              </div>
              <div className="foot-email-subscribe">
                <span><i className="fa fa-location-arrow" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        )
    }
}

export default NewsLetter;