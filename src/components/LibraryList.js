import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';


// ccs [Component Class]  shortcut
class LibraryList extends Component {
    renderItem(library) {
        return <ListItem library={library} />;
    }

    render() {
        // console.log(this.props)
        return(
            <FlatList
            data={this.props.libraries}
            renderItem={this.renderItem}
            keyExtractor={(library) => library.id}
            />
        );
    }
}

//  sl [Stateless Component]  shortcut
const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);