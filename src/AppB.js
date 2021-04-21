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

var apiRecords = [{
    "staffUsi": 25040,
    "category": "FOREVER LEARNER",
    "subCategory": "Always seeking opportunities to continuously learn and grow",
    "year": 2019,
    "districtMin": 1,
    "districtMax": 4,
    "districtAvg": 2.86,
    "score": 3,
    "measureDate": "2019-11-12T00:00:00"
  },
  {
    "staffUsi": 25040,
    "category": "FOREVER LEARNER",
    "subCategory": "Being joyful, reflective, transparent, and deliberate in applying our learning to change the world",
    "year": 2019,
    "districtMin": 1,
    "districtMax": 4,
    "districtAvg": 3.04,
    "score": 3,
    "measureDate": "2019-11-12T00:00:00"
  },
  {
    "staffUsi": 25040,
    "category": "FOREVER LEARNER",
    "subCategory": "Catalyzing innovation, embracing failing forward",
    "year": 2019,
    "districtMin": 1,
    "districtMax": 4,
    "districtAvg": 2.6,
    "score": 3,
    "measureDate": "2019-11-12T00:00:00"
  },
  {
    "staffUsi": 25040,
    "category": "FOREVER LEARNER",
    "subCategory": "Thoughtfully disrupting the status quo",
    "year": 2019,
    "districtMin": 1,
    "districtMax": 4,
    "districtAvg": 2.64,
    "score": 2,
    "measureDate": "2019-11-12T00:00:00"
  },
  {
    "staffUsi": 25040,
    "category": "PROMISE 2 PURPOSE INVESTOR",
    "subCategory": "Consistently displaying a sense of possibility, optimism, and hope",
    "year": 2019,
    "districtMin": 1,
    "districtMax": 4,
    "districtAvg": 3.1,
    "score": 3,
    "measureDate": "2019-11-12T00:00:00"
  },
  {
    "staffUsi": 25040,
    "category": "PROMISE 2 PURPOSE INVESTOR",
    "subCategory": "Distributing leadership and empowering others",
    "year": 2019,
    "districtMin": 1,
    "districtMax": 4,
    "districtAvg": 2.51,
    "score": 2,
    "measureDate": "2019-11-12T00:00:00"
  },
  {
    "staffUsi": 25040,
    "category": "PROMISE 2 PURPOSE INVESTOR",
    "subCategory": "Inspiring, coaching, encouraging, and developing others",
    "year": 2019,
    "districtMin": 1,
    "districtMax": 4,
    "districtAvg": 2.49,
    "score": 3,
    "measureDate": "2019-11-12T00:00:00"
  },
  {
    "staffUsi": 25040,
    "category": "PROMISE 2 PURPOSE INVESTOR",
    "subCategory": "Recognizing excellence and celebrating progress",
    "year": 2019,
    "districtMin": 1,
    "districtMax": 4,
    "districtAvg": 2.68,
    "score": 2,
    "measureDate": "2019-11-12T00:00:00"
  },
  {
    "staffUsi": 25040,
    "category": "PROMISE 2 PURPOSE INVESTOR",
    "subCategory": "Working interdependently to ignite and achieve our shared vision",
    "year": 2019,
    "districtMin": 1,
    "districtMax": 4,
    "districtAvg": 2.65,
    "score": 3,
    "measureDate": "2019-11-12T00:00:00"
  },
  {
    "staffUsi": 25040,
    "category": "RELATIONSHIP DRIVEN",
    "subCategory": "Always thinking “we” and not “me”",
    "year": 2019,
    "districtMin": 2,
    "districtMax": 4,
    "districtAvg": 3.1,
    "score": 3,
    "measureDate": "2019-11-12T00:00:00"
  },
  {
    "staffUsi": 25040,
    "category": "RELATIONSHIP DRIVEN",
    "subCategory": "Being culturally responsive and celebrating our rich diversity",
    "year": 2019,
    "districtMin": 1,
    "districtMax": 4,
    "districtAvg": 2.45,
    "score": 3,
    "measureDate": "2019-11-12T00:00:00"
  },
  {
    "staffUsi": 25040,
    "category": "RELATIONSHIP DRIVEN",
    "subCategory": "Establishing a culture of trust, partnership, and collaboration",
    "year": 2019,
    "districtMin": 1,
    "districtMax": 4,
    "districtAvg": 2.94,
    "score": 2,
    "measureDate": "2019-11-12T00:00:00"
  }
];
var losUIjson = [];
var los00 = {
      "CategoryTitle": "",
      "subCatCriteria": [{
        "subCatNotes": "",
        "subCatTitle": "",
        "scoresByPeriod": [{
          "period": "",
          "staffScore": 0,
          "districtAvg": 0,
          "districtMax": 0
        }]}]};

var ii = 0;
var jj = 0;
var kk = 0;
var xx = 0;

/*
            {
            "staffUsi": 25040,
            "category": "FOREVER LEARNER",
            "subCategory": "Always seeking opportunities to continuously learn and grow",
            "year": 2019,
            "districtMin": 1,
            "districtMax": 4,
            "districtAvg": 2.86,
            "score": 3,
            "measureDate": "2019-11-12T00:00:00"
            },
*/

var xx = 0; var ii = 0; var jj = 0; var kk = 0;
while (xx < apiRecords.length) {

if (xx > 0) {
    if (apiRecords[xx].category != apiRecords[xx - 1].category) {
  losUIjson.push({
      "CategoryTitle": "",
      "subCatCriteria": [{
        "subCatNotes": "",
        "subCatTitle": "",
        "scoresByPeriod": [{
          "period": "",
          "staffScore": 0,
          "districtAvg": 0,
          "districtMax": 0
        }]}]});      
  ii++; jj = 0; kk = 0;
    }
    else if (apiRecords[xx].subCategory != apiRecords[xx - 1].subCategory) {
      losUIjson[ii].subCatCriteria.push({
        "subCatTitle": "",
        "scoresByPeriod": [{
          "period": "",
          "staffScore": 0,
          "districtAvg": 0,
          "districtMax": 0
        }]});
      jj++;  kk = 0;
    }
    else if (apiRecords[xx].year != apiRecords[xx-1].year) {
      losUIjson[ii].subCatCriteria[jj].scoresByPeriod.push({
          "period": "",
          "staffScore": 0,
          "districtAvg": 0,
          "districtMax": 0
        });
      kk++;
    }
}
else {
  losUIjson.push({"CategoryTitle": "",
      "subCatCriteria": [{
        "subCatNotes": "",
        "subCatTitle": "",
        "scoresByPeriod": [{
          "period": "",
          "staffScore": 0,
          "districtAvg": 0,
          "districtMax": 0
        }]}]});
}

  losUIjson[ii].CategoryTitle = apiRecords[xx].category;
  losUIjson[ii].subCatCriteria[jj].subCatTitle = apiRecords[xx].subCategory;
  losUIjson[ii].subCatCriteria[jj].subCatNotes = apiRecords[xx].subCategory;
  losUIjson[ii].subCatCriteria[jj].scoresByPeriod[kk].period = apiRecords[xx].year.toString();
  losUIjson[ii].subCatCriteria[jj].scoresByPeriod[kk].staffScore = apiRecords[xx].score;
  losUIjson[ii].subCatCriteria[jj].scoresByPeriod[kk].districtAvg = apiRecords[xx].districtAvg;
  losUIjson[ii].subCatCriteria[jj].scoresByPeriod[kk].districtMax = apiRecords[xx].districtMax;
console.log("losUIjson:: ", losUIjson);  

  xx++;
}

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
  <br />              {JSON.stringify({ losUIjson}, null, 2)}
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