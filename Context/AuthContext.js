import React, { useReducer, createContext } from "react";

export const AuthContext = createContext();

const initialState = {
  username: "",
  isLogged: false,
  friends: [],
  chats: [],
  languge_speak: [],
  languge_learn: [],
  userRate: 0,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogged: true,
        username: action.payload.username,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogged: false,
        username: "",
        friends: [],
        chats: [],
        languages: [],
        userRate: 0,
      };
    case "ADD_FRIEND":
      return {
        ...state,
        friends: [...state.friends, action.payload],
      };
    case "ADD_CHAT":
      return {
        ...state,
        chats: [...state.chats, action.payload],
      };
    case "ADD_LANGUAGE":
      return {
        ...state,
        languages: [...state.languages, action.payload],
      };
    case "UPDATE_USER_RATE":
      return {
        ...state,
        userRate: action.payload,
      };
    default:
      return state;
  }
};

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (user) => {
    dispatch({ type: "LOGIN", payload: user });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const addFriend = (friend) => {
    dispatch({ type: "ADD_FRIEND", payload: friend });
  };

  const addChat = (chat) => {
    dispatch({ type: "ADD_CHAT", payload: chat });
  };

  const addLanguage = (language) => {
    dispatch({ type: "ADD_LANGUAGE", payload: language });
  };

  const updateUserRate = (rate) => {
    dispatch({ type: "UPDATE_USER_RATE", payload: rate });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
        addFriend,
        addChat,
        addLanguage,
        updateUserRate,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
