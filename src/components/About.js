import React, { Component } from 'react';
import person from '../img/person.jpg';

export default class About extends Component {
    render() {
        return (
            <div className="main-container">
                <h1>About Me</h1>
                <img id="personImage" src={person} alt="person" />
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum nisl sit amet nisl sodales, ac scelerisque ex elementum. Curabitur ornare nisi nec neque sodales varius. Quisque nec pharetra lectus. Phasellus dignissim venenatis ante, quis sollicitudin arcu ornare ac. Vivamus imperdiet ante ante, eu aliquet ante volutpat sed. Pellentesque purus sapien, vehicula auctor justo eu, dapibus finibus enim. Nulla ut lobortis metus. Aliquam tempus varius finibus. Nullam nisi ligula, lacinia ac sodales ut, tristique eget tortor. Sed id mauris sagittis, finibus leo elementum, rutrum felis.
            </span>
            </div>
        )
    }
}
