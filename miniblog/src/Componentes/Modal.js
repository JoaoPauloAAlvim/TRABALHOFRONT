import React from "react";
import styled from "styled-components";

export default class Modal extends react.Component {
    state = {
        active: null,
        buttonClose: null
    }

    onChangeActive = (event) => {
        this.setState({ active: event.target.value });
      };

    onChangeActive = (event) => {
        this.setState({ buttonClose: event.target.value });
      };

    if(active = true){
        return (

            <div>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}