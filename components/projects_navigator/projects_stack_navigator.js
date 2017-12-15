import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import ProjectsIndexContainer from '../projects/projects_index_container';
import React from 'react';
import { View, Text, Button } from 'react-native';
import NoteShow from '../note/note_show';
import NotesNavigator from '../notes_navigator/notes_navigator';
import NotesIndex from '../note/notes_index';

//won't need notes
export default (projects,notes) => {

  // const data = [{id: 3, name: 'my first project'}, {id: 4, name: 'a second project'}];
  const ProjectsScreen = ({ navigation }) => (
    <ProjectsIndexContainer navigation={navigation} />
  );

  //this needs to be only the notes/files from a particular project, not the whole notes index from a user
  //also might not need notes index container
  //need to pass in the project to notesindex component
  const ProjectScreen = (project) => {
    return ({navigation}) => (
      <NotesIndex nav={navigation} project={project} />
    );
  };

  const NoteScreen = () => {
      return <NoteShow/>
  };

  let navigatorOptions = {
    Projects: {
      screen: ProjectsScreen,
      navigationOptions: {
        headerTitle: 'Projects'
      }
    }
  };

  //might need to loop through each project, then get each note from the project to populate the navOptions
  // notes.forEach(note => {
  //   const stack = {
  //     screen: NoteScreen,
  //     navigationOptions: {
  //       headerTitle: 'Note'
  //     }
  //   };
  //   navigatorOptions[`Note${note.id}`] = stack;
  // });

  projects.forEach(project => {
    const projstack = {
      screen: ProjectScreen(project),
      navigationOptions: {
        headerTitle: 'Project'
      }
    };

    //populate stack navigator with all notes
    project.notes.forEach(note => {
      const notestack = {
        screen: NoteScreen,
        navigationOptions: {
          headerTitle: 'Note'
        }
      };
        navigatorOptions[`Note${note.id}`] = notestack;
      });

    navigatorOptions[`Project${project.id}`] = projstack;
  });

  //need to import StackNavigator not the function
  return StackNavigator(navigatorOptions);
};
