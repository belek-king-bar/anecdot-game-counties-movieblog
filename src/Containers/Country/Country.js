import React, {Component, Fragment} from 'react';
import Countries from '../../Components/Countries/Countries/Countries.js';
import Blog from '../../Components/Countries/CountriesBlog/CountriesBlog.js'
import Info from '../../Components/Countries/InfoCountry/InfoCountry.js';
import axios from 'axios';
import { Row, Col} from 'reactstrap';


class Country extends Component {
        state = {
            countries: [],
            selectedCountryId: null
        };

        purchaseContinueHandler = () => {
                this.props.history.push({
                pathname: '/movie'
              });
           };


        componentDidMount() {
            axios.get('all?fields=name;alpha3Code').then(response => {
                const requests = response.data.map(country => {
                    return {...country };
                });

                return Promise.all(requests);
            }).then(countries =>
                this.setState({countries})
            ).catch(error => {
                console.log(error);
            });
        }

        countryClicked = (countryId) => {
            this.setState({
                ...this.state,
                selectedCountryId: countryId
            });
        };

        render() {
            return (
                <Fragment>
                    <Row style={{width: '100%'}}>
                        <Col xs={3} className="ml-5">
                            <Blog>
                                {this.state.countries.map(country => (
                                    <Countries
                                        key={country.alpha3Code}
                                        name={country.name}
                                        clicked={() => this.countryClicked(country.alpha3Code)}
                                        />
                                    ))}
                            </Blog>
                        </Col>
                        <Col xs={8} className="ml-4">
                                <Info countryId={this.state.selectedCountryId}/>
                        </Col>
                    </Row>
                </Fragment>
            )
        }
}

export default Country;