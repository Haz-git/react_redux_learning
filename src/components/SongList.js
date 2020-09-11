import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className='item' key={song.title}>
                    <div className='right floated content'>
                        <button className='ui button primary'>
                            Select
                        </button>
                    </div>
                    <div className='content'>{song.title}</div>
                </div>
            )
        })
    }

    render() {
        return <div className='ui divided list'>{this.renderList()}</div>
    }
}

//convention naming == mapStateToProps

//This function configures the connect to talk to the provider to retrieve the current state, by which mapStateToProps() will pass the state object as a prop to this class component...
const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);