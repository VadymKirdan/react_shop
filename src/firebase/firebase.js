import * as firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyD_wZFu08ohPauPooGlg_wCO3zUqdjMVTc",
    authDomain: "react-shop-4bee5.firebaseapp.com",
    databaseURL: "https://react-shop-4bee5.firebaseio.com",
    projectId: "react-shop-4bee5",
    storageBucket: "react-shop-4bee5.appspot.com",
    messagingSenderId: "1098923084523"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

/*firebase.database().ref().set({
    name: 'Vad',
    age: 25,
    isSingle: true,
    stressLevel: 6,
    location: {
        city: 'Atlanta',
        country: 'USA'
    },
    job: {
        title: 'Software Engineer',
        company: 'Facebook'
    }
});*/

/*firebase.database().ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});*/


/*firebase.database().ref('products').on('value', (snapshot) => {
    let products = [];

    snapshot.forEach((childSnapshot) => {

        let item = childSnapshot.val();
        item.id = childSnapshot.key;

        products.push(item);
    });

   // console.log(products);
});

firebase.database().ref('products').on('child_changed', (snapshot) => {
    console.log(snapshot.key);
    console.log(snapshot.val());
});*/



/*firebase.database().ref('products').push({
    type: 'mobile',
    name: 'LG',
    model: 'r1',
    price: 7000
});
*/
/*firebase.database().ref('attributes').set({
    height: 172,
    weight: 86
}).then(()=>{
    console.log('Success!');
}).catch((e)=>{
    console.log('Something went wrong', e);
});*/

/*firebase.database().ref('isSingle').remove()
.then(()=>{
    console.log('removed successfully');
}).catch((e)=>{
    console.log('remove failed', e);
})

firebase.database().ref().update({
    stressLevel: 9,
    'location/city': 'Seattle',
    'job/company': 'Amazon'
});*/