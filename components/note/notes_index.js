import React from 'react';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import { List, ListItem } from 'react-native-elements';

export default class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
    this._onPressItem = this._onPressItem.bind(this);
  }

  _onPressItem(id) {
    const key = `Note${id}`;
    console.log(key)
    return () => this.props.nav.navigate(key);
  }

  render() {
    const notes = [{id: 3, name: 'note 3'}, {id: 4, name: 'note 2'}];

    // if(!this.props.projects.length) return null;
    return (
      <List containerStyle={{marginBottom: 20}}>
        {
        notes.map((item, i) => (
            <ListItem
              key={i}
              title={item.name}
              onPress={this._onPressItem(item.id)}
            />
          ))
        }
      </List>
    );
  }
}
