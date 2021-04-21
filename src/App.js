import React from "react";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";

import { Button } from "react-bootstrap";
import "./style.css";

// import { render } from "react-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import { firebaseConfig } from "./base";

export const App = () => {

  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>

      <div>
        <Button
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign In with Google
        </Button>
        <Button
          data-testid="signin-anon"
          onClick={() => {
            firebase.auth().signInAnonymously();
          }}
        >
          Sign In Anonymously
        </Button>
        <Button
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          Sign Out
        </Button>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return (
              <pre style={{ height: 600, overflow: "auto" }}>
  <br />              {JSON.stringify({ "aclvl": 0, "usilist": [ "usi001", "usi002", "usi003", "usi004" ] }, null, 2)}
              </pre>
        //        {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
            );
          }}
        </FirebaseAuthConsumer>
        <div>
          <IfFirebaseAuthed>
            {() => {
              return <div>You are authenticated</div>;
            }}
          </IfFirebaseAuthed>
          <IfFirebaseAuthedAnd
            filter={({ providerId }) => providerId !== "anonymous"}
          >
            {({ providerId }) => {
              return <div>You are authenticated with {providerId}</div>;
            }}
          </IfFirebaseAuthedAnd>
        </div>
      </div>

    </FirebaseAuthProvider>
  );
};

const testfn = (apiRecords) => {
  var rr = 0, cc = 0, ss = 0, pp = 0;
  var ccMatch = false, ssMatch = false, ppMatch = false;

  while (rr < apiRecords.length) {
    if (losUIjson.length < 0) {
      losUIjson.push(JSON.parse(JSON.stringify(los00))); cc = 0; ss = 0; pp = 0;
    }
    else {
      ccMatch = false; cc = 0;
      while ( (!ccMatch) && (cc < losUIjson.length) ) {

        if (apiRecords[rr].category == losUIjson[cc].CategoryTitle) {

        // match subCat, period

        }
        else {
          cc++;      
        }
      }
      if (!ccMatch) {
        losUIjson.push(JSON.parse(JSON.stringify(los00))); cc = losUIjson.length-1; ss = 0; pp = 0;
      } 
    }

    losUIjson[cc].CategoryTitle = apiRecords[rr].category;

    rr++;
  }



};
