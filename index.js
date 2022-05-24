const store = require('./app/store');
const { icecreamActions } = require('./features/icecream/icecreamSlice');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const fetchUsers = require('./features/users/userSlice').fetchUsers;

console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => {console.log('Updated State', store.getState())});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(3));
// store.dispatch(icecreamActions.restocked(3));
// store.dispatch(icecreamActions.restocked(3));
// store.dispatch(icecreamActions.restocked(3));

// unsubscribe();