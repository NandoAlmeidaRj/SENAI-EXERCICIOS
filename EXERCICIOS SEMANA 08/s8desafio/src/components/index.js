import React, { Component } from "react";
    class feed extends Component{
        render(){
            return(
                <div key={this.props.id}>   

                <h3>{this.props.username}</h3>
                <a>{this.props.curtidas}</a>

                </div>
            )

        }
    }

    export default feed;