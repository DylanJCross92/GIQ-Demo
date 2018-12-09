import React, {Component} from 'react'

export default class  PopupWrapper extends Component {
    ComponentDidMount(){
            $(window).trigger('resize')
    }

    render (){
        return (
            <div className='wrapper'>
                {this.props.children}
            </div>
        )
    }

}