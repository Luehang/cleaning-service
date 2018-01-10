import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class LandingPageMarketing extends Component {
    render() {
        return (
            <div>
                <div id="game-wrapper"></div>
                <header>
                    <div className="container">
                        <h4>Crystal Clean Service</h4>
                        {/*img.logo(src='https://s122939.gridserver.com/clients/concept/logo.svg')*/}
                    </div>
                </header>
                <div className="jumbotron">
                    <div id="black"></div>
                    <div className="animated fadeInDown">
                        <div className="container">
                            <div className="col-md-12">
                                <h1>Landing Page for Marketers</h1><br className="visible-lg"/>Founder:
                                <hr style={{width:'25%',textAlign:'left',margin:'30px 0',border:'2.5px solid #fff'}}/>
                            </div>
                            <div className="col-md-8">
                                <h2 className="subtitle">Get expert industry insights and start driving stronger and cleaner results for your business today.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="main-wrapper" className="container">
                    <div className="col-md-7 main-content">
                        <h3>100 percent satisfaction guarantee</h3>
                        <p>Bacon ipsum dolor amet ball tip boudin shoulder beef shank andouille strip steak sirloin meatloaf ground round filet mignon beef ribs chicken. Venison turducken tail, t-bone biltong beef ribs flank pork belly shankle filet mignon cow pork loin capicola cupim.</p>
                        <div className="white-box">
                            <ul>
                                <li>
                                    <p>Short ribs filet mignon sausage andouille. Fatback ground round kevin, cupim turkey cow doner shank bresaola pastrami tenderloin frankfurter biltong.</p>
                                </li>
                                <li>
                                    <p>Cow tail turkey ball tip hamburger leberkas brisket. Leberkas salami beef, landjaeger capicola venison ribeye shank porchetta pastrami biltong spare ribs.</p>
                                </li>
                                <li>
                                    <p>T-bone bacon ham hock, ball tip swine cow picanha prosciutto beef sirloin short loin chicken.</p>
                                </li>
                            </ul>
                        </div>
                        <p className="final-cta">Get expert industry insights and start driving stronger and cleaner results for your business today.</p>
                    </div>
                    <div id="contact" className="col-md-4 col-md-offset-1">
                        <div className="form-container">
                            <h4>Fill out the Form Below to Get Your Quote Now</h4>
                            <form id="quote-form" action="/api/get-quote" method="POST" name="formContent">
                                <div>
                                    <input id="first_name" type="text" name="first_name" autoCapitalize="words" maxLength="20" placeholder="* First Name" autoComplete="given-name" className="form-control"/>
                                </div>
                                <div>
                                    <input id="last_name" type="text" name="last_name" autoCapitalize="words" maxLength="20" placeholder="Last Name" autoComplete="family-name" className="form-control"/>
                                </div>
                                <div>
                                    <input id="email" type="email" name="email" placeholder="* Email@example.com" autoFocus="autofocus" autoComplete="email" maxLength="30" className="form-control"/>
                                </div>
                                <div>
                                    <input id="phone_number" type="text" name="phone_number" maxLength="14" placeholder="Phone Number 999-999-999" autoComplete="tel-national" className="form-control"/>
                                </div>
                                <div>
                                    <input id="company" type="text" name="company" autoCapitalize="words" maxLength="30" placeholder="Company Name" className="form-control"/>
                                </div>
                                <div>
                                    <input id="city" type="text" name="city" maxLength="20" placeholder="City" autoComplete="address-level2" className="form-control"/>
                                </div>
                                <div>
                                    <label>State</label>
                                    <select id="state" name="state" autoComplete="address-level1" className="form-control">
                                        <option className="placeholder">STATE ↡</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District Of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>
                                </div>
                                <div>
                                    <input id="comments" name="comments" type="text" placeholder="Comments" maxLength="200" className="form-control"/>
                                </div>
                                <div>
                                    <input id="submit-quote" defaultValue="Get A Quote" className="btn btn-primary btn-lg btn-block"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container">© 2018  LLC. All rights reserved.</div>
                </footer>
                <div id="front-annotation" style={{display:'none'}} className="annotation-content">
                    <div className="annotation"><a className="close"><img src="/img/close.svg"/></a>
                        <div id="alert"></div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <LandingPageMarketing />,
    document.getElementById('app')
);