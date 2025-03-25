import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './config/firebase';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import UserScreen from './screens/UserScreen';
import HospitalScreen from './screens/HospitalScreen';
import MechanicScreen from './screens/MechanicScreen';
import AdminScreen from './screens/AdminScreen';
import { Button } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // User is logged in, fetch their role from Firestore
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          setRole(userDoc.data().role);
        }
        setUser(currentUser);
      } else {
        // User is logged out
        setUser(null);
        setRole(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async (navigation) => {
    try {
      await signOut(auth);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          // User is logged in, show the appropriate screen based on role
          <>
            {role === 'user' && (
              <Stack.Screen
                name="User"
                options={{
                  headerRight: () => (
                    <Button
                      title="Logout"
                      onPress={() => handleLogout(navigation)}
                    />
                  ),
                }}
              >
                {(props) => <UserScreen {...props} />}
              </Stack.Screen>
            )}
            {role === 'hospital' && (
              <Stack.Screen
                name="Hospital"
                options={{
                  headerRight: () => (
                    <Button
                      title="Logout"
                      onPress={() => handleLogout(navigation)}
                    />
                  ),
                }}
              >
                {(props) => <HospitalScreen {...props} />}
              </Stack.Screen>
            )}
            {role === 'mechanic' && (
              <Stack.Screen
                name="Mechanic"
                options={{
                  headerRight: () => (
                    <Button
                      title="Logout"
                      onPress={() => handleLogout(navigation)}
                    />
                  ),
                }}
              >
                {(props) => <MechanicScreen {...props} />}
              </Stack.Screen>
            )}
            {role === 'admin' && (
              <Stack.Screen
                name="Admin"
                options={{
                  headerRight: () => (
                    <Button
                      title="Logout"
                      onPress={() => handleLogout(navigation)}
                    />
                  ),
                }}
              >
                {(props) => <AdminScreen {...props} />}
              </Stack.Screen>
            )}
          </>
        ) : (
          // User is not logged in, show login/signup screens
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}