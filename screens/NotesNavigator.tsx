import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SavedNotesScreen } from './NotesScreen';
import { NoteScreen } from './Note';
import { colors } from '../styles';

const NotesStack = createNativeStackNavigator();

export default function () {
    return (
        <NotesStack.Navigator
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor: colors.dark,
                    },
                    headerTintColor: colors.white,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 24
                    },
                }
            }
        >
            <NotesStack.Screen
                name='Notas Salvas'
                component={SavedNotesScreen}
            />
            <NotesStack.Screen
                name='Nota'
                component={NoteScreen}
                //@ts-ignore
                options={() => ({ title: '' })}
            />
        </NotesStack.Navigator>
    );
}